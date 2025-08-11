"use client";

import { FC, ReactNode } from "react";
import { Html } from "@react-three/drei";
import GlowingRing from "./GlowingRing";
import ParticleField from "./ParticleField";
import ShootingStars from "./ShootingStars";

type ColorTuple = [number, number, number];

interface PageSceneProps {
  index: number;
  children?: ReactNode;
}

const PAGE_GAP = 12;

const pageConfigs: {
  color: ColorTuple;
  ringScale: number;
  particleSeed: number;
}[] = [
  { color: [0.8, 0.3, 1], ringScale: 4.8, particleSeed: 1 },
  { color: [0.2, 0.9, 1], ringScale: 6.0, particleSeed: 2 },
  { color: [1.0, 0.5, 0.2], ringScale: 7.0, particleSeed: 3 },
  { color: [0.6, 1.0, 0.4], ringScale: 8.5, particleSeed: 4 },
  { color: [0.8, 0.2, 0.6], ringScale: 10.0, particleSeed: 5 },
];

const PageScene: FC<PageSceneProps> = ({ index, children }) => {
  const z = -index * PAGE_GAP;
  const cfg = pageConfigs[index % pageConfigs.length];

  return (
    <group position={[0, 0, z]}>
      {/* Floor Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#03030b" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Glowing Ring */}
      <GlowingRing
        scale={cfg.ringScale}
        speed={0.12 + index * 0.03}
        color={cfg.color}
      />

      {/* Particle Field */}
      <ParticleField
        seed={cfg.particleSeed}
        count={220 + index * 60}
        spread={18 + index * 6}
        speed={0.03 + index * 0.005}
      />

      {/* Shooting Stars */}
      <ShootingStars />

      {/* React Content Overlay */}
      <Html
        position={[0, 0, 1]} // Slightly in front of other elements
        center
        style={{
          width: "100vw",
          maxWidth: 900,
          pointerEvents: "auto",
          userSelect: "text",
          color: "white",
          padding: "2rem",
          opacity: 0.9,
          border: "none",
        }}
      >
        {children}
      </Html>
    </group>
  );
};

export default PageScene;
