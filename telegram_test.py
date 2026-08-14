import json

async def test_send():
    # Read subscribers
    try:
        with open('/opt/vertaxo/telegram_subscribers.json', 'r') as f:
            subs = json.load(f)
        print(f"Subscribers: {subs}")
    except Exception as e:
        print(f"Error reading subscribers: {e}")
    
    # Test with requests
    import requests
    token = '8931290560:AAFMsX0RcH9j3aMHM-bRW7_bcEBca24-XMI'
    
    for chat_id in [8384059998]:
        url = f'https://api.telegram.org/bot{token}/sendMessage'
        data = {'chat_id': chat_id, 'text': '🧪 Test from Python script'}
        try:
            r = requests.post(url, json=data)
            print(f"Status: {r.status_code}, Response: {r.text[:200]}")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == '__main__':
    import asyncio
    asyncio.run(test_send())
