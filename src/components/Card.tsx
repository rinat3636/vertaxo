import type { ComponentProps } from "react";

export function Card({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      className={`bg-surface border border-metal/20 rounded-card p-3u transition-all duration-300 ease-out hover:border-accent/60 hover:-translate-y-1u ${className}`}
      {...props}
    />
  );
}
