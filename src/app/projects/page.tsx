"use client";
import * as motion from "motion/react-client";
import Project from "@/components/data/ProjectCard";
import { projects } from "@/components/data/projects";
import { Roboto, Poppins } from "next/font/google";

const poppinBold = Poppins({
  weight: "800",
  preload: false,
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <div className={`${roboto.className}`}>
      {/* intro */}
      <section className="px-2 py-2">
        <div
          className={`${poppinBold.className} md:mt-6 mb-2
          md:text-5xl text-3xl font-extrabold text-center`}
        >
          Hi, I&apos;m Jaydatt 👋
        </div>

        <div
          className={`${roboto.className} md:text-xl dark:text-neutral-400 text-neutral-600`}
        >
          A digital innovator on a mission to redefine the web & web3 landscape,
          one line of code at a time. When I’m not bending the digital world to
          my will, you’ll find me connecting with visionary creators and
          designing innovative solutions that push boundaries and redefine
          what’s possible.
        </div>
        <div
          className={`${roboto.className} md:text-xl dark:text-neutral-400 text-neutral-600 mt-2`}
        >
          Building intuitive, high-performance applications that push boundaries
          is what drives me. I&apos;ve worked on projects like{" "}
          <span className="dark:text-neutral-100 text-neutral-950 font-medium">
            Aeris(AI chatbot), Fichain(Web3 innovation), and SengarBus(bus
            booking platform)
          </span>
          -merging cutting-edge tech with real-world solutions.
        </div>
      </section>

      {/* projects */}
      <section className="my-10">
        <div className="flex flex-col lg:flex-row justify-between px-2">
          <div className="text-neutral-500 uppercase tracking-[0.15em] font-semibold md:text-2xl text-xxl">
            Some of my best work
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="box"
              initial={{ opacity: 0 }} // Start from opacity 0 and slightly below
              whileInView={{ opacity: 1 }} // Fade in and slide up
              transition={{
                duration: 0.5, // Speed of animation
                delay: index * 0.2, // Delay to stagger animations (0.2s per box)
                // Makes it feel more natural
              }}
            >
              <Project key={index} {...project}></Project>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
