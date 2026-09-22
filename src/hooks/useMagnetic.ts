"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type UseMagneticOptions = {
  /** How far the outer element travels toward the pointer, in px. */
  strength?: number;
  /** How far the inner text/label travels — should be less than `strength` for the parallax-lag feel. */
  strengthText?: number;
  /** Disable above this width the effect only makes sense on precise pointers (desktop). */
  minWidth?: number;
};

/**
 * Magnetic hover physics, adapted from dennissnellenberg.com (see docs/dennis-snellenberg-spec.md §3.2).
 * Attach `ref` to the outer clickable element and `textRef` to the inner label for the
 * parallax-lag effect; `textRef` is optional — if omitted only the outer element moves.
 */
export function useMagnetic<T extends HTMLElement, U extends HTMLElement>({
  strength = 40,
  strengthText = 20,
  minWidth = 540,
}: UseMagneticOptions = {}) {
  const ref = useRef<T>(null);
  const textRef = useRef<U>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.innerWidth <= minWidth) return;

    const textEl = textRef.current;

    function onMove(e: PointerEvent) {
      if (!el) return;
      const bounds = el.getBoundingClientRect();
      const relX = (e.clientX - bounds.left) / el.offsetWidth - 0.5;
      const relY = (e.clientY - bounds.top) / el.offsetHeight - 0.5;

      gsap.to(el, {
        duration: 1.5,
        x: relX * strength,
        y: relY * strength,
        ease: "power4.out",
      });
      if (textEl) {
        gsap.to(textEl, {
          duration: 1.5,
          x: relX * strengthText,
          y: relY * strengthText,
          ease: "power4.out",
        });
      }
    }

    function onLeave() {
      if (!el) return;
      // GSAP's default Elastic.easeOut config (amplitude 1, period 0.3) — matches
      // dennissnellenberg.com's bare `ease: Elastic.easeOut` exactly.
      gsap.to(el, { duration: 1.5, x: 0, y: 0, ease: "elastic.out(1, 0.3)" });
      if (textEl) {
        gsap.to(textEl, { duration: 1.5, x: 0, y: 0, ease: "elastic.out(1, 0.3)" });
      }
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(el);
      if (textEl) gsap.killTweensOf(textEl);
    };
  }, [strength, strengthText, minWidth]);

  return { ref, textRef };
}
