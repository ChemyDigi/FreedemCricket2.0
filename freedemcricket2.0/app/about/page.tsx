import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSection from "@/components/About/IntroSection";
import MissionQuote from "@/components/About/MissionQuote";
import StatSection from "@/components/About/StatSection";
import { HeroSection } from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/images/About/aboutus.png"
        title="Match Schedule"
        highlight="Schedule"
        subtitle="-You Match Your Moment, Your Schedule-"
        ribbonImage="/images/Gallery/Group227.png"
      />
      <IntroSection />
      <MissionQuote />
      <StatSection />
      <Footer />
    </>
  );
}