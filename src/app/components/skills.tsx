"use client";

import { motion } from "framer-motion";
import { Code, Server, Layout } from "lucide-react";

const skills = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Layout },
  { name: "Tailwind CSS", icon: Server },
  { name: "TypeScript", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "Git", icon: Server },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {skills.map(({ name, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center space-y-2 bg-indigo-800 rounded-lg p-4 hover:scale-110 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Icon size={36} className="text-indigo-300" />
              <span className="font-semibold text-lg">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
