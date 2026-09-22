import ServiceItem from "./ServiceItem";
import { services } from "@/data/services";

export default function WhatIDo() {
  return (
    <section
      className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 mb-24 md:mb-32"
      id="what-i-do"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Tall Condensed "WHAT I DO" Title */}
        <div className="lg:col-span-3">
          <h2 className="font-condensed text-[54px] sm:text-[72px] md:text-[86px] leading-[0.85] uppercase text-navy sticky top-28">
            WHAT I DO
          </h2>
          <span className="text-[11px] font-mono tracking-widest text-navy/50 uppercase block mt-2">
            02 / EXPERTISE · SERVICES
          </span>
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
