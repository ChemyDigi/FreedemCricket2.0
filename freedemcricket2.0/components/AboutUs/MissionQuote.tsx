"use client";

import Image from "next/image";

export default function MissionQuote() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-6xl mx-auto relative">
        {/* Left Quote Icon */}
        <div className="absolute left-0 top-0 text-[#1C76D1] text-6xl md:text-7xl select-none">
          &ldquo;
        </div>

        {/* Right Quote Icon */}
        <div className="absolute right-0 top-50 text-[#1C76D1] text-6xl md:text-7xl select-none">
          &rdquo;
        </div>

        {/* Mission Statement */}
        <p className="text-center text-3xl md:text-4xl leading-snug font-medium mt-10">
          Our mission is to equip every player with
          <br className="hidden md:block" />
          the skills, mindset, and coaching they
          <br className="hidden md:block" />
          need to reach their full cricketing potential
        </p>

        {/* Founder Info */}
        <div className="flex items-center gap-6 mt-14">
          {/* Profile Circle */}
          <div className="w-24 h-24 rounded-full bg-[#D9D9D9] overflow-hidden relative">
            <Image
              src="/images/AboutUs/Hiran.jpg"
              alt="Hiran Gunawardhana"
              fill
              className="object-cover"
            />
          </div>

          {/* Name + Title */}
          <div>
            <p className="text-lg font-medium text-[#1C76D1]">
              Hiran Gunawardhana
            </p>
            <p className="text-sm text-white/80">Founder / Head Coach</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/30 mt-10" />
      </div>
    </section>
  );
}
