"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Barberino’s World",
    description:
      "Appointment scheduling and digital client management for Barberino’s, an upscale Italian barbershop chain.",
    tech: ["React", "TypeScript", "Vite"],
    liveUrl: "https://barberinosworld.com/",
  },
  {
    name: "InBellezza",
    description:
      "Backoffice and salon management software used across Italy and Mexico, enabling bookings, marketing, and CRM for salons.",
    tech: ["React", "TypeScript", "Vite"],
    liveUrl: "https://www.inbellezza.com.mx/",
  },
  {
    name: "Humanitas University",
    description:
      "University administration portal for Humanitas in Milan, providing LMS tools, exam scheduling, and student management.",
    tech: ["React"],
    liveUrl: "https://www.hunimed.eu/",
  },
  {
    name: "Arriva Italia",
    description:
      "User and booking management platform for Arriva Italia, one of the largest transportation companies in Europe.",
    tech: ["React"],
    liveUrl: "https://arriva.it/en/",
  },
  {
    name: "WAYD",
    description:
      "A dating and social meetup platform focused on real-life events, with chat features and smart contact pruning.",
    tech: ["Angular", "TypeScript"],
    liveUrl: "https://wayd.com/",
  },
  {
    name: "doValue",
    description:
      "Corporate event management and survey system for doValue, a leading asset management company in Europe.",
    tech: ["React", "TypeScript", "Vite"],
    liveUrl: "https://dovalue.it/",
  },
  {
    name: "Gesog",
    description:
      "Military holiday and leave management system for Italian armed forces, handling scheduling and approval workflows.",
    tech: ["React"],
  },
  {
    name: "Fora",
    description:
      "Warehouse and inventory management system for radioactive medicines used in Italian hospitals.",
    tech: ["React", "TypeScript"],
  },
  {
    name: "Teledife",
    description:
      "User and document management system developed for Italian public prosecutors, ensuring secure access and control.",
    tech: ["React"],
  },
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
              transition={{ delay: idx * 0.05, duration: 0.3 }}
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
