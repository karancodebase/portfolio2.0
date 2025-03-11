"use client"
import * as motion from "motion/react-client";
import Project from "@/components/data/ProjectCard";
import { projects } from "@/components/data/projects";

export default function Projects() {
  return (
    <div>
      {/* intro */}
      <section className="px-2 py-2">
        <div className="pb-6 flex flex-row gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start from opacity 0 and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
            transition={{
              duration: 0.7, // Speed of animation
              delay: 0.3, // Delay to stagger animations (0.2s per box)
              type: "spring", // Makes it feel more natural
            }}
            className="md:text-5xl text-2xl font-bold"
          >
            Jaydatt Karan
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="md:text-xl"
        >
          A digital innovator on a mission to redefine the web & web3 landscape,
          one line of code at a time. When I’m not bending the digital world to
          my will, you’ll find me connecting with visionary creators and
          designing innovative solutions that push boundaries and redefine
          what’s possible.
        </motion.div>
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
              whileInView={{ opacity: 1}} // Fade in and slide up
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
