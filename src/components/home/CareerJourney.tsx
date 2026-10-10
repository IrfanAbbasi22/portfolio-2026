import { JourneyGrid, JourneyStop } from "@/components/ui/Journey";
import MagneticLink from "@/components/ui/MagneticLink";
import { journeyMilestones } from "@/data/journey";

export default function CareerJourney() {
  return (
    <section
      className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 py-who-space-2xl"
      id="journey"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column — matches WhatIDo/SkillsExperience's sticky "Left Anchor" style */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-who-space-sm mb-who-space-xs">
            <span className="w-6 h-px bg-coral" />
            <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-[0.25em] text-navy font-bold">
              02 / JOURNEY
            </span>
          </div>
          <h2 className="font-who-headline-lg text-who-headline-lg-mobile md:text-who-headline-lg text-navy uppercase tracking-tight">
            THE JOURNEY
          </h2>
          <p className="font-who-body-sm text-who-body-sm text-navy/60 mt-who-space-sm">
            From building foundational websites to leading frontend
            development for enterprise clients.
          </p>
        </div>
        {/* Right Content: career stops laid out as a map-pin route */}
        <div className="lg:col-span-9">
          <JourneyGrid className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {journeyMilestones.map((milestone, i) => {
              const isLast = i === journeyMilestones.length - 1;
              return (
                <JourneyStop
                  key={milestone.stop}
                  stop={milestone.stop}
                  eyebrow="ROLE"
                  title={milestone.company}
                  tagline={`${milestone.role} · ${milestone.period}`}
                  description={milestone.description}
                  isLast={isLast}
                >
                  {isLast && (
                    <MagneticLink
                      strength={18}
                      className="font-mono text-xs font-bold uppercase tracking-wider text-navy hover:text-teal transition-colors inline-block"
                      textClassName="inline-flex items-center gap-2"
                      href="#experience"
                    >
                      SEE FULL EXPERIENCE
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </MagneticLink>
                  )}
                </JourneyStop>
              );
            })}
          </JourneyGrid>
        </div>
      </div>
    </section>
  );
}
