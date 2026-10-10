"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CurvedArc from "./CurvedArc";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reproduces dennissnellenberg.com's Barba.js page-transition choreography
 * (docs/dennis-snellenberg-spec.md §2) as a Next.js App Router-native equivalent:
 * intercept same-origin link clicks, play the curtain closed, navigate, play it open.
 */
export default function PageTransitionProvider() {
  const pathname = usePathname();
  const router = useRouter();

  const rootRef = useRef<HTMLDivElement>(null);
  const arcTopRef = useRef<HTMLDivElement>(null);
  const arcBottomRef = useRef<HTMLDivElement>(null);
  const pendingHrefRef = useRef<string | null>(null);
  const isCoveredRef = useRef(false);
  const previousPathnameRef = useRef(pathname);

  const playOut = useCallback(() => {
    const root = rootRef.current;
    const arcTop = arcTopRef.current;
    if (!root || !arcTop) return;

    document.documentElement.style.cursor = "wait";
    isCoveredRef.current = true;

    // Safety net: if building/running this timeline throws, `isCoveredRef` would
    // otherwise stay `true` forever — the curtain is left fully covering the screen
    // with no `playIn()` ever queued to lift it, and no click would get through to
    // retry (clicks are ignored while covered). Fall back to a plain navigation.
    try {
      const isDesktop = window.innerWidth > 540;
      const arcHeight = isDesktop ? "10vh" : "5vh";

      const tl = gsap.timeline({
        onComplete: () => {
          const href = pendingHrefRef.current;
          if (href) router.push(href);
        },
      });

      tl.set(root, { top: "100%" });
      tl.set(arcTop, { height: arcHeight });
      // curtain rises from the bottom of the screen
      tl.to(root, { duration: 0.5, top: "0%", ease: "power4.in" });
      // mirrored arc at the top edge, growing in sync
      tl.to(arcTop, { duration: 0.4, height: "0vh", ease: "power4.in" }, "-=.4");
    } catch (error) {
      console.error("Page transition failed to start; navigating without it.", error);
      document.documentElement.style.cursor = "auto";
      isCoveredRef.current = false;
      const href = pendingHrefRef.current;
      pendingHrefRef.current = null;
      if (href) router.push(href);
    }
  }, [router]);

  const playIn = useCallback(() => {
    const root = rootRef.current;
    const arcBottom = arcBottomRef.current;
    if (!root || !arcBottom) return;

    window.scrollTo(0, 0);

    // Safety net, same reasoning as playOut's: a throw here would otherwise leave
    // `isCoveredRef` stuck `true` and the curtain stuck fully covering the new page,
    // with nothing left to lift it.
    const reveal = () => {
      document.documentElement.style.cursor = "auto";
      isCoveredRef.current = false;
      pendingHrefRef.current = null;
      root.style.top = "100%";
      gsap.set(document.querySelectorAll<HTMLElement>("main .once-in"), {
        clearProps: "transform",
      });

      // Components that live in the root layout (Footer, with its scroll-scrubbed
      // reveal animation) never unmount between pages, so their ScrollTriggers keep
      // whatever start/end pixel positions they calculated on first mount — against
      // whatever page happened to load first. On a page with very different content
      // height, those positions are wrong, which reads as both "the animation doesn't
      // work" and a footer stuck mid-tween (a lingering offset that eats into its own
      // bottom spacing). Refreshing after the new page has settled recalculates every
      // active trigger against the page that's actually on screen now.
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    try {
      const isDesktop = window.innerWidth > 540;
      const arcHeight = isDesktop ? "10vh" : "5vh";

      // The new page's content — already in the DOM by the time this runs, but the
      // curtain is still fully covering it, so it's safe to offset it here with no
      // flash (docs: dennis-animation-breakdown/02-page-transition.md).
      const onceInEls = document.querySelectorAll<HTMLElement>("main .once-in");
      gsap.set(onceInEls, { y: isDesktop ? "50vh" : "20vh" });

      const tl = gsap.timeline({ onComplete: reveal });

      tl.set(arcBottom, { height: arcHeight });
      // curtain continues up and off-screen, curved trailing edge collapsing behind it
      tl.to(root, { duration: 0.8, top: "-100%", ease: "power3.inOut" });
      tl.to(arcBottom, { duration: 0.85, height: "0vh", ease: "power3.inOut" }, "-=.6");
      tl.set(root, { top: "100%" }, "+=0");
      // new page's content rises into place, overlapping the curtain's lift
      tl.to(
        onceInEls,
        { duration: 1, y: "0vh", stagger: 0.05, ease: "expo.out" },
        "-=.6",
      );
    } catch (error) {
      console.error("Page transition failed to finish; revealing page without it.", error);
      reveal();
    }
  }, []);

  // Intercept internal <Link>/<a> clicks site-wide.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;

      const url = new URL(href, window.location.origin);
      const destination = url.pathname + url.search;
      const current = window.location.pathname + window.location.search;

      // Same-page anchor (e.g. "/#selected-works" while already on "/"): let the
      // browser/Next.js handle the native scroll, no curtain needed.
      if (url.pathname === window.location.pathname && url.hash) return;
      if (destination === current) return;

      // A transition is already mid-flight (curtain closing, navigating, or
      // still opening back up) — ignore the click rather than starting a second
      // GSAP timeline on the same curtain elements, which would fight the first.
      if (isCoveredRef.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      pendingHrefRef.current = href;
      playOut();
    }

    // Capture phase, deliberately: Next's <Link> handles the click via React's
    // bubble-phase synthetic event system and calls router.push() itself as soon
    // as it sees the event, before a same-phase document listener added later
    // would run. Listening on capture guarantees this handler — and its
    // preventDefault() — runs first, so Link correctly sees e.defaultPrevented
    // and skips its own navigation.
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [playOut]);

  // Once Next.js has swapped the page content in (pathname changed while we're
  // still covered), reveal it.
  useEffect(() => {
    if (previousPathnameRef.current === pathname) return;
    previousPathnameRef.current = pathname;
    if (isCoveredRef.current) {
      playIn();
    }
  }, [pathname, playIn]);

  return (
    <div
      ref={rootRef}
      className="fixed left-0 right-0 h-screen w-full z-[300] bg-navy pointer-events-none"
      style={{ top: "100%" }}
      aria-hidden
    >
      <CurvedArc ref={arcTopRef} edge="top" />
      <CurvedArc ref={arcBottomRef} edge="bottom" />
    </div>
  );
}
