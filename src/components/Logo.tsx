export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="vx-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-accent-secondary)" />
          <stop offset="1" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>
      <path d="M60 12 L100 96 L60 76 L20 96 Z" fill="url(#vx-grad)" />
      <path
        d="M60 12 L60 2 M20 96 L8 108 M100 96 L112 108"
        stroke="var(--color-accent)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="8" cy="108" r="5" fill="var(--color-accent)" />
      <circle cx="112" cy="108" r="5" fill="var(--color-accent)" />
      <circle cx="60" cy="2" r="5" fill="var(--color-accent)" />
    </svg>
  );
}

export function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1u">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-heading font-bold tracking-widest text-text-primary">
          VERTA<span className="text-accent">X</span>O
        </span>
        {withTagline && (
          <span className="text-metal text-xs mt-1u">
            От идеи до готового решения
          </span>
        )}
      </span>
    </span>
  );
}
