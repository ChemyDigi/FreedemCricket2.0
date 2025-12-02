import Navbar from "@/components/Navbar";
import MasonryGallery from "@/components/Gallery/MansonryGallery";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <HeroSection
            backgroundImage="/images/Gallery/gallerypage.png"
            title="Match Schedule"
            highlight="Schedule"
            subtitle="-You Match Your Moment, Your Schedule-"
            ribbonImage="/images/Gallery/Group227.png"
        />
        <MasonryGallery/>
        <Footer/>
    </div>
  );
}