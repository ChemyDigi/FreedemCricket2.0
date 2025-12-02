

"use client";

import HeroSection from "@/components/FAQS/HeroSection";
import CallToAction from "@/components/FAQS/CallToAction";
import BenefitsSection from "@/components/FAQS/BenefitsSection";
import WaveCurve from "@/components/FAQS/WaveCurve";
import QuestionsSection from "@/components/FAQS/QuestionsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function CricketPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CallToAction />
      <BenefitsSection />
        <WaveCurve />
      <QuestionsSection />
      <Navbar />
      <Footer />
    </main>
  );

}