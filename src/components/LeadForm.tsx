"use client";

import { useState, useRef } from "react";
import { Button } from "./Button";
import { reachGoal } from "./Metrika";

type Status = "idle" | "loading" | "success" | "error";

const MAX_FILES = 3;
const MAX_SIZE_MB = 20;
const ALLOWED_TYPES = [
  "image/jpeg", "image/png", "image/webp", "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
const ALLOWED_EXT = ".jpg,.jpeg,.png,.webp,.gif,.pdf,.doc,.docx,.xls,.xlsx";

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function LeadForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError("");
    const selected = Array.from(e.target.files ?? []);
    const combined = [...files];

    for (const f of selected) {
      if (combined.length >= MAX_FILES) {
        setFileError(`Максимум ${MAX_FILES} файла`);
        break;
      }
      if (!ALLOWED_TYPES.includes(f.type)) {
        setFileError(`Файл «${f.name}» имеет недопустимый тип`);
        continue;
      }
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        setFileError(`Файл «${f.name}» размер превышает ${MAX_SIZE_MB} МБ`);
        continue;
      }
      if (combined.find((x) => x.name === f.name && x.size === f.size)) continue;
      combined.push(f);
    }
    setFiles(combined);
    if (inputRef.current) inputRef.current.value = "";
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setFileError("");
  }

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

    const fd = new FormData();
    fd.append("name", name);
    fd.append("contact", contact);
    fd.append("message", message);
    fd.append("source", source);
    files.forEach((f) => fd.append("files", f));

    try {
      const res = await fetch("/api/lead", { method: "POST", body: fd });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Не удалось отправить заявку");
      }
      setStatus("success");
      reachGoal("form_submit");
      form.reset();
      setFiles([]);
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
      <div className="rounded-xl bg-surface p-6 md:p-8 text-center border border-accent/20">
        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 mb-3 md:mb-4">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-text-primary">Спасибо!</h3>
        <p className="text-text-secondary">Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2u md:gap-3u"
    >
      <div>
        <label htmlFor="name" className="block text-text-primary font-medium mb-1u text-sm md:text-base">
          Ваше имя <span className="text-accent-secondary">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={status === "loading"}
          className="w-full px-3 py-2 md:py-2.5 bg-bg border border-accent-secondary/30 rounded-lg text-text-primary placeholder:text-metal focus:outline-none focus:border-accent disabled:opacity-50 text-sm md:text-base"
          placeholder="Иван Иванов"
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-text-primary font-medium mb-1u text-sm md:text-base">
          Контакт (телефон, Telegram или e-mail) <span className="text-accent-secondary">*</span>
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          required
          disabled={status === "loading"}
          className="w-full px-3 py-2 md:py-2.5 bg-bg border border-accent-secondary/30 rounded-lg text-text-primary placeholder:text-metal focus:outline-none focus:border-accent disabled:opacity-50 text-sm md:text-base"
          placeholder="+7 900 123-45-67"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-text-primary font-medium mb-1u text-sm md:text-base">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          disabled={status === "loading"}
          rows={3}
          className="w-full px-3 py-2 bg-bg border border-accent-secondary/30 rounded-lg text-text-primary placeholder:text-metal focus:outline-none focus:border-accent resize-none disabled:opacity-50"
          placeholder="Опишите вашу задачу или вопрос"
        />
      </div>

      <div>
        <label className="block text-text-primary font-medium mb-1u text-sm md:text-base">
          Прикрепить файлы (до {MAX_FILES} файлов, макс. {MAX_SIZE_MB} МБ каждый)
        </label>
        <div
          className="border-2 border-dashed border-accent-secondary/30 rounded-lg p-3 md:p-4 text-center cursor-pointer hover:border-accent transition-colors"
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={ALLOWED_EXT}
            onChange={handleFileChange}
            disabled={status === "loading" || files.length >= MAX_FILES}
            className="hidden"
          />
          <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-text-secondary text-sm">
            {files.length >= MAX_FILES
              ? `Достигнут лимит (${MAX_FILES} файла)`
              : "Нажмите или перетащите файлы сюда"
            }
          </p>
          <p className="text-metal text-xs mt-1">Фото, PDF, Word, Excel</p>
        </div>

        {fileError && <p className="text-accent-secondary text-sm mt-1">{fileError}</p>}

        {files.length > 0 && (
          <ul className="mt-2 space-y-2">
            {files.map((f, idx) => (
              <li key={`${f.name}-${idx}`} className="flex items-center gap-2 bg-surface rounded px-3 py-2">
                <span className="flex-1 text-text-primary text-sm truncate">{f.name}</span>
                <span className="text-metal text-xs">{formatSize(f.size)}</span>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  disabled={status === "loading"}
                  className="text-accent-secondary hover:text-accent disabled:opacity-50"
                  aria-label={`Удалить ${f.name}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === "error" && (
        <p className="text-accent-secondary" role="alert">{errorMessage}</p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Отправляем…" : "Отправить заявку"}
      </Button>
      <p className="text-metal text-xs leading-relaxed">
        Нажимая «Отправить заявку», вы даёте согласие на обработку персональных данных 
        в соответствии с{" "}
        <a href="/privacy" className="underline hover:text-text-primary">
          политикой конфиденциальности
        </a>
        {" "}и Федеральным законом № 152-ФЗ «О персональных данных».
      </p>
    </form>
  );
}
