"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { NAV_ITEMS, CONTACTS } from "@/lib/site";
import { reachGoal } from "./Metrika";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md border-b border-metal/20">
      <nav className="mx-auto max-w-7xl px-2u py-1u">
        <div className="flex items-center justify-between gap-2u">
          {/* Logo */}
          <Link href="/" aria-label="matritsa — на главную" onClick={() => setOpen(false)} className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex items-center gap-4u">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-metal hover:text-accent transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Phone & CTA */}
          <div className="hidden xl:flex items-center gap-3u shrink-0">
            <a
              href={CONTACTS.maxPhoneHref}
              onClick={() => reachGoal("phone_click")}
              className="text-accent hover:text-accent-secondary font-semibold text-base transition-colors whitespace-nowrap"
            >
              {CONTACTS.maxPhone}
            </a>
            <ButtonLink href="#lead" onClick={() => reachGoal("cta_click")}>
              Консультация
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-text-primary p-1u cursor-pointer hover:text-accent transition-colors"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" strokeWidth="2" stroke="currentColor" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden border-t border-metal/20 bg-surface/95 backdrop-blur-md px-2u py-3u">
          <a
            href={CONTACTS.maxPhoneHref}
            onClick={() => {
              setOpen(false);
              reachGoal("phone_click");
            }}
            className="block text-accent hover:text-accent-secondary font-semibold text-lg mb-3u text-center"
          >
            {CONTACTS.maxPhone}
          </a>
          <ul className="flex flex-col gap-2u mb-3u">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1u text-metal hover:text-accent transition-colors duration-200 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#lead"
            className="w-full"
            onClick={() => {
              setOpen(false);
              reachGoal("cta_click");
            }}
          >
            Получить консультацию
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
