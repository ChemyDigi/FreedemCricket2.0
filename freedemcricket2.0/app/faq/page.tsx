"use client";

import {HeroSection} from "@/components/HeroSection";
import CallToAction from "@/components/FAQS/CallToAction";
import BenefitsSection from "@/components/FAQS/BenefitsSection";
import WaveCurve from "@/components/FAQS/WaveCurve";

import FAQSection from "@/components/FAQS/QuestionsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CricketPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
            backgroundImage="/images/faq_images/hero.png"
            title="FA"
            highlight="Qs"
            subtitle="—Clear Answers, No Extra Time Needed—"
            ribbonImage="/images/Gallery/Group227.png"
        />
      <CallToAction />
      <BenefitsSection />
      <WaveCurve />
      
      <FAQSection />
      <Navbar />
      <Footer />
    </main>
  );

}