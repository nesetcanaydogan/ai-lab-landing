"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("TR");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Biz Kimiz?", href: "#about" },
    { name: "Neler Yaptık?", href: "#achievements" },
    { name: "Vizyon", href: "#vision" },
    { name: "İş Birliği", href: "#cooperation" },
    { name: "Ekibimiz", href: "#team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-8 transition-all duration-700">
      <div className={`max-w-7xl mx-auto rounded-[32px] px-8 py-5 flex items-center justify-between transition-all duration-700 ${
        scrolled 
        ? "glass dark:glass-dark shadow-premium translate-y-[-10px]" 
        : "bg-transparent"
      }`}>
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl group-hover:rotate-[10deg] transition-transform duration-500">
            AI
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-exo2 font-black text-2xl tracking-tighter">
              AI LAB
            </span>
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold">
              KTUN Laboratory
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black hover:text-primary transition-all uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          
          <div className="flex items-center gap-6 pl-8 border-l border-white/10">
            <button
              onClick={() => setLang(lang === "TR" ? "EN" : "TR")}
              className="text-[10px] font-black hover:text-primary transition-colors flex items-center gap-2"
            >
              <Globe size={14} />
              {lang}
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 glass dark:glass-dark rounded-2xl hover:bg-primary hover:text-white transition-all duration-500"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="btn-premium bg-foreground text-background !px-6 !py-3 !text-xs !rounded-xl">
              İletişim
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-4 glass dark:glass-dark rounded-2xl hover:scale-110 transition-transform"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-32 left-6 right-6 lg:hidden glass dark:glass-dark rounded-[40px] p-10 flex flex-col gap-8 shadow-premium border border-white/20"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black font-exo2 border-b border-white/5 pb-4 tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4">
               <button onClick={() => setLang(lang === "TR" ? "EN" : "TR")} className="flex-1 glass p-5 rounded-2xl font-black text-xs">DİL: {lang}</button>
               <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex-1 glass p-5 rounded-2xl font-black text-xs">MOD: {theme?.toUpperCase()}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
