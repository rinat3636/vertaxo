import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ButtonLink } from "@/components/Button";
import {
  Section,
  SectionTitle,
  ServiceCards,
  StatGrid,
  StepList,
  Faq,
  PortfolioSection,
  ReviewsSection,
  CtaBlock,
} from "@/components/sections";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Инженерные разработки на заказ в Москве | matritsa",
  description:
    "Инженерные разработки: проектирование, прототипы, нестандартные механизмы. 25+ лет опыта. Москва и МО. От идеи до готового решения. +7 962 362 99 88",
  alternates: { canonical: `${SITE_URL}/engineering` },
  keywords: [
    "инженерные разработки на заказ",
    "разработка механизмов москва",
    "проектирование устройств",
    "прототипирование изделий",
    "нестандартные механизмы на заказ",
    "конструкторская документация",
    "автоматизация процессов",
  ],
  robots: { index: false, follow: false },
  openGraph: {
    title: "Инженерные разработки на заказ в Москве",
    description:
      "Проектирование, прототипы, нестандартные решения. 25+ лет опыта. От идеи до изделия.",
    url: `${SITE_URL}/engineering`,
    images: [
      {
        url: "/images/og-engineering.jpg",
        width: 1200,
        height: 640,
        alt: "Инженерные разработки matritsa",
      },
    ],
  },
};

// Черновой список направлений-заглушка до согласования финального перечня
// с заказчиком (SPEC.md, открытый вопрос №1).
const services = [
  {
    title: "Проектирование и расчёты",
    description:
      "Разработка конструкторской документации и инженерных расчётов под задачу.",
    icon: "model",
  },
  {
    title: "Прототипирование",
    description:
      "Изготовление и испытание опытных образцов перед запуском в работу.",
    icon: "prototype",
  },
  {
    title: "Нестандартные механизмы",
    description:
      "Узлы и приспособления, для которых нет готового решения на рынке.",
    icon: "workstation",
  },
  {
    title: "Автоматизация процессов",
    description: "Технические решения для автоматизации ручных операций.",
    icon: "code",
  },
] as const;

const stats = [
  { value: "25+ лет", label: "инженерного опыта" },
  { value: "Под ключ", label: "от постановки задачи до внедрения" },
  { value: "Полный цикл", label: "проектирование, прототип, изделие" },
  { value: "Вся Россия", label: "работаем с заказчиками из любого региона" },
] as const;

const steps = [
  "Постановка задачи и анализ требований",
  "Проработка концепции решения",
  "Проектирование и расчёты",
  "Изготовление и испытание прототипа",
  "Передача готового решения заказчику",
] as const;

const faq = [
  {
    q: "С какими задачами можно обращаться?",
    a: "С любыми техническими задачами, для которых нет готового решения на рынке: нестандартные механизмы, приспособления, автоматизация процессов.",
  },
  {
    q: "Как оценивается стоимость разработки?",
    a: "После обсуждения задачи готовим предложение с этапами, сроками и стоимостью. Оценка задачи — бесплатно.",
  },
  {
    q: "Кому принадлежат результаты разработки?",
    a: "Права на результат разработки передаются заказчику в соответствии с договором.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Инженерные разработки MATRITSA",
  image: `${SITE_URL}/images/og-engineering.jpg`,
  "@id": `${SITE_URL}/engineering`,
  url: `${SITE_URL}/engineering`,
  telephone: "+79623629988",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    addressRegion: "Московская область",
    addressCountry: "RU",
  },
  areaServed: [
    { "@type": "City", name: "Москва" },
    { "@type": "State", name: "Московская область" },
    { "@type": "Country", name: "Россия" },
  ],
  serviceType: "Инженерные разработки",
  provider: {
    "@type": "LocalBusiness",
    name: "MATRITSA",
    url: SITE_URL,
    telephone: "+79623629988",
  },
};

export default function EngineeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        title="Инженерные разработки"
        subtitle="Создание новых технических решений под задачи заказчика — от идеи до готового решения"
        image="/images/engineering.webp"
        imageAlt="Ноутбук с 3D-моделью детали в CAD-программе, рядом чертёж и штангенциркуль на столе инженера"
        tag="ИНЖЕНЕРНЫЕ РАЗРАБОТКИ"
        stats={stats}
        actions={<ButtonLink href="#lead">Обсудить задачу</ButtonLink>}
      />

      <Section>
        <SectionTitle index={1}>Что мы разрабатываем</SectionTitle>
        <p className="text-metal text-sm mb-3u">
          Черновой перечень направлений — уточняется с заказчиком, финальная
          версия появится после согласования.
        </p>
        <ServiceCards items={services} />
      </Section>

      <Section>
        <SectionTitle index={2}>Почему выбирают нас</SectionTitle>
        <StatGrid items={stats} />
      </Section>

      <Section>
        <SectionTitle index={3}>Этапы работы</SectionTitle>
        <StepList steps={steps} />
      </Section>

      <Section>
        <SectionTitle index={4}>Примеры работ</SectionTitle>
        <PortfolioSection category="engineering" />
      </Section>

      <Section>
        <SectionTitle index={5}>Отзывы</SectionTitle>
        <ReviewsSection category="engineering" />
      </Section>

      <Section>
        <SectionTitle index={6}>Частые вопросы</SectionTitle>
        <Faq items={faq} />
      </Section>

      <CtaBlock
        source="/engineering"
        title="Есть техническая задача?"
        text="Опишите задачу — предложим варианты решения, сроки и стоимость."
      />
    </>
  );
}
