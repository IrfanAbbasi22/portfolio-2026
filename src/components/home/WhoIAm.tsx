"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticLink from "@/components/ui/MagneticLink";
import { HoverLink, HoverPreviewCard, useHoverPreview, type HoverPreviewItem } from "@/components/ui/hover-preview";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STACK_PREVIEWS: Record<"react" | "nextjs" | "ai", HoverPreviewItem> = {
  react: {
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    title: "React",
    subtitle: "Component-driven client runtimes",
  },
  nextjs: {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    title: "Next.js",
    subtitle: "App Router, server actions, edge rendering",
  },
  ai: {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    title: "AI Systems",
    subtitle: "Voice agents, LLM streaming, automation",
  },
};

const STACK_ITEMS = Object.values(STACK_PREVIEWS);

/** Splits plain text into individually fade-able word spans, each its own
 * `.fade-word` scroll-reveal target. A trailing space lives inside the span (not
 * between spans) so the words still wrap normally as text, not as isolated boxes. */
function FadeWords({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="fade-word">
          {word}{" "}
        </span>
      ))}
    </>
  );
}

/** A fade-reveal word that's also one of the hoverable tech-preview links — coral and
 * semibold at rest so it reads as interactive content inside the paragraph, not just
 * on hover. Coral over teal: teal is close enough to the lavender panel's own
 * lightness/saturation to read as barely-there, where coral is a hard contrast swing. */
function FadeHoverLink({
  children,
  ...props
}: Omit<Parameters<typeof HoverLink>[0], "className">) {
  return (
    <HoverLink {...props} className="fade-word text-coral font-semibold">
      {children}
    </HoverLink>
  );
}

export default function WhoIAm() {
  const { activeItem, position, isVisible, cardRef: previewCardRef, onHoverStart, onHoverMove, onHoverEnd } =
    useHoverPreview(STACK_ITEMS);
  const perspectiveRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const perspective = perspectiveRef.current;
    const panel = panelRef.current;
    const heading = headingRef.current;
    if (!perspective || !panel || !heading) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Scroll-tilt reveal: the panel starts rotated back in 3D space and slightly
      // oversized, settling flat and to its normal scale as it scrolls into view —
      // ported from Aceternity's ContainerScroll, swapping framer-motion's
      // useScroll/useTransform for a scrubbed ScrollTrigger on the same two
      // properties. gsap.matchMedia mirrors that component's own mobile/desktop
      // scale split (it used window.innerWidth<=768 + a resize listener; matchMedia
      // is GSAP's built-in equivalent and re-evaluates automatically).
      const mm = gsap.matchMedia();
      mm.add(
        { isMobile: "(max-width: 768px)", isDesktop: "(min-width: 769px)" },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };
          gsap.fromTo(
            panel,
            { rotateX: 20, scale: isMobile ? 0.92 : 1.05 },
            {
              rotateX: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: perspective,
                start: "top 85%",
                end: "top 35%",
                scrub: true,
              },
            },
          );
        },
      );

      // Word-by-word text reveal: each word owns an equal slice of the scroll
      // range, so progress through the paragraph tracks progress through the
      // scroll — ported from the magic-text reference's per-word
      // useTransform(progress, [i/n, (i+1)/n], [0,1]) mapping, built here as a
      // GSAP timeline (words placed back-to-back at integer positions) scrubbed by
      // one ScrollTrigger, which normalizes scroll progress against the timeline's
      // total length the same way.
      const words = gsap.utils.toArray<HTMLElement>(".fade-word", heading);
      gsap.set(words, { opacity: 0.2 });
      const wordTl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 90%",
          end: "top 25%",
          scrub: true,
        },
      });
      words.forEach((word, i) => {
        wordTl.to(word, { opacity: 1, ease: "none", duration: 1 }, i);
      });
    }, perspective);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-24 md:mb-32"
      id="who-i-am"
    >
      <div ref={perspectiveRef} className="relative" style={{ perspective: "1200px" }}>
        <div
          ref={panelRef}
          className="w-full bg-lavender rounded-[2rem] md:rounded-home-4xl lg:rounded-home-5xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-xl text-white will-change-transform transform-gpu"
          style={{ transformOrigin: "top center" }}
        >
          <div className="max-w-6xl">
            <h2
              ref={headingRef}
              className="font-syne text-[32px] sm:text-[46px] md:text-[62px] lg:text-[76px] leading-[1.08] tracking-[-0.01em] font-normal"
            >
              <FadeWords text="I am a frontend developer. 5+ years shaping digital ideas into resilient, high-conversion realities. Specializing in" />{" "}
              <FadeHoverLink
                item={STACK_PREVIEWS.react}
                onHoverStart={onHoverStart}
                onHoverMove={onHoverMove}
                onHoverEnd={onHoverEnd}
              >
                React
              </FadeHoverLink>
              <span className="fade-word">, </span>
              <FadeHoverLink
                item={STACK_PREVIEWS.nextjs}
                onHoverStart={onHoverStart}
                onHoverMove={onHoverMove}
                onHoverEnd={onHoverEnd}
              >
                Next.js
              </FadeHoverLink>
              <FadeWords text=", and" />{" "}
              <FadeHoverLink
                item={STACK_PREVIEWS.ai}
                onHoverStart={onHoverStart}
                onHoverMove={onHoverMove}
                onHoverEnd={onHoverEnd}
              >
                AI Systems
              </FadeHoverLink>{" "}
              <FadeWords text="for founders who have something of value and need it to be seen." />
            </h2>
            <div className="mt-12 md:mt-16">
              <MagneticLink
                strength={18}
                className="font-mono text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white/90 hover:text-navy transition-colors inline-block"
                href="/about"
              >
                (WHO I AM)
              </MagneticLink>
            </div>
          </div>
        </div>
      </div>

      <HoverPreviewCard item={activeItem} position={position} isVisible={isVisible} cardRef={previewCardRef} />
    </section>
  );
}
