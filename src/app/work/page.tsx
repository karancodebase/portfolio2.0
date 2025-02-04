"use client";

import { motion } from "framer-motion";

export default function Work() {
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
                    Hold up! 🚧
                </motion.h1>
                <motion.h2
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold mb-4"
                >
                    This route isn’t ready yet.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg text-gray-400 mb-6"
                >
                    Even the best devs hit dead ends. <br />
                    While we’re wiring things up, why not
                    explore something else?

                </motion.p>

                <motion.a
                    href="/"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-blue-300 text-gray-900 font-bold mt-4 px-6 py-2 rounded-lg hover:bg-blue-400 transition"
                >
                    Go Back Home
                </motion.a>
            </motion.div>
        </div>
    )
}