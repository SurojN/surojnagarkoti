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
    <section id="experience" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="relative border-l-2 border-indigo-500 ml-4 pl-6 space-y-12">
          {experiences.map(({ role, company, duration, description }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-6 top-2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-gray-900" />
              <h3 className="text-xl font-semibold">{role}</h3>
              <span className="block text-indigo-300 text-sm mb-2">
                {company} — {duration}
              </span>
              <p className="text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
