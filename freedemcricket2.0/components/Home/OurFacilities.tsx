import Image from "next/image";

export default function OurFacilities() {
  const facilities = [
    {
      id: 1,
      title: "Main Stadium",
      description: "A modern cricket ground featuring a professional-quality pitch, boundary setup, and comfortable seating for spectators.",
      icon: "🏟️"
    },
    {
      id: 2,
      title: "Fitness & Gym Center",
      description: "Equipped with advanced training machines, strength-building zones, and conditioning areas ideal for cricket-specific fitness.",
      icon: "💪"
    },
    {
      id: 3,
      title: "Locker Rooms",
      description: "Spacious, secure, and well-equipped locker rooms offering comfort, privacy, and everything players need before and after the game.",
      icon: "🚿"
    },
    {
      id: 4,
      title: "Recovery Center",
      description: "A dedicated recovery space with medical support, physiotherapy resources, and treatment facilities to keep players healthy and match-ready.",
      icon: "🏥"
    }
  ];

  return (
    <div className="w-full bg-[#070513] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
          
          {/* Left Side - Full Image matching right grid height */}
          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/home/ourfacility1.png"
              alt="Cricket Facilities"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col h-full">
            {/* Header Section - Left Aligned */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-[#1E84CA] text-base md:text-lg font-bold mb-3">
                OUR FACILITIES
              </h3>
              <h2 className="text-white text-xl md:text-2xl lg:text-[28px] font-bold mb-4 leading-tight">
                Where Comfort Meets High Performance Cricket Training.
              </h2>
              <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                Built to support every player's growth with world-class spaces designed for training, recovery, and performance.
              </p>
            </div>

            {/* Facilities Grid - 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1">
              {facilities.map((facility) => (
                <div 
                  key={facility.id} 
                  className="bg-gradient-to-r from-[#020C24] to-[#021F3A] rounded-lg p-4 md:p-5 border border-white/10 backdrop-blur-sm flex flex-col"
                >
                  {/* Emoji Icon with Circle Background */}
                  <div className="flex flex-col items-start mb-3">
                    {/* Black Circle Container */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-2">
                      {/* Red Circle Background for Emoji */}
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#AE111C] rounded-full flex items-center justify-center">
                        <span className="text-base md:text-lg">{facility.icon}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white text-base md:text-lg font-semibold mb-2">
                      {facility.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}