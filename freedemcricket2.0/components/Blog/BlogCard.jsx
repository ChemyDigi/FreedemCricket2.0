"use client";

import Image from "next/image";
import blogData from "@/app/data/blogData.json";

export default function BlogCard() {
  return (
    <section className="py-14 bg-[#070513]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {blogData.map((post) => (
          <div
            key={post.id}
            className="bg-[#202322] rounded-xl overflow-hidden shadow-lg border border-[#1e1e2d]"
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />

              {/* Tag Badge */}
              <span className="absolute top-3 right-3 text-xs bg-red-600 text-white px-3 py-1 rounded-full font-semibold">
                {post.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-white text-lg font-semibold mb-2 leading-snug">
                {post.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {post.description}
              </p>

              {/* Footer */}
              <div className="text-[#727272] text-xs flex items-center gap-2 pt-3 border-t border-[#727272]">
                <span>{post.date}</span>
                <span>•</span>
                <span>Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
