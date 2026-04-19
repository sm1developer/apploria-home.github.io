"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ type: "spring", damping: 20, duration: 1 }}
        className="w-full max-w-2xl mt-20 perspective-1500"
      >
        <TiltCard color="from-red-500 to-rose-600" className="h-auto">
           <div className="p-10 md:p-14">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 mb-6 tracking-tighter drop-shadow-xl">
              Initiate Link
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl font-light mb-12 drop-shadow-md">
              Apploria engages exclusively with high-impact enterprises. Transmit your architectural requirements below.
            </p>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group perspective-1000">
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-zinc-700/50 rounded-2xl px-8 py-5 text-white text-lg focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-zinc-500 shadow-inner"
                  placeholder="System Email / Protocol ID"
                  style={{ transform: "translateZ(10px)" }}
                />
              </div>
              <div className="relative group perspective-1000">
                <textarea 
                  rows={5}
                  className="w-full bg-black/50 border border-zinc-700/50 rounded-2xl px-8 py-5 text-white text-lg focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none placeholder:text-zinc-500 shadow-inner"
                  placeholder="Outline your objective parameters..."
                  style={{ transform: "translateZ(10px)" }}
                />
              </div>
              
              <button 
                className="mt-6 flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white font-black tracking-wide text-xl py-6 rounded-2xl transition-all shadow-xl active:scale-95 group relative overflow-hidden"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 w-full flex items-center justify-center drop-shadow-md">
                    Transmit Signal
                    <Send className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
}
