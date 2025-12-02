import HeroSection from '../../components/Home/HeroSection';
import WhoWeAre from '../../components/Home/WhoWeAre';
import OurValues from '../../components/Home/OurValues';
import WavePlaster from '../../components/Home/WavePlaster';
import OurPrograms from '@/components/Home/OurPrograms';
import ProgramsGrid from '@/components/Home/ProgramsGrid';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import OurFacilities from '@/components/Home/OurFacilities';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans relative overflow-hidden">

      <Navbar />
      <HeroSection />
      <WavePlaster />
      <WhoWeAre />
      <OurValues />
      <OurPrograms />
      <ProgramsGrid />
      <WhyChooseUs />
      <OurFacilities />
      <Footer />

    </main>
  );

}