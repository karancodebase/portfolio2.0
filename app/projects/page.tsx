"use client";
import Project from "../../components/data/ProjectCard";
import { projects } from "../../components/data/projects";
import { Roboto, Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const poppinBold = Poppins({
  weight: "800",
  preload: false,
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Animate hero subtext lines
  useEffect(() => {
    const lines = document.querySelectorAll(".hero-subtext-liner");
    if (lines.length > 0) {
      gsap.set(lines, { opacity: 0 });

      lines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: index * 0.5 }
        );
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = containerRef.current?.querySelectorAll(".project-card");
  
            if (cards && cards.length > 0) {
              // Immediately hide all cards before delay
              gsap.set(cards, { opacity: 0, y: 50 });
  
              // Add delay before playing the animation
              setTimeout(() => {
                gsap.to(cards, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.2,
                  delay: 0.5,
                  ease: "power3.out",
                });
              }, 2300); // 1 second delay before animating
            }
  
            observer.disconnect(); // Animate only once
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  
    return () => {
      observer.disconnect();
    };
  }, []);
  

  return (
    <div className={`${roboto.className}`}>
      {/* Intro */}
      <section className="px-2 py-2">
        <div
          className={`${poppinBold.className} hero-subtext-liner md:mt-10 mb-8 md:text-5xl text-3xl font-extrabold text-center`}
        >
          Hey, Folks! 👋
        </div>

        <div
          className={`${roboto.className} md:text-xl dark:text-neutral-400 text-neutral-600`}
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
      <section className="my-10">
        <div className="flex flex-col lg:flex-row justify-between px-2">
          <div className="hero-subtext-liner text-neutral-500 uppercase tracking-[0.15em] font-semibold md:text-2xl text-xl">
            Some of my best work
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4"
          ref={containerRef}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card opacity-0 transform translate-y-12 box"
            >
              <Project {...project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
