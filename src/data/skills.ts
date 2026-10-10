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
    metricLabel: "FAST & RESPONSIVE UI",
    metricClassName: "text-teal",
    title: "FRONTEND CORE",
    description:
      "Building fast, reliable interfaces and design systems that hold up at scale.",
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
    metricLabel: "FAST VOICE RESPONSE",
    metricClassName: "text-coral",
    title: "AI & AUTOMATION",
    description:
      "AI voice agents, real-time AI responses, and backend automation.",
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
    metricLabel: "REAL-TIME UPDATES",
    metricClassName: "text-navy/70",
    title: "STATE MANAGEMENT",
    description:
      "Reliable app state, instant UI updates, and real-time data syncing.",
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
    metricLabel: "INSTANT-LOAD CACHING",
    metricClassName: "text-teal",
    title: "COMMERCE & PERFORMANCE",
    description:
      "Fast-loading online stores and globally distributed databases.",
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
      "Led frontend development for enterprise client applications using Next.js 15, React 19, and headless APIs. Built form validation that cut spam submissions by 80%, connected CRM systems, and set up automated testing that reduced bugs by 45%.",
    tags: ["NEXT.JS 15", "ELEVENLABS AI", "LEADSQUARED API", "CI/CD WORKFLOWS"],
  },
  {
    period: "AUG 2020 — DEC 2021",
    company: "DELHI WEB MASTER",
    role: "FRONTEND WEB DEVELOPER",
    roleAccentClassName: "text-teal",
    description:
      "Built and launched 20+ responsive websites and online stores. Created reusable design systems and component libraries, tested thoroughly across browsers and screen sizes.",
    tags: [
      "HEADLESS COMMERCE",
      "DESIGN SYSTEMS",
      "REST & GRAPHQL",
      "PERFORMANCE TUNING",
    ],
  },
];
