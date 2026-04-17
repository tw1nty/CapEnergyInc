import { cn } from "@/lib/cn";

export function Logo({ className, mono = false }: { className?: string; mono?: boolean }) {
  const fg = mono ? "currentColor" : "var(--color-grid-black)";
  const accent = mono ? "currentColor" : "var(--color-charge-blue)";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="Capital Energy Solutions">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="13" stroke={fg} strokeWidth="1.2" opacity="0.25" />
        <path
          d="M14 3.5a10.5 10.5 0 0 0-10.5 10.5h21A10.5 10.5 0 0 0 14 3.5Z"
          fill={accent}
          opacity="0.9"
        />
        <path d="M5 14h18" stroke={fg} strokeWidth="1.2" />
        <path d="M8 17.5h12M10 21h8" stroke={fg} strokeWidth="1.2" opacity="0.5" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[13px] font-semibold tracking-tight" style={{ color: fg }}>
          <span className="hidden sm:inline">Capital Energy</span>
          <span className="sm:hidden">CES</span>
        </span>
        <span className="text-[10px] tracking-[0.18em] uppercase mt-0.5 opacity-60 hidden sm:block" style={{ color: fg }}>
          Solutions
        </span>
      </span>
    </span>
  );
}
