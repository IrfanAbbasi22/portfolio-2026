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
    role: "FRONTEND WEB DEVELOPER",
    period: "AUG 2020 — DEC 2021",
    description:
      "Built and launched 20+ responsive websites and online stores, and created reusable design systems and component libraries.",
  },
  {
    stop: "02",
    company: "NEXGEN INNOVATORS",
    role: "SENIOR FRONTEND ENGINEER",
    period: "DEC 2021 — PRESENT",
    description:
      "Leading frontend development for enterprise client applications, built with Next.js 15, React 19, and modern APIs.",
  },
];
