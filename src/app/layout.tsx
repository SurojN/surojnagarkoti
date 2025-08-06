import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suroj Nagarkoti - Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
