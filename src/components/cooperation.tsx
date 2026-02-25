"use client";

import { motion } from "framer-motion";
import { Handshake, FileCode, Search, Microscope, Sparkles } from "lucide-react";

export default function Cooperation() {
  const models = [
    { title: "Ortak Ar-Ge", desc: "Ürün geliştirme ve inovasyon odaklı ortak projeler.", icon: <Microscope size={28} /> },
    { title: "Pilot Uygulama", desc: "Prototip test süreçleri ve saha uygulamaları.", icon: <Search size={28} /> },
    { title: "Teknik Danışmanlık", desc: "Sektör deneyimi ve akademik mentorluk paylaşımı.", icon: <FileCode size={28} /> },
    { title: "Sponsorluk", desc: "Altyapı, donanım ve lojistik destek modelleri paylaşımı.", icon: <Handshake size={28} /> }
  ];

  return (
    <section id="cooperation" className="py-40 px-6 relative overflow-hidden bg-lab-bg-light dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-[2px] bg-primary rounded-full" />
                 <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">PARTNERSHIPS</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-exo2 font-black tracking-tighter leading-none mb-12">
                 BİRLİKTE <br/> <span className="text-slate-400">GÜÇLÜYÜZ</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                 Esnek, sürdürülebilir ve çıktı odaklı modellerle sanayi-akademi köprüsünü yeniden inşa ediyoruz. Laboratuvarımız, vizyoner çözümler arayan kurumlar için stratejik bir teknoloji ortağıdır.
              </p>
              
              <div className="space-y-6">
                 {models.map((model, i) => (
                   <motion.div 
                     key={i} 
                     whileHover={{ x: 20 }}
                     className="flex items-center gap-8 group cursor-pointer"
                   >
                      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl border border-white/40">
                         {model.icon}
                      </div>
                      <div>
                         <h4 className="text-xl font-black font-exo2 group-hover:text-primary transition-colors">{model.title}</h4>
                         <p className="text-sm text-slate-500 font-medium">{model.desc}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative"
           >
              <div className="glass-card p-16 bg-slate-950 text-white border-none shadow-[0_80px_150px_-30px_rgba(0,0,0,0.6)] relative z-10">
                 <div className="absolute top-0 right-0 p-12">
                    <Sparkles className="text-secondary opacity-20 animate-spin-slow" size={120} />
                 </div>
                 
                 <h3 className="text-4xl font-black mb-10 font-exo2 tracking-tighter">Sizden Ne Bekliyoruz?</h3>
                 <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                   Yürüttüğümüz yüksek katma değerli projelerin sürdürülebilirliği için maddi ve manevi destek temelli stratejik ortaklıklar arıyoruz. Sizleri teknoloji üretim sürecinin doğal bir paydaşı olmaya davet ediyoruz.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-8 mb-16">
                    <div>
                       <div className="text-2xl font-black font-exo2 mb-2">Maddi</div>
                       <p className="text-xs text-slate-500 font-mono leading-relaxed">Ekipman, Yazılım Lisansları, Finansal Katkı Destek Modelleri</p>
                    </div>
                    <div>
                       <div className="text-2xl font-black font-exo2 mb-2">Manevi</div>
                       <p className="text-xs text-slate-500 font-mono leading-relaxed">Mentörlük, Sektör Deneyimi, Teknik Destek Paylaşımı</p>
                    </div>
                 </div>

                 <button className="btn-premium bg-white text-slate-950 w-full hover:shadow-white/20">
                    İş Birliği Başlatın
                 </button>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10 animate-blob" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
