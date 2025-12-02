"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-[#070513] text-white px-6 md:px-16 lg:px-24 pt-20 flex flex-col gap-24">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] md:text-[38px] font-semibold leading-snug">
            5+ years shaping young <br /> cricketers into{" "}
            <span className="text-blue-400">champions</span>
          </h2>

          <p className="text-[17px] md:text-[18px] text-gray-300 leading-relaxed max-w-md">
            At Freedem Cricket Academy, we focus on developing complete players
            with strong fundamentals, discipline, and a winning mindset. Through
            structured training, modern coaching techniques, and personalized
            guidance, we nurture talent to excel both on and off the field.{" "}
          </p>
        </div>

        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="w-[330px] h-[380px] md:w-[420px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/images/About/intro.png"
              alt="Coach celebrating"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
