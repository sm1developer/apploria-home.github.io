"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4 bg-black/50 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        <Link href="/" className="text-3xl font-black tracking-tighter text-white">
          APPLORIA<span className="text-rose-500">.</span>
        </Link>
        
        <div className="hidden gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className="relative group p-2">
                <span className={`text-sm font-semibold tracking-wide transition-colors ${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-200"}`}>
                  {link.name.toUpperCase()}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute left-0 right-0 h-[3px] bottom-[-4px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        
        <button className="hidden md:block px-6 py-3 text-sm font-bold text-black transition-all rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(251,191,36,0.5)]">
          Partner Core
        </button>
      </div>
    </motion.nav>
  );
}
