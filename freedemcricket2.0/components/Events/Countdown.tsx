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

  // Countdown Logic
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
    <section
      className="relative w-full py-28 mt-32 flex items-center justify-center bg-[#101014] overflow-hidden"
      style={{
        backgroundImage: `url('/Images/Events/match1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">

        {/* ---------------- TOP: LOGOS + COUNTDOWN ---------------- */}
        <div className="w-full flex items-center justify-between">

          {/* TEAM LOGOS */}
          <div className="flex items-center gap-6">
            <Image
              src="/Images/Events/Teams/TeamX.png"
              alt="Team X"
              width={110}
              height={110}
              className="rounded-full"
            />
            <Image
              src="/Images/Events/Teams/TeamY.png"
              alt="Team Y"
              width={110}
              height={110}
              className="rounded-full"
            />
          </div>

          {/* COUNTDOWN BOXES */}
          <div className="grid grid-cols-4 gap-4">
            {labels.map((label) => (
              <div
                key={label}
                className="bg-black/40 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 text-center"
              >
                <p className="text-3xl md:text-5xl font-bold text-white">
                  {timeLeft[label as keyof typeof timeLeft]}
                </p>
                <p className="text-sm md:text-lg text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Space below timer */}
        <div className="h-20"></div>

        {/* ---------------- UPCOMING MATCH (Left) ---------------- */}
        <div className="text-left mb-6">
          <p className="text-[#1E84CA] font-bold uppercase tracking-wide text-xl">
            Upcoming Match
          </p>
        </div>

        {/* ---------------- TEAM NAMES (Center) ---------------- */}
        <div className="w-full flex justify-center mt-2">
          <div className="flex items-center gap-10 md:gap-24 flex-wrap justify-center">

            <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center whitespace-normal">
              AMBEDKAR STAR CLUB
            </h2>

            <span className="text-3xl md:text-5xl font-extrabold text-gray-200 mx-2">
              VS
            </span>

            <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center whitespace-normal">
              FREEDOM CRICKET ACADEMY
            </h2>

          </div>
        </div>

        {/* ---------------- VENUE + TIME (Left) ---------------- */}
        <div className="text-left mt-10">
          <p className="text-[#FF8C42] text-lg md:text-xl">
            Live at Dubai International Stadium
          </p>

          <p className="text-[#FF8C42] text-lg md:text-xl mt-1">
            02/02/2025 — 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};
