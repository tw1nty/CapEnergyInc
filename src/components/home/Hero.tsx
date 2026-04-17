"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[color:var(--color-grid-black)] text-white">
      {/* Video background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <video
          className="h-[120%] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
        >
          <source src="/video/drone-flyby.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark gradient overlay for type legibility */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(13,27,42,0.55),rgba(13,27,42,0.9))]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--color-grid-black)]/60 via-[color:var(--color-grid-black)]/40 to-[color:var(--color-grid-black)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="relative bg-noise" />

      {/* Ambient light orb */}
      <div className="pointer-events-none absolute -top-20 right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[color:var(--color-charge-blue)] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-[color:var(--color-energy-teal)] opacity-15 blur-[140px]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 pt-40 pb-14 lg:px-10 lg:pt-44"
      >
        <div className="flex flex-col gap-10 lg:max-w-[980px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-energy-teal)] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-energy-teal)]" />
            </span>
            <span className="text-[11px] tracking-[0.16em] uppercase text-white/80">
              Microgrid-first energy infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[56px] leading-[0.95] tracking-[-0.035em] sm:text-[84px] md:text-[108px] lg:text-[132px]"
          >
            Microgrids
            <br />
            for the{" "}
            <em className="italic text-[color:var(--color-sky-current)]">real</em> world.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[620px] text-[17px] leading-[1.55] text-white/75 md:text-[19px]"
          >
            We develop resilient, site‑level energy infrastructure — solar, battery
            storage, intelligent controls, and EV charging — for commercial properties,
            multifamily, small business, and public charging sites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href="#contact" variant="primary">
              Request a microgrid assessment
            </Button>
            <Button href="#microgrids" variant="light" arrow>
              How we build
            </Button>
          </motion.div>
        </div>

        {/* Bottom meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-wrap items-end justify-between gap-8 border-t border-white/10 pt-8"
        >
          <div className="flex flex-wrap gap-10">
            <MetaItem label="Focus" value="Microgrids & DER" />
            <MetaItem label="Applications" value="Solar · Storage · Controls · EV" />
            <MetaItem label="Serving" value="Commercial · Multifamily · Public" />
          </div>
          <a
            href="#microgrids"
            className="group flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-white/60 hover:text-white transition-colors"
          >
            Scroll
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-y-0.5">
              <path d="M7 2v10m0 0 3.5-3.5M7 12 3.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] tracking-[0.18em] uppercase text-white/45">{label}</span>
      <span className="text-[14px] font-medium text-white/90">{value}</span>
    </div>
  );
}
