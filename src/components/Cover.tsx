import React from "react";
import { Cover } from "@/components/ui/cover";

export default function CoverDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="filter-none text-[1.8rem] md:text-4xl lg:text-5xl font-semibold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        They dont&apos;t wait. Neither do I. <br />
        Every fix is a win. Clean code,{" "}
        <Cover>no compromises</Cover>
      </h1>
    </div>
  );
}
