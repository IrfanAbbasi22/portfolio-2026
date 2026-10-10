import type { Service } from "@/data/services";
import MagneticLink from "@/components/ui/MagneticLink";

// Pin body matches Lucide's map-pin silhouette; its tip sits at x=20, y=46 of the
// 40x48 box, which is where the route line attaches.
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
      <span className="absolute left-0 top-3.5 w-full text-center font-mono text-[11px] font-bold leading-none text-navy">
        {label}
      </span>
    </div>
  );
}

export default function ServiceItem({
  service,
  isLast,
}: {
  service: Service;
  isLast: boolean;
}) {
  const stop = service.number.replace(".", "");
  const cta = service.ctaLabel.replace(/\s*→$/, "");

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
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-coral block mb-2">
          STOP {stop}
        </span>
        <h3 className="font-condensed text-2xl uppercase leading-none tracking-wide text-navy mb-2">
          {service.title}
        </h3>
        <p className="font-syne italic text-sm text-navy/90 mb-4">
          {service.tagline}
        </p>
        <p className="text-sm text-navy/80 leading-relaxed">
          {service.description}
        </p>
      </div>
      <div className="mt-8">
        <MagneticLink
          strength={18}
          className="font-mono text-[11px] font-bold uppercase tracking-wider text-navy hover:text-teal transition-colors inline-block"
          textClassName="inline-flex items-center gap-2"
          href="#contact"
        >
          {cta}
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
          >
            →
          </span>
        </MagneticLink>
      </div>
    </div>
  );
}
