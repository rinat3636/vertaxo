import type { Metadata } from "next";
import { Section, CtaBlock, PageHeader } from "@/components/sections";
import { CONTACTS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты | MATRITSA",
  description:
    "Свяжитесь с MATRITSA: Telegram, телефон, форма обратной связи. Компьютерная помощь, 3D-печать и инженерные разработки по всей России.",
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
              className="text-accent hover:underline font-semibold text-lg flex items-center gap-2u"
            >
              <img src="/images/telegram-logo.gif" alt="Telegram" className="h-8 w-8" />
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
            <div className="font-semibold text-lg flex items-center gap-2u">
              <img src="/images/max-logo.svg" alt="MAX" className="h-8 w-8" />
              <span className="text-metal/50 text-sm">(скоро)</span>
            </div>
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
