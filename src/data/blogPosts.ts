export interface BlogBodyBlock {
  type: "heading" | "paragraph";
  text: string;
}

export interface BlogPost {
  slug: string;
  /** Small uppercase label above the title (e.g. "SYSTEMS ARCHITECTURE"). */
  eyebrow: string;
  /** Pill badge label used on the grid cards (e.g. "AI & VOICE"). */
  badge: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** Publish date label, e.g. "OCT 2025". Only the featured post shows this on its card. */
  date: string;
  readingTime: string;
  tags: string[];
  /** Alternates the accent color used for the small dash + hover states, matching the source markup. */
  accent: "teal" | "terracotta";
  featured: boolean;
  body?: BlogBodyBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-app-router-server-components-ui-state-shift",
    eyebrow: "SYSTEMS ARCHITECTURE",
    badge: "SYSTEMS ARCHITECTURE",
    title:
      "Why Next.js App Router and Server Components Demand a Radical Shift in UI State Thinking",
    excerpt:
      "Moving state boundaries from client trees to streaming server nodes fundamentally alters how we structure component contracts, async suspense boundaries, and user interaction latency.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvdtLyIphcl0CpPhqeHoZB3tVy5QASNO26A6fgz8jQtoEzi3_3HD_DnRo_lF--wSn3CZ04gnd8aGjvyZa6uL-r6gNAL30S3whVslVIUdVDvkMEMR1RSJaEH6heUNS6zPgfv9H3P14HUw105f7L2JEdYccET7H2rj31FI95JBJK2W_v-iRSxZUO-i3o0fh8KIRpa9MPSARcX3CcXeiopJIZmzSKrYDrMptWb0eHTUkw45pelULOElm-KA",
    imageAlt:
      "Abstract structural architecture blueprint of software server nodes and user interface trees rendered in warm organic cream tones, dark teal accents, and terracotta highlights with clean geometric isometric lines",
    date: "OCT 2025",
    readingTime: "6 MIN READ",
    tags: ["NEXT.JS 15", "RSC CONTRACTS"],
    accent: "terracotta",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "For most of the last decade, the mental model for building interactive UI was simple: the client owns state, the server owns data, and a fetch call is the bridge between the two. The App Router's server components break that assumption cleanly in half. State no longer lives in one tree — it is split across a server render that streams down progressively and a client render that hydrates only the leaves that actually need interactivity.",
      },
      {
        type: "heading",
        text: "Component Contracts Change Shape",
      },
      {
        type: "paragraph",
        text: "When a component can no longer assume it will run in the browser, its contract has to be explicit about what it needs, when it needs it, and who is allowed to mutate it. Props stop being just data — they become the seam between two runtimes. Get that seam wrong and you either over-serialize (shipping megabytes of JSON across the RSC payload) or under-serialize (forcing a client component to refetch data the server already had in hand).",
      },
      {
        type: "paragraph",
        text: "In practice this means pushing derived state and formatting logic back onto the server wherever possible, and reserving client components for the narrow slice of the tree that actually responds to a pointer, a keystroke, or a timer. The old React instinct — lift state up — gets replaced by a new one: push state down, and only as far down as the interaction boundary requires.",
      },
      {
        type: "heading",
        text: "Suspense Boundaries as Latency Contracts",
      },
      {
        type: "paragraph",
        text: "Streaming turns every Suspense boundary into a promise about perceived latency. Instead of a single loading spinner gating the whole page, each boundary becomes an editorial decision: what is the user allowed to see first, and what can safely resolve a beat later? Getting this right is closer to information architecture than it is to traditional state management — you're sequencing meaning, not just data.",
      },
      {
        type: "paragraph",
        text: "The teams that adapt fastest to this shift are the ones that stop treating server and client components as a performance optimization and start treating them as two distinct programming models that happen to share a component syntax. Once that clicks, the rest of the App Router's opinions — colocated data fetching, server actions, streaming metadata — start to feel less like new rules and more like the natural conclusion of the architecture.",
      },
    ],
  },
  {
    slug: "elevenlabs-real-time-voice-agents-nextjs",
    eyebrow: "AI & VOICE",
    badge: "AI & VOICE",
    title: "Integrating ElevenLabs Real-Time Voice Agents into Next.js Workflows",
    excerpt:
      "Low-latency WebSocket streaming, chunked PCM buffering, and bidirectional browser client audio handling without main-thread jank.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApEh_YEuOY61XlSIbck-LS7rYOxrntf6WbzaPgee2BkgQhhiPKanNfcb2tyae7oI9d6kGqjzR-XpwRo5aW55zXgBmkB1smj5f8rZ2vPMaZkuprj4rDqFojEi7zuQDyZBSFDT1PHc0nS7O5SuDPqH8Hr7bVJRQsWKUd0M3lShcWEwcXRQYHZjCE4U5iVQArr3CQomAYD4GdyjpaFbZ4MQ97t9ZLJlJxPaGgJqC0rSD7WyoNKKBC2UWd5g",
    imageAlt:
      "Minimalist dark conceptual interface visualizing soundwaves and real-time machine intelligence streaming signals in sage teal and charcoal tones with crisp modern typography",
    date: "SEP 2025",
    readingTime: "5 MIN READ",
    tags: ["WEBSOCKETS", "WEB AUDIO"],
    accent: "teal",
    featured: false,
  },
  {
    slug: "sub-second-ttfb-headless-shopify-edge-computing",
    eyebrow: "COMMERCE",
    badge: "COMMERCE",
    title: "Sub-Second TTFB: Headless Shopify Meets Edge Computing",
    excerpt:
      "Benchmarking stale-while-revalidate edge caches and distributed GraphQL queries across 34 global Cloudflare worker pops.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAkPW0Pg-4hCgiLll3Tr8VRYkjwyKzjScZJjL8GFD-VebaUg1r-i7VLEaB1x6l_VIIGM35QaO8imY0xQDA5FsnK4ZAdJ5dH2fhJUuQZ24HVZ_0BQ9t29OljQRLNdVMR8z7bnnVHm-L-qM2MZkWJ8IAdUwtKzcnFhCILasUEDw9S0AnMVBwka4wUYUiWi4efvQH89JVyAtLZ1SixblN4WfnUUJtoxwznoNrRXuhvMqmPr-W7WNrEKScow",
    imageAlt:
      "Graphic data visualization map illustrating low latency global network nodes with clean cream and charcoal minimalist geometric styling",
    date: "AUG 2025",
    readingTime: "8 MIN READ",
    tags: ["EDGE ROUTING", "SHOPIFY API"],
    accent: "terracotta",
    featured: false,
  },
  {
    slug: "fluid-typography-design-tokens-figma-tailwind",
    eyebrow: "DESIGN SYSTEMS",
    badge: "DESIGN SYSTEMS",
    title: "Fluid Typography & Design Tokens: Bridging Figma to Tailwind",
    excerpt:
      "Building mathematically coherent clamping formulas that translate seamlessly from multi-layered Figma variables to atomic utility classes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUWVqmxZiQJPznO7Voo1uacqD-TcmBaQv0cY8hQMRAoxjjgzfc5sz8fxVyh3AdiQden0u2AMnVO2IXlw_9rL8WAmTO0e9d_nJnSTXYf70XW7wP0wQEXdyiBq8kidtKVcNa_6IIeOEBDC4ltHQpIx9bnMc_vJjqkj77PE46Me2YnGdQqNuMEZQHICafeSycgLnz3UUUsB5EZL2fIJpWplN1_fXypL4M3nlc8DvtOCK4wzgwTtTly2EomQ",
    imageAlt:
      "Architectural modular grid drawing with typography specimens and measurement marks in rich editorial cream and graphite grey layout",
    date: "JUL 2025",
    readingTime: "4 MIN READ",
    tags: ["FIGMA TOKENS", "CSS CLAMP"],
    accent: "teal",
    featured: false,
  },
  {
    slug: "eliminating-spam-edge-nextjs-server-actions",
    eyebrow: "ENGINEERING",
    badge: "ENGINEERING",
    title: "Eliminating Spam at the Edge: Pipelines with Next.js Server Actions",
    excerpt:
      "Honeypots, cryptographic token timestamps, and lightweight fingerprinting evaluated during streaming execution with zero client script bloat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCB8J4HFoBev1XJ72mtkbQcVuhf_R2tWCu5wXyb6-C-vjDUaWKpV46CH6V_8mlII0GScKY-xsGXSGbr5LA8jZnj1A0ELUuW9Rm9OPIx17xYG7so7swglWpYgqkxm7sRQGdcJc6nlJxpghWbohvwTaTNL-C8nnccEp1ZTaLZyN4FxXUOqEg7s5eWq0B8m1RrokAimQdz6EQ75lXGznwOh0ymzrty4Fd5NBSNqzGpGD4pTLQeOvAALamVTA",
    imageAlt:
      "Technical code diagram showing server action data validation logic and security edge rules in charcoal and warm terracotta tones",
    date: "JUN 2025",
    readingTime: "6 MIN READ",
    tags: ["SERVER ACTIONS", "SECURITY"],
    accent: "terracotta",
    featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured);
}

export function getOtherPosts(slug: string): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug);
}
