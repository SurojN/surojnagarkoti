"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Paintbrush,
  Cloud,
  Globe,
  Sparkles,
  Gauge,
} from "lucide-react";

const skills = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Layout },
  { name: "Tailwind CSS", icon: Paintbrush },
  { name: "TypeScript", icon: Code },
  { name: "JavaScript (ES6+)", icon: Code },
  { name: "Git & GitHub", icon: Server },
  { name: "Redux", icon: Database },
  { name: "React Query / SWR", icon: Cloud },
  { name: "Headless UI / Radix UI", icon: Sparkles },
  { name: "Framer Motion", icon: Sparkles },
  { name: "REST & GraphQL APIs", icon: Globe },
  { name: "CI/CD & GitHub Actions", icon: Wrench },
  { name: "Webpack / Vite", icon: Server },
  { name: "Responsive Design", icon: Layout },
  { name: "Accessibility (a11y)", icon: Wrench },
  { name: "Performance Optimization", icon: Gauge },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-10 px-6 bg-[#000014] text-indigo-400 overflow-hidden"
      style={{
        boxShadow: "inset 0 0 50px #4f46e5cc",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 tracking-wide text-indigo-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.8)]">
          My Skills
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-10"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 22,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map(({ name, icon: Icon }, idx) => (
              <div
                key={idx}
                className="min-w-[130px] flex-shrink-0 flex flex-col items-center space-y-3 bg-indigo-900/20 rounded-lg p-5 backdrop-blur-md border border-indigo-600/30 shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_20px_rgba(147,197,253,0.9)] transition-shadow cursor-default"
              >
                <Icon
                  size={40}
                  className="text-indigo-400 drop-shadow-[0_0_8px_rgba(147,197,253,0.9)]"
                />
                <span className="font-semibold text-lg text-center select-none">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
