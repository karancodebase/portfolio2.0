import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailStyles = {
  container: "font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;",
  header: "color: #2D3748; margin-bottom: 10px;",
  messageBox:
    "background-color: #F7FAFC; padding: 10px; border-radius: 8px; margin: 15px 5px; border: 1px solid #E2E8F0;",
  message:
    "white-space: pre-line; background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px; border: 1px solid #E2E8F0;",
  metadata: "color: #4A5568; margin: 5px 0;",
  footer: "color: #718096; font-size: 1rem; margin-top: 10px;",
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || "",
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, message } = body;

    if ( !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    console.log("Recieved", body )

    const formattedMessage = `
      Dear Jaydatt,

      I hope this message finds you well. 

      ${message}

      Best regards,   
      ${email}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "karanjaydatt03@gmail.com",
      subject: `New Message from ${email}`,
      html: `
        <div style="${emailStyles.container}">
          <div style="${emailStyles.header}">
            <h2>You've received a new message!</h2>
          </div>
          <div style="${emailStyles.messageBox}">
            <div style="${emailStyles.metadata}">
              <strong>From:</strong> (${email})
            </div>
            <div style="${emailStyles.message}">
              ${formattedMessage}
            </div>
          </div>
          <div style="${emailStyles.footer}">
            <p>This message was sent via Nodemailer</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
