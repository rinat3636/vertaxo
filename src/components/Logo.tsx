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
        <linearGradient id="vx-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-accent)" />
          <stop offset="1" stopColor="var(--color-accent-secondary)" />
        </linearGradient>
      </defs>
      <path
        d="M20 25 L60 100 L100 25 L78 25 L60 62 L42 25 Z"
        fill="url(#vx-grad)"
      />
      <path
        d="M60 100 L60 62 L42 25 L20 25 Z"
        fill="var(--color-accent)"
        opacity="0.35"
      />
    </svg>
  );
}

export function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1u">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-heading font-bold tracking-widest text-text-primary">
          VERTAXO
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
