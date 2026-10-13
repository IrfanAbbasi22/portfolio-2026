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
    title: "FRONTEND",
    description:
      "Building fast, reliable interfaces and design systems that hold up at scale.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Tailwind CSS",
      "Sass",
      "Bootstrap",
      "GSAP",
    ],
  },
  {
    badgeLabel: "SERVER SIDE",
    badgeClassName: "bg-navy text-white",
    metricLabel: "APIS & DATA",
    metricClassName: "text-navy/70",
    title: "BACKEND & APIS",
    description:
      "REST and GraphQL APIs, server-side logic, and the databases behind them.",
    tags: ["Node.js", "Express", "PHP", "Laravel", "REST APIs", "GraphQL", "MongoDB"],
  },
  {
    badgeLabel: "INTELLIGENCE",
    badgeClassName: "bg-coral text-white",
    metricLabel: "AUTOMATION",
    metricClassName: "text-coral",
    title: "AI & AUTOMATION",
    description:
      "WhatsApp chatbots, voice agents, and workflow automation that routes leads automatically.",
    tags: [
      "WhatsApp Chatbots",
      "ElevenLabs Voice Agents",
      "n8n Workflows",
      "Lead Routing",
    ],
  },
  {
    badgeLabel: "COMMERCE & CMS",
    badgeClassName: "bg-teal text-navy",
    metricLabel: "PLATFORMS",
    metricClassName: "text-teal",
    title: "PLATFORMS",
    description:
      "Shopify, WordPress, and Webflow builds, plus CRM integration for lead-driven sites.",
    tags: ["Shopify", "WordPress", "WooCommerce", "Webflow", "LeadSquared CRM"],
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
    period: "FEB 2025 — PRESENT",
    company: "NEXGEN INNOVATORS",
    role: "FULL STACK DEVELOPER",
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
      "Built the frontend and AI lead-capture flow for fundassist.ai (WhatsApp chatbot, n8n, and an ElevenLabs voice agent), bringing in 300+ leads with about a 70% callback conversion. Rebuilt delhi-ivf.com from React to Next.js, adding a WhatsApp OTP gate that cut spam by about 80% and now sends 100+ genuine leads a week to LeadSquared. Also built sproutai.tech on Webflow with GSAP scroll animations.",
    tags: ["NEXT.JS", "N8N", "ELEVENLABS", "WHATSAPP", "LEADSQUARED"],
  },
  {
    period: "DEC 2021 — JAN 2025",
    company: "NEXGEN INNOVATORS",
    role: "FRONTEND DEVELOPER",
    roleAccentClassName: "text-teal",
    description:
      "Built and maintained reusable React component libraries used across client projects. Improved load times on slower networks with lazy loading, dynamic imports, and better state management. Developed HL Giggs, a headless WooCommerce store on Next.js, and a custom WordPress theme with a social login flow for kcsshop.in.",
    tags: ["REACT", "WOOCOMMERCE", "WORDPRESS"],
  },
  {
    period: "AUG 2020 — DEC 2021",
    company: "DELHI WEB MASTER",
    role: "JR. WEB DEVELOPER",
    roleAccentClassName: "text-navy/70",
    description:
      "Built responsive, cross-browser websites with HTML, CSS, JavaScript, and Bootstrap for 5+ clients, turning design mockups into pixel-accurate, interactive pages with jQuery.",
    tags: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "JQUERY"],
  },
];
