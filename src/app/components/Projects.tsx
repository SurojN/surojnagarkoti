"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Barber Management System",
    description:
      "Appointment scheduling and client management for Barberino's World in Italy.",
    tech: ["React"],
    liveUrl: "https://barberinosworld.com/",
  },
  // ... other projects
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ name, description, tech, liveUrl }, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 hover:scale-[1.03] transition-transform cursor-pointer shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              onClick={() => liveUrl !== "#" && window.open(liveUrl, "_blank")}
            >
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600 text-indigo-100 px-3 py-1 rounded-full text-sm font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
