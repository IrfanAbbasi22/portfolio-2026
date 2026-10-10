"use client";

import { useContactForm } from "@/hooks/useContactForm";
import MagneticButton from "@/components/ui/MagneticButton";
import MagneticLink from "@/components/ui/MagneticLink";

export function ContactFormSection() {
  const { values, errors, status, setField, handleSubmit } = useContactForm();

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-16">
      {/* Minimal Rounded Container Block in Soft Sage Tint (Direct match to reference) */}
      <div className="w-full bg-teal rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-14 lg:p-16 shadow-sm">
        <h2 className="text-center font-condensed text-3xl sm:text-4xl lg:text-5xl uppercase tracking-normal text-navy mb-8 sm:mb-10">
          Let&apos;s Talk About It
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* 2-Column Name Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                className="w-full h-14 px-6 rounded-2xl bg-white/95 border-0 text-navy placeholder:text-navy/45 text-sm focus:ring-2 focus:ring-navy focus:bg-white transition-all shadow-none"
                placeholder="Name"
                required
                type="text"
                name="name"
                autoComplete="given-name"
                value={values.name}
                onChange={(event) => setField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && (
                <p className="mt-1 pl-2 text-[11px] font-semibold text-coral">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="contact-surname" className="sr-only">
                Surname
              </label>
              <input
                id="contact-surname"
                className="w-full h-14 px-6 rounded-2xl bg-white/95 border-0 text-navy placeholder:text-navy/45 text-sm focus:ring-2 focus:ring-navy focus:bg-white transition-all shadow-none"
                placeholder="Surname"
                required
                type="text"
                name="surname"
                autoComplete="family-name"
                value={values.surname}
                onChange={(event) => setField("surname", event.target.value)}
                aria-invalid={Boolean(errors.surname)}
              />
              {errors.surname && (
                <p className="mt-1 pl-2 text-[11px] font-semibold text-coral">{errors.surname}</p>
              )}
            </div>
          </div>
          {/* 2-Column Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-email" className="sr-only">
                E-mail
              </label>
              <input
                id="contact-email"
                className="w-full h-14 px-6 rounded-2xl bg-white/95 border-0 text-navy placeholder:text-navy/45 text-sm focus:ring-2 focus:ring-navy focus:bg-white transition-all shadow-none"
                placeholder="E-mail"
                required
                type="email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => setField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <p className="mt-1 pl-2 text-[11px] font-semibold text-coral">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="contact-phone" className="sr-only">
                Mobile phone
              </label>
              <input
                id="contact-phone"
                className="w-full h-14 px-6 rounded-2xl bg-white/95 border-0 text-navy placeholder:text-navy/45 text-sm focus:ring-2 focus:ring-navy focus:bg-white transition-all shadow-none"
                placeholder="Mobile phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                value={values.phone}
                onChange={(event) => setField("phone", event.target.value)}
              />
            </div>
          </div>
          {/* Message Textarea */}
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              className="w-full p-6 rounded-2xl bg-white/95 border-0 text-navy placeholder:text-navy/45 text-sm focus:ring-2 focus:ring-navy focus:bg-white transition-all resize-none shadow-none"
              placeholder="Message"
              required
              rows={5}
              name="message"
              value={values.message}
              onChange={(event) => setField("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && (
              <p className="mt-1 pl-2 text-[11px] font-semibold text-coral">{errors.message}</p>
            )}
          </div>
          {/* Footer of form: Privacy acceptance checkbox + minimal dark pill submit button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton
              tone="dark"
              strength={30}
              strengthText={15}
              sizeClassName="w-full sm:w-auto px-10 py-3.5 rounded-2xl shadow-sm"
              textClassName="text-xs font-bold uppercase tracking-[0.16em]"
              textColorClassName="text-cream"
              className="disabled:opacity-60"
              fillClassName="bg-coral"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </MagneticButton>
          </div>
          {status === "success" && (
            <div className="text-center pt-2 text-navy font-semibold text-xs tracking-wider uppercase">
              ✓ Message transmitted. Will respond shortly.
            </div>
          )}
        </form>
      </div>
      {/* Clean Location & Availability Footnote */}
      <div className="mt-8 text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-navy/60">
          New Delhi, India • Available Globally • Remote & Hybrid
        </p>
      </div>
    </section>
  );
}
