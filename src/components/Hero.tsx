import type { ReactNode } from "react";
import Image from "next/image";

function ScanlineGrid() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-25"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 400 400"
    >
      <defs>
        <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M20 0H0V20"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#hero-grid)" />
    </svg>
  );
}

export function Hero({
  title,
  subtitle,
  actions,
  image,
  imageAlt,
  tag,
  stats,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  image: string;
  imageAlt: string;
  tag: string;
  stats?: readonly { value: string; label: string }[];
}) {
  const isLongTitle = title.length > 70;
  return (
    <div className="border-b border-metal/20 bg-surface/40">
      <div className="mx-auto max-w-7xl px-0 sm:px-2u py-2u lg:py-3u">
        <div className="relative border-y sm:border border-metal/30 sm:rounded-card overflow-hidden">
          {/* console title bar */}
          <div className="relative z-10 flex items-center justify-between gap-2u border-b border-metal/30 bg-bg px-2u py-1u font-mono text-[11px] tracking-wider text-metal">
            <span className="flex items-center gap-1u">
              <span
                aria-hidden="true"
                className="h-1u w-1u rounded-full bg-accent inline-block animate-pulse"
              />
              VERTAXO_OS // {tag}
            </span>
            <span className="hidden sm:inline text-metal/60">
              РАБОТАЕМ ПО ВСЕЙ РОССИИ
            </span>
          </div>

          <div className="relative grid lg:grid-cols-[1.1fr_1fr]">
            {/* readout panel */}
            <div className="relative z-10 px-2u py-3u sm:px-3u lg:p-4u flex flex-col justify-center">
              <ScanlineGrid />
              <div className="relative border-l-2 border-accent pl-2u sm:pl-3u">
                <p className="font-mono text-accent text-sm mb-1u tracking-widest">
                  {"// VERTAXO"}
                </p>
                <h1
                  className={`font-bold leading-[1.15] md:leading-[1.1] mb-2u break-words ${
                    isLongTitle
                      ? "text-xl sm:text-2xl md:text-3xl"
                      : "text-2xl sm:text-3xl md:text-4xl"
                  }`}
                >
                  {title}
                </h1>
                <p className="text-metal text-sm sm:text-base md:text-lg max-w-2xl mb-3u">
                  {subtitle}
                </p>
                {actions && (
                  <div className="flex flex-wrap gap-2u">{actions}</div>
                )}
              </div>
            </div>

            {/* viewfinder panel */}
            <div className="relative min-h-[200px] lg:min-h-[300px] border-t lg:border-t-0 lg:border-l border-metal/30 overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/10"
              />
              {/* corner brackets */}
              <span
                aria-hidden="true"
                className="absolute top-2u left-2u h-3u w-3u border-t-2 border-l-2 border-accent"
              />
              <span
                aria-hidden="true"
                className="absolute top-2u right-2u h-3u w-3u border-t-2 border-r-2 border-accent"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-2u left-2u h-3u w-3u border-b-2 border-l-2 border-accent"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-2u right-2u h-3u w-3u border-b-2 border-r-2 border-accent"
              />
              {/* scanning line */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 h-px bg-accent/70 shadow-[0_0_8px_var(--color-accent)] animate-hero-scan motion-reduce:hidden"
              />
              <span className="absolute top-2u left-1/2 -translate-x-1/2 font-mono text-[11px] text-accent flex items-center gap-1u">
                <span
                  aria-hidden="true"
                  className="h-1u w-1u rounded-full bg-accent inline-block animate-pulse"
                />
                REC
              </span>
            </div>
          </div>

          {/* stats readout footer */}
          {stats && stats.length > 0 && (
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 border-t border-metal/30 bg-bg">
              {stats.slice(0, 4).map((s) => (
                <div
                  key={s.label}
                  className="px-2u py-2u border-r border-metal/20 last:border-r-0"
                >
                  <div className="font-mono font-bold text-accent text-lg leading-none">
                    {s.value}
                  </div>
                  <div className="text-metal text-[11px] uppercase tracking-wide mt-1u">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
