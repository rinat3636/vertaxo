from PIL import Image

# Проверяем favicon-32.png
favicon32 = Image.open("public/favicon-32.png").convert("RGBA")
print(f"favicon-32.png size: {favicon32.size}")

# Берём центральный пиксель
cx, cy = 16, 16
r, g, b, a = favicon32.getpixel((cx, cy))
print(f"Center pixel RGB: ({r}, {g}, {b}) Alpha: {a}")

# Считаем cyan пиксели (примерно 0,195,254)
cyan_count = 0
for x in range(32):
    for y in range(32):
        r, g, b, a = favicon32.getpixel((x, y))
        if r < 50 and g > 150 and b > 200 and a > 200:
            cyan_count += 1

print(f"Cyan pixels: {cyan_count} / 1024")

if cyan_count < 10:
    print("\n❌ ПРОБЛЕМА: favicon НЕ содержит cyan логотип!")
    print("Пересоздаю из оригинала logo.png...")
    
    # Проверяем оригинал
    logo = Image.open("public/images/logo.png").convert("RGBA")
    print(f"Original logo: {logo.size}")
    
    # Центр оригинала
    lx, ly = logo.width // 2, logo.height // 2
    r, g, b, a = logo.getpixel((lx, ly))
    print(f"Logo center pixel RGB: ({r}, {g}, {b}) Alpha: {a}")
else:
    print(f"\n✓ Favicon содержит {cyan_count} cyan пикселей")
