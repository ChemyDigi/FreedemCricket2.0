"use client";

import { useState } from "react";

export default function CricketAcademyProgram() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      question: "How can I join the cricket club?",
      answer: "For far away, behind the word mountains, far from the countries Volcillo and Constantinia, there live the blind texts. Separated they live in Bookmontagrove right at the coast Far far away, behind the word mountains, far from the countries Volcillo and Constantinia, there live the blind texts. Separated they live in Bookmontagrove right at the coast Far far away, behind the word mountains, far from the countries Volcillo and Constantinia, there live the blind texts. Separated they live in Bookmontagrove right at the coast"
    },
    {
      id: 2,
      question: "Where can I buy match-day tickets?",
      answer: "Far far away, behind the word mountains, far from the countries Volcillo and Constantinia, there live the blind texts. Separated they live in Bookmontagrove right at the coast"
    },
    {
      id: 3,
      question: "What age groups can participate here?",
      answer: "Far far away, behind the word mountains, far from the countries Volcillo and Constantinia, there live the blind texts. Separated they live in Bookmontagrove right at the coast"
    },
    {
      id: 4,
      question: "How do I register for training programs?",
      answer: "Far far away, behind the word mountains, far from the countries Volcillo and Constantinia, there live the blind texts. Separated they live in Bookmontagrove right at the coast"
    },
    {
      id: 5,
      question: "Freedom Cricket Academy Program Now Open",
      answer: "Far far away, behind the word mountains, far from the countries"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#070513]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - IMAGE WITH TEXT OVERLAY */}
          <div className="relative h-full">
            {/* Image container with text overlay */}
            <div className="relative h-full min-h-[100px] rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/images/faq_images/second.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* White text overlay - positioned like in your image */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="space-y-4">
                  <h2 className="text-white text-[32px] md:text-[36px] font-semibold font-poppins leading-tight">
                    Freedom Cricket Academy<br />Program Now Open
                  </h2>
                  
                  <p className="text-white text-[18px] font-poppins leading-relaxed max-w-xl">
                    For far away, behind the word mountains, far from the countries Volcillo and Constantinia, there live the blind texts. Separated they live in Bookmontagrove right at the coast Far far away, behind the word mountains, far from the countries Volcillo and Constantinia, there live the blind texts. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Accordion FAQ - SAME HEIGHT */}
          <div className="h-full min-h-[700px]">
            <div className="space-y-4 h-full">
              {faqItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`rounded-lg overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'shadow-lg' : ''
                  }`}
                  style={{
                    backgroundColor: '#202322'
                  }}
                >
                  {/* Question with arrow */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex justify-between items-center transition-colors duration-200 font-poppins hover:bg-[#2a2c2b]"
                    style={{
                      backgroundColor: openIndex === index ? '#202322' : '#202322'
                    }}
                  >
                    <span className={`font-semibold text-[24px] ${
                      openIndex === index ? 'text-[#1E84CA]' : 'text-white'
                    }`}>
                      {item.question}
                    </span>
                    
                    {/* Arrow icon */}
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180 text-[#1E84CA]' : 'text-white'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </button>
                  
                  {/* Answer - expands when clicked */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-300 leading-relaxed text-[18px] font-poppins">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}