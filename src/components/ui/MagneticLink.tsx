"use client";

import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";

type MagneticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
  href: string;
  strength?: number;
  /** Defaults to ~half of `strength` — Dennis's real buttons always move the inner
   *  text/icon layer *less* than the outer element (his JS passes separate
   *  `data-strength`/`data-strength-text` values, never equal ones); that gap between
   *  the two is what actually reads as "magnetic parallax" rather than the whole
   *  thing just sliding as one rigid block. */
  strengthText?: number;
  className?: string;
  /** Classes for the inner wrapper that actually gets the (smaller) text offset —
   *  matches Dennis's `.btn-text` being the real flex/layout container while
   *  `.btn-click` (here, the outer link) is just a sizing/positioning shell. Put
   *  layout classes (flex, gap, justify-between...) here, not on `className`, or
   *  multi-child content won't lay out the way it did before this wrapper existed. */
  textClassName?: string;
};

/**
 * Magnetic pointer-follow link (docs/dennis-snellenberg-spec.md §3.2) without
 * touching visual styling — the element keeps whatever className/design it already
 * has. Children are wrapped in an inner span that gets its own (smaller) offset,
 * matching Dennis's two-layer outer/inner mechanic.
 *
 * Renders next/link for internal routes (href starting with "/") so client-side
 * routing still applies, and a plain <a> for mailto:/tel:/external hrefs — same
 * split MagneticButton uses, since next/link isn't meant for non-route hrefs.
 */
export default function MagneticLink({
  href,
  strength = 20,
  strengthText,
  className,
  textClassName = "inline-flex items-center",
  children,
  ...props
}: MagneticLinkProps) {
  const { ref, textRef } = useMagnetic<HTMLAnchorElement, HTMLSpanElement>({
    strength,
    strengthText: strengthText ?? strength / 2,
  });

  const inner = (
    <span ref={textRef} className={`will-change-transform ${textClassName}`}>
      {children}
    </span>
  );

  if (href.startsWith("/")) {
    return (
      <Link ref={ref} href={href} className={className} data-magnetic {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <a ref={ref} href={href} className={className} data-magnetic {...props}>
      {inner}
    </a>
  );
}
