"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-3 px-6 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-10  text-indigo-300"
        >
          <a
            href="https://github.com/surojN"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={28} className="hover:text-white transition" />
          </a>
          <a
            href="https://linkedin.com/in/suroj-nagarkoti"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="hover:text-white transition" />
          </a>
          <a href="mailto:surojnagarkoti@gmail.com" aria-label="Email">
            <Mail size={28} className="hover:text-white transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
