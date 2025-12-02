"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
}

const items: GalleryItem[] = [
  { src: "/images/Gallery/1.jpg", alt: "image" },
  { src: "/images/Gallery/2.jpg", alt: "image" },
  { src: "/images/Gallery/3.jpg", alt: "image" },
  { src: "/images/Gallery/4.jpg", alt: "image" },
  { src: "/images/Gallery/5.jpg", alt: "image" },
  { src: "/images/Gallery/6.jpg", alt: "image" },
  { src: "/images/Gallery/7.jpg", alt: "image" },
  { src: "/images/Gallery/8.jpg", alt: "image" },
  { src: "/images/Gallery/9.jpg", alt: "image" },
  { src: "/images/Gallery/10.jpg", alt: "image" },
  { src: "/images/Gallery/11.jpg", alt: "image" },
  { src: "/images/Gallery/12.jpg", alt: "image" },
  { src: "/images/Gallery/13.jpg", alt: "image" },
  { src: "/images/Gallery/14.jpg", alt: "image" },
  { src: "/images/Gallery/15.jpg", alt: "image" },
  { src: "/images/Gallery/16.jpg", alt: "image" },
  { src: "/images/Gallery/17.jpg", alt: "image" },
  { src: "/images/Gallery/18.jpg", alt: "image" },
  { src: "/images/Gallery/19.jpg", alt: "image" },
  { src: "/images/Gallery/20.jpg", alt: "image" },
  { src: "/images/Gallery/21.jpg", alt: "image" },
  { src: "/images/Gallery/22.jpg", alt: "image" },
  { src: "/images/Gallery/23.jpg", alt: "image" },
  { src: "/images/Gallery/24.jpg", alt: "image" },
  { src: "/images/Gallery/25.jpg", alt: "image" },
  { src: "/images/Gallery/26.jpg", alt: "image" },
  { src: "/images/Gallery/27.jpg", alt: "image" },
];

export default function MasonryGallery() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  const handleNext = () => {
    if (expandedIndex !== null) {
      setExpandedIndex((expandedIndex + 1) % items.length);
    }
  };

  const handlePrev = () => {
    if (expandedIndex !== null) {
      setExpandedIndex((expandedIndex - 1 + items.length) % items.length);
    }
  };

  return (
    <section className="w-full bg-[#070513] px-6 md:px-12 py-20">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden group cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-all duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-300 hidden sm:block" />
          </div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      {expandedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-50"
            onClick={handleClose}
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-6 text-white text-4xl hover:text-gray-300 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[expandedIndex].src}
              alt={items[expandedIndex].alt}
              width={1920}
              height={1080}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-6 text-white text-4xl hover:text-gray-300 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            ›
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black">
            {expandedIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </section>
  );
}