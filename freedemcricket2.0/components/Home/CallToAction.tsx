import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="w-full relative">
      {/* Full Image Background */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        <Image
          src="/images/home/call.png" // Add your background image
          alt="Cricket Excellence Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 "></div>
        
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-2xl md:text-4xl lg:text-[48px] font-bold mb-6 leading-tight">
              Start Your Journey to Cricket Excellence with 
              <span className="text-[#AE111C]"> Freedom Cricket Academy</span>
            </h2>
            
            <p className="text-white text-base md:text-xl font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
              Unlock your full potential with expert coaching, structured training, and a supportive environment built to elevate your cricketing skills to the next level.
            </p>
            
            <button className="bg-[#AE111C] text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-lg hover:bg-[#8d0e17] transition-all duration-300">
              Join Membership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}