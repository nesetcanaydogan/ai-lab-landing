"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, ShieldCheck, Rocket, Cpu, Recycle, Sparkles } from "lucide-react";

export default function Achievements() {
  const stats = [
    { label: "TÜBİTAK 1711 Projesi", value: "3.5M+ ₺", sub: "Kestirimci Bakım & Verimlilik" },
    { label: "TÜBİTAK 1711 Projesi", value: "1M+ ₺", sub: "Yapay Zeka Destekli Finans" },
    { label: "Aktif Proje Takımı", value: "16", sub: "Otonom Araçlar, İHA, Rover, Robotaksi, Çözüm Yazılımları " },
    { label: "Toplam Başvuru", value: "150+", sub: "2025-2026 Dönemi" }
  ];

  const highlights = [
    { title: "TENOFEST - Sunum Özel Ödülü", category: "AI Lab Horizon", icon: <Award className="text-yellow-500" /> },
    { title: "TEKNOFEST - En İyi Yazılım Ödülü", category: "AI Lab NPC-AI", icon: <ShieldCheck className="text-blue-500" /> },
    { title: "9. KTMOPP - İşlemci Tasarım Ödülü", category: "KAPSÜL - 32 Bit İşlemci", icon: <Cpu className="text-orange-500" /> },
    { title: "9. KTMOPP - Yapay Zeka Destekli Tıbbi Atık Kutusu", category: "İDEÇ, Mepsan, Türk Kadınlar Birliği Özel Ödülleri", icon: <Recycle className="text-green-500" /> },
    { title: "Hackathon Birinciliği", category: "BÖLGESEL - Kimlik & Yüz Tanıma", icon: <TrendingUp className="text-primary" /> },
    { title: "Teknofest Finalistliği", category: "Birden Fazla Takım ile", icon: <Rocket className="text-purple-500" /> }
  ];

  return (
    <section id="achievements" className="py-40 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[160px] animate-pulse-slow" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[2px] bg-secondary rounded-full" />
               <span className="text-xs font-black uppercase tracking-[0.4em] text-secondary">MILESTONES</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-exo2 font-black tracking-tighter leading-[0.85]">
               SOMUT <br/> <span className="text-gradient">ÇIKTILAR</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl text-slate-500 max-w-md font-medium leading-relaxed"
          >
            Fikir aşamasından sürdürülebilir bir teknoloji üretim yapısına evrilen başarı serüvenimizden bazı kesitler.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card p-12 relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-white/40"
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
              <div className="text-[10px] font-black text-slate-400 mb-4 font-mono uppercase tracking-[0.2em]">{stat.label}</div>
              <div className="text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-500 tracking-tighter">{stat.value}</div>
              <div className="text-xs text-slate-500 font-black uppercase tracking-tighter opacity-60">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 glass-card p-16 relative overflow-hidden group border border-white/50"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:rotate-12 group-hover:scale-125 transition-transform duration-1000">
               <Award size={300} />
            </div>
            
            <div className="flex items-center gap-4 mb-16">
               <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20">
                  <Sparkles size={36} className="text-white animate-pulse" />
               </div>
               <div>
                  <h3 className="text-3xl font-black font-exo2 tracking-tighter">Öne Çıkan Başarılar</h3>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">KTUN AI LAB AWARDS COLLECTION</p>
               </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
               {highlights.map((item, i) => (
                 <motion.div 
                    key={i} 
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="flex flex-col gap-6 bg-white/60 dark:bg-slate-900/60 p-8 rounded-[32px] border border-white/60 shadow-xl backdrop-blur-3xl transition-all duration-500"
                 >
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl w-fit shadow-inner">
                       {item.icon}
                    </div>
                    <div>
                       <div className="text-lg font-black leading-tight mb-2 tracking-tight">{item.title}</div>
                       <div className="text-[9px] text-slate-500 font-mono uppercase font-black tracking-widest">{item.category}</div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 glass-card p-16 flex flex-col justify-center border border-white/50 relative overflow-hidden group bg-primary"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-lab-accent opacity-90 group-hover:scale-125 transition-transform duration-1000" />
             
             <div className="relative z-10">
                <h3 className="text-3xl font-black mb-8 font-exo2 text-white tracking-tighter">Geniş Etki Alanı</h3>
                <p className="text-white/80 mb-12 leading-relaxed text-lg font-medium">
                  Yarışma başarısının ötesinde, TÜBİTAK destekli Ar-Ge projeleriyle donanım-yazılım bütünleşik sistemler geliştirerek ülkemizi küresel arenalarda temsil ediyoruz.
                </p>
                <div className="flex flex-wrap gap-3">
                   {["URC", "ARC", "TEKNOFEST", "TÜBİTAK", "MEPSAN", "KAPSÜL", "IDEÇ"].map(tag => (
                     <span key={tag} className="px-6 py-2 bg-white/10 text-white text-[10px] font-black rounded-full border border-white/20 hover:bg-white hover:text-primary transition-all duration-500 cursor-default uppercase tracking-widest">
                       {tag}
                     </span>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
