import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-card px-3u py-2u font-semibold transition-colors duration-150 ease-out cursor-pointer";

const variants = {
  primary: `${base} bg-accent text-bg hover:bg-accent/85`,
  secondary: `${base} bg-transparent border border-metal/40 text-text-primary hover:border-accent-secondary hover:text-accent-secondary`,
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
