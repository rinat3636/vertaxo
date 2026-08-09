import { NextResponse } from "next/server";
import { getSanityWriteClient } from "@/lib/sanity";

type LeadPayload = {
  name?: string;
  contact?: string;
  message?: string;
  source?: string;
};

async function sendTelegram(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function saveToSanity(lead: Required<LeadPayload>): Promise<boolean> {
  const client = getSanityWriteClient();
  if (!client) return false;
  try {
    await client.create({
      _type: "lead",
      name: lead.name,
      contact: lead.contact,
      message: lead.message,
      source: lead.source,
      createdAt: new Date().toISOString(),
    });
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const contact = (payload.contact ?? "").trim();
  const message = (payload.message ?? "").trim();
  const source = (payload.source ?? "unknown").trim();

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Укажите имя и контакт для связи" },
      { status: 400 },
    );
  }

  const text = [
    "Новая заявка с сайта VERTAXO",
    `Страница: ${source}`,
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    message ? `Сообщение: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const [telegramOk, sanityOk] = await Promise.all([
    sendTelegram(text),
    saveToSanity({ name, contact, message, source }),
  ]);

  if (!telegramOk && !sanityOk) {
    console.error("Lead delivery failed", { source, name, contact });
    return NextResponse.json(
      {
        error:
          "Не удалось отправить заявку. Напишите нам напрямую в Telegram: https://t.me/Ilya_petrov9988",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
