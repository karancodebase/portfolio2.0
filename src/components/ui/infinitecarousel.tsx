"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "AWS", icon: "/aws-svgrepo-com.svg" },
  { name: "PostgreSQL", icon: "/brand-postgresql-svgrepo-com.svg" },
  { name: "Ethereum", icon: "/ethereum-cryptocurrency-svgrepo-com.svg" },
  { name: "Figma", icon: "/figma-svgrepo-com.svg" },
  { name: "Github", icon: "/github-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/javascript-1-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/typescript-16-svgrepo-com.svg" },
  { name: "MongoDB", icon: "/mongo-svgrepo-com.svg" },
  { name: "Nextjs", icon: "/nextjs-svgrepo-com.svg" },
  { name: "Nodejs", icon: "/nodejs02-svgrepo-com.svg" },
  { name: "React", icon: "/react-svgrepo-com.svg" },
  { name: "Tailwind", icon: "/tailwind-svgrepo-com.svg" },
  { name: "Vercel", icon: "/vercel.svg" },
  { name: "VSCode", icon: "/vscode-svgrepo-com.svg" },
];

export default function InfiniteCarousel() {
  return (
    <div className="overflow-hidden py-4 lg:max-w-[60vw] max-w-[80vw]">
      <div className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-2 opacity-100 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        }}>
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }} // Moves halfway to create a loop
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg"
            >
              <Image src={skill.icon} alt={skill.name} width={100} height={100}/>
              <p className="mt-2 dark:text-neutral-950 text-neutral-50">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
