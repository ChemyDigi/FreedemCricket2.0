import Navbar from "@/components/Navbar";
import MasonryGallery from "@/components/Gallery/MansonryGallery";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <HeroSection/>
        <MasonryGallery/>
        <Footer/>
    </div>
  );
}