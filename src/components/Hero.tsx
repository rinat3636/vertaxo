import type { ReactNode } from "react";
import Image from "next/image";

function BlueprintBackdrop() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-15"
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
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-metal/20">
      <BlueprintBackdrop />
      <div className="relative mx-auto max-w-7xl px-2u py-6u lg:py-8u grid gap-4u lg:grid-cols-2 items-center">
        <div>
          <p className="font-mono text-accent text-sm mb-2u tracking-widest">
            {"// VERTAXO"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3u">
            {title}
          </h1>
          <p className="text-metal text-lg md:text-xl max-w-2xl mb-4u">
            {subtitle}
          </p>
          {actions && <div className="flex flex-wrap gap-2u">{actions}</div>}
        </div>
        <div className="relative">
          <div className="relative rounded-card overflow-hidden border border-accent/30">
            <Image
              src={image}
              alt={imageAlt}
              width={1536}
              height={1024}
              priority
              className="w-full h-auto object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-1u -right-1u h-6u w-6u border-b-2 border-r-2 border-accent"
          />
          <div
            aria-hidden="true"
            className="absolute -top-1u -left-1u h-6u w-6u border-t-2 border-l-2 border-accent-secondary"
          />
        </div>
      </div>
    </div>
  );
}
