import MagneticLink from "@/components/ui/MagneticLink";

const linkClassName = "inline-block hover:text-coral transition-colors";

export function PageIntro() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 md:pt-24 pb-10 text-center flex flex-col items-center">
      {/* Condensed Mango Grotesque Style Headline */}
      <h1 className="once-in will-change-transform font-condensed text-[3.75rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.88] uppercase text-navy tracking-tight select-none">
        Are You Looking For a Partner?
      </h1>
      {/* Direct Minimal Contact Horizontal Strip */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.18em] text-navy/90">
        <MagneticLink strength={16} className={linkClassName} href="mailto:irfanabbasiccx@gmail.com">
          E-MAIL: irfanabbasiccx@gmail.com
        </MagneticLink>
        <span className="text-navy/30 hidden sm:inline">|</span>
        <MagneticLink strength={16} className={linkClassName} href="tel:+919821558370">
          PHONE: +91 98215 58370
        </MagneticLink>
        <span className="text-navy/30 hidden sm:inline">|</span>
        <MagneticLink
          strength={16}
          className={linkClassName}
          href="https://wa.me/919821558370"
          rel="noreferrer"
          target="_blank"
        >
          WHATSAPP
        </MagneticLink>
        <span className="text-navy/30 hidden sm:inline">|</span>
        <MagneticLink
          strength={16}
          className={linkClassName}
          href="https://t.me/mohdirfan"
          rel="noreferrer"
          target="_blank"
        >
          TELEGRAM
        </MagneticLink>
      </div>
    </section>
  );
}
