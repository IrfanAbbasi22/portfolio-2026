import SkillCategoryCard from "./SkillCategoryCard";
import { skillCategories } from "@/data/skills";

export default function SkillsExperience() {
  return (
    <section
      className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 py-who-space-2xl"
      id="skills-experience"
    >
      {/* Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: eyebrow/heading/description match ExperienceTimeline.tsx's
            "Left Anchor" style exactly, for consistency across these stacked home
            sections. */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-who-space-sm mb-who-space-xs">
            <span className="w-6 h-px bg-coral" />
            <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-[0.25em] text-navy font-bold">
              03 / CAPABILITIES
            </span>
          </div>
          <h2 className="font-who-headline-lg text-who-headline-lg-mobile md:text-who-headline-lg text-navy uppercase tracking-tight">
            SKILLS
          </h2>
          <p className="font-who-body-sm text-who-body-sm text-navy/60 mt-who-space-sm">
            Tools and systems I reach for when building resilient,
            production-grade interfaces.
          </p>
        </div>
        <div className="lg:col-span-9">
          <p className="font-syne text-xl sm:text-2xl md:text-3xl text-navy leading-snug max-w-3xl mb-12">
            ENGINEERED WITH RIGOROUS ARCHITECTURAL STANDARDS. COMBINING
            COMPONENT-LEVEL CRAFTSMANSHIP WITH PRODUCTION-SCALE RESILIENCE.
          </p>

          {/* Skills Categorized Bento Grid */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-navy/10">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-navy/70">
                [ TECH STACK &amp; CORE COMPETENCIES ]
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <SkillCategoryCard key={category.title} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
