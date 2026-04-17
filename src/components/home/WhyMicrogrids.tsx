"use client";

import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    k: "01",
    title: "Resilience",
    body: "Keep sites online through outages. Islanding capability, battery backup, and controls that restart loads in the right order.",
  },
  {
    k: "02",
    title: "Utility cost control",
    body: "Shift demand, shave peaks, and participate in demand‑response programs — turning the meter into a managed asset.",
  },
  {
    k: "03",
    title: "Distributed energy",
    body: "Solar, storage, and on‑site generation working as one system — sized for the load, not the sales deck.",
  },
  {
    k: "04",
    title: "Cleaner power",
    body: "Reduce scope‑2 emissions with on‑site renewables, without giving up reliability during grid events.",
  },
  {
    k: "05",
    title: "Intelligent controls",
    body: "Site energy management that orchestrates generation, storage, and loads in real time — including EV charging.",
  },
  {
    k: "06",
    title: "Future‑ready",
    body: "Infrastructure built to absorb the next asset you add — more solar, more storage, more chargers, V2G.",
  },
];

export function WhyMicrogrids() {
  return (
    <section id="microgrids" className="relative bg-[color:var(--color-paper)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left — eyebrow + heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="overline text-[color:var(--color-energy-teal)] mb-5">
                <span className="mr-2">◆</span> Why microgrids
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px]">
                Energy infrastructure that doesn&rsquo;t <em className="italic text-[color:var(--color-steel-slate)]">flinch</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[440px] text-[16px] leading-[1.6] text-[color:var(--color-steel-slate)]">
                A microgrid is a site‑level energy system that can operate with or
                without the utility grid. Done right, it lowers operating cost,
                protects uptime, and makes every asset on the site — including EV
                charging — work harder.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 inline-flex items-center gap-3 text-[13px] font-medium text-[color:var(--color-grid-black)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-charge-blue)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-charge-blue)]" />
                </span>
                CES builds systems, not just hardware
              </div>
            </Reveal>
          </div>

          {/* Right — pillars */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[color:var(--color-hairline)] border border-[color:var(--color-hairline)] rounded-2xl overflow-hidden">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p.k} delay={i * 0.05} className="group relative bg-white p-7 md:p-8 transition-colors duration-500 hover:bg-[color:var(--color-soft-mint)]/50">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-[color:var(--color-steel-slate)]/60">
                      {p.k}
                    </span>
                    <div className="h-6 w-6 rounded-full border border-[color:var(--color-hairline)] flex items-center justify-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5h6m0 0L5.5 2.5M8 5 5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-6 text-[20px] font-medium tracking-tight text-[color:var(--color-grid-black)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[color:var(--color-steel-slate)]">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
