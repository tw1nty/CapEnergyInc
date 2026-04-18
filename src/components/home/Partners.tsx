"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const segments = [
  "Commercial property owners",
  "Multifamily operators",
  "Churches & community venues",
  "Retail & hospitality",
  "Small business portfolios",
  "Municipal & public sites",
];

const steps = [
  {
    n: "01",
    title: "Site review",
    body: "We study the load profile, roof or parcel, service capacity, and utility tariff.",
  },
  {
    n: "02",
    title: "Microgrid assessment",
    body: "A right‑sized design across solar, storage, controls, and — where it fits — EV charging.",
  },
  {
    n: "03",
    title: "Partner deployment",
    body: "CES delivers, integrates, and supports the system long term — as an infrastructure partner.",
  },
];

export function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden py-28 md:py-40">
      {/* Background image w/ gradient */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/microgrid-valley.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,27,42,0.9),rgba(13,27,42,0.78)_40%,rgba(13,27,42,0.96))]" />

      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-white">
        {/* Intro */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-14 mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overline text-[color:var(--color-sky-current)] mb-5">
                <span className="mr-2">◆</span> Partner program
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px]">
                A long‑term <em className="italic text-[color:var(--color-sky-current)]">infrastructure</em> partner — not just an installer.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-[1.65] text-white/75">
                CES partners with property owners and operators to deploy microgrids and
                charging infrastructure across portfolios — with owner‑friendly
                commercial structures, long‑term support, and a platform that scales
                with your sites.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3-step process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden mb-20">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07} className="bg-[color:var(--color-grid-black)]/85 backdrop-blur-sm p-8 md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-widest text-white/50">{s.n}</span>
                <span className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center text-white/40">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6m0 0L5.5 2.5M8 5 5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h3 className="display text-[28px] md:text-[34px] mt-10 leading-[1.05]">{s.title}</h3>
              <p className="mt-5 text-[14px] leading-[1.6] text-white/70">{s.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Segments marquee */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-5">
            <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
              {[...segments, ...segments].map((s, i) => (
                <span key={i} className="flex items-center gap-3 text-[15px] text-white/70">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--color-energy-teal)]" />
                  {s}
                </span>
              ))}
            </div>
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--color-grid-black)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--color-grid-black)] to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-3">
            <Button href="#contact" variant="primary">Become a partner</Button>
            <Button href="#contact" variant="light">Request a site review</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
