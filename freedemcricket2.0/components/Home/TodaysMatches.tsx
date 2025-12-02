import React from "react";

export const TodaysMatches: React.FC = () => {
  interface MatchInfo {
    date: string;
    time: string;
    team1: string;
    team2: string;
    team1Logo: string;
    team2Logo: string;
  }

  const matches: MatchInfo[] = [
    {
      date: "19 AUG",
      time: "01:58",
      team1: "AMBEDKAR STAR CLUB",
      team2: "FREEDOM CRICKET ACADEMY",
      team1Logo: "/images/home/TeamX.png",
      team2Logo: "/images/home/TeamY.png",
    },
    {
      date: "21 AUG",
      time: "01:58",
      team1: "AMBEDKAR STAR CLUB",
      team2: "FREEDOM CRICKET ACADEMY",
      team1Logo: "/images/home/TeamX.png",
      team2Logo: "/images/home/TeamY.png",
    },
    {
      date: "25 AUG",
      time: "01:58",
      team1: "AMBEDKAR STAR CLUB",
      team2: "FREEDOM CRICKET ACADEMY",
      team1Logo: "/images/home/TeamX.png",
      team2Logo: "/images/home/TeamY.png",
    },
    {
      date: "29 AUG",
      time: "01:58",
      team1: "AMBEDKAR STAR CLUB",
      team2: "FREEDOM CRICKET ACADEMY",
      team1Logo: "/images/home/TeamX.png",
      team2Logo: "/images/home/TeamY.png",
    },
  ];

  return (
    <section className="py-20 bg-[#070513]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-6">
          {matches.map((m, index) => (
            <div
              key={index}
              className="bg-[#11121A] p-4 rounded-xl shadow-xl border border-[#1F1F29]"
            >
              <div className="flex justify-between text-gray-300 text-xs mb-4">
                <span>{m.date}</span>
                <span>{m.time}</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <img
                  src={m.team1Logo}
                  alt={m.team1}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-gray-300">VS</span>
                <img
                  src={m.team2Logo}
                  alt={m.team2}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="text-white text-sm font-semibold leading-tight">
                {m.team1}
              </div>
              <div className="text-[#A3A3A8] text-xs tracking-wide">
                {m.team2}
              </div>
            </div>
          ))}
        </div>

        <div className="text-white max-w-md">
          <p className="text-[#3E86F5] text-sm font-semibold mb-2">
            Upcoming Match Update
          </p>

          <h2 className="text-3xl font-bold leading-tight mb-4">
            Updates from Our future Cricket Match
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Stay informed with highlights, key moments, and match-changing
            performances from our latest game.
          </p>
        </div>
      </div>
    </section>
  );
};
export default TodaysMatches;