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

export async function fetchReviews(): Promise<Review[]> {
  const client = getSanityClient();
  if (!client) return [];
  try {
    return await client.fetch(
      `*[_type == "review"] | order(_createdAt desc) {
        _id, author, text, category
      }`,
    );
  } catch {
    return [];
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
