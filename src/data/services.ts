export type Service = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  ctaLabel: string;
};

export const services: Service[] = [
  {
    number: "01.",
    title: "BRAND IDENTITY & DESIGN SYSTEMS",
    tagline:
      "Design systems that capture who you are, consistently, on every screen.",
    description:
      "A design system is more than a Figma file — it's what keeps a product looking and feeling consistent at every screen size. I build fluid typography, accessible components (WCAG 2.1 AA), and design tokens wired directly into the codebase.",
    ctaLabel: "EXPLORE DESIGN SYSTEMS →",
  },
  {
    number: "02.",
    title: "HIGH-SCALE WEB & NEXT.JS",
    tagline:
      "Interfaces engineered for people who use them, not just look at them.",
    description:
      "Modern web apps built with Next.js and headless Shopify, fast to load and reliable to use. Faster, smoother interactions mean better conversion and better search rankings.",
    ctaLabel: "EXPLORE WEB DEVELOPMENT →",
  },
  {
    number: "03.",
    title: "AI INTEGRATIONS & AUTOMATION",
    tagline: "When interface and intelligence work together seamlessly.",
    description:
      "Real-time AI voice agents, live AI chat interfaces, and automated workflows that sync data between your tools — replacing clunky forms with smart, automatic systems.",
    ctaLabel: "EXPLORE AI INTEGRATIONS →",
  },
];
