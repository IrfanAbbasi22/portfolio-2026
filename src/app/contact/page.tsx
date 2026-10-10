import type { Metadata } from "next";
import { PageIntro } from "@/components/contact/PageIntro";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact — Mohd Irfan",
  description:
    "Get in touch with Mohd Irfan for freelance and collaboration opportunities — e-mail, phone, WhatsApp or Telegram.",
};

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-clip font-sans">
      <PageIntro />
      <ContactFormSection />
    </main>
  );
}
