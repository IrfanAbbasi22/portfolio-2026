"use client";

import { useEffect, useState } from "react";
import NavOverlay from "@/components/nav/NavOverlay";
import { useMagnetic } from "@/hooks/useMagnetic";

// Dennis's exact easing curves (docs/dennis-snellenberg-spec.md §4.2).
const EASE_HAMBURGER_IN = "cubic-bezier(0.34,1.5,0.64,1)"; // bouncy overshoot on reveal
const EASE_HAMBURGER_OUT = "cubic-bezier(0.36,0,0.66,0)";

/**
 * The persistent circular menu trigger + its drawer — deliberately rendered as its
 * own top-level sibling in layout.tsx, NOT nested inside <Header>. Header uses a
 * transparent/backdrop-blur-free nav-bar, but nesting a `position: fixed` element
 * inside ANY ancestor with `backdrop-filter`/`filter`/`transform` breaks fixed
 * positioning (the ancestor becomes the containing block instead of the viewport) —
 * that's what caused the drawer to render half on-screen even while "closed". Keeping
 * this fully independent avoids that class of bug entirely, matching how Dennis's own
 * `.btn-hamburger` lives directly under `<main>`, as a sibling of his `<header>`.
 */
export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { ref: hamburgerRef, textRef: barsRef } = useMagnetic<HTMLButtonElement, HTMLSpanElement>({
    strength: 30,
    strengthText: 25,
  });

  // Mirrors dennissnellenberg.com's `ScrollTrigger.create({ start: 'top -30%', ... })`.
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > window.innerHeight * 0.3);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        ref={hamburgerRef}
        aria-label={isNavOpen ? "Close Menu" : "Open Menu"}
        data-magnetic
        onClick={() => setIsNavOpen((v) => !v)}
        className="fixed z-[105] flex items-center justify-center overflow-hidden rounded-full bg-navy ring-1 ring-inset ring-cream/20 group cursor-pointer"
        style={{
          top: "1.5rem",
          right: "1.5rem",
          width: "clamp(3.5rem, 5.5vw, 4.5rem)",
          height: "clamp(3.5rem, 5.5vw, 4.5rem)",
          transform: `scale(${isScrolled || isNavOpen ? 1 : 0})`,
          transition: `transform .4s ${isScrolled || isNavOpen ? EASE_HAMBURGER_IN : EASE_HAMBURGER_OUT}`,
        }}
      >
        <span
          className="absolute -top-1/2 -left-1/4 h-[200%] w-[150%] rounded-full bg-teal
            -translate-y-[76%] transition-transform duration-500 ease-in-out
            group-hover:translate-y-0"
          aria-hidden
        />
        {/* Both bars share one centerpoint (absolute, centered in a relative box) so the
            open state is a clean symmetric X — the old version combined translateY with
            rotate on each bar independently, which never quite lined up and, with the
            bars spaced far apart via justify-between, read as two stray hairlines rather
            than a hamburger mark. Tighter spacing + rounded caps + a shared pivot fixes
            both. */}
        <span ref={barsRef} className="relative z-[2] flex h-5 w-5 items-center justify-center">
          <span
            className="absolute h-[2px] w-5 rounded-full bg-cream transition-transform duration-300 ease-in-out"
            style={{ transform: isNavOpen ? "rotate(45deg)" : "translateY(-4px)" }}
          />
          <span
            className="absolute h-[2px] w-5 rounded-full bg-cream transition-transform duration-300 ease-in-out"
            style={{ transform: isNavOpen ? "rotate(-45deg)" : "translateY(4px)" }}
          />
        </span>
      </button>

      <NavOverlay isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
}
