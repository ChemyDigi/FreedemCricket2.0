import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero.png" // You'll need to add this image to your public folder
          alt="Cricket Field Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>



      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-[70px] font-semibold leading-tight md:leading-none mb-6">
          <span className="text-white">Chasing </span>
          <span className="text-[#AE111C]">Dreams,</span>
          <br />
          <span className="text-white">Creating Champions</span>
        </h1>

        {/* Subheading */}
        <p className="text-[14px] md:text-[28px] font-medium text-[#1E84CA] mb-8 max-w-3xl">
          —We believe cricket is more than just a game—
        </p>

        {/* Paragraph */}
        <p className="text-lg md:text-2xl font-light text-white/90 mb-12 max-w-4xl leading-relaxed">
          it's a journey of discipline, determination, and rising stronger with every innings. 
          Our club is dedicated to building players' skills, mindset, and teamwork, while 
          inspiring them to achieve excellence both on and off the pitch. With every 
          practice session and every match, we shape confident athletes ready to take on any challenge.
        </p>

        {/* Button */}
        <button className="bg-[#AE111C] text-white text-lg md:text-xl font-semibold px-10 py-4 rounded-[10px] hover:bg-[#8d0e17] transition-all duration-300 transform hover:scale-105">
        JOIN MEMBERSHIP
        </button>

      </div>
    </div>
  );
}