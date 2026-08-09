import type { Metadata } from "next";
import Image from "next/image";
import { Section, CtaBlock } from "@/components/sections";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/Button";
import { fetchProducts } from "@/lib/queries";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Магазин — готовые изделия и товары | VERTAXO",
  description:
    "Каталог готовых изделий VERTAXO: 3D-печатные изделия и инженерные решения. Оставьте заявку на интересующий товар — свяжемся и согласуем доставку по Москве и МО.",
  alternates: { canonical: `${SITE_URL}/shop` },
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-bold mb-2u">Магазин</h1>
        <p className="text-metal max-w-prose mb-4u">
          Готовые изделия и товары. Выберите товар и оставьте заявку — мы
          свяжемся с вами для оформления заказа.
        </p>

        {products.length > 0 ? (
          <div className="grid gap-3u sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product._id} className="flex flex-col">
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="rounded-card mb-2u w-full h-auto"
                  />
                )}
                <h2 className="text-lg font-semibold mb-1u">
                  {product.title}
                </h2>
                {product.description && (
                  <p className="text-metal text-sm flex-1 mb-2u">
                    {product.description}
                  </p>
                )}
                {typeof product.price === "number" && (
                  <p className="font-mono text-accent font-bold mb-2u">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </p>
                )}
                <ButtonLink href="#lead" variant="secondary">
                  Оставить заявку
                </ButtonLink>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-metal">
            Каталог наполняется. Нужно что-то конкретное? Оставьте заявку через
            форму ниже — изготовим под заказ.
          </p>
        )}
      </Section>

      <CtaBlock
        source="/shop"
        title="Хотите заказать товар?"
        text="Укажите в сообщении интересующий товар — свяжемся и согласуем детали."
      />
    </>
  );
}
