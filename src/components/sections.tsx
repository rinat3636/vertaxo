import type { ReactNode } from "react";
import Link from "next/link";
import { Card } from "./Card";
import { LeadForm } from "./LeadForm";
import { ButtonLink } from "./Button";

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

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold mb-4u">{children}</h2>
  );
}

export function ServiceCards({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-3u sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title}>
          <h3 className="text-lg font-semibold mb-1u">{item.title}</h3>
          <p className="text-metal text-sm">{item.description}</p>
        </Card>
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
    <div className="grid gap-3u grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-surface border border-metal/20 rounded-card p-3u text-center"
        >
          <div className="font-mono font-bold text-2xl md:text-3xl text-accent mb-1u">
            {item.value}
          </div>
          <div className="text-metal text-sm">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-3u md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={step}
          className="bg-surface border border-metal/20 rounded-card p-3u"
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

export function PortfolioTeaser({ category }: { category?: string }) {
  const href = category ? `/works?category=${category}` : "/works";
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

export function ReviewsTeaser() {
  return (
    <div className="bg-surface border border-metal/20 rounded-card p-4u flex flex-col items-start gap-2u">
      <p className="text-metal">
        Отзывы наших клиентов — в отдельном разделе.
      </p>
      <ButtonLink href="/reviews" variant="secondary">
        Читать отзывы
      </ButtonLink>
    </div>
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
