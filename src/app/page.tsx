"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 text-zinc-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start">
          <Image
            src="/vercel.svg"
            alt="avatar"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full max-w-[200px]"
          />
        </motion.div>

        <div className="md:col-span-2 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-lg mb-2">Hey folks! 👋🏻 This is ... </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4">Jaydatt Karan</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="text-zinc-400 mb-8 leading-relaxed">
            I'm a CSE student (2026) who thrives on the full-stack
            grind—from sleek UIs to scalable backend magic. <br />

            I break, fix, and build with JavaScript, React, Node.js &
            Web3—because why pick one when you can have both? Web2 keeps
            things smooth, Web3 keeps things wild. I mix them up for faster,
            smarter, and decentralized experiences.
          </motion.p>

          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="bg-blue-300 text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-blue-400 transition">
              About
            </Link>
            <Link
              href="/contact"
              className="bg-zinc-800 border-2 border-zinc-600 font-bold px-6 py-2 rounded-lg hover:bg-zinc-700 transition">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </div>

      <section>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.5 }}
          className="text-2xl font-bold mb-6">What I&apos;ve Been Upto...</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 1 }}
            className="bg-zinc-800 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Web2 Meets Web3</h3>
              <span className="text-2xl">💼</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Love the traditional web stack, but Web3? That's where things
              get next-level. I build Ethereum-powered apps, smart contracts
              (Solidity), and decentralized storage—merging Web2's speed with
              Web3's trustlessness for better ownership and accessibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="bg-zinc-800 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">CLI & Automation Geek </h3>
              <span className="text-2xl">💻</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Why click buttons when you can type magic? I built:
            </p>
            <CopyCommand />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function CopyCommand() {
  const [copied, setCopied] = useState(false);
  const commandText = "npx karancodes";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commandText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 mt-2">
      <p className="font-semibold">My Portfolio but in your terminal</p>
      <div className="w-[13rem] md:w-[20rem] relative py-2 px-4 flex flex-row justify-between border-2 bg-slate-900 text-white h-12 text-lg rounded-lg font-semibold">
        <span>{commandText}</span>
        <button
          onClick={handleCopy}
          className="cursor-pointer hover:opacity-75 transition-opacity"
          aria-label="Copy command"
        >
          <Copy
            size={18}
            className="mt-1"
          />
        </button>

        {copied && (
          <span className="absolute right-2 top-full mt-1 text-sm text-green-500">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}