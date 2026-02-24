"use client";

import { motion } from "framer-motion";
import { Bot, Network, MessageSquare, Zap, Target } from "lucide-react";

export default function Vision() {
  const focuses = [
    {
      title: "AI Agents",
      desc: "Otonom karar alabilen ve çevresel bağlama uyum sağlayan akıllı ajanlar.",
      icon: <Bot className="text-primary" size={28} />
    },
    {
      title: "Agentic Systems",
      desc: "Karmaşık görevleri iş birliği içinde yürüten çoklu ajan sistemleri.",
      icon: <Network className="text-secondary" size={28} />
    },
    {
      title: "NLP & LLM",
      desc: "İleri seviye doğal dil işleme ve çok modlu yapay zeka modelleri.",
      icon: <MessageSquare className="text-lab-accent" size={28} />
    },
    {
      title: "Real-time AI",
      desc: "Otonom araçlar için düşük gecikmeli, gerçek zamanlı yazılım mimarileri.",
      icon: <Zap className="text-yellow-500" size={28} />
    }
  ];

  return (
    <section id="vision" className="py-40 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <div className="flex items-center justify-center gap-4 mb-10">
                 <div className="w-12 h-[1px] bg-slate-300 dark:bg-white/10" />
                 <Target className="text-primary" size={24} />
                 <div className="w-12 h-[1px] bg-slate-300 dark:bg-white/10" />
              </div>
              <h2 className="text-6xl md:text-8xl font-exo2 font-black tracking-tighter leading-[0.85] mb-12">
                 NEURAL <br/> <span className="text-gradient">HORIZONS</span>
              </h2>
              <p className="text-2xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed italic opacity-80">
                 &quot;Geleceği tahmin etmiyoruz, onu bizzat inşa ediyoruz. Otonom sistemlerin sınırlarını yapay zeka ile yeniden çiziyoruz.&quot;
              </p>
           </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
           {focuses.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
               className="glass-card p-12 relative overflow-hidden group hover:-translate-y-4 border border-white/50"
             >
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                <div className="mb-10 p-5 bg-white dark:bg-slate-800 rounded-3xl w-fit shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-700">
                   {item.icon}
                </div>
                <h4 className="text-2xl font-black mb-6 font-exo2 tracking-tighter group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{item.desc}</p>
                <div className="h-1.5 w-12 bg-primary/20 rounded-full group-hover:w-full transition-all duration-1000" />
             </motion.div>
           ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-20 glass-card relative overflow-hidden text-center border border-white/40"
        >
           <h3 className="text-3xl font-black mb-8 font-exo2 tracking-tighter uppercase">Inovasyon Merkezi</h3>
           <p className="text-xl text-slate-500 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
             Yalnızca teknoloji kullanan değil, teknolojinin yönünü takip etmekten geri kalmayıp onunla birlikte hareket eden, nitelikli insan kaynağı yetiştiren bir referans Ar-Ge ve inovasyon merkeziyiz.
           </p>
           <div className="flex flex-wrap justify-center gap-16">
              {[
                { label: "Active Agents", val: "10K+" },
                { label: "Neural Nodes", val: "256" },
                { label: "Latency", val: "<10ms" }
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center">
                   <div className="text-4xl font-black font-exo2 text-primary">{m.val}</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{m.label}</div>
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
