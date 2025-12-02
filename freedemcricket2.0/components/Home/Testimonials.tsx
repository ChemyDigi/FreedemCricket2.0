"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The training here transformed my game completely. The coaches are world-class and the facilities are excellent.",
      name: "Rahul Sharma",
      role: "Professional Cricketer",
      avatar: "/images/home/person-1.png"
    },
    {
      id: 2,
      quote: "My son's confidence and skills have grown tremendously since joining. The environment is perfect for young talent.",
      name: "Priya Patel",
      role: "Parent of U-14 Player",
      avatar: "/images/home/person-2.png"
    },
    {
      id: 3,
      quote: "The academy's focus on both skill development and character building is what sets it apart from others.",
      name: "Arjun Mehta",
      role: "Team Captain",
      avatar: "/images/home/person-3.png"
    },
    {
      id: 4,
      quote: "Best decision I made for my cricket career. The structured programs and expert guidance are unmatched.",
      name: "Suresh Kumar",
      role: "Opening Batsman",
      avatar: "/images/home/person-1.png"
    },
    {
      id: 5,
      quote: "The academy's holistic approach covers every aspect of cricket - technique, fitness, and mental strength.",
      name: "Deepak Singh",
      role: "Bowling Coach",
      avatar: "/images/home/person-2.png"
    },
    {
      id: 6,
      quote: "My daughter has found her passion for cricket here. The supportive environment is perfect for young athletes.",
      name: "Neha Gupta",
      role: "Parent",
      avatar: "/images/home/person-3.png"
    },
    {
      id: 7,
      quote: "From local matches to national tournaments, the academy prepares you for every level of competition.",
      name: "Vikram Roy",
      role: "All-Rounder",
      avatar: "/images/home/person-1.png"
    },
    {
      id: 8,
      quote: "The professional training methodology combined with personal attention makes this academy exceptional.",
      name: "Amit Joshi",
      role: "Fielding Coach",
      avatar: "/images/home/person-2.png"
    }
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    currentIndex * testimonialsPerPage + testimonialsPerPage
  );

  return (
    <div className="w-full bg-[#070513] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column - Image */}
          <div className="relative h-[100px] md:h-[100px] lg:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/home/circle.png"
              alt="Testimonials"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Text and Testimonials */}
          <div className="lg:col-span-2 flex flex-col">
            
            {/* Text Section - Aligned to half of image */}
            <div className="mb-12">
              <div className="text-left">
                <h3 className="text-[#1E84CA] text-lg md:text-xl font-bold mb-3">
                  TESTIMONIALS
                </h3>
                <h2 className="text-white text-2xl md:text-3xl lg:text-[36px] font-bold mb-4 leading-tight">
                  Celebrating Success Through Their Words.
                </h2>
                <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                  Hear from players, parents, and professionals who have experienced real growth and transformation through our cricket academy.
                </p>
              </div>
            </div>

            {/* Testimonials Carousel */}
            <div className="relative flex-1">
              
              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={prevSlide}
                  className="text-white hover:text-[#AE111C] transition-colors duration-300"
                  aria-label="Previous testimonials"
                >
                  <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 19l-7-7 7-7" 
                    />
                  </svg>
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentIndex 
                          ? 'bg-[#AE111C]' 
                          : 'bg-white/30'
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="text-white hover:text-[#AE111C] transition-colors duration-300"
                  aria-label="Next testimonials"
                >
                  <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentTestimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="bg-gradient-to-r from-[#020C24] to-[#021F3A] rounded-xl p-6 border border-white/10 backdrop-blur-sm flex flex-col"
                  >
                    {/* Quote */}
                    <div className="flex-1 mb-6">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Person Info */}
                    <div className="flex items-center">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Name and Role */}
                      <div>
                        <h4 className="text-white font-semibold text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#AE111C] text-sm">
                            {testimonial.role}
                            </p>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}