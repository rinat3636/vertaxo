from PIL import Image

# Загружаем оригинальный логотип
logo = Image.open("public/images/logo.png").convert("RGBA")
print(f"Original logo: {logo.size}")

# Создаём favicon разных размеров с БОЛЬШИМ логотипом
sizes = [16, 32, 48, 64, 128, 180, 256, 512]

for size in sizes:
    # Тёмный фон
    icon = Image.new("RGBA", (size, size), (13, 17, 23, 255))
    
    # Масштабируем логотип на 95% площади (было 85%)
    target_height = int(size * 0.95)
    aspect = logo.width / logo.height
    target_width = int(target_height * aspect)
    
    logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Центрируем
    x = (size - logo_resized.width) // 2
    y = (size - logo_resized.height) // 2
    icon.paste(logo_resized, (x, y), logo_resized)
    
    # Сохраняем
    if size == 180:
        icon.save(f"public/apple-touch-icon.png", "PNG")
    else:
        icon.save(f"public/favicon-{size}.png", "PNG")
    
    print(f"✓ Created {size}x{size}")

# Создаём ICO из больших размеров
icons = []
for size in [16, 32, 48]:
    icons.append(Image.open(f"public/favicon-{size}.png"))

icons[0].save(
    "public/favicon.ico",
    format="ICO",
    append_images=[icons[1], icons[2]],
    sizes=[(16,16), (32,32), (48,48)]
)

print("\n✓ favicon.ico created with larger logo (95% fill)")
