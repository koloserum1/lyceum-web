import type { MetadataRoute } from "next";
import { pillars } from "@/content/pillars";
import { getSiteUrl } from "@/lib/site";

const PRIJIMACKY_PATHS = [
  "ako-sa-dostat-na-lyceum",
  "co-te-caka-na-prijimackach",
  "detail-prijimaciek",
  "lycejna-vyzva",
  "vyskusaj-si-ulohy",
  "terminy-vysledky-a-zapis",
  "skolne-a-stipendia",
] as const;

const STATIC_PATHS = [
  "/",
  "/kontakt",
  "/ochrana-osobnych-udajov",
  "/dva-percenta",
  "/pridaj-sa-do-timu",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    const url = path === "/" ? base : `${base}${path}`;
    entries.push({
      url,
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.8,
    });
  }

  for (const slug of PRIJIMACKY_PATHS) {
    entries.push({
      url: `${base}/prijimacky/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const p of pillars) {
    entries.push({
      url: `${base}/piliere/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
