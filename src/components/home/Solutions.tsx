"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Solution = {
  id: string;
  label: string;
  title: string;
  summary: string;
  bullets: string[];
  img: string;
  credit: string;
};

const solutions: Solution[] = [
  {
    id: "commercial",
    label: "Commercial & Retail",
    title: "Keep the doors open, the lights on, and the meter in check.",
    summary:
      "Solar‑plus‑storage sized to the building load, with intelligent controls that reduce demand charges and ride through outages.",
    bullets: [
      "Rooftop or carport solar",
      "Behind‑the‑meter storage",
      "Peak shaving & demand response",
      "Fleet or public EV charging layer",
    ],
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80",
    credit: "Commercial rooftop solar · Unsplash",
  },
  {
    id: "multifamily",
    label: "Apartments & Multifamily",
    title: "Resilient buildings, common‑area savings, resident charging.",
    summary:
      "Microgrid backbones that protect life‑safety loads, shave utility costs in common areas, and support resident EV charging as an amenity.",
    bullets: [
      "Common‑area solar + storage",
      "Life‑safety backup",
      "Resident EVSE + metering",
      "Owner‑friendly partner models",
    ],
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    credit: "Mixed‑use multifamily · Unsplash",
  },
  {
    id: "small-business",
    label: "Small Business & Workplaces",
    title: "Right‑sized energy systems for real operating budgets.",
    summary:
      "Pragmatic deployments for owner‑operated sites — solar, storage, and a clear path to EV charging without oversizing.",
    bullets: [
      "Low‑risk phased design",
      "Financing‑friendly scopes",
      "Workplace Level‑2 charging",
      "Scales as the business grows",
    ],
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
    credit: "Small business workplace · Unsplash",
  },
  {
    id: "standalone",
    label: "Standalone Microgrid Sites",
    title: "Purpose‑built microgrids for fleet, logistics, and public charging.",
    summary:
      "Where the grid won't deliver the capacity — or the timeline — we build self‑sufficient energy sites around solar, storage, and controls.",
    bullets: [
      "Utility‑constrained sites",
      "Fast‑deploy DC fast charging",
      "Container‑scale storage",
      "Islandable by design",
    ],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    credit: "Utility‑scale storage · Unsplash",
  },
];

export function Solutions() {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((s) => s.id === active)!;

  return (
    <section id="solutions" className="relative bg-[color:var(--color-grid-black)] text-white py-28 md:py-40">

      <div className="pointer-events-none absolute top-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[color:var(--color-charge-blue)] opacity-10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="max-w-[720px]">
            <Reveal>
              <div className="overline text-[color:var(--color-sky-current)] mb-5">
                <span className="mr-2">◆</span> Solutions by site type
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] text-white">
                Built for the sites <em className="italic text-[color:var(--color-sky-current)]">you</em> operate.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:max-w-[360px]">
            <p className="text-[15px] leading-[1.6] text-white/70">
              Four deployment archetypes, one platform. Each one starts the same way —
              with a site review and a microgrid assessment.
            </p>
          </Reveal>
        </div>

        {/* Tab selector + content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Tabs */}
          <div className="lg:col-span-4">
            <div className="flex flex-col border-t border-white/10">
              {solutions.map((s) => {
                const isActive = s.id === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={cn(
                      "group flex items-center justify-between border-b border-white/10 py-5 text-left transition-colors",
                      isActive ? "text-white" : "text-white/55 hover:text-white"
                    )}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={cn(
                          "h-1 w-6 rounded-full transition-all duration-500",
                          isActive ? "bg-[color:var(--color-charge-blue)] w-10" : "bg-white/20"
                        )}
                      />
                      <span className="text-[17px] md:text-[19px] font-medium tracking-tight">
                        {s.label}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "transition-all duration-300 translate-x-0 opacity-60",
                        isActive ? "opacity-100 translate-x-0" : "-translate-x-1 opacity-0 group-hover:opacity-60 group-hover:translate-x-0"
                      )}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-5 gap-8"
              >
                <div className="md:col-span-3 relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                  <Image
                    src={current.img}
                    alt={current.credit}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-grid-black)]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-white/60">
                    <span>{current.label}</span>
                    <span className="opacity-70">{current.credit}</span>
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col">
                  <h3 className="display text-[30px] md:text-[36px] leading-[1.05] text-white">
                    {current.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.6] text-white/70">
                    {current.summary}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {current.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[14px] text-white/85">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-[color:var(--color-energy-teal)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="group mt-10 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 backdrop-blur px-5 py-2.5 text-[13px] font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    Request this assessment
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M2 6h8m0 0L6.5 2.5M10 6 6.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
