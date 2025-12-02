import Top from '@/components/ContactUs/ContactSection';
import Map from '@/components/ContactUs/MapSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Nav from '@/components/Navbar';

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <Nav />
            <HeroSection
            backgroundImage="/images/ContactUs/contactHero.png"
            title="Contact "
            highlight="Us"
            subtitle="-Your Questions, Our Commitment to the Game.-"
            ribbonImage="/images/ContactUs/zigzagline.png"
        />
            <Top />
            <Map />
            <Footer />
        </div>
    );
}   
