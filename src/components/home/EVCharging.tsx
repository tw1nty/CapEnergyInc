"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const fallbackLayers = [
  { label: "Generation", value: "Solar PV + interconnection" },
  { label: "Storage", value: "Battery capacity sized to load" },
  { label: "Controls", value: "Site energy management" },
  { label: "Delivery", value: "Level‑2 & DC fast charging" },
];

interface EVChargingProps {
  heading?: string;
  body?: string;
  layers?: { label: string; value: string }[];
}

export function EVCharging({ heading, body, layers }: EVChargingProps) {
  const displayLayers = (layers && layers.length > 0 ? layers : fallbackLayers).map((l, i) => ({
    ...l,
    n: String(i + 1).padStart(2, "0"),
  }));
  return (
    <section id="ev-charging" className="relative bg-white py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          {/* Left: image collage */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80"
                  alt="EV charging at a commercial site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-grid-black)]/35 via-transparent to-transparent" />
              </div>
            </Reveal>

            {/* Floating stat card */}
            <Reveal delay={0.15}>
              <div className="absolute -bottom-8 -right-4 md:right-8 w-[280px] rounded-2xl bg-[color:var(--color-grid-black)] text-white p-6 shadow-[0_24px_60px_-24px_rgba(13,27,42,0.45)]">
                <div className="overline text-[color:var(--color-energy-teal)]">One integrated stack</div>
                <p className="display text-[28px] leading-[1.05] mt-3">
                  Charging is a <em className="italic">layer</em>, not the whole platform.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-6 lg:pt-6">
            <Reveal>
              <div className="overline text-[color:var(--color-charge-blue)] mb-5">
                 EV charging solutions
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px] text-[color:var(--color-grid-black)]">
                {heading ?? <>Charging, <em className="italic text-[color:var(--color-charge-blue)]">inside</em> the energy plan.</>}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[540px] text-[16px] leading-[1.6] text-[color:var(--color-steel-slate)]">
                {body ?? "EV charging is an operating layer on top of a well‑designed microgrid. When generation, storage, and controls are already on site, chargers cost less to run, install faster, and don't blow past the utility's service limit."}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-10 grid grid-cols-2 gap-px bg-[color:var(--color-hairline)] border border-[color:var(--color-hairline)] rounded-2xl overflow-hidden">
                {displayLayers.map((l) => (
                  <li key={l.label} className="bg-white p-5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] font-mono tracking-widest text-[color:var(--color-steel-slate)]/60">{l.n}</span>
                      <span className="overline text-[color:var(--color-steel-slate)]">{l.label}</span>
                    </div>
                    <p className="mt-4 text-[14px] font-medium text-[color:var(--color-grid-black)]">{l.value}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="#contact" variant="primary">Plan charging for my site</Button>
                <Button href="#partners" variant="ghost">Partner program</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
