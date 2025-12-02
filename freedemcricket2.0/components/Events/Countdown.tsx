import React from "react";

export const Countdown: React.FC = () => {
  const labels = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    //Changed: Added mt-20 to push the countdown down below the hero ribbon
    <section className="w-full py-12 bg-[#101014] mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">Ambedkar Star Club</h2>
          <p className="text-gray-400">VS</p>
          <h2 className="text-3xl font-bold mt-2">Freedom Cricket Academy</h2>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center">
          {labels.map((label) => (
            <div key={label} className="bg-[#1A1A22] px-4 py-3 rounded-xl">
              <p className="text-3xl font-bold">00</p>
              <p className="text-sm opacity-70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
