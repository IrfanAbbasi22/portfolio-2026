"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CurvedArc from "./CurvedArc";

// Greetings cycled through on first load, adapted from
// docs/dennis-snellenberg-spec.md §1.2 — content only, no design borrowed.
const GREETINGS = ["Hello", "Bonjour", "Ciao", "Hola", "Hallo", "こんにちは", "Namaste"];

const SESSION_KEY = "preloader-shown";

// sessionStorage can throw (private/incognito mode, storage-blocking extensions,
// strict privacy settings) — an uncaught throw here happens before any GSAP timeline
// is built, which would leave the curtain stuck in its SSR'd default state: `top: 0%`,
// a full-viewport opaque navy block above everything else, forever. Treat a blocked
// read as "not shown yet" (play the preloader) and swallow a blocked write — either
// way the curtain must still get built and lifted.
function hasPreloaderShown() {
  try {
    return sessionStorage.getItem(SESSION_KEY) !== null;
  } catch {
    return false;
  }
}

function markPreloaderShown() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Storage unavailable — the preloader will just replay on the next hard load too.
  }
}

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

  // Imperative only — no React state. Whether the preloader plays or stays hidden
  // is decided and applied directly on the DOM/GSAP, so there's nothing to
  // synchronize back into React (see docs/dennis-snellenberg-spec.md §1.3).
  //
  // The actual sessionStorage check + GSAP start is deferred one animation frame,
  // with the cleanup cancelling that pending frame. React 18+ Strict Mode runs this
  // effect as mount -> cleanup -> mount in dev; without the rAF deferral, the first
  // (throwaway) mount would write sessionStorage synchronously and the second
  // (real, surviving) mount would immediately see it "already shown" and hide
  // itself — the preloader would never actually play. Deferring means the first
  // mount's cleanup cancels its callback before it ever touches sessionStorage, so
  // only the surviving mount's callback runs. Production (single invoke) behaves
  // identically either way.
  useEffect(() => {
    const root = rootRef.current;
    const arc = arcRef.current;
    const words = wordsRef.current;
    const wordEls = wordRefs.current;
    if (!root || !arc || !words) return;

    const frame = requestAnimationFrame(() => {
      if (hasPreloaderShown()) {
        root.style.display = "none";
        return;
      }
      markPreloaderShown();

      // Last-resort safety net: whatever goes wrong while building the timeline below,
      // the curtain must not be left covering the page forever. Anything unexpected
      // reveals the page plainly (no animation) rather than bricking it.
      const reveal = () => {
        document.documentElement.style.cursor = "auto";
        document.body.style.overflow = "";
        root.style.display = "none";
        gsap.set(document.querySelectorAll<HTMLElement>("main .once-in"), {
          clearProps: "transform",
        });
      };

      try {
        playPreloader(root, arc, words, wordEls);
      } catch (error) {
        console.error("Preloader failed to start; revealing page without it.", error);
        reveal();
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      const onceInEls = document.querySelectorAll<HTMLElement>("main .once-in");
      gsap.killTweensOf([root, arc, words, ...wordEls, ...onceInEls]);
      gsap.set(onceInEls, { clearProps: "transform" });
      document.documentElement.style.cursor = "auto";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed left-0 right-0 h-screen w-full z-[300] bg-navy"
      style={{ top: "0%" }}
      aria-hidden
    >
      <CurvedArc ref={arcRef} edge="bottom" />
      <div
        ref={wordsRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 opacity-0"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-cream" />
        {GREETINGS.map((word, i) => (
          <span
            key={word}
            ref={(el) => {
              wordRefs.current[i] = el;
            }}
            className="font-condensed text-[3em] sm:text-[3.5em] leading-none text-cream whitespace-nowrap"
            style={{ display: i === 0 ? "inline-flex" : "none" }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

function playPreloader(
  root: HTMLDivElement,
  arc: HTMLDivElement,
  words: HTMLDivElement,
  wordEls: Array<HTMLSpanElement | null>,
) {
  const isDesktop = window.innerWidth > 540;
  const arcHeight = isDesktop ? "10vh" : "5vh";
  document.documentElement.style.cursor = "wait";
  document.body.style.overflow = "hidden";

  // The page content that rises into place once the curtain lifts — hero headline,
  // marquee, etc. (docs: dennis-animation-breakdown/01-preloader.md). Hidden behind
  // the still-opaque curtain the whole time it's being offset, so there's nothing to
  // flash.
  const onceInEls = document.querySelectorAll<HTMLElement>("main .once-in");

  const tl = gsap.timeline({
    onComplete: () => {
      document.documentElement.style.cursor = "auto";
      document.body.style.overflow = "";
      root.style.display = "none";
      gsap.set(onceInEls, { clearProps: "transform" });
    },
  });

  tl.set(root, { top: "0%" });
  tl.set(arc, { height: arcHeight });
  tl.set(words, { opacity: 0, y: -20 });
  tl.set(wordEls, { opacity: 0, display: "none" });
  tl.set(wordEls[0], { display: "inline-flex", opacity: 1 });
  tl.set(onceInEls, { y: isDesktop ? "50vh" : "10vh" });

  // words fade up into view
  tl.to(words, { duration: 0.8, opacity: 1, y: -20, ease: "power4.out", delay: 0.3 });

  // tick through each greeting, snappy not crossfaded (spec §1.2)
  wordEls.forEach((word, i) => {
    if (!word) return;
    tl.call(
      () => {
        wordEls.forEach((w, j) => {
          if (!w) return;
          w.style.display = j === i ? "inline-flex" : "none";
          w.style.opacity = j === i ? "1" : "0";
        });
      },
      undefined,
      i === 0 ? "-=.1" : "+=.12",
    );
  });

  // curtain lifts off the top...
  tl.to(root, { duration: 0.8, top: "-100%", ease: "power4.inOut", delay: 0.15 }, "+=.12");
  // ...while the curved arc collapses back to 0, in sync
  tl.to(arc, { duration: 1, height: "0vh", ease: "power4.inOut" }, "-=.8");
  // words fade out fast, underneath the lifting curtain
  tl.to(words, { duration: 0.3, opacity: 0, ease: "none" }, "-=.8");
  // page content rises into place, overlapping the curtain lift so both read as one
  // motion rather than two
  tl.to(onceInEls, { duration: 1.5, y: "0vh", stagger: 0.07, ease: "expo.out" }, "-=.8");
}
