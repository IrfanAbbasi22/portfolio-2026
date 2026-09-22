export type SkillCategory = {
  badgeLabel: string;
  badgeClassName: string;
  metricLabel: string;
  metricClassName: string;
  title: string;
  description: string;
  tags: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    badgeLabel: "CORE PLATFORMS",
    badgeClassName: "bg-navy text-cream",
    metricLabel: "L98+ FID/INP",
    metricClassName: "text-teal",
    title: "FRONTEND CORE",
    description:
      "Architecture of resilient, high-speed user interfaces and design systems.",
    tags: [
      "React 19",
      "Next.js 15 App Router",
      "TypeScript",
      "Tailwind CSS",
      "GSAP Motion",
    ],
  },
  {
    badgeLabel: "INTELLIGENCE",
    badgeClassName: "bg-coral text-white",
    metricLabel: "SUB-200MS AUDIO",
    metricClassName: "text-coral",
    title: "AI & AUTOMATION",
    description:
      "Voice agents, LLM streaming pipelines, and server-side automation.",
    tags: [
      "ElevenLabs Voice AI",
      "OpenAI Webhooks",
      "n8n Pipelines",
      "LangChain",
    ],
  },
  {
    badgeLabel: "DISTRIBUTED STATE",
    badgeClassName: "bg-navy text-white",
    metricLabel: "EVENT-DRIVEN",
    metricClassName: "text-navy/70",
    title: "ARCHITECTURE & STATE",
    description:
      "Predictable client state, optimistic updates, and bidirectional transport.",
    tags: [
      "Zustand",
      "TanStack React Query",
      "Redux Toolkit",
      "WebSockets / SSE",
    ],
  },
  {
    badgeLabel: "EDGE COMMERCE",
    badgeClassName: "bg-teal text-navy",
    metricLabel: "ZERO-LATENCY CACHING",
    metricClassName: "text-teal",
    title: "HEADLESS & PERFORMANCE",
    description:
      "Edge-rendered storefronts and multi-region database architectures.",
    tags: ["Shopify Hydrogen", "Webflow CMS", "Supabase", "Cloudflare Workers"],
  },
];

export type ExperienceRole = {
  period: string;
  company: string;
  role: string;
  roleAccentClassName: string;
  badges?: { label: string; className: string }[];
  description: string;
  tags: string[];
};

export const experienceRoles: ExperienceRole[] = [
  {
    period: "DEC 2021 — PRESENT",
    company: "NEXGEN INNOVATORS",
    role: "SENIOR FRONTEND ENGINEER",
    roleAccentClassName: "text-coral",
    badges: [
      {
        label: "Rising Star 2023",
        className: "bg-teal/20 text-navy",
      },
      {
        label: "Appreciation 2024",
        className: "bg-navy/10 text-navy",
      },
    ],
    description:
      "Headed frontend architecture across enterprise client applications utilizing Next.js 15, React 19, and headless APIs. Engineered high-integrity validation workflows cutting inbound form spam by 80%, synchronized CRM pipelines, and configured automated end-to-end testing reducing production bugs by 45%.",
    tags: ["NEXT.JS 15", "ELEVENLABS AI", "LEADSQUARED API", "CI/CD WORKFLOWS"],
  },
  {
    period: "AUG 2020 — DEC 2021",
    company: "DELHI WEB MASTER",
    role: "FRONTEND WEB DEVELOPER",
    roleAccentClassName: "text-teal",
    description:
      "Designed and deployed 20+ responsive web platforms and headless e-commerce portals. Established foundational Atomic Design Systems and CSS component libraries ensuring pixel-perfect layout parity across all viewports with rigorous cross-browser testing.",
    tags: [
      "HEADLESS COMMERCE",
      "DESIGN SYSTEMS",
      "REST & GRAPHQL",
      "PERFORMANCE TUNING",
    ],
  },
];
