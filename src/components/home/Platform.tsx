"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const stack = [
  { k: "Solar PV", desc: "Rooftop, carport, or ground‑mount — sized to the load." },
  { k: "Battery storage", desc: "Behind‑the‑meter capacity for backup and peak shaving." },
  { k: "Site controls", desc: "Real‑time orchestration of generation, storage, and loads." },
  { k: "EV charging", desc: "Level‑2 and DC fast charging — integrated, not bolted on." },
  { k: "Utility interface", desc: "Tariff, interconnection, and demand‑response management." },
];

export function Platform() {
  return (
    <section className="relative bg-white py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left: Header + list */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overline text-[color:var(--color-energy-teal)] mb-5">
                <span className="mr-2">◆</span> One integrated platform
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[40px] sm:text-[52px] md:text-[60px] lg:text-[68px] text-[color:var(--color-grid-black)]">
                Every layer talks to every <em className="italic">other</em> layer.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-[15px] leading-[1.65] text-[color:var(--color-steel-slate)] max-w-[440px]">
                Most sites end up with a stack of disconnected vendors. CES designs a
                single system where each layer is aware of the others — so the whole
                site behaves like one asset.
              </p>
            </Reveal>

            <ul className="mt-10 divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
              {stack.map((s, i) => (
                <Reveal as="li" key={s.k} delay={i * 0.04} className="group flex items-start gap-5 py-4">
                  <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-steel-slate)]/60 pt-1">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="text-[16px] font-medium text-[color:var(--color-grid-black)]">{s.k}</div>
                    <div className="text-[13px] text-[color:var(--color-steel-slate)] mt-1">{s.desc}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right: Diagrammatic visual */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] md:aspect-[5/4] rounded-3xl overflow-hidden bg-[color:var(--color-grid-black)]">
                <Image
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2000&q=80"
                  alt="Solar farm at dusk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover opacity-70"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,27,42,0.2),rgba(13,27,42,0.85))]" />
                <div className="absolute inset-0 bg-grid opacity-30" />

                {/* Diagram nodes */}
                <DiagramNode className="absolute top-[14%] left-[10%]" label="Solar PV" sub="↗ generation" />
                <DiagramNode className="absolute top-[18%] right-[12%]" label="Utility" sub="↔ grid interface" />
                <DiagramNode className="absolute top-[46%] left-[50%] -translate-x-1/2" label="Site Controls" sub="intelligent orchestration" primary />
                <DiagramNode className="absolute bottom-[16%] left-[12%]" label="Storage" sub="↕ dispatch" />
                <DiagramNode className="absolute bottom-[18%] right-[10%]" label="EV Charging" sub="↘ delivery" />

                {/* Connecting lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="rgba(143,211,255,0.4)" strokeWidth="0.25" fill="none" strokeDasharray="0.6 0.6">
                    <path d="M20 22 L50 48" />
                    <path d="M82 24 L50 48" />
                    <path d="M20 80 L50 48" />
                    <path d="M82 80 L50 48" />
                  </g>
                </svg>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-white/60">
                  <span>Integrated energy stack</span>
                  <span>CES Platform</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagramNode({
  className,
  label,
  sub,
  primary,
}: {
  className?: string;
  label: string;
  sub: string;
  primary?: boolean;
}) {
  return (
    <div className={className}>
      <div
        className={
          primary
            ? "rounded-2xl bg-[color:var(--color-charge-blue)] text-white px-5 py-3 shadow-[0_10px_40px_-10px_rgba(31,162,255,0.65)]"
            : "rounded-2xl bg-white/10 backdrop-blur-md text-white px-4 py-2.5 border border-white/15"
        }
      >
        <div className={primary ? "text-[13px] font-semibold" : "text-[12px] font-medium"}>{label}</div>
        <div className={primary ? "text-[10px] tracking-[0.14em] uppercase opacity-90 mt-0.5" : "text-[10px] tracking-[0.14em] uppercase opacity-60 mt-0.5"}>
          {sub}
        </div>
      </div>
    </div>
  );
}
