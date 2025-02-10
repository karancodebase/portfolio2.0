import CoverDemo from "@/components/Cover";
import { HeroHighlightDemo } from "@/components/Highlight";
import LinkPreviewDemo from "@/components/LinkPreview";
import React from "react";
import BentoGrid from "@/components/BentoGrid";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="h-screen md:pb-[5rem] md:pt-[5rem] flex-1 grid grid-rows-3">
        {/* First Third */}
        <section className="flex items-center justify-center ">
          <HeroHighlightDemo />
        </section>

        {/* Middle Third */}
        <section className="flex md:mt-20  items-center justify-center">
          <CoverDemo />
        </section>
        <Drawer>
          <DrawerTrigger className="text-white h-30 text-4xl underline font-bold">
            Get in touch
          </DrawerTrigger>
          <DrawerContent className="flex justify-center items-center mb-10">
            <DrawerHeader>
              <DrawerTitle>
                {" "}
                <section className="mb-[4rem]">
                  <LinkPreviewDemo />
                </section>
              </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <Link href="/contact">
                <Button className="w-[10rem]">Contact me!!</Button>
              </Link>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <section>
        <BentoGrid />
      </section>
    </div>
  );
};

export default page;
