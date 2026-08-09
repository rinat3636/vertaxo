import type { Metadata } from "next";
import { Section, CtaBlock, PageHeader } from "@/components/sections";
import { Card } from "@/components/Card";
import { fetchReviews } from "@/lib/queries";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Отзывы клиентов | VERTAXO",
  description:
    "Отзывы клиентов VERTAXO о компьютерной помощи, 3D-печати и инженерных разработках по всей России.",
  alternates: { canonical: `${SITE_URL}/reviews` },
};

export default async function ReviewsPage() {
  const reviews = await fetchReviews();

  return (
    <>
      <Section>
        <PageHeader
          tag="ОТЗЫВЫ"
          title="Отзывы"
          text="Что говорят клиенты о работе с VERTAXO."
        />

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
          <div className="relative overflow-hidden bg-surface border border-metal/20 rounded-card p-4u">
            <span
              aria-hidden="true"
              className="absolute inset-0 blueprint-grid opacity-40"
            />
            <p className="relative text-metal max-w-prose">
              Раздел наполняется. Уже работали с нами? Поделитесь впечатлением
              через форму ниже.
            </p>
          </div>
        )}
      </Section>

      <CtaBlock source="/reviews" />
    </>
  );
}
