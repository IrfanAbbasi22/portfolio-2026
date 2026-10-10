import ServiceItem from "./ServiceItem";
import { services } from "@/data/services";

export default function WhatIDo() {
  return (
    <section
      className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 py-who-space-2xl"
      id="what-i-do"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: eyebrow/heading/description match ExperienceTimeline.tsx's
            "Left Anchor" style exactly, for consistency across these stacked home
            sections. The eyebrow must come BEFORE the sticky heading, not after: this
            grid stretches the column to match the tall services list beside it, so the
            two sit packed at the top of a much taller box; a sibling placed after the
            sticky h2 scrolls normally while the h2 is still in flow, and for the brief
            window right as the h2 engages `sticky` that trailing sibling visually
            passes straight through the now-frozen heading — the overlapping/ghosted
            text seen in an earlier bug report. Putting the label first means it's
            already scrolled past before the heading ever engages. */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-who-space-sm mb-who-space-xs">
            <span className="w-6 h-px bg-coral" />
            <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-[0.25em] text-navy font-bold">
              02 / EXPERTISE · SERVICES
            </span>
          </div>
          <h2 className="font-who-headline-lg text-who-headline-lg-mobile md:text-who-headline-lg text-navy uppercase tracking-tight">
            WHAT I DO
          </h2>
          <p className="font-who-body-sm text-who-body-sm text-navy/60 mt-who-space-sm">
            Three focused engagements for teams who need design, engineering,
            and intelligence working as one system.
          </p>
        </div>
        {/* Right Content: 3 Clean Editorial Columns & Stacks */}
        <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-0">
          {services.map((service, i) => (
            <ServiceItem key={service.title} service={service} isLast={i === services.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
