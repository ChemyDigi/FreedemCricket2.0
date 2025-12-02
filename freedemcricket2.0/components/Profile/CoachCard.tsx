"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string; // must be string
  name: string;
  role: string;
  image: string;
}

export default function CoachCard({ id, name, role, image }: Props) {
  return (
    <div className="bg-[#11121F] rounded-xl overflow-hidden shadow-lg relative">

      {/* Badge */}
      <div className="absolute top-2 right-2 bg-red-600 text-xs text-white px-3 py-1 rounded-full">
        NO 1
      </div>

      {/* Image */}
      <div className="w-full h-64 relative">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Text */}
      <div className="text-center px-6 py-5">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-[#4FA3F7] text-sm mt-1">{role}</p>

        <Link
          href={`/profiles/${id}`}
          className="mt-4 inline-block text-sm text-blue-400 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
