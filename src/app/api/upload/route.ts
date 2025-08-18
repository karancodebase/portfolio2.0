import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getBooleanFromEnv(value: string | undefined, fallback: boolean): boolean {
	if (value === undefined) return fallback;
	const normalized = value.trim().toLowerCase();
	return normalized === "1" || normalized === "true" || normalized === "yes";
}

function sanitizeFileName(unsafeName: string): string {
	const trimmed = unsafeName.trim();
	const sanitized = trimmed.replace(/[^a-zA-Z0-9._-]/g, "_");
	return sanitized || "attachment";
}

type FileLike = {
	arrayBuffer: () => Promise<ArrayBuffer>;
	name?: string;
	size?: number;
	type?: string;
};

function isFileLike(value: unknown): value is FileLike {
	return (
		!!value &&
		typeof value === "object" &&
		"arrayBuffer" in value &&
		typeof (value as { arrayBuffer?: unknown }).arrayBuffer === "function"
	);
}

export async function POST(request: Request) {
	try {
		const formData = await request.formData();
		const uploaded = formData.get("file");

		if (!isFileLike(uploaded)) {
			return NextResponse.json(
				{ success: false, error: "No file provided. Ensure the form field is named 'file'." },
				{ status: 400 }
			);
		}

		const fileArrayBuffer = await uploaded.arrayBuffer();
		const fileBuffer = Buffer.from(fileArrayBuffer);
		const fileSize = typeof uploaded.size === "number" ? uploaded.size : fileBuffer.length;
		const filename = sanitizeFileName(uploaded.name || "attachment");
		const contentType = uploaded.type || "application/octet-stream";

		const maxBytesEnv = process.env.MAX_UPLOAD_BYTES || "25000000"; // ~25MB
		const maxBytes = Number.parseInt(maxBytesEnv, 10);
		if (Number.isFinite(maxBytes) && fileSize > maxBytes) {
			return NextResponse.json(
				{ success: false, error: `File too large. Limit is ${maxBytes} bytes.` },
				{ status: 413 }
			);
		}

		// Read env with fallbacks for convenience (supports EMAIL_USER/EMAIL_PASS)
		const smtpHost = process.env.SMTP_HOST || (process.env.EMAIL_USER ? "smtp.gmail.com" : undefined);
		const smtpPortStr = process.env.SMTP_PORT || (process.env.EMAIL_USER ? "465" : "");
		const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
		const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
		const smtpSecure = getBooleanFromEnv(
			process.env.SMTP_SECURE,
			(smtpPortStr || "") === "465"
		);
		const mailTo = process.env.MAIL_TO || smtpUser || undefined;
		const mailFrom = process.env.MAIL_FROM || smtpUser || undefined;

		if (!smtpHost || !smtpPortStr || !smtpUser || !smtpPass || !mailTo || !mailFrom) {
			return NextResponse.json(
				{ success: false, error: "Email service not configured. Missing SMTP_* or EMAIL_* env vars." },
				{ status: 500 }
			);
		}

		const smtpPort = Number.parseInt(smtpPortStr, 10);

		const transporter = nodemailer.createTransport({
			host: smtpHost,
			port: smtpPort,
			secure: smtpSecure,
			auth: {
				user: smtpUser,
				pass: smtpPass,
			},
		});

		const subject = `New file upload: ${filename}`;
		const textBody = `A new file has been uploaded and is attached.\n\n` +
			`Filename: ${filename}\n` +
			`Size: ${fileSize} bytes\n` +
			`MIME: ${contentType}\n`;

		await transporter.sendMail({
			from: mailFrom,
			to: mailTo,
			subject,
			text: textBody,
			attachments: [
				{
					filename,
					content: fileBuffer,
					contentType,
				},
			],
		});

		return NextResponse.json({ success: true, message: "File sent successfully." });
	} catch (error) {
		console.error("/api/upload error", error);
		return NextResponse.json(
			{ success: false, error: "Unexpected error while processing the upload." },
			{ status: 500 }
		);
	}
} 