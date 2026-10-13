"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import MagneticLink from "@/components/ui/MagneticLink";

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// Dennis's exact drawer easing (docs/dennis-snellenberg-spec.md §4.1) — a plain CSS
// transition toggled by an "active" state, not GSAP; his real .fixed-nav is built this way.
const EASE_DRAWER = "cubic-bezier(0.7,0,0.2,1)";

const NAV_ITEMS = [
  { href: "/about", label: "WHO I AM", meta: "Background & Ethos" },
  { href: "/#selected-works", label: "WHAT I DO", meta: "Works & Architecture", homeAnchor: true },
  // Blog is hidden for now — see Header.tsx and Footer.tsx for the matching omissions.
  { href: "/contact", label: "CONTACT", meta: "Start Partnership" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/IrfanAbbasi22", label: "GitHub" },
  { href: "https://www.linkedin.com/in/irfan-abbasii/", label: "LinkedIn" },
];

export default function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Scrim backdrop — matches Dennis's .fixed-nav-back gradient overlay */}
      <div
        onClick={onClose}
        aria-hidden
        className="fixed inset-0 z-[99]"
        style={{
          background: "linear-gradient(to left, rgba(20,20,20,0.55) 40%, rgba(20,20,20,0.15) 100%)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: `opacity .8s ${EASE_DRAWER}`,
        }}
      />

      {/* Single-column, content-width drawer sliding in from the right edge — not
          full-viewport. Width is intrinsic (padding + content), like Dennis's auto-width
          .fixed-nav, capped so it never gets absurdly wide on very large screens.
          No overflow-hidden here (unlike before) — the curved-edge element below needs
          to render OUTSIDE this box, and clipping it here is exactly what silently ate
          the curve animation previously. Horizontal clipping for the sliding nav items
          instead lives on the inner content wrapper only. */}
      <aside
        aria-hidden={!isOpen}
        className="fixed right-0 top-0 z-[100] h-screen w-full max-w-[36rem] bg-navy text-cream"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(calc(100% + 6vw))",
          transition: `transform .8s ${EASE_DRAWER}`,
        }}
      >
        {/* Curved leading (left) edge — Dennis's exact .fixed-nav-rounded-div mechanic:
            a sibling positioned OUTSIDE the panel's own left edge (not nested inside it),
            anchored flush against that edge via `left + translateX(-100%)`, whose width
            runs 6vw AT REST -> 0vw on open (the bulge is a teaser while closed and
            flattens away as the panel arrives — not something that grows in afterward). */}
        <div
          className="absolute top-0 left-[1px] h-full -translate-x-full  overflow-hidden"
          aria-hidden
        >
          <div className="relative h-full" style={{
            width: isOpen ? "0vw" : "6vw",
            transition: `width .85s ${EASE_DRAWER}`,
          }}>

            <div
              className="absolute bg-navy rounded-[50%] top-1/2 w-[775%] h-[150%] "
              style={{ transform: "translate(0, -50%)" }}
            />
          </div>
        </div>

        {/* Content wrapper — this is what actually clips the nav items' horizontal
            slide-in animation, kept separate from <aside> itself. */}
        <div
          className="relative z-10 flex h-full flex-col justify-between overflow-hidden"
          style={{ padding: "12vh 7vw 8vh 7vw" }}
        >
          {/* Nav row: label + divider + big link list — matches Dennis's .nav-row */}
          <div>
            <h5 className="editorial-label text-cream/50 tracking-widest font-semibold mb-6">Navigation</h5>
            <div className="h-px w-full bg-cream/10" />

            <nav aria-label="Main Site Directory" className="pt-4">
              <ul className="flex flex-col list-none p-0 m-0">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = item.homeAnchor ? pathname === "/" : pathname === item.href;
                  return (
                    <li
                      key={item.href}
                      className="group border-b border-cream/10 py-4"
                      style={{
                        transform: isOpen ? "translateX(0)" : "translateX(15vw)",
                        transition: `transform .8s ${EASE_DRAWER}`,
                        transitionDelay: isOpen ? `${i * 0.03}s` : "0s",
                      }}
                    >
                      <MagneticLink
                        strength={16}
                        className="nav-item-link block focus:outline-none"
                        textClassName="flex w-full items-baseline justify-between gap-4"
                        href={item.href}
                        onClick={onClose}
                      >
                          <span className={`font-condensed text-4xl sm:text-5xl tracking-tight text-cream uppercase leading-none ${isActive ? "underline text-underling" : ""}`}>
                            {item.label}
                          </span>
                        <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-cream/40 group-hover:text-white transition-colors">
                          {item.meta}
                        </span>
                      </MagneticLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Social row: label + link row — matches Dennis's .social-row (its own
              .stripe divider is display:none on desktop, so omitted here too) */}
          <div className="space-y-6">
            <div>
              <h5 className="editorial-label text-cream/50 tracking-widest font-semibold mb-4">Socials</h5>
              <ul className="flex flex-wrap items-center gap-5 list-none p-0 m-0">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.href}>
                    <MagneticLink
                      strength={18}
                      className="inline-block text-xs font-bold uppercase tracking-widest text-cream/70 hover:text-coral transition-colors"
                      href={social.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {social.label}
                    </MagneticLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not present in Dennis's own sidebar (his contact info lives elsewhere on
                his site) — kept here as a reasonable addition since this is the only
                nav surface we have. Visually secondary to the two rows above. */}
            <div className="pt-4 border-t border-cream/10 space-y-2 text-xs tracking-wider">
              <MagneticLink
                strength={24}
                href="/mohd-irfan.pdf"
                download
                onClick={onClose}
                className="inline-block font-mono uppercase tracking-widest text-coral hover:text-white transition-colors"
                textClassName="inline-flex items-center gap-2"
              >
                Download CV
                <svg className="w-3.5 h-3.5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </MagneticLink>
              <div className="flex flex-wrap items-center gap-3 font-mono text-cream/70">
                <MagneticLink
                  strength={16}
                  className="inline-block hover:text-coral transition-colors"
                  href="mailto:irfanabbasiccx@gmail.com"
                >
                  irfanabbasiccx@gmail.com
                </MagneticLink>
                <span className="text-cream/20">&bull;</span>
                <MagneticLink
                  strength={16}
                  className="inline-block hover:text-coral transition-colors"
                  href="tel:+919821558370"
                >
                  +91 98215 58370
                </MagneticLink>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
