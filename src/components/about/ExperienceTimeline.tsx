import { StackCard, StackCards } from "@/components/ui/StackCards";

const fullStackRoleHighlights = [
  "Built the frontend and AI lead-capture flow for fundassist.ai: a WhatsApp chatbot qualifies visitors, then n8n hands them to an ElevenLabs voice agent or books an expert call, with every lead logged to Google Sheets. Brought in 300+ leads, with about 70% converting to a callback.",
  "Rebuilt delhi-ivf.com from React to Next.js to fix SEO and page speed issues. Added WhatsApp OTP verification before the enquiry form submits, cutting spam by about 80%, and the site now sends 100+ genuine leads a week to LeadSquared.",
  "Built sproutai.tech on Webflow with GSAP scroll animations (delivered Aug 2026).",
];

const frontendRoleHighlights = [
  "Built and maintained reusable React component libraries used across client projects, adding new components to the shared design system when needed.",
  "Improved load times on slower networks with lazy loading, dynamic imports and better state management, plus proper loading, empty and error states for API data.",
  "Developed HL Giggs, a headless WooCommerce store on Next.js with custom product pages and mobile-friendly dashboards, and a custom WordPress theme for kcsshop.in with a customer social login flow.",
];

const foundationalRoleHighlights = [
  "Built responsive, cross-browser websites with HTML, CSS, JavaScript and Bootstrap for 5+ clients.",
  "Turned design mockups into pixel-accurate, interactive pages using jQuery, working with the design team.",
];

export default function ExperienceTimeline({
  eyebrow = "03 / TRACK RECORD",
}: {
  eyebrow?: string;
}) {
  return (
    <section
      id="experience"
      className="w-full px-who-margin md:px-who-margin-desktop py-who-space-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-who-gutter-desktop">
        {/* Left Anchor */}
        <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-who-space-sm mb-who-space-xs">
            <span className="w-6 h-[1px] bg-coral" />
            <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-[0.25em] text-navy font-bold">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-who-headline-lg text-who-headline-lg-mobile md:text-who-headline-lg text-navy uppercase tracking-tight">
            EXPERIENCE
          </h2>
          <p className="font-who-body-sm text-who-body-sm text-navy/60 mt-who-space-sm">
            A track record of growing ownership, recognition, and real,
            measurable results.
          </p>
          {/* Metric Callout Widget */}
          <div className="bg-white rounded-xl p-who-space-md mt-who-space-xl hidden lg:flex flex-col gap-who-space-xs">
            <span className="font-who-label-pill text-who-label-pill uppercase text-coral tracking-wider">
              MEASURABLE IMPACT
            </span>
            <span className="font-who-headline-md text-who-headline-md text-navy font-bold">
              -80%
            </span>
            <p className="font-who-body-sm text-who-body-sm text-navy/60">
              Fewer spam submissions on delhi-ivf.com after adding WhatsApp
              OTP verification to the enquiry form.
            </p>
          </div>
        </div>
        {/* Right Column: Timeline Narrative — stacked oldest to newest, so the
            current role scrolls to rest on top of the stack. */}
        <StackCards className="lg:col-span-8 xl:col-span-9 flex flex-col gap-who-space-xl">
          {/* Delhi Web Master */}
          <StackCard className="bg-white rounded-xl p-who-space-lg md:p-who-space-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-who-space-xs pb-who-space-md">
              <div>
                <span className="font-who-label-pill text-who-label-pill text-navy/60 tracking-widest uppercase">
                  FOUNDATIONAL STINT
                </span>
                <h3 className="font-who-headline-sm text-who-headline-sm text-navy mt-who-space-xs">
                  Jr. Web Developer
                </h3>
                <p className="font-who-body-md text-who-body-md text-navy/60 font-medium">
                  Delhi Web Master
                </p>
              </div>
              <div className="inline-flex items-center gap-who-space-xs bg-cream px-who-space-sm py-who-space-xs rounded-full">
                <span className="material-symbols-outlined text-[14px] text-navy/60">
                  history
                </span>
                <span className="font-who-label-interactive text-who-label-interactive text-navy uppercase tracking-wider">
                  Aug 2020 &ndash; Dec 2021
                </span>
              </div>
            </div>
            <div className="space-y-who-space-md pt-who-space-md">
              {foundationalRoleHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-who-space-sm">
                  <span className="material-symbols-outlined text-navy text-[20px] mt-0.5">
                    arrow_forward
                  </span>
                  <p className="font-who-body-md text-who-body-md text-navy">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </StackCard>
          {/* NexGen Innovators — Frontend Developer */}
          <StackCard className="bg-white rounded-xl p-who-space-lg md:p-who-space-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-who-space-xs pb-who-space-md">
              <div>
                <span className="font-who-label-pill text-who-label-pill text-navy/60 tracking-widest uppercase">
                  GROWTH STINT
                </span>
                <h3 className="font-who-headline-sm text-who-headline-sm text-navy mt-who-space-xs">
                  Frontend Developer
                </h3>
                <p className="font-who-body-md text-who-body-md text-navy/60 font-medium">
                  NexGen Innovators
                </p>
              </div>
              <div className="inline-flex items-center gap-who-space-xs bg-cream px-who-space-sm py-who-space-xs rounded-full">
                <span className="material-symbols-outlined text-[14px] text-navy/60">
                  history
                </span>
                <span className="font-who-label-interactive text-who-label-interactive text-navy uppercase tracking-wider">
                  Dec 2021 &ndash; Jan 2025
                </span>
              </div>
            </div>
            <div className="space-y-who-space-md pt-who-space-md">
              {frontendRoleHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-who-space-sm">
                  <span className="material-symbols-outlined text-navy text-[20px] mt-0.5">
                    arrow_forward
                  </span>
                  <p className="font-who-body-md text-who-body-md text-navy">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </StackCard>
          {/* NexGen Innovators — Full Stack Developer (current) */}
          <StackCard className="bg-white rounded-xl p-who-space-lg md:p-who-space-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-who-space-xs pb-who-space-md">
              <div>
                <span className="font-who-label-pill text-who-label-pill text-teal tracking-widest uppercase">
                  CURRENT APPOINTMENT
                </span>
                <h3 className="font-who-headline-sm text-who-headline-sm text-navy mt-who-space-xs">
                  Full Stack Developer
                </h3>
                <p className="font-who-body-md text-who-body-md text-navy/60 font-medium">
                  NexGen Innovators
                </p>
              </div>
              <div className="inline-flex items-center gap-who-space-xs bg-cream px-who-space-sm py-who-space-xs rounded-full">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="font-who-label-interactive text-who-label-interactive text-navy uppercase tracking-wider">
                  Feb 2025 &ndash; Present
                </span>
              </div>
            </div>
            <div className="space-y-who-space-md pt-who-space-md">
              {fullStackRoleHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-who-space-sm">
                  <span className="material-symbols-outlined text-navy text-[20px] mt-0.5">
                    arrow_forward
                  </span>
                  <p className="font-who-body-md text-who-body-md text-navy">
                    {index === 1 ? (
                      <>
                        Rebuilt delhi-ivf.com from React to Next.js to fix SEO
                        and page speed issues. Added WhatsApp OTP verification
                        before the enquiry form submits,{" "}
                        <strong className="text-navy">
                          cutting spam by about 80%
                        </strong>
                        , and the site now sends 100+ genuine leads a week to
                        LeadSquared.
                      </>
                    ) : (
                      highlight
                    )}
                  </p>
                </div>
              ))}
            </div>
            {/* Awards / Honors Micro-Banner */}
            <div className="mt-who-space-lg pt-who-space-md bg-cream rounded-lg p-who-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-who-space-md">
              <div className="flex items-center gap-who-space-sm">
                <div className="w-10 h-10 rounded-full bg-coral/15 flex items-center justify-center text-coral">
                  <span className="material-symbols-outlined text-[22px]">
                    military_tech
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-who-label-pill text-who-label-pill uppercase tracking-widest text-navy/60">
                    HONORS &amp; RECOGNITION
                  </span>
                  <span className="font-who-body-md text-who-body-md font-bold text-navy">
                    Rising Star Trophy 2023 &bull; Appreciation Certificate
                    2024
                  </span>
                </div>
              </div>
              <span className="font-who-label-pill text-who-label-pill bg-navy text-cream px-who-space-sm py-who-space-xs rounded-full uppercase">
                Excellence
              </span>
            </div>
          </StackCard>
        </StackCards>
      </div>
    </section>
  );
}
