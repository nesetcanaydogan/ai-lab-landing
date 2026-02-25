"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-40 pb-20 px-6 overflow-hidden bg-slate-950 text-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px]" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Call to Action Repeater */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-40 p-20 glass-dark rounded-[80px] border border-white/10 text-center relative overflow-hidden group shadow-[0_100px_150px_-50px_rgba(0,0,0,0.8)]"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 group-hover:scale-125 transition-transform duration-1000" />
           <div className="relative z-10">
              <h3 className="text-6xl md:text-8xl font-exo2 font-black mb-12 tracking-tighter leading-none">
                 GELECEĞİ <br/> <span className="text-gradient">BİRLİKTE</span> İNŞA EDELİM
              </h3>
              <p className="text-2xl text-slate-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                Laboratuvarımız, teknoloji üretim sürecinin doğal bir paydaşı olmak isteyen tüm vizyoner kurum ve bireylere kapılarını açmaktadır.
              </p>
              <button className="btn-premium bg-white text-slate-950 !px-16 !py-6 !text-2xl !rounded-[32px] mx-auto hover:shadow-white/20">
                 İletişime Geçin <ArrowUpRight size={28} />
              </button>
           </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-10 group cursor-pointer">
               <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center font-black text-3xl shadow-2xl">AI</div>
               <span className="text-3xl font-exo2 font-black tracking-tighter">AI LAB</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
              Konya Teknik Üniversitesi Yapay Zeka ve Veri Bilimi Laboratuvarı. Geleceğin akıllı dünyasını bugünden tasarlıyoruz.
            </p>
            <div className="flex gap-6">
               {[Linkedin, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="p-4 glass-dark rounded-2xl hover:bg-primary transition-all duration-500 shadow-xl border border-white/10">
                    <Icon size={24} />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black mb-10 font-mono uppercase tracking-[0.4em] text-primary">Navigasyon</h4>
            <ul className="space-y-6 text-slate-400 font-black font-exo2 text-xl tracking-tighter">
               {["Biz Kimiz?", "Neler Yaptık?", "Vizyon", "İş Birliği", "Ekibimiz"].map((item, i) => (
                 <li key={i}><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-500" />
                    {item}
                 </a></li>
               ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-10 font-mono uppercase tracking-[0.4em] text-primary">Lokasyon</h4>
            <ul className="space-y-8 text-slate-400 text-lg font-medium">
               <li className="flex items-start gap-5 group">
                  <div className="p-3 glass-dark rounded-xl group-hover:bg-primary transition-colors duration-500"><MapPin size={24} className="text-white shrink-0" /></div>
                  <span className="group-hover:text-white transition-colors">Konya Teknik Üniversitesi, Mühendislik Fakültesi, D114, Konya</span>
               </li>
               <li className="flex items-center gap-5 group">
                  <div className="p-3 glass-dark rounded-xl group-hover:bg-primary transition-colors duration-500"><Mail size={24} className="text-white shrink-0" /></div>
                  <span className="group-hover:text-white transition-colors">ktunailab@gmail.com</span>
               </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-10 font-mono uppercase tracking-[0.4em] text-secondary">İNOVASYON 2.0</h4>
            <div className="p-8 glass-dark rounded-[32px] border border-white/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10"><ArrowUpRight size={40} /></div>
               <p className="text-slate-400 text-sm leading-relaxed italic font-bold">
                 &quot;2020&apos;de bir fikir olarak başlayan yolculuğumuz, bugün kapsamı geniş projeleri yöneten sürdürülebilir bir teknoloji merkezine dönüştü.&quot;
               </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
           <p>© 2026 AI LAB - ARTIFICIAL INTELLIGENCE & DATA SCIENCE LABORATORY. TÜM HAKLARI SAKLIDIR.</p>
           <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">KVKK</a>
              <a href="#" className="hover:text-white transition-colors">POLİTİKA</a>
              <a href="#" className="hover:text-white transition-colors">ÇEREZLER</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
