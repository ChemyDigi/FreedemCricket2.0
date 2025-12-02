"use client";
import { FaShieldAlt, FaTrophy, FaStar, FaHeart, FaArrowRight } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const benefits = [
  {
    id: 1,
    icon: FaShieldAlt,
    title: "Gear for Every Cricket Fan",
    description: "Premium quality equipment and apparel designed for passionate cricketers",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: 2,
    icon: FaTrophy,
    title: "Competitive Excellence",
    description: "Join tournaments and leagues to showcase your talent",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    id: 3,
    icon: FaStar,
    title: "Freedom Cricket Academy",
    description: "Professional coaching and training programs",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    id: 4,
    icon: FaHeart,
    title: "Community First",
    description: "Be part of a vibrant cricket-loving community",
    color: "text-red-600",
    bgColor: "bg-red-100"
  }
];

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
              backgroundImage: `url('/images/faq_images/hero.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#1a1a1a',
            }}
          >
          </div>
        </div>

        {/* Grid Container */}
        <div className="relative z-10 max-w-7xl mx-auto h-full min-h-[650px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            
            {/* Left Grid - Text Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                Ready to Wear Your Team Colors?
              </h2>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1E84CA]">
                Join Us Today!
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Step onto the pitch with pride and become part of a cricketing family that
                  values teamwork, discipline, and passion for the game.
                  Whether you're an aspiring young player or an experienced cricketer looking to elevate your
                  skills, our club provides world-class coaching, structural training
                  programs, and a supportive environment to help you shine.
                  With modern facilities, experienced coaches, and a vibrant cricket community, this is
                  your chance to grow, compete, and represent your club with confidence.
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

                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Freedom Cricket</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to embrace your cricket passion
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.id}
                  className="group p-8 rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    
                    {/* Icon */}
                    <div className={`${benefit.bgColor} p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`text-3xl ${benefit.color}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {benefit.description}
                    </p>

                    {/* Learn More Link */}
                    <a 
                      href="#" 
                      className="text-red-600 font-medium inline-flex items-center gap-2 group/link hover:text-red-700"
                    >
                      Learn more
                      <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
              Visit: FreedomCricketAcademy.com
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Your journey to cricket excellence starts here
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}