import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./Card";
import { LeadForm } from "./LeadForm";
import { ButtonLink } from "./Button";
import { icons, type IconName } from "./icons";
import { fetchWorks, fetchReviews } from "@/lib/queries";
import { CONTACTS } from "@/lib/site";

export function Section({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-2u py-4u ${className}`} {...props}>
      {children}
    </section>
  );
}

export function SectionTitle({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <div className="mb-3u">
      <div className="flex items-center gap-2u mb-1u">
        <span className="font-mono text-accent-secondary text-xs tracking-widest">
          {`// ${String(index).padStart(2, "0")}`}
        </span>
        <span className="h-px flex-1 bg-metal/20" aria-hidden="true" />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold">{children}</h2>
    </div>
  );
}

export function PageHeader({
  tag,
  title,
  text,
}: {
  tag: string;
  title: string;
  text?: string;
}) {
  return (
    <header className="mb-4u">
      <div className="flex items-center gap-2u mb-2u">
        <span className="font-mono text-accent text-xs tracking-widest">
          {`// ${tag}`}
        </span>
        <span className="h-px flex-1 bg-metal/20" aria-hidden="true" />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-2u">{title}</h1>
      {text && <p className="text-metal max-w-prose">{text}</p>}
    </header>
  );
}

export function AboutSection() {
  return (
    <Section className="border-t border-metal/20">
      <div className="flex items-center gap-2u mb-3u">
        <span className="font-mono text-accent-secondary text-xs tracking-widest">
          {"// О КОМПАНИИ"}
        </span>
        <span className="h-px flex-1 bg-metal/20" aria-hidden="true" />
      </div>
      <div className="relative overflow-hidden rounded-card border border-metal/20 bg-surface p-3u md:p-4u grid gap-4u lg:grid-cols-[220px_1fr] items-start">
        <span
          aria-hidden="true"
          className="absolute inset-0 blueprint-grid opacity-30"
        />
        <div className="relative w-[220px] max-w-full aspect-square rounded-card border border-dashed border-accent/40 bg-bg flex flex-col items-center justify-center gap-2u text-center px-2u">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 h-2u w-2u border-t border-l border-accent-secondary/70"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-2u w-2u border-b border-r border-accent/70"
          />
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-metal)"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
          </svg>
          <p className="text-metal text-xs font-mono">
            Фото Ильи появится здесь после согласования
          </p>
        </div>
        <div className="relative">
          <h3 className="text-lg font-semibold mb-2u">Илья Петров</h3>
          <p className="text-metal max-w-prose">
            Основатель matrit<span className="text-accent">s</span>a. Больше 10 лет работает на стыке IT, инженерии
            и производства — от компьютерной помощи и защиты данных до
            проектирования и 3D-печати. Собственная команда объединяет три
            направления в одном месте, чтобы клиенту не приходилось искать
            разных подрядчиков под разные задачи.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function ServiceCards({
  items,
}: {
  items: readonly {
    title: string;
    description: string;
    icon?: IconName;
  }[];
}) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="group grid gap-x-3u gap-y-1u sm:grid-cols-[56px_1fr_auto] items-start py-3u border-b border-metal/20 first:border-t"
        >
          <span
            aria-hidden="true"
            className="font-mono text-accent-secondary/40 text-3xl font-bold leading-none"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <div className="flex items-center gap-2u mb-1u">
              {item.icon && icons[item.icon]}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-metal text-sm max-w-prose">
              {item.description}
            </p>
          </div>
          <Link
            href="#lead"
            className="text-accent text-sm font-semibold whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity duration-150 sm:self-center"
          >
            Оставить заявку →
          </Link>
        </div>
      ))}
    </div>
  );
}

export function ServiceBanners({
  items,
}: {
  items: readonly {
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-2u sm:gap-3u">
      {items.map((item, i) => (
        <Link key={item.href} href={item.href} className="group block">
          <article className="relative grid grid-cols-[96px_1fr] sm:grid-cols-1 lg:grid-cols-2 items-stretch rounded-card overflow-hidden border border-metal/20 transition-all duration-300 ease-out group-hover:border-accent/60">
            <div
              className={`relative min-h-full sm:min-h-[180px] lg:min-h-[300px] ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="hidden sm:block absolute top-2u left-2u font-mono text-xs tracking-widest text-accent bg-bg/70 border border-accent/30 rounded-card px-1u py-[2px]"
              >
                {`// 0${i + 1}`}
              </span>
            </div>
            <div className="relative flex flex-col justify-center bg-surface p-2u sm:p-3u lg:p-4u">
              <h3 className="font-semibold text-base sm:text-2xl mb-1u sm:mb-2u">
                {item.title}
              </h3>
              <p className="text-metal text-sm sm:text-base mb-1u sm:mb-3u max-w-prose">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-1u text-accent text-xs sm:text-sm font-semibold w-fit transition-transform duration-300 ease-out group-hover:translate-x-1u">
                Подробнее →
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export function MaterialCards({
  items,
}: {
  items: readonly {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-2u sm:gap-3u lg:grid-cols-4">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-card overflow-hidden border border-metal/20 bg-surface transition-all duration-300 ease-out hover:border-accent/60"
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={1024}
            height={1024}
            className="w-full h-auto object-cover aspect-square"
          />
          <div className="p-1u sm:p-2u">
            <h3 className="font-semibold font-mono text-accent text-sm sm:text-base">
              {item.title}
            </h3>
            <p className="text-metal text-xs sm:text-sm mt-1u">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function StatGrid({
  items,
}: {
  items: readonly { value: string; label: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 border border-metal/20 rounded-card overflow-hidden bg-surface">
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`relative p-3u ${i % 2 === 0 ? "border-r border-metal/20" : ""} ${i < 2 ? "border-b border-metal/20 lg:border-b-0" : ""} ${i < 3 ? "lg:border-r lg:border-metal/20" : ""}`}
        >
          <span
            aria-hidden="true"
            className="absolute top-0 left-3u h-[2px] w-4u bg-accent"
          />
          <dd className="font-mono font-bold text-2xl md:text-3xl text-accent mb-1u">
            {item.value}
          </dd>
          <dt className="text-metal text-xs uppercase tracking-wider">
            {item.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

export function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid grid-cols-2 gap-2u sm:gap-3u lg:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={step}
          className={`relative bg-surface border border-metal/20 rounded-card p-2u sm:p-3u ${
            i < steps.length - 1
              ? "after:content-['→'] after:absolute after:top-3u after:-right-[22px] after:text-accent-secondary after:hidden lg:after:block"
              : ""
          }`}
        >
          <span className="font-mono text-accent-secondary font-bold block mb-1u text-sm sm:text-base">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-xs sm:text-sm">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function Faq({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="flex flex-col gap-2u">
      {items.map((item) => (
        <details
          key={item.q}
          className="bg-surface border border-metal/20 rounded-card p-3u group"
        >
          <summary className="cursor-pointer font-semibold list-none flex justify-between items-center gap-2u">
            {item.q}
            <span
              aria-hidden="true"
              className="text-accent-secondary transition-transform duration-150 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="text-metal mt-2u text-sm">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export async function PortfolioSection({ category }: { category?: string }) {
  const works = await fetchWorks();
  const filtered = category
    ? works.filter((w) => w.category === category)
    : works;
  const href = category ? `/works?category=${category}` : "/works";

  if (filtered.length === 0) {
    return (
      <div className="relative overflow-hidden bg-surface border border-metal/20 rounded-card p-4u">
        <span
          aria-hidden="true"
          className="absolute inset-0 blueprint-grid opacity-40"
        />
        <div className="relative flex flex-col items-start gap-2u">
          <span className="font-mono text-accent-secondary text-xs tracking-widest">
            {"// ПОРТФОЛИО"}
          </span>
          <p className="text-metal max-w-prose">
            Реальные проекты по направлению — в разделе «Наши работы».
          </p>
          <ButtonLink href={href} variant="secondary">
            Смотреть работы
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2u sm:gap-3u lg:grid-cols-3">
        {filtered.slice(0, 6).map((work) => (
          <Card key={work._id} className="overflow-hidden p-0">
            {work.imageUrl && (
              <Image
                src={work.imageUrl}
                alt={work.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            )}
            <div className="p-3u">
              <h3 className="font-semibold">{work.title}</h3>
              {work.description && (
                <p className="text-metal text-sm mt-1u">{work.description}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-3u">
        <ButtonLink href={href} variant="secondary">
          Все работы
        </ButtonLink>
      </div>
    </>
  );
}

export async function ReviewsSection({ category }: { category?: string }) {
  const reviews = await fetchReviews();
  const byCategory = category
    ? reviews.filter((r) => r.category === category)
    : reviews;
  const shown = byCategory.length > 0 ? byCategory : reviews;

  if (shown.length === 0) {
    return (
      <div className="relative overflow-hidden bg-surface border border-metal/20 rounded-card p-4u">
        <span
          aria-hidden="true"
          className="absolute inset-0 blueprint-grid opacity-40"
        />
        <div className="relative flex flex-col items-start gap-2u">
          <span className="font-mono text-accent-secondary text-xs tracking-widest">
            {"// ОТЗЫВЫ"}
          </span>
          <p className="text-metal max-w-prose">
            Отзывы наших клиентов — в отдельном разделе.
          </p>
          <ButtonLink href="/reviews" variant="secondary">
            Читать отзывы
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-3u md:grid-cols-2 lg:grid-cols-3">
        {shown.slice(0, 3).map((review) => (
          <Card key={review._id}>
            <p className="text-sm mb-2u">«{review.text}»</p>
            <p className="text-metal text-sm font-semibold">{review.author}</p>
          </Card>
        ))}
      </div>
      <div className="mt-3u">
        <ButtonLink href="/reviews" variant="secondary">
          Все отзывы
        </ButtonLink>
      </div>
    </>
  );
}

export function CtaBlock({
  source,
  title = "Обсудим вашу задачу?",
  text = "Расскажите, что необходимо реализовать, и мы предложим оптимальное решение.",
}: {
  source: string;
  title?: string;
  text?: string;
}) {
  return (
    <Section id="lead" className="scroll-mt-8u">
      <div className="relative overflow-hidden rounded-card border border-metal/20 bg-surface p-3u md:p-6u">
        <span
          aria-hidden="true"
          className="absolute inset-0 blueprint-grid opacity-30"
        />
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 h-4u w-4u border-t-2 border-l-2 border-accent-secondary/60"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-4u w-4u border-b-2 border-r-2 border-accent/60"
        />
        <div className="relative grid gap-4u lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2u">{title}</h2>
          <p className="text-metal max-w-prose">{text}</p>
          <p className="text-metal mt-3u text-sm mb-2u">Или напишите напрямую:</p>
          <div className="flex flex-wrap gap-2u">
            <ButtonLink
              href={CONTACTS.telegram}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0"
            >
              <img src="/images/telegram-logo.gif" alt="Telegram" className="h-8 w-8" />
            </ButtonLink>
            <div className="inline-flex items-center justify-center px-2u py-1u rounded-full border border-metal/20 bg-surface/50 opacity-50 cursor-not-allowed">
              <img src="/images/max-logo.svg" alt="MAX (скоро)" className="h-8 w-8" />
            </div>
          </div>
        </div>
          <LeadForm source={source} />
        </div>
      </div>
    </Section>
  );
}
