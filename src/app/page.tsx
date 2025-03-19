"use client";
import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";
import { Roboto, Poppins } from "next/font/google";
import SkillCard, { skills } from "@/components/data/Skills";
import Project, { showcase } from "@/components/data/Showcase";
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

const Page = () => {

  return (
    <div>
      
      {/* intro */}
      <section className="px-2 py-2">
        <div className="py-2 flex flex-row gap-4">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div>
              <div
                className={`${poppinExtraBold.className} md:mt-6 mb-2
          md:text-5xl text-3xl font-extrabold`}
              >
                Hi, I&apos;m Jaydatt 👋
              </div>
              <div
                className={`${roboto.className} md:text-xl dark:text-neutral-300 text-neutral-700`}
              >
                I love building things that solve real problems. Whether it’s
                optimizing systems, crafting seamless user experiences, or
                scaling ideas, I’m always exploring ways to make an impact
                through technology.
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${roboto.className}
          md:text-xl dark:text-neutral-400 text-neutral-600`}
        >
          <div className="mt-4">
            Beyond code, you’ll find me{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium">
              hitting the gym, refining designs, or connecting with like-minded
              creators.
            </span>{" "}
            If you&apos;re working on something exciting in Web2/Web3, I’d love to
            hear about it!
          </div>
          <div className="mt-4 dark:text-neutral-200 text-neutral-700 font-medium">
            Find me on:{" "}
            <span className="dark:text-neutral-300 text-neutral-950 font-medium flex flex-wrap md:gap-4 gap-1">
              <Link
                href="https://twitter.com/jaydattkaran"
                target="_blank"
                className="flex gap-1 items-center social-link"
              >
                <Twitter className="w-5 md:w-6 md:h-6 h-5 mb-1" />
                Twitter
              </Link>{" "}
              |{" "}
              <Link
                href="https://github.com/jaydattkaran"
                target="_blank"
                className="flex gap-1 items-center text-xl social-link"
              >
                <Github className="w-5 md:w-6 md:h-6 h-5 mb-1" />
                GitHub
              </Link>{" "}
              |{" "}
              <Link
                href="https://linkedin.com/in/jaydattkaran"
                target="_blank"
                className="flex gap-1 items-center text-xl social-link"
              >
                <Linkedin className="w-5 md:w-6 md:h-6 h-5 mb-1" />
                LinkedIn
              </Link>
            </span>
          </div>
        </div>
        <div
          className={`${poppinBold.className} mt-6
          md:text-xl text-lg font-extrabold text-center`}
        >
          Want to know more about what I do and how I got here?<br />
          <Link
            href="/about"
            className="font-semibold hover:underline social-link text-cyan-500 hover:text-cyan-700
            duration-200"
          >
            {" "}
            Check out the About page!
          </Link>
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-24">
        <div
          className={`${poppinBold.className} mb-4
          md:text-5xl text-3xl font-extrabold text-center`}
        >
          Tech stack i use to get my stuff done!
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {skills.map((skill, index) => (
            <div key={index}>
              <SkillCard key={index} {...skill} />
            </div>
          ))}
        </div>
      </section>

      {/* featured projects */}
      <section className="mt-24">
        <div>
          <div>
            <div
              className={`${poppinBold.className} md:mb-2
          md:text-5xl text-3xl font-extrabold text-center`}
            >
              I like building things
            </div>
            {/* <Link
              href="/projects"
              className="md:text-lg cardhover font-semibold tracking-wider hover:text-neutral-500 duration-200"
            >
              View all projects{" "}
            </Link> */}
          </div>
          <div className="mt-2 md:text-xl dark:text-neutral-400 text-neutral-600">
            I&apos;ve worked on a range of projects, from simple websites to complex
            web applications. Here are some of my favorites—dive into the
            details by clicking on any project!
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            {showcase.map((showcase, index) => (
              <div key={index}>
                <Project key={index} {...showcase} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${poppinBold.className} mt-6
          md:text-2xl text-lg font-extrabold text-center`}
        >
          Want to see more?<br />
          <Link
            href="/projects"
            className="font-semibold hover:underline social-link text-cyan-500 hover:text-cyan-700
            duration-200"
          >
            {" "}
            Head over to my Projects page!
          </Link>
        </div>
      </section>

      {/* say hi */}
      <section className="mt-24">
        <div>
          <div className="">
            <div
              className={`${poppinBold.className} md:mb-2
          md:text-5xl text-3xl font-extrabold text-center`}
            >
              Get in Touch
            </div>
          </div>
          <div className="mt-4 md:text-xl dark:text-neutral-400 text-neutral-600">
            Have an exciting idea? Want to collaborate? Or just up for an
            interesting convo? Just shoot me a dm{" "}
            <span className="text-blue-500 hover:underline duration-200">
              <Link href="https://twitter.com/jaydattkaran" target="_blank">
                with a direct question on twitter
              </Link>{" "}
            </span>
            and I’ll reply when I can. Let’s make it happen!
          </div>
        </div>

        <div
          className={`${poppinBold.className} mt-6
          md:text-2xl text-lg font-extrabold text-center`}
        >
          Not a fan of Twitter? No worries—{" "}
          <Link
            href="/contact"
            className="font-semibold hover:underline social-link text-cyan-500 hover:text-cyan-700
            duration-200"
          >
            {" "}
            hit up my contact page!{" "}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
