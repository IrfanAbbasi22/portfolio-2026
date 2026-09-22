export default function CtaBanner() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-16">
      <div className="bg-navy text-cream rounded-[2.5rem] p-8 sm:p-14 lg:p-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="font-headline-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[84px] uppercase leading-[0.9]">
              HAI UN PROGETTO IN TESTA?
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="font-headline-display text-teal text-4xl sm:text-5xl md:text-6xl lg:text-[72px] uppercase">
                PARLIAMONE
              </span>
              <div className="w-12 h-12 rounded-full bg-teal text-navy flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                <span className="material-symbols-outlined font-bold">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Triage Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="space-y-1">
            <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-cream/50 uppercase block">
              DEVI PROGETTARE
            </span>
            <span className="font-headline-sm text-sm font-bold tracking-wider text-cream uppercase block">
              UN NUOVO SITO O WEB APP?
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-cream/50 uppercase block">
              HAI BISOGNO DI
            </span>
            <span className="font-headline-sm text-sm font-bold tracking-wider text-cream uppercase block">
              UN AUDIT DELLE PERFORMANCE?
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-cream/50 uppercase block">
              STAI CERCANDO
            </span>
            <span className="font-headline-sm text-sm font-bold tracking-wider text-cream uppercase block">
              UN SENIOR FRONTEND SPECIALIST?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
