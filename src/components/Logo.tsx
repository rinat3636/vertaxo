export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M60 12 L100 96 L60 76 L20 96 Z" fill="var(--color-accent)" />
      <path
        d="M60 12 L60 2 M20 96 L8 108 M100 96 L112 108"
        stroke="var(--color-accent-secondary)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="8" cy="108" r="5" fill="var(--color-accent-secondary)" />
      <circle cx="112" cy="108" r="5" fill="var(--color-accent-secondary)" />
      <circle cx="60" cy="2" r="5" fill="var(--color-accent-secondary)" />
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
