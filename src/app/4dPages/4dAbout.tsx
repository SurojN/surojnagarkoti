"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-transparent text-[#9bdcffcc] py-10 px-6 min-h-[450px]"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 drop-shadow-[0_0_10px_rgba(147,197,253,0.7)]">
            About Me
          </h2>
          <p className="text-lg leading-relaxed drop-shadow-[0_0_6px_rgba(155,220,255,0.8)]">
            I am <strong>Suroj Nagarkoti</strong>, a dedicated frontend
            developer with a background in geomatics engineering. My passion
            lies in crafting intuitive and engaging user interfaces using
            technologies like React, Next.js, and Tailwind. With experience
            building complex web applications across Europe, I specialize in
            transforming ideas into accessible, high-performance digital
            experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5 text-[#9bdcffcc] text-md drop-shadow-[0_0_5px_rgba(155,220,255,0.7)]"
        >
          <ul className="space-y-4">
            <li>
              <strong>📍 Location:</strong>{" "}
              <a
                href="https://www.google.com/maps/place/Lalitpur,+Nepal"
                className="text-indigo-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lalitpur, Nepal
              </a>
            </li>
            <li>
              <strong>📧 Email:</strong>{" "}
              <a
                href="mailto:surojnagarkoti@gmail.com"
                className="text-indigo-400 hover:underline"
              >
                surojnagarkoti@gmail.com
              </a>
            </li>
            <li>
              <strong>📞 Phone:</strong>{" "}
              <a
                href="tel:+9779841959785"
                className="text-indigo-400 hover:underline"
              >
                +977 9841959785
              </a>
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
