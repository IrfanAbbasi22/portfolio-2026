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
      "Architecture of visual tokens that tell the authentic truth of who you are.",
    description:
      "Building a design system means much more than drafting UI kits in Figma. It defines how digital products render, scale, and respond across thousands of screen breakpoints. Fluid typography scales, WCAG 2.1 AA accessibility, and tokens wired directly into CSS & Tailwind.",
    ctaLabel: "EXPLORE DESIGN SYSTEMS →",
  },
  {
    number: "02.",
    title: "HIGH-SCALE WEB & NEXT.JS",
    tagline:
      "Interfaces engineered for people who use them, not just look at them.",
    description:
      "Modern Next.js 15 App Router applications, headless Shopify Storefront GraphQL architectures, sub-second TTFB, and rock-solid state management. Every millisecond shaved from interaction latency directly compounds conversion and organic search rankings.",
    ctaLabel: "EXPLORE WEB ARCHITECTURE →",
  },
  {
    number: "03.",
    title: "AI INTEGRATIONS & AUTOMATION",
    tagline: "When interface and intelligence work together seamlessly.",
    description:
      "Real-time voice agent flows powered by ElevenLabs, custom LLM streaming interfaces, and n8n backend pipelines syncing CRM data seamlessly. Replacing high-friction forms with intelligent voice and automated qualification systems.",
    ctaLabel: "EXPLORE AI INTEGRATIONS →",
  },
];
