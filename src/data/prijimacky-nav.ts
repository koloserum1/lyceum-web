/**
 * Prijímačky — podstránky v menu (presné poradie a názvy pre uchádzača / rodiča).
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
    slug: "terminy-a-kapacita",
    label: "Termíny a kapacita",
  },
  {
    slug: "vysledky-a-zapis",
    label: "Výsledky a zápis",
  },
  {
    slug: "skolne-a-stipendia",
    label: "Školné a štipendiá",
  },
] as const;

export type PrijimackySlug = (typeof prijimackyPages)[number]["slug"];
