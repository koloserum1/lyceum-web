/** Tri piliere Lýcea: úvodná sekcia + podstránky /piliere/[slug] */

/** Ďalšia fotka len na podstránke piliera (okrem hlavného hero obrázka). */
export type PillarGalleryImage = {
  src: string;
  alt: string;
};

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
  /** Voliteľné ďalšie fotky na podstránke piliera */
  gallery?: readonly PillarGalleryImage[];
  /** Odsek pred galériou (napr. kontext k fotkám z eventov) */
  galleryIntro?: string;
  /** Nadpis nad galériou (predvolene „Ďalšie zábery“) */
  galleryTitle?: string;
};

export const pillarsIntro = {
  title: "Čo sa u nás učí inak",
  paragraph:
    "Na Lýceu staviame na troch pilieroch, ktoré ti v živote najviac pomôžu: naučíš sa niečo reálne vytvoriť, zmysluplne pracovať s technológiami a fungovať s ľuďmi. Podnikavosť, digitál a charakter sa u nás prirodzene prelínajú v projektoch, ktoré riešiš počas celého štúdia.",
} as const;

export const pillars: Pillar[] = [
  {
    slug: "podnikavost",
    tag: "Podnikavosť",
    title: "Podnikavosť",
    lead: "Premieňaš nápady na výsledky.",
    body:
      "Nápad je len začiatok. Naučíš sa nastaviť cieľ, spraviť plán, rozdeliť si roly v tíme, komunikovať, prezentovať a vyhodnotiť, čo fungovalo. Popritom si buduješ návyky ako zodpovednosť, iniciatíva a spolupráca.",
    imageSrc: "/piliere/podnikavost.png",
    imageAlt:
      "Dvaja študenti v čiernych polokošeliach SPARX prezentujú podujatie publiku v priestore s priemyselným interiérom",
    galleryIntro:
      "SPARX a študenti na Climathone, startup súťažiach a ďalších eventoch – pódiá, ocenenia, networking.",
    galleryTitle: "Prezentácie na eventoch",
    gallery: [
      {
        src: "/piliere/podnikavost-events/01-climathon-skupina.png",
        alt: "Študenti tímu Climathon Bratislava pri zelenom paneli a banneri podujatia",
      },
      {
        src: "/piliere/podnikavost-events/02-prezentacia-mikrofon.png",
        alt: "Prezentácia študenta s mikrofónom pred projekčnou obrazovkou",
      },
      {
        src: "/piliere/podnikavost-events/03-sparx-spolocna-prezentacia.png",
        alt: "Dvaja študenti SPARX v polokošeliach pri spoločnej prezentácii pred publikom",
      },
      {
        src: "/piliere/podnikavost-events/04-prezentacia-pohar.png",
        alt: "Prezentujúci študent pri veľkej zlatej trofeji na podujatí",
      },
      {
        src: "/piliere/podnikavost-events/05-podium-nasa-cesta.png",
        alt: "Dvojica prezentujúca na pódiu pred obrazovkou s textom Naša cesta k…",
      },
      {
        src: "/piliere/podnikavost-events/06-networking-coffee-break.png",
        alt: "Networking a rozhovory účastníkov počas prestávky na podujatí",
      },
      {
        src: "/piliere/podnikavost-events/07-skupinova-fotka-cena.png",
        alt: "Veľká skupinová fotografia účastníkov s trofejou a oceneniami na pódiu",
      },
      {
        src: "/piliere/podnikavost-events/08-spark-skupina-trofej.png",
        alt: "Študenti so SPARK tričkami, certifikátmi a trofejou po podujatí",
      },
      {
        src: "/piliere/podnikavost-events/09-climathon-banner.png",
        alt: "Štvorica pri svetelnom banneri Climathon Bratislava",
      },
      {
        src: "/piliere/podnikavost-events/10-young-hacker-award.png",
        alt: "Účastníci s ocenením Young Hacker Award a tričkami Climathon Bratislava",
      },
      {
        src: "/piliere/podnikavost-events/11-sk-startup-awards.png",
        alt: "Skupinová fotografia na pódiu podujatia SK Startup Awards",
      },
    ],
  },
  {
    slug: "digital",
    tag: "Digitál",
    title: "Digitál",
    lead: "Technológie používaš zmysluplne a rozumieš im.",
    body:
      "Digitálne zručnosti u nás nie sú len „informatika“. Pracuješ s modernými nástrojmi (dáta, web, AI, tvorba obsahu) bezpečne a prakticky. Technológie používaš na riešenie reálnych úloh v projektoch – nie do prázdna.",
    imageSrc: "/piliere/digital.png",
    imageAlt:
      "Študent pri stole s notebookom, dvoma monitormi a 3D tlačiarňou Prusa pri práci na projekte",
    gallery: [
      {
        src: "/how-we-teach/ako-ucime-intro.png",
        alt: "Študenti na podujatí – zapojenie, spolupráca a technológie v praxi",
      },
      {
        src: "/how-we-teach/maletriedy.png",
        alt: "Učiteľka so študentmi pri spoločnej práci v menšej skupine v triede",
      },
    ],
  },
  {
    slug: "charakter",
    tag: "Charakter",
    title: "Charakter",
    lead: "Rastieš ako človek, nielen ako žiak.",
    body:
      "Naučíš sa dávať aj prijímať spätnú väzbu, zvládať konflikty a niesť dôsledky svojich rozhodnutí. Si súčasťou komunity, kde sa ľudia navzájom poznajú, prijímajú a berú vážne.",
    imageSrc: "/piliere/charakter.png",
    imageAlt:
      "Štyri študentky spolu na lavičke vonku, rozprávajú sa a smejú sa v školskom prostredí",
    galleryIntro:
      "Tímové výzvy, dôvera, šport a príroda – zábery z aktivít, kde rastieme spolu ako komunita.",
    galleryTitle: "Komunita a tímové aktivity",
    gallery: [
      {
        src: "/piliere/charakter-gallery/01.png",
        alt: "Študenti sústredene spolupracujú na spoločnej úlohe vonku v kruhu",
      },
      {
        src: "/piliere/charakter-gallery/02.png",
        alt: "Chlapci pri preskakovaní „pavučiny“ – tímová výzva pod prístreškom",
      },
      {
        src: "/piliere/charakter-gallery/03.png",
        alt: "Prepojené ruky pri tímovej aktivite pred školskou budovou",
      },
      {
        src: "/piliere/charakter-gallery/04.png",
        alt: "Študenti budujú vysokú vežu z papiera v učebni",
      },
      {
        src: "/piliere/charakter-gallery/05.png",
        alt: "Študenti na trávniku pri školskej aktivite so slovenskou vlajkou v pozadí",
      },
      {
        src: "/piliere/charakter-gallery/06.png",
        alt: "Rozskok na loptu počas basketbalu v telocvični",
      },
      {
        src: "/piliere/charakter-gallery/07.png",
        alt: "Skupina študentov na splave v oranžovom rafte na rieke",
      },
      {
        src: "/piliere/charakter-gallery/08.png",
        alt: "Tímová úloha s lanom v kruhu na trávniku pri škole",
      },
      {
        src: "/piliere/charakter-gallery/09.png",
        alt: "Ľudská pyramída na trávniku – spolupráca a rovnováha",
      },
      {
        src: "/piliere/charakter-gallery/10.png",
        alt: "Študenti pri tímovej aktivite v lese – konštrukcia na strome",
      },
      {
        src: "/piliere/charakter-gallery/11.png",
        alt: "Basketbalový tím so ženskou trénerkou v telocvični",
      },
      {
        src: "/piliere/charakter-gallery/12.png",
        alt: "Študenti spolupracujú pri práci s páskou a vetvami v lese",
      },
      {
        src: "/piliere/charakter-gallery/13.png",
        alt: "Študenti v kruhu na trávniku z vtáčej perspektívy",
      },
      {
        src: "/piliere/charakter-gallery/14.png",
        alt: "Študenti pri spoločnej aktivite s páskou a sklom na vetve v lese",
      },
      {
        src: "/piliere/charakter-gallery/15.png",
        alt: "Študenti v kruhu na trávniku, prepojení rukami",
      },
      {
        src: "/piliere/charakter-gallery/16.png",
        alt: "Študenti v ľudskom reťazci na trávniku pred školou",
      },
      {
        src: "/piliere/charakter-gallery/17.png",
        alt: "Aktivita dôvery – študentka padá do rúk spolužiakov vonku",
      },
      {
        src: "/piliere/charakter-gallery/18.png",
        alt: "Študenti pri tímovej aktivite v lese pri prírode",
      },
      {
        src: "/piliere/charakter-gallery/19.png",
        alt: "Študenti pri spolupráci pri vonkajšej aktivite",
      },
      {
        src: "/piliere/charakter-gallery/20.png",
        alt: "Študenti pri tímovej aktivite v prírode",
      },
      {
        src: "/piliere/charakter-gallery/21.png",
        alt: "Študenti pri spoločnej úlohe v teréne",
      },
      {
        src: "/piliere/charakter-gallery/22.png",
        alt: "Študenti pri tímovej výzve vonku",
      },
      {
        src: "/piliere/charakter-gallery/23.png",
        alt: "Študenti pri spolupráci na školskom podujatí",
      },
      {
        src: "/piliere/charakter-gallery/24.png",
        alt: "Rafting na rieke s Oravským hradom v pozadí",
      },
      {
        src: "/piliere/charakter-gallery/25.png",
        alt: "Študenti na splave na rieke s výhľadom na hrad",
      },
    ],
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
