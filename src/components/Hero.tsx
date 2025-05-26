/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Roboto, Poppins } from "next/font/google";
import NavigationLink from "./NavigationLink";
import { Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

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

// Register the plugin
gsap.registerPlugin(TextPlugin);

// Simple text scrambler class
class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: Array<{
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }>;
  frameRequest: number;
  frame: number;
  resolve: (() => void) | null;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.queue = [];
    this.frameRequest = 0;
    this.frame = 0;
    this.resolve = null;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end } = this.queue[i];
      let { char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.18) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="text-neutral-500">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      if (this.resolve) this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(() => this.update());
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

export default function Home() {
  const text = "Hey, I'm Jaydatt"; // Your static text
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const lineRef = useRef(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);

  // Type writer effect for the main heading
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 70);

      return () => clearTimeout(timeout);
    } else {
      // Start scramble animations after typing is done
      initScrambleAnimations();
    }
  }, [index, text]);

  // Set up and run the scramble animations sequentially
  const initScrambleAnimations = async () => {
    const phrases = [
      {
        element: "#scramble1",
        text: "Full-time dev. Part-time gym bro. Occasional meme dealer.",
      },
      {
        element: "#scramble2",
        text: "I code. I lift. I ship.",
      },
      {
        element: "#scramble3",
        text: "That’s it. That’s the bio.",
      },
    ];

    // Sequential animation of all phrases
    for (const phrase of phrases) {
      const element = document.querySelector(phrase.element) as HTMLElement;
      if (element) {
        const scrambler = new TextScramble(element);
        await scrambler.setText(phrase.text);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Pause between phrases
      }
    }
  };

  useEffect(() => {
    const lines = document.querySelectorAll(".hero-subtext-liner");

    if (lines.length > 0) {
      gsap.set(lines, { opacity: 0 });

      gsap.to(lineRef.current, {
        height: "80px",
        delay: 3,
        duration: 1,
        ease: "power1.out",
      });

      lines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: index * 0.3 }
        );
      });
    }
    gsap.to(line2Ref.current, {
      height: "35px",
      delay: 3.5,
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <>
      <div
        className={`${roboto.className} py-14 flex flex-col justify-center px-4 `}
      >
        {/* Hero section */}
        <section className="mb-10">
          <h1
            className={`${poppinExtraBold.className} tracking-wider text-center md:text-6xl text-3xl font-bold`}
          >
            {displayedText}
          </h1>
          <div>
            <div>
              <p className="hero-subtext md:leading-8 leading-4 md:text-2xl text-xs text-neutral-700 dark:text-neutral-400 mt-6">
                <span id="scramble1" className="hero-subtext-line"></span>{" "}
                <br />
                <span id="scramble2" className="hero-subtext-line"></span>{" "}
                <br />
                <span id="scramble3" className="hero-subtext-line"></span>
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="flex gap-3">
           
            <h2 className="hero-subtext-liner md:text-2xl text-xl text-neutral-800 dark:text-neutral-300 mb-4">
              Solana, Web3, Web2 — I&apos;m everywhere and nowhere.
            </h2>
          </div>
          <p className="hero-subtext-liner md:text-xl text-sm dark:text-neutral-400 text-neutral-700 max-w-3xl">
            <span className="dark:text-neutral-200 text-neutral-800 tracking-wider">
              Projects, PRs, pre-workout
            </span>{" "}
            — all part of the daily stack. <br />
            messing with{" "}
            <span>
              <Badge variant="outline" className="mr-2 tracking-wider">
                <img
                  src="./nextjs-svgrepo-com.svg"
                  alt="Next.js"
                  width={18}
                  height={18}
                  className="mr-1"
                />
                Next.js
              </Badge>
              <Badge variant="outline" className="mr-2 tracking-wider">
                <img
                  src="./nodejs-logo-svgrepo-com.svg"
                  alt="NestJS"
                  width={18}
                  height={18}
                  className="mr-1"
                />
                NodeJS
              </Badge>
              <Badge variant="outline" className="mr-2 tracking-wider">
                <img
                  src="./typescript-16-svgrepo-com.svg"
                  alt="Prisma"
                  width={18}
                  height={18}
                  className="mr-1"
                />
                TypeScript
              </Badge>
              <Badge variant="outline" className="mr-2  tracking-wider">
                <img
                  src="./solana.svg"
                  alt="Solana"
                  width={20}
                  height={20}
                  className="mr-1"
                />
                Solana
              </Badge>
            </span>
          </p>
          <div className="mt-10 hero-subtext-liner flex gap-1 items-center dark:text-neutral-200 text-neutral-800 tracking-wider">
            <span className="h-3 w-3 bg-green-600 rounded-full mr-1"></span> Open to new gigs. Got bugs, ideas? Ping me: 
            <span className="dark:text-neutral-400 text-neutral-950 font-medium flex flex-wrap gap-1">
              <Link
                href="https://x.com/karandefinitely"
                target="_blank"
                className="social-link px-2 py-1 rounded dark:hover:bg-neutral-800 hover:bg-neutral-400 text-neutral-100 transition duration-200"
              >
                <Twitter className="w-5 md:w-6 md:h-6 h-5 mb-1 dark:text-neutral-300 text-neutral-800 " />
              </Link>{" "}
              <Link
                href="https://github.com/karancodebase"
                target="_blank"
                className="social-link px-2 py-1 rounded dark:hover:bg-neutral-800 hover:bg-neutral-400 text-neutral-100 transition duration-200"
              >
                <Github className="w-5 md:w-6 md:h-6 h-5 mb-1 dark:text-neutral-300 text-neutral-800 " />
              </Link>{" "}
              <Link
                href="https://linkedin.com/in/jaydattkaran"
                target="_blank"
                className="social-link px-2 py-1 rounded dark:hover:bg-neutral-800 hover:bg-neutral-400 text-neutral-100 transition duration-200"
              >
                <Linkedin className="w-5 md:w-6 md:h-6 h-5 mb-1 dark:text-neutral-300 text-neutral-800 " />
              </Link>
            </span>
          </div>
          <div
            className={`${poppinBold.className} mt-6 hero-subtext-liner
          md:text-xl dark:text-neutral-400 text-neutral-800 text-md font-semibold text-center`}
          >
            Backstory? Bugs? Biceps?
            <br />
            <NavigationLink href="/about">About page</NavigationLink>has the
            lore.
          </div>
        </section>
      </div>
    </>
  );
}
