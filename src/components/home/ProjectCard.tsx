import type { ElementType } from "react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasLink = Boolean(project.liveUrl);
  // Real destination -> the whole card is a link (and gets the interactive
  // hover affordances). No destination yet -> a plain article with no "click
  // me" styling, so nothing on the page promises a click it can't deliver.
  const Wrapper = (hasLink ? "a" : "article") as ElementType;
  const wrapperProps = hasLink
    ? { href: project.liveUrl, target: "_blank", rel: "noreferrer", "aria-label": `View ${project.title} (opens in a new tab)` }
    : {};

  return (
    <div data-project-card className={project.offsetClassName}>
      <Wrapper
        {...wrapperProps}
        className={`group bg-cream rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-col justify-between shadow-lg text-navy relative ${
          hasLink ? "transition-transform duration-500 ease-out hover:-translate-y-2" : ""
        }`}
      >
        <div className="flex items-start justify-between mb-4 border-b border-navy/10 pb-3">
          <div>
            <span className="text-xs font-mono tracking-widest text-navy/50 uppercase block">
              — {project.index}
            </span>
            <h3 className="font-condensed text-[34px] leading-none uppercase text-navy mt-1">
              {project.title}
            </h3>
            <span className="text-xs font-mono tracking-wider text-navy/70 uppercase">
              {project.category}
            </span>
          </div>
          <div
            className={`w-7 h-7 rounded-full border border-navy/30 flex items-center justify-center font-mono text-xs font-bold text-navy transition-colors duration-300 ${
              hasLink ? "group-hover:bg-navy group-hover:text-cream" : ""
            }`}
          >
            {project.year}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl">
          <div
            className={`transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
              hasLink ? "group-hover:scale-[1.05]" : ""
            }`}
          >
            {project.mockup}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between pt-2">
          <span className="text-xs font-mono uppercase text-navy/60">
            {project.footerLabel}
          </span>
          {hasLink && (
            <span className="text-xs font-mono uppercase font-bold text-navy transition-colors duration-300 group-hover:text-teal flex items-center gap-1">
              VIEW LIVE
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
