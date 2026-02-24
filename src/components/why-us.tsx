"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Globe, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Yüksek Performans",
      desc: "Üniversite çatısı altında profesyonel bir teknoloji organizasyonu gibi çalışıyoruz.",
      icon: <Zap className="text-yellow-500" />
    },
    {
      title: "Görünürlük & Güç",
      desc: "Üretim kapasitemiz ve iletişim gücümüzle sektörde öne çıkıyoruz.",
      icon: <TrendingUp className="text-primary" />
    },
    {
      title: "Genç Yetenekler",
      desc: "Her yıl 150'den fazla başvuru alan, genç mühendisler için güçlü bir çekim merkeziyiz.",
      icon: <CheckCircle2 className="text-secondary" />
    }
  ];

  return (
    <section id="why-us" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[2px] bg-lab-accent rounded-full" />
               <span className="text-xs font-black uppercase tracking-[0.4em] text-lab-accent">Advantage</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-exo2 font-black mb-12 tracking-tighter leading-[0.85]">
              NEDEN <br/> <span className="text-slate-400">AI LAB?</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-16 max-w-xl">
              Teknik başarımızın yanı sıra yüksek etkileşimli ve güvenilir bir iletişim ekosistemi inşa ettik. Doğru destekle aşılamayacak sınır tanımıyoruz.
            </p>
            
            <div className="space-y-10">
               {reasons.map((item, i) => (
                 <div key={i} className="flex gap-8 group">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shrink-0 shadow-xl border border-white/40">
                       {item.icon}
                    </div>
                    <div>
                       <h4 className="text-2xl font-black font-exo2 mb-2 tracking-tighter">{item.title}</h4>
                       <p className="text-base text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative perspective-container"
          >
            <div className="aspect-square glass-dark rounded-[100px] p-2 relative z-10 shadow-[0_100px_150px_-40px_rgba(16,31,150,0.4)] overflow-hidden flex items-center justify-center">
                <div className="text-center">
                   <div className="text-9xl font-black text-white font-exo2 tracking-tighter mb-4 animate-float">150+</div>
                   <div className="text-xs font-black text-primary uppercase tracking-[0.5em]">Yıllık Başvuru</div>
                </div>
                {/* Floating Bubbles */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-blob" />
                <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-blob animation-delay-2000" />
            </div>

            <div className="absolute -top-12 -right-12 glass p-10 rounded-[40px] shadow-premium z-20 border border-white/40 animate-bounce-slow">
               <ShieldCheck size={48} className="text-primary mb-4" />
               <div className="text-lg font-black font-exo2 tracking-tighter">GÜVENİLİR<br/>EKOSİSTEM</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
