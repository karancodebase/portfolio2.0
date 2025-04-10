"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Project, { showcase } from "./data/Showcase";
import { Poppins } from "next/font/google";
import NavigationLink from "./NavigationLink";

const poppinBold = Poppins({
  weight: "600",
  preload: false,
});

const Stuff = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards =
              containerRef.current?.querySelectorAll(".project-card");

            if (cards) {
              gsap.fromTo(
                cards,
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.2,
                  delay: 0.3,
                  ease: "power3.out",
                }
              );
            }

            observer.disconnect(); // only animate once
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
    <div className="py-16">
      <div
        className={`${poppinBold.className} md:mb-2
          md:text-5xl text-3xl font-extrabold `}
      >
        Stuff I&apos;ve Built
      </div>
      <div className="text-lg dark:text-neutral-300 text-neutral-700">
        I&apos;ve cooked up all kinds of stuff — from “hello world” sites to
        beasts with APIs, auth, and attitude. These are the bangers. Click
        around, snoop a bit.
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"
      >
        {showcase.map((item, index) => (
          <div key={index} className="project-card opacity-0">
            <Project {...item} />
          </div>
        ))}
      </div>
      <div
        className={`${poppinBold.className} mt-10 hero-subtext-liner
          md:text-xl dark:text-neutral-300 text-neutral-800 text-lg font-extrabold text-center`}
      >
        Still nosy? Smash that Stuff page
        <NavigationLink href="/projects"> Stuff page</NavigationLink>
        for the full menu.
      </div>
    </div>
  );
};

export default Stuff;
