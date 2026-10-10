import type { ReactNode } from "react";

export type Project = {
  index: string;
  title: string;
  category: string;
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
    category: "AI VOICE & LEAD AUTOMATION",
    year: "2024",
    footerLabel: "CONVERSATIONAL ENGINE",
    mockup: (
      <div className="w-full h-56 bg-navy rounded-xl flex flex-col justify-between p-5 relative overflow-hidden group">
        <div className="flex items-center justify-between text-white/50 text-[10px] font-mono">
          <span>VOICE SESSION AGENT</span>
          <span className="flex items-center gap-1 text-teal font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping"></span>
            142ms
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-white font-syne font-bold text-lg">
            <span className="text-coral">&gt;</span> fundassist
            <span className="text-teal">.ai</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
            LIVE AGENT
          </span>
        </div>
        <div className="flex justify-end gap-1.5">
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-white text-navy font-bold">
            NEXT.JS 15
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
    category: "HEALTHCARE ARCHITECTURE",
    year: "2024",
    footerLabel: "PATIENT PORTAL",
    offsetClassName: "lg:mt-12",
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
          <span className="text-[10px] font-mono bg-coral text-white px-2 py-0.5 rounded font-bold uppercase">
            -80% SPAM
          </span>
        </div>
        <div className="border-t border-navy/20 pt-3">
          <p className="text-[11px] text-navy/80 leading-snug font-medium">
            Server Actions &amp; LeadSquared synchronization infrastructure.
          </p>
        </div>
        <div className="flex justify-end gap-1.5 mt-2">
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full border border-navy text-navy font-bold bg-white">
            UI DESIGN
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full border border-navy text-navy font-bold bg-white">
            WIREFRAME
          </span>
        </div>
      </div>
    ),
  },
  {
    index: "03",
    title: "THE CENTURION ART",
    category: "HEADLESS COMMERCE · LUXURY",
    year: "2023",
    footerLabel: "FINE ART E-COMMERCE",
    mockup: (
      <div className="w-full h-56 bg-navy rounded-xl flex flex-col justify-between p-4 relative overflow-hidden">
        <div className="grid grid-cols-2 gap-2 h-36">
          <div
            className="h-full rounded overflow-hidden bg-cover bg-center border border-white/10"
            role="img"
            aria-label="The Centurion Art gallery piece, first collage image"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_XKWU5P8BQ3cwexa2RkjQ7xPeaWKVaYvEtrwjiNrIwknIGbZgYEUAa88_8oVqEHa_PAWynqIfdvM4sXPjzfFH8ZPMPjAgj2-dm5461uzmTrf1mbOSozwmIxP94rIKXk-htjtUSIdIkzxRv_Fq3_nQzf9xl_xHFO_QTr6rYmZAVv7c-5OUpO9yT3yzEnhohz80_Sjtgag4TLkw7hccz2rpg_f03h78r2W3WZb-0hLuoJuRwPtm2a23Gw')",
            }}
          />
          <div
            className="h-full rounded overflow-hidden bg-cover bg-center border border-white/10"
            role="img"
            aria-label="The Centurion Art gallery piece, second collage image"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbe_Qk-JNTOofN_rlpOL-mZfwCvZvUIjqTe1LctBAVfgPq-dRfwS-JEGreOT18M8FkwdBqt3gOgSdwa2lzNlQejxv8OVXwFW2eJUKYRtq8fxVjYZVJSanvWogl9zfvmCgbJZGRIw-LLJdF6a2lvBhsXRzPxLOyd_RSKBtrY4WUUkEvE334vlphul7Zr-tuvef5b1AQcxQMyBx6ZbtzBl36e0eyimEr1yw4o0g7noDorAD0QW4gJyDknA')",
            }}
          />
        </div>
        <div className="flex justify-end gap-1.5">
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-white text-navy font-bold">
            SHOPIFY
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-white text-navy font-bold">
            GRAPHQL
          </span>
        </div>
      </div>
    ),
  },
  {
    index: "04",
    title: "SPROUTAI.TECH",
    category: "INTERACTIVE FRONTEND · GSAP",
    year: "2024",
    footerLabel: "STARTUP NARRATIVE",
    offsetClassName: "lg:mt-4",
    mockup: (
      <div className="w-full h-56 bg-coral rounded-xl flex flex-col justify-between p-5 relative overflow-hidden">
        <div className="flex items-center justify-between text-white font-mono text-[10px]">
          <span>TIMELINE ORCHESTRATION</span>
          <span className="font-bold">60 FPS</span>
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
    index: "05",
    title: "HL GIGGS",
    category: "HEADLESS COMMERCE · WOOCOMMERCE",
    year: "2024",
    footerLabel: "STOREFRONT SYSTEM",
    offsetClassName: "lg:mt-16",
    mockup: (
      <div className="w-full h-56 bg-white rounded-xl flex flex-col justify-between overflow-hidden relative border border-navy/10">
        <div className="w-full h-16 bg-navy p-3 flex justify-between items-center text-white">
          <span className="font-mono text-[10px] tracking-widest uppercase">
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
    index: "06",
    title: "ADDITIONAL CLIENT DELIVERY",
    category: "RESPONSIVE UI & DESIGN-SYSTEM ALIGNMENT",
    year: "2021–2024",
    footerLabel: "MULTI-CLIENT ROSTER",
    offsetClassName: "lg:mt-6",
    mockup: (
      <div className="w-full h-56 bg-navy rounded-xl flex flex-col justify-between overflow-hidden relative p-5">
        <div className="flex items-center justify-between text-white/50 text-[10px] font-mono">
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
            RESPONSIVE UI
          </span>
          <span className="text-[9px] font-mono uppercase px-2.5 py-1 rounded-full bg-teal text-navy font-bold">
            DESIGN SYSTEMS
          </span>
        </div>
      </div>
    ),
  },
];
