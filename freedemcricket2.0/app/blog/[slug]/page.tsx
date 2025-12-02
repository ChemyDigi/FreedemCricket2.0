import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogPosts from "@/app/data/blogData.json"; // import the blog data
import { ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  date: string;
  author?: string;
  readTime?: string;
  fullContent: string;
  midImage?: string;
  contentAfterImage?: string;
}

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  date?: string;
  author?: string;
  readTime?: string;
}

// ✅ Hero Section Component
const HeroSection = ({
  backgroundImage = "/images/blog/blog1.jpg",
  title = "Voice from the field",
  date,
  author,
  readTime,
}: HeroSectionProps) => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-blue-900/60" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/blog"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white text-white transition hover:scale-110"
        >
          <ArrowLeft size={22} />
        </Link>
      </div>

      {/* Hero Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-center pb-16">
        <div className="text-left space-y-3 sm:space-y-5">
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-2">
            {title}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-white/80 text-sm">
            {date && <span>{date}</span>}
            {author && (
              <>
                <span className="hidden sm:block">●</span>
                <span>By {author}</span>
              </>
            )}
            {readTime && (
              <>
                <span className="hidden sm:block">●</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Generate static params for pre-rendering
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

// ✅ Slug Page Component
interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug) as BlogPost | undefined;

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title={post.title}
        backgroundImage="/images/blog1.jpg"
        date={post.date}
        author={post.author}
        readTime={post.readTime}
      />

      {/* Featured Image */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="-mt-32 mb-12 relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={1600}
              height={600}
              className="w-full h-64 sm:h-72 md:h-96 lg:h-[600px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <article className="leading-relaxed">
          <p className="text-gray-600 text-[16px] sm:text-[17px] leading-loose mb-8 font-medium text-justify">
            {post.description}
          </p>

          <div
            className="text-gray-700 leading-loose text-[15px] sm:text-[16px] text-justify tracking-wide space-y-6 blog-content"
            dangerouslySetInnerHTML={{ __html: post.fullContent }}
          />

          {/* Mid Article Image */}
          {post.midImage && (
            <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.midImage}
                alt={`${post.title} - additional visual`}
                width={1200}
                height={600}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Content After Mid Image */}
          {post.contentAfterImage && (
            <div
              className="text-gray-700 leading-loose text-[15px] sm:text-[16px] text-justify tracking-wide space-y-6 blog-content"
              dangerouslySetInnerHTML={{ __html: post.contentAfterImage }}
            />
          )}
        </article>
      </section>
    </div>
  );
}

