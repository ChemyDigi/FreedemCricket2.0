"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Freedom Cricket Academy Program",
      answer: "Far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast. Far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast."
    },
    {
      question: "How can I join the cricket club?",
      answer: "For far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast Far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast Far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast"
    },
    {
      question: "What age groups can participate here?",
      answer: "Far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast"
    },
    {
      question: "How do I register for training programs?",
      answer: "Far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast"
    },
    {
      question: "How can I buy official club merchandise?",
      answer: "Official merchandise is available at our club store during match days, or through our online store with nationwide delivery options."
    },
   
    {
      question: "Are there separate sessions for bowlers?",
      answer: "Yes, we have specialized bowling sessions every Tuesday and Thursday evening focusing on technique, speed, accuracy, and injury prevention."
    },
    {
      question: "Where to see the match schedule?",
      answer: "The match schedule is prominently displayed on our website homepage and also available in PDF format for download."
    },
    {
      question: "Can I book nets for practice sessions?",
      answer: "Yes, nets can be booked through our online booking system. Members get priority booking with discounted rates."
    },
    {
      question: "Does the club play in tournaments?",
      answer: "We participate in local, state, and national level tournaments throughout the year. Our teams compete in multiple leagues and cup competitions."
    }
  ];

  // Split FAQ data into two columns - 5 items each
  const leftColumnFAQs = faqData.slice(0, 5);
  const rightColumnFAQs = faqData.slice(5, 10);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#070513]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-300">
            Quick Answers for Every Cricket Fan
          </p>
        </div>

        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - 5 FAQ items */}
          <div className="space-y-4">
            {leftColumnFAQs.map((faq, index) => {
              const faqIndex = index; // Since we're using slice, index matches original
              const isOpen = openIndex === faqIndex;
              
              return (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: '#202322'
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(faqIndex)}
                    className="w-full p-6 text-left flex justify-between items-center transition-colors duration-200 hover:bg-[#2a2c2b]"
                  >
                    <span className={`font-semibold text-[20px] md:text-[24px] ${
                      isOpen ? 'text-[#1E84CA]' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    
                    <ChevronDown 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180 text-[#1E84CA]' : 'text-white'
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-300 leading-relaxed text-[18px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - 5 FAQ Items */}
          <div className="space-y-4">
            {rightColumnFAQs.map((faq, index) => {
              const faqIndex = index + 5; // Offset by 5 for right column items
              const isOpen = openIndex === faqIndex;
              
              return (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: '#202322'
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(faqIndex)}
                    className="w-full p-6 text-left flex justify-between items-center transition-colors duration-200 hover:bg-[#2a2c2b]"
                  >
                    <span className={`font-semibold text-[20px] md:text-[24px] ${
                      isOpen ? 'text-[#1E84CA]' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    
                    <ChevronDown 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180 text-[#1E84CA]' : 'text-white'
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-300 leading-relaxed text-[18px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}