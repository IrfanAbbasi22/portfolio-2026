export default function VisualAnchor() {
  return (
    <section className="w-full px-who-margin md:px-who-margin-desktop py-who-space-md">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-who-gutter-desktop items-center">
        <div className="md:col-span-8 overflow-hidden rounded-xl bg-navy/5 relative group aspect-[21/9]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Sophisticated creative studio portrait of Mohd Irfan inspecting clean design tokens on a curved ultra-wide monitor, warm directional editorial studio lighting, organic linen and architectural concrete studio background with muted teal and deep navy accents, high craft 35mm film aesthetic"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYWI3EdOFs4K0f5mItCjI_Jn1tT-pLqyLzC_yxU6-arFeVGoaPSQYmV0oLzQj8QBYPPKct85yi0-guRA99hi9Vns9dH4vaS_9_jSr9MypVfD8QmFzgbCz3yyW8pOyO3PcHyldRVFZb4s5KH63ZQz9y_A-D6QwuZ6vA5QFlX_uG1lJtAoeIZWetsOD3KeW9AGDJ0fa8QJ45jBdUMjWcxSvIp2VJkPkZSxd_2gUuPA-SEWEu3DfsvderKg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-who-space-lg">
            <div className="flex flex-col">
              <span className="font-who-label-pill text-who-label-pill uppercase text-teal tracking-widest">
                MY SETUP
              </span>
              <span className="font-who-headline-sm text-who-headline-sm text-cream">
                Careful frontend development &amp; AI integration
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-navy text-cream rounded-xl p-who-space-lg flex flex-col justify-between h-full min-h-[220px]">
          <div className="flex flex-col gap-who-space-xs">
            <div className="inline-flex items-center gap-who-space-xs text-coral">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-who-label-eyebrow text-who-label-eyebrow uppercase tracking-widest">
                How I Work
              </span>
            </div>
            <p className="font-who-body-md text-who-body-md text-cream mt-who-space-xs">
              &ldquo;Good code should read like good writing: clear,
              intentional, and free of clutter.&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-who-space-sm pt-who-space-md">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
            </div>
            <span className="font-who-label-interactive text-who-label-interactive text-cream/70 uppercase tracking-wider">
              New Delhi &bull; Worldwide Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
