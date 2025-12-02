"use client";

import Image from "next/image";
import coachData from "@/app/data/coaches.json";
import herobanner from "/images/profile/coaches/herobanner.png";

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
        <Image
          src={herobanner}
          alt="Hero Background"
          fill
          className="object-cover"
        />

        {/* Coach Image */}
        <div className="absolute bottom-0 right-0 md:bottom-[-80px] md:right-16 lg:right-24 
        w-[250px] md:w-[350px] lg:w-[500px] h-[350px] md:h-[500px] lg:h-[650px]">
          <Image
            src={coach.readmoreimage}
            alt={coach.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Name + Role */}
        <div className="absolute left-6 top-64 md:left-12 md:top-72 lg:left-20 lg:top-80">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{coach.name}</h1>
          <p className="text-blue-400 text-lg md:text-xl mt-2">{coach.role}</p>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 mt-20 md:mt-28">

        {/* About */}
        <h2 className="text-2xl font-semibold text-blue-400 mb-2">
          About {coach.name}
        </h2>

        {coach.bio && (
          <p className="text-gray-300 leading-relaxed mb-6">
            {coach.bio}
          </p>
        )}

        {/* Experience */}
        {coach.experience && coach.experience.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-2 text-white">Past Experiences</h2>

            {coach.experienceDescription && (
              <p className="text-gray-300 leading-relaxed mb-4">
                {coach.experienceDescription}
              </p>
            )}

            <ul className="space-y-2 text-gray-300 ml-4">
              {coach.experience.map((e: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span> {e}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Qualifications */}
        {coach.qualifications && coach.qualifications.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-2 text-white">Qualifications</h2>

            {coach.qualificationDescription && (
              <p className="text-gray-300 leading-relaxed mb-4">
                {coach.qualificationDescription}
              </p>
            )}

            <ul className="space-y-2 text-gray-300 ml-4">
              {coach.qualifications.map((q: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span> {q}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Achievements */}
        {coach.achievements && coach.achievements.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-2 text-white">Achievements</h2>

            {coach.achievementDescription && (
              <p className="text-gray-300 leading-relaxed mb-4">
                {coach.achievementDescription}
              </p>
            )}

            <ul className="space-y-2 text-gray-300 ml-4">
              {coach.achievements.map((a: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span> {a}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Specializations */}
        {coach.specialization && coach.specialization.length > 0 && (
          <section className="mt-10 mb-20">
            <h2 className="text-2xl font-semibold mb-2 text-white">Special Coaching Areas</h2>

            {coach.specializationDescription && (
              <p className="text-gray-300 leading-relaxed mb-4">
                {coach.specializationDescription}
              </p>
            )}

            <ul className="space-y-2 text-gray-300 ml-4">
              {coach.specialization.map((s: string, i: number) => (
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
