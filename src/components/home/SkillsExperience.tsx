import SkillCategoryCard from "./SkillCategoryCard";
import { skillCategories } from "@/data/skills";

export default function SkillsExperience() {
  return (
    <section
      className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 mb-24 md:mb-32"
      id="skills-experience"
    >
      <div className="border-t border-navy/15 pt-16 md:pt-24">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-3">
            <span className="text-[11px] font-mono tracking-widest text-navy/50 uppercase block mb-2">
              03 / CAPABILITIES
            </span>
            <h2 className="font-condensed text-[54px] sm:text-[72px] md:text-[86px] leading-[0.85] uppercase text-navy sticky top-28">
              SKILLS
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="font-syne text-xl sm:text-2xl md:text-3xl text-navy leading-snug max-w-3xl mb-12">
              ENGINEERED WITH RIGOROUS ARCHITECTURAL STANDARDS. COMBINING
              COMPONENT-LEVEL CRAFTSMANSHIP WITH PRODUCTION-SCALE RESILIENCE.
            </p>

            {/* Skills Categorized Bento Grid */}
            <div className="mb-16 md:mb-24">
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
      </div>
    </section>
  );
}
