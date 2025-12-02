import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSection from "@/components/AboutUs/IntroSection";
import MissionQuote from "@/components/AboutUs/MissionQuote";
import CoachesSection from "@/components/AboutUs/CoachesSection";
import StatSection from "@/components/AboutUs/StatSection";
import { HeroSection } from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/images/aboutUs/aboutus.png"
        title="Match Schedule"
        highlight="Schedule"
        subtitle="-You Match Your Moment, Your Schedule-"
        ribbonImage="/images/Gallery/Group2.png"
      />
      <IntroSection />
      <MissionQuote />
      <StatSection />
      <CoachesSection />
      <Footer />
    </>
  );
}
