"use client";

import HeroSection from "@/components/FAQS/HeroSection";
import CallToAction from "@/components/FAQS/CallToAction";
import BenefitsSection from "@/components/FAQS/BenefitsSection";
import WaveCurve from "@/components/FAQS/WaveCurve";

export default function CricketPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CallToAction />
      <BenefitsSection />
        <WaveCurve />
    </main>
  );
}