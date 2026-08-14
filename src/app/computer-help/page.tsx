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
  title: "IT поддержка организаций в Москве и МО | matritsa",
  description:
    "IT поддержка организаций: выезд в Москве и области, удалённо по России. Администрирование серверов, 1С, сети, безопасность. От 5000₽/мес. Звоните: +7 962 362 99 88",
  alternates: { canonical: `${SITE_URL}/computer-help` },
  keywords: [
    "it поддержка организаций москва",
    "абонентское it обслуживание",
    "системный администратор аутсорсинг",
    "администрирование серверов",
    "техподдержка 1с",
    "настройка корпоративной сети",
    "информационная безопасность для бизнеса",
  ],
  openGraph: {
    title: "IT поддержка организаций в Москве и МО",
    description:
      "Администрирование серверов, 1С, сети, безопасность. Выезд в Москве и МО, удалённо по России. От 5000₽/мес.",
    url: `${SITE_URL}/computer-help`,
    images: [
      {
        url: "/images/og-computer-help.jpg",
        width: 1200,
        height: 640,
        alt: "IT поддержка организаций matritsa",
      },
    ],
  },
};

const services = [
  {
    title: "Техническая поддержка пользователей",
    description: "Оперативное решение проблем с компьютерами и программами.",
    icon: "support",
  },
  {
    title: "Администрирование 1С",
    description: "Установка, обновление и сопровождение конфигураций 1С.",
    icon: "database",
  },
  {
    title: "Информационная безопасность",
    description: "Защита данных, антивирусная защита, аудит безопасности.",
    icon: "shield",
  },
  {
    title: "Организация удалённого доступа",
    description: "Безопасный доступ к рабочим ресурсам из любой точки.",
    icon: "remote",
  },
  {
    title: "Настройка сетей",
    description: "Проектирование и настройка локальных сетей и Wi-Fi.",
    icon: "network",
  },
  {
    title: "Настройка рабочих мест",
    description: "Подготовка компьютеров и периферии к работе под ключ.",
    icon: "workstation",
  },
  {
    title: "Резервное копирование данных",
    description: "Автоматическое резервное копирование и восстановление.",
    icon: "backup",
  },
  {
    title: "Доступ к корпоративным файлам",
    description: "Файловые хранилища и разграничение прав доступа.",
    icon: "files",
  },
  {
    title: "Разработка и создание сайтов",
    description: "Сайты для бизнеса: от лендинга до корпоративного портала.",
    icon: "code",
  },
  {
    title: "Сборка и настройка серверов",
    description: "Проектирование, сборка и настройка серверов под задачи бизнеса.",
    icon: "database",
  },
  {
    title: "Консультации",
    description: "Помощь в выборе техники, ПО и IT-решений для бизнеса.",
    icon: "chat",
  },
] as const;

const stats = [
  { value: "25+ лет", label: "опыта администрирования и поддержки" },
  { value: "24/7", label: "критичные проблемы решаем без выходных" },
  { value: "99%", label: "довольных клиентов" },
  { value: "Вся Россия", label: "удалённая помощь, выезд — по Москве и МО" },
] as const;

const steps = [
  "Заявка и диагностика проблемы",
  "Оценка объёма работ и согласование",
  "Выполнение работ — удалённо или с выездом",
  "Проверка результата вместе с вами",
  "Поддержка и сопровождение",
] as const;

const faq = [
  {
    q: "Работаете ли вы удалённо?",
    a: "Да, большинство задач решаем удалённо — поэтому работаем с клиентами по всей России. При необходимости выезжаем к вам в пределах Москвы и Московской области.",
  },
  {
    q: "Обслуживаете ли вы организации по договору?",
    a: "Да, берём компании на абонентское IT-обслуживание: поддержка пользователей, серверов, сети и 1С по фиксированной ежемесячной ставке.",
  },
  {
    q: "Как быстро вы реагируете на заявку?",
    a: "На заявки отвечаем в течение рабочего часа. Критичные проблемы (не работает сеть, 1С, сервер) берём в работу немедленно.",
  },
  {
    q: "Можно ли восстановить удалённые данные?",
    a: "Во многих случаях — да. Чем раньше вы обратитесь и чем меньше использовался диск после удаления, тем выше шанс восстановления.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "IT поддержка организаций MATRITSA",
  image: `${SITE_URL}/images/og-computer-help.jpg`,
  "@id": `${SITE_URL}/computer-help`,
  url: `${SITE_URL}/computer-help`,
  telephone: "+79623629988",
  priceRange: "от 5000₽",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    addressRegion: "Московская область",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.755826,
    longitude: 37.6173,
  },
  areaServed: [
    { "@type": "City", name: "Москва" },
    { "@type": "State", name: "Московская область" },
    { "@type": "Country", name: "Россия" },
  ],
  serviceType: "IT поддержка организаций",
  provider: {
    "@type": "LocalBusiness",
    name: "MATRITSA",
    url: SITE_URL,
    telephone: "+79623629988",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    price: "5000",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "5000",
      priceCurrency: "RUB",
      unitText: "месяц",
    },
  },
};

export default function ComputerHelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        title="IT поддержка организаций и защита данных"
        subtitle="Поддержка пользователей, администрирование серверов, информационная безопасность и 1С — в Москве и Московской области, удалённо по всей России"
        image="/images/computer-help.webp"
        imageAlt="Мастерская по ремонту компьютеров: открытый системный блок на столе, ноутбук с диагностикой на фоне, голубая и фиолетовая подсветка"
        tag="IT ПОДДЕРЖКА"
        stats={stats}
        actions={<ButtonLink href="#lead">Получить консультацию</ButtonLink>}
      />

      <Section>
        <SectionTitle index={1}>Что мы делаем</SectionTitle>
        <ServiceCards items={services} />
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
        <PortfolioSection category="computer-help" />
      </Section>

      <Section>
        <SectionTitle index={5}>Отзывы</SectionTitle>
        <ReviewsSection category="computer-help" />
      </Section>

      <Section>
        <SectionTitle index={6}>Частые вопросы</SectionTitle>
        <Faq items={faq} />
      </Section>

      <CtaBlock
        source="/computer-help"
        title="Нужна помощь с компьютерами или сетью?"
        text="Опишите проблему — предложим решение и назовём сроки."
      />
    </>
  );
}
