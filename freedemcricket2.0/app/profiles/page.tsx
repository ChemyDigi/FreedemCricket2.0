import IntroCoach from "@/components/Profile/IntroCoach";
import CoachSection from "@/components/Profile/CoachSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
export default function Profile() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar/>
      <HeroSection
            backgroundImage="/images/profile/hero.png"
            title="Our"
            highlight=" Coaches"
            subtitle="—Guiding the Team to New Heights.—"
            ribbonImage="/images/Group227.png"
        />
      <IntroCoach />
      <CoachSection/>
      <Footer/>
    </main>
  );
}
