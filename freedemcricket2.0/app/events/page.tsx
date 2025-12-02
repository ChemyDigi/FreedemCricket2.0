import { HeroSection } from "@/components/Events/HeroSection";
import { Countdown } from "@/components/Events/Countdown";
import { TodaysMatches } from "@/components/Events/TodaysMatches";
import { LatestResults } from "@/components/Events/LatestResults";


export default function EventsPage() {
return (
<main className="w-full min-h-screen bg-[#0B0B0D] text-white">
<HeroSection />
<Countdown />
<TodaysMatches />
<LatestResults />


<footer className="bg-black py-10 text-center text-gray-400 text-sm mt-10">
© 2025 Cricket Club. All Rights Reserved.
</footer>
</main>
);
}