import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export function getSanityClient(): SanityClient | null {
  if (!projectId) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion: "2025-01-01",
    useCdn: true,
  });
}

export function getSanityWriteClient(): SanityClient | null {
  const token = process.env.SANITY_API_TOKEN;
  if (!projectId || !token) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion: "2025-01-01",
    token,
    useCdn: false,
  });
}
