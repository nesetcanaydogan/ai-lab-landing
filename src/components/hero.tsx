"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Brain, Cpu, Database, Sparkles, ChevronDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Animated Organic Backgrounds */}
      <div className="mesh-background" />
      <div className="grainy" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-lab-accent/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10"
      >
        <div className="lg:col-span-7">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass dark:glass-dark text-[11px] font-black mb-10 uppercase tracking-[0.3em] border border-white/20 shadow-premium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            KTUN AI LAB &bull; INOVASYON 2.0
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-exo2 font-black leading-[0.85] mb-10 tracking-tighter perspective-container">
            <span className="block hover:translate-z-10 transition-transform duration-700 cursor-default">GELECEĞİN</span>
            <span className="text-gradient drop-shadow-2xl">EKOSİSTEMİ</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl font-mono leading-relaxed opacity-70">
            Fikirlerin çözümlere, verilerin <span className="text-foreground font-bold">geleceğe</span> dönüştüğü, Konya Teknik Üniversitesi&apos;nin yeni nesil inovasyon merkezi.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 items-center">
            <button className="btn-premium bg-primary text-white group w-full sm:w-auto">
              Sistem Paneli
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <button className="btn-premium glass dark:glass-dark group w-full sm:w-auto">
              Ar-Ge & Ürün Portfolyosu
            </button>
          </motion.div>
        </div>
        
        <div className="lg:col-span-5 relative perspective-container hidden lg:block">
           <motion.div
              initial={{ opacity: 0, rotateY: -30, rotateX: 20 }}
              animate={{ opacity: 1, rotateY: -15, rotateX: 10 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="preserve-3d"
           >
              {/* Volumetric Glass Card */}
              <div className="w-full aspect-[4/5] glass-dark rounded-[60px] p-1 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  <div className="h-full w-full bg-slate-950/80 rounded-[58px] p-12 flex flex-col justify-between relative overflow-hidden">
                      <div className="flex justify-between items-start">
                         <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40">
                            <Brain size={40} className="text-white" />
                         </div>
                         <Sparkles className="text-secondary animate-pulse" size={60} />
                      </div>
                      
                      <div className="space-y-6">
                         <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                               animate={{ x: ["-100%", "100%"] }}
                               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                               className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent" 
                            />
                         </div>
                         <div className="text-3xl font-exo2 font-black leading-tight">
                            NEURAL<br/>SYSTEM
                         </div>
                         <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">MAIN NODE: ACTIVE|0x8F2E</p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                         {[...Array(3)].map((_, i) => (
                           <div key={i} className="h-12 glass rounded-xl border border-white/5 text-xs font-mono tracking-widest pt-3">memory_unit{i}</div>
                         ))}
                      </div>
                  </div>
              </div>

              {/* Floaties */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 glass p-6 rounded-[32px] shadow-2xl z-20 border border-white/40"
              >
                <Database size={40} className="text-primary" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-10 glass p-6 rounded-[32px] shadow-2xl z-20 border border-white/40"
              >
                <Cpu size={40} className="text-secondary" />
              </motion.div>
           </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Keşfet</span>
        <ChevronDown size={36} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
