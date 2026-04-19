"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

export function TiltCard({ children, color, className = "" }: { children: ReactNode, color: string, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["150%", "-50%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["150%", "-50%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-[30px] perspective-1000 group z-10 w-full ${className}`}
    >
      {/* 3D Floating Shadow on the Grid */}
      <div 
        className={`absolute -bottom-8 left-[10%] right-[10%] h-12 bg-gradient-to-t ${color} blur-[30px] opacity-0 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none`} 
        style={{ transform: "rotateX(70deg) translateZ(-50px)" }} 
      />

      {/* Glassmorphic Shell */}
      <div 
        className="absolute inset-0 rounded-[30px] border border-white/10 bg-zinc-900/40 backdrop-blur-2xl overflow-hidden"
        style={{ transformOrigin: "center center", transformStyle: "preserve-3d" }}
      >
        {/* Reacting Glare Effect */}
        <motion.div 
            className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
                background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 60%)",
                left: glareX, top: glareY, width: "150%", height: "150%"
            }}
        />

        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500`} />
      </div>

      {/* Extreme Parallax Content Z-Layer */}
      <motion.div 
        style={{ transform: "translateZ(70px)" }} 
        className="relative z-20 h-full w-full pointer-events-auto"
      >
         {children}
      </motion.div>
    </motion.div>
  );
}
