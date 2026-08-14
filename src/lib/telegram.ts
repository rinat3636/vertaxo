import { promises as fs } from "fs";
import { fetch as undiciFetch, ProxyAgent, FormData } from "undici";

const SUBSCRIBERS_FILE = "/opt/vertaxo/telegram_subscribers.json";

export function getBotToken(): string {
  return process.env.TELEGRAM_BOT_TOKEN || "";
}

export async function readChatIds(): Promise<number[]> {
  try {
    const raw = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.filter((v): v is number => typeof v === "number");
    }
  } catch {
    // файла ещё нет
  }
  return [];
}

function apiBase(): string {
  return (
    process.env.TELEGRAM_API_BASE?.replace(/\/+$/, "") ||
    "https://api.telegram.org"
  );
}

function proxyDispatcher(): ProxyAgent | undefined {
  const url = process.env.TELEGRAM_PROXY_URL;
  return url ? new ProxyAgent(url) : undefined;
}

export async function sendTelegramMessage(
  chatId: number | string,
  text: string,
): Promise<boolean> {
  const token = getBotToken();
  if (!token) return false;
  try {
    const res = await undiciFetch(`${apiBase()}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      dispatcher: proxyDispatcher(),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Telegram sendMessage failed. Status:", res.status, "Response:", errText);
    } else {
      console.log("Telegram sendMessage success:", res.ok, "Status:", res.status);
    }
    return res.ok;
  } catch (err) {
    console.error("Telegram sendMessage error:", err instanceof Error ? err.message : String(err));
    console.error("Stack:", err instanceof Error ? err.stack : "no stack");
    return false;
  }
}

export async function sendTelegramDocument(
  chatId: number | string,
  file: File,
  caption?: string,
): Promise<boolean> {
  const token = getBotToken();
  if (!token) return false;
  try {
    // Convert Web API File to Blob
    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: file.type || "application/octet-stream" });
    
    const fd = new FormData();
    fd.set("chat_id", String(chatId));
    fd.set("document", blob, file.name);
    if (caption) fd.set("caption", caption);

    const res = await undiciFetch(`${apiBase()}/bot${token}/sendDocument`, {
      method: "POST",
      body: fd,
      dispatcher: proxyDispatcher(),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Telegram sendDocument failed. Status:", res.status, "Response:", errText);
    } else {
      console.log("Telegram sendDocument success for:", file.name);
    }
    return res.ok;
  } catch (err) {
    console.error("Telegram sendDocument error:", err instanceof Error ? err.message : String(err));
    console.error("Stack:", err instanceof Error ? err.stack : "no stack");
    return false;
  }
}
