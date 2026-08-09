"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { NAV_ITEMS } from "@/lib/site";
import { reachGoal } from "./Metrika";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-metal/20">
      <div className="hidden md:block border-b border-metal/10">
        <div className="mx-auto max-w-7xl px-2u py-1u flex items-center justify-between font-mono text-[11px] tracking-wider text-metal/70">
          <span>{"// РАБОТАЕМ ПО ВСЕЙ РОССИИ"}</span>
          <span className="flex items-center gap-1u">
            <span
              aria-hidden="true"
              className="h-1u w-1u rounded-full bg-accent inline-block animate-pulse"
            />
            ПРИНИМАЕМ ЗАЯВКИ
          </span>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl flex items-center justify-between gap-2u px-2u py-2u">
        <Link href="/" aria-label="VERTAXO — на главную" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden lg:flex items-center gap-3u">
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

        <div className="hidden lg:block">
          <ButtonLink href="#lead" onClick={() => reachGoal("cta_click")}>
            Получить консультацию
          </ButtonLink>
        </div>

        <button
          className="lg:hidden text-text-primary p-1u cursor-pointer"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-metal/20 bg-bg px-2u py-2u">
          <ul className="flex flex-col gap-2u">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-metal hover:text-text-primary transition-colors duration-150"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
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
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
