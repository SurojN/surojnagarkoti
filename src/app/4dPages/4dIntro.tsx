"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ShowcaseIntro() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-12 bg-transparent min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="mx-auto mb-6 w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-500 shadow-[0_0_20px_#5c94ff]">
          <Image
            src="/selfpic.jpg"
            alt="Suroj Nagarkoti"
            width={144}
            height={144}
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 drop-shadow-[0_0_10px_rgba(147,197,253,0.7)]">
          Hi, I&apos;m <br />
          <span className="block mt-2 text-indigo-400">Suroj Nagarkoti</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-6 max-w-xl text-lg md:text-xl text-[#9bdcffcc] drop-shadow-[0_0_5px_rgba(155,220,255,0.8)]"
      >
        Frontend developer crafting elegant, interactive UIs <br />
        using React, Next.js & Tailwind CSS.
      </motion.p>
    </section>
  );
}
