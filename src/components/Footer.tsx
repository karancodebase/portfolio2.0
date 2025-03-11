"use client";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [time, setTime] = useState(""); // Start empty to avoid hydration mismatch

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime(); // Set initial time after mounting

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="mb-10 lg:w-[95vw] w-[90vw]">
      <div className="flex justify-between p-4">
        <div>
          <div className="flex gap-4 mb-2">
            <Link href="https://twitter.com/jaydattkaran" target="_blank">
              <Twitter className="w-6 lg:w-8 h-6 lg:h-8 hover:text-neutral-400 transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jaydattkaran"
              target="_blank"
            >
              <Linkedin className="w-6 lg:w-8 h-6 lg:h-8 hover:text-neutral-400 transition" />
            </Link>
            <Link href="https://github.com/jaydattkaran" target="_blank">
              <Github className="w-6 lg:w-8 h-6 lg:h-8 hover:text-neutral-400 transition" />
            </Link>
          </div>
          <div className="md:text-lg text-sm">© 2025 All rights reserved.</div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex justify-end md:text-lg md:tracking-widest font-semibold">
            {" "}
            {time}
          </div>
          <div className="md:text-lg text-sm md:tracking-widest font-semibold">
           Site Designed with ❤️‍🔥
          </div>
        </div>
      </div>
    </div>
  );
};
