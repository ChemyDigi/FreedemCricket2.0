"use client";

import Image from "next/image";
import Link from "next/link";
import coachData from "@/app/data/coaches.json";

export default function MoreCoachesSection({ excludeId }: { excludeId?: string }) {
    // filter out the currently viewed coach
    const filteredCoaches = coachData
        .filter((c) => c.id !== excludeId)
        .slice(0, 4); // still only 4 cards

    return (
        <section className="w-full bg-[#070712] py-16 px-6 md:px-12 lg:px-20 text-white">
            <div className="text-center mb-12">
                <p className="text-[#4FA3F7] font-semibold tracking-wide uppercase">
                    Coaches
                </p>
                <h2 className="text-2xl md:text-4xl font-bold mt-2">
                    More Coaches
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                {filteredCoaches.map((coach) => (
                    <div key={coach.id} className="bg-[#11121F] rounded-xl overflow-hidden shadow-lg relative">

                        {/* BADGE */}
                        <div className="absolute top-2 right-2 bg-red-600 text-xs font-bold text-white px-3 py-1 rounded-full">
                            NO1
                        </div>

                        {/* SOCIAL ICONS */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
                            <button className="w-8 h-8 bg-[#1C1C28] flex items-center justify-center rounded-md">F</button>
                            <button className="w-8 h-8 bg-[#1C1C28] flex items-center justify-center rounded-md">X</button>
                            <button className="w-8 h-8 bg-[#1C1C28] flex items-center justify-center rounded-md">O</button>
                        </div>

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
}
