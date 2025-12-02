"use client";

import Image from "next/image";
import Link from "next/link";
import coachData from "@/app/data/coaches.json";

const MoreCoachesSection = () => {
  // limit to 4 coaches (one row)
  const limitedCoaches = coachData.slice(0, 4);

  return (
    <section className="w-full bg-[#070712] py-16 px-6 md:px-12 lg:px-20 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-[#4FA3F7] font-semibold tracking-wide uppercase">
          Coaches
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">
          More Coaches
        </h2>
      </div>

      {/* One Row Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {limitedCoaches.map((coach) => (
          <div
            key={coach.id}
            className="bg-[#11121F] rounded-xl overflow-hidden shadow-lg relative"
          >
            {/* Badge */}
            <div className="absolute top-2 right-2 bg-red-600 text-xs font-bold text-white px-3 py-1 rounded-full z-20">
              NO1
            </div>

            {/* Social Icons */}
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
              <button className="w-8 h-8 bg-[#1C1C28] flex items-center justify-center rounded-md">F</button>
              <button className="w-8 h-8 bg-[#1C1C28] flex items-center justify-center rounded-md">X</button>
              <button className="w-8 h-8 bg-[#1C1C28] flex items-center justify-center rounded-md">O</button>
            </div>

            {/* Image */}
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

            {/* Info */}
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
    </section>
  );
};

export default MoreCoachesSection;
