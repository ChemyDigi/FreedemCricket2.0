"use client";


export default function HeroSection() {
  return (
    <section className="relative py-16 px-4 text-white overflow-hidden min-h-[650px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* Background image container */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/faq_images/hero.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#1a1a1a', // Fallback color
          }}
        >
          {/* Optional dark overlay - uncomment if needed */}
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>
      </div>

      {/* Content container - centered vertically and horizontally */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* FAQ Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-4 tracking-tight">
            <span className="text-white">FA</span>
            <span className="text-[#A5121C]">Qs</span>
          </h1>
          
          {/* Tagline */}
          <div className="inline-block">
            <p className="text-xl md:text-2xl font-medium text-[#1E84CA]">
              -Clear Answers, No Extra Time Needed-
            </p>
          </div>

          {/* Optional decorative line */}
          {/* <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-[#1E84CA]"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}