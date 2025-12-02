"use client";

import Image from "next/image";
import coachData from "@/app/data/coaches.json";
import herobanner from "../../public/images/profile/coaches/herobanner.png";

interface CoachDetailsProps {
  id: string;
}

export default function CoachDetails({ id }: CoachDetailsProps) {
  const coach = coachData.find((c) => c.id === id);

  if (!coach) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        Coach Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#070712] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Background banner */}
        <Image
          src={herobanner}
          alt="Hero Background"
          fill
          className="object-cover"
        />

        {/* Coach image overlay */}
        <div className="absolute bottom-0 right-0 md:bottom-[-40px] md:right-20 lg:right-32 w-[180px] md:w-[250px] lg:w-[300px] h-[250px] md:h-[350px] lg:h-[400px]">
          <Image
            src={coach.readmoreimage}
            alt={coach.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Name + Role text */}
        <div className="absolute left-6 bottom-6 md:left-12 md:bottom-12 lg:left-20 lg:bottom-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{coach.name}</h1>
          <p className="text-blue-400 text-lg md:text-xl mt-2">{coach.role}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 mt-32 md:mt-40">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">About</h2>
        <p className="text-gray-300 leading-relaxed">{coach.bio}</p>

        {/* Past Experiences */}
        {coach.experience && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Past Experiences</h2>
            <ul className="space-y-2 text-gray-300">
              {coach.experience.map((e, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span> {e}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Qualifications */}
        {coach.qualifications && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Qualifications</h2>
            <ul className="space-y-2 text-gray-300">
              {coach.qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span> {q}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Achievements */}
        {coach.achievements && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <ul className="space-y-2 text-gray-300">
              {coach.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span> {a}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Special Coaching Areas */}
        {coach.specialization && (
          <section class-name="mt-8 mb-16">
            <h2 className="text-2xl font-semibold mb-4">Special Coaching Areas</h2>
            <ul className="space-y-2 text-gray-300">
              {coach.specialization.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span> {s}
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </main>
  );
}
