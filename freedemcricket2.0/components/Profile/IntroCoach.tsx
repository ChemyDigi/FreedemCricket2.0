"use client";

import Image from "next/image";
import { FC } from "react";
import image1 from "../../images/profile/aboutus1.jpg";
import image2 from "../../images/profile/profileImage.jpg";

const IntroCoach: FC = () => {
  return (
    <section className="w-full bg-[#070513] text-white pt-56 pb-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold text-blue-400">Meet Our Coach</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Where Strategy, Skill, and Passion Shape Champions.
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Cricket is a game of patience, precision, and sharp thinking—and our
            coach brings all three with unmatched expertise...
          </p>
        </div>

        {/* RIGHT IMAGE + CARD */}
        <div className="relative flex-1 w-full">

          {/* MAIN IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={image1}
              alt="Coach"
              width={700}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* OVERLAY CARD */}
          <div
            className="
              bg-[#2E3231]/90 backdrop-blur-lg p-6 rounded-lg 
              
              /* Default: appears BELOW image on mobile/tablet */
              static mt-6

              /* Large screens & above: overlay on image */
              lg:absolute lg:mt-0 lg:-bottom-10 lg:right-10 xl:right-20 lg:w-[70%]
            "
          >
            {/* Profile */}
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={image2}
                alt="Coach Profile"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <h3 className="font-semibold">Full Name</h3>
                <p className="text-sm text-gray-400">Coach</p>
              </div>
            </div>

            {/* Description */}
            {/* Description */}
<p className="text-gray-300 text-sm leading-relaxed mb-4">
  A master of technique and game awareness. His coaching philosophy focuses
  on skill refinement, fitness, match temperament
  level.
</p>


            {/* Rating */}
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold">4.5</span>

              <div className="flex text-yellow-400">★★★★★</div>

              <p className="text-xs text-gray-400">122 Reviews</p>
            </div>

             
          </div>

        </div>

      </div>
    </section>
  );
};

export default IntroCoach;
