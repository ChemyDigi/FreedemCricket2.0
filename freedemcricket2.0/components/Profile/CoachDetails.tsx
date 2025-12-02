"use client";

import Image from "next/image";
import coachData from "@/app/data/coaches.json";

interface CoachDetailsProps {
  id: string;
}

export default function CoachDetails({ id }: CoachDetailsProps) {
  const coach = coachData.find((c) => c.id === id);

  if (!coach) return <div className="min-h-screen bg-black text-white p-10">Coach Not Found</div>;

  return (
    <main className="min-h-screen bg-[#070712] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="w-full h-80 relative rounded-xl overflow-hidden">
          <Image src={coach.image} alt={coach.name} fill className="object-cover" />
        </div>

        <h1 className="text-4xl font-bold mt-6">{coach.name}</h1>
        <p className="text-blue-400 text-lg mb-4">{coach.role}</p>
        {coach.bio && <p className="text-gray-300 mt-6 leading-relaxed">{coach.bio}</p>}

        {coach.qualifications && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Qualifications</h2>
            <ul className="list-disc pl-6 text-gray-300">
              {coach.qualifications.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </section>
        )}

        {coach.experience && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Coaching Experience</h2>
            <ul className="list-disc pl-6 text-gray-300">
              {coach.experience.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </section>
        )}

        {coach.achievements && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc pl-6 text-gray-300">
              {coach.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </section>
        )}

        {coach.specialization && (
          <section className="mt-8 mb-16">
            <h2 className="text-2xl font-semibold mb-2">Special Coaching Areas</h2>
            <ul className="list-disc pl-6 text-gray-300">
              {coach.specialization.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}