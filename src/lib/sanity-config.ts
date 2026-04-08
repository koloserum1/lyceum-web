/**
 * Verejné ID projektu a dataset: môžu ísť do `NEXT_PUBLIC_*` v .env.
 * Fallback zodpovedá projektu „lyceum“ (iw5edpoc / production).
 */
export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "iw5edpoc";

export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityApiVersion = "2024-01-01" as const;
