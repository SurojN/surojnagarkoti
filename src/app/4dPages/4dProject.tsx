"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalProjects]);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-transparent text-[#9bdcffcc] min-h-[500px]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 drop-shadow-[0_0_15px_rgba(147,197,253,0.9)] text-center">
          Projects
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-lg shadow-indigo-900/40 border border-indigo-700/40">
          <motion.div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map(({ name, description, tech, liveUrl }, idx) => (
              <motion.div
                key={idx}
                className="min-w-full bg-[#0a001e] p-8 cursor-pointer flex flex-col justify-between"
                onClick={() => liveUrl && window.open(liveUrl, "_blank")}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px #5c94ff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.9)]">
                  {name}
                </h3>
                <p className="text-[#a0caffcc] mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-700/70 text-indigo-200 px-4 py-1 rounded-full text-sm font-mono tracking-wide drop-shadow-[0_0_5px_rgba(99,102,241,0.8)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
