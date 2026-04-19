"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

export default function Home() {
  const features = [
    { title: "Native Architecture", desc: "Ultimate performance via deep system integration.", color: "from-emerald-400 to-teal-600" },
    { title: "Cloud Ecosystem", desc: "Infinitely scalable backends powering millions of users.", color: "from-cyan-400 to-blue-600" },
    { title: "AI Integration", desc: "On-device intelligence that anticipates user needs.", color: "from-rose-400 to-red-600" },
    { title: "Fintech Core", desc: "Military-grade encryption for limitless transactions.", color: "from-amber-300 to-orange-500" },
  ];

  return (
    <div className="relative min-h-screen text-white selection:bg-rose-500/30 pt-20">
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl text-7xl font-black tracking-tighter text-transparent md:text-8xl lg:text-[10rem] bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 leading-[0.9] drop-shadow-2xl"
        >
          APPLORIA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mt-10 text-lg md:text-2xl text-zinc-400 font-light"
        >
          Pioneering the <span className="font-semibold text-rose-400">impossible</span>. We assemble bespoke mobile architectures that redefine what intelligent applications can do.
        </motion.p>
      </main>

      <section className="relative z-10 py-32 mt-10 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl text-white">The Apploria Standards</h2>
            <p className="mt-6 text-xl text-zinc-500">Uncompromising engineering across four distinct technical pillars.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 perspective-1500 px-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, type: "spring" }}
              >
                <TiltCard color={item.color} className="h-80">
                  <div className="flex flex-col h-full p-8 relative items-center justify-center text-center">
                    <div className={`w-16 h-16 mb-8 rounded-[20px] bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center scale-100 group-hover:scale-125 transition-transform duration-500`} />
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{item.title}</h3>
                    <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors drop-shadow-sm">{item.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
