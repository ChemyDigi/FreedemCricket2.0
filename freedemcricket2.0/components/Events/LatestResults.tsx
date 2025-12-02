import React from "react";

export const LatestResults: React.FC = () => {
  const results = [
    {
      matchType: "Friendly Match • T20 5 of 6",
      team1: "FREEDOM CRICKET ACADEMY",
      team2: "AMBEDKAR STAR CLUB",
      team1Logo: "/images/Events/Teams/TeamX.png",
      team2Logo: "/images/Events/Teams/TeamY.png",
      team1Score: "181/6 (20 overs)",
      team2Score: "158/6 (20 overs)",
      winner: "FREEDOM CRICKET ACADEMY won by 13 runs",
    },
    {
      matchType: "Friendly Match • T20 5 of 6",
      team1: "FREEDOM CRICKET ACADEMY",
      team2: "AMBEDKAR STAR CLUB",
      team1Logo: "/images/Events/Teams/TeamX.png",
      team2Logo: "/images/Events/Teams/TeamY.png",
      team1Score: "181/6 (20 overs)",
      team2Score: "158/6 (20 overs)",
      winner: "FREEDOM CRICKET ACADEMY won by 13 runs",
    },
  ];

  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Events/match2.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-start">
        <h2 className="text-3xl font-bold mb-10 text-white">Latest Match Results</h2>

        <div className="flex flex-col gap-10">
          {results.map((r, index) => (
            <div
              key={index}
              className="bg-[#1A1A22]/90 p-6 rounded-xl shadow-xl border border-[#2A2A33] backdrop-blur-md"
            >
              {/* Match type */}
              <p className="text-gray-400 text-xs mb-4">{r.matchType}</p>

              {/* Team rows */}
              <div className="flex items-center gap-4 mb-3">
                <img src={r.team1Logo} className="w-10 h-10 object-contain" alt={r.team1} />
                <div>
                  <p className="text-white text-sm font-semibold">{r.team1}</p>
                </div>
                <p className="text-white text-sm ml-auto font-medium">{r.team1Score}</p>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img src={r.team2Logo} className="w-10 h-10 object-contain" alt={r.team2} />
                <div>
                  <p className="text-white text-sm font-semibold">{r.team2}</p>
                </div>
                <p className="text-white text-sm ml-auto font-medium">{r.team2Score}</p>
              </div>

              {/* Winner */}
              <p className="text-white text-sm font-bold">{r.winner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
