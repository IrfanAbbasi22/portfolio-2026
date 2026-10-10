import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

// Blog is hidden for now — route disabled, components and data untouched for whenever
// it comes back (see app/blog/page.tsx, the index route, for the fuller note).
export function generateStaticParams() {
  return [];
}

export function generateMetadata(): Metadata {
  return { title: "Article Not Found — Mohd Irfan" };
}

export default function BlogPostPage(_props: BlogPostPageProps): never {
  notFound();
}
