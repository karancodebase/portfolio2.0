"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Roboto, Poppins } from "next/font/google";
import NavigationLink from "./NavigationLink";
import { Twitter, Github, Linkedin } from "lucide-react";
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
      let {char} = this.queue[i];

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
        text: "just a dev who builds cool sh*t and ships it fast.",
      },
      {
        element: "#scramble2",
        text: "mostly lives in terminal and Twitter.",
      },
      {
        element: "#scramble3",
        text: "Web2, Web3, Solana — all part of the chaos.",
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
        className={`${roboto.className} min-h-screen flex flex-col justify-center px-4 py-8 `}
      >
        {/* Hero section */}
        <section className="mb-16">
          <h1
            className={`${poppinExtraBold.className} tracking-wider text-center md:text-6xl text-3xl font-bold mb-4`}
          >
            {displayedText}
          </h1>
          <div>
            <div>
              <p className="hero-subtext md:leading-8 leading-4 text-center md:text-2xl text-xs text-neutral-700 dark:text-neutral-300 mb-10 mt-6">
                <span id="scramble1" className="hero-subtext-line"></span>{" "}
                <br />
                <span id="scramble2" className="hero-subtext-line"></span>{" "}
                <br />
                <span id="scramble3" className="hero-subtext-line"></span>
              </p>
            </div>
            <div className="flex gap-3 mt-10">
              <div
                ref={lineRef}
                className="dark:bg-neutral-300 bg-neutral-500 rounded"
                style={{
                  width: "4px",
                  height: "0px", // Initial height (start with no height)
                }}
              />
              {/* Text content */}
              <p className="hero-subtext-2 text-lg md:text-xl text-sm dark:text-neutral-400 text-neutral-700 md:mb-6">
                <span className="hero-subtext-liner">
                  If it&apos;s got code, I&apos;m probably tinkering with it.
                </span>
                <br />
                <span className="hero-subtext-liner">
                  Whether it&apos;s a <span className="font-semibold dark:text-neutral-200 text-neutral-800 tracking-wider">decentralized app on Solana</span>  or my <span className="font-semibold dark:text-neutral-200 text-neutral-800 tracking-wider">fifth coffee</span> of the day,
                </span>
                <br />
                <span className="hero-subtext-liner">
                  I&apos;m <span className="font-semibold dark:text-neutral-200 text-neutral-800 tracking-wider">building and shipping</span>  it all. Welcome to the chaos.
                </span>
                <br />
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="flex gap-3">
            <div
              ref={line2Ref}
              className="dark:bg-neutral-300 bg-neutral-500 rounded"
              style={{
                width: "4px",
                height: "0px", // Initial height (start with no height)
              }}
            />
            <h2 className="hero-subtext-liner md:text-3xl text-xl font-semibold text-neutral-800 dark:text-neutral-300 mb-4">
              When I&apos;m not knee-deep in code…
            </h2>
          </div>
          <p className="hero-subtext-liner md:text-lg text-sm dark:text-neutral-400 text-neutral-700 max-w-3xl">
            I&apos;m probably either <span className="font-semibold dark:text-neutral-200 text-neutral-800 tracking-wider">lifting weights, refining designs, or
            advocating for tabs over spaces.</span> Building something wild in <span className="font-semibold dark:text-neutral-200 text-neutral-800 tracking-wider"> Web3?</span> Got a cool <span className="font-semibold dark:text-neutral-200 text-neutral-800 tracking-wider"> side project?</span> Let&apos;s connect — I&apos;m always open
            to <span className="font-semibold dark:text-neutral-200 text-neutral-800 tracking-wider"> side project?</span> and the occasional developer meme.
          </p>
          <div className="mt-10 hero-subtext-liner flex gap-1 text-lg items-center dark:text-neutral-300 text-neutral-800 font-semibold tracking-wider">
            Find me online:
            <span className="dark:text-neutral-400 text-neutral-950 font-medium flex flex-wrap gap-1">
              <Link
                href="https://x.com/karandefinitely"
                target="_blank"
                className="social-link px-2 py-1 rounded hover:bg-neutral-800 text-neutral-100 transition duration-200"
              >
                <Twitter className="w-5 md:w-6 md:h-6 h-5 mb-1" />
              </Link>{" "}
              <Link
                href="https://github.com/karancodebase"
                target="_blank"
                className="social-link px-2 py-1 rounded hover:bg-neutral-800 text-neutral-100 transition duration-200"
              >
                <Github className="w-5 md:w-6 md:h-6 h-5 mb-1" />
              </Link>{" "}
              <Link
                href="https://linkedin.com/in/jaydattkaran"
                target="_blank"
                className="social-link px-2 py-1 rounded hover:bg-neutral-800 text-neutral-100 transition duration-200"
              >
                <Linkedin className="w-5 md:w-6 md:h-6 h-5 mb-1" />
              </Link>
            </span>
          </div>
          <div
            className={`${poppinBold.className} mt-6 hero-subtext-liner
          md:text-xl dark:text-neutral-300 text-neutral-800 text-md font-extrabold text-center`}
          >
            Wondering what I&apos;m all about or how I got started?
            <br />
            <NavigationLink href="/about">
              {" "}
              The About page has the story.
            </NavigationLink>
          </div>
        </section>
      </div>
    </>
  );
}
