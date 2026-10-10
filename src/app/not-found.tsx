import type { Metadata } from "next";
import MagneticButton from "@/components/ui/MagneticButton";
import MagneticLink from "@/components/ui/MagneticLink";

export const metadata: Metadata = {
  title: "Page Not Found — Mohd Irfan",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="w-full overflow-x-clip font-sans">
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pt-16 md:pt-24 pb-24 md:pb-32 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <span className="once-in will-change-transform font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase text-coral font-bold mb-4">
          ERROR 404
        </span>
        <h1 className="once-in will-change-transform font-condensed text-[120px] sm:text-[180px] md:text-[240px] leading-[0.8] uppercase text-navy tracking-tight select-none">
          404
        </h1>
        <p className="once-in will-change-transform font-syne text-xl sm:text-2xl md:text-3xl text-navy/80 max-w-xl mt-4 mb-10 leading-snug">
          This page wandered off the architecture diagram. Let&rsquo;s get you back
          on track.
        </p>
        <div className="once-in will-change-transform flex flex-col sm:flex-row items-center gap-6">
          <MagneticButton tone="dark" strength={30} strengthText={15} href="/">
            BACK TO HOME
          </MagneticButton>
          <MagneticLink
            strength={18}
            className="font-mono text-xs font-bold uppercase tracking-widest text-navy hover:text-coral transition-colors underline underline-offset-8"
            href="/contact"
          >
            OR GET IN TOUCH →
          </MagneticLink>
        </div>
      </section>
    </main>
  );
}
