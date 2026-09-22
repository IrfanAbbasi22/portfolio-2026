"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import CurvedArc from "./CurvedArc";

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

    const isDesktop = window.innerWidth > 540;
    const arcHeight = isDesktop ? "10vh" : "5vh";
    document.documentElement.style.cursor = "wait";
    isCoveredRef.current = true;

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
  }, [router]);

  const playIn = useCallback(() => {
    const root = rootRef.current;
    const arcBottom = arcBottomRef.current;
    if (!root || !arcBottom) return;

    const isDesktop = window.innerWidth > 540;
    const arcHeight = isDesktop ? "10vh" : "5vh";

    window.scrollTo(0, 0);

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.cursor = "auto";
        isCoveredRef.current = false;
        pendingHrefRef.current = null;
      },
    });

    tl.set(arcBottom, { height: arcHeight });
    // curtain continues up and off-screen, curved trailing edge collapsing behind it
    tl.to(root, { duration: 0.8, top: "-100%", ease: "power3.inOut" });
    tl.to(arcBottom, { duration: 0.85, height: "0vh", ease: "power3.inOut" }, "-=.6");
    tl.set(root, { top: "100%" }, "+=0");
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
