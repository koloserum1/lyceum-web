/**
 * Kanonická základná URL stránky (OG, sitemap, robots).
 * Na produkcii nastav NEXT_PUBLIC_SITE_URL (napr. https://www.domena.sk).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}
