"use client";

import { useState } from "react";
import { Button } from "./Button";
import { reachGoal } from "./Metrika";

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !contact) {
      setStatus("error");
      setErrorMessage("Пожалуйста, укажите имя и контакт для связи.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message, source }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(body?.error ?? "Не удалось отправить заявку");
      }
      setStatus("success");
      reachGoal("form_submit");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в Telegram.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="bg-surface border border-accent/60 rounded-card p-4u text-center"
        role="status"
      >
        <p className="text-text-primary text-lg font-semibold mb-1u">
          Заявка отправлена!
        </p>
        <p className="text-metal">
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2u"
      noValidate
    >
      <label className="flex flex-col gap-1u">
        <span className="text-metal text-sm">Ваше имя *</span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="bg-bg border border-metal/40 rounded-card px-2u py-2u text-text-primary focus:border-accent focus:outline-none transition-colors duration-150"
        />
      </label>
      <label className="flex flex-col gap-1u">
        <span className="text-metal text-sm">
          Контакт (телефон, Telegram или e-mail) *
        </span>
        <input
          name="contact"
          type="text"
          required
          autoComplete="tel"
          className="bg-bg border border-metal/40 rounded-card px-2u py-2u text-text-primary focus:border-accent focus:outline-none transition-colors duration-150"
        />
      </label>
      <label className="flex flex-col gap-1u">
        <span className="text-metal text-sm">Сообщение</span>
        <textarea
          name="message"
          rows={4}
          className="bg-bg border border-metal/40 rounded-card px-2u py-2u text-text-primary focus:border-accent focus:outline-none transition-colors duration-150 resize-y"
        />
      </label>

      {status === "error" && (
        <p className="text-accent-secondary" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Отправляем…" : "Отправить заявку"}
      </Button>
      <p className="text-metal text-xs">
        Нажимая «Отправить заявку», вы соглашаетесь с{" "}
        <a href="/privacy" className="underline hover:text-text-primary">
          политикой конфиденциальности
        </a>
        .
      </p>
    </form>
  );
}
