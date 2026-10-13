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
    title: "FULL STACK WEB APPS",
    tagline: "React and Next.js frontends backed by Node.js or Laravel.",
    description:
      "End-to-end web apps: React and Next.js on the frontend, Node.js or Laravel on the backend, wired together with clean, well-structured code.",
    ctaLabel: "EXPLORE WEB DEVELOPMENT →",
  },
  {
    number: "02.",
    title: "APIS & INTEGRATIONS",
    tagline: "REST and GraphQL APIs, CRM sync, Shopify and WordPress.",
    description:
      "Connecting apps to third-party APIs and CRMs, with REST and GraphQL integrations, Shopify and WordPress platforms, and CRM sync with tools like LeadSquared.",
    ctaLabel: "EXPLORE INTEGRATIONS →",
  },
  {
    number: "03.",
    title: "AI AUTOMATION",
    tagline: "WhatsApp chatbots, voice agents, and n8n workflows.",
    description:
      "WhatsApp chatbot flows, ElevenLabs voice agents, and n8n automation that qualifies and routes leads without manual work.",
    ctaLabel: "EXPLORE AI AUTOMATION →",
  },
];
