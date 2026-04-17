import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const year = new Date().getFullYear();

const groups = [
  {
    title: "Solutions",
    links: [
      { href: "#microgrids", label: "Microgrids" },
      { href: "#solutions", label: "Site types" },
      { href: "#ev-charging", label: "EV charging" },
      { href: "#partners", label: "Partner program" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
      { href: "#contact", label: "Site review" },
      { href: "#contact", label: "Microgrid assessment" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-grid-black)] text-white overflow-hidden">

      <div className="pointer-events-none absolute -top-20 right-[-10%] h-[400px] w-[400px] rounded-full bg-[color:var(--color-charge-blue)] opacity-10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-28 pb-10">
        {/* Big wordmark */}
        <div className="display text-[72px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-[0.9] tracking-[-0.04em] pb-20 border-b border-white/10">
          Power sites <em className="italic text-[color:var(--color-sky-current)]">smarter</em>.
        </div>

        <div className="grid gap-12 md:grid-cols-12 pt-14">
          <div className="md:col-span-5">
            <Logo mono />
            <p className="mt-6 max-w-[360px] text-[14px] leading-[1.65] text-white/60">
              Capital Energy Solutions develops microgrids, distributed energy, and EV
              charging for real sites.
            </p>
            <div className="mt-8 grid gap-2">
              <a href="mailto:info@capenergyinc.com" className="text-[14px] text-white hover:text-[color:var(--color-sky-current)] transition-colors">
                info@capenergyinc.com
              </a>
              <a href="tel:+18885091506" className="text-[14px] text-white/80 hover:text-white transition-colors">
                (888) 509-1506
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="overline text-white/50 mb-4">{g.title}</div>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[14px] text-white/80 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <div className="overline text-white/50 mb-4">Get in touch</div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[13px] font-medium text-white hover:bg-white/10 transition-colors"
              >
                Site review
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8m0 0L6.5 2.5M10 6 6.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8 text-[12px] text-white/50">
          <div>© {year} Capital Energy Solutions, Inc. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Accessibility</Link>
            <span className="text-white/20">·</span>
            <a
              href="https://www.glowwwup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Design by gloWWWup Digital Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
