import type { BlogPost } from "@/data/blogPosts";

export default function BlogCard({ post }: { post: BlogPost }) {
  const accentDash = post.accent === "teal" ? "bg-teal" : "bg-coral";
  const accentHover =
    post.accent === "teal"
      ? "group-hover:text-teal"
      : "group-hover:text-coral";

  return (
    <div className="bg-cream text-navy rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`w-4 h-[2px] ${accentDash}`}></span>
          <span className="font-label-pill text-label-pill uppercase bg-navy text-cream px-2.5 py-1 rounded-full">
            {post.badge}
          </span>
        </div>
        <h4
          className={`font-headline-display text-navy text-2xl sm:text-3xl uppercase leading-none mb-3 transition-colors ${accentHover}`}
        >
          {post.title}
        </h4>
        <p className="font-body-sm text-navy/80 leading-relaxed mb-6">
          {post.excerpt}
        </p>
      </div>
      <div>
        <div className="rounded-xl overflow-hidden h-44 mb-4 bg-navy">
          <img
            className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-500"
            alt={post.imageAlt}
            src={post.image}
          />
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="font-label-eyebrow text-label-eyebrow text-navy/60 uppercase">
            {post.readingTime}
          </span>
          <div className="flex gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-label-pill text-label-pill px-2 py-0.5 rounded-full bg-white text-navy uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
