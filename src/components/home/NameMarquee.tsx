"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Infinite name ticker, ported from dennissnellenberg.com's `roll()` helper
 * (dennis-animation-breakdown/04-marquee.md): the track is cloned once, the clone is
 * placed flush to the original's right edge, and both animate `xPercent: 0 -> -100`
 * in lockstep over the same duration — when the original has moved exactly one full
 * width, the clone is sitting exactly where the original started, so the repeat is
 * invisible. Direction reverses (with an eased ramp, not a snap) when the page's
 * scroll direction changes, using a plain window-scroll ScrollTrigger since this site
 * has no Locomotive Scroll — see the doc's "Without Locomotive" note.
 */
export default function NameMarquee() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const original = trackRef.current;
    if (!wrap || !original) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const clone = original.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      wrap.appendChild(clone);

      const positionClone = () => {
        gsap.set(clone, {
          position: "absolute",
          top: original.offsetTop,
          left: original.offsetLeft + original.offsetWidth,
        });
      };
      positionClone();

      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          // Playing backwards and hitting 0 would stall it — jump 10 loops forward
          // so it always has room to keep playing in either direction.
          this.totalTime(this.rawTime() + this.duration() * 10);
        },
      });
      tl.to([original, clone], { xPercent: -100, duration: 18, ease: "none" }, 0);

      let direction = 1;
      const directionTrigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate(self) {
          if (self.direction !== direction) {
            direction = self.direction;
            gsap.to(tl, { timeScale: direction, overwrite: true });
          }
        },
      });

      const onResize = () => {
        const time = tl.totalTime(); // remember position
        tl.totalTime(0); // rewind / clear transforms
        positionClone(); // re-measure at the new size
        tl.totalTime(time); // jump back
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        directionTrigger.kill();
      };
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full overflow-hidden bg-navy py-4 sm:py-6 md:py-8 mb-24 md:mb-32">
      <div ref={wrapRef} className="relative flex">
        <div
          ref={trackRef}
          className="once-in flex items-center whitespace-nowrap will-change-transform"
        >
          <span className="font-condensed text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none uppercase text-cream">
            Mohd Irfan
          </span>
          <span className="mx-[3vw] font-condensed text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none uppercase text-coral">
            —
          </span>
          <span className="font-condensed text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none uppercase text-teal">
            Full Stack Developer
          </span>
          <span className="mx-[3vw] font-condensed text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none uppercase text-coral">
            —
          </span>
        </div>
      </div>
    </section>
  );
}
