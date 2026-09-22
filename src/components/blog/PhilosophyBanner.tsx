import MagneticLink from "@/components/ui/MagneticLink";

export default function PhilosophyBanner() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-8">
      <div className="bg-lavender text-cream rounded-[2.5rem] p-8 sm:p-14 lg:p-16">
        <h3 className="font-headline-display text-cream text-3xl sm:text-4xl md:text-5xl lg:text-[56px] uppercase leading-[0.98] tracking-normal mb-8">
          SCRIVO DI CODICE E ARCHITETTURA FRONTEND CON LO STESSO RIGORE CON CUI
          PROGETTO LE INTERFACCE. NIENTE BUZZWORD, SOLO SISTEMI RESILIENTI,
          ACCESSIBILI E VELOCI.
        </h3>
        <MagneticLink
          strength={18}
          className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-cream/80 hover:text-cream transition-colors inline-block"
          href="#about"
        >
          (APPROFONDISCI IL MIO APPROCCIO)
        </MagneticLink>
      </div>
    </section>
  );
}
