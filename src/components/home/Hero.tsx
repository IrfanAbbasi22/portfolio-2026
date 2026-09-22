export default function Hero() {
  return (
    <section className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-16 md:pb-24">
      {/* Top Small Subtitle */}
      <div className="mb-4">
        <p className="text-[12px] md:text-[13px] font-mono tracking-[0.25em] uppercase text-navy/80 font-medium">
          — FRONTEND ARCHITECT &amp; SYSTEMS ENGINEER
        </p>
      </div>
      {/* Huge Tall Ultra-Condensed Accent Headline in Soft Sage/Teal Green */}
      <div className="mb-2">
        <h2 className="font-condensed text-[54px] sm:text-[76px] md:text-[110px] lg:text-[142px] leading-[0.85] uppercase text-teal tracking-[0.02em] select-none font-normal">
          FRONTEND SYSTEMS DEVELOPER / ARCHITECT
        </h2>
      </div>
      {/* Subtle Italian/Architectural sub-badge below green header */}
      <div className="mb-14 md:mb-20">
        <p className="text-[11px] md:text-[12px] font-mono tracking-[0.2em] uppercase text-navy/70 font-semibold">
          SCALABLE FRONTEND ARCHITECTURE FOR TEAMS BUILDING WHAT MATTERS
        </p>
      </div>
      {/* Main Editorial Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-1 hidden lg:block pt-3">
          <span className="text-[11px] font-mono tracking-[0.2em] text-navy/50 uppercase block rotate-0">
            01 / PROFILO
          </span>
        </div>
        <div className="lg:col-span-11">
          <h1 className="font-syne text-[36px] sm:text-[50px] md:text-[68px] lg:text-[84px] leading-[1.04] text-navy uppercase tracking-[-0.02em] font-normal max-w-6xl">
            BUILDING <span className="font-extrabold text-navy">FRONTEND SYSTEMS</span> &amp; WEB PLATFORMS THAT CONNECT{" "}
            <span className="font-extrabold text-navy">DESIGN TO INTELLIGENCE</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
