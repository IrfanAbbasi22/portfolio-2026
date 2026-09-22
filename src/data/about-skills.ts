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
      "High-performance web architecture, type-safe interfaces, and kinetic micro-interactions built for scale.",
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
      "Agentic multi-agent systems, multimodal voice endpoints, and enterprise-grade webhook synchronization.",
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
      "Robust data contracts, asynchronous handler engines, serverless handlers, and performant query layers.",
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
      "Decoupled storefronts and content modeling delivering uncompromising conversion rates and fast caching.",
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
      "From Figma component architecture into semantic DOM trees, adhering strictly to WCAG 2.1 AA accessibility guidelines.",
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
      "Streamlined pipelines, edge compute orchestration, branch previews, and modern bundler optimization.",
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
