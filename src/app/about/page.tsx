import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function About() {
  return (
    <div className={`${roboto.className}`}>
      {/* intro */}
      <section className="-b px-2">
        <div className="flex flex-row gap-4 py-4">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div className="md:text-4xl text-2xl font-bold">Jaydatt Karan</div>
            <div className="md:text-xl font-semibold text-neutral-500">
              Developer, Designer
            </div>
          </div>
        </div>
        <div className="md:text-xl dark:text-neutral-400 text-neutral-600">
          I don’t just code—I craft experiences. From{" "}
          <span className="dark:text-neutral-100 text-neutral-950 font-medium">
            full-stack
          </span>{" "}
          applications to AI-powered solutions and decentralized systems, I’m
          all about pushing the boundaries of what’s possible. <br />
          With a strong foundation in <span>Web2</span> ,{" "}
          <span className="dark:text-neutral-100 text-neutral-950 font-medium">
            Web3
          </span>{" "}
          , and{" "}
          <span className="dark:text-neutral-100 text-neutral-950 font-medium">
            AI
          </span>{" "}
          , I bridge the gap between innovation and real-world impact, ensuring
          that every project I build is fast, scalable, and user-centric.
        </div>
      </section>

      {/* education */}
      <section className="px-2 py-4 -b ">
        <div className="py-2 flex flex-row gap-4 -b">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div className="md:text-3xl text-2xl font-bold">Education</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
          <div>
            🎓 Bachelor of Technology (B.Tech) in Computer
            ScienceSpecialization:{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium">
              Artificial Intelligence & Data Science
            </span>
          </div>
          <div>
            📍 Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium">
              (2022-2026)
            </span>
          </div>
        </div>
      </section>

      {/* tech */}
      <section className="px-2 py-4 -b ">
        <div className="py-2 flex flex-row gap-4 -b">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div className="md:text-3xl text-2xl font-bold">
              Tech Arsenal ⚡
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:text-xl">
          <div>
            <span className="font-semibold"> Frontend & UI/UX: </span> Next.js,
            React, TypeScript, Framer Motion
          </div>
          <div>
            <span className="font-semibold"> Backend & APIs: </span> Node.js,
            Express, MongoDB
          </div>
          <div>
            <span className="font-semibold"> Blockchain & Web3: </span>{" "}
            Solidity, Ethereum, Smart Contracts
          </div>
          <div>
            <span className="font-semibold"> AI & Automation: </span>{" "}
            Intelligent, adaptive systems
          </div>
        </div>
      </section>

      {/* philosophy */}
      <section className="px-2 py-4 -b ">
        <div className="py-2 flex flex-row gap-4 -b">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div className="md:text-3xl text-2xl font-bold">
              My Philosophy 🎯
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
          <div>
            Tech should be seamless, intuitive, and empowering. I believe in:
          </div>
          <div>✔ Building open, transparent, and impactful solutions</div>
          <div>
            ✔ Merging the best of Web2, Web3 & AI for smarter experiences
          </div>
          <div>✔ Constantly learning, experimenting, and evolving</div>
        </div>
      </section>

      {/* what */}
      <section className="px-2 py-4 -b ">
        <div className="py-2 flex flex-row gap-4 -b">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div className="md:text-3xl text-2xl font-bold">What I Do 🛠️</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
          <div>
            I specialize in crafting sleek UIs, scalable backends, and
            cutting-edge blockchain & AI projects. Whether it&apos;s AI-driven
            assistants, decentralized wallets, or full-stack platforms,{" "}
            <span className="dark:text-neutral-50 text-neutral-950 font-medium">
              I create, break, and refine{" "}
            </span>
            ideas into reality.
          </div>
          <div>
            I thrive in fast-paced environments, love problem-solving, and
            always seek to push my limits.
          </div>
          <div>Let&apos;s build something awesome together.</div>
        </div>
      </section>

      {/* resume */}
      <section className="px-2 py-4">
        <div className="py-2 flex flex-row gap-4 -b">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div className="md:text-3xl text-2xl font-bold">Resume</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:text-xl">
          <div>
            For a quick overview of my experience & skills:{" "}
            <span
              className="font-semibold text-cyan-500 hover:text-cyan-700
            duration-200 social-link"
            >
              {" "}
              Download My Resume{" "}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
