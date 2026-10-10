export default function PageIntro() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-16 md:pt-24 pb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-[2px] bg-teal inline-block"></span>
        <span className="font-label-eyebrow text-label-eyebrow text-teal tracking-[0.25em] uppercase">
          03 / WRITING &amp; TECHNICAL ESSAYS
        </span>
      </div>
      <div className="space-y-4">
        <h1 className="once-in will-change-transform font-headline-display text-teal text-[42px] md:text-[76px] lg:text-[96px] tracking-tight uppercase leading-[0.9] select-none break-words">
          SYSTEMS, CODE ARCHITECTURE &amp; AI INTEGRATIONS
        </h1>
        <p className="font-label-eyebrow text-label-eyebrow text-navy/70 tracking-[0.2em] uppercase max-w-2xl pt-2">
          Reflections on building resilient frontend interfaces, component
          contracts, and modern web architectures.
        </p>
      </div>
      {/* Editorial Lead Statement / Italian Design Duality */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 items-baseline">
        <div className="lg:col-span-2">
          <span className="font-label-eyebrow text-label-eyebrow text-navy/50 tracking-[0.22em] uppercase block">
            PER CHI LEGGE
          </span>
        </div>
        <div className="lg:col-span-10">
          <h2 className="font-headline-md text-navy text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold uppercase tracking-tight leading-[1.12]">
            PENSIERO TECNICO E ARCHITETTURA DIGITALE CHE{" "}
            <span className="font-headline-display text-navy tracking-normal font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] align-baseline">
              TRASFORMANO IL CODICE
            </span>{" "}
            IN ESPERIENZA TANGIBILE
          </h2>
        </div>
      </div>
    </section>
  );
}
