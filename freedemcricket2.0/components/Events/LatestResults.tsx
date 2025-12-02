import React from "react";


export const LatestResults: React.FC = () => {
return (
<section className="py-20 bg-[#101014]">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-10 text-center">Latest Match Results</h2>



<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#1A1A22] p-6 rounded-xl shadow">
<h3 className="text-xl font-semibold mb-2">Team A vs Team B</h3>
<p className="text-gray-400 text-sm">Score details here...</p>

</div>


<div className="bg-[#1A1A22] p-6 rounded-xl shadow">
<h3 className="text-xl font-semibold mb-2">Team C vs Team D</h3>
<p className="text-gray-400 text-sm">Score details here...</p>

</div>
</div>
</div>
</section>
);
};