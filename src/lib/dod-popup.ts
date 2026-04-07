import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/sanity/client";

/**
 * Hľadáme podľa typu (nie len pevné _id), aby fungoval aj dokument vytvorený mimo singletonu.
 * Najnovší záznam, ak by ich bolo viac.
 */
const DOD_POPUP_QUERY = `*[_type == "dodPopup"] | order(_updatedAt desc)[0] {
  _id,
  enabled,
  title,
  body,
  ctaHint,
  emailLabel,
  submitLabel,
  successMessage,
  _updatedAt
}`;

export type DodPopupPayload = {
  _id?: string;
  enabled?: boolean;
  title?: string;
  body?: PortableTextBlock[];
  ctaHint?: string;
  emailLabel?: string;
  submitLabel?: string;
  successMessage?: string;
  _updatedAt?: string;
} | null;

/** Krátka revalidácia, aby sa po Publish v Studio rýchlo prejavilo na localhoste. */
const fetchOptions = { next: { revalidate: 15 } };

export async function getDodPopupSettings(): Promise<DodPopupPayload> {
  const data = await client.fetch<DodPopupPayload>(
    DOD_POPUP_QUERY,
    {},
    fetchOptions,
  );
  return data ?? null;
}
