"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

export default function About() {
  return (
    <div className="min-h-screen pt-40 pb-20 text-white relative flex flex-col items-center">
      <div className="relative z-10 w-full max-w-7xl px-6">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          className="text-6xl md:text-8xl font-black mb-8 drop-shadow-2xl"
        >
          Dominating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Space.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-4xl text-zinc-300 font-light leading-snug mb-24 max-w-4xl"
        >
          At Apploria, we don't just build apps. We architect digital realities based on absolute precision and ruthless performance.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 perspective-1500">
          <motion.div 
            initial={{ opacity: 0, y: 100, rotateX: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <TiltCard color="from-cyan-400 to-blue-600" className="h-80 md:h-96">
               <div className="p-12 flex flex-col justify-center h-full">
                  <h3 className="text-4xl font-black text-cyan-400 mb-6 drop-shadow-lg">Our Vision</h3>
                  <p className="text-zinc-300 text-xl md:text-2xl font-light leading-relaxed drop-shadow-sm">
                    To engineer the highest quality native mobile experiences in the ecosystem, scaling seamlessly to billions of daily active users.
                  </p>
               </div>
            </TiltCard>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100, rotateX: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TiltCard color="from-blue-500 to-indigo-600" className="h-80 md:h-96">
               <div className="p-12 flex flex-col justify-center h-full">
                  <h3 className="text-4xl font-black text-blue-400 mb-6 drop-shadow-lg">The Collective</h3>
                  <p className="text-zinc-300 text-xl md:text-2xl font-light leading-relaxed drop-shadow-sm">
                    We are a syndicate of elite software engineers and visionary architects pushing the extreme boundaries of modern tech.
                  </p>
               </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
