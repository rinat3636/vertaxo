"use client";

import { useState } from "react";
import { CONTACTS } from "@/lib/site";
import { reachGoal } from "./Metrika";

const items = [
  {
    href: CONTACTS.telegram,
    label: "Telegram",
    icon: "/telegram-icon.png",
    imgClass: "h-7 w-7 rounded-full",
    goal: "telegram_click",
  },
  {
    href: CONTACTS.maxUrl,
    label: "MAX",
    icon: "/max-icon.png",
    imgClass: "h-7 w-7 rounded-lg",
    goal: "max_click",
  },
  {
    href: CONTACTS.vk,
    label: "VK",
    icon: "/vk-icon.svg",
    imgClass: "h-7 w-7 rounded-lg",
    goal: "vk_click",
  },
  {
    href: CONTACTS.maxPhoneHref,
    label: CONTACTS.maxPhone,
    icon: null,
    goal: "phone_click",
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2u sm:bottom-6 sm:right-6">
      {open && (
        <div className="w-64 rounded-card border border-metal/30 bg-surface/95 p-3u shadow-2xl backdrop-blur-md sm:w-72">
          <p className="mb-2u px-1u text-sm font-semibold text-text-primary">Связаться</p>
          <div className="flex flex-col gap-2u">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => reachGoal(item.goal)}
                className="flex items-center gap-2u rounded-lg bg-metal/5 px-2u py-1.5u transition-colors hover:bg-metal/10"
              >
                {item.icon ? (
                  <img src={item.icon} alt="" className={item.imgClass} />
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-bg">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                )}
                <span className="text-sm font-medium text-text-primary">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Закрыть меню" : "Связаться"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-lg shadow-accent/30 transition-transform hover:scale-105 active:scale-95"
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <ChatIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3C6.98 3 3 6.58 3 11c0 2.1.9 4 2.4 5.4-.1 1.2-.5 2.3-1.2 3.2-.2.3 0 .7.4.6 1.6-.3 3-.9 4.1-1.7 1.1.3 2.2.5 3.3.5 5.02 0 9-3.58 9-8s-3.98-8-9-8Z"
        fill="currentColor"
      />
      <path d="M9 11h6M9 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.1 2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
