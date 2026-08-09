import type { ReactNode } from "react";
import Image from "next/image";

function BlueprintOverlay() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-20 mix-blend-screen"
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
    </svg>
  );
}

export function Hero({
  title,
  subtitle,
  actions,
  image,
  imageAlt,
  badge,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  image: string;
  imageAlt: string;
  badge?: { value: string; label: string };
}) {
  return (
    <div
      className="relative overflow-hidden border-b border-metal/20 min-h-[560px] md:min-h-[680px] flex items-end"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)",
      }}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/20 to-transparent"
      />
      <BlueprintOverlay />

      {badge && (
        <div className="hidden md:block absolute top-6u right-2u lg:right-4u bg-bg/80 backdrop-blur border border-accent/50 rounded-card px-3u py-2u">
          <div className="font-mono text-accent font-bold text-xl leading-none">
            {badge.value}
          </div>
          <div className="text-metal text-xs mt-1u whitespace-nowrap">
            {badge.label}
          </div>
        </div>
      )}

      <div className="relative mx-auto max-w-7xl w-full px-2u pb-8u pt-8u">
        <div className="max-w-3xl border-l-2 border-accent pl-3u">
          <p className="font-mono text-accent text-sm mb-2u tracking-widest">
            {"// VERTAXO"}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] md:leading-[1.05] mb-3u break-words">
            {title}
          </h1>
          <p className="text-metal text-base sm:text-lg md:text-xl max-w-2xl mb-4u">
            {subtitle}
          </p>
          {badge && (
            <div className="md:hidden inline-flex items-baseline gap-1u bg-bg/80 border border-accent/50 rounded-card px-2u py-1u mb-4u">
              <span className="font-mono text-accent font-bold">
                {badge.value}
              </span>
              <span className="text-metal text-xs">{badge.label}</span>
            </div>
          )}
          {actions && <div className="flex flex-wrap gap-2u">{actions}</div>}
        </div>
      </div>
    </div>
  );
}
