"use client";

import MagneticLink from "@/components/ui/MagneticLink";
import { MorphingText } from "@/components/ui/morphing-text";

const NAV_LINKS = [
  { href: "/#selected-works", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

const IDENTITY_TEXTS = ["Irfan Abbasi", "Frontend", "Developer", "UI"];

/**
 * The top nav-bar only — identity mark + Work/About/Blog/Contact links. Matches Dennis's
 * actual `.nav-bar`: `position: absolute`, transparent, floating over whatever content
 * starts the page, and scrolling away with it (not sticky/pinned). The persistent,
 * always-reachable navigation trigger once scrolled is the separate `<HamburgerMenu>`
 * (fixed, independent of this element — see that file for why it can't live in here).
 */
export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-40 w-full bg-transparent">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Left: identity mark — cycles "Irfan Abbasi" / "Frontend" / "Developer" / "UI"
            via a dissolve-and-blur morph (components/ui/morphing-text.tsx), in place of
            a static logo/credit line. */}
        <MagneticLink strength={20} href="/" className="shrink-0" textClassName="block">
          <MorphingText
            texts={IDENTITY_TEXTS}
            className="mx-0 h-7 md:h-8 w-42 sm:w-50 text-left font-condensed text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wide text-navy"
          />
        </MagneticLink>

        {/* Right: nav links (dot-underline hover indicator, matching Dennis's .btn-link),
            with Download CV last — styled as a distinct pill CTA rather than a plain
            text link, since it's an action, not a destination. */}
        <nav className="hidden lg:flex items-center gap-1 text-[12px] font-mono uppercase tracking-[0.2em] font-semibold text-navy">
          {NAV_LINKS.map((link) => (
            <MagneticLink key={link.href} strength={20} className="group relative px-3 py-2" href={link.href}>
              {link.label}
            </MagneticLink>
          ))}
          <MagneticLink
            strength={18}
            href="/Mohd_Irfan_CV.pdf"
            download
            className="ml-2 rounded-full border border-navy px-3 py-1.5 text-[11px] hover:bg-navy hover:text-cream transition-colors"
            textClassName="inline-flex items-center gap-1.5"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download CV
          </MagneticLink>
        </nav>
      </div>
    </header>
  );
}
