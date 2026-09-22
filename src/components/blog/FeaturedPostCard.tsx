import MagneticLink from "@/components/ui/MagneticLink";
import type { BlogPost } from "@/data/blogPosts";

export default function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="bg-cream text-navy rounded-2xl p-6 sm:p-10 transition-transform duration-300 hover:-translate-y-1 group">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-4 h-[2px] bg-coral"></span>
            <span className="font-label-eyebrow text-label-eyebrow text-navy/70 tracking-[0.2em] uppercase">
              {post.eyebrow}
            </span>
          </div>
          <span className="bg-navy text-cream font-label-pill text-label-pill px-3 py-1 rounded-full uppercase tracking-widest">
            {post.date} • {post.readingTime}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-headline-display text-navy text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95] group-hover:text-teal transition-colors">
              {post.title}
            </h3>
            <p className="font-body-md text-navy/80 text-sm sm:text-base leading-relaxed">
              {post.excerpt}
            </p>
            <div className="pt-4 flex items-center gap-4">
              <MagneticLink
                strength={18}
                className="inline-block font-label-interactive text-label-interactive uppercase tracking-wider text-navy group-hover:text-teal transition-colors"
                textClassName="inline-flex items-center gap-2"
                href={`/blog/${post.slug}`}
              >
                <span>Read Article</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </MagneticLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden bg-navy h-64 sm:h-72 w-full relative">
              <img
                className="w-full h-full object-cover mix-blend-luminosity opacity-85 group-hover:scale-105 transition-transform duration-500"
                alt={post.imageAlt}
                src={post.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={
                      i === 0
                        ? "font-label-pill text-label-pill px-2.5 py-1 rounded-full bg-cream/90 text-navy uppercase tracking-wider"
                        : "font-label-pill text-label-pill px-2.5 py-1 rounded-full bg-teal text-cream uppercase tracking-wider"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
