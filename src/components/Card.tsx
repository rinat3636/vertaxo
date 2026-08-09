import type { ComponentProps } from "react";

export function Card({
  className = "",
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={`group relative bg-surface border border-metal/20 rounded-card p-3u transition-all duration-300 ease-out hover:border-accent/60 hover:-translate-y-1u ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px h-2u w-2u border-t border-l border-accent-secondary/0 transition-colors duration-300 group-hover:border-accent-secondary/80"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-px -right-px h-2u w-2u border-b border-r border-accent/0 transition-colors duration-300 group-hover:border-accent/80"
      />
      {children}
    </div>
  );
}
