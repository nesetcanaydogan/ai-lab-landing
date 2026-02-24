"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function Progressive() {
  const points = [
    { title: "Kısa Sürede Büyük İvme", text: "2020'de temelleri atılan laboratuvarımız, geçen kısa sürede ulusal ve uluslararası başarılara imza attı.", icon: <TrendingUp size={32} /> },
    { title: "Gönüllülük Esası", text: "Tamamen gönüllülük ve öğrenci motivasyonu temelli bir yapıdan profesyonel bir organizasyona evrildik.", icon: <Users size={32} /> },
    { title: "Sürdürülebilir Büyüme", text: "Mevcut başarılarımız bir 'sonuç' değil, sürdürülebilir bir büyüme sürecinin erken aşamasıdır.", icon: <ShieldCheck size={32} /> },
    { title: "Hızlanma Fazı", text: "Bugün başlangıç noktasında değil; hızlanma ve gelişme fazındayız.", icon: <Zap size={32} /> }
  ];

  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="mesh-background opacity-20" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">Evolution</span>
             <h2 className="text-6xl md:text-8xl font-exo2 font-black tracking-tighter mb-10 leading-none">
                YENİ AMA <br/> <span className="text-slate-400">DERİNLEŞEN</span> YAPI
             </h2>
             <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
                Geçmişi çok uzun yıllara dayanan merkezlerle kıyaslandığında genç olabiliriz, ancak üretim kapasitemiz ve teknik derinliğimizle fark yaratıyoruz.
             </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
           {/* Connecting Line */}
           <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

           {points.map((point, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
               className={`glass-card p-12 relative group ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
             >
                <div className={`w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-xl ${i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                   {point.icon}
                </div>
                <h4 className="text-3xl font-black mb-6 font-exo2 tracking-tighter">{point.title}</h4>
                <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">{point.text}</p>
                <div className={`flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary ${i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                   Detayları Gör <ArrowRight size={16} />
                </div>
             </motion.div>
           ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 glass-card relative overflow-hidden bg-slate-950 text-white border-none text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
          <p className="text-2xl md:text-4xl font-exo2 font-black leading-tight italic relative z-10">
             &quot;Kısıtlı sürede ortaya konan yüksek kaliteli projeler, AI Lab&apos;in doğru strateji ve doğru ekiple çok daha büyük çıktılar üretebileceğinin en güçlü kanıtıdır.&quot;
          </p>
          <div className="mt-10 text-xs font-mono uppercase tracking-[0.5em] text-slate-500 relative z-10 font-black">AI LAB MANIFESTO</div>
        </motion.div>
      </div>
    </section>
  );
}
