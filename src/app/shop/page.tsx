import type { Metadata } from "next";
import Image from "next/image";
import { Section, CtaBlock, PageHeader } from "@/components/sections";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/Button";
import { fetchProducts } from "@/lib/queries";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Магазин — готовые изделия и товары | MATRITSA",
  description:
    "Каталог готовых изделий MATRITSA: 3D-печатные изделия и инженерные решения. Оставьте заявку на интересующий товар — свяжемся и согласуем доставку в любой регион России.",
  alternates: { canonical: `${SITE_URL}/shop` },
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <>
      <Section>
        <PageHeader
          tag="МАГАЗИН"
          title="Магазин"
          text="Готовые изделия и товары. Выберите товар и оставьте заявку — мы свяжемся с вами для оформления заказа."
        />

        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-2u sm:gap-3u lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product._id} className="flex flex-col p-1u sm:p-3u">
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="rounded-card mb-1u sm:mb-2u w-full h-auto"
                  />
                )}
                <h2 className="text-sm sm:text-lg font-semibold mb-1u">
                  {product.title}
                </h2>
                {product.description && (
                  <p className="text-metal text-xs sm:text-sm flex-1 mb-2u">
                    {product.description}
                  </p>
                )}
                {typeof product.price === "number" && (
                  <p className="font-mono text-accent font-bold text-sm sm:text-base mb-2u">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </p>
                )}
                <ButtonLink
                  href="#lead"
                  variant="secondary"
                  className="text-xs sm:text-sm px-2u py-1u sm:px-3u sm:py-2u text-center"
                >
                  Оставить заявку
                </ButtonLink>
              </Card>
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden bg-surface border border-metal/20 rounded-card p-4u">
            <span
              aria-hidden="true"
              className="absolute inset-0 blueprint-grid opacity-40"
            />
            <p className="relative text-metal max-w-prose">
              Каталог наполняется. Нужно что-то конкретное? Оставьте заявку
              через форму ниже — изготовим под заказ.
            </p>
          </div>
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
