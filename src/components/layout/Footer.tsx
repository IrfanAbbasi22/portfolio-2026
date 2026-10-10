"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticLink from "@/components/ui/MagneticLink";
import MagneticButton from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const panelRef = useRef<HTMLDivElement>(null);

  // Adapts dennissnellenberg.com's footer reveal (dennis-animation-breakdown/03-footer-
  // reveal.md: a curved edge that flattens on scroll, plus the footer parallaxing up
  // from behind) to this panel's own floating-card shape rather than his full-bleed
  // one: the top corners start over-rounded and relax to the panel's real resting
  // radius — the same "curve flattens as it's revealed" read — while the whole card
  // slides up slightly, both scrubbed to scroll position instead of Locomotive Scroll's
  // `data-scroll-speed`, per the doc's "Without Locomotive" note.
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const restRadius = parseFloat(getComputedStyle(panel).borderTopLeftRadius) || 32;

      gsap.fromTo(
        panel,
        {
          yPercent: 6,
          borderTopLeftRadius: restRadius * 2.5,
          borderTopRightRadius: restRadius * 2.5,
        },
        {
          yPercent: 0,
          borderTopLeftRadius: restRadius,
          borderTopRightRadius: restRadius,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "top 65%",
            scrub: true,
          },
        },
      );
    }, panel);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="w-full bg-cream pb-12 pt-4">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Floating Container Footer with Deep Navy Background */}
        <div
          ref={panelRef}
          className="w-full bg-navy rounded-[2rem] md:rounded-home-4xl lg:rounded-home-5xl p-8 sm:p-12 md:p-16 lg:p-20 text-white shadow-2xl relative overflow-hidden will-change-transform"
        >
          {/* Big Display Header & CTA Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 md:pb-16 border-b border-white/15">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-teal font-bold block mb-3">
                INTERFACES · INTELLIGENCE · ARCHITECTURE
              </span>
              <h2 className="font-condensed text-[48px] sm:text-[68px] md:text-[88px] lg:text-[104px] leading-[0.88] uppercase text-white tracking-wide">
                HAVE A PROJECT IN MIND?
                <br />
                <span className="text-coral">LET&apos;S TALK.</span>
              </h2>
            </div>
            <div>
              <MagneticButton
                tone="coral"
                strength={40}
                strengthText={20}
                className="shadow-lg gap-3"
                href="mailto:irfanabbasiccx@gmail.com?subject=Project%20Inquiry"
              >
                START AN ENGAGEMENT <span aria-hidden>→</span>
              </MagneticButton>
            </div>
          </div>

          {/* Detailed Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 pb-12 border-b border-white/10">
            {/* Column 1: Navigation */}
            <div className="md:col-span-4 flex flex-col items-start gap-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                [ SITEMAP ]
              </span>
              <MagneticLink
                className="inline-block font-condensed text-2xl uppercase tracking-wider text-white hover:text-teal transition-colors"
                href="/about"
              >
                WHO I AM
              </MagneticLink>
              <MagneticLink
                className="inline-block font-condensed text-2xl uppercase tracking-wider text-white hover:text-teal transition-colors"
                href="/#what-i-do"
              >
                WHAT I DO
              </MagneticLink>
              <MagneticLink
                className="inline-block font-condensed text-2xl uppercase tracking-wider text-white hover:text-teal transition-colors"
                href="/#selected-works"
              >
                SELECTED WORKS
              </MagneticLink>
              {/* Blog is hidden for now — see Header.tsx and NavOverlay.tsx for the matching omissions. */}
              <MagneticLink
                className="inline-block font-condensed text-2xl uppercase tracking-wider text-white hover:text-teal transition-colors"
                href="/#skills-experience"
              >
                SKILLS &amp; EXPERIENCE
              </MagneticLink>
              <MagneticLink
                className="inline-block font-condensed text-2xl uppercase tracking-wider text-white hover:text-teal transition-colors"
                href="/contact"
              >
                CONTACT
              </MagneticLink>
            </div>

            {/* Column 2: Direct Inquiries */}
            <div className="md:col-span-5 flex flex-col items-start gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                [ DIRECT INQUIRIES ]
              </span>
              <MagneticLink
                className="inline-block font-mono text-sm md:text-base font-bold text-white hover:text-teal transition-colors tracking-wide"
                href="mailto:irfanabbasiccx@gmail.com"
              >
                irfanabbasiccx@gmail.com
              </MagneticLink>
              <MagneticLink
                className="inline-block font-mono text-sm text-white/80 hover:text-white transition-colors"
                href="tel:+919821558370"
              >
                +91 98215 58370
              </MagneticLink>
              <p className="font-mono text-xs text-white/60 pt-2">
                NEW DELHI, INDIA · UTC +05:30
                <br />
                AVAILABLE GLOBALLY FOR SELECT CONTRACTS &amp; ARCHITECTURAL
                ADVISORY
              </p>
            </div>

            {/* Column 3: Socials */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                [ CONNECT ]
              </span>
              <MagneticLink
                className="inline-block font-mono text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-teal transition-colors"
                href="https://linkedin.com"
                rel="noreferrer"
                target="_blank"
              >
                LINKEDIN ↗
              </MagneticLink>
              <MagneticLink
                className="inline-block font-mono text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-teal transition-colors"
                href="https://github.com/IrfanAbbasi22"
                rel="noreferrer"
                target="_blank"
              >
                GITHUB ↗
              </MagneticLink>
              <MagneticLink
                className="inline-block font-mono text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-teal transition-colors"
                href="https://behance.net"
                rel="noreferrer"
                target="_blank"
              >
                BEHANCE ↗
              </MagneticLink>
              <MagneticLink
                className="inline-block font-mono text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-teal transition-colors"
                href="https://twitter.com"
                rel="noreferrer"
                target="_blank"
              >
                X / TWITTER ↗
              </MagneticLink>
            </div>
          </div>

          {/* Bottom Meta */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-white/60">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal"></div>
              <span className="font-bold text-white uppercase">MOHD IRFAN</span>
              <span>— FRONTEND DEVELOPER</span>
            </div>
            <div>ALL RIGHTS RESERVED © {new Date().getFullYear()} · CRAFTED WITH REACT &amp; NEXT.JS</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
