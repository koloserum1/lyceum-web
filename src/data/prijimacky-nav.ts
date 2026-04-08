/**
 * Prijímačky: podstránky v menu (presné poradie a názvy pre uchádzača / rodiča).
 */
export const prijimackyPages = [
  {
    slug: "ako-sa-dostat-na-lyceum",
    label: "Ako sa dostať na Lýceum",
  },
  {
    slug: "co-te-caka-na-prijimackach",
    label: "Čo ťa čaká na prijímačkách",
  },
  {
    slug: "vyskusaj-si-ulohy",
    label: "Vyskúšaj si úlohy",
  },
  {
    slug: "terminy-vysledky-a-zapis",
    label: "Termíny, výsledky a zápis",
  },
  {
    slug: "skolne-a-stipendia",
    label: "Školné a štipendiá",
  },
] as const;

export type PrijimackySlug = (typeof prijimackyPages)[number]["slug"];

/** Jedna stránka namiesto bývalých „Termíny a kapacita“ + „Výsledky a zápis“. */
export const LINK_TERMINY_VYSLEDKY_ZAPIS = "/prijimacky/terminy-vysledky-a-zapis";
