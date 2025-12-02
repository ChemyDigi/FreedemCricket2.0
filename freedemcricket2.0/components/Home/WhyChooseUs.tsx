import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Professional Coaching",
      description: "Expert coaches focused on refining batting, bowling, and fielding techniques while building smart match strategies for every player.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Strong Community",
      description: "A supportive cricketing family where teamwork, respect, and sportsmanship grow both on and off the pitch.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Comprehensive Programs",
      description: "Well-structured training for all skill levels from junior cricket camps to advanced professional sessions.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16v2H4zm0 6h16v2H4zm0 6h16v2H4z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Winning Culture",
      description: "Driven by discipline, passion, and a commitment to achieving success in every game, every practice, and every challenge.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#070513] py-16 md:py-24 px-4">
      {/* Top Background Image Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/home/whychoose.png"
            alt="Why Choose Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 "></div>
        </div>
        
        {/* Header Section */}
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-[#1E84CA] text-lg md:text-xl font-bold mb-3 md:mb-4">
            WHY CHOOSE US
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-white mb-4 md:mb-6 leading-tight max-w-2xl">
            Strength, Strategy, and Spirit United.
          </h2>
          <p className="text-white text-base md:text-lg font-medium leading-relaxed max-w-xl">
            Experience a cricket academy built on discipline, dedication, and a passion for excellence.
          </p>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="max-w-6xl mx-auto -mt-16 md:-mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-gradient-to-r from-[#020C24] to-[#021F3A] rounded-xl p-6 border border-white/10 backdrop-blur-sm flex flex-col h-full"
            >
              {/* Icon with Red Background and Black Circle */}
              <div className="flex flex-col items-center mb-6">
                {/* Black Circle Container */}
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  {/* Red Circle Background for Icon */}
                  <div className="w-12 h-12 bg-[#AE111C] rounded-full flex items-center justify-center">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-semibold text-center mb-4">
                  {feature.title}
                </h3>
              </div>
              
              {/* Description - Aligned to top */}
              <div className="flex-1">
                <p className="text-white/80 text-sm text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}