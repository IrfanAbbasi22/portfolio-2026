import type { SkillCategory, SkillTagVariant } from "@/data/about-skills";

const tagClasses: Record<SkillTagVariant, string> = {
  default: "bg-cream text-navy",
  inverted: "bg-navy text-cream",
  highlight: "bg-teal text-navy font-bold",
};

export default function SkillCard({ category }: { category: SkillCategory }) {
  const isDark = category.variant === "dark";

  const cardBg = isDark
    ? "bg-navy text-cream"
    : "bg-white";
  const iconColor = isDark ? "text-teal" : "text-navy";
  const headingColor = isDark ? "text-cream" : "text-navy";
  const badgeClasses = isDark
    ? "bg-coral text-cream"
    : "bg-cream text-navy";
  const descriptionColor = isDark
    ? "text-cream/70"
    : "text-navy/60";

  return (
    <div
      className={`${cardBg} rounded-xl p-who-space-lg flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-transform`}
    >
      <div>
        <div className="flex items-center justify-between pb-who-space-sm mb-who-space-md">
          <div className="flex items-center gap-who-space-xs">
            <span className={`material-symbols-outlined ${iconColor} text-[20px]`}>
              {category.icon}
            </span>
            <h3
              className={`font-who-headline-sm text-who-headline-sm ${headingColor} uppercase tracking-tight`}
            >
              {category.title}
            </h3>
          </div>
          <span
            className={`font-who-label-pill text-who-label-pill ${badgeClasses} px-who-space-sm py-who-space-xs rounded-full uppercase`}
          >
            {category.badge}
          </span>
        </div>
        <p
          className={`font-who-body-sm text-who-body-sm ${descriptionColor} mb-who-space-lg`}
        >
          {category.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-who-space-xs pt-who-space-md">
        {category.tags.map((tag) => (
          <span
            key={tag.label}
            className={`font-who-label-pill text-who-label-pill ${
              tagClasses[tag.variant ?? "default"]
            } px-who-space-sm py-who-space-xs rounded-full uppercase`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
