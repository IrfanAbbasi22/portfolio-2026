import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactCTA() {
  return (
    <section
      className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-16"
      id="contact"
    >
      <div className="w-full bg-navy rounded-[2rem] md:rounded-home-4xl lg:rounded-home-5xl p-8 sm:p-12 md:p-16 lg:p-20 text-white shadow-2xl relative overflow-hidden">
        {/* Top Row: Giant "HAVE A PROJECT IN MIND?" with Circular Arrow Button */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-14 border-b border-white/10">
          <div>
            <h2 className="font-condensed text-[56px] sm:text-[80px] md:text-[110px] lg:text-[132px] leading-[0.88] uppercase text-white tracking-wide">
              HAVE A PROJECT IN MIND?
            </h2>
            <div className="font-condensed text-[48px] sm:text-[68px] md:text-[96px] leading-[0.88] uppercase text-teal tracking-wide">
              LET&apos;S TALK
            </div>
          </div>
          {/* Giant Circular Arrow Action Button — same MagneticButton every other CTA on
              the site uses (fill-sweep + magnetic pointer-follow), just sized down for
              this section and with an icon in place of a label. */}
          <MagneticButton
            variant="round"
            tone="accent"
            strength={30}
            strengthText={15}
            sizeClassName="w-20 h-20 sm:w-24 sm:h-24 rounded-full self-start lg:self-center shrink-0 shadow-lg"
            aria-label="Initiate contact"
            href="mailto:irfanabbasiccx@gmail.com"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 -rotate-45"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <line x1="5" x2="19" y1="12" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </MagneticButton>
        </div>
        {/* Three Prompt Questions Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="flex flex-col gap-1 border-t border-white/15 pt-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              DO YOU NEED TO
            </span>
            <p className="font-condensed text-xl sm:text-2xl uppercase tracking-wide text-white">
              BUILD A ROBUST WEB ARCHITECTURE?
            </p>
          </div>
          <div className="flex flex-col gap-1 border-t border-white/15 pt-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              DO YOU NEED TO
            </span>
            <p className="font-condensed text-xl sm:text-2xl uppercase tracking-wide text-white">
              INTEGRATE ELEVENLABS AI AGENTS?
            </p>
          </div>
          <div className="flex flex-col gap-1 border-t border-white/15 pt-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              DO YOU NEED
            </span>
            <p className="font-condensed text-xl sm:text-2xl uppercase tracking-wide text-white">
              A DEDICATED SENIOR FRONTEND LEAD?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
