"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center px-6 pt-10 md:pt-50 lg:pt-50 pb-24 border-b-2 border-b-blue-700 overflow-hidden h-screen"
    >
      {/* 🚀 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl relative z-10"
      >
        Build. Automate. Scale.
      </motion.h1>

      {/* 🧠 Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg md:text-xl max-w-2xl text-zinc-600 dark:text-zinc-400 relative z-10"
      >
        I’m Aslam — a Full Stack Developer crafting scalable web apps, real-time
        systems, and automation tools that solve real business problems.
      </motion.p>

      {/* 🎯 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 relative z-10"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-primary text-text font-medium hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-border bg-card hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          Contact Me
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-sm text-zinc-500 relative z-10"
      >
        Building real-time apps • Automation tools • SaaS products
      </motion.div>
    </section>
  );
}
