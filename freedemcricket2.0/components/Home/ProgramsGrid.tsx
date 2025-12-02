import Image from "next/image";

export default function ProgramsGrid() {
  const programs = [
    {
      id: 1,
      title: "Skill Enhancement",
      description: "Sharpen your cricketing fundamentals through targeted drills designed to elevate shot selection, bowling accuracy, footwork, and overall game awareness.",
      image: "/images/home/skill.png"
    },
    {
      id: 2,
      title: "Team Drills",
      description: "Strengthen communication, coordination, and match strategy through group practices that develop trust, chemistry, and tactical excellence.",
      image: "/images/home/drill.png"
    },
    {
      id: 3,
      title: "Match Preparation",
      description: "Get match-ready with sessions focused on stamina, concentration, tactics, and situational awareness to perform your best in every innings.",
      image: "/images/home/match.png"
    },
    {
      id: 4,
      title: "Youth Cricket Camp",
      description: "A fun and educational environment where young players learn core skills, develop confidence, and build lifelong friendships through the spirit of cricket.",
      image: "/images/home/camp.png"
    },
    {
      id: 5,
      title: "Pro Training Clinic",
      description: "Train at an advanced level under expert coaches, focusing on professional-grade techniques, strategy, and performance optimization.",
      image: "/images/home/pro.png"
    }
  ];

  return (
    <div className="w-full bg-[#070513] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* First 5 cards - Full image with text at bottom */}
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="relative h-80 md:h-96 rounded-xl overflow-hidden group"
            >
              {/* Background Image - No overlay */}
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Text Content - Positioned at bottom with dark background */}
              <div className="absolute bottom-0 left-0 right-0 p-6  pt-16">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
                  {program.title}
                </h3>
                
                <p className="text-white text-sm md:text-base font-medium text-justify leading-relaxed mb-4">
                  {program.description}
                </p>
                
                <button className="bg-[#AE111C] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-[10px] hover:bg-[#8d0e17] transition-all duration-300 uppercase tracking-wider">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
          
          {/* 6th Card - Regular card without image */}
          <div className="bg-gradient-to-r from-[#020C24] to-[#021F3A] rounded-xl p-8 border border-white/10 flex flex-col justify-center items-center text-left">
            <div className="space-y-6">
              <h3 className="text-white text-3xl md:text-3xl font-semibold leading-tight">
                Building Skills, Character, and Team Spirit Together.
              </h3>
              
              <p className="text-white text-base md:text-sm font-medium leading-relaxed">
                Join a program designed to strengthen discipline, develop confidence, and elevate your game to the next level.
              </p>
              
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}