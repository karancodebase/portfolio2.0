"use client";
import Project from "../../components/data/ProjectCard";
import { projects } from "../../components/data/projects";
import {  Poppins } from "next/font/google";
import { Delius } from "next/font/google";

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});
const poppinBold = Poppins({
  weight: "800",
  preload: false,
});


export default function Projects() {

  return (
    <div className={`${delius.className} mb-10`}>
      {/* Intro */}
      <section className="px-2 py-2">
        <div
          className={`${poppinBold.className} hero-subtext-liner md:mt-10 mb-8 md:text-5xl text-3xl text-neutral-300 text-center`}
        >
          Hey, Folks! 👋
        </div>

        <div
          className={`${delius.className} md:text-xl dark:text-neutral-400 text-neutral-600`}
        >
          <span className="hero-subtext-liner">
            Code-slinger on a mission to remix the web & Web3.
          </span>
          <br />
          <span className="hero-subtext-liner">
            One clever line of code at a time.
          </span>
          <br />
          <span className="hero-subtext-liner">
            When I&apos;m not breaking the internet (on purpose),
          </span>
          <br />
          <span className="hero-subtext-liner">
            I&apos;m building stuff that actually works, bouncing ideas with
            fellow builders, and turning ambitious concepts into slick,
            real-world products.
          </span>
        </div>
      </section>

      {/* Projects */}
      <section className="my-4">
        <div className="flex flex-col lg:flex-row justify-between px-2">
          <div className="hero-subtext-liner text-neutral-500 uppercase tracking-[0.15em] font-semibold md:text-2xl text-xl">
            Some of my best work
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card transform translate-y-12 box"
            >
              <Project {...project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
