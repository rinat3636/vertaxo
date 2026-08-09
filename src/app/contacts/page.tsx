import type { Metadata } from "next";
import { Section, CtaBlock, PageHeader } from "@/components/sections";
import { CONTACTS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты | VERTAXO",
  description:
    "Свяжитесь с VERTAXO: Telegram, телефон, форма обратной связи. Компьютерная помощь, 3D-печать и инженерные разработки по всей России.",
  alternates: { canonical: `${SITE_URL}/contacts` },
};

export default function ContactsPage() {
  return (
    <>
      <Section>
        <PageHeader
          tag="КОНТАКТЫ"
          title="Контакты"
          text="Выезд — в Москве и Московской области, удалённо и с доставкой — по всей России. Напишите нам удобным способом — ответим быстро."
        />
        <ul className="grid gap-3u sm:grid-cols-3">
          <li className="relative bg-surface border border-metal/20 rounded-card p-3u">
            <span
              aria-hidden="true"
              className="absolute top-0 left-3u h-[2px] w-4u bg-accent"
            />
            <span className="font-mono text-metal/60 text-xs uppercase tracking-widest block mb-1u">
              Контактное лицо
            </span>
            <span className="font-semibold text-lg">{CONTACTS.person}</span>
          </li>
          <li className="relative bg-surface border border-metal/20 rounded-card p-3u">
            <span
              aria-hidden="true"
              className="absolute top-0 left-3u h-[2px] w-4u bg-accent"
            />
            <span className="font-mono text-metal/60 text-xs uppercase tracking-widest block mb-1u">
              Telegram
            </span>
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold text-lg"
            >
              @Ilya_petrov9988
            </a>
          </li>
          <li className="relative bg-surface border border-metal/20 rounded-card p-3u">
            <span
              aria-hidden="true"
              className="absolute top-0 left-3u h-[2px] w-4u bg-accent"
            />
            <span className="font-mono text-metal/60 text-xs uppercase tracking-widest block mb-1u">
              MAX
            </span>
            <a
              href={CONTACTS.maxPhoneHref}
              className="font-semibold text-lg hover:text-accent transition-colors duration-150"
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
