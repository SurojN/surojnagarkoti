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
  // { name: "Testing (Jest, Testing Library)", icon: Bug },
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
      className="py-10 px-6 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white overflow-hidden"
    >
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">My Skills</h2>

        {/* Scrolling wrapper */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicate the array for seamless loop */}
            {[...skills, ...skills].map(({ name, icon: Icon }, idx) => (
              <div
                key={idx}
                className="min-w-[120px] flex-shrink-0 flex flex-col items-center space-y-2 bg-indigo-800 rounded-lg p-4"
              >
                <Icon size={36} className="text-indigo-300" />
                <span className="font-semibold text-lg text-center">
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
