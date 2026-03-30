/** Tri piliere Lýcea — úvodná sekcia + podstránky /piliere/[slug] */

export type Pillar = {
  slug: string;
  /** Krátka značka v „pill“ (horný riadok na karte) */
  tag: string;
  title: string;
  /** Podnadpis pod titulkom na karte */
  lead: string;
  /** Hlavný text na podstránke */
  body: string;
  /** Obrázok v public/ (napr. /piliere/digital.png) */
  imageSrc: string;
  imageAlt: string;
};

export const pillarsIntro = {
  title: "Čo sa u nás učí inak",
  paragraph:
    "Na Lýceu staviame na troch pilieroch, ktoré mladým ľuďom v živote najviac pomáhajú: vedia niečo vytvoriť, rozumejú technológiám a vedia fungovať s ľuďmi. Preto sa u nás podnikavosť, digitál a charakter prirodzene prelínajú v projektoch, ktoré študenti robia počas celého štúdia.",
} as const;

export const pillars: Pillar[] = [
  {
    slug: "podnikavost",
    tag: "Podnikavosť",
    title: "Podnikavosť",
    lead: "Študenti premieňajú nápady na výsledky.",
    body:
      "Nápad je len začiatok. Študenti sa učia nastaviť cieľ, spraviť plán, rozdeliť si roly v tíme, komunikovať, prezentovať a vyhodnotiť, čo fungovalo. Popritom si budujú návyky ako zodpovednosť, iniciatíva a spolupráca.",
    imageSrc: "/piliere/podnikavost.png",
    imageAlt:
      "Dvaja študenti v čiernych polokošeliach SPARX prezentujú podujatie publiku v priestore s priemyselným interiérom",
  },
  {
    slug: "digital",
    tag: "Digitál",
    title: "Digitál",
    lead: "Technológie používajú zmysluplne – a rozumejú im.",
    body:
      "Digitálne zručnosti u nás nie sú len „informatika“. Študenti pracujú s modernými nástrojmi (dáta, web, AI, tvorba obsahu) bezpečne a prakticky. Technológie používajú na riešenie reálnych úloh v projektoch – nie do prázdna.",
    imageSrc: "/piliere/digital.png",
    imageAlt:
      "Študent pri stole s notebookom, dvoma monitormi a 3D tlačiarňou Prusa pri práci na projekte",
  },
  {
    slug: "charakter",
    tag: "Charakter",
    title: "Charakter",
    lead: "Rastú ako ľudia, nielen ako žiaci.",
    body:
      "Študenti sa učia dávať aj prijímať spätnú väzbu, zvládať konflikty a niesť dôsledky svojich rozhodnutí. Zároveň sú súčasťou komunity, kde sa ľudia navzájom poznajú, prijímajú a berú vážne.",
    imageSrc: "/piliere/charakter.png",
    imageAlt:
      "Štyri študentky spolu na lavičke vonku, rozprávajú sa a smejú sa v školskom prostredí",
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
