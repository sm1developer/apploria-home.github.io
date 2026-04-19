"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

export default function Portfolio() {
  const projects = [
    { name: "Aura Intelligence", tag: "Generative AI", color: "from-purple-500 to-fuchsia-600" },
    { name: "Nexus Fintech", tag: "Blockchain Core", color: "from-emerald-400 to-green-600" },
    { name: "Velocity Comms", tag: "Encrypted Network", color: "from-blue-500 to-indigo-600" },
    { name: "Lumina Reality", tag: "Spatial Computing", color: "from-rose-500 to-red-600" },
    { name: "Pulse Genome", tag: "MedTech Platform", color: "from-cyan-400 to-teal-500" },
    { name: "Nova Stream", tag: "4K Media Engine", color: "from-amber-400 to-orange-500" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-32 text-white relative">
      <div className="relative z-10 w-full max-w-7xl px-8 mx-auto mt-10">
        <motion.div
           initial={{ opacity: 0, y: -40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, type: "spring", damping: 20 }}
           className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-6 drop-shadow-2xl">
            The Engine Room
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Interact with our active deployments. Watch the architectural models react in real-time across the spatial plane.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 pb-20">
          {projects.map((proj, idx) => (
             <motion.div
               key={proj.name}
               initial={{ opacity: 0, y: 150, rotateX: 45 }}
               animate={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{ delay: idx * 0.15, duration: 1, type: "spring", damping: 20 }}
             >
                <TiltCard color={proj.color} className="h-[450px]">
                  <div className="flex flex-col h-full p-8 justify-end">
                    <div className={`w-16 h-16 rounded-[20px] bg-gradient-to-br ${proj.color} mb-8 shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full mix-blend-overlay" />
                    </div>
                    <p className="text-xs font-black tracking-[0.25em] text-white/50 mb-3 uppercase drop-shadow-md">{proj.tag}</p>
                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg leading-tight">{proj.name}</h3>
                    <p className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors drop-shadow-md">
                      A masterfully engineered subsystem standing absolutely ready for global scale.
                    </p>
                  </div>
                </TiltCard>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
