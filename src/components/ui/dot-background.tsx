"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

interface DotBackgroundProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dotColorClass?: string;
  highlightColorClass?: string;
}

export const DotBackground = ({
  children,
  className,
  containerClassName,
  dotColorClass = "bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-950",
  highlightColorClass = "bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500",
}: DotBackgroundProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className={cn("absolute inset-0 pointer-events-none", dotColorClass)} />
      <motion.div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
          highlightColorClass
        )}
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )bg-transparent md:bg-transparent
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}; 