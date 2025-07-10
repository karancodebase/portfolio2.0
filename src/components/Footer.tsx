"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React from "react";
import { BackgroundGradientAnimation4 } from "./ui/Background3";
import { BackgroundGradientAnimation3 } from "./ui/Background2";
import {
  BackgroundGradientAnimation1,
  BackgroundGradientAnimation2,
} from "./ui/Background1";

const Footer = () => {
  const boxRef = useRef(null);
  
  // Define a type for background components
  type BackgroundComponent = React.ComponentType;

  // Initialize state with `null` but allow a React component
  const [RandomBackground, setRandomBackground] = useState<BackgroundComponent | null>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       boxRef.current,
  //       { opacity: 0, y: 100 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: boxRef.current,
  //           start: "top 80%",
  //           end: "top 50%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    const animations: BackgroundComponent[] = [
      BackgroundGradientAnimation1,
      BackgroundGradientAnimation2,
      BackgroundGradientAnimation3,
      BackgroundGradientAnimation4,
    ];
    
    setRandomBackground(() => animations[Math.floor(Math.random() * animations.length)]);
  }, []);

  return (
    <footer
      ref={boxRef}
      className="w-full p-2 md:p-4 items-center justify-center h-full overflow-hidden z-50"
    >
      <div
        className="sticky z-30 bottom-0 bg-black md:rounded-[36px] rounded-[20px] left-0 w-full md:h-[20vh] h-[13vh] flex justify-center items-center overflow-hidden"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 blur-[100px]">
            {RandomBackground && <RandomBackground />}
          </div>
          <div className="relative overflow-hidden w-full h-full flex justify-end px-4 sm:px-12 text-right items-start py-6 sm:py-12 text-white">
            <div className="flex justify-between w-full text-base sm:text-lg md:text-xl">
              <p className="text-gray-400 text-xs sm:text-sm"></p>
              <ul className="">
                <li className="hover:text-gray-300 hover:underline transition-colors cursor-pointer">
                  <a target="_blank" href="https://x.com/karandefinitely" className="text-white text-sm sm:text-base">
                    X
                  </a>
                </li>
                <li className="hover:text-gray-300 hover:underline transition-colors cursor-pointer">
                  <a target="_blank" href="https://github.com/karancodebase" className="text-white text-sm sm:text-base">
                    Github
                  </a>
                </li>
                <li className="hover:text-gray-300 hover:underline transition-colors cursor-pointer">
                  <a
                    target="_blank"
                    href="https://bento.me/jaydatt"
                    className="text-white text-sm sm:text-base"
                  >
                    Bento
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="absolute bottom-0 josefin-sans left-2 translate-y-1/3 text-[96px] sm:text-[128px] md:text-[192px] text-white font-black tracking-tighter">
              <span className="hidden sm:inline">JAYDATT</span>
              <span className="inline sm:hidden">JAY</span>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
