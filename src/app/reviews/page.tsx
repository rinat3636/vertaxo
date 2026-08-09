import type { Metadata } from "next";
import { Section, CtaBlock } from "@/components/sections";
import { Card } from "@/components/Card";
import { fetchReviews } from "@/lib/queries";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Отзывы клиентов | VERTAXO",
  description:
    "Отзывы клиентов VERTAXO о компьютерной помощи, 3D-печати и инженерных разработках в Москве и Московской области.",
  alternates: { canonical: `${SITE_URL}/reviews` },
};

export default async function ReviewsPage() {
  const reviews = await fetchReviews();

  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-bold mb-2u">Отзывы</h1>
        <p className="text-metal max-w-prose mb-4u">
          Что говорят клиенты о работе с VERTAXO.
        </p>

        {reviews.length > 0 ? (
          <div className="grid gap-3u sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <Card key={review._id}>
                <p className="text-sm mb-2u">{review.text}</p>
                <p className="text-metal text-sm font-semibold">
                  — {review.author}
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-metal">
            Раздел наполняется. Уже работали с нами? Поделитесь впечатлением
            через форму ниже.
          </p>
        )}
      </Section>

      <CtaBlock source="/reviews" />
    </>
  );
}
