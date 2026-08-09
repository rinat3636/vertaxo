import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";
import {
  Section,
  SectionTitle,
  StatGrid,
  CtaBlock,
} from "@/components/sections";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "VERTAXO — компьютерная помощь, 3D-печать и инженерные разработки в Москве и МО",
  description:
    "Компьютерная помощь и защита данных, 3D-моделирование и печать, инженерные разработки в Москве и Московской области. От идеи до готового решения — получите консультацию.",
  alternates: { canonical: SITE_URL },
};

const services = [
  {
    title: "Компьютерная помощь",
    description:
      "Поддержка пользователей, администрирование, информационная безопасность.",
    href: "/computer-help",
  },
  {
    title: "3D-моделирование и печать",
    description: "Проектирование, прототипирование и изготовление деталей.",
    href: "/3d-printing",
  },
  {
    title: "Инженерные разработки",
    description: "Создание новых технических решений под задачи заказчика.",
    href: "/engineering",
  },
] as const;

const stats = [
  { value: "10+ лет", label: "опыта в сфере IT и инженерии" },
  { value: "500+", label: "успешно реализованных проектов" },
  { value: "99%", label: "довольных клиентов" },
  { value: "Полный цикл", label: "от идеи до готового решения" },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VERTAXO",
  slogan: "От идеи до готового решения",
  url: SITE_URL,
  areaServed: ["Москва", "Московская область"],
  founder: { "@type": "Person", name: "Илья Петров" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        title="От идеи до готового решения. Компьютерная помощь и защита данных, 3D-печать и моделирование и собственные инженерные разработки."
        subtitle="Надёжность, качество и быстрые решения"
        actions={
          <>
            <ButtonLink href="#lead">Получить консультацию</ButtonLink>
            <ButtonLink href="/works" variant="secondary">
              Посмотреть проекты
            </ButtonLink>
          </>
        }
      />

      <Section>
        <SectionTitle>Направления</SectionTitle>
        <div className="grid gap-3u lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group">
              <Card className="h-full flex flex-col gap-1u">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-metal text-sm flex-1">
                  {service.description}
                </p>
                <span className="text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Подробнее →
                </span>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2u mt-4u">
          <ButtonLink href="#lead">Получить консультацию</ButtonLink>
          <ButtonLink href="#lead" variant="secondary">
            Оставить заявку
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <SectionTitle>Почему выбирают нас</SectionTitle>
        <StatGrid items={stats} />
      </Section>

      <CtaBlock source="/" />
    </>
  );
}
