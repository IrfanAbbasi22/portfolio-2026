import type { BlogPost } from "@/data/blogPosts";

export default function ArticleHero({ post }: { post: BlogPost }) {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-16 md:pt-24 pb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-[2px] bg-teal inline-block"></span>
        <span className="font-label-eyebrow text-label-eyebrow text-teal tracking-[0.25em] uppercase">
          {post.eyebrow}
        </span>
      </div>
      <div className="space-y-4">
        <h1 className="font-headline-display text-navy text-[34px] md:text-[52px] lg:text-[64px] tracking-tight uppercase leading-[0.95] break-words">
          {post.title}
        </h1>
        <p className="font-body-md text-navy/80 text-sm sm:text-base leading-relaxed max-w-3xl">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 pt-2">
          <span className="bg-navy text-cream font-label-pill text-label-pill px-3 py-1 rounded-full uppercase tracking-widest">
            {post.date} • {post.readingTime}
          </span>
        </div>
      </div>

      <div className="mt-10 rounded-2xl overflow-hidden bg-navy h-64 sm:h-96 w-full relative">
        <img
          className="w-full h-full object-cover mix-blend-luminosity opacity-85"
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
    </section>
  );
}
