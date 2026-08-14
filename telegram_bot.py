#!/usr/bin/env python3
import json
import time
import os
from urllib.request import urlopen, Request
from urllib.parse import urlencode

BOT_TOKEN = "8931290560:AAFMsX0RcH9j3aMHM-bRW7_bcEBca24-XMI"
SUBSCRIBERS_FILE = "/opt/vertaxo/telegram_subscribers.json"

def load_subscribers():
    if os.path.exists(SUBSCRIBERS_FILE):
        with open(SUBSCRIBERS_FILE, 'r') as f:
            return json.load(f)
    return []

def save_subscribers(subscribers):
    with open(SUBSCRIBERS_FILE, 'w') as f:
        json.dump(subscribers, f, indent=2)

def telegram_request(method, data=None):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/{method}"
    if data:
        data = urlencode(data).encode('utf-8')
        req = Request(url, data=data)
    else:
        req = Request(url)
    try:
        with urlopen(req, timeout=10) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
        print(f"Error: {e}")
        return None

def send_message(chat_id, text):
    return telegram_request("sendMessage", {"chat_id": chat_id, "text": text})

def main():
    subscribers = load_subscribers()
    offset = 0
    print(f"Bot started. Current subscribers: {len(subscribers)}")
    
    while True:
        try:
            result = telegram_request("getUpdates", {"offset": offset, "timeout": 30})
            if not result or not result.get("ok"):
                time.sleep(5)
                continue
            
            updates = result.get("result", [])
            for update in updates:
                offset = update["update_id"] + 1
                message = update.get("message")
                if not message:
                    continue
                
                chat_id = message["chat"]["id"]
                text = message.get("text", "")
                username = message.get("from", {}).get("username", "unknown")
                
                if text.startswith("/start"):
                    if chat_id not in subscribers:
                        subscribers.append(chat_id)
                        save_subscribers(subscribers)
                        send_message(chat_id, "✅ Вы подписаны на уведомления о заявках с сайта matritsa.tech")
                        print(f"New subscriber: {chat_id} (@{username})")
                    else:
                        send_message(chat_id, "✅ Вы уже подписаны на уведомления")
                
                elif text.startswith("/stop"):
                    if chat_id in subscribers:
                        subscribers.remove(chat_id)
                        save_subscribers(subscribers)
                        send_message(chat_id, "❌ Вы отписались от уведомлений")
                        print(f"Unsubscribed: {chat_id} (@{username})")
                    else:
                        send_message(chat_id, "Вы не подписаны на уведомления")
                
                elif text.startswith("/status"):
                    send_message(chat_id, f"📊 Всего подписчиков: {len(subscribers)}")
        
        except KeyboardInterrupt:
            print("Bot stopped")
            break
        except Exception as e:
            print(f"Error: {e}")
            time.sleep(5)

if __name__ == "__main__":
    main()
