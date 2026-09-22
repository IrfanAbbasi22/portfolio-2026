import MagneticLink from "@/components/ui/MagneticLink";
import MagneticButton from "@/components/ui/MagneticButton";

export default function StrategicCoffee() {
  return (
    <section
      className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 mb-24 md:mb-32"
      id="strategic-coffee"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t border-b border-navy/15 py-16 md:py-24">
        {/* Left Side: Editorial Prompt */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h3 className="font-condensed text-[48px] sm:text-[64px] md:text-[76px] leading-[0.92] uppercase text-navy mb-6">
            FRONTEND, AI, OR SYSTEM ARCHITECTURE. WHERE TO START?
          </h3>
          <p className="text-base text-navy/80 max-w-lg mb-6 leading-relaxed">
            Often teams aren&rsquo;t sure whether they need a full rewrite, an
            AI voice layer, or just performance optimization. I&rsquo;ve
            opened this dedicated window to bring immediate clarity.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-navy/60 mb-6">
            Strategic Coffee: 30 complimentary minutes to get acquainted and
            identify where to begin.
          </p>
          <div>
            <MagneticLink
              strength={16}
              className="font-mono text-xs font-bold uppercase tracking-widest text-navy hover:text-coral transition-colors underline underline-offset-8"
              href="mailto:irfanabbasiccx@gmail.com?subject=Strategic%20Coffee%20Call"
            >
              BOOK YOUR 30-MIN STRATEGY CALL →
            </MagneticLink>
          </div>
        </div>
        {/* Right Side: Graphic Coffee Editorial Badge */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 bg-white rounded-home-3xl border border-navy/10">
          <div className="text-center mb-6">
            <h4 className="font-syne text-4xl sm:text-5xl font-bold text-coral tracking-tight lowercase">
              strategic <span className="text-navy font-extrabold">coffee</span>
            </h4>
            <p className="font-mono text-[11px] uppercase tracking-widest text-navy/70 mt-1 font-semibold">
              ONE SYSTEM, ONE ROADMAP, COMPLETE CLARITY.
            </p>
          </div>
          {/* 3 Step Protocol Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-4 font-mono text-xs font-bold uppercase text-navy">
            <span className="flex items-center gap-1.5">
              <span className="text-coral">01.</span> TELL ME
            </span>
            <span className="text-navy/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-coral">02.</span> LET&apos;S DISCUSS
            </span>
            <span className="text-navy/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-coral">03.</span> LET&apos;S BUILD
            </span>
          </div>
          {/* Stylized Illustration Placeholder / Vignette */}
          <div className="w-full max-w-md h-48 sm:h-56 my-4 flex items-center justify-center relative">
            <svg
              className="w-full h-full max-h-48 text-navy/80"
              fill="none"
              viewBox="0 0 400 200"
            >
              {/* Table and two conversing individuals abstract vector */}
              <ellipse cx="200" cy="150" rx="90" ry="16" stroke="currentColor" strokeWidth="2"></ellipse>
              <path d="M140 120 C140 100 160 90 170 110" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
              <circle cx="155" cy="80" className="fill-coral" r="14"></circle>
              <path d="M125 150 L145 115" stroke="currentColor" strokeWidth="2.5"></path>
              <path d="M260 120 C260 100 240 90 230 110" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
              <circle cx="245" cy="80" className="fill-teal" r="14"></circle>
              <path d="M275 150 L255 115" stroke="currentColor" strokeWidth="2.5"></path>
              <circle cx="200" cy="144" className="fill-coral" r="5"></circle>
              <path d="M200 138 Q202 130 200 124" className="stroke-coral" strokeLinecap="round" strokeWidth="1.5"></path>
            </svg>
          </div>
          {/* Bottom CTA Pill */}
          <MagneticButton
            tone="dark"
            strength={30}
            strengthText={15}
            className="mt-2"
            href="mailto:irfanabbasiccx@gmail.com"
          >
            PRENOTA IL TUO CAFFÈ / BOOK A CALL
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
