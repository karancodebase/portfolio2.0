"use client";
import * as motion from "motion/react-client";

export default function NotFound() {
  return (
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-screen text-white"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4"
        >
          Oops!!
        </motion.h1>
        <motion.h2
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-4"
        >
          You’ve taken a wrong turn! 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-400 mb-6"
        >
          If this were a Next.js API route, 
          you’d be getting a 404 error. <br />
          Oh wait… you just did that! <br />
          When you try to access a route that 
          doesn’t exist, Next.js throws this error.  <br />
          No worries, even the best explorers get lost.
          While we debug reality, why not check out something else?  
          
          </motion.p>

        <motion.a
          href="/"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-blue-300 social-link text-gray-900 font-bold mt-4 px-6 py-2 rounded-lg hover:bg-blue-400 transition"
        >
          Go Back Home
        </motion.a>
      </motion.div>
    </div>
  );
}

// You look lost, stranger. You know what helps when you’re lost? A piping hot bowl of noodles. Take a seat, we’re frantically at work here cooking up something good. Oh, you need something to read? These might help you:
