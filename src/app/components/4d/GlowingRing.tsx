"use client";

import { FC, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ColorTuple = [number, number, number];

interface GlowingRingProps {
  scale?: number;
  speed?: number;
  color?: ColorTuple;
}

const GlowingRing: FC<GlowingRingProps> = ({
  scale = 6,
  speed = 0.2,
  color = [0.2, 0.9, 1],
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * speed;
      const pulse = 1 + 0.2 * Math.sin(elapsed * 3);
      groupRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = elapsed * speed * 1.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = elapsed * speed * 0.8;
    }
  });

  const emissiveColor = new THREE.Color(color[0], color[1], color[2]);

  return (
    <group ref={groupRef} rotation={[Math.PI / 2, 0, 0]}>
      {/* Main Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[scale, 0.2, 32, 128]} />
        <meshPhysicalMaterial
          emissive={emissiveColor}
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.6}
          clearcoat={1}
          clearcoatRoughness={0.1}
          blending={THREE.AdditiveBlending}
          transparent
        />
      </mesh>

      {/* Smaller Inner Ring */}
      <mesh
        ref={ring2Ref}
        rotation={[0, 0, Math.PI / 3]}
        position={[0, 0, 0.1]}
      >
        <torusGeometry args={[scale * 0.6, 0.07, 16, 64]} />
        <meshPhysicalMaterial
          emissive={emissiveColor.clone().multiplyScalar(0.6)}
          emissiveIntensity={1}
          roughness={0.2}
          metalness={0.5}
          clearcoat={0.7}
          clearcoatRoughness={0.2}
          blending={THREE.AdditiveBlending}
          transparent
        />
      </mesh>

      {/* Thin Outer Ring for subtle layered effect */}
      <mesh
        ref={ring3Ref}
        rotation={[Math.PI / 8, 0, Math.PI / 4]}
        position={[0, 0, 0]}
      >
        <torusGeometry args={[scale * 1.1, 0.05, 16, 64]} />
        <meshPhysicalMaterial
          emissive={emissiveColor.clone().multiplyScalar(0.4)}
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.3}
          clearcoat={0.5}
          clearcoatRoughness={0.3}
          blending={THREE.AdditiveBlending}
          transparent
        />
      </mesh>
    </group>
  );
};

export default GlowingRing;
