import { StackCard, StackCards } from "@/components/ui/StackCards";

export default function Academics({
  eyebrow = "04 / PEDAGOGY",
}: {
  eyebrow?: string;
}) {
  return (
    <section className="w-full px-who-margin md:px-who-margin-desktop py-who-space-2xl bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-who-gutter-desktop">
        <div className="md:col-span-3 md:sticky md:top-24 md:self-start">
          <div className="flex items-center gap-who-space-sm mb-who-space-xs">
            <span className="w-6 h-[1px] bg-coral" />
            <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-[0.25em] text-navy font-bold">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-who-headline-lg text-who-headline-lg-mobile md:text-who-headline-lg text-navy uppercase tracking-tight">
            ACADEMICS
          </h2>
        </div>
        {/* Stacked oldest to newest, so the in-progress degree scrolls to rest
            on top of the stack — mirrors ExperienceTimeline's treatment. */}
        <StackCards className="md:col-span-9 flex flex-col gap-who-space-xl">
          {/* BA */}
          <StackCard className="bg-white rounded-xl p-who-space-lg flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-who-space-sm">
                <span className="font-who-label-pill text-who-label-pill bg-cream text-navy px-who-space-sm py-who-space-xs rounded-full uppercase font-bold">
                  UNDERGRADUATE
                </span>
                <span className="font-who-label-interactive text-who-label-interactive text-navy/60 uppercase">
                  2017 &ndash; 2020
                </span>
              </div>
              <h3 className="font-who-headline-sm text-who-headline-sm text-navy uppercase">
                Bachelor of Arts
              </h3>
              <p className="font-who-body-md text-who-body-md text-navy mt-who-space-xs">
                Delhi University
              </p>
              <p className="font-who-body-sm text-who-body-sm text-navy/60 mt-who-space-sm">
                Grounded in critical analysis, structural communication, and
                qualitative evaluation &mdash; informing high-clarity
                interface writing and human-centric workflows.
              </p>
            </div>
            <div className="pt-who-space-lg flex items-center gap-who-space-xs text-navy">
              <span className="material-symbols-outlined text-[18px]">
                workspace_premium
              </span>
              <span className="font-who-label-pill text-who-label-pill uppercase tracking-wider">
                Graduate Credential Conferred
              </span>
            </div>
          </StackCard>
          {/* MCA */}
          <StackCard className="bg-white rounded-xl p-who-space-lg flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-who-space-sm">
                <span className="font-who-label-pill text-who-label-pill bg-teal/20 text-teal px-who-space-sm py-who-space-xs rounded-full uppercase font-bold">
                  POSTGRADUATE
                </span>
                <span className="font-who-label-interactive text-who-label-interactive text-navy/60 uppercase">
                  Sep 2026
                </span>
              </div>
              <h3 className="font-who-headline-sm text-who-headline-sm text-navy uppercase">
                Master of Computer Applications
              </h3>
              <p className="font-who-body-md text-who-body-md text-navy mt-who-space-xs">
                Delhi University
              </p>
              <p className="font-who-body-sm text-who-body-sm text-navy/60 mt-who-space-sm">
                Rigorous advanced focus on algorithms, distributed data
                structures, modern software engineering methodologies, and
                advanced web services.
              </p>
            </div>
            <div className="pt-who-space-lg flex items-center gap-who-space-xs text-navy">
              <span className="material-symbols-outlined text-[18px]">school</span>
              <span className="font-who-label-pill text-who-label-pill uppercase tracking-wider">
                MCA In Progress &bull; Class of &lsquo;26
              </span>
            </div>
          </StackCard>
        </StackCards>
      </div>
    </section>
  );
}
