import type { Metadata } from "next";
import { Section, PageHeader } from "@/components/sections";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | MATRITSA",
  description:
    "Политика конфиденциальности сайта matritsa.tech: какие персональные данные обрабатываются, для каких целей и как они защищены.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section>
      <PageHeader tag="ДОКУМЕНТЫ" title="Политика конфиденциальности" />
      <div className="flex flex-col gap-3u max-w-prose text-metal">
        <p>
          Настоящая политика конфиденциальности действует в отношении
          информации, которую сайт matritsa.tech (далее — «Сайт») может получить о
          пользователе во время использования Сайта.
        </p>
        <h2 className="text-xl font-semibold text-text-primary">
          1. Какие данные мы собираем
        </h2>
        <p>
          При отправке формы обратной связи мы получаем: имя, контактные данные
          (телефон, e-mail или Telegram) и текст сообщения. Также автоматически
          собираются обезличенные данные о посещении Сайта (через
          Яндекс.Метрику).
        </p>
        <h2 className="text-xl font-semibold text-text-primary">
          2. Цели обработки
        </h2>
        <p>
          Данные используются исключительно для связи с вами по вашей заявке и
          улучшения работы Сайта. Данные не передаются третьим лицам, за
          исключением случаев, предусмотренных законодательством РФ.
        </p>
        <h2 className="text-xl font-semibold text-text-primary">
          3. Хранение и защита
        </h2>
        <p>
          Данные заявок хранятся на серверах, расположенных на территории
          Российской Федерации, в соответствии с требованиями Федерального
          закона № 152-ФЗ «О персональных данных».
        </p>
        <h2 className="text-xl font-semibold text-text-primary">
          4. Ваши права
        </h2>
        <p>
          Вы можете запросить удаление своих персональных данных, направив
          запрос через любой из контактов, указанных на странице «Контакты».
        </p>
        <p>
          Оператор данных: ИП Петров Илья. Используя Сайт, вы соглашаетесь с
          настоящей политикой конфиденциальности.
        </p>
      </div>
    </Section>
  );
}
