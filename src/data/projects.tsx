import type { ReactNode } from "react";

export type Project = {
  index: string;
  title: string;
  category: string;
  /** Year label shown on the card. Empty string hides the badge instead of
   *  showing a year that isn't on the CV. */
  year: string;
  footerLabel: string;
  /** Extra classes applied to the card for the staggered/offset grid layout. */
  offsetClassName?: string;
  /** Bespoke graphic mockup area — each project's visual is one-off. */
  mockup: ReactNode;
  /** Live site or case-study URL. Omit when there's nowhere real to send a
   *  visitor yet — the card then shows no "view" affordance at all instead of
   *  a link that goes nowhere. */
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "FUNDASSIST.AI",
    category: "AI LEAD CAPTURE & AUTOMATION",
    year: "",
    footerLabel: "300+ LEADS · ~70% CALLBACK RATE",
    liveUrl: "https://fundassist.ai/",
    mockup: (
      <div className="w-full h-56 bg-navy rounded-xl flex flex-col justify-between p-5 relative overflow-hidden group">
        <div className="flex items-center justify-between text-white/50 text-xs font-mono">
          <span>AI LEAD CAPTURE FLOW</span>
          <span className="flex items-center gap-1 text-teal font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping"></span>
            LIVE
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-white font-syne font-bold text-lg">
            <span className="text-coral">&gt;</span> fundassist
            <span className="text-teal">.ai</span>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
            WHATSAPP + VOICE AGENT
          </span>
        </div>
        <div className="flex justify-end gap-1.5">
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-white text-navy font-bold">
            NEXT.JS
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-teal text-navy font-bold">
            ELEVENLABS
          </span>
        </div>
      </div>
    ),
  },
  {
    index: "02",
    title: "DELHI-IVF.COM",
    category: "HEALTHCARE LEAD GENERATION",
    year: "",
    footerLabel: "100+ LEADS/WEEK TO LEADSQUARED",
    offsetClassName: "lg:mt-12",
    liveUrl: "https://delhi-ivf.com/",
    mockup: (
      <div className="w-full h-56 bg-cream rounded-xl flex flex-col justify-between p-5 relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-condensed text-3xl text-navy block leading-none">
              DELHI
              <br />
              IVF
            </span>
          </div>
          <span className="text-xs font-mono bg-coral text-white px-2 py-0.5 rounded font-bold uppercase">
            -80% SPAM
          </span>
        </div>
        <div className="border-t border-navy/20 pt-3">
          <p className="text-xs text-navy/80 leading-snug font-medium">
            Next.js rebuild with a WhatsApp OTP gate and LeadSquared sync.
          </p>
        </div>
        <div className="flex justify-end gap-1.5 mt-2">
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full border border-navy text-navy font-bold bg-white">
            WHATSAPP OTP
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full border border-navy text-navy font-bold bg-white">
            LEADSQUARED
          </span>
        </div>
      </div>
    ),
  },
  {
    index: "03",
    title: "SPROUTAI.TECH",
    category: "INTERACTIVE FRONTEND · GSAP",
    year: "2026",
    footerLabel: "STARTUP NARRATIVE",
    offsetClassName: "lg:mt-4",
    liveUrl: "https://sproutai.tech/",
    mockup: (
      <div className="w-full h-56 bg-coral rounded-xl flex flex-col justify-between p-5 relative overflow-hidden">
        <div className="flex items-center justify-between text-white font-mono text-xs">
          <span>WEBFLOW BUILD</span>
          <span className="font-bold">GSAP</span>
        </div>
        <div className="flex items-center justify-center">
          <span className="font-syne font-extrabold text-2xl tracking-tighter text-white">
            sprout.ai
          </span>
        </div>
        <div className="flex justify-end gap-1.5">
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-white text-navy font-bold">
            GSAP
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-navy text-white font-bold">
            WEBFLOW
          </span>
        </div>
      </div>
    ),
  },
  {
    index: "04",
    title: "HL GIGGS",
    category: "HEADLESS COMMERCE · WOOCOMMERCE",
    year: "",
    footerLabel: "STOREFRONT SYSTEM",
    offsetClassName: "lg:mt-16",
    mockup: (
      <div className="w-full h-56 bg-white rounded-xl flex flex-col justify-between overflow-hidden relative border border-navy/10">
        <div className="w-full h-16 bg-navy p-3 flex justify-between items-center text-white">
          <span className="font-mono text-xs tracking-widest uppercase">
            HEADLESS STOREFRONT
          </span>
          <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center text-[9px]">
            •
          </div>
        </div>
        <div className="p-4 flex items-center justify-center">
          <span className="font-syne font-bold text-lg text-navy">HL Giggs</span>
        </div>
        <div className="p-3 flex justify-end gap-1.5 border-t border-navy/10">
          <span className="text-[9px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-navy text-white font-bold">
            NEXT.JS
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-navy text-white font-bold">
            WOOCOMMERCE
          </span>
        </div>
      </div>
    ),
  },
  {
    index: "05",
    title: "KCSSHOP.IN",
    category: "WORDPRESS · CUSTOM THEME",
    year: "",
    footerLabel: "SOCIAL LOGIN FLOW",
    offsetClassName: "lg:mt-6",
    liveUrl: "https://kcsshop.in/",
    mockup: (
      <div className="w-full h-56 bg-teal rounded-xl flex flex-col justify-between p-5 relative overflow-hidden">
        <div className="flex items-center justify-between text-navy/70 text-xs font-mono">
          <span>CUSTOM WORDPRESS THEME</span>
        </div>
        <div className="flex items-center justify-center">
          <span className="font-syne font-extrabold text-2xl tracking-tighter text-navy">
            kcsshop.in
          </span>
        </div>
        <div className="flex justify-end gap-1.5">
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-navy text-white font-bold">
            WORDPRESS
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-white text-navy font-bold">
            SOCIAL LOGIN
          </span>
        </div>
      </div>
    ),
  },
  {
    index: "06",
    title: "ADDITIONAL CLIENT DELIVERY",
    category: "CLIENT COORDINATION",
    year: "",
    footerLabel: "MULTI-CLIENT ROSTER",
    offsetClassName: "lg:mt-6",
    mockup: (
      <div className="w-full h-56 bg-navy rounded-xl flex flex-col justify-between overflow-hidden relative p-5">
        <div className="flex items-center justify-between text-white/50 text-xs font-mono">
          <span>CROSS-SECTOR DELIVERY</span>
          <span className="text-teal font-bold">6 PROJECTS</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 font-syne text-white/85 text-[13px] leading-snug">
          <span>Omuni Site Revamp</span>
          <span>Art &amp; Dine</span>
          <span>Stashinggs</span>
          <span>Guide2Go</span>
          <span>Vision Media</span>
          <span>Mink Lifestyle Retail</span>
        </div>
        <div className="flex justify-end gap-1.5">
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-white text-navy font-bold">
            CLIENT COORDINATION
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-teal text-navy font-bold">
            DESIGN HANDOFF
          </span>
        </div>
      </div>
    ),
  },
];
