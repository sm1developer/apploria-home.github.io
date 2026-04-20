"use client";

import { motion } from "framer-motion";
import { Users, Workflow, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#E0E0E0] overflow-hidden font-sans pt-40 pb-20">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none blur-[140px] opacity-10">
         {/* Subtle background color blobs */}
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#4285F4] rounded-full" />
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-[#EA4335] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="inline-flex items-center gap-2 px-6 py-2 mb-8 text-sm font-medium border rounded-full border-white/10 bg-[#1A1A1A]/80 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] text-[#9AA0A6]"
        >
          <Sparkles className="w-4 h-4 text-[#4285F4]" />
          <span>The Minds Behind the Engine</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-medium mb-12 tracking-tight text-white leading-[1.05]"
        >
          Architects of the <br /> <span className="text-[#9AA0A6]">Autonomous Web.</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-12 md:p-16 bg-[#1A1A1A] border border-[rgba(255,255,255,0.05)] rounded-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-[#1E1E1E] transition-colors duration-500 flex flex-col justify-between min-h-[400px]"
          >
             <div>
               <Workflow className="w-12 h-12 mb-8 text-[#4285F4]" />
               <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Our Mission</h3>
               <p className="text-[#9AA0A6] text-xl font-light leading-relaxed">
                 To build zero-friction infrastructure that lets engineers abstract away the noise and focus purely on unprecedented intelligence and impact.
               </p>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="p-12 md:p-16 bg-[#1A1A1A] border border-[rgba(255,255,255,0.05)] rounded-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-[#1E1E1E] transition-colors duration-500 flex flex-col justify-between min-h-[400px]"
          >
             <div>
               <Users className="w-12 h-12 mb-8 text-[#EA4335]" />
               <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Global Network</h3>
               <p className="text-[#9AA0A6] text-xl font-light leading-relaxed">
                 We are an internationally distributed team of researchers, backend engineers, and UI theorists pushing the computational frontier.
               </p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
