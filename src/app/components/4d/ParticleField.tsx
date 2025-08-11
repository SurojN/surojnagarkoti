"use client";

import { FC, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  seed: number;
  count: number;
  spread: number;
  speed: number;
}

const ParticleField: FC<ParticleFieldProps> = ({
  seed,
  count,
  spread,
  speed,
}) => {
  // Generate particle positions with seed, count, and spread
  const points = useMemo(() => {
    const arr: [number, number, number][] = [];
    const random = (function* (seedValue: number) {
      let value = seedValue;
      while (true) {
        value = (value * 16807) % 2147483647;
        yield value / 2147483647;
      }
    })(seed);

    for (let i = 0; i < count; i++) {
      const theta = (random.next().value as number) * Math.PI * 2;
      const r = Math.pow(random.next().value as number, 2) * spread;
      const x = Math.cos(theta) * r;
      const y = ((random.next().value as number) - 0.5) * spread * 0.6;
      const z = -((random.next().value as number) * 60);
      arr.push([x, y, z]);
    }
    return arr;
  }, [seed, count, spread]);

  const ref = useRef<THREE.Group>(null);
  const elapsedTime = useRef(0);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    elapsedTime.current = clock.getElapsedTime();
    ref.current.rotation.y = elapsedTime.current * speed * 0.1;
  });

  // Convert HSL to RGB (values 0-255)
  function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);

    return [
      Math.round(255 * f(0)),
      Math.round(255 * f(8)),
      Math.round(255 * f(4)),
    ];
  }

  return (
    <group ref={ref}>
      {points.map((p, i) => {
        const hue = (i * 30) % 360;
        const [r, g, b] = hslToRgb(hue, 100, 50);

        // Flicker brightness offset oscillates over time and index
        const flicker = 30 * Math.sin(elapsedTime.current * 5 + i);

        const rStar = Math.min(255, Math.max(0, r + flicker));
        const gStar = Math.min(255, Math.max(0, g + flicker));
        const bStar = Math.min(255, Math.max(0, b + flicker));

        const emissive = `rgb(${rStar.toFixed(0)}, ${gStar.toFixed(
          0
        )}, ${bStar.toFixed(0)})`;

        return (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.06 + Math.random() * 0.07, 8, 8]} />
            <meshStandardMaterial
              emissive={emissive}
              emissiveIntensity={0.6 + Math.random() * 0.4}
              roughness={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default ParticleField;
