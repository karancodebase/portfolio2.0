"use client"
import Image from "next/image";
import Link from "next/link";
import { Twitter, MailOpen, Github, Linkedin } from "lucide-react";
import * as motion from "motion/react-client";
import Project from "@/components/data/ProjectCard";
import { projects } from "@/components/data/projects";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
const Page = () => {
  const router = useRouter();
  const name = "Jaydatt Karan";
  const nameLetters = name.split("");

  return (
    <div>
      {/* intro */}
      <section className="px-2 py-2">
        <div className="py-2 flex flex-row gap-4">
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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: "spring",
              }}
              className="md:text-xl font-semibold text-neutral-500"
            >
              Developer, Designer
            </motion.div>
          </div>
        </div>
        <div className={`${roboto.className}
          md:text-xl dark:text-neutral-400 text-neutral-600`}>
          <div>
            Hey, I&apos;m Jaydatt, a digital innovator passionate about shaping the
            future of Web2 & Web3.
          </div>
          <div className="mt-4">
            Building intuitive, high-performance applications that push
            boundaries is what drives me. I&apos;ve worked on projects like{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium">
              Aeris(AI chatbot), Fichain(Web3 innovation), and SengarBus(bus
              booking platform)
            </span>
            -merging cutting-edge tech with real-world solutions.
          </div>
          <div className="mt-4">
            I specialize in{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium">
              React.js, Next.js, JavaScript, TypeScript, PostgreSQL, and blockchain development,
            </span>{" "}
            constantly exploring new ways to optimize and scale systems. I also
            share insights on Web2 & Web3 through{" "}
            <span>Twitter & LinkedIn,</span> where I engage with fellow
            builders.
          </div>
          <div className="mt-4">
            Beyond code, I enjoy{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium">
              designing seamless user experiences, hitting the gym, and
              connecting with visionary creators.
            </span>{" "}
            If you&apos;re working on something exciting in Web2/Web3, let&apos;s chat!
          </div>
          <div className="mt-4">
            Find me on:{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium flex flex-wrap gap-4">
              <Link
                href="https://twitter.com/jaydattkaran"
                target="_blank"
                className="flex gap-2 items-center text-xl social-link"
              >
                <Twitter />
                Twitter
              </Link>{" "}
              |{" "}
              <Link
                href="https://github.com/jaydattkaran"
                target="_blank"
                className="flex gap-2 items-center text-xl social-link"
              >
                <Github />
                GitHub
              </Link>{" "}
              |{" "}
              <Link
                href="https://linkedin.com/in/jaydattkaran"
                target="_blank"
                className="flex gap-2 items-center text-xl social-link"
              >
                <Linkedin />
                LinkedIn
              </Link>
            </span>
          </div>
          <div className="mt-4">
            Currently open to collaborations, freelance projects, and exciting
            opportunities.
          </div>
        </div>
      </section>

      {/* featured projects */}

      <section className="mt-10">
        <div>
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
              <div key={index} className="box">
                <Project key={index} {...project}></Project>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* say hi */}
      <section className="flex justify-center">
        <div onClick={() => router.push("/contact")}>
          <div className="md:h-[20em] my-[5em] glass-box border cardhover border-neutral-900 hover:border-neutral-400 duration-200 rounded-xl flex items-center">
            <div className="flex md:flex-row flex-col-reverse">
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
                priority
                className="mx-[10%] md:mx-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
