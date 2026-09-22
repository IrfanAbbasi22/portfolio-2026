import type { Metadata } from "next";
import PageIntro from "@/components/blog/PageIntro";
import EssaysSection from "@/components/blog/EssaysSection";
import PhilosophyBanner from "@/components/blog/PhilosophyBanner";
import CtaBanner from "@/components/blog/CtaBanner";
import { blogPosts, getFeaturedPost } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Technical Essays — Mohd Irfan",
  description:
    "Reflections on building resilient frontend interfaces, component contracts, and modern web architectures.",
};

export default function BlogPage() {
  const featuredPost = getFeaturedPost() ?? blogPosts[0];
  const gridPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <main className="w-full font-sans">
      <div className="flex flex-col w-full">
        <PageIntro />
        <EssaysSection featuredPost={featuredPost} gridPosts={gridPosts} />
        <PhilosophyBanner />
        <CtaBanner />
      </div>
    </main>
  );
}
