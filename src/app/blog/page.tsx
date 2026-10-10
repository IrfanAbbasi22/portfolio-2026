import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Technical Essays — Mohd Irfan",
  description:
    "Reflections on building resilient frontend interfaces, component contracts, and modern web architectures.",
};

// Blog is hidden for now — route disabled, components untouched in components/blog/
// and data/blogPosts.ts for whenever it comes back (see Header.tsx, NavOverlay.tsx,
// Footer.tsx for the matching nav omissions).
export default function BlogPage(): never {
  notFound();
}
