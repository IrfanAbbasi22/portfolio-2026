import { forwardRef } from "react";

type CurvedArcProps = {
  /** Which edge of the curtain this arc lives on. */
  edge: "top" | "bottom";
};

/**
 * The "oversized circle in a clipped wrapper" trick behind the preloader's and page
 * transition's curved edge (docs/dennis-snellenberg-spec.md §1.1). The wrapper's height
 * is animated 0 -> N via GSAP from the parent; because the circle inside is sized at
 * several times the wrapper's height, only its topmost/bottommost arc is ever visible,
 * reading as a smooth curved wipe rather than a rectangular one.
 */
const CurvedArc = forwardRef<HTMLDivElement, CurvedArcProps>(function CurvedArc(
  { edge },
  ref,
) {
  const isTop = edge === "top";
  return (
    <div
      ref={ref}
      className={`absolute left-0 w-full overflow-hidden h-0 will-change-[height] ${
        isTop ? "top-0" : "bottom-0"
      }`}
      style={{ zIndex: 2 }}
      aria-hidden
    >
      <div
        className={`absolute left-0 w-full bg-navy rounded-[50%] ${
          isTop ? "bottom-0 translate-y-1/2" : "top-0 -translate-y-1/2"
        }`}
        style={{ height: "745%" }}
      />
    </div>
  );
});

export default CurvedArc;
