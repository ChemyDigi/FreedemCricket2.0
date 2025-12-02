import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="w-full bg-[#070513] py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-[#1E84CA] text-lg md:text-xl font-bold mb-4">
              WHO WE ARE
            </h3>
            
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
              Building passion, teamwork, and champions for life.
            </h2>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Building passion, teamwork, and champions for life. We are dedicated to nurturing 
              cricket talent at all levels, providing world-class training facilities and expert 
              coaching to help players reach their full potential. Our holistic approach focuses 
              on developing not just cricketing skills but also character, discipline, and 
              leadership qualities.
            </p>
            
            <button className="bg-[#AE111C] text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-[#8d0e17] transition-all duration-300">
              LEARN MORE
            </button>
          </div>

          {/* Right Column - Image and Progress Bars */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Small Image on top left of main image */}
           <div className="absolute top-4 -left-40 z-100">
  <div className="w-100 h-100 md:w-80 md:h-80 rounded-lg flex items-left justify-left">
    <Image
      src="/images/home/2people.png"
      alt="Cricket Icon"
      width={128}
      height={128}
      className="w-100 h-100"
    />
  </div>
</div>




              {/* Main Image */}
              <div className="relative w-100 h-64 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/home/whowebg.png" // Add your main image
                  alt="Cricket Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Progress Bars Box */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-11/12 md:w-10/12 bg-[#2E3231] p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
                  We are committed to nurturing a true love for cricket
                </h3>
                
                {/* Progress Bars */}
<div className="space-y-4">
  {/* Passion for the game */}
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-white text-base font-medium">Passion for the game</span>
      <span className="text-white text-base font-medium">90%</span>
    </div>
    <div className="h-2 bg-[#4D504F] rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#AE111C] rounded-full"
        style={{ width: '90%' }}
      ></div>
    </div>
  </div>

  {/* Teamwork & Unity */}
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-white text-base font-medium">Teamwork & Unity</span>
      <span className="text-white text-base font-medium">85%</span>
    </div>
    <div className="h-2 bg-[#4D504F] rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#AE111C] rounded-full"
        style={{ width: '85%' }}
      ></div>
    </div>
  </div>

  {/* Champion Mentality */}
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-white text-base font-medium">Champion Mentality</span>
      <span className="text-white text-base font-medium">95%</span>
    </div>
    <div className="h-2 bg-[#4D504F] rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#AE111C] rounded-full"
        style={{ width: '95%' }}
      ></div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}