import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ButtonLink } from "@/components/Button";
import {
  Section,
  SectionTitle,
  StatGrid,
  StepList,
  Faq,
  PortfolioSection,
  ReviewsSection,
  CtaBlock,
} from "@/components/sections";
import { SITE_URL } from "@/lib/site";

// Черновик: финальный список услуг направления ожидается от заказчика
// (SPEC.md, открытый вопрос №1). До получения — noindex, не рекламировать.
export const metadata: Metadata = {
  title: "Инженерные разработки под задачи заказчика | VERTAXO",
  description:
    "Инженерные разработки на заказ в Москве и МО: проектирование и создание новых технических решений под задачи заказчика. От идеи до готового решения.",
  alternates: { canonical: `${SITE_URL}/engineering` },
  robots: { index: false, follow: false },
};

const stats = [
  { value: "10+ лет", label: "инженерного опыта" },
  { value: "Под ключ", label: "от постановки задачи до внедрения" },
  { value: "Полный цикл", label: "проектирование, прототип, изделие" },
  { value: "Москва и МО", label: "работаем по всему региону" },
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

export default function EngineeringPage() {
  return (
    <>
      <Hero
        title="Инженерные разработки"
        subtitle="Создание новых технических решений под задачи заказчика — от идеи до готового решения"
        image="/images/engineering.webp"
        imageAlt="Инженерный чертёж механической детали, светящиеся голубые линии на тёмном фоне"
        badge={{ value: stats[0].value, label: stats[0].label }}
        actions={<ButtonLink href="#lead">Обсудить задачу</ButtonLink>}
      />

      <Section>
        <SectionTitle index={1}>Что мы разрабатываем</SectionTitle>
        <p className="text-metal max-w-prose">
          Подробный перечень услуг направления готовится к публикации.
          Расскажите о вашей задаче через форму ниже — обсудим, чем можем
          помочь.
        </p>
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
