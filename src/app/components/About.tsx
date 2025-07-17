"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-950 text-gray-800 dark:text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am Suroj Nagarkoti, a dedicated frontend developer with a
            background in geomatics engineering. My passion lies in crafting
            intuitive and engaging user interfaces using technologies like
            React, Next.js, and Tailwind. With experience building complex web
            applications across Europe, I specialize in transforming ideas into
            accessible, high-performance digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-4 text-md">
            <li>
              <strong>📍 Location:</strong> Lalitpur, Nepal
            </li>
            <li>
              <strong>📧 Email:</strong> surojnagarkoti@gmail.com
            </li>
            <li>
              <strong>📞 Phone:</strong> +977 9841959785
            </li>
            <li>
              <strong>🎓 Education:</strong> Geomatics Engineering
            </li>
            <li>
              <strong>💼 Experience:</strong> 2+ years in frontend development
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
