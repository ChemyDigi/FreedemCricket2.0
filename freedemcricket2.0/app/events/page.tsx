import { HeroSection } from "@/components/HeroSection";
import { Countdown } from "@/components/Events/Countdown";
import { TodaysMatches } from "@/components/Events/TodaysMatches";
import { LatestResults } from "@/components/Events/LatestResults";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function EventsPage() {
return (
<main className="w-full min-h-screen bg-[#0B0B0D] text-white">
    <Navbar />
    <HeroSection
                backgroundImage="/images/Events/EventHero.png"
                title="Match Schedule"
                highlight="Schedule"
                subtitle="-You Match Your Moment, Your Schedule-"
                ribbonImage="/images/Events/Ribbon.png"
            />
    <Countdown />
    <TodaysMatches />
    <LatestResults />
    <Footer />


<footer className="bg-black py-10 text-center text-gray-400 text-sm mt-10">
© 2025 Cricket Club. All Rights Reserved.
</footer>
</main>
);
}