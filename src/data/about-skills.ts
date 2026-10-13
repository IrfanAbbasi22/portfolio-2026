export type SkillTagVariant = "default" | "inverted" | "highlight";

export interface SkillTag {
  label: string;
  variant?: SkillTagVariant;
}

export interface SkillCategory {
  icon: string;
  title: string;
  badge: string;
  description: string;
  tags: SkillTag[];
  variant: "light" | "dark";
}

export const skillCategories: SkillCategory[] = [
  {
    icon: "layers",
    title: "Frontend",
    badge: "Primary",
    description:
      "Fast, reliable interfaces with smooth animations and type-safe code that holds up as a product grows.",
    variant: "light",
    tags: [
      { label: "React" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "JavaScript (ES6+)" },
      { label: "Redux" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Sass" },
      { label: "Tailwind CSS" },
      { label: "Bootstrap" },
      { label: "GSAP" },
    ],
  },
  {
    icon: "dns",
    title: "Backend & APIs",
    badge: "Integration",
    description:
      "REST and GraphQL APIs, server-side logic, and the databases behind them.",
    variant: "dark",
    tags: [
      { label: "Node.js", variant: "inverted" },
      { label: "Express", variant: "inverted" },
      { label: "PHP", variant: "inverted" },
      { label: "Laravel", variant: "inverted" },
      { label: "REST APIs", variant: "inverted" },
      { label: "GraphQL", variant: "highlight" },
      { label: "MongoDB", variant: "inverted" },
    ],
  },
  {
    icon: "neurology",
    title: "AI & Automation",
    badge: "Specialized",
    description:
      "WhatsApp chatbots, voice agents, and automated workflows that route leads without manual work.",
    variant: "dark",
    tags: [
      { label: "WhatsApp Chatbots", variant: "inverted" },
      { label: "ElevenLabs Voice Agents", variant: "highlight" },
      { label: "n8n Workflows", variant: "inverted" },
      { label: "Lead Routing", variant: "inverted" },
    ],
  },
  {
    icon: "storefront",
    title: "Platforms",
    badge: "Commerce",
    description:
      "Online stores and content systems across the platforms clients actually use.",
    variant: "light",
    tags: [
      { label: "Shopify (Liquid, GraphQL)" },
      { label: "WordPress" },
      { label: "WooCommerce" },
      { label: "Webflow" },
      { label: "LeadSquared CRM" },
    ],
  },
  {
    icon: "draw",
    title: "Design & Tools",
    badge: "Craft",
    description:
      "Turning Figma and Adobe designs into clean code, with the everyday tools that keep collaboration smooth.",
    variant: "light",
    tags: [
      { label: "Figma" },
      { label: "Adobe XD" },
      { label: "Adobe Photoshop" },
      { label: "Git & GitHub" },
      { label: "VS Code" },
      { label: "Postman" },
      { label: "npm" },
      { label: "AWS (basic)" },
    ],
  },
];
