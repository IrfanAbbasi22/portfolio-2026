import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import VisualAnchor from "@/components/about/VisualAnchor";
import SkillsMatrix from "@/components/about/SkillsMatrix";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import Academics from "@/components/about/Academics";
import CTABanner from "@/components/about/CTABanner";

export const metadata: Metadata = {
  title: "Who I Am — Mohd Irfan",
  description:
    "Full Stack Developer Mohd Irfan's background, skills, work history, and education.",
};

export default function AboutPage() {
  // overflow-x-clip (not hidden): `hidden` would turn <main> into a scroll
  // container, which silently breaks the `position: sticky` pinning in
  // ExperienceTimeline/Academics' stacked cards below.
  return (
    <main className="w-full overflow-x-clip font-who-body-md bg-cream min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">
        <AboutHero />
        <VisualAnchor />
        <SkillsMatrix />
        <ExperienceTimeline />
        <Academics />
        {/* <CTABanner /> */}
      </div>
    </main>
  );
}
