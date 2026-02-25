"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Lightbulb, Target, ArrowUpRight } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Users className="text-primary" size={28} />,
      title: "Kolektif Bünye",
      text: "100+ aktif üye ile üniversitenin en kapsamlı yapay zeka laboratuvarı."
    },
    {
      icon: <Lightbulb className="text-secondary" size={28} />,
      title: "Daimi İnovasyon",
      text: "Mevcut olanı geliştiriyor, Ar-Ge projeleri ile değer yaratmayı hedefliyoruz."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[2px] bg-primary rounded-full" />
               <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">İNOVASYON 2.0</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-exo2 font-black mb-10 tracking-tighter leading-none">
              GELECEK BURADA <br/> <span className="text-slate-400">ŞEKİLLENECEK</span>
            </h2>
            
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed font-medium">
              AI Lab, temelleri 2020 yılında atılan ve Sanayi ve Teknoloji Bakanlığı bünyesinde faaliyet gösteren tematik bir proje laboratuvarıdır. 
              Ar-Ge projelerini merkeze alan, inovasyonun öncülerinden olmayı hedefleyen bir ürün üretim merkezidir.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
               {cards.map((card, i) => (
                 <div key={i} className="glass-card p-10 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-40 transition-opacity">
                       {card.icon}
                    </div>
                    <div className="mb-6">{card.icon}</div>
                    <h3 className="text-xl font-black mb-4 font-exo2">{card.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-mono">{card.text}</p>
                 </div>
               ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
             {/* Asymmetrical Overlapping Layout */}
             <div className="aspect-square glass-dark rounded-[80px] p-2 relative z-10 overflow-hidden shadow-[0_80px_100px_-30px_rgba(0,0,0,0.4)]">
                <Image 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=800" 
                  alt="AI Visualization"
                  fill
                  className="w-full h-full object-cover rounded-[78px] opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="text-4xl font-exo2 font-black text-white opacity-5 mb-2 tracking-tighter">00000101</div>
                   <div className="text-4xl font-exo2 font-black text-white opacity-5 mb-2 tracking-tighter">00000101</div>
                   <div className="text-4xl font-exo2 font-black text-white opacity-10 mb-2 tracking-tighter">00000101</div>
                   <div className="text-4xl font-exo2 font-black text-white opacity-10 mb-2 tracking-tighter">00000101</div>
                   <div className="text-4xl font-exo2 font-black text-white opacity-20 mb-2 tracking-tighter">10001010</div>
                   <div className="text-4xl font-exo2 font-black text-white mb-2 opacity-40 tracking-tighter">00010001</div>
                   <div className="text-4xl font-exo2 font-black text-white mb-2 opacity-50 tracking-tighter">01000001</div>
                   <div className="text-4xl font-exo2 font-black text-white mb-2 opacity-60 tracking-tighter">01000101</div>
                   <div className="text-4xl font-exo2 font-black text-white mb-2 opacity-80 tracking-tighter">11000001</div>
                   <div className="text-4xl font-exo2 font-black text-white mb-2 tracking-tighter">01011001</div>
                   <div className="text-xs font-mono text-secondary uppercase tracking-[0.4em] font-black">Neural Network Channel ACTIVated</div>
                </div>
             </div>

             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -top-12 -left-12 glass p-10 rounded-[40px] shadow-premium z-20 border border-white/40 max-w-[200px]"
             >
                <Target size={40} className="text-secondary mb-4 opacity-50" />
                <h4 className="font-black text-sm uppercase tracking-tighter mb-2 text-shadow-lg">Misyon</h4>
                <p className="text-[10px] text-primary font-bold leading-relaxed">Nitelikli insan kaynağını teknoloji ekosistemine kazandırmak.</p>
             </motion.div>

             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-lab-accent/30 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
