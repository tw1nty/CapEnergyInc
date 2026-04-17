"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const links = [
  { href: "#microgrids", label: "Microgrids" },
  { href: "#solutions", label: "Solutions" },
  { href: "#ev-charging", label: "EV Charging" },
  { href: "#partners", label: "Partner Program" },
  { href: "#about", label: "About" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color] duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full border transition-all duration-500",
            scrolled
              ? "border-[color:var(--color-hairline)] bg-white/80 backdrop-blur-xl px-4 py-2 shadow-[0_1px_2px_rgba(13,27,42,0.04),0_8px_32px_-12px_rgba(13,27,42,0.12)]"
              : "border-white/10 bg-transparent px-2 py-1"
          )}
        >
          <Link href="/" className={cn("flex items-center pl-2", scrolled ? "text-[color:var(--color-grid-black)]" : "text-white")}>
            <Logo mono={!scrolled} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-[13px] font-medium tracking-tight rounded-full transition-colors",
                  scrolled
                    ? "text-[color:var(--color-steel-slate)] hover:text-[color:var(--color-grid-black)]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href="tel:+18885091506"
              className={cn(
                "hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium tracking-tight transition-colors",
                scrolled ? "text-[color:var(--color-steel-slate)] hover:text-[color:var(--color-grid-black)]" : "text-white/80 hover:text-white"
              )}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M2.5 1.5h2l1 2.5-1.5 1a6 6 0 0 0 3 3l1-1.5 2.5 1v2a1 1 0 0 1-1 1A9 9 0 0 1 1.5 2.5a1 1 0 0 1 1-1Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              (888) 509-1506
            </a>
            {/* CTA hidden on mobile — accessible via hamburger menu */}
            <span className="hidden sm:block">
              <Button
                href="#contact"
                variant={scrolled ? "secondary" : "light"}
                className="!px-4 !py-2 !text-[13px]"
                arrow={false}
              >
                Site review
              </Button>
            </span>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "lg:hidden flex items-center justify-center w-9 h-9 rounded-full transition-colors shrink-0",
                scrolled ? "text-[color:var(--color-grid-black)] hover:bg-black/5" : "text-white hover:bg-white/10"
              )}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {open ? (
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M2.5 5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2.5 11h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-6 mt-3 rounded-2xl border border-[color:var(--color-hairline)] bg-white/95 backdrop-blur-xl p-3 shadow-[0_12px_40px_-12px_rgba(13,27,42,0.2)]"
          >
            <nav className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-[15px] font-medium text-[color:var(--color-grid-black)] hover:bg-[color:var(--color-paper-2)] rounded-xl"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-[color:var(--color-hairline)] my-2" />
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mx-1 my-1 flex items-center justify-center rounded-xl bg-[color:var(--color-grid-black)] px-4 py-3 text-[14px] font-medium text-white"
              >
                Request a site review
              </Link>
              <a
                href="tel:+18885091506"
                className="px-4 py-3 text-[14px] text-[color:var(--color-steel-slate)]"
              >
                (888) 509-1506
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
