import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  backgroundImage: string;      // main hero background
  title: string;                // main title (full text)
  highlight?: string;           // word to highlight in different color
  subtitle: string;             // subtitle text
  ribbonImage: string;          // bottom ribbon PNG
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  highlight,
  subtitle,
  ribbonImage,
}) => {
  // Split title for highlight
  const titleParts = title.split(highlight ?? "");

  return (
    <section className="relative w-full h-[80vh] pb-[70px] flex items-center justify-center overflow-visible bg-[#0B0B0D]">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-100"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* Text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl text-white drop-shadow-lg">
          {titleParts[0]}

          {highlight && (
            <span className="text-red-500">
              {highlight}
            </span>
          )}

          {titleParts[1]}
          
        </h1>

        <p className="mt-4 text-lg text-[#1E84CA] opacity-80 md:text-xl">
          {subtitle}
        </p>
      </div>

      {/* Bottom Ribbon (PNG) */}
      <div className="absolute bottom-[-70px] left-0 w-full pointer-events-none">
        <Image
          src={ribbonImage}
          alt="Bottom Ribbon"
          width={1920}
          height={240}
          className="w-full h-auto object-cover"
          style={{
            transform: "translateY(0%)",
            filter: "drop-shadow(0px -2px 8px rgba(0,0,0,0.3))",
          }}
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};