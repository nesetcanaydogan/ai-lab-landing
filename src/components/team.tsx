"use client";

import { motion } from "framer-motion";
import { User, Linkedin, Mail, Twitter } from "lucide-react";

export default function Team() {
  const advisors = [
    { name: "Doç. Dr. Sait Ali UYMAZ", role: "Danışman" },
    { name: "Doç. Dr. Ersin KAYA", role: "Danışman" }
  ];

  const management = [
    { name: "Şevval KARAMAN", role: "Başkan" },
    { name: "İsmail Ayberk SAĞ", role: "Başkan Yardımcısı" },
    { name: "İrem İNEGÖL", role: "Kurumsal İletişim Koordinatörü" },
    { name: "Neşetcan AYDOĞAN", role: "Dijital Tasarım" },
    { name: "Sümeyra ÖZCAN", role: "Sosyal Medya Koordinatörü" }
  ];

  return (
    <section id="team" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">Management</span>
             <h2 className="text-6xl md:text-8xl font-exo2 font-black tracking-tighter leading-none mb-10">
                YÖNETİM <br/> <span className="text-slate-400">EKİBİ</span>
             </h2>
             <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                Disiplinler arası çalışma kültürü ve yüksek motivasyona sahip, laboratuvarımızı geleceğe taşıyan kadromuz.
             </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-40">
          {management.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card p-10 text-center relative group hover:-translate-y-4 border border-white/50"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-xl border border-white/40">
                <User size={48} />
              </div>
              <h4 className="text-xl font-black mb-2 font-exo2 tracking-tighter leading-tight">{member.name}</h4>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-relaxed opacity-60 mb-6">{member.role}</p>
              
              <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <Linkedin size={16} className="text-slate-400 hover:text-primary cursor-pointer" />
                 <Mail size={16} className="text-slate-400 hover:text-primary cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
           <div className="inline-block p-12 glass dark:glass-dark rounded-[60px] border border-white/40 shadow-premium relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              <h3 className="text-4xl font-black font-exo2 mb-12 tracking-tighter">DANIŞMANLARIMIZ</h3>
              <div className="flex flex-wrap justify-center gap-20">
                 {advisors.map((advisor, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="flex flex-col items-center group"
                   >
                      <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg border border-white/20">
                         <User size={40} />
                      </div>
                      <div className="font-black text-xl font-exo2 tracking-tighter mb-1">{advisor.name}</div>
                      <div className="text-xs font-black uppercase tracking-widest text-slate-500 opacity-60">{advisor.role}</div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
