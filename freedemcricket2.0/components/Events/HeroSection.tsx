import React from "react";


export const HeroSection: React.FC = () => {
return (
<section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-[#0B0B0D]">
{/* Background image from public/images/events */}
<div
className="absolute inset-0 bg-center bg-cover opacity-60"
style={{ backgroundImage: `url('/images/events/EventHero.png')` }}
/>


{/* Text */}
<div className="relative z-10 text-center px-4">
<h1 className="text-5xl font-bold">
Match <span className="text-red-500">Schedule</span>
</h1>
<p className="mt-4 text-lg text-[#1E84CA] opacity-80">-You Match Your Moment, Your Schedule-</p>
</div>


{/* Wave */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" className="block w-full h-20" preserveAspectRatio="none">
<path d="M0 30 C150 80 350 0 600 30 C850 60 1050 20 1200 40 L1200 120 L0 120 Z" fill="#1B1F3B" />
</svg>
</div>
</section>
);
};