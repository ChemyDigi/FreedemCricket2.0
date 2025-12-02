"use client";

import { useState } from 'react';

export default function QuestionsSection() {
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

// FAQ Component
export function FAQSection() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const faqData = [
    {
      question: "Freedom Cricket Academy Program",
      answer: "Far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast. Far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast far far away, behind the word mountains, far from the countries Vokalia and Consonomia, there live the blind texts. Separated they live in Bookmontagrove right at the coast."
    },
    {
      question: "How can I join the cricket club?",
      answer: "You can join by filling out our online registration form or visiting our training ground during open enrollment days. New players will go through a basic assessment to determine their skill level and suitable age group."
    },
    {
      question: "What age groups can participate here?",
      answer: "We offer programs for age groups 6-8, 9-11, 12-14, 15-17, and 18+. Each age group has tailored training programs suitable for their development stage."
    },
    {
      question: "How do I register for training programs?",
      answer: "You can register through our online portal on our website, or visit our office during working hours. Online registration requires creating an account and selecting your preferred program."
    },
    {
      question: "Where can I view the match schedule?",
      answer: "Match schedules are available on our website's fixtures page, updated monthly. You can also subscribe to our newsletter for weekly schedule updates."
    },
    {
      question: "How can I buy official club merchandise?",
      answer: "Official merchandise is available at our club store during match days, or through our online store with nationwide delivery options."
    },
    {
      question: "What facilities does the cricket club offer for players?",
      answer: "We offer professional cricket pitches, practice nets, fitness center, physiotherapy room, locker rooms, and a players' lounge with video analysis facilities."
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
    },
    {
      question: "How can parents enroll young players?",
      answer: "Parents can enroll young players by completing the junior registration form available online or at our office. We require medical information and parental consent for under-18 players."
    },
    {
      question: "Can I volunteer at club events?",
      answer: "Yes, we welcome volunteers! Please fill out the volunteer application form on our website or contact our events coordinator for upcoming opportunities."
    }
  ];

  const leftColumnQuestions = [
    "How can I join the cricket club?",
    "How do I register for training programs?",
    "How can I buy official club merchandise?",
    "Are there separate sessions for bowlers?",
    "Can I book nets for practice sessions?",
    "How can parents enroll young players?"
  ];

  const rightColumnQuestions = [
    "What age groups can participate here?",
    "Where can I view the match schedule?",
    "What facilities does the cricket club offer for players?",
    "Where to see the match schedule?",
    "Does the club play in tournaments?",
    "Can I volunteer at club events?"
  ];

  // Find the index of a question in faqData
  const findQuestionIndex = (questionText: string) => {
    return faqData.findIndex(item => item.question === questionText);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Quick Answers for Every Cricket Fan
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Questions Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leftColumnQuestions.map((question, index) => {
                const faqIndex = findQuestionIndex(question);
                const isSelected = selectedQuestion === faqIndex;
                
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedQuestion(faqIndex)}
                    className={`p-6 text-left rounded-lg border transition-all duration-300 hover:shadow-lg ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'border-gray-200 bg-gray-50 hover:border-blue-300'
                    }`}
                  >
                    <h3 className={`text-lg font-semibold ${
                      isSelected ? 'text-blue-600' : 'text-gray-800'
                    }`}>
                      {question}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Question Details */}
          <div className="lg:w-1/2">
            <div className="sticky top-8 bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8">
              {selectedQuestion >= 0 && (
                <>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                    {faqData[selectedQuestion].question}
                  </h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {faqData[selectedQuestion].answer}
                    </p>
                  </div>
                  
                  {/* Divider */}
                  <div className="my-8 border-t border-gray-200"></div>
                  
                  {/* Right Column Questions List */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Other Common Questions:
                    </h4>
                    <div className="space-y-3">
                      {rightColumnQuestions.map((question, index) => {
                        const faqIndex = findQuestionIndex(question);
                        const isSelected = selectedQuestion === faqIndex;
                        
                        return (
                          <button
                            key={index}
                            onClick={() => setSelectedQuestion(faqIndex)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                              isSelected 
                                ? 'bg-blue-100 border-l-4 border-blue-500' 
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            <span className={`font-medium ${
                              isSelected ? 'text-blue-600' : 'text-gray-700'
                            }`}>
                              {question}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need More Help?
          </h3>
          <p className="text-gray-700 mb-4">
            If you couldn't find the answer to your question, feel free to contact our support team.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Visit Our Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

