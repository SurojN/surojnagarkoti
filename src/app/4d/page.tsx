// app/4d/page.tsx
"use client"; // Add this line to make the file a client component

import dynamic from "next/dynamic";

const VortexPages = dynamic(() => import("../components/4d/VortexPage"), {
  ssr: false,
});

export default function FourDPage() {
  return <VortexPages />;
}
