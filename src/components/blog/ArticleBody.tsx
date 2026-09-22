import type { BlogBodyBlock } from "@/data/blogPosts";

export default function ArticleBody({ blocks }: { blocks: BlogBodyBlock[] }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-16">
      <div className="max-w-4xl mx-auto bg-cream text-navy rounded-[2.5rem] p-8 sm:p-14 space-y-6">
        {blocks.map((block, index) =>
          block.type === "heading" ? (
            <h2
              key={index}
              className="font-headline-md text-navy text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-[1.12] pt-4"
            >
              {block.text}
            </h2>
          ) : (
            <p
              key={index}
              className="font-body-md text-navy/80 text-sm sm:text-base leading-relaxed"
            >
              {block.text}
            </p>
          ),
        )}
      </div>
    </section>
  );
}
