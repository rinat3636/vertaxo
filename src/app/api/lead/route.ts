import { NextResponse } from "next/server";
import { getSanityWriteClient } from "@/lib/sanity";
import { readChatIds, sendTelegramMessage, sendTelegramDocument } from "@/lib/telegram";

async function saveToSanity(lead: {
  name: string;
  contact: string;
  message: string;
  source: string;
}): Promise<boolean> {
  const client = getSanityWriteClient();
  if (!client) return false;
  try {
    await client.create({
      _type: "lead",
      ...lead,
      createdAt: new Date().toISOString(),
    });
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  console.log("Lead request received at", new Date().toISOString());
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name    = String(formData.get("name")    ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const source  = String(formData.get("source")  ?? "unknown").trim();

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Укажите имя и контакт для связи" },
      { status: 400 },
    );
  }

  const files: File[] = formData
    .getAll("files")
    .filter((v): v is File => v instanceof File && v.size > 0);

  const subscribers = await readChatIds();

  const text = [
    "📋 Новая заявка с сайта MATRITSA",
    `📄 Страница: ${source}`,
    `👤 Имя: ${name}`,
    `📞 Контакт: ${contact}`,
    message ? `💬 Сообщение: ${message}` : null,
    files.length > 0 ? `📎 Файлов: ${files.length}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  let telegramOk = false;

  console.log("Subscribers:", subscribers);
  console.log("Bot token present:", !!process.env.TELEGRAM_BOT_TOKEN);
  
  if (subscribers.length > 0) {
    console.log("Sending to", subscribers.length, "subscribers");
    const results = await Promise.allSettled(
      subscribers.map(chatId => sendTelegramMessage(chatId, text))
    );
    telegramOk = results.some(r => r.status === "fulfilled" && r.value);

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const caption = i === 0 ? `Файл от ${name} (${source})` : undefined;
        await Promise.allSettled(
          subscribers.map(chatId => sendTelegramDocument(chatId, files[i], caption))
        );
      }
    }
  }

  const sanityOk = await saveToSanity({ name, contact, message, source });

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
