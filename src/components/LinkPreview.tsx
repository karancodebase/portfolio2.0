"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="w-full max-w-7xl mt-6 mx-auto px-4 md:px-8">
      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-3xl text-center mb-6">
      Built with {" "}
        <LinkPreview url="https://www.jaydatt.xyz/about" className="font-bold">
          me
        </LinkPreview>{" "}
        where{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind
        </LinkPreview>{" "}
        ,{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        ,{" "}
        <LinkPreview url="https://react.dev" className="font-bold">
          React
        </LinkPreview>{" "}
        and {" "}
        <LinkPreview url="https://www.alchemy.com/" className="font-bold">
          Web3
        </LinkPreview>{" "}
        collide to create sleek, seamless, and stunning experiences.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-4xl text-center mb-6">
      Bugs? {" "}
        <LinkPreview url="https://www.jaydatt.xyz/work" className="font-bold">
          squashed
        </LinkPreview>{" "}
        Clean Code?{" "}
        <LinkPreview url="https://www.jaydatt.xyz/projects" className="font-bold">
          Always
        </LinkPreview>{" "}
        Need tweaks?{" "}
        <LinkPreview url="https://www.jaydatt.xyz/contact" className="font-bold">
          Hit me up.
        </LinkPreview>  
      </p>
    </div>
  );
}
