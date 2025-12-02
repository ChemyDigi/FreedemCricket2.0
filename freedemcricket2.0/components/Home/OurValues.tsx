import Image from "next/image";

export default function OurValues() {
  const stats = [
    { number: "579+", label: "ACTIVE MEMBERS" },
    { number: "85%", label: "WINNING RATE" },
    { number: "1893+", label: "TRAINING HOURS" },
    { number: "435+", label: "YOUTH GROWTH" },
  ];

  return (
    <div className="w-full bg-[#070513] py-16 md:py-24 px-4">
      {/* Top Background Image Section */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/home/ourvalues.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/2"></div>

        </div>
        
        {/* Header Section */}
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-[#1E84CA] text-lg md:text-xl font-bold mb-3 md:mb-4">
            OUR VALUES
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-white mb-6 md:mb-8 leading-tight max-w-2xl">
            Inspiring the Future, Achieving Together.
          </h2>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto -mt-20 md:-mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Vision Card */}
          <div className="bg-gradient-to-r from-[#021E39] to-[#020D26] rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#AE111C] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-[32px] font-medium text-white mb-4">
                  Our Vision
                </h3>
                
                <p className="text-white/80 text-xs md:text-sm mb-6 leading-relaxed">
                  To become a leading cricket community that nurtures passion, sharpens talent, 
                  and builds a culture of discipline, teamwork, and excellence both on and off 
                  the pitch.
                </p>
                
                <button className="bg-[#AE111C] text-white text-base md:text-lg font-semibold px-6 py-2.5 rounded-lg hover:bg-[#8d0e17] transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="flex-1">
                <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/home/vision.png"
                    alt="Our Vision"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-r from-[#021E39] to-[#020D26] rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#AE111C] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-[32px] font-medium text-white mb-4">
                  Our Mission
                </h3>
                
                <p className="text-white/80 text-xs md:text-sm mb-6 leading-relaxed">
                  To empower players of all ages with world-class training, strong mentorship, 
                  and opportunities to grow—shaping confident cricketers ready to excel in 
                  every format of the game.
                </p>
                
                <button className="bg-[#AE111C] text-white text-base md:text-lg font-semibold px-6 py-2.5 rounded-lg hover:bg-[#8d0e17] transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="flex-1">
                <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/home/mission.png"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Logos */}
      <div className="max-w-6xl mx-auto mt-20 md:mt-24">
        {/* Logos Grid - Further reduced */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center mb-8 md:mb-12">
          {[1, 2, 3, 4].map((index) => (
            <div 
              key={index} 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative flex items-center justify-center"
            >
              <Image
                src={`/images/home/logo-${index}.png`}
                alt={`Logo ${index}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
              />
            </div>
          ))}
        </div>

        {/* Stats Grid - Further reduced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-2">
                {stat.number}
              </div>
              <div className="text-[#1E84CA] font-bold text-xs md:text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}