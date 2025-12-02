import { HeroSection } from '../../components/HeroSection';
import WhoWeAre from '../../components/Home/WhoWeAre';
import OurValues from '../../components/Home/OurValues';
import WavePlaster from '../../components/Home/WavePlaster';
import OurPrograms from '@/components/Home/OurPrograms';
import ProgramsGrid from '@/components/Home/ProgramsGrid';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import OurFacilities from '@/components/Home/OurFacilities';
import Countdown from '@/components/Home/Countdown';
import TodaysMatches from '@/components/Home/TodaysMatches';
import CallToAction from '@/components/Home/CallToAction';
import Testimonials from '@/components/Home/Testimonials';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans relative overflow-hidden">

      <Navbar />
      <HeroSection
            backgroundImage="/images/home/hero.png"
            title="Chasing "
            highlight="Dreams"
      
            subtitle="—We believe cricket is more than just a game—"
            ribbonImage="/images/home/ribbon.png"
        />
     
      <WhoWeAre />
      <OurValues />
      <OurPrograms />
      <ProgramsGrid />
      <WhyChooseUs />
      <OurFacilities />
      <Countdown />
      <TodaysMatches />
      <CallToAction />
      <Testimonials />
      <Footer />

    </main>
  );

}