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

// Черновик: финальный список услуг направления ожидается от заказчика
// (SPEC.md, открытый вопрос №1). До получения — noindex, не рекламировать.
export const metadata: Metadata = {
  title: "Инженерные разработки под задачи заказчика | VERTAXO",
  description:
    "Инженерные разработки на заказ по всей России: проектирование и создание новых технических решений под задачи заказчика. От идеи до готового решения.",
  alternates: { canonical: `${SITE_URL}/engineering` },
  robots: { index: false, follow: false },
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
  { value: "10+ лет", label: "инженерного опыта" },
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

export default function EngineeringPage() {
  return (
    <>
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
