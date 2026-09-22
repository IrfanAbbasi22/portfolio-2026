import type { BlogPost } from "@/data/blogPosts";
import BlogCard from "./BlogCard";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-16">
      <div className="bg-navy text-cream rounded-[2.5rem] py-14 px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="font-label-eyebrow text-label-eyebrow tracking-[0.3em] text-cream/60 uppercase mb-2">
            KEEP READING
          </span>
          <h2 className="font-headline-display text-cream text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase">
            MORE ESSAYS
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
