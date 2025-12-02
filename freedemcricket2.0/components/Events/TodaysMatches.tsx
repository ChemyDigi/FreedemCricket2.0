import React from "react";


export const TodaysMatches: React.FC = () => {
return (
<section className="py-16 bg-[#0F0F12]">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
<div className="bg-[#1A1A22] p-6 rounded-xl shadow">
<h3 className="text-xl font-bold mb-3">Today&apos;s Match Info</h3>
<p className="text-gray-400 text-sm">Date, time, ground and all details.</p>
</div>


<div className="bg-[#1A1A22] p-6 rounded-xl shadow">
<h3 className="text-xl font-bold mb-3">Future Matches</h3>
<p className="text-gray-400 text-sm">Upcoming fixtures and notifications.</p>
</div>
</div>
</section>
);
};