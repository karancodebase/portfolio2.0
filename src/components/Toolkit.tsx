"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SkillCard, { skills } from "./data/Skills";
import { Poppins } from "next/font/google";
const poppinBold = Poppins({
  weight: "600",
  preload: false,
});

const Toolkit = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textRef1 = useRef<HTMLDivElement | null>(null);
  const textRef2 = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate heading and texts
            gsap.fromTo(
              titleRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 1 }
            );

            gsap.fromTo(
              textRef1.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 1, delay: 0.2 }
            );

            gsap.fromTo(
              textRef2.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 1, delay: 0.4 }
            );

            // Animate each skill card one by one
            const cards = iconsRef.current?.querySelectorAll(".skill-card");
            if (cards) {
              gsap.fromTo(
                cards,
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.15,
                  delay: 0.6,
                  ease: "power3.out",
                }
              );
            }

            observer.disconnect(); // run once
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (iconsRef.current) {
      observer.observe(iconsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="py-14">
      {/* Title */}
      <div
        ref={titleRef}
        className={`${poppinBold.className} mb-2
          md:text-5xl text-3xl font-extrabold`}
        style={{ opacity: 0 }}
      >
        Tools of the Trade
      </div>

      {/* Text */}
      <div
        ref={textRef1}
        className="md:text-xl text-sm mb-4"
        style={{ opacity: 0 }}
      >
        The <span className="font-bold tracking-wider">builder kit</span> that powers my projects.
        You know the good stuff:
      </div>

      {/* Skill Cards Grid */}
      <div
        ref={iconsRef}
        className="grid grid-cols-3 md:gap-6 gap-2 mb-6"
      >
        {skills.map((skill, index) => (
          <div key={index} className="skill-card opacity-0">
            <SkillCard {...skill} />
          </div>
        ))}
      </div>

      {/* Text */}
      <div
        ref={textRef2}
        className="md:text-xl text-sm mb-4"
        style={{ opacity: 0 }}
      >
        From crafting sleek UIs with Next.js and Tailwind to deploying smart
        contracts on Solana with Rust, I’m all about using the right tool for
        the job — and the fun that comes with learning new ones.
      </div>
    </div>
  );
};

export default Toolkit;
