"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import { Edu_SA_Beginner } from 'next/font/google'
import { Delius } from 'next/font/google'

const eduBeginner = Edu_SA_Beginner({
  weight: '400',
  subsets: ['latin'],
})
const delius = Delius({
  weight: '400',
  subsets: ['latin'],
})
const poppinBold = Poppins({
  weight: "600",
  preload: false,
});

const Contact = () => {
  return (
    <div className="py-14">
      <div
        className={`${poppinBold.className} mb-3
          md:text-4xl text-xl text-neutral-300`}
      >
        Let&apos;s build something together!
      </div>
      <div className={`${eduBeginner.className} md:text-xl text-neutral-700 dark:dark:text-neutral-400 text-neutral-700 text-sm mb-4`}>
          Got a wild idea? A collab proposal? Or just want to geek out about
          Web3?
       
        <br />
          Hit me up — I’m always down for a good chat.
       
      </div>
      <div
        className={`${delius.className} md:text-xl mb-4 hero-subtext-liner`}
      >
        📩 DMs open at{" "}
        <Link
          href="https://x.com/karandefinitely"
          className="text-cyan-500 hover:text-cyan-700 duration-200 hover:underline"
        >
          {" "}
          @karandefinitely
        </Link>
      </div>
      <div
        className={`${delius.className} mt-10 hero-subtext-liner
          md:text-xl dark:text-neutral-300 text-neutral-800 text-lg font-extrabold text-center`}
      >
        Prefer email? Hit up the
        <NavigationLink href="/contact">contact page!</NavigationLink>
      </div>
    </div>
  );
};

export default Contact;
