import IntroCoach from "@/components/Profile/IntroCoach";
import CoachSection from "@/components/Profile/CoachSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection"
export default function Profile() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar/>
      <Hero
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
