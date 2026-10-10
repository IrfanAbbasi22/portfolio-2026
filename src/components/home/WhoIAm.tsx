"use client";

import MagneticLink from "@/components/ui/MagneticLink";
import { HoverLink, HoverPreviewCard, useHoverPreview, type HoverPreviewItem } from "@/components/ui/hover-preview";

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

export default function WhoIAm() {
  const { activeItem, position, isVisible, cardRef, onHoverStart, onHoverMove, onHoverEnd } =
    useHoverPreview(STACK_ITEMS);

  return (
    <section
      className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-24 md:mb-32"
      id="who-i-am"
    >
      <div className="w-full bg-lavender rounded-[2rem] md:rounded-home-4xl lg:rounded-home-5xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-xl text-white">
        <div className="max-w-6xl">
          <h2 className="font-syne text-[32px] sm:text-[46px] md:text-[62px] lg:text-[76px] leading-[1.08] uppercase tracking-[-0.01em] font-normal">
            I AM A FRONTEND ARCHITECT. 5+ YEARS SHAPING DIGITAL IDEAS INTO
            RESILIENT, HIGH-CONVERSION REALITIES. SPECIALIZING IN{" "}
            <HoverLink
              item={STACK_PREVIEWS.react}
              onHoverStart={onHoverStart}
              onHoverMove={onHoverMove}
              onHoverEnd={onHoverEnd}
            >
              REACT
            </HoverLink>
            ,{" "}
            <HoverLink
              item={STACK_PREVIEWS.nextjs}
              onHoverStart={onHoverStart}
              onHoverMove={onHoverMove}
              onHoverEnd={onHoverEnd}
            >
              NEXT.JS
            </HoverLink>
            , AND{" "}
            <HoverLink
              item={STACK_PREVIEWS.ai}
              onHoverStart={onHoverStart}
              onHoverMove={onHoverMove}
              onHoverEnd={onHoverEnd}
            >
              AI SYSTEMS
            </HoverLink>{" "}
            FOR FOUNDERS WHO HAVE SOMETHING OF VALUE AND NEED IT TO BE SEEN.
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

      <HoverPreviewCard item={activeItem} position={position} isVisible={isVisible} cardRef={cardRef} />
    </section>
  );
}
