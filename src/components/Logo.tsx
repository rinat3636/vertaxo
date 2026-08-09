export function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1u">
      <svg
        width="36"
        height="36"
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="shrink-0"
      >
        <polyline
          points="25,90 60,30 95,90"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="60"
          y1="30"
          x2="60"
          y2="90"
          stroke="var(--color-accent-secondary)"
          strokeWidth="5"
        />
        <circle cx="60" cy="30" r="8" fill="var(--color-accent-secondary)" />
      </svg>
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
