"use client";

import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white font-poppins pt-24 pb-10 px-6 md:px-20 lg:px-32">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left Logo + Text */}
        <div>
          <Image
            src="/images/freedemlogo.png"
            alt="Freedem Logo"
            width={120}
            height={120}
            className="mb-6"
          />
          

          <p className="text-[17px] leading-relaxed text-gray-300 max-w-xs">
            Where passion meets discipline, and every player is guided toward
            cricketing excellence.
          </p>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-[26px] font-semibold mb-6">Programs</h3>

          <ul className="space-y-4 text-gray-300">
            {[
              "Skill Boost",
              "Team Drill",
              "Match Prep",
              "Youth Camp",
              "Pro Clinic",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-blue-400 text-xl">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-[26px] font-semibold mb-6">Support</h3>

          <ul className="space-y-4 text-gray-300">
            {[
              "Membership Assistance",
              "Ticketing Help",
              "Merchandise Support",
              "Match Information",
              "Technical Support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-blue-400 text-xl">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials + Contact */}
        <div className="flex flex-col gap-6">

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <FaFacebookF className="text-[#1DA1F2] bg-white/5 p-3 w-12 h-12 rounded-md cursor-pointer" />
            <FaInstagram className="text-[#1DA1F2] bg-white/5 p-3 w-12 h-12 rounded-md cursor-pointer" />
            <FaTiktok className="text-[#1DA1F2] bg-white/5 p-3 w-12 h-12 rounded-md cursor-pointer" />
            <FaYoutube className="text-[#1DA1F2] bg-white/5 p-3 w-12 h-12 rounded-md cursor-pointer" />
          </div>

          {/* Contact Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-4 rounded-full flex items-center justify-center">
              <FaPhoneAlt className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Need more help?</p>
              <p className="text-blue-400 font-semibold">(971) 58 208 6656</p>
            </div>
          </div>

          {/* Contact Email */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-4 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Email Support</p>
              <p className="text-blue-400 font-semibold">
                freedem.academy@gmail.com
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-800 mt-16 mb-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <p>
          Copyright © 2025 Freedem Cricket Academy, All rights reserved. Powered
          by Alchemy.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}
