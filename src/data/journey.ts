export type JourneyMilestone = {
  stop: string;
  company: string;
  role: string;
  period: string;
  /** Condensed from the full bullets in experienceRoles (skills.ts) — the
   *  teaser links through to the full Experience Timeline for detail. */
  description: string;
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    stop: "01",
    company: "DELHI WEB MASTER",
    role: "JR. WEB DEVELOPER",
    period: "AUG 2020 — DEC 2021",
    description:
      "Built responsive, cross-browser websites with HTML, CSS, JavaScript and Bootstrap for 5+ clients.",
  },
  {
    stop: "02",
    company: "NEXGEN INNOVATORS",
    role: "FRONTEND DEVELOPER",
    period: "DEC 2021 — JAN 2025",
    description:
      "Built reusable React component libraries, a headless WooCommerce store (HL Giggs), and a custom WordPress theme for kcsshop.in.",
  },
  {
    stop: "03",
    company: "NEXGEN INNOVATORS",
    role: "FULL STACK DEVELOPER",
    period: "FEB 2025 — PRESENT",
    description:
      "Building AI lead-capture flows with WhatsApp chatbots, n8n, and ElevenLabs voice agents, and rebuilding client sites in Next.js.",
  },
];
