import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ className, mono = false }: { className?: string; mono?: boolean }) {
  const fg = mono ? "currentColor" : "var(--color-grid-black)";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="Capital Energy Solutions">
      <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/logo-sphere.png"
          alt=""
          fill
          sizes="32px"
          className="object-cover"
          priority
        />
      </span>
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
