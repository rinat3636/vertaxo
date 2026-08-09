import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ButtonLink } from "@/components/Button";
import {
  Section,
  SectionTitle,
  ServiceBanners,
  StatGrid,
  StepList,
  Faq,
  PortfolioSection,
  ReviewsSection,
  CtaBlock,
} from "@/components/sections";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "VERTAXO — компьютерная помощь, 3D-печать и инженерные разработки по всей России",
  description:
    "Компьютерная помощь и защита данных, 3D-моделирование и печать, инженерные разработки по всей России. От идеи до готового решения — получите консультацию.",
  alternates: { canonical: SITE_URL },
};

const services = [
  {
    title: "Компьютерная помощь",
    description:
      "Поддержка пользователей, администрирование, информационная безопасность.",
    href: "/computer-help",
    image: "/images/computer-help.webp",
    imageAlt:
      "Мастерская по ремонту компьютеров: открытый системный блок на столе, ноутбук с диагностикой на фоне, голубая и фиолетовая подсветка",
  },
  {
    title: "3D-моделирование и печать",
    description: "Проектирование, прототипирование и изготовление деталей.",
    href: "/3d-printing",
    image: "/images/3d-printing.webp",
    imageAlt:
      "Крупный план сопла 3D-принтера, печатающего механическую деталь, голубая подсветка",
  },
  {
    title: "Инженерные разработки",
    description: "Создание новых технических решений под задачи заказчика.",
    href: "/engineering",
    image: "/images/engineering.webp",
    imageAlt:
      "Ноутбук с 3D-моделью детали в CAD-программе, рядом чертёж и штангенциркуль на столе инженера",
  },
] as const;

const stats = [
  { value: "10+ лет", label: "опыта в сфере IT и инженерии" },
  { value: "500+", label: "успешно реализованных проектов" },
  { value: "99%", label: "довольных клиентов" },
  { value: "Полный цикл", label: "от идеи до готового решения" },
] as const;

const steps = [
  "Заявка и обсуждение задачи",
  "Оценка и предложение решения",
  "Согласование сроков и стоимости",
  "Выполнение работ",
  "Передача результата и поддержка",
] as const;

const faq = [
  {
    q: "Сколько стоит ваша работа и как узнать цену заранее?",
    a: "Первичная консультация и оценка задачи — бесплатно. Стоимость называем до начала работ и фиксируем — без скрытых доплат в процессе.",
  },
  {
    q: "Выезжаете ли вы на дом или в офис?",
    a: "Да, выезжаем к клиентам в Москве и Московской области. Большинство задач по компьютерной помощи решаем удалённо в тот же день — по всей России. Изделия отправляем в любой регион России.",
  },
  {
    q: "Даёте ли вы гарантию на работы и изделия?",
    a: "Да. На выполненные работы и напечатанные изделия действует гарантия; если проблема повторится — устраним бесплатно.",
  },
  {
    q: "Работаете ли вы с организациями и по договору?",
    a: "Да, работаем с юридическими лицами: договор, счёт, закрывающие документы, возможно абонентское IT-обслуживание.",
  },
  {
    q: "Можно ли заказать нестандартное изделие, которого нет в продаже?",
    a: "Да, это наш профиль: разработаем 3D-модель по эскизу или образцу, напечатаем деталь или спроектируем устройство под вашу задачу.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VERTAXO",
  slogan: "От идеи до готового решения",
  url: SITE_URL,
  areaServed: ["Москва", "Московская область", "Россия"],
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
        image="/images/hero-main.webp"
        imageAlt="3D-принтер печатает прецизионную деталь в тёмной мастерской, на фоне размытая печатная плата, голубая и фиолетовая подсветка"
        tag="ГЛАВНАЯ"
        stats={stats}
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
        <SectionTitle index={1}>Направления</SectionTitle>
        <ServiceBanners items={services} />
      </Section>

      <Section>
        <SectionTitle index={2}>Почему выбирают нас</SectionTitle>
        <StatGrid items={stats} />
      </Section>

      <Section>
        <SectionTitle index={3}>Как мы работаем</SectionTitle>
        <StepList steps={steps} />
      </Section>

      <Section>
        <SectionTitle index={4}>Примеры работ</SectionTitle>
        <PortfolioSection />
      </Section>

      <Section>
        <SectionTitle index={5}>Отзывы</SectionTitle>
        <ReviewsSection />
      </Section>

      <Section>
        <SectionTitle index={6}>Частые вопросы</SectionTitle>
        <Faq items={faq} />
      </Section>

      <CtaBlock source="/" />
    </>
  );
}
