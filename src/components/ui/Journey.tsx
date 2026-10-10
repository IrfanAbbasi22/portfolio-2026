import type { ReactNode } from "react";

// Pin body matches Lucide's map-pin silhouette; its tip sits at x=20, y=46 of the
// 40x48 box, which is where the route line attaches. Shared by any section that
// lays out an ordered set of "stops" (services, career milestones, process steps...)
// as a map-pin route — see ServiceItem.tsx for the original, single-purpose version
// this was generalized from.
function MapPin({ label }: { label: string }) {
  return (
    <div className="absolute left-0 top-0 h-12 w-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-2">
      <svg viewBox="0 0 40 48" className="h-full w-full drop-shadow-sm" aria-hidden>
        <path
          d="M20 46C20 46 35 32 35 19a15 15 0 0 0-30 0c0 13 15 27 15 27Z"
          className="fill-coral"
        />
        <circle cx="20" cy="19" r="10" className="fill-cream" />
      </svg>
      <span className="absolute left-0 top-3.5 w-full text-center font-mono text-xs font-bold leading-none text-navy">
        {label}
      </span>
    </div>
  );
}

export type JourneyStopProps = {
  /** Stop number/label shown inside the pin and next to the eyebrow, e.g. "01". */
  stop: string;
  /** Eyebrow word before the stop number — "STOP" for services, "ROLE" for a
   *  career journey, etc. */
  eyebrow?: string;
  title: string;
  tagline?: string;
  description: string;
  /** Hides the outgoing route line/chevrons for the final stop in a track. */
  isLast?: boolean;
  /** Optional footer content (a CTA link, badges, …) rendered below the copy. */
  children?: ReactNode;
};

export function JourneyStop({
  stop,
  eyebrow = "STOP",
  title,
  tagline,
  description,
  isLast,
  children,
}: JourneyStopProps) {
  return (
    <div className="group relative flex flex-col justify-between pl-14 pb-14 lg:pl-0 lg:pb-0 lg:pt-20">
      {/* Ground marker: pulse ring under the pin's tip */}
      <span
        aria-hidden
        className="route-pin-pulse absolute left-5 top-[42px] h-2 w-6 rounded-full bg-coral/60"
      />
      <MapPin label={stop} />

      {/* Route to the next stop: flowing dashes + chevrons travelling along it */}
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-[19px] top-[46px] h-full w-[2px] text-navy/30 lg:left-5 lg:h-[2px] lg:w-[calc(100%+3rem)]"
        >
          <span className="route-dash absolute inset-0" />
          {[0, 1.2, 2.4].map((delay) => (
            <svg
              key={delay}
              viewBox="0 0 12 12"
              className="route-arrow -ml-[5px] -mt-[5px] h-3 w-3 text-coral lg:ml-0 lg:mt-0 lg:-translate-y-[5px] rotate-90 lg:rotate-0"
              style={{ animationDelay: `${delay}s` }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 1.5 8.5 6 3 10.5" />
            </svg>
          ))}
        </span>
      )}

      <div>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-coral block mb-2">
          {eyebrow} {stop}
        </span>
        <h3 className="font-condensed text-2xl uppercase leading-none tracking-wide text-navy mb-2">
          {title}
        </h3>
        {tagline && (
          <p className="font-syne italic text-sm text-navy/90 mb-4">{tagline}</p>
        )}
        <p className="text-sm text-navy/80 leading-relaxed">{description}</p>
      </div>

      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}

/** Lays out a set of `JourneyStop`s. Column count is the caller's call (via
 *  `className`) since a 2-stop career track and a 3-stop services track don't
 *  want the same grid. */
export function JourneyGrid({
  children,
  className = "grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-0",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
