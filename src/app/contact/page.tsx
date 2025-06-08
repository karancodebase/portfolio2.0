"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Input } from "../../components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Poppins } from "next/font/google";
import { Edu_SA_Beginner } from "next/font/google";
import { Delius } from "next/font/google";

const eduBeginner = Edu_SA_Beginner({
  weight: "400",
  subsets: ["latin"],
});
const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});


const poppinBold = Poppins({
  weight: "800",
  preload: false,
});
interface FormData {
  email: string;
  message: string;
}

interface FormErrors {
  email?: string;
  message?: string;
}

const Toast = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error";
}) => (
  <div
    className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg  flex items-center gap-2 animate-in slide-in-from-right-full duration-300 ${
      type === "success"
        ? "bg-green-900 -green-700 text-white"
        : "bg-red-900 -red-700 text-white"
    }`}
  >
    {type === "success" ? (
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <XCircle className="w-5 h-5 text-red-400" />
    )}
    <span>{message}</span>
  </div>
);

const Contact = () => {


  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (toast) {
      timeoutId = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [toast]);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email? Try again. Empty boxes don’t work! 📭";
    if (formData.message.length < 10)
      newErrors.message =
        "If you’re this curious, give me atleast 10 words.💬!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message ?? "Something went wrong");
      setToast({ message: "Message sent successfully!", type: "success" });
      setFormData({ email: "", message: "" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setToast({ message: error.message, type: "error" });
      } else {
        setToast({ message: "An unexpected error occured", type: "error" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${delius.className} md:py-10`}>
      {/* links */}
      <section className="md:px-4 py-4 -b">
        <div
          className={`${poppinBold.className}  md:text-4xl text-2xl text-neutral-300`}
        >
          Let&apos;s Connect & Cook Up Some Code Magic
        </div>

        <div className="flex flex-col gap-2 md:mt-4 mt-2 md:text-xl">
          <div>
            <span className="text-neutral-400">
              Got a brainwave at 2AM? A startup dream? Or just vibing with clean
              code and big ideas?
            </span>{" "}
            <br />
            <span className="text-neutral-400">I&apos;m your guy — hit me up.</span>
          </div>
          <div className="text-neutral-300 md:mt-4 mt-2">
            📩 Shoot me a mail → <Link href="mailto:karanjaydatt03@gmail.com" className="dark:bg-neutral-800 bg-neutral-400 text-[0.9em] dark:hover:text-neutral-400 hover:text-neutral-700 duration-200 px-2 py-1 rounded-lg">karanjaydatt03@gmail.com</Link> 
          </div>
          <div className="text-neutral-300">
            🌐 Stalk me here →{" "}
            <Link
              href="https://www.linkedin.com/in/jaydattkaran"
              target="_blank"
              rel="noopener noreferrer"
              className=" social-link text-cyan-500 hover:text-cyan-700 transition duration-200"
            >
              Linkedin{" "}
            </Link>
            |{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/karandefinitely"
              className="social-link text-cyan-500 hover:text-cyan-700 transition duration-200"
            >
              {" "}
              Twitter{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* form */}
      <section className="md:px-4">
        <div className="flex flex-col gap-2 md:text-xl">
          <div className="text-neutral-300">
            🛠 Code playground →{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/karancodebase"
              className="social-link text-cyan-500 hover:text-cyan-700
            duration-200"
            >
              {" "}
              Github{" "}
            </Link>
          </div>
        
          <div className="md:px-10">
            <form
              onSubmit={handleSubmit}
              className=" glass-box space-y-6 bg-transparent p-6 mt-10 rounded-xl "
            >
              <div className="space-y-2">
                <label className="block font-medium">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border -input bg-transparent shadow-sm transition-colors file:-0 file:bg-transparent file:text-md file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Type your message here"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex justify-center">
                <Button variant="default" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
        {toast && <Toast message={toast.message} type={toast.type} />}
      </section>

      {/* open to */}
      <section className="px-2 mt-8">
        <div className=" md:text-4xl text-2xl font-semibold text-neutral-300">
        What I&apos;m Down For:
        </div>
        <div className="flex flex-col gap-2 mt-2 md:px-10 md:pb-2 md:text-xl md:max-w-[90vw]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="">
              <AccordionTrigger>
                ☕ Big Ideas & Caffeinated Chats
              </AccordionTrigger>
              <AccordionContent className={`${eduBeginner.className} tracking-wide md:text-xl text-neutral-400`}>
                Got a wild thought at 3am? Let&apos;s riff on it. From AI to Web3
                rabbit holes, I&apos;m always game for convos that bend brains and
                spark new stuff.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="">
              <AccordionTrigger>
                🧠 Tech Deep Dives & Futurist Rants
              </AccordionTrigger>
              <AccordionContent className={`${eduBeginner.className} tracking-wide md:text-xl text-neutral-400`}>
                Smart contracts, autonomous agents, AI everything — I live for
                this. Let&apos;s break down what&apos;s next and how to build for it
                before it goes mainstream.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="">
              <AccordionTrigger>
                🚀 Collabs That Actually Push the Needle
              </AccordionTrigger>
             <AccordionContent className={`${eduBeginner.className} tracking-wide md:text-xl text-neutral-400`}>
                Tired of basic? Same. I&apos;m into projects that disrupt, rewire,
                and flip the script. DApps, AI tools, startup MVPs — if it’s
                bold, I&apos;m in.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="">
              <AccordionTrigger>📬 Real Talk, Real Help</AccordionTrigger>
             <AccordionContent className={`${eduBeginner.className} tracking-wide md:text-xl text-neutral-400`}>
                Stuck on tech? Pivoting your startup? Or just need a fresh POV?
                Let&apos;s vibe. I&apos;m here for code jams, founder therapy, or just
                geeking out on life.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Contact;
