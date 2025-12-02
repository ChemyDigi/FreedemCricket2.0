"use client";

import Image from "next/image";
import Link from "next/link";
import blogData from "@/app/data/blogData.json";

export default function BlogCard() {
  return (
    <section className="py-32  bg-[#070513]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {blogData.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`} // links to slug page
            className="bg-[#202322] rounded-xl overflow-hidden shadow-lg border border-[#1e1e2d] flex flex-col cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              {/* Tag */}
              <span className="absolute top-3 right-3 text-xs bg-red-600 text-white px-3 py-1 rounded-full font-semibold">
                {post.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 min-h-[180px]">
              <h3 className="text-white text-lg font-semibold mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {post.description}
              </p>
            </div>

            {/* Footer */}
            <div className="text-[#727272] text-xs flex items-center gap-2 px-5 py-3 border-t border-[#727272] h-12">
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
