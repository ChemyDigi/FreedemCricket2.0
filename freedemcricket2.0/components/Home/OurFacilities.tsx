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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Side - Full Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/images/home/ourfacility.png" // You'll need to add this image
              alt="Cricket Facilities"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col">
            {/* Header Section - Left Aligned */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-[#1E84CA] text-lg md:text-xl font-bold mb-3 md:mb-4">
                OUR FACILITIES
              </h3>
              <h2 className="text-white text-2xl md:text-3xl lg:text-[36px] font-bold mb-4 md:mb-6 leading-tight">
                Where Comfort Meets High Performance Cricket Training.
              </h2>
              <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                Built to support every player's growth with world-class spaces designed for training, recovery, and performance.
              </p>
            </div>

            {/* Facilities Grid - 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {facilities.map((facility) => (
                <div 
                  key={facility.id} 
                  className="bg-gradient-to-r from-[#020C24] to-[#021F3A] rounded-xl p-6 border border-white/10 backdrop-blur-sm flex flex-col h-full"
                >
                  {/* Emoji Icon with Circle Background */}
                  <div className="flex flex-col items-start mb-4">
                    {/* Black Circle Container */}
                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-3">
                      {/* Red Circle Background for Emoji */}
                      <div className="w-10 h-10 bg-[#AE111C] rounded-full flex items-center justify-center">
                        <span className="text-xl">{facility.icon}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                      {facility.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
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