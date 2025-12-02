"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Countdown: React.FC = () => {
  const labels = ["Days", "Hours", "Minutes", "Seconds"];

  const eventDate = new Date("2025-12-13T18:00:00");

  const [timeLeft, setTimeLeft] = useState({
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        Days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        Hours: String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0"),
        Minutes: String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0"),
        Seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#070513]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Card Container */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/home/count.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Card Content */}
          <div className="relative z-10 p-6 md:p-8 lg:p-10">
            
            {/* Top Section: Logos and Countdown */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8 lg:mb-12">
              
              {/* Team Logos */}
              <div className="flex items-center gap-6 order-2 lg:order-1">
                <div className="w-20 h-20 md:w-28 md:h-28 relative">
                  <Image
                    src="/images/home/TeamX.png"
                    alt="Team X"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="w-20 h-20 md:w-28 md:h-28 relative">
                  <Image
                    src="/images/home/TeamY.png"
                    alt="Team Y"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-3 md:gap-4 order-1 lg:order-2 w-full lg:w-auto">
                {labels.map((label) => (
                  <div
                    key={label}
                    className="bg-black/40 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl border border-white/10 text-center"
                  >
                    <p className="text-2xl md:text-4xl font-bold text-white">
                      {timeLeft[label as keyof typeof timeLeft]}
                    </p>
                    <p className="text-xs md:text-sm text-white/70">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacing */}
            <div className="h-8 md:h-12"></div>

            {/* Match Details */}
            <div>
              {/* Upcoming Match Label */}
              <p className="text-[#1E84CA] font-bold uppercase tracking-wide text-base md:text-lg mb-4">
                Upcoming Match
              </p>

              {/* Team Names */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                  AMBEDKAR STAR CLUB
                </h2>
                
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200">
                  VS
                </span>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                  FREEDOM CRICKET ACADEMY
                </h2>
              </div>

              {/* Venue and Time */}
              <div className="mt-6 md:mt-8">
                <p className="text-[#FF8C42] text-base md:text-lg">
                  Live at Dubai International Stadium
                </p>
                <p className="text-[#FF8C42] text-base md:text-lg mt-1">
                  02/02/2025 — 6:00 PM
                </p>
              </div>
            </div>

            {/* View Details Button */}
            <div className="mt-8 text-center">
              <button className="bg-[#AE111C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#8d0e17] transition-all duration-300">
                VIEW MATCH DETAILS
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Countdown;