import Image from "next/image";
import React from "react";

interface Skills {
  id: number;
  img: string;
  title: string;
}

export const skills = [
  {
    id: 1,
    img: "./nextjs-svgrepo-com.svg",
    title: "Nextjs",
  },
  {
    id: 2,
    img: "./react-svgrepo-com.svg",
    title: "Reactjs",
  },
  {
    id: 3,
    img: "./nodejs-logo-svgrepo-com.svg",
    title: "Nodejs",
  },
  {
    id: 4,
    img: "./tailwind-svgrepo-com.svg",
    title: "Tailwind",
  },
  {
    id: 5,
    img: "./brand-postgresql-svgrepo-com.svg",
    title: "Postgres",
  },
  {
    id: 6,
    img: "./figma-svgrepo-com.svg",
    title: "Figma",
  },
  {
    id: 7,
    img: "./ethereum-cryptocurrency-svgrepo-com.svg",
    title: "Ethereum",
  },
  {
    id: 8,
    img: "./git-svgrepo-com.svg",
    title: "Git",
  },
  {
    id: 9,
    img: "./github-svgrepo-com.svg",
    title: "GitHub",
  },
  {
    id: 10,
    img: "./javascript-1-svgrepo-com.svg",
    title: "JS",
  },
  {
    id: 11,
    img: "./mongo-svgrepo-com.svg",
    title: "Mongo",
  },
  {
    id: 12,
    img: "./typescript-16-svgrepo-com.svg",
    title: "TS",
  },
  {
    id: 13,
    img: "./vercel.svg",
    title: "Vercel",
  },
  {
    id: 14,
    img: "./vscode-svgrepo-com.svg",
    title: "VScode",
  },
  {
    id: 15,
    img: "./window.svg",
    title: "Linux",
  },
];
const SkillCard = ({ img, title }: Skills) => {
  return (
    <div>
      <section>
        <div className="flex md:gap-2 gap-1 border py-1 bg-gray-900/30 md:px-4 px-2 items-center rounded-full">
          <Image src={img} alt={`Background`} priority height={25} width={25} />
          <div className="md:text-lg text-sm items-center md:font-semibold">{title}</div>
        </div>
      </section>
    </div>
  );
};

export default SkillCard;
