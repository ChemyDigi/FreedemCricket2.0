"use client";
import { FaShieldAlt, FaTrophy, FaStar, FaHeart, FaArrowRight } from "react-icons/fa";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export default function BenefitsSection() {
  return (
    <div className={`${poppins.className}`}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-white overflow-hidden min-h-[650px]">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#060416',
            }}
          >
          </div>
        </div>

        {/* Grid Container */}
        <div className="relative z-10 max-w-6xl mx-auto h-full min-h-[550px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            
            {/* Left Grid - Text Content */}
            <div className="space-y-4">
              <h4 className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                Ready to Wear Your Team Colors?
              </h4>
              <h5 className="text-3xl md:text-4xl font-medium text-[#1E84CA]">
                Join Us Today!
              </h5>
              
              <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Step onto the pitch with pride and become part of a cricketing family that
                  values teamwork, discipline, and passion for the game.
                  Whether you're an aspiring young player or an experienced cricketer looking to elevate your
                  skills, our club provides world-class coaching, structural training
                  programs, and a supportive environment to help you shine.
                  
                </p>
                <button className="bg-[#AE111C] text-white text-sm md:text-base font-semibold px-5 py-2.5 rounded-lg hover:bg-[#8d0e17] transition-all duration-300 w-full md:w-auto mt-auto">
                  CONTACT US
                </button>
              </div>
            </div>

            {/* Right Grid - Image Content */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/faq_images/right.png"
                    alt="Freedom Cricket Team"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Benefits Section with #060416 background */}
      <section className="py-20 px-4" style={{ backgroundColor: '#060416' }}>
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          
          {/* Benefits Grid */}
          

          {/* Footer CTA */}
         
        </div>
      </section>
    </div>
  );
}