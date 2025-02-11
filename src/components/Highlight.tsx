"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <div className="w-full px-4 md:px-8">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, 1, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl px-4 md:text-4xl  lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          {" "}
          <span className="hidden md:inline">
            With insomnia, nothing&apos;s real.{" "}
            <Highlight className="text-black lg:text-5xl dark:text-white">
            Except bugs.
            </Highlight>
          </span>
          <span className="md:hidden">
            With insomnia, nothing&apos;s real.{" "}
            <Highlight className="text-black lg:text-5xl dark:text-white ">
            Except bugs.
            </Highlight>
          </span>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}

export default HeroHighlightDemo;
