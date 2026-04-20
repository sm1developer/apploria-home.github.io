"use client";

import { motion } from "framer-motion";
import { Download, Terminal, Sparkles, LayoutPanelLeft, Code2 } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#E0E0E0] selection:bg-blue-500/30 overflow-hidden font-sans">
      {/* Background Google Color Orbs simulating Antigravity Space Dust */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none blur-[140px] opacity-20">
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 70, 0], y: [0, -50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[10%] left-[10%] w-[700px] h-[700px] bg-[#4285F4] rounded-full" />
        <motion.div animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, 80, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[5%] w-[600px] h-[600px] bg-[#EA4335] rounded-full" />
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 100, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-[20%] left-[30%] w-[800px] h-[800px] bg-[#34A853] rounded-full" />
        <motion.div animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, -40, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-[#FBBC04] rounded-full mix-blend-screen" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-32 pb-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="inline-flex items-center gap-2 px-6 py-2 mb-10 text-sm font-medium border rounded-full border-white/10 bg-[#1A1A1A]/80 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] text-[#E0E0E0]"
        >
          <Sparkles className="w-4 h-4 text-[#FBBC04]" />
          <span>Apploria Antigravity Architecture</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 leading-[1.05]"
        >
          Experience liftoff with the next-generation IDE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mt-8 text-xl md:text-2xl text-[#9AA0A6] font-light leading-relaxed"
        >
          Google Antigravity is our agent-first development platform, evolving the software ecosystem into the autonomous era. Fully synchronized across the stack.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <button className="px-8 py-4 text-base font-medium text-[#0B0B0B] bg-white rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <Download className="w-5 h-5" />
            Download for Windows
          </button>
          <button className="px-8 py-4 text-base font-medium text-white border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-md">
            Explore use cases
          </button>
        </motion.div>
      </main>

      {/* Grid Layout inspired by Antigravity Z-Pattern */}
      <section className="relative z-10 px-6 py-32 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-between p-12 bg-[#1A1A1A] border border-[rgba(255,255,255,0.05)] rounded-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.5)] col-span-1 md:col-span-2 group hover:bg-[#1E1E1E] transition-colors duration-500"
          >
             <div className="max-w-2xl">
               <Terminal className="w-12 h-12 mb-8 text-[#4285F4]" />
               <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white tracking-tight">Cross-surface Agents</h2>
               <p className="text-[#9AA0A6] text-xl font-light leading-relaxed">Continuous, synchronized control across editor, terminal, and browser surfaces. Work collaboratively with AI that possesses deep contextual understanding.</p>
             </div>
             <div className="mt-16 h-80 w-full bg-[#0B0B0B] rounded-[24px] border border-white/5 shadow-2xl overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-700 ease-out">
                {/* Simulated Terminal UI */}
                <div className="absolute top-0 w-full h-12 bg-[#141414] border-b border-white/5 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EA4335]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#FBBC04]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#34A853]/80" />
                  <div className="ml-4 text-xs text-[#9AA0A6] font-mono">antigravity — zsh</div>
                </div>
                <div className="p-8 pt-20 text-sm md:text-base font-mono leading-loose">
                  <div className="flex items-center gap-4 text-[#9AA0A6] mb-2">
                    <span className="text-[#34A853]">➜</span>
                    <span>~</span>
                    <span className="text-white">antigravity init --mode=autonomous</span>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                    <span className="text-[#4285F4]">[INFO]</span> Booting Antigravity Core Environments...
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
                    <span className="text-[#4285F4]">[INFO]</span> Connecting to Gemini contextual stream...
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="text-[#34A853] mt-2">
                    ✔ Initialization complete. Agent online.
                  </motion.div>
                </div>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ delay: 0.1, duration: 0.8 }} 
            className="p-12 bg-[#1A1A1A] border border-[rgba(255,255,255,0.05)] rounded-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-[#1E1E1E] transition-colors"
          >
             <LayoutPanelLeft className="w-12 h-12 mb-8 text-[#FBBC04]" />
             <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-white leading-tight">An Agent-First Experience</h2>
             <p className="text-[#9AA0A6] text-lg font-light leading-relaxed">Focus on generating high-level business logic. The environment handles the boilerplate, deployments, and testing loops automatically.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ delay: 0.2, duration: 0.8 }} 
            className="p-12 bg-[#1A1A1A] border border-[rgba(255,255,255,0.05)] rounded-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-[#1E1E1E] transition-colors"
          >
             <Code2 className="w-12 h-12 mb-8 text-[#34A853]" />
             <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-white leading-tight">Higher-Level Abstractions</h2>
             <p className="text-[#9AA0A6] text-lg font-light leading-relaxed">Develop systems at the speed of thought. Instruct the engine using intuitive commands and watch complete architectures unfold instantly.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
