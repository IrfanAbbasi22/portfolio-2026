import type { SkillCategory } from "@/data/skills";

export default function SkillCategoryCard({
  category,
}: {
  category: SkillCategory;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-navy/10 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            className={`font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-bold ${category.badgeClassName}`}
          >
            {category.badgeLabel}
          </span>
          <span
            className={`text-[11px] font-mono font-bold ${category.metricClassName}`}
          >
            {category.metricLabel}
          </span>
        </div>
        <h3 className="font-condensed text-2xl uppercase text-navy mb-2">
          {category.title}
        </h3>
        <p className="text-xs text-navy/70 mb-4 font-mono leading-relaxed">
          {category.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-navy/10">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] px-2.5 py-1 rounded bg-cream text-navy font-semibold border border-navy/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
