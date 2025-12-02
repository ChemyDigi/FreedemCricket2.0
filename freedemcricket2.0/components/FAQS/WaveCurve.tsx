"use client";

import React from "react";

const WaveCurve: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 140 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[200px]"
        preserveAspectRatio="none"
      >

        {/* BLUE CURVE – up/down on both sides */}
        <path
          d="
            M0 130
            C 160 110, 320 190, 480 150
            C 640 110, 800 190, 960 150
            C 1120 110, 1280 190, 1440 150
            L 1440 300
            L 0 300
            Z
          "
          fill="#1E84CA"
        />

        {/* RED CURVE – same shape but slightly above */}
        <path
          d="
            M0 130
            C 160  90, 320 170, 480 130
            C 640  90, 800 170, 960 130
            C 1120  90, 1280 170, 1440 130
            L 1440 300
            L 0 300
            Z
          "
          fill="#B0171B"
        />

      </svg>
    </div>
  );
};

export default WaveCurve;
