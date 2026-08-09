import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./Card";
import { LeadForm } from "./LeadForm";
import { ButtonLink } from "./Button";
import { icons, type IconName } from "./icons";
import { fetchWorks, fetchReviews } from "@/lib/queries";

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
    <section className={`mx-auto max-w-7xl px-2u py-6u ${className}`} {...props}>
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
    <div className="mb-4u">
      <div className="flex items-center gap-2u mb-1u">
        <span className="font-mono text-accent-secondary text-xs tracking-widest">
          {`// ${String(index).padStart(2, "0")}`}
        </span>
        <span className="h-px flex-1 bg-metal/20" aria-hidden="true" />
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold">{children}</h2>
    </div>
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
    <div className="grid gap-3u sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Card
          key={item.title}
          className={`flex flex-col gap-2u ${i === 0 ? "sm:col-span-2 lg:col-span-2 sm:flex-row sm:items-start sm:gap-3u" : ""}`}
        >
          <div className={i === 0 ? "sm:shrink-0" : ""}>
            {item.icon && icons[item.icon]}
          </div>
          <div className="flex flex-col gap-2u flex-1">
            <h3
              className={i === 0 ? "text-xl font-semibold" : "text-lg font-semibold"}
            >
              {item.title}
            </h3>
            <p className="text-metal text-sm flex-1">{item.description}</p>
            <Link href="#lead" className="text-accent text-sm hover:underline">
              Оставить заявку →
            </Link>
          </div>
        </Card>
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
    <div className="grid gap-3u lg:grid-cols-2 lg:grid-rows-2">
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          className={`group ${i === 0 ? "lg:row-span-2" : ""}`}
        >
          <article
            className={`relative h-full ${i === 0 ? "min-h-[420px] lg:min-h-full" : "min-h-[240px]"} rounded-card overflow-hidden border border-metal/20 transition-all duration-300 ease-out group-hover:border-accent/60 group-hover:-translate-y-1u flex flex-col justify-end`}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent"
            />
            <div className="relative p-3u">
              <h3
                className={`font-semibold mb-1u ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}
              >
                {item.title}
              </h3>
              <p className="text-metal text-sm mb-2u">{item.description}</p>
              <span className="inline-block rounded-card bg-accent text-bg font-semibold text-sm px-2u py-1u opacity-0 translate-y-1u transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                Подробнее
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
    <div className="grid gap-3u sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="p-2u">
            <h3 className="font-semibold font-mono text-accent">
              {item.title}
            </h3>
            <p className="text-metal text-sm mt-1u">{item.description}</p>
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
  const track = (
    <div className="flex items-stretch shrink-0">
      {items.map((item, i) => (
        <div
          key={`${item.label}-${i}`}
          className="flex items-center gap-2u px-4u py-3u border-r border-metal/20 whitespace-nowrap"
        >
          <span className="font-mono font-bold text-2xl md:text-3xl text-accent">
            {item.value}
          </span>
          <span className="text-metal text-xs uppercase tracking-wider max-w-[10em] whitespace-normal">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden border-y border-metal/20 bg-surface motion-reduce:overflow-x-auto">
      <div className="flex motion-reduce:animate-none animate-marquee motion-reduce:w-full">
        {track}
        {track}
      </div>
    </div>
  );
}

export function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-3u md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={step}
          className={`relative bg-surface border border-metal/20 rounded-card p-3u ${
            i < steps.length - 1
              ? "after:content-['→'] after:absolute after:top-3u after:-right-[22px] after:text-accent-secondary after:hidden lg:after:block"
              : ""
          }`}
        >
          <span className="font-mono text-accent-secondary font-bold block mb-1u">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm">{step}</span>
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
      <div className="bg-surface border border-metal/20 rounded-card p-4u flex flex-col items-start gap-2u">
        <p className="text-metal">
          Реальные проекты по направлению — в разделе «Наши работы».
        </p>
        <ButtonLink href={href} variant="secondary">
          Смотреть работы
        </ButtonLink>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-3u sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="bg-surface border border-metal/20 rounded-card p-4u flex flex-col items-start gap-2u">
        <p className="text-metal">Отзывы наших клиентов — в отдельном разделе.</p>
        <ButtonLink href="/reviews" variant="secondary">
          Читать отзывы
        </ButtonLink>
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
      <div className="grid gap-4u lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2u">{title}</h2>
          <p className="text-metal max-w-prose">{text}</p>
          <p className="text-metal mt-2u text-sm">
            Или напишите напрямую:{" "}
            <Link
              href="https://t.me/Ilya_petrov9988"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Telegram
            </Link>
          </p>
        </div>
        <LeadForm source={source} />
      </div>
    </Section>
  );
}
