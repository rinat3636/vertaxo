import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, CtaBlock, PageHeader } from "@/components/sections";
import { Card } from "@/components/Card";
import { fetchWorks } from "@/lib/queries";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Наши работы — портфолио VERTAXO",
  description:
    "Портфолио VERTAXO: реализованные проекты по компьютерной помощи, 3D-печати и инженерным разработкам в Москве и Московской области.",
  alternates: { canonical: `${SITE_URL}/works` },
};

const categories = [
  { id: "", label: "Все" },
  { id: "computer-help", label: "Компьютерная помощь" },
  { id: "3d-printing", label: "3D-печать" },
  { id: "engineering", label: "Инженерные разработки" },
] as const;

export default async function WorksPage({
  searchParams,
}: PageProps<"/works">) {
  const params = await searchParams;
  const category =
    typeof params.category === "string" ? params.category : "";
  const works = await fetchWorks();
  const filtered = category
    ? works.filter((w) => w.category === category)
    : works;

  return (
    <>
      <Section>
        <PageHeader
          tag="ПОРТФОЛИО"
          title="Наши работы"
          text="Реализованные проекты по трём направлениям: компьютерная помощь, 3D-печать и инженерные разработки."
        />

        <nav aria-label="Фильтр по категориям" className="flex flex-wrap gap-1u mb-4u">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={c.id ? `/works?category=${c.id}` : "/works"}
              className={`rounded-card border px-2u py-1u text-sm transition-colors duration-150 ${
                category === c.id
                  ? "border-accent text-accent"
                  : "border-metal/40 text-metal hover:text-text-primary"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </nav>

        {filtered.length > 0 ? (
          <div className="grid gap-3u sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((work) => (
              <Card key={work._id}>
                {work.imageUrl && (
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    width={600}
                    height={400}
                    className="rounded-card mb-2u w-full h-auto"
                  />
                )}
                <h2 className="text-lg font-semibold mb-1u">{work.title}</h2>
                {work.description && (
                  <p className="text-metal text-sm">{work.description}</p>
                )}
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
              Раздел наполняется. Расскажите о вашей задаче через форму ниже —
              возможно, следующий проект в портфолио будет вашим.
            </p>
          </div>
        )}
      </Section>

      <CtaBlock source="/works" />
    </>
  );
}
