import Hero from "@/components/home/Hero";
import NameMarquee from "@/components/home/NameMarquee";
import SelectedWorks from "@/components/home/SelectedWorks";
import WhoIAm from "@/components/home/WhoIAm";
import CareerJourney from "@/components/home/CareerJourney";
import WhatIDo from "@/components/home/WhatIDo";
import StrategicCoffee from "@/components/home/StrategicCoffee";
import SkillsExperience from "@/components/home/SkillsExperience";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import Academics from "@/components/about/Academics";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  // overflow-x-clip (not hidden): `hidden` turns <main> into a scroll container,
  // which silently breaks the position: sticky pinning in the stacked cards below.
  return (
    <main className="w-full overflow-x-clip">
      <Hero />
      {/* <NameMarquee /> */}
      <SelectedWorks />
      <WhoIAm />
      <CareerJourney />
      <WhatIDo />
      {/* <StrategicCoffee /> */}
      <SkillsExperience />
      <ExperienceTimeline eyebrow="05 / TRACK RECORD" />
      {/* <Academics eyebrow="05 / PEDAGOGY" /> */}
      {/* <ContactCTA /> */}
    </main>
  );
}
