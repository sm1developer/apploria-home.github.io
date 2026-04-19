import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Navbar } from "@/components/Navbar";
import { FloatingArtifacts, FloorGrid } from "@/components/engine3d";

export const metadata: Metadata = {
  title: "Apploria | The Future of Mobile Experiences",
  description: "We build, scale, and innovate the world's most engaging mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black overflow-x-hidden" suppressHydrationWarning>
        <FloatingArtifacts />
        <FloorGrid />
        <Navbar />
        <div className="relative z-10 flex-1">{children}</div>
      </body>
    </html>
  );
}
