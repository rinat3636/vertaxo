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
    image: "/images/computer-help.webp",
    imageAlt:
      "Тёмное рабочее место IT-специалиста: ноутбук и серверная стойка с голубой подсветкой",
  },
  {
    title: "3D-моделирование и печать",
    description: "Проектирование, прототипирование и изготовление деталей.",
    href: "/3d-printing",
    image: "/images/3d-printing.webp",
    imageAlt:
      "3D-принтер печатает точную механическую деталь, видны слои филамента",
  },
  {
    title: "Инженерные разработки",
    description: "Создание новых технических решений под задачи заказчика.",
    href: "/engineering",
    image: "/images/engineering.webp",
    imageAlt:
      "Инженерный чертёж механической детали, светящиеся голубые линии на тёмном фоне",
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
    q: "Чем занимается VERTAXO?",
    a: "Три направления: компьютерная помощь и защита данных, 3D-моделирование и 3D-печать, инженерные разработки под задачи заказчика.",
  },
  {
    q: "Где вы работаете?",
    a: "Москва и Московская область: выезд к клиенту, доставка изделий, а также удалённая помощь по всей России.",
  },
  {
    q: "Как оставить заявку?",
    a: "Заполните форму на сайте или напишите напрямую в Telegram — ответим в течение рабочего часа.",
  },
  {
    q: "Сколько стоит консультация?",
    a: "Первичная консультация и оценка задачи — бесплатно.",
  },
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
        image="/images/hero-main.webp"
        imageAlt="Индустриально-технологическая композиция: печатная плата, сопло 3D-принтера и чертёжная сетка в голубой подсветке"
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
        <div className="flex flex-wrap gap-2u mt-4u">
          <ButtonLink href="#lead">Получить консультацию</ButtonLink>
          <ButtonLink href="#lead" variant="secondary">
            Оставить заявку
          </ButtonLink>
        </div>
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

      <Section>
        <SectionTitle index={7}>О компании</SectionTitle>
        <div className="grid gap-4u lg:grid-cols-[220px_1fr] items-start">
          <div className="w-[220px] aspect-square rounded-card border border-metal/30 bg-surface flex flex-col items-center justify-center gap-2u text-center px-2u">
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
            <p className="text-metal text-xs">
              Фото Ильи появится здесь после согласования
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2u">Илья Петров</h3>
            <p className="text-metal max-w-prose">
              Основатель VERTAXO. Больше 10 лет работает на стыке IT,
              инженерии и производства — от компьютерной помощи и защиты
              данных до проектирования и 3D-печати. Собственная команда
              объединяет три направления в одном месте, чтобы клиенту не
              приходилось искать разных подрядчиков под разные задачи.
            </p>
          </div>
        </div>
      </Section>

      <CtaBlock source="/" />
    </>
  );
}
