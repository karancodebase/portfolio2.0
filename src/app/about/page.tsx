import { Roboto, Poppins } from "next/font/google";
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

export default function About() {
  return (
    <div className={`${roboto.className} flex flex-col gap-4`}>
      {/* intro */}
      <section className="md:mt-10 mt-4 px-2">
        <div
          className={`${poppinExtraBold.className} md:mt-6 mb-2
          md:text-5xl text-3xl font-extrabold text-center`}
        >
          Hi, I&apos;m Jaydatt 👋
        </div>
        <div
          className={`${roboto.className} md:text-xl dark:text-neutral-400 text-neutral-600`}
        >
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
      <section className="px-2 mt-8">
        <div
          className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center`}
        >
          Education
        </div>
        <div className="flex flex-col gap-1 mt-4 dark:text-neutral-300 text-neutral-700">
          <div className="md:text-xl text-center">
            🎓 B.Tech in Computer Science
          </div>
          <div className="md:text-xl text-center">
            📍 RGPV, Bhopal{" "}
            <span className="dark:text-neutral-100 text-neutral-950 font-medium">
              (2022-2026)
            </span>
          </div>
        </div>
      </section>

      {/* tech */}
      <section className="px-2 mt-8 flex flex-col items-center">
        <div
          className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center`}
        >
          Tech Arsenal ⚡
        </div>
        <div className="flex flex-col gap-1 mt-4 md:text-xl">
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
      <section className="px-2 mt-8 flex flex-col items-center">
        <div
          className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center`}
        >
          My Philosophy 🎯
        </div>
        <div className="flex flex-col gap-1 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
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
      <section className="px-2 mt-8 flex flex-col items-center">
        <div className="py-2 flex flex-row md:gap-4 gap-2">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div
              className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center`}
            >
              What I Do 🛠️
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:text-xl dark:text-neutral-300 text-neutral-700">
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
      <section className="px-2 mt-8 flex flex-col items-center">
        <div className="py-2 flex flex-row md:gap-4 gap-2">
          <div className="flex flex-col gap-0 justify-center items-start">
            <div
              className={`${poppinBold.className} md:text-3xl text-2xl font-bold text-center`}
            >
              Resume
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:text-xl">
          <div>
            For a quick overview of my experience & skills:{" "}
            <span
              className="font-semibold text-cyan-500 hover:text-cyan-700
            duration-200 social-link"
            >
              <Link
                href="https://drive.google.com/file/d/1-p4Nj5ojXT7GM7HLLR95tujhEUvHU2Np/view?usp=drive_link"
                target="_blank"
              >
                Download My Resume{" "}
              </Link>{" "}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
