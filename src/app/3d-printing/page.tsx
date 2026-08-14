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
  title: "3D-печать и 3D-моделирование на заказ в Москве | matritsa",
  description:
    "3D-печать и моделирование на заказ: прототипы, детали, корпуса. Доставка по России. PLA, PETG, ABS, TPU. От 500₽. Звоните: +7 962 362 99 88",
  alternates: { canonical: `${SITE_URL}/3d-printing` },
  keywords: [
    "3d печать на заказ москва",
    "3d моделирование на заказ",
    "печать пластиком москва",
    "изготовление деталей 3d принтер",
    "прототипирование 3d печать",
    "реверс инжиниринг 3d",
    "мелкосерийное производство fdm",
  ],
  openGraph: {
    title: "3D-печать и 3D-моделирование на заказ в Москве",
    description:
      "Разработка моделей, прототипы, изделия из пластика. Доставка по России. От 500₽.",
    url: `${SITE_URL}/3d-printing`,
    images: [
      {
        url: "/images/3d-printing.webp",
        width: 1024,
        height: 1536,
        alt: "3D-печать на заказ matritsa",
      },
    ],
  },
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
  {
    title: "Реверс инжиниринг",
    description: "По образцу заказчика.",
    icon: "prototype",
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
  { value: "Вся Россия", label: "доставка в любой регион" },
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
    a: "Отправляем заказы в любой регион России транспортными компаниями и Почтой России, возможен самовывоз — согласуем удобный вариант при оформлении заказа.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "3D-печать и 3D-моделирование MATRITSA",
  image: `${SITE_URL}/images/3d-printing.webp`,
  "@id": `${SITE_URL}/3d-printing`,
  url: `${SITE_URL}/3d-printing`,
  telephone: "+79623629988",
  priceRange: "от 500₽",
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
  serviceType: "3D-печать и 3D-моделирование",
  provider: {
    "@type": "LocalBusiness",
    name: "MATRITSA",
    url: SITE_URL,
    telephone: "+79623629988",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    price: "500",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "500",
      priceCurrency: "RUB",
      unitText: "изделие",
    },
  },
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
        subtitle="Качественные изделия. Разработка индивидуальных моделей, реверс инжиниринг и изготовление деталей из пластика и металла"
        image="/images/3d-printing.webp"
        imageAlt="Крупный план сопла 3D-принтера, печатающего механическую деталь, голубая подсветка"
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
        <p className="text-metal max-w-prose mb-4u text-sm sm:text-base">
          Работаем по технологии FDM — послойное наплавление термопластика.
          Полный цикл: от разработки модели и подготовки к печати до
          изготовления готовых изделий, прототипирования и мелкосерийного
          производства. Подберём материал под задачу — по прочности,
          термостойкости, гибкости и внешнему виду.
        </p>
        <div className="flex flex-wrap gap-2u sm:gap-3u max-w-3xl">
          {steps.map((step, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-1.5u sm:gap-2u px-2.5u sm:px-3u py-1.5u sm:py-2u rounded-full border border-accent/30 bg-accent/5"
            >
              <span className="font-mono text-accent text-xs sm:text-sm font-semibold shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-text-primary text-xs sm:text-sm">{step}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle index={5}>Примеры работ</SectionTitle>
        <PortfolioSection category="3d-printing" />
      </Section>

      <Section>
        <SectionTitle index={6}>Наше оборудование</SectionTitle>
        <ul className="grid gap-2u sm:grid-cols-2 text-metal max-w-prose list-disc pl-2u marker:text-accent-secondary mb-3u">
          <li>FDM-принтеры с подогреваемым столом</li>
          <li>Закрытая подогреваемая камера для термостойких пластиков</li>
          <li>Многоцветная печать</li>
          <li>Печать по нескольким материалам (PLA, PETG, ABS, TPU)</li>
          <li>Постобработка и контроль качества готовых изделий</li>
        </ul>
        <div className="grid gap-2u sm:grid-cols-3 max-w-2xl mb-2u">
          <div className="rounded-lg border border-metal/20 bg-surface px-3u py-2u">
            <div className="font-mono text-accent text-sm mb-1u">Принтер 1</div>
            <div className="text-metal text-sm">Bambu lab P1S</div>
          </div>
          <div className="rounded-lg border border-metal/20 bg-surface px-3u py-2u">
            <div className="font-mono text-accent text-sm mb-1u">Принтер 2</div>
            <div className="text-metal text-sm">Bambu lab H2C</div>
          </div>
          <div className="rounded-lg border border-metal/20 bg-surface px-3u py-2u">
            <div className="font-mono text-accent text-sm mb-1u">Принтер 3</div>
            <div className="text-metal text-sm">Bambu lab X2D</div>
          </div>
        </div>
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
