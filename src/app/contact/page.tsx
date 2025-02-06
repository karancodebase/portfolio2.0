"use client"
import React, { useState, useEffect } from 'react';
import { Mail, Twitter, Linkedin, Github, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const Toast = ({ message, type }: { message: string; type: 'success' | 'error' }) => (
    <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg border flex items-center gap-2 animate-in slide-in-from-right-full duration-300 ${type === 'success' ? 'bg-green-900 border-green-700 text-white' : 'bg-red-900 border-red-700 text-white'}`}>
        {type === 'success' ? <CheckCircle className="w-5 h-5 text-green-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
        <span>{message}</span>
    </div>
);

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (toast) {
            timeoutId = setTimeout(() => setToast(null), 5000);
        }
        return () => timeoutId && clearTimeout(timeoutId);
    }, [toast]);

    const validateForm = () => {
        const newErrors: FormErrors = {};
        if (formData.name.length < 2) newErrors.name = 'If your name’s under 2 letters, so is my reply—0. 👻';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email? Try again. Empty boxes don’t work! 📭';
        if (formData.message.length < 10) newErrors.message = 'If you’re this curious, give me atleast 10 words.💬!';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Something went wrong');
            setToast({ message: 'Message sent successfully!', type: 'success' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error: unknown) {
            if (error instanceof Error) {
                setToast({ message: error.message, type: 'error' });
            } else {
                setToast({ message: 'An unexpected error occurred', type: 'error' });
            }
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4 py-16 text-white min-h-screen">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">Let&apos;s Connect!</h1>

            <p className="text-zinc-400 text-center mb-8 text-sm sm:text-base leading-relaxed">
                Whether you have a burning question, a nifty project, or just want to say hello, I&apos;m always up for a chat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-300 transition-all flex flex-col items-center text-center">
                    <Mail className="w-8 h-8 text-blue-300 mb-2" />
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Email</h2>
                    <Link
                        href="mailto:karanjaydatt03@gmail.com"
                        className="text-gray-400 hover:underline text-sm sm:text-base"
                    >
                        karanjaydatt03@gmail.com
                    </Link>
                </div>


                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-300 transition-all flex flex-col items-center text-center">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">Find me on</h2>
                    <div className="flex space-x-6">
                        <Link href="https://twitter.com/jaydattkaran" target="_blank">
                            <Twitter className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/jaydattkaran" target="_blank">
                            <Linkedin className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />
                        </Link>
                        <Link href="https://github.com/jaydattkaran" target="_blank">
                            <Github className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />
                        </Link>
                    </div>
                </div>
            </div>





            <form onSubmit={handleSubmit} className="space-y-6 md:w-full w-[20rem] bg-zinc-900 md:p-6 p-6 mt-10 rounded-xl border border-zinc-600">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-200">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-200">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-200">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your message here" />
                    {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send Message'}</Button>
            </form>

            <p className="text-zinc-500 mt-12 text-center text-sm sm:text-base leading-relaxed">
                Fun fact: My code runs on coffee &amp; curiosity. Let&apos;s chat about
                <br />
                AI, blockchain, or any crazy idea!
            </p>


            <div className="mt-12">
                <Link
                    href="/"
                    className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-lg transition text-sm sm:text-base"
                >
                    &larr; Back to Home
                </Link>
            </div>



            {toast && <Toast message={toast.message} type={toast.type} />}
        </main>
    );
};

export default ContactPage;