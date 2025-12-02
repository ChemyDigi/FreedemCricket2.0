import Image from "next/image";

export default function OurPrograms() {
  return (
    <div className="w-full bg-[#070513] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[#1E84CA] text-base md:text-lg font-extrabold mb-4 md:mb-5">
              OUR PROGRAMS
            </h3>
            <h2 className="text-white text-2xl md:text-3xl lg:text-[32px] font-bold mb-6 leading-tight">
              Your Cricket Journey Begins Here.
            </h2>
            <p className="text-white text-base md:text-lg font-medium text-justify leading-relaxed">
              Discover a pathway built to strengthen skills, discipline, and passion for the gentleman's game.
            </p>
          </div>

          {/* Middle Card */}
          <div className="bg-gradient-to-r from-[#020C24] to-[#021F3A] rounded-xl p-6 border border-white/10 flex flex-col">
            <div className="flex-1">
              {/* Icon and Heading */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#AE111C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg 
                    className="w-5 h-5 md:w-6 md:h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-semibold">
                  Player Development
                </h3>
              </div>
              
              {/* White Line */}
              <div className="h-[1px] bg-white/30 w-full mb-5"></div>
              
              {/* Paragraph */}
              <p className="text-white/80 text-sm md:text-base text-justify leading-relaxed mb-6">
                Focused on improving each player's batting, bowling, and fielding techniques while building physical fitness and mental resilience to perform with confidence.
              </p>
            </div>
            
            {/* Learn More Button */}
            <button className="bg-[#AE111C] text-white text-sm md:text-base font-semibold px-5 py-2.5 rounded-lg hover:bg-[#8d0e17] transition-all duration-300 w-full md:w-auto mt-auto">
              Learn More
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-r from-[#020C24] to-[#021F3A] rounded-xl p-6 border border-white/10 flex flex-col">
            <div className="flex-1">
              {/* Icon and Heading */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#AE111C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg 
                    className="w-5 h-5 md:w-6 md:h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-semibold">
                  Strong Team Culture
                </h3>
              </div>
              
              {/* White Line */}
              <div className="h-[1px] bg-white/30 w-full mb-5"></div>
              
              {/* Paragraph */}
              <p className="text-white/80 text-sm md:text-base text-justify leading-relaxed mb-6">
                Committed to nurturing unity, discipline, and sportsmanship that keep the team bonded both on and off the pitch, driven by true love for the game.
              </p>
            </div>
            
            {/* Learn More Button */}
            <button className="bg-[#AE111C] text-white text-sm md:text-base font-semibold px-5 py-2.5 rounded-lg hover:bg-[#8d0e17] transition-all duration-300 w-full md:w-auto mt-auto">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}