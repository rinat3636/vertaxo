from PIL import Image
import numpy as np

# Проверяем что в favicon-32.png
favicon32 = Image.open("public/favicon-32.png").convert("RGBA")
print(f"favicon-32.png size: {favicon32.size}")

# Считаем уникальные цвета
pixels = np.array(favicon32)
unique_colors = len(np.unique(pixels.reshape(-1, pixels.shape[2]), axis=0))
print(f"Unique colors: {unique_colors}")

# Проверяем есть ли cyan
cyan_pixels = np.sum((pixels[:,:,0] < 50) & (pixels[:,:,1] > 150) & (pixels[:,:,2] > 200))
print(f"Cyan pixels (RGB ~0,195,254): {cyan_pixels}")

if cyan_pixels < 10:
    print("\n❌ ПРОБЛЕМА: В favicon-32.png почти нет cyan пикселей!")
    print("Пересоздаю все favicon из оригинального logo.png...")
    
    # Загружаем ОРИГИНАЛЬНЫЙ логотип
    logo = Image.open("public/images/logo.png").convert("RGBA")
    print(f"\nOriginal logo size: {logo.size}")
    
    # Считаем cyan в оригинале
    logo_pixels = np.array(logo)
    logo_cyan = np.sum((logo_pixels[:,:,0] < 50) & (logo_pixels[:,:,1] > 150) & (logo_pixels[:,:,2] > 200))
    print(f"Cyan pixels in original logo: {logo_cyan}")
else:
    print("\n✓ favicon-32.png содержит cyan пиксели")
