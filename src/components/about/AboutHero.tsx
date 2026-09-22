export default function AboutHero() {
  return (
    <section className="w-full px-who-margin md:px-who-margin-desktop pt-16 md:pt-24 pb-who-space-xl md:pb-who-space-2xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-who-space-xl md:gap-who-gutter-desktop">
        {/* Left Editorial Axis */}
        <div className="md:col-span-3 flex flex-col justify-between">
          <div className="flex items-center gap-who-space-sm">
            <span className="w-6 h-[1px] bg-coral" />
            <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-[0.25em] text-navy font-bold">
              01 / ABOUT
            </span>
          </div>
          <div className="hidden md:flex flex-col gap-who-space-xs mt-who-space-3xl">
            <span className="font-who-label-pill text-who-label-pill uppercase text-navy/45 tracking-widest">
              DISCIPLINE
            </span>
            <p className="font-who-headline-sm text-who-headline-sm text-navy">
              Frontend Architect
            </p>
            <span className="font-who-label-pill text-who-label-pill uppercase text-navy/45 tracking-widest mt-who-space-sm">
              SPECIALTY
            </span>
            <p className="font-who-body-sm text-who-body-sm text-navy/60">
              React &bull; Next.js &bull; AI Agents
            </p>
          </div>
        </div>
        {/* Right Dominant Display Column */}
        <div className="md:col-span-9 flex flex-col">
          <h1 className="font-who-headline-display text-who-headline-display-mobile md:text-who-headline-display text-navy uppercase tracking-tight leading-[0.92]">
            A FRONTEND SYSTEMS THINKER, NOT JUST A UI IMPLEMENTER.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-who-space-lg mt-who-space-xl items-start">
            <div className="lg:col-span-8">
              <p className="font-who-body-lg text-who-body-lg text-navy leading-relaxed">
                I view frontend development as the intersection of aesthetic
                precision, robust systems engineering, and modern
                intelligence. Over 5 years, I&rsquo;ve bridged design systems
                and production code to build platforms that scale
                effortlessly.
              </p>
              <p className="font-who-body-md text-who-body-md text-navy/60 mt-who-space-md">
                From building headless multi-tenant storefronts to embedding
                conversational voice intelligence via ElevenLabs and OpenAI,
                my work is rooted in intentional architecture: strict
                modularity, sub-millisecond tactile responsiveness, and
                resilient client-side pipelines.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white rounded-xl p-who-space-md flex flex-col gap-who-space-sm shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-who-label-pill text-who-label-pill uppercase tracking-widest text-navy/60">
                  YEARS ACTIVE
                </span>
                <span className="font-who-headline-sm text-who-headline-sm text-navy">
                  05+
                </span>
              </div>
              <div className="w-full bg-cream h-1.5 rounded-full overflow-hidden">
                <div className="bg-coral h-full w-[85%] rounded-full" />
              </div>
              <div className="flex items-center justify-between pt-who-space-xs text-navy/60">
                <span className="font-who-label-pill text-who-label-pill uppercase tracking-wider">
                  PROJECT DELIVERIES
                </span>
                <span className="font-who-headline-sm text-who-headline-sm text-teal">
                  40+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
