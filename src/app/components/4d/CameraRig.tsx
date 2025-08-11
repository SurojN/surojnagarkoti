import { FC, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const PAGE_GAP = 12;
const LERP_FACTOR = 0.1;

interface CameraRigProps {
  targetPage: number;
}

function noise(t: number) {
  return Math.sin(t * 0.5) * Math.cos(t * 0.7);
}

const CameraRig: FC<CameraRigProps> = ({ targetPage }) => {
  const { camera } = useThree();
  const zRef = useRef(camera.position.z);
  const posRef = useRef(new Vector3().copy(camera.position));

  const targetZ = useMemo(() => 5 - targetPage * PAGE_GAP, [targetPage]);

  useFrame(({ clock }) => {
    // Smoothly lerp the camera z-position
    zRef.current += (targetZ - zRef.current) * LERP_FACTOR;
    camera.position.z = zRef.current;

    // Add subtle floating motion on x and y
    const time = clock.elapsedTime;
    const floatX = noise(time) * 0.2; // tweak amplitude
    const floatY = noise(time * 1.3) * 0.15;

    camera.position.x = posRef.current.x + floatX;
    camera.position.y = posRef.current.y + floatY;

    camera.updateProjectionMatrix();
  });

  return null;
};

export default CameraRig;
