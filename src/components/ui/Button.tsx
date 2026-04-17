import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "light";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-charge-blue)] text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-10px_rgba(31,162,255,0.55)] hover:bg-[color:var(--color-charge-blue-600)] hover:-translate-y-[1px]",
  secondary:
    "bg-[color:var(--color-grid-black)] text-white hover:bg-black hover:-translate-y-[1px]",
  ghost:
    "border border-[color:var(--color-hairline)] bg-white/70 backdrop-blur text-[color:var(--color-grid-black)] hover:bg-white hover:border-[color:var(--color-steel-slate-30)]",
  light:
    "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/15 hover:border-white/30",
};

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: string;
  arrow?: boolean;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({
  variant = "primary",
  children,
  className,
  href,
  arrow = true,
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        >
          <path
            d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
