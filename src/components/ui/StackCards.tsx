import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

interface StackCardsProps {
  children: ReactNode;
  className?: string;
  /** Sticky offset (px) from the top of the viewport for the first card. */
  topOffset?: number;
  /** Extra px added per subsequent card so stacked cards fan out and peek from behind one another. */
  offset?: number;
}

/**
 * Sticky card-stack. Each StackCard pins via native `position: sticky` at an
 * increasing `top`, so later children stack above and peek out from behind
 * earlier ones as the page scrolls — the last child ends up fully on top.
 */
export function StackCards({
  children,
  className = "",
  topOffset = 96,
  offset = 24,
}: StackCardsProps) {
  const cards = Children.toArray(children).filter(isValidElement) as ReactElement<StackCardProps>[];

  return (
    <div className={`relative w-full ${className}`}>
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
    <div className={`sticky ${className}`} style={style}>
      {children}
    </div>
  );
}
