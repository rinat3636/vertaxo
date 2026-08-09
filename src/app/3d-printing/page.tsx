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
  PortfolioTeaser,
  ReviewsTeaser,
  CtaBlock,
} from "@/components/sections";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "3D-печать и 3D-моделирование на заказ в Москве | VERTAXO",
  description:
    "3D-печать и 3D-моделирование на заказ в Москве и МО: разработка моделей, прототипирование, мелкосерийное производство FDM. Качественные изделия — оставьте заявку.",
  alternates: { canonical: `${SITE_URL}/3d-printing` },
};

const services = [
  {
    title: "Разработка 3D-моделей",
    description: "Индивидуальные модели по эскизу, чертежу или образцу.",
  },
  {
    title: "Подготовка к печати",
    description: "Оптимизация геометрии и параметров под технологию FDM.",
  },
  {
    title: "Изготовление изделий",
    description: "Печать функциональных деталей и корпусов на заказ.",
  },
  {
    title: "Прототипирование",
    description: "Быстрые прототипы для проверки идей и конструкций.",
  },
  {
    title: "Мелкосерийное производство",
    description: "Партии деталей без затрат на литьевые формы.",
  },
] as const;

const stats = [
  { value: "FDM", label: "проверенная технология печати" },
  { value: "От 1 шт.", label: "печатаем и единичные изделия, и серии" },
  { value: "Полный цикл", label: "от модели до готового изделия" },
  { value: "Москва и МО", label: "доставка и самовывоз" },
] as const;

const steps = [
  "Разработка моделей",
  "Подготовка к печати",
  "Изготовление изделий",
  "Прототипирование",
  "Мелкосерийное производство",
] as const;

const faq = [
  {
    q: "У меня нет 3D-модели, только идея. Вы поможете?",
    a: "Да, разработаем модель по вашему эскизу, чертежу, фотографии или физическому образцу.",
  },
  {
    q: "Какие сроки изготовления?",
    a: "Простые детали печатаем за 1–2 дня. Сроки на разработку модели и серии согласуем после оценки задачи.",
  },
  {
    q: "Можно ли напечатать деталь взамен сломанной?",
    a: "Да, восстановление сломанных деталей — одна из самых частых задач. Снимем размеры с образца и изготовим замену.",
  },
  {
    q: "Как получить готовое изделие?",
    a: "Самовывоз или доставка по Москве и Московской области — согласуем удобный вариант при оформлении заказа.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3D-печать и 3D-моделирование на заказ",
  provider: { "@type": "LocalBusiness", name: "VERTAXO", url: SITE_URL },
  areaServed: ["Москва", "Московская область"],
  serviceType: "3D-печать",
};

export default function PrintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        title="3D-моделирование и 3D-печать"
        subtitle="Качественные изделия. Разработка индивидуальных моделей"
        actions={<ButtonLink href="#lead">Оставить заявку</ButtonLink>}
      />

      <Section>
        <SectionTitle>Услуги направления</SectionTitle>
        <ServiceCards items={services} />
      </Section>

      <Section>
        <SectionTitle>Почему выбирают нас</SectionTitle>
        <StatGrid items={stats} />
      </Section>

      <Section>
        <SectionTitle>Этапы работы</SectionTitle>
        <StepList steps={steps} />
        <p className="text-metal mt-3u max-w-prose">
          Работаем по технологии FDM: от разработки модели и подготовки к
          печати до изготовления готовых изделий, прототипирования и
          мелкосерийного производства.
        </p>
      </Section>

      <Section>
        <SectionTitle>Примеры работ</SectionTitle>
        <PortfolioTeaser category="3d-printing" />
      </Section>

      <Section>
        <SectionTitle>Отзывы</SectionTitle>
        <ReviewsTeaser />
      </Section>

      <Section>
        <SectionTitle>Частые вопросы</SectionTitle>
        <Faq items={faq} />
      </Section>

      <CtaBlock
        source="/3d-printing"
        title="Нужна деталь или прототип?"
        text="Пришлите эскиз, чертёж или фото — оценим задачу и предложим решение."
      />
    </>
  );
}
