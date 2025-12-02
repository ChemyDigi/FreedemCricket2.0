import HeroSection from '../../components/Home/HeroSection';
import WhoWeAre from '../../components/Home/WhoWeAre';
import OurValues from '../../components/Home/OurValues';
import WavePlaster from '../../components/Home/WavePlaster';

export default function Home() {
  return (
    <main className="min-h-screen font-sans relative overflow-hidden">
      {/* Hero Section with space for the plaster */}
      <div className="relative z-0 pb-32 md:pb-48 lg:pb-64">
        <HeroSection />
      </div>
      
      {/* Wave Plaster - positioned to overlap both components */}
      <div className="relative z-30 -my-32 md:-my-48 lg:-my-64">
        <WavePlaster />
      </div>
      
      {/* WhoWeAre component positioned to sit under the plaster */}
      <div className="relative z-20 -mt-40 md:-mt-56 lg:-mt-72">
        <WhoWeAre />
      </div>
      
      {/* OurValues */}
      <div className="relative z-10">
        <OurValues />
      </div>
    </main>
  );
}