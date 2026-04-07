import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/sanity/client";

const PRIJIMACKY_POPUP_QUERY = `*[_type == "prijimackyPopup"] | order(_updatedAt desc)[0] {
  _id,
  enabled,
  title,
  deadlineLabel,
  deadlineAt,
  body,
  ctaHint,
  emailLabel,
  submitLabel,
  successMessage,
  _updatedAt
}`;

export type PrijimackyPopupPayload = {
  _id?: string;
  enabled?: boolean;
  title?: string;
  deadlineLabel?: string;
  deadlineAt?: string;
  body?: PortableTextBlock[];
  ctaHint?: string;
  emailLabel?: string;
  submitLabel?: string;
  successMessage?: string;
  _updatedAt?: string;
} | null;

const fetchOptions = { next: { revalidate: 15 } };

export async function getPrijimackyPopupSettings(): Promise<PrijimackyPopupPayload> {
  const data = await client.fetch<PrijimackyPopupPayload>(
    PRIJIMACKY_POPUP_QUERY,
    {},
    fetchOptions,
  );
  return data ?? null;
}
