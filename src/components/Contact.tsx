"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Poppins } from "next/font/google";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
const poppinBold = Poppins({
  weight: "600",
  preload: false,
});

const Contact = () => {
  // Refs to track sections for animation
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lines = document.querySelectorAll(".hero-subtext-liner");

    if (lines.length > 0) {
      gsap.set(lines, { opacity: 0 });

      lines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: index * 0.3 }
        );
      });
    }

    const onSectionEnter = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate title
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1 }
          );
        }
      });
    };

    const observer = new IntersectionObserver(onSectionEnter, {
      threshold: 0.2, // Trigger when 20% of the section is in view
    });

    // Observe the section
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="py-20">
      <div
        ref={titleRef}
        className={`${poppinBold.className} mb-3
          md:text-4xl text-2xl font-extrabold`}
        style={{ opacity: 0 }}
      >
        Let&apos;s chat!
      </div>
      <div className="md:text-xl text-neutral-700 dark:text-neutral-400 text-sm mb-4">
        <span className="hero-subtext-liner">
          Got a cool project or idea? I&apos;m all ears —
        </span>{" "}
        <br />
        <span className="hero-subtext-liner">
          whether you&apos;re building the next big thing or just debating tabs vs
          spaces.
        </span>{" "}
        <br />
        <span className="hero-subtext-liner ">
          I usually reply somewhere between debugging Rust and questioning my
          life choices in {" "}
          <span className="bg-red-800/20 text-neutral-800 dark:text-neutral-200 text-[0.9em] px-2 py-1 rounded-lg">
            package.json
          </span>{" "}
          .
        </span>{" "}
        <br />
      </div>
      <div
        className="md:text-xl mb-4 hero-subtext-liner"
        style={{ opacity: 0 }}
      >
        📩 DMs open at{" "}
        <Link
          href="https://x.com/karandefinitely"
          className="text-cyan-500 hover:text-cyan-700 duration-200 hover:underline"
        >
          {" "}
          @karandefinitely
        </Link>
      </div>
      <div
        className={`${poppinBold.className} mt-10 hero-subtext-liner
          md:text-xl dark:text-neutral-300 text-neutral-800 text-lg font-extrabold text-center`}
      >
        Prefer email? Hit up the
        <NavigationLink href="/contact">contact page!</NavigationLink>
      </div>
    </div>
  );
};

export default Contact;
