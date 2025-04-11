"use client";
import { Roboto, Poppins } from "next/font/google";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const poppinBold = Poppins({
  weight: "600",
  preload: false,
});
const poppinExtraBold = Poppins({
  weight: "800",
  preload: false,
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  // Refs to track sections
  const introRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const techRef = useRef<HTMLDivElement | null>(null);
  const philosophyRef = useRef<HTMLDivElement | null>(null);
  const whatRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onSectionEnter = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate intro section
          gsap.fromTo(
            introRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1 }
          );

          // Animate education section
          gsap.fromTo(
            educationRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2 }
          );

          // Animate tech section
          gsap.fromTo(
            techRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.4 }
          );

          // Animate philosophy section
          gsap.fromTo(
            philosophyRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.6 }
          );

          // Animate what section
          gsap.fromTo(
            whatRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.8 }
          );

          // Animate resume section
          gsap.fromTo(
            resumeRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 1 }
          );
        }
      });
    };

    const observer = new IntersectionObserver(onSectionEnter, {
      threshold: 0.2, // Trigger when 20% of the section is in view
    });

    // Observe the section
    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

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
  }, []);

  return (
    <div className={`${roboto.className} flex flex-col gap-4 mb-10`}>
      {/* // intro section */}
      <section className="md:mt-10 mt-4 px-2" ref={introRef}>
        <div
          className={`${poppinExtraBold.className} md:mt-6 mb-2
    md:text-5xl text-3xl font-extrabold text-center hero-subtext-liner`}
        >
          The Origin Story
        </div>
        <div
          className={`${roboto.className} md:text-xl dark:text-neutral-400 text-neutral-600 hero-subtext-liner`}
        >
          Once upon a Git commit, a curious human named jaydatt peeked into
          console.log(&quot;Hello, World!&quot;) — and boom, a new tab in life
          opened. That tab had no ad blocker, but it did have infinite bugs and
          snacks.
        </div>
        <div
          className={`${roboto.className} md:text-xl dark:text-neutral-400 text-neutral-600 hero-subtext-liner`}
        >
          He started as a regular developer, just vibin’ with HTML and CSS like
          it was 2012. But soon, JavaScript whispered, &quot;Hey kid, wanna
          break things in style?&quot;
        </div>
        <div
          className={`${roboto.className} md:text-xl dark:text-neutral-400 text-neutral-600 hero-subtext-liner`}
        >
          And just like that, he was full-stack deep, building projects, side
          quests, and maybe a few existential questions in between.
        </div>
      </section>

      {/* // what section */}
      <section className="px-2 mt-8 flex flex-col items-center" ref={whatRef}>
        <div className="py-2 flex flex-row md:gap-4 gap-2">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div
              className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center hero-subtext-liner`}
            >
              What I Actually Do
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
          <div className="hero-subtext-liner">
            Build full-stack apps that work even when I forget to <span className="dark:bg-neutral-800 bg-neutral-400 text-[0.9em] px-2 py-1 rounded-lg">.env</span> 
          </div>
          <div className="hero-subtext-liner">
            Break things, fix them, and then blog about it like a hero
          </div>
          <div className="hero-subtext-liner">
            Currently deep in the rabbit hole called Web3
          </div>
          <div className="hero-subtext-liner">
            Sometimes ships features, sometimes ships memes
          </div>
        </div>
      </section>

      {/* // mission section */}
      <section className="px-2 mt-8 flex flex-col items-center" ref={whatRef}>
        <div className="py-2 flex flex-row md:gap-4 gap-2">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div
              className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center hero-subtext-liner`}
            >
              Mission?
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
          <div className="hero-subtext-liner">
            To keep learning, keep building, and maybe one day...
          </div>
          <div className="hero-subtext-liner">
            Make a framework no one asked for but everyone secretly loves.
          </div>
        </div>
      </section>


      {/* // tech section */}
      <section className="px-2 mt-8 flex flex-col items-center" ref={techRef}>
        <div
          className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center hero-subtext-liner`}
        >
         Stacks & Snacks
        </div>
        <div className="flex flex-col gap-1 mt-4 md:text-xl">
          <div className="hero-subtext-liner">
            <span className="font-semibold"> Frontend: </span> Next.js, TailwindCSS, Typescript
          </div>
          <div className="hero-subtext-liner">
            <span className="font-semibold"> Backend & APIs: </span>Node.js, Express (no Prisma, I like it raw)
          </div>
          <div className="hero-subtext-liner">
            <span className="font-semibold"> Blockchain & Web3: </span>{" "}
            Solana, Rust, Solidity
          </div>
          <div className="hero-subtext-liner">
            <span className="font-semibold"> Dev Fuel: </span>{" "}
            Masala Chai, late-night lo-fi, and a dream
          </div>
        </div>
      </section>

      {/* // achievements section */}
      <section
        className="px-2 mt-8 flex flex-col items-center"
        ref={philosophyRef}
      >
        <div
          className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center hero-subtext-liner`}
        >
          Achievements (aka Loot Collected)
        </div>
        <div className="flex flex-col gap-1 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
          <div className="hero-subtext-liner">
          🛠️ Built multiple full-stack apps solo
          </div>
          <div className="hero-subtext-liner">
          🔥 Broke production and fixed it like a hero
          </div>
          
        </div>
      </section>

      {/* // resume section */}
      <section
        className="px-2 mt-8 flex flex-col items-center"
        ref={philosophyRef}
      >
        <div
          className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center hero-subtext-liner`}
        >
          Resume 📄
        </div>
        <div className="flex flex-col gap-1 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
          <div className="hero-subtext-liner">
          Want to see how I turned chaos into code?
          </div>
          <div className="hero-subtext-liner">
          Hit up my   <Link
                href="https://drive.google.com/file/d/1-p4Nj5ojXT7GM7HLLR95tujhEUvHU2Np/view?usp=drive_link"
                target="_blank"
                className="hover:text-cyan-700 text-cyan-400 hover:underline duration-200"
              >
                Resume {" "}
              </Link> 📄 and get the quick lowdown.
          </div>
          
        </div>
      </section>
    </div>
  );
}
