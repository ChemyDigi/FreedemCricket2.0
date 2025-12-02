"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import coachData from "@/app/data/coaches.json";

const CoachSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4; // Number of cards visible at once

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(coachData.length - cardsPerView, prev + 1)
    );
  };

  return (
    <section className="w-full bg-[#070712] py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="text-center mb-12">
        <p className="text-[#4FA3F7] font-semibold">Coaches</p>
        <h2 className="text-2xl md:text-4xl font-bold mt-3 leading-tight">
          Meet Our Coaches
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#4FA3F7] hover:bg-[#3A8FE0] disabled:bg-gray-600 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors shadow-lg"
          aria-label="Previous coaches"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= coachData.length - cardsPerView}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#4FA3F7] hover:bg-[#3A8FE0] disabled:bg-gray-600 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors shadow-lg"
          aria-label="Next coaches"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-10"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {coachData.map((coach) => (
              <div
                key={coach.id}
                className="bg-[#11121F] rounded-xl overflow-hidden shadow-lg relative shrink-0"
                style={{ width: `calc(${100 / cardsPerView}% - 2.5rem)` }}
              >
                {/* BADGE */}
                <div className="absolute top-2 right-2 bg-red-600 text-xs font-bold text-white px-3 py-1 rounded-full">
                  NO 1
                </div>

                {/* IMAGE - Fixed link to use /profiles/ instead of /coaches/ */}
                <Link href={`/profiles/${coach.id}`}>
                  <div className="w-full h-64 relative cursor-pointer">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                {/* NAME + ROLE + READ MORE */}
                <div className="text-center px-6 py-5">
                  <h3 className="text-lg font-bold">{coach.name}</h3>
                  <p className="text-[#4FA3F7] text-sm mt-1">{coach.role}</p>

                  <Link
                    href={`/profiles/${coach.id}`}
                    className="mt-4 inline-block text-sm text-blue-400 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
