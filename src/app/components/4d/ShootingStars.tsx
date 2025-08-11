"use client";

import { FC, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ShootingStar {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
}

const SHOOTING_STAR_COUNT = 15;

const ShootingStars: FC = () => {
  const shootingStars = useRef<ShootingStar[]>([]);

  // Initialize stars once
  if (shootingStars.current.length === 0) {
    for (let i = 0; i < SHOOTING_STAR_COUNT; i++) {
      shootingStars.current.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 60,
          Math.random() * 40 + 10,
          (Math.random() - 0.5) * 60
        ),
        velocity: new THREE.Vector3(
          Math.random() * 0.5 + 0.1, // X velocity
          -(Math.random() * 0.3 + 0.1), // Y velocity (falling down)
          0
        ),
        life: 0,
        maxLife: 100 + Math.random() * 50,
      });
    }
  }

  useFrame(() => {
    shootingStars.current.forEach((star) => {
      star.position.add(star.velocity);
      star.life++;
      if (star.life > star.maxLife) {
        // Reset star position and velocity when life ends
        star.position.set(
          (Math.random() - 0.5) * 60,
          Math.random() * 40 + 10,
          (Math.random() - 0.5) * 60
        );
        star.life = 0;
        star.maxLife = 100 + Math.random() * 50;
        star.velocity.set(
          Math.random() * 0.5 + 0.1,
          -(Math.random() * 0.3 + 0.1),
          0
        );
      }
    });
  });

  return (
    <>
      {shootingStars.current.map((star, i) => (
        <mesh key={i} position={star.position}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial
            emissive={"white"}
            emissiveIntensity={2}
            color={"white"}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      ))}
    </>
  );
};

export default ShootingStars;
