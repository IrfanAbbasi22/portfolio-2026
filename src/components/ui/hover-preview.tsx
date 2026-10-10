"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  type RefObject,
} from "react";

export type HoverPreviewItem = {
  image: string;
  title: string;
  subtitle: string;
};

interface HoverLinkProps {
  item: HoverPreviewItem;
  children: ReactNode;
  onHoverStart: (item: HoverPreviewItem, e: ReactMouseEvent) => void;
  onHoverMove: (e: ReactMouseEvent) => void;
  onHoverEnd: () => void;
  className?: string;
}

/**
 * Inline hover target: underlines with a sweep on hover and reports its pointer
 * events to whoever renders the matching <HoverPreviewCard/>. Kept separate from the
 * card so it can sit inline inside arbitrary text (a heading, a sentence) without
 * affecting that text's own layout. The underline uses `currentColor` and `em` units
 * so it always matches the surrounding text's own color and scales with its font
 * size, rather than a fixed color/thickness baked in here.
 */
export function HoverLink({ item, children, onHoverStart, onHoverMove, onHoverEnd, className = "" }: HoverLinkProps) {
  return (
    <span
      className={`relative inline-block cursor-default after:absolute after:-bottom-[0.05em] after:left-0 after:h-[0.06em] after:w-0 after:bg-current after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:after:w-full ${className}`}
      onMouseEnter={(e) => onHoverStart(item, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      {children}
    </span>
  );
}

/**
 * Floating image card that trails the cursor while a <HoverLink/> is active. Render
 * once per group of hover links (not once per link) and drive it with useHoverPreview.
 */
export function HoverPreviewCard({
  item,
  position,
  isVisible,
  cardRef,
}: {
  item: HoverPreviewItem | null;
  position: { x: number; y: number };
  isVisible: boolean;
  cardRef: RefObject<HTMLDivElement | null>;
}) {
  if (!item) return null;

  return (
    <div
      ref={cardRef}
      aria-hidden
      className={`fixed z-[1000] pointer-events-none transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"
      }`}
      style={{ left: position.x, top: position.y }}
    >
      <div className="w-[260px] overflow-hidden rounded-2xl bg-navy p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1),0_0_60px_rgba(255,89,90,0.15)] backdrop-blur-sm">
        <img
          src={item.image}
          alt={item.title}
          className="block h-[160px] w-full rounded-xl object-cover"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <div className="px-1.5 pt-3 font-condensed text-base uppercase tracking-wide text-cream">
          {item.title}
        </div>
        <div className="px-1.5 pb-2 font-mono text-xs text-cream/50">{item.subtitle}</div>
      </div>
    </div>
  );
}

const CARD_WIDTH = 276; // card width + outer padding
const CARD_HEIGHT = 230; // approximate rendered height, for keeping it on-screen
const CURSOR_GAP = 20;

/**
 * Drives one shared <HoverPreviewCard/> for a group of <HoverLink/>s: tracks which
 * item is active, follows the cursor while hovering, and preloads every item's image
 * up front so the card never pops in blank on first hover.
 */
export function useHoverPreview(items: HoverPreviewItem[]) {
  const [activeItem, setActiveItem] = useState<HoverPreviewItem | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    items.forEach((item) => {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.src = item.image;
    });
    // Re-runs only if the list identity changes — callers should memoize/module-scope it.
  }, [items]);

  const updatePosition = useCallback((e: ReactMouseEvent | MouseEvent) => {
    let x = e.clientX - CARD_WIDTH / 2;
    let y = e.clientY - CARD_HEIGHT - CURSOR_GAP;

    if (x + CARD_WIDTH > window.innerWidth - CURSOR_GAP) x = window.innerWidth - CARD_WIDTH - CURSOR_GAP;
    if (x < CURSOR_GAP) x = CURSOR_GAP;
    if (y < CURSOR_GAP) y = e.clientY + CURSOR_GAP;

    setPosition({ x, y });
  }, []);

  const onHoverStart = useCallback(
    (item: HoverPreviewItem, e: ReactMouseEvent) => {
      setActiveItem(item);
      setIsVisible(true);
      updatePosition(e);
    },
    [updatePosition],
  );

  const onHoverMove = useCallback(
    (e: ReactMouseEvent) => {
      if (isVisible) updatePosition(e);
    },
    [isVisible, updatePosition],
  );

  const onHoverEnd = useCallback(() => setIsVisible(false), []);

  return { activeItem, position, isVisible, cardRef, onHoverStart, onHoverMove, onHoverEnd };
}
