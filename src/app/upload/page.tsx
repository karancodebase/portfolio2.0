"use client";

import { useState } from "react";

export default function UploadPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setMessage(null);
		setError(null);

		const form = event.currentTarget;
		const formData = new FormData(form);
		const file = formData.get("file");
		if (!file || !(file instanceof File) || file.size === 0) {
			setError("Please choose a file to upload.");
			return;
		}

		setIsSubmitting(true);
		try {
			const response = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			});

			const result = await response.json();
			if (!response.ok || !result?.success) {
				throw new Error(result?.error || "Upload failed");
			}

			setMessage("Your file was sent successfully.");
			form.reset();
		} catch (err: unknown) {
			const msg = err instanceof Error ? err.message : "Something went wrong";
			setError(msg);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="mx-auto max-w-md p-6">
			<h1 className="text-2xl font-semibold mb-4">Upload a file</h1>
			<form id="upload-form" onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
				<div>
					<label htmlFor="file" className="block text-sm font-medium mb-1">Choose file</label>
					<input
						id="file"
						name="file"
						type="file"
						className="block w-full"
						required
						aria-invalid={error ? true : false}
						aria-describedby={error ? "file-error" : undefined}
					/>
					{error && <p id="file-error" className="mt-2 text-red-600">{error}</p>}
				</div>
				<button
					id="submit-upload"
					type="submit"
					disabled={isSubmitting}
					className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
				>
					{isSubmitting ? "Sending..." : "Send File"}
				</button>
			</form>
			{message && <p className="mt-4 text-green-600">{message}</p>}
		</div>
	);
} 