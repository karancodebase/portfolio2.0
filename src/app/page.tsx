import Image from "next/image";
import Link from "next/link";
import { Twitter, MailOpen } from "lucide-react";
import InfiniteCarousel from "@/components/ui/infinitecarousel";
import * as motion from "motion/react-client";
import Project, { projects } from "@/components/data/ProjectCard";

const page = () => {
  const name = "Jaydatt Karan";
  const nameLetters = name.split("");

  return (
    <div className="my-16">
      {/* intro */}
      <section className="px-2 py-2">
        <div className="px-4 py-2 flex flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/photo_2025-02-18_16-50-40.jpg"
              alt="/avatar"
              width={60}
              height={60}
              className="rounded-full sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-32 lg:h-32"
            />
          </motion.div>
          <div className="flex flex-col gap-0 justify-center items-start">
            <motion.div>
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                  }}
                  style={{ display: "inline-block" }}
                  className="md:text-4xl text-3xl font-semibold"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Start from opacity 0 and slightly below
              whileInView={{ opacity: 1, x: 0 }} // Fade in and slide up
              transition={{
                duration: 0.5, // Speed of animation
                delay: 1, // Delay to stagger animations (0.2s per box)
                type: "spring", // Makes it feel more natural
              }}
              className="md:text-xl font-semibold text-neutral-500"
            >
              Developer, Designer
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="md:text-2xl"
        >
          A digital innovator on a mission to redefine the Web & Web3 landscape,
          one line of code at a time. When I&apos;m not bending the digital world to
          my will, you&apos;ll find me connecting with visionary creators and
          designing innovative solutions that push boundaries and redefine
          what&apos;s possible.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Start from opacity 0 and slightly below
          whileInView={{ opacity: 1, x: 0 }} // Fade in and slide up
          transition={{
            duration: 0.5, // Speed of animation
            delay: 1.7, // Delay to stagger animations (0.2s per box)
            type: "spring", // Makes it feel more natural
          }}
          className="md:text-xl text-sm pt-2 font-semibold text-neutral-500"
        >
          Pushing the boundaries of
          <span className="px-1 bg-gradient-to-r from-cyan-500 to-purple-700 inline-block text-transparent bg-clip-text">
            digital innovation
          </span>
        </motion.div>
      </section>

      {/* skills */}
      <section className="my-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="px-6"
        >
          <InfiniteCarousel />
        </motion.div>
      </section>

      {/* featured projects */}

      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row justify-between px-2">
            <div className="text-neutral-500 uppercase tracking-[0.2em] font-semibold md:text-2xl text-xxl">
              featured projects
            </div>
            <Link
              href="/projects"
              className="md:text-lg cardhover font-semibold tracking-wider hover:text-neutral-500 duration-200"
            >
              View all projects{" "}
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="box"
                initial={{ opacity: 0}} // Start from opacity 0 and slightly below
                whileInView={{ opacity: 1 }} // Fade in and slide up
                transition={{
                  duration: 0.3, // Speed of animation
                  delay: index * 0.1, 
                }}
              >
                {/* <Link href={`/projects/${encodeURIComponent(project.id)}`}> */}
                <Project key={index} {...project} index={index}></Project>
                {/* </Link> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* say hi */}
      <section className="flex justify-center px-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from opacity 0 and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
          transition={{
            duration: 0.7, // Speed of animation
            delay: 0.7, // Delay to stagger animations (0.2s per box)
            type: "spring", // Makes it feel more natural
          }}
          className="md:h-[20em] my-[5em] glass-box border cardhover border-neutral-900 hover:border-neutral-400 duration-200 rounded-xl flex items-center"
        >
          <div className="flex md:flex-row flex-col-reverse md:px-[4%] px-[5%]">
            <div className="pb-10 md:py-10 flex flex-col gap-4">
              <div className="text-5xl font-bold">Say hi!</div>
              <div className="text-lg">
                Got something cool in mind? or just wanna have friendly convo?
                Hit me up!
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="https://twitter.com/jaydattkaran"
                  target="_blank"
                  className="flex gap-2 items-center text-xl"
                >
                  <Twitter />
                  Twitter
                </Link>
                <Link
                  href="mailto:karanjaydatt03@gmail.com"
                  target="_blank"
                  className="flex gap-2 items-center text-xl"
                >
                  <MailOpen />
                  karanjaydatt03@gmail.com
                </Link>
              </div>
            </div>
            <Image
              src="/HFsSET7JSQ1uhWJMGwDEAVb2Y.avif"
              alt="alt"
              width={300}
              height={300}
              className="mx-[10%] md:mx-0"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default page;
