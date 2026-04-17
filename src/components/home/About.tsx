"use client";

import { Reveal } from "@/components/ui/Reveal";

const team = [
  {
    name: "Dino Rodwell",
    role: "Chief Executive Officer",
    initials: "DR",
    focus: "Strategy, partnerships, commercial structure",
  },
  {
    name: "Andrew Jessup",
    role: "Chief Technology Officer",
    initials: "AJ",
    focus: "Microgrid engineering, controls, delivery",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-[color:var(--color-paper)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Mission */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overline text-[color:var(--color-energy-teal)] mb-5">
                <span className="mr-2">◆</span> About · Mission
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[color:var(--color-grid-black)]">
                We develop practical, resilient energy infrastructure &mdash; for{" "}
                <em className="italic text-[color:var(--color-steel-slate)]">real</em> sites.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <p className="text-[15px] leading-[1.65] text-[color:var(--color-steel-slate)]">
                  Capital Energy Solutions helps commercial properties, multifamily
                  sites, small businesses, and public‑facing locations deploy
                  microgrids, energy management systems, and EV charging where it
                  supports the broader energy plan.
                </p>
                <p className="text-[15px] leading-[1.65] text-[color:var(--color-steel-slate)]">
                  Our focus is systems that improve reliability, reduce operating
                  costs, and prepare sites for the future — not promotional numbers,
                  and not hardware deployed in a vacuum.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Signal */}
          <div className="lg:col-span-5 flex lg:items-end">
            <Reveal delay={0.1} className="w-full">
              <div className="rounded-3xl bg-[color:var(--color-grid-black)] text-white p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[color:var(--color-charge-blue)] opacity-30 blur-3xl" />
                <div className="overline text-[color:var(--color-sky-current)]">In one sentence</div>
                <p className="display text-[26px] md:text-[30px] leading-[1.1] mt-5">
                  CES is a serious microgrid and energy infrastructure company that{" "}
                  <em className="italic">also</em> deploys EV charging — not a generic
                  charging brand trying to expand into energy later.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-28">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div className="overline text-[color:var(--color-steel-slate)]">Leadership</div>
              <div className="h-px flex-1 mx-6 bg-[color:var(--color-hairline)]" />
              <div className="text-[12px] text-[color:var(--color-steel-slate)]/70">Capital Energy Solutions · Inc.</div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--color-hairline)] bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(13,27,42,0.22)]">
                  {/* Ambient glow on hover */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[color:var(--color-charge-blue)]/0 blur-3xl transition-all duration-700 group-hover:bg-[color:var(--color-charge-blue)]/12" />

                  <div className="flex items-start justify-between gap-6">
                    {/* Typographic "portrait" */}
                    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-grid-black)] text-white">
                      <span className="display text-[44px] leading-none">{p.initials}</span>
                      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-energy-teal)]" />
                    </div>
                    <div className="flex-1">
                      <div className="overline text-[color:var(--color-steel-slate)]">{p.role}</div>
                      <h3 className="display text-[36px] md:text-[44px] leading-[1.02] text-[color:var(--color-grid-black)] mt-3">
                        {p.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-[color:var(--color-hairline)] pt-5 flex items-center justify-between">
                    <p className="text-[13px] text-[color:var(--color-steel-slate)] max-w-[60%]">{p.focus}</p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[color:var(--color-grid-black)] opacity-60 group-hover:opacity-100 transition-opacity"
                    >
                      Get in touch
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M2 5h6m0 0L5.5 2.5M8 5 5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
