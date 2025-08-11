"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-6 px-6 bg-[#000014] text-indigo-400"
      style={{ boxShadow: "inset 0 0 40px #4f46e5cc" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-14 text-indigo-400"
        >
          <a
            href="https://github.com/surojN"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition duration-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.9)]"
          >
            <Github size={32} />
          </a>
          <a
            href="https://linkedin.com/in/suroj-nagarkoti"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition duration-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.9)]"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:surojnagarkoti@gmail.com"
            aria-label="Email"
            className="hover:text-white transition duration-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.9)]"
          >
            <Mail size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
