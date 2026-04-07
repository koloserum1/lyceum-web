import { createClient } from "next-sanity";

import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "@/lib/sanity-config";

/**
 * Len na serveri (API routes). Vyžaduje `SANITY_API_WRITE_TOKEN` v .env
 * (token s právom „Editor“ alebo „Admin“ na projekte).
 */
export function getSanityWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) return null;
  return createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: false,
    token,
  });
}
