"use client";

import { FC, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import PageScene from "./PageScene";

// Import your React content components
import ShowcaseIntro from "../../4dPages/4dIntro";
import About from "../../4dPages/4dAbout";
import SkillsSection from "../../4dPages/4dSkills";
import ProjectsSection from "../../4dPages/4dProject";
import ExperienceTimeline from "../../4dPages/4dExperience";
import ContactSection from "../../4dPages/4dContact";
import ShootingStars from "./ShootingStars";
import { Stars } from "@react-three/drei";

const PAGE_COUNT = 5;

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

const VortexPages: FC = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    let ticking = false;

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      if (ticking) return;

      const threshold = 30;

      if (e.deltaY > threshold) {
        setPage((p) => clamp(p + 1, 0, PAGE_COUNT - 1));
        ticking = true;
      } else if (e.deltaY < -threshold) {
        setPage((p) => clamp(p - 1, 0, PAGE_COUNT - 1));
        ticking = true;
      }

      if (ticking) {
        setTimeout(() => {
          ticking = false;
        }, 300);
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const pageContents = [
    // Page 0: ShowcaseIntro and AboutMe side by side
    <ShowcaseIntro key={"intro"} />,
    <About key={"about"} />,

    // Page 1:
    <SkillsSection key={"skills"} />,

    // Page 2:
    <ProjectsSection key={"projects"} />,

    // Page 3:
    <>
      <ExperienceTimeline key="experience" />
      <ContactSection key="contact" />
    </>,
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "95vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000014",
        top: "5vh", // Adjust to fit the header
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}>
        <ambientLight intensity={0.18} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        {/* You can keep or remove Drei's <Stars /> if you want */}
        <Stars radius={100} depth={60} count={600} factor={4} fade />

        {Array.from({ length: PAGE_COUNT }).map((_, i) => (
          <PageScene key={i} index={i}>
            {page === i ? pageContents[i] : null}
          </PageScene>
        ))}
        <ShootingStars />
        <CameraRig targetPage={page} />
      </Canvas>
    </div>
  );
};

export default VortexPages;
