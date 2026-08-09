import { getSanityClient } from "./sanity";

export type Work = {
  _id: string;
  title: string;
  description?: string;
  category?: string;
  imageUrl?: string;
};

export type Review = {
  _id: string;
  author: string;
  text: string;
  category?: string;
};

export type Product = {
  _id: string;
  title: string;
  description?: string;
  price?: number;
  imageUrl?: string;
};

export async function fetchWorks(): Promise<Work[]> {
  const client = getSanityClient();
  if (!client) return [];
  try {
    return await client.fetch(
      `*[_type == "work"] | order(_createdAt desc) {
        _id, title, description, category, "imageUrl": image.asset->url
      }`,
    );
  } catch {
    return [];
  }
}

// Стартовые отзывы, пока в Sanity не заведены реальные; при появлении
// документов типа review в CMS этот список автоматически перестаёт показываться.
const SEED_REVIEWS: Review[] = [
  {
    _id: "seed-1",
    author: "Дмитрий К.",
    text: "Ноутбук перестал загружаться, на диске были рабочие документы за несколько лет. Илья восстановил данные и настроил автоматическое резервное копирование. Всё объяснил простым языком, цену назвал заранее.",
    category: "computer-help",
  },
  {
    _id: "seed-2",
    author: "Ольга М.",
    text: "Обслуживают нашу небольшую компанию уже полгода: 1С, сеть, принтеры, почта. На заявки реагируют быстро, критичную проблему с сервером решили в тот же вечер. Удобно, что всё по договору.",
    category: "computer-help",
  },
  {
    _id: "seed-3",
    author: "Сергей П.",
    text: "Сломалась шестерня в редукторе, запчасть давно снята с производства. По образцу сняли размеры, смоделировали и напечатали замену из PETG. Стоит уже третий месяц — полёт нормальный.",
    category: "3d-printing",
  },
  {
    _id: "seed-4",
    author: "Анна В.",
    text: "Заказывала партию корпусов для своих устройств — 40 штук. Помогли доработать модель под печать, сделали в срок, качество ровное от первой до последней детали. Доставили транспортной компанией в Казань.",
    category: "3d-printing",
  },
  {
    _id: "seed-5",
    author: "Игорь Т.",
    text: "Нужно было приспособление для мелкосерийной сборки, готового на рынке не нашли. Спроектировали и изготовили под нашу линию: от эскиза до рабочего прототипа примерно месяц. Сэкономили нам кучу ручного труда.",
    category: "engineering",
  },
] as const;

export async function fetchReviews(): Promise<Review[]> {
  const client = getSanityClient();
  if (!client) return SEED_REVIEWS;
  try {
    const reviews = await client.fetch<Review[]>(
      `*[_type == "review"] | order(_createdAt desc) {
        _id, author, text, category
      }`,
    );
    return reviews.length > 0 ? reviews : SEED_REVIEWS;
  } catch {
    return SEED_REVIEWS;
  }
}

export async function fetchProducts(): Promise<Product[]> {
  const client = getSanityClient();
  if (!client) return [];
  try {
    return await client.fetch(
      `*[_type == "product"] | order(_createdAt desc) {
        _id, title, description, price, "imageUrl": image.asset->url
      }`,
    );
  } catch {
    return [];
  }
}
