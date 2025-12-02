// components/MapSection.tsx
'use client';


const MapSection = () => {
  // Direct Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Freedom+Cricket+Academy+Dubai&travelmode=driving`;

  return (
    <section className="py-16 px-4 md:px-8 lg:px-24" style={{ backgroundColor: '#070513' }}>
      <div className="max-w-7xl mx-auto">
        {/* Map - Full width */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 mb-8">
          {/* Google Map Embed */}
          <div className="h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6511001291!2d54.94728959534871!3d25.075759466927074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s&q=Freedom+Cricket+Academy+Dubai"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Freedom Cricket Academy Location"
              className="w-full h-full min-h-[500px]"
            ></iframe>
          </div>
        </div>

        {/* Get Directions Button - Centered below map */}
        <div className="text-center">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            style={{ backgroundColor: '#AE111C' }} // Red color
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;