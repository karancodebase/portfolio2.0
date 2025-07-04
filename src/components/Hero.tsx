/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Github, HandCoins, Linkedin, Twitter } from "lucide-react";
import { Vast_Shadow } from "next/font/google";
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
const vastShadow = Vast_Shadow({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  
  return (
    <main className="w-[90vw] lg:w-[50vw] mt-10">
      <div
        className={`${delius.className} flex gap-1 tracking-wider mt-1 mx-2 text-sm text-neutral-500`}
      >
        Hey It&apos;s me <HandCoins className="h-4 w-4"/>
      </div>
      <div className="flex gap-2 items-end">
        <h1 className={`${vastShadow.className} md:text-5xl text-4xl`}>Jaydatt</h1>
        <span
          className={`${eduBeginner.className} tracking-wider text-md text-neutral-400`}
        >
          / @karandefinitely
        </span>
      </div>
      <div
        className={`${eduBeginner.className} tracking-wide md:text-xl text-neutral-400 mt-4`}
      >
        Yup, I&apos;m a developer — but not just pushing pixels or copy-pasting
        from Stack Overflow.
      </div>
      <div
        className={`${delius.className} tracking-wider md:text-xl text-neutral-400 mt-2`}
      >
        I&apos;m a full-stack{" "}
        <span className="text-neutral-100">web3 nerd</span> crafting slick apps
        and <span className="text-neutral-100">smart contracts</span>. currently
        messing with{" "}
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
        ,{" "}
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
        ,{" "}
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
        ,{" "}
        <Badge variant="outline" className="mr-2 tracking-wider">
          <img
            src="./rust.svg"
            alt="Rust"
            width={18}
            height={18}
            className="mr-1"
          />
          Rust
        </Badge>
        
        ,{" "}
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
        and anything that
        smells like <span className="text-neutral-100">decentralization</span>.
      </div>
      <div
        className={`${delius.className} tracking-wider md:text-xl mt-3 text-neutral-400`}
      >
        When it’s not coding, you’ll find me hunting down the next big{" "}
        <span className="text-neutral-100">blockchain hackathon</span> or
        geeking out over <span className="text-neutral-100">NFTs</span> .
      </div>
      <div
        className={`${eduBeginner.className} tracking-wider md:text-xl text-neutral-400`}
      >
        Freelancer? Sometimes. Builder? <span className="text-neutral-100 hover:text-neutral-400 cursor-pointer duration-200"><Link href="/about">Always</Link></span>.
      </div>
      <div>
        <div
          className={`${eduBeginner.className} tracking-wider md:text-xl mt-4 text-neutral-300 flex items-center gap-2`}
        >
          <div className="w-3 h-3 bg-green-400 animate-blink rounded-full"></div>
          <p>Open to new gigs. Let’s make something cool!</p>
        </div>
         <span className="text-neutral-400 font-medium flex flex-wrap gap-2 mt-2 mx-4">
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
    </main>
  );
};

export default Hero;
