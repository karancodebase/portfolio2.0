"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Project, { showcase } from "./data/Showcase";
import { Poppins } from "next/font/google";
import NavigationLink from "./NavigationLink";
import { Edu_SA_Beginner } from 'next/font/google'
import { Delius } from 'next/font/google'

const poppinBold = Poppins({
  weight: "600",
  preload: false,
});
const eduBeginner = Edu_SA_Beginner({
  weight: '400',
  subsets: ['latin'],
})
const delius = Delius({
  weight: '400',
  subsets: ['latin'],
})

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
    <div className="py-14">
      <div
        className={`${poppinBold.className} mb-2
          md:text-4xl text-3xl text-neutral-300`}
      >
        Not convinced yet?
      </div>
      <div className={`${eduBeginner.className} lg:tracking-wide md:text-xl text-neutral-400`}>
        That’s fair. I could keep talking about what I do —
        but the best way to get it is to see it in action. <br />
        Here are a few projects that speak louder than bios ever could.
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-4 mt-10"
      >
        {showcase.map((item, index) => (
          <div key={index} className="project-card opacity-0">
            <Project {...item} />
          </div>
        ))}
      </div>
      <div
        className={`${delius.className} mt-10 hero-subtext-liner
          md:text-xl text-neutral-300 font-extrabold text-center`}
      >
        Still nosy? Smash that
        <NavigationLink href="/projects"> Stuff page</NavigationLink>
        for the full menu.
      </div>
    </div>
  );
};

export default Stuff;
