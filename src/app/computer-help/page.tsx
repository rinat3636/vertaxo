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
  title:
    "Компьютерная помощь и IT-администрирование в Москве и области | VERTAXO",
  description:
    "Компьютерная помощь в Москве и МО: поддержка пользователей, администрирование 1С, настройка сетей, информационная безопасность, резервное копирование. Оставьте заявку — ответим быстро.",
  alternates: { canonical: `${SITE_URL}/computer-help` },
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
    title: "Консультации",
    description: "Помощь в выборе техники, ПО и IT-решений для бизнеса.",
    icon: "chat",
  },
] as const;

const stats = [
  { value: "10+ лет", label: "опыта администрирования и поддержки" },
  { value: "24/7", label: "критичные проблемы решаем без выходных" },
  { value: "99%", label: "довольных клиентов" },
  { value: "Москва и МО", label: "выезд к клиенту и удалённая помощь" },
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
    a: "Да, большинство задач решаем удалённо. При необходимости выезжаем к вам в пределах Москвы и Московской области.",
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
  "@type": "Service",
  name: "Компьютерная помощь и IT-администрирование",
  provider: { "@type": "LocalBusiness", name: "VERTAXO", url: SITE_URL },
  areaServed: ["Москва", "Московская область"],
  serviceType: "Компьютерная помощь",
};

export default function ComputerHelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        title="Компьютерная помощь и защита данных"
        subtitle="Поддержка пользователей, администрирование и информационная безопасность для дома и бизнеса в Москве и Московской области"
        image="/images/computer-help.webp"
        imageAlt="Тёмное рабочее место IT-специалиста: ноутбук и серверная стойка с голубой подсветкой"
        badge={{ value: stats[0].value, label: stats[0].label }}
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
