import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/Blog/BlogCard";
import { HeroSection } from "@/components/HeroSection";

export default function blog() {
  return (
    <>
      <Navbar />
      <HeroSection
            backgroundImage="/images/blog/blogMain.png"
            title="Articles & News"
            highlight="News"
            subtitle="-Archives-"
            ribbonImage="/images/blog/Group227.png"
        />
      <BlogCard />
      <Footer />
    </>
  );
}