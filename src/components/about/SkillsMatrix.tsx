import { skillCategories } from "@/data/about-skills";
import SkillCard from "./SkillCard";

export default function SkillsMatrix() {
  return (
    <section className="w-full px-who-margin md:px-who-margin-desktop py-who-space-2xl md:py-who-space-3xl bg-cream/40">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-who-space-xl gap-who-space-md">
        <div>
          <div className="flex items-center gap-who-space-sm mb-who-space-xs">
            <span className="w-6 h-[1px] bg-navy" />
            <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-[0.25em] text-navy">
              02 / CAPABILITIES
            </span>
          </div>
          <h2 className="font-who-headline-lg text-who-headline-lg-mobile md:text-who-headline-lg text-navy uppercase tracking-tight">
            SKILLS &amp; TOOLS
          </h2>
        </div>
        <p className="font-who-body-sm text-who-body-sm text-navy/60 max-w-md">
          Built for easy maintenance, speed, and reliability — including
          modern AI-powered workflows.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-who-gutter">
        {skillCategories.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
