// app/contact/page.tsx
'use client';

import React from 'react';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add form submission logic here
  };

  return (
    <div 
      className="min-h-screen py-16 px-4 md:px-8 lg:px-24 flex items-center" 
      style={{ backgroundColor: '#070513' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Information */}
          <div className="space-y-10 mt-8 lg:mt-12">
            {/* Header */}
            <div>
              <h2 className="text-xl md:text-2xl font-normal text-blue-400 mb-2 tracking-tight">
                GET IN TOUCH
              </h2>
              
              <p className="text-4xl md:text-5xl font-bold text-white mb-8">
                Let&apos;s Get Connected
              </p>
            </div>

            {/* Tagline */}
            <div>
              <p className="text-lg md:text-xl text-white mb-6 leading-tight font-normal">
                BUILDING THE FUTURE FROM OUR BASE
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Head Office */}
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 mt-1">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-normal text-blue-400">Head Office</h4>
                    <p className="text-gray-300 text-base mt-2">
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 mt-1">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-normal text-blue-400">Let&apos;s Talk</h4>
                    <p className="text-gray-300 text-base mt-2">
                      +971 58 208 6656
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 mt-1">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-normal text-blue-400">Email Support</h4>
                    <p className="text-gray-300 text-base mt-2">
                      freedem.academy@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form - Moved up by 2 inches */}
          <div className="relative">
            <div 
              className="p-8 md:p-10 absolute left-0 right-0" 
              style={{ 
                backgroundColor: '#202322', 
                borderRadius: '8px',
                marginLeft: '-1in',
                width: 'calc(100% + 1in)',
                marginTop: '-0.7in', // Moved up by 0.7 inches
              }}
            >
              <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Send us a message
                </h3>
                
                <p className="text-lg md:text-xl font-normal text-white mb-3">
                  BUILDING THE FUTURE FROM OUR BASE
                </p>
                
                <div className="h-px w-full" style={{ backgroundColor: '#3E4342' }}></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-gray-300 text-base font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      style={{ 
                        backgroundColor: '#3E4342', 
                        borderColor: '#4A4F4E',
                        borderRadius: '6px'
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-300 text-base font-medium">Phone</label>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      style={{ 
                        backgroundColor: '#3E4342', 
                        borderColor: '#4A4F4E',
                        borderRadius: '6px'
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-gray-300 text-base font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      style={{ 
                        backgroundColor: '#3E4342', 
                        borderColor: '#4A4F4E',
                        borderRadius: '6px'
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-300 text-base font-medium">Subject:</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      style={{ 
                        backgroundColor: '#3E4342', 
                        borderColor: '#4A4F4E',
                        borderRadius: '6px'
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 text-base font-medium">Message</label>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                    style={{ 
                      backgroundColor: '#3E4342', 
                      borderColor: '#4A4F4E',
                      borderRadius: '6px'
                    }}
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-10 py-4 text-white font-bold text-lg rounded transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3"
                    style={{ 
                      backgroundColor: '#AE111C',
                      borderRadius: '6px'
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}