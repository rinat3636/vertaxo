import type { Metadata } from "next";
import { Section, CtaBlock } from "@/components/sections";
import { CONTACTS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты | VERTAXO",
  description:
    "Свяжитесь с VERTAXO: Telegram, телефон, форма обратной связи. Компьютерная помощь, 3D-печать и инженерные разработки в Москве и Московской области.",
  alternates: { canonical: `${SITE_URL}/contacts` },
};

export default function ContactsPage() {
  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-bold mb-2u">Контакты</h1>
        <p className="text-metal max-w-prose mb-4u">
          Работаем в Москве и Московской области. Напишите нам удобным
          способом — ответим быстро.
        </p>
        <ul className="flex flex-col gap-2u max-w-md">
          <li className="bg-surface border border-metal/20 rounded-card p-3u">
            <span className="text-metal text-sm block mb-1u">
              Контактное лицо
            </span>
            <span className="font-semibold">{CONTACTS.person}</span>
          </li>
          <li className="bg-surface border border-metal/20 rounded-card p-3u">
            <span className="text-metal text-sm block mb-1u">Telegram</span>
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              @Ilya_petrov9988
            </a>
          </li>
          <li className="bg-surface border border-metal/20 rounded-card p-3u">
            <span className="text-metal text-sm block mb-1u">MAX</span>
            <a
              href={CONTACTS.maxPhoneHref}
              className="font-semibold hover:text-accent transition-colors duration-150"
            >
              {CONTACTS.maxPhone}
            </a>
          </li>
        </ul>
      </Section>

      <CtaBlock
        source="/contacts"
        title="Напишите нам"
        text="Оставьте заявку — свяжемся с вами в ближайшее время."
      />
    </>
  );
}
