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

const Page = ({ isActive }: { isActive?: boolean }) => {
  return (
    <div>
      {/* intro */}
      <section className="px-2 py-2">
        <div className="py-2 flex flex-row gap-4">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div>
              <div
                className={`${poppinExtraBold.className} md:mt-6 mb-4
          md:text-5xl text-3xl font-extrabold`}
              >
                Hi, I&apos;m Jaydatt 👋
              </div>
              <div
                className={`${roboto.className} md:text-xl dark:text-neutral-300 text-neutral-700`}
              >
                I break things just to rebuild them better. Whether it&apos;s
                optimizing systems, crafting smooth user experiences, or scaling
                wild ideas, I like solving problems in my own way.
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${roboto.className}
          md:text-xl dark:text-neutral-400 text-neutral-600`}
        >
          <div className="mt-4">
            When I’m not coding, you’ll find me{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium">
              lifting weights, tweaking designs, or debating why tabs are
              superior to spaces.
            </span>{" "}
            If you&apos;re building something cool in Web2/Web3, I&apos;d love
            to hear about it!
          </div>
          <div className="mt-10 flex gap-1 items-center dark:text-neutral-300 text-neutral-700 font-medium">
            Find me on:
            <span className="dark:text-neutral-400 text-neutral-950 font-medium flex flex-wrap gap-1">
              <Link
                href="https://twitter.com/jaydattkaran"
                target="_blank"
                className="social-link px-2 py-1 rounded hover:bg-neutral-800 text-neutral-100 transition duration-200"
              >
                <Twitter className="w-5 md:w-6 md:h-6 h-5 mb-1" />
              </Link>{" "}
              <Link
                href="https://github.com/jaydattkaran"
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
        </div>
        <div
          className={`${poppinBold.className} mt-6
          md:text-xl dark:text-neutral-300 text-neutral-800 text-lg font-extrabold text-center`}
        >
          Want to know more about what I do and how I got here?
          <br />
          <Link
            href="/about"
            className={`
              px-2 text-lg md:text-2xl relative inline-block
              ${
                isActive
                  ? ""
                  : "font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
              }
              after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
              after:w-0 after:h-0.5 after:bg-cyan-500 
              after:transition-all after:duration-300
              hover:after:w-3/4
            `}
          >
            {" "}
            Check out the About page!
          </Link>
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-28">
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
      <section className="mt-28">
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
          <div className="mt-2 text-center md:text-xl dark:text-neutral-400 text-neutral-600">
            I&apos;ve worked on a range of projects, from simple websites to
            complex web applications. <br />
            Here are some of my favorites—dive into the details by clicking on
            any project!
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {showcase.map((showcase, index) => (
              <div key={index}>
                <Project key={index} {...showcase} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${poppinBold.className} mt-6
          md:text-2xl dark:text-neutral-300 text-neutral-800 text-lg font-extrabold text-center`}
        >
          Want to see more?
          <br />
          <Link
            href="/projects"
            className={`
              px-2 text-lg md:text-2xl relative inline-block
              ${
                isActive
                  ? ""
                  : "font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
              }
              after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
              after:w-0 after:h-0.5 after:bg-cyan-500 
              after:transition-all after:duration-300
              hover:after:w-3/4
            `}
          >
            {" "}
            Head over to my Projects page!
          </Link>
        </div>
      </section>

      {/* say hi */}
      <section className="mt-28">
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
          md:text-2xl dark:text-neutral-300 text-neutral-800 text-lg font-extrabold text-center`}
        >
          Not a fan of Twitter? No worries—{" "}
          <Link
            href="/contact"
            
            className={`
              px-2 text-lg md:text-2xl relative inline-block
              ${
                isActive
                  ? ""
                  : "font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
              }
              after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
              after:w-0 after:h-0.5 after:bg-cyan-500 
              after:transition-all after:duration-300
              hover:after:w-3/4
            `}
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
