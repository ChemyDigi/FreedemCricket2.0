import Navbar from "@/components/Navbar";
import MasonryGallery from "@/components/Gallery/MansonryGallery";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <MasonryGallery/>
        <Footer/>
    </div>
  );
}