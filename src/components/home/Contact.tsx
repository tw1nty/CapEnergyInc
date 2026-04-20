"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContact, type ContactFormState } from "@/app/actions";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const initial: ContactFormState = { ok: false };

const siteTypes = [
  { v: "commercial", l: "Commercial / Retail" },
  { v: "multifamily", l: "Multifamily" },
  { v: "small-business", l: "Small business" },
  { v: "standalone", l: "Standalone microgrid" },
  { v: "partner", l: "Partner program" },
  { v: "other", l: "Other" },
];

const inquiryTypes = [
  { v: "site-review", l: "Site review" },
  { v: "microgrid-assessment", l: "Microgrid assessment" },
  { v: "partner", l: "Partner inquiry" },
  { v: "general", l: "General question" },
];

interface ContactProps {
  phone?: string;
  email?: string;
  hours?: string;
}

export function Contact({ phone, email, hours }: ContactProps) {
  const displayPhone = phone ?? "(888) 509-1506";
  const displayEmail = email ?? "info@capenergyinc.com";
  const displayHours = hours ?? "Mon–Fri · 8:30a–6p ET";
  const [state, formAction, pending] = useActionState(submitContact, initial);

  return (
    <section id="contact" className="relative bg-white py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left: pitch */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overline text-[color:var(--color-charge-blue)] mb-5">
                 Start a project
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] text-[color:var(--color-grid-black)]">
                Let&rsquo;s look at your <em className="italic text-[color:var(--color-charge-blue)]">site</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[460px] text-[15px] leading-[1.65] text-[color:var(--color-steel-slate)]">
                Tell us a little about the property and the goal. We&rsquo;ll follow up
                with a short intake call and a scoped microgrid assessment.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 max-w-[420px]">
              <ContactLine
                label="Email"
                value={displayEmail}
                href={`mailto:${displayEmail}`}
              />
              <ContactLine
                label="Phone"
                value={displayPhone}
                href={`tel:${displayPhone.replace(/\D/g, "")}`}
              />
              <ContactLine label="Hours" value={displayHours} />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                action={formAction}
                className="rounded-3xl border border-[color:var(--color-hairline)] bg-[color:var(--color-paper)] p-6 md:p-10 shadow-[0_1px_2px_rgba(13,27,42,0.04),0_24px_60px_-30px_rgba(13,27,42,0.18)]"
              >
                {/* Honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field name="name" label="Full name" required error={state.fieldErrors?.name} />
                  <Field name="email" type="email" label="Email" required error={state.fieldErrors?.email} />
                  <Field name="company" label="Company · optional" />
                  <Field name="phone" label="Phone · optional" />
                </fieldset>

                <div className="mt-6">
                  <Label>Site type</Label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {siteTypes.map((o, i) => (
                      <RadioPill key={o.v} name="siteType" value={o.v} label={o.l} defaultChecked={i === 0} />
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Label>I&rsquo;m interested in</Label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {inquiryTypes.map((o, i) => (
                      <RadioPill key={o.v} name="inquiry" value={o.v} label={o.l} defaultChecked={i === 0} />
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="message">Tell us about the site</Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Address or general location, what's on site today, and what you'd like us to help figure out."
                    className="mt-3 block w-full rounded-xl border border-[color:var(--color-hairline)] bg-white px-4 py-3 text-[14px] leading-[1.55] text-[color:var(--color-grid-black)] placeholder:text-[color:var(--color-steel-slate)]/50 focus:border-[color:var(--color-charge-blue)] focus:outline-none focus:ring-4 focus:ring-[color:var(--color-charge-blue)]/10 transition"
                  />
                  {state.fieldErrors?.message && (
                    <p className="mt-2 text-[12px] text-red-600">{state.fieldErrors.message}</p>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[12px] text-[color:var(--color-steel-slate)] max-w-[380px]">
                    By sending this form you agree to be contacted about your project.
                    We don&rsquo;t share details.
                  </p>
                  <button
                    disabled={pending}
                    className={cn(
                      "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 will-change-transform",
                      "bg-[color:var(--color-grid-black)] text-white hover:bg-black hover:-translate-y-[1px]",
                      pending && "opacity-70 cursor-wait"
                    )}
                  >
                    {pending ? "Sending…" : "Send inquiry"}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <AnimatePresence>
                  {state.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={cn(
                        "mt-6 rounded-xl px-4 py-3 text-[13px]",
                        state.ok
                          ? "bg-[color:var(--color-soft-mint)] text-[color:var(--color-grid-black)]"
                          : "bg-red-50 text-red-700 border border-red-100"
                      )}
                    >
                      {state.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-baseline justify-between py-3 border-b border-[color:var(--color-hairline)]">
      <span className="overline text-[color:var(--color-steel-slate)]">{label}</span>
      <span className="text-[15px] font-medium text-[color:var(--color-grid-black)]">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} className="group hover:opacity-90 transition-opacity">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="overline text-[color:var(--color-steel-slate)]">
      {children}
    </label>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="overline text-[color:var(--color-steel-slate)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 block w-full rounded-xl border border-[color:var(--color-hairline)] bg-white px-4 py-3 text-[14px] text-[color:var(--color-grid-black)] placeholder:text-[color:var(--color-steel-slate)]/50 focus:border-[color:var(--color-charge-blue)] focus:outline-none focus:ring-4 focus:ring-[color:var(--color-charge-blue)]/10 transition"
      />
      {error && <p className="mt-2 text-[12px] text-red-600">{error}</p>}
    </div>
  );
}

function RadioPill({
  name,
  value,
  label,
  defaultChecked,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="group relative cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="inline-flex items-center rounded-full border border-[color:var(--color-hairline)] bg-white px-4 py-2 text-[13px] font-medium text-[color:var(--color-steel-slate)] transition-all peer-checked:border-[color:var(--color-grid-black)] peer-checked:bg-[color:var(--color-grid-black)] peer-checked:text-white peer-checked:shadow-[0_6px_16px_-8px_rgba(13,27,42,0.3)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[color:var(--color-charge-blue)] peer-focus-visible:outline-offset-2">
        {label}
      </span>
    </label>
  );
}
