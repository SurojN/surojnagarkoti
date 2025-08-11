"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Mid-Level Frontend Developer",
    company: "Kotuko Nepal",
    duration: "08/2023 - Current",
    description:
      "Developed responsive and accessible web interfaces, collaborated with backend teams, mentored juniors, and streamlined workflow with Vite and Next.js.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Touchware Nepal",
    duration: "06/2022 - 08/2023",
    description:
      "Built responsive web interfaces, integrated REST APIs, debugged issues, and promoted modern tools adoption.",
  },
  {
    role: "Frontend Intern",
    company: "Touchware Nepal",
    duration: "04/2022 - 06/2022",
    description:
      "Assisted in frontend development, learned best practices, and contributed to UI enhancements.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-[#000014] text-[#9bdcffcc] min-h-[500px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 drop-shadow-[0_0_15px_rgba(147,197,253,0.9)] text-center">
          Experience
        </h2>

        <div className="relative border-l-4 border-indigo-500/70 ml-6 pl-8 space-y-16">
          {experiences.map(({ role, company, duration, description }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-10 top-2 w-6 h-6 bg-indigo-500 rounded-full border-2 border-[#000014] drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]" />
              <h3 className="text-2xl font-semibold text-indigo-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.9)]">
                {role}
              </h3>
              <span className="block text-indigo-400 text-sm mb-3 font-mono tracking-wide">
                {company} — {duration}
              </span>
              <p className="text-[#a0caffcc] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
