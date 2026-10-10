"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";

type Variant = "pill" | "round";
/** `light` = teal fill sweeps in over a light/outlined resting state (navy text/ring),
 *  for buttons sitting on a cream page background.
 *  `dark` = the badge itself rests navy (cream text), teal fill sweeps in — Dennis's
 *  plain (non theme-dark) `.btn-round`, also for buttons on a cream background.
 *  `accent` = the badge rests teal (navy text), navy fill sweeps in — Dennis's
 *  `.theme-dark .btn-round` variant, for buttons sitting on an already-navy panel
 *  (his round buttons there use a same-hue darker fill; navy is the closest same-role
 *  darker tone available in our fixed six-color palette).
 *  `coral` = the badge rests coral (cream text), teal fill sweeps in (navy text) — our
 *  site's own established "primary CTA" color pairing (was already `bg-coral
 *  hover:bg-teal hover:text-navy` before being upgraded to the real fill-sweep here).
 *  See docs/dennis-snellenberg-spec.md §3.4 & §3.5. */
type Tone = "light" | "dark" | "accent" | "coral";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  strength?: number;
  strengthText?: number;
  className?: string;
  /** Replaces the variant's default height/padding/radius — for pages with their own
   *  spacing scale (e.g. About's `who-space-*` tokens) where the generic `em`-based
   *  pill size would be inconsistent with the rest of that page. */
  sizeClassName?: string;
  /** Replaces the default `font-mono text-[11px] font-bold uppercase tracking-widest`
   *  label styling, for the same reason. */
  textClassName?: string;
  /** Replaces the tone's default fill-sweep color, for a one-off CTA that wants a
   *  different hover/focus accent without a whole new tone. */
  fillClassName?: string;
  /** Replaces the tone's default rest/hover/focus text color classes — e.g. to keep
   *  the label a fixed color instead of swapping on hover/focus with the tone. */
  textColorClassName?: string;
};

type MagneticButtonProps = CommonProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

const variantSize: Record<Variant, string> = {
  pill: "h-[4.25em] rounded-full px-[2.5em]",
  round:
    "w-[clamp(9em,12vw,11em)] h-[clamp(9em,12vw,11em)] rounded-full px-[1em] text-center",
};

const toneRing: Record<Tone, string> = {
  light: "ring-1 ring-inset ring-navy/15",
  dark: "bg-navy",
  accent: "bg-teal",
  coral: "bg-coral",
};

const toneFill: Record<Tone, string> = {
  light: "bg-teal",
  dark: "bg-teal",
  accent: "bg-navy",
  coral: "bg-teal",
};

// Rest color -> hover color, as static Tailwind classes rather than GSAP-tweened
// inline styles — the color is correct from first paint with no JS involved at all,
// the same reason HamburgerMenu's own fill/label never flash wrong or blank.
const toneTextClass: Record<Tone, string> = {
  light: "text-navy group-hover/btn:text-cream group-focus-visible/btn:text-cream",
  dark: "text-cream group-hover/btn:text-navy group-focus-visible/btn:text-navy",
  accent: "text-navy group-hover/btn:text-cream group-focus-visible/btn:text-cream",
  coral: "text-cream group-hover/btn:text-navy group-focus-visible/btn:text-navy",
};

export default function MagneticButton({
  children,
  variant = "pill",
  tone = "light",
  strength = variant === "round" ? 100 : 40,
  strengthText = variant === "round" ? 50 : 20,
  className = "",
  sizeClassName,
  textClassName,
  fillClassName,
  textColorClassName,
  href,
  ...rest
}: MagneticButtonProps) {
  const { ref, textRef } = useMagnetic<HTMLAnchorElement | HTMLButtonElement, HTMLSpanElement>({
    strength,
    strengthText,
  });

  // `group/btn` (named) rather than the bare `group` callers sometimes put on their own
  // inner content (e.g. CTABanner's arrow-nudge icon) — keeps this button's own
  // fill/text hover state from being shadowed by, or shadowing, a caller's nested group.
  const capsuleClass = `group/btn relative inline-flex items-center justify-center overflow-hidden
    will-change-transform transform-gpu ${sizeClassName ?? variantSize[variant]} ${toneRing[tone]} ${className}`;

  const inner = (
    <>
      {/* Same fill-sweep recipe as HamburgerMenu's badge: a plain CSS
          `transition-transform` + `group-hover:translate-y-0`, no GSAP — the mechanic
          this component is meant to match sitewide. Also triggers on keyboard focus,
          not just hover, so the sweep isn't pointer-only. */}
      <span
        aria-hidden
        className={`btn-fill pointer-events-none absolute -top-1/2 -left-1/4 h-[200%] w-[150%] rounded-full
          -translate-y-[76%] transition-transform duration-500 ease-in-out will-change-transform
          group-hover/btn:translate-y-0 group-focus-visible/btn:translate-y-0 ${fillClassName ?? toneFill[tone]}`}
      />
      <span
        ref={textRef}
        className={`relative z-2 transition-colors duration-300 will-change-transform ${
          textClassName ?? "font-mono text-[11px] font-bold uppercase tracking-widest"
        } ${textColorClassName ?? toneTextClass[tone]}`}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/");
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    if (isInternal) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={capsuleClass}
          data-magnetic
          {...anchorProps}
        >
          {inner}
        </Link>
      );
    }
    return (
      <a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={capsuleClass}
        data-magnetic
        {...anchorProps}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={capsuleClass}
      data-magnetic
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}
