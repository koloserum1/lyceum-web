import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/sanity/client";

const DOD_PAGE_QUERY = `*[_type == "dodPage"] | order(_updatedAt desc)[0] {
  title,
  body,
  _updatedAt
}`;

export type DodPagePayload = {
  title?: string;
  body?: PortableTextBlock[];
  _updatedAt?: string;
} | null;

const fetchOptions = { next: { revalidate: 15 } };

export async function getDodPageSettings(): Promise<DodPagePayload> {
  const data = await client.fetch<DodPagePayload>(
    DOD_PAGE_QUERY,
    {},
    fetchOptions,
  );
  return data ?? null;
}

/** Či má stránka zmysluplný obsah z CMS (text alebo obrázok). */
export function hasDodPageBody(body: unknown): boolean {
  if (!Array.isArray(body) || body.length === 0) return false;
  return body.some((block) => {
    if (!block || typeof block !== "object") return false;
    const b = block as {
      _type?: string;
      children?: { text?: string }[];
    };
    if (b._type === "image") return true;
    if (b._type === "block" && Array.isArray(b.children)) {
      return b.children.some((c) => (c.text || "").trim().length > 0);
    }
    return false;
  });
}
