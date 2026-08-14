export const SITE_NAME = "MATRITSA";
export const SITE_TAGLINE = "От идеи до готового решения.";
export const SITE_URL = "https://matritsa.tech";

export const CONTACTS = {
  person: "Илья Петров",
  telegram: "https://t.me/Ilya_petrov9988",
  maxPhone: "+7 962 362 99 88",
  maxPhoneHref: "tel:+79623629988",
  // Ссылка на VK-канал не предоставлена (SPEC.md, открытый вопрос №7).
  // vkChannel: "https://vk.com/...",
};

export const NAV_ITEMS = [
  { href: "/computer-help", label: "IT поддержка организаций" },
  { href: "/3d-printing", label: "3D-печать" },
  { href: "/engineering", label: "Инженерные разработки" },
  { href: "/works", label: "Наши работы" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;
