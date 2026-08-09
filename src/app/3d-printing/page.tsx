import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ButtonLink } from "@/components/Button";
import {
  Section,
  SectionTitle,
  ServiceCards,
  MaterialCards,
  StatGrid,
  StepList,
  Faq,
  PortfolioSection,
  ReviewsSection,
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
    icon: "model",
  },
  {
    title: "Подготовка к печати",
    description: "Оптимизация геометрии и параметров под технологию FDM.",
    icon: "slicer",
  },
  {
    title: "Изготовление изделий",
    description: "Печать функциональных деталей и корпусов на заказ.",
    icon: "printer3d",
  },
  {
    title: "Прототипирование",
    description: "Быстрые прототипы для проверки идей и конструкций.",
    icon: "prototype",
  },
  {
    title: "Мелкосерийное производство",
    description: "Партии деталей без затрат на литьевые формы.",
    icon: "batch",
  },
] as const;

// Список материалов предварительный (SPEC.md, открытый вопрос №4);
// изображения образцов подлежат замене на реальные фото.
const materials = [
  {
    title: "PLA",
    description:
      "Универсальный материал для макетов, корпусов и декоративных изделий.",
    image: "/images/material-pla.webp",
    imageAlt: "Образец изделия из PLA-пластика, напечатанный на 3D-принтере",
  },
  {
    title: "PETG",
    description:
      "Прочный и стойкий к влаге — для функциональных деталей и оснастки.",
    image: "/images/material-petg.webp",
    imageAlt: "Образец изделия из PETG-пластика, напечатанный на 3D-принтере",
  },
  {
    title: "ABS",
    description:
      "Термостойкий инженерный пластик для нагруженных деталей и корпусов.",
    image: "/images/material-abs.webp",
    imageAlt: "Образец изделия из ABS-пластика, напечатанный на 3D-принтере",
  },
  {
    title: "TPU",
    description:
      "Гибкий эластичный материал для уплотнителей, вставок и демпферов.",
    image: "/images/material-tpu.webp",
    imageAlt: "Гибкий образец изделия из TPU, напечатанный на 3D-принтере",
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
        image="/images/3d-printing.webp"
        imageAlt="3D-принтер печатает точную механическую деталь, видны слои филамента"
        tag="3D-ПЕЧАТЬ"
        stats={stats}
        actions={<ButtonLink href="#lead">Оставить заявку</ButtonLink>}
      />

      <Section>
        <SectionTitle index={1}>Услуги направления</SectionTitle>
        <ServiceCards items={services} />
      </Section>

      <Section>
        <SectionTitle index={2}>Материалы печати</SectionTitle>
        <MaterialCards items={materials} />
      </Section>

      <Section>
        <SectionTitle index={3}>Почему выбирают нас</SectionTitle>
        <StatGrid items={stats} />
      </Section>

      <Section>
        <SectionTitle index={4}>О направлении</SectionTitle>
        <StepList steps={steps} />
        <p className="text-metal mt-3u max-w-prose">
          Работаем по технологии FDM — послойное наплавление термопластика.
          Полный цикл: от разработки модели и подготовки к печати до
          изготовления готовых изделий, прототипирования и мелкосерийного
          производства. Подберём материал под задачу — по прочности,
          термостойкости, гибкости и внешнему виду.
        </p>
      </Section>

      <Section>
        <SectionTitle index={5}>Примеры работ</SectionTitle>
        <PortfolioSection category="3d-printing" />
      </Section>

      <Section>
        <SectionTitle index={6}>Наше оборудование</SectionTitle>
        <ul className="grid gap-2u sm:grid-cols-2 text-metal max-w-prose list-disc pl-2u marker:text-accent-secondary">
          <li>FDM-принтеры с подогреваемым столом</li>
          <li>Закрытая камера для термостойких пластиков</li>
          <li>Печать по нескольким материалам (PLA, PETG, ABS, TPU)</li>
          <li>Постобработка и контроль качества готовых изделий</li>
        </ul>
        <p className="text-metal text-sm max-w-prose mt-2u">
          Точный список моделей оборудования и характеристик публикуется после
          согласования с владельцем — уточните возможности под вашу задачу
          через форму заявки.
        </p>
      </Section>

      <Section>
        <SectionTitle index={7}>Отзывы</SectionTitle>
        <ReviewsSection category="3d-printing" />
      </Section>

      <Section>
        <SectionTitle index={8}>Частые вопросы</SectionTitle>
        <Faq items={faq} />
      </Section>

      <Section>
        <SectionTitle index={9}>Новые разработки</SectionTitle>
        <p className="text-metal max-w-prose">
          Анонсы новых изделий и собственных разработок публикуются в разделе{" "}
          <a href="/works" className="text-accent hover:underline">
            «Наши работы»
          </a>{" "}
          и в Telegram-канале.
        </p>
      </Section>

      <CtaBlock
        source="/3d-printing"
        title="Нужна деталь или прототип?"
        text="Пришлите эскиз, чертёж или фото — оценим задачу и предложим решение."
      />
    </>
  );
}
