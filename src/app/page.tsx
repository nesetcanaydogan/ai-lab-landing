"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Achievements from "@/components/achievements";
import Progressive from "@/components/progressive";
import Vision from "@/components/vision";
import Cooperation from "@/components/cooperation";
import WhyUs from "@/components/why-us";
import Team from "@/components/team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Progressive />
        <Vision />
        <Cooperation />
        <WhyUs />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
