import type { BlogPost } from "@/data/blogPosts";
import FeaturedPostCard from "./FeaturedPostCard";
import BlogCard from "./BlogCard";
import MagneticLink from "@/components/ui/MagneticLink";

export default function EssaysSection({
  featuredPost,
  gridPosts,
}: {
  featuredPost: BlogPost;
  gridPosts: BlogPost[];
}) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-16">
      <div className="bg-navy text-cream rounded-[2.5rem] py-14 px-6 sm:px-10 lg:px-14">
        {/* Section Tag & Title */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="font-label-eyebrow text-label-eyebrow tracking-[0.3em] text-cream/60 uppercase mb-2">
            ARCHIVED &amp; FEATURED ESSAYS
          </span>
          <h2 className="font-headline-display text-cream text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase">
            ESSAYS
          </h2>
        </div>

        <FeaturedPostCard post={featuredPost} />

        {/* Connecting Node Line Decorator matching reference works layout */}
        <div className="flex justify-center my-6">
          <div className="w-px h-10 bg-cream/20"></div>
        </div>

        {/* Articles Mosaic Grid (4 Distinct Editorial Cards) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Bottom Index Link */}
        <div className="mt-14 text-center">
          <MagneticLink
            strength={18}
            className="inline-block font-label-eyebrow text-label-eyebrow uppercase tracking-[0.25em] text-cream/70 hover:text-cream transition-colors"
            href="#all"
          >
            (VIEW ALL 28 TECHNICAL ARTICLES)
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
