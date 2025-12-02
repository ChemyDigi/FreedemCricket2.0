import Image from "next/image";

export default function OurValues() {
  return (
    <div className="w-full bg-gradient-to-b from-[#070513] to-black py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-[#1E84CA] text-xl font-bold mb-4">
            OUR VALUES
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-8 leading-tight">
            Inspiring the Future, Achieving Together.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Vision Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Content */}
              <div className="flex-1">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#AE111C] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-[40px] font-medium text-white mb-6">
                  Our Vision
                </h3>
                
                <p className="text-white/80 text-xl mb-8 leading-relaxed">
                  To become a leading cricket community that nurtures passion, sharpens talent, 
                  and builds a culture of discipline, teamwork, and excellence both on and off 
                  the pitch.
                </p>
                
                <button className="bg-[#AE111C] text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-[#8d0e17] transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              {/* Right Image */}
              <div className="flex-1">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/vision-image.jpg" // Add your vision image
                    alt="Our Vision"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Content */}
              <div className="flex-1">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#AE111C] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-[40px] font-medium text-white mb-6">
                  Our Mission
                </h3>
                
                <p className="text-white/80 text-xl mb-8 leading-relaxed">
                  To empower players of all ages with world-class training, strong mentorship, 
                  and opportunities to grow—shaping confident cricketers ready to excel in 
                  every format of the game.
                </p>
                
                <button className="bg-[#AE111C] text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-[#8d0e17] transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              {/* Right Image */}
              <div className="flex-1">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/mission-image.jpg" // Add your mission image
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
    </div>
  );
}