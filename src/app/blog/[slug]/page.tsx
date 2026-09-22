import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleBody from "@/components/blog/ArticleBody";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { blogPosts, getBlogPostBySlug, getOtherPosts } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found — Mohd Irfan" };
  }

  return {
    title: `${post.title} — Mohd Irfan`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const body = post.body ?? [{ type: "paragraph" as const, text: post.excerpt }];
  const otherPosts = getOtherPosts(post.slug).slice(0, 4);

  return (
    <main className="w-full font-sans">
      <div className="flex flex-col w-full">
        <ArticleHero post={post} />
        <ArticleBody blocks={body} />
        <RelatedPosts posts={otherPosts} />
      </div>
    </main>
  );
}
