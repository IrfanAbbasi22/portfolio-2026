import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-16 md:pb-24">
      {/* Top Small Subtitle — name first, so identity reads before the role does */}
      <div className="mb-4">
        <p className=" text-base font-mono tracking-[0.25em] uppercase text-navy/80 font-medium">
          <b>MOHD IRFAN</b> / FULL STACK DEVELOPER
        </p>
      </div>
      {/* Main Editorial Headline — now the hero's single headline, in the spot
          the green accent h2 used to occupy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 md:mb-10">
        <div className="lg:col-span-1 hidden lg:block pt-3">
          <span className="text-xs font-mono tracking-[0.2em] text-navy/50 uppercase block rotate-0">
            01 / PROFILE
          </span>
        </div>
        <div className="lg:col-span-11">
          <h1 className="once-in will-change-transform font-syne text-[7vw] sm:text-[34px] md:text-[46px] lg:text-[56px] leading-[1.1] text-navy uppercase tracking-[-0.02em] font-normal max-w-5xl">
            BUILDING <span className="font-extrabold text-navy">WEB APPS</span> END TO END, FROM REACT FRONTENDS TO{" "}
            <span className="font-extrabold text-navy">APIS AND AI AUTOMATION</span>
          </h1>
        </div>
      </div>
      {/* Concrete credibility line: years, stack, domain */}
      <div className="mb-8 md:mb-10">
        <p className="text-sm font-mono tracking-[0.2em] uppercase text-navy/70 font-semibold">
          5+ YEARS · REACT · NEXT.JS · NODE.JS · LARAVEL · AI INTEGRATIONS
        </p>
      </div>
      {/* Primary CTAs */}
      <div className="flex flex-wrap items-center gap-4">
        <MagneticButton
          tone="coral"
          strength={30}
          strengthText={15}
          href="#selected-works"
          sizeClassName="rounded-full py-2.5 px-6"
          className="shadow-lg gap-3"
          textColorClassName="text-cream group-hover/btn:text-white group-focus-visible/btn:text-white"
        >
          VIEW WORK <span aria-hidden>→</span>
        </MagneticButton>
        <MagneticButton
          tone="light"
          strength={30}
          strengthText={15}
          href="/mohd-irfan.pdf"
          download
          sizeClassName="rounded-full py-2.5 px-6"
        >
          DOWNLOAD CV
        </MagneticButton>
      </div>
    </section>
  );
}
