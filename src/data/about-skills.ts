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
    title: "Frontend Core",
    badge: "Primary",
    description:
      "Fast, reliable interfaces with smooth animations and type-safe code that holds up as a product grows.",
    variant: "light",
    tags: [
      { label: "React" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "JavaScript (ES6+)" },
      { label: "Tailwind CSS" },
      { label: "GSAP" },
      { label: "HTML5 / CSS3" },
      { label: "Redux Toolkit" },
    ],
  },
  {
    icon: "neurology",
    title: "AI & Automation",
    badge: "Specialized",
    description:
      "AI voice agents, automated workflows, and reliable data syncing between business tools.",
    variant: "dark",
    tags: [
      { label: "ElevenLabs Voice AI", variant: "inverted" },
      { label: "n8n Workflows", variant: "inverted" },
      { label: "OpenAI API", variant: "highlight" },
      { label: "LeadSquared CRM", variant: "inverted" },
      { label: "Webhook Pipelines", variant: "inverted" },
    ],
  },
  {
    icon: "dns",
    title: "Backend & APIs",
    badge: "Integration",
    description:
      "Reliable APIs, serverless functions, and fast, well-structured data queries.",
    variant: "light",
    tags: [
      { label: "Node.js" },
      { label: "Express" },
      { label: "RESTful APIs" },
      { label: "GraphQL" },
      { label: "Serverless Functions" },
    ],
  },
  {
    icon: "storefront",
    title: "Platforms & CMS",
    badge: "Commerce",
    description:
      "Fast, flexible online stores and content systems built to turn visitors into customers.",
    variant: "light",
    tags: [
      { label: "Headless Shopify" },
      { label: "WordPress" },
      { label: "WooCommerce" },
      { label: "Webflow" },
      { label: "Strapi Headless" },
    ],
  },
  {
    icon: "draw",
    title: "Design & Systems",
    badge: "Craft",
    description:
      "Turning Figma designs into clean, accessible code that meets WCAG 2.1 AA standards.",
    variant: "light",
    tags: [
      { label: "Figma → Code" },
      { label: "Design Tokens" },
      { label: "Fluid Responsiveness" },
      { label: "Accessibility (a11y)" },
      { label: "Design Engineering" },
    ],
  },
  {
    icon: "deployed_code",
    title: "Tools & DevOps",
    badge: "CI / CD",
    description:
      "Automated deployments, fast builds, and a preview link for every change before it goes live.",
    variant: "light",
    tags: [
      { label: "Git / GitHub" },
      { label: "Vercel Edge" },
      { label: "Docker Basics" },
      { label: "Postman" },
      { label: "Vite" },
      { label: "Webpack" },
    ],
  },
];
