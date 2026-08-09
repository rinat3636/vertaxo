import type { ReactNode } from "react";

function BlueprintBackdrop() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-20"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 400"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="800" height="400" fill="url(#grid)" />
      <polyline
        points="120,320 400,80 680,320"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
      <line
        x1="400"
        y1="80"
        x2="400"
        y2="320"
        stroke="var(--color-accent-secondary)"
        strokeWidth="1"
      />
      <circle cx="400" cy="80" r="5" fill="var(--color-accent-secondary)" />
    </svg>
  );
}

export function Hero({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-metal/20">
      <BlueprintBackdrop />
      <div className="relative mx-auto max-w-7xl px-2u py-8u">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight mb-3u">
          {title}
        </h1>
        <p className="text-metal text-lg md:text-xl max-w-2xl mb-4u">
          {subtitle}
        </p>
        {actions && <div className="flex flex-wrap gap-2u">{actions}</div>}
      </div>
    </div>
  );
}
