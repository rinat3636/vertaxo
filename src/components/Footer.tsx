import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_ITEMS, CONTACTS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-metal/20 bg-surface mt-8u">
      <div className="mx-auto max-w-7xl px-2u py-6u grid gap-4u md:grid-cols-3">
        <div className="flex flex-col gap-2u">
          <Logo withTagline />
          <p className="text-metal text-sm">
            Компьютерная помощь, 3D-печать и инженерные разработки в Москве и
            Московской области.
          </p>
          <p className="text-metal text-sm">ИП Петров Илья</p>
        </div>

        <nav aria-label="Навигация в футере">
          <h2 className="text-text-primary text-lg mb-2u">Разделы</h2>
          <ul className="flex flex-col gap-1u">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-metal hover:text-text-primary transition-colors duration-150 text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-text-primary text-lg mb-2u">Контакты</h2>
          <ul className="flex flex-col gap-1u text-sm">
            <li className="text-metal">{CONTACTS.person}</li>
            <li>
              <a
                href={CONTACTS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Telegram
              </a>
            </li>
            <li>
              <a href={CONTACTS.maxPhoneHref} className="text-metal hover:text-text-primary">
                MAX: {CONTACTS.maxPhone}
              </a>
            </li>
            <li>
              <Link href="/privacy" className="text-metal hover:text-text-primary">
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-metal/20 py-2u">
        <p className="text-center text-metal text-sm">
          © {new Date().getFullYear()} VERTAXO. Москва и Московская область.
        </p>
      </div>
    </footer>
  );
}
