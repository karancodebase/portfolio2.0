"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Poppins } from "next/font/google";
import Link from "next/link";
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
        Got a cool project or idea? Let&apos;s chat!
      </div>
      <div className="md:text-xl text-sm mb-4">
        <span className="hero-subtext-liner">
          Cooking up something cool? Let&apos;s talk.
        </span>{" "}
        <br />
        <span className="hero-subtext-liner">
        Whether you&apos;re building the next big thing or just wanna debate tabs vs spaces, I’m all ears.

        </span>{" "}
        <br />
        <span className="hero-subtext-liner">
          I&apos;ll reply somewhere between debugging Rust and questioning my life
          choices in <span className="dark:bg-neutral-800 bg-neutral-400 text-[0.9em] px-2 py-1 rounded-lg">package.json</span> .
        </span>{" "}
        <br />
      </div>
      <div className="md:text-xl mb-4 hero-subtext-liner" style={{ opacity: 0 }}>
        📩 Slide into <Link href="https://x.com/karandefinitely" className="text-cyan-500 hover:text-cyan-700 duration-200 hover:underline">
              {" "}
              @karandefinitely
            </Link> on Twitter — DMs are open (for now).
      </div>
    </div>
  );
};

export default Contact;
