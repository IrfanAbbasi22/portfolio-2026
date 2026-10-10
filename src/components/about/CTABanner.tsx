import MagneticButton from "@/components/ui/MagneticButton";

export default function CTABanner() {
  return (
    <section className="w-full px-who-margin md:px-who-margin-desktop py-who-space-xl">
      <div className="w-full bg-navy rounded-xl text-cream p-who-space-xl md:p-who-space-2xl relative overflow-hidden shadow-xl">
        {/* Ambient Decorative Geometry */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-60 h-60 bg-coral/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-who-space-xl">
          <div className="max-w-2xl flex flex-col gap-who-space-sm">
            <div className="flex items-center gap-who-space-sm">
              <span className="w-6 h-[1px] bg-coral" />
              <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-[0.25em] text-teal">
                ENGAGEMENT READY
              </span>
            </div>
            <h2 className="font-who-headline-lg text-who-headline-lg-mobile md:text-who-headline-lg text-cream uppercase tracking-tight">
              LOOKING FOR A DEDICATED FRONTEND DEVELOPER?
            </h2>
            <p className="font-who-body-md text-who-body-md text-cream/70 max-w-xl">
              Available for senior consulting, technical advisory, or
              engineering leadership roles — focused on React, Next.js, and
              AI-powered frontend products.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-who-space-md">
            <MagneticButton
              tone="coral"
              strength={30}
              strengthText={15}
              sizeClassName="rounded-full px-who-space-lg py-who-space-md"
              textClassName="font-who-label-interactive text-who-label-interactive uppercase tracking-wider inline-flex items-center gap-who-space-sm group"
              href="/contact"
            >
              <span>Initiate Dialogue</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </MagneticButton>
            <MagneticButton
              tone="accent"
              strength={30}
              strengthText={15}
              sizeClassName="rounded-full px-who-space-lg py-who-space-md"
              textClassName="font-who-label-interactive text-who-label-interactive uppercase tracking-wider inline-flex items-center gap-who-space-xs"
              href="/Mohd_Irfan_CV.pdf"
              download
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download CV</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
