"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function ShowcaseIntro() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="p-5 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6">
      <div className="max-w-4xl text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          <Image
            src="/selfpic.jpg"
            alt="self picture"
            className="w-32 h-32 rounded-full mx-auto mb-4"
            width={130}
            height={130}
          />

          <span>Hi, I&apos;m </span>
          <span className="text-indigo-400">Suroj Nagarkoti</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Frontend Developer crafting elegant, interactive UIs using React,
          Next.js & Tailwind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            View My Work <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
