"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StackCardsProps {
  children: ReactNode;
  className?: string;
  /** Sticky offset (px) from the top of the viewport for the first card. */
  topOffset?: number;
  /** Extra px added per subsequent card so stacked cards fan out and peek from behind one another. */
  offset?: number;
  /** How small an earlier card shrinks to by the time the next one has fully arrived. */
  minScale?: number;
}

/**
 * Sticky card-stack. Each StackCard pins via native `position: sticky` at an
 * increasing `top`, so later children stack above and peek out from behind earlier
 * ones as the page scrolls. As each next card scrolls up to cover the one before it,
 * that earlier card scales down (GSAP + ScrollTrigger, scrubbed) — so every card but
 * the last keeps shrinking as it's overtaken, right up to the final card settling on
 * top at full size.
 */
export function StackCards({
  children,
  className = "",
  topOffset = 96,
  offset = 24,
  minScale = 0.92,
}: StackCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cards = Children.toArray(children).filter(isValidElement) as ReactElement<StackCardProps>[];

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>("[data-stack-card]", container);

      cardEls.forEach((card, i) => {
        const nextCard = cardEls[i + 1];
        if (!nextCard) return; // the last card never recedes — it's the final, resting state

        gsap.to(card, {
          scale: minScale,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [minScale]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {cards.map((card, i) =>
        cloneElement(card, {
          key: card.key ?? i,
          style: { top: topOffset + i * offset, ...card.props.style },
        })
      )}
    </div>
  );
}

interface StackCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function StackCard({ children, className = "", style }: StackCardProps) {
  return (
    <div data-stack-card className={`sticky will-change-transform ${className}`} style={style}>
      {children}
    </div>
  );
}
