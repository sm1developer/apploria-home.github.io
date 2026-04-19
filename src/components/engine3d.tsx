"use client";

import { motion } from "framer-motion";

export function FloatingArtifacts() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ perspective: "1500px" }}>
      {/* 3D Wireframe Cube */}
      <motion.div 
        animate={{ rotateX: 360, rotateY: 360, rotateZ: 180 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[5%] w-40 h-40 opacity-20"
        style={{ transformStyle: "preserve-3d" }}
      >
         <div className="absolute inset-0 border border-blue-500/30" style={{ transform: "translateZ(80px)" }} />
         <div className="absolute inset-0 border border-emerald-500/30" style={{ transform: "translateZ(-80px)" }} />
         <div className="absolute inset-0 border border-rose-500/30" style={{ transform: "rotateY(90deg) translateZ(80px)" }} />
         <div className="absolute inset-0 border border-amber-500/30" style={{ transform: "rotateY(90deg) translateZ(-80px)" }} />
      </motion.div>

      {/* 3D Wireframe Sphere/Rings */}
       <motion.div 
        animate={{ rotateX: -360, rotateY: 360, y: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[10%] w-64 h-64 opacity-10"
        style={{ transformStyle: "preserve-3d" }}
      >
         <div className="absolute inset-0 border border-white/40 rounded-full" />
         <div className="absolute inset-0 border border-white/40 rounded-full" style={{ transform: "rotateX(90deg)" }} />
         <div className="absolute inset-0 border border-white/40 rounded-full" style={{ transform: "rotateY(90deg)" }} />
         <div className="absolute inset-0 border border-white/40 rounded-full" style={{ transform: "rotateX(45deg) rotateY(45deg)" }} />
      </motion.div>
    </div>
  );
}

export function FloorGrid() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[60vh] pointer-events-none overflow-hidden z-0" style={{ perspective: "1000px" }}>
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2 }}
           className="absolute inset-0"
           style={{ 
             transform: "rotateX(75deg) translateY(-20px) scale(4)",
             backgroundSize: "60px 60px",
             backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
             transformOrigin: "top center"
           }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
    </div>
  );
}
