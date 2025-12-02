"use client";

import Image from "next/image";
import Link from "next/link";
import coachData from "@/app/data/coaches.json";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const CoachSection = () => {
  return (
    <section className="w-full bg-[#070712] py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="text-center mb-12">
        <p className="text-[#4FA3F7] font-semibold">Meet Our Coach</p>
        <h2 className="text-2xl md:text-4xl font-bold mt-3 leading-tight">
          Experience, Dedication and the <br /> effort to Archive
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {coachData.map((coach) => (
          <div
            key={coach.id}
            className="bg-[#11121F] rounded-xl overflow-hidden shadow-lg relative"
          >


            {/* SOCIAL ICONS */}
            <div className="absolute top-3 left-3 flex flex-col gap-3 z-10">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-md text-white hover:bg-blue-700 transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-md text-white hover:bg-blue-700 transition"
              >
                <FaTwitter size={14} />
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-md text-white hover:bg-blue-700 transition"
              >
                <FaInstagram size={14} />
              </a>
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
                className="mt-4 inline-block bg-red-600 hover:bg-red-700 transition text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                Read More
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoachSection;