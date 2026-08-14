import Image from "next/image";

// Cyan логотип 1131×961 → ratio ≈ 1.177
const LOGO_RATIO = 1131 / 961; // ≈ 1.177

export function LogoMark({ size = 56 }: { size?: number }) {
  return (
    <Image
      src="/images/logo.png"
      alt="MATRITSA"
      width={Math.round(size * LOGO_RATIO)}
      height={size}
      className="shrink-0"
      priority
    />
  );
}

export function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2u">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-heading font-bold tracking-widest text-text-primary text-lg lowercase">
          matrit<span className="text-accent">s</span>a
        </span>
        {withTagline && (
          <span className="text-metal text-sm mt-1u">
            От идеи до готового решения
          </span>
        )}
      </span>
    </span>
  );
}
