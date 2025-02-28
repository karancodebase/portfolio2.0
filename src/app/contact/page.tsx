"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className=" my-16">
      {/* links */}
      <section className="px-4 py-4 -b">
        <div className="py-2 flex flex-row gap-4 -b">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div className="md:text-4xl text-2xl font-bold">Let’s Connect</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:text-xl">
          <div>
            Have an exciting idea? Want to collaborate? Or just up for an
            interesting convo? I’d love to hear from you.
          </div>
          <div>📩 Email: karanjaydatt03@gmail.com</div>
          <div>
            🌍 Find me on:{" "}
            <Link
              href="https://www.linkedin.com/in/jaydattkaran"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold social-link text-cyan-500 hover:text-cyan-700 transition duration-200"
            >
              Linkedin{" "}
            </Link>
            |{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/jaydattkaran"
              className="font-semibold social-link text-cyan-500 hover:text-cyan-700 transition duration-200"
            >
              {" "}
              Twitter{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* form */}
      <section className="px-4 py-4 -b">
        <div className="flex flex-col gap-4 mt-4 md:text-xl">
          <div>
            💻 Want to dive into my projects?{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jaydattkaran"
              className="font-semibold social-link text-cyan-500 hover:text-cyan-700
            duration-200"
            >
              {" "}
              Github{" "}
            </Link>
            <br />
            Check out my GitHub for a closer look at what I’m building. 🚀
          </div>
          <div>Drop a message below, and let’s make something happen.</div>
          <div className="md:px-10 md:py-4">
            <form
              onSubmit={handleSubmit}
              className=" glass-box space-y-6 bg-transparent md:p-6 p-6 mt-10 rounded-xl "
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
      <section className="px-2 py-4">
        <div className="py-2 flex flex-row gap-4 -b">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div className="md:text-4xl text-2xl font-bold">
              💡 What I’m open to:
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:px-10 px-4 md:pb-2 md:text-xl md:max-w-[48vw]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Brainstorming bold ideas over coffee ☕
              </AccordionTrigger>
              <AccordionContent>
                Always up for thought-provoking discussions—whether it&apos;s about
                AI, Web3, or the next big thing. Let&apos;s exchange crazy ideas,
                challenge perspectives, and spark something new.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Exploring Web3, AI, and everything in between
              </AccordionTrigger>
              <AccordionContent>
                Deep diving into the ever-evolving tech landscape. From smart
                contracts to AI-driven automation, I love exploring how emerging
                technologies shape the future. Let’s discuss innovations that
                redefine industries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Collaborations that push the boundaries of innovation
              </AccordionTrigger>
              <AccordionContent>
                Passionate about working on projects that challenge norms and
                push boundaries. Whether it&apos;s a decentralized app, an AI
                experiment, or a disruptive startup idea, I&apos;m all in for
                building something impactful.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Helping you with tech, startups, or just vibing about life
              </AccordionTrigger>
              <AccordionContent>
                Need guidance on tech stacks, startup strategies, or just a
                fresh perspective? I enjoy mentoring, sharing insights, and
                brainstorming solutions that can help you move forward.
                Sometimes, the best ideas come from casual convos!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Contact;
