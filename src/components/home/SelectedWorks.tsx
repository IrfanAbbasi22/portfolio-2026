import ProjectCard from "./ProjectCard";
import ProjectGrid from "./ProjectGrid";
import { projects } from "@/data/projects";

export default function SelectedWorks() {
  return (
    <section
      className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-24 md:mb-32"
      id="selected-works"
    >
      <div className="w-full bg-navy rounded-[2rem] md:rounded-home-4xl lg:rounded-home-5xl pt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 shadow-2xl relative overflow-hidden">
        {/* Header: Centered "SELECTED WORKS" in Ultra-Tall Condensed Type */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <span className="text-xs md:text-[12px] font-mono tracking-[0.3em] uppercase text-white/60 font-semibold mb-2">
            S E L E C T E D
          </span>
          <h2 className="font-condensed text-[64px] sm:text-[92px] md:text-[130px] leading-[0.88] uppercase text-white tracking-wide">
            WORKS
          </h2>
        </div>
        {/* Offset Staggered Cards Grid with Delicate Connector Lines & Dots */}
        <div className="relative max-w-6xl mx-auto">
          {/* Decorative vertical connecting guidelines */}
          <div className="hidden lg:block absolute left-1/3 top-10 bottom-24 w-[1px] bg-white/10 -translate-x-1/2 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40"></div>
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40"></div>
          </div>
          <div className="hidden lg:block absolute left-2/3 top-32 bottom-12 w-[1px] bg-white/10 -translate-x-1/2 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40"></div>
            <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40"></div>
          </div>
          {/* The Project Cards Grid */}
          <ProjectGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-10 items-start">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </ProjectGrid>
        </div>
      </div>
    </section>
  );
}
