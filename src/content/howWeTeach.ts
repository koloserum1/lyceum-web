/** Sekcia „Ako učíme na Lýceu“: texty pre landing. */

/** Fotka v hornom úvodnom boxe (šedý shell s bodkami). */
export const howWeTeachIntroImageSrc = "/how-we-teach/ako-ucime-intro.png";

export const howWeTeachIntroHeading = "Ako učíme na Lýceu";

export const howWeTeachIntro =
  "Pripravujeme ťa na kvalitný život teraz aj po škole. Rozvíjame tvoje schopnosti orientovať sa v komplexnom svete – kritické myslenie, prispôsobenie sa zmene, spoluprácu, odolnosť, životaschopnosť a odvahu žiť svoje hodnoty každý deň.";

export const howWeTeachIntroImageAlt =
  "Študenti na podujatí – zapojenie, spolupráca a pozitívna atmosféra";

export const howWeTeachHighlight = "Učíme inak!";

/** Nadpis bloku s kategóriami pod úvodným boxom. */
export const howWeTeachCategoriesHeading = "Čo ťa u nás čaká";

export type HowWeTeachCategory = {
  id: string;
  title: string;
  /**
   * Jedna fotka na kategóriu: súbor v `public/how-we-teach/`.
   * `null` = zatiaľ bez obrázka.
   */
  imageSrc: string | null;
  imageAlt: string;
  /** Na desktope: obrázok vľavo alebo vpravo (na mobile vždy hore). */
  imageSide: "start" | "end";
  points: readonly string[];
};

/**
 * Body zoskupené do kategórií: jedna reprezentatívna fotka na tému.
 */
export const howWeTeachCategories: readonly HowWeTeachCategory[] = [
  {
    id: "triedy-spolupraca",
    title: "Malé triedy a spolupráca",
    imageSrc: "/how-we-teach/maletriedy.png",
    imageAlt:
      "Učiteľka so študentmi pri spoločnej práci, malá skupina v triede",
    imageSide: "start",
    points: [
      "Učíš sa v malej triede (približne 17 spolužiakov); na niektorých predmetoch aj v menších skupinkách po 13.",
      "Počítame s tvojou samostatnou prácou aj prácou v tíme.",
    ],
  },
  {
    id: "prax-svet",
    title: "Prax, zážitky a svet okolo nás",
    imageSrc: "/how-we-teach/prax-zazitky.png",
    imageAlt:
      "Študenti a lektori s ocenením na podujatí Climathon Bratislava – prax a zážitky mimo školy",
    imageSide: "end",
    points: [
      "Čakajú ťa praktické hodiny a stretnutia s reálnym svetom.",
      "Zážitkové učenie, exkurzie a teambuildingy.",
      "Diskusie s expertmi.",
      "Zabezpečíme ti prax v (nielen IT) spoločnostiach.",
    ],
  },
  {
    id: "odolnost-podpora",
    title: "Odolnosť, motivácia a sprievodca",
    imageSrc: "/how-we-teach/odolnost-motivacia.png",
    imageAlt:
      "Rozhovor v knižnici – sprievodca a študentky pri spoločnej diskusii a učení",
    imageSide: "start",
    points: [
      "Buduješ vnútornú odolnosť, zodpovednosť a vytrvalosť.",
      "Pracujeme s tvojou vnútornou motiváciou – mentorujeme a tútorujeme ťa.",
    ],
  },
  {
    id: "zaklad",
    title: "Solídny všeobecný základ",
    imageSrc: "/how-we-teach/vseobecny-zaklad.png",
    imageAlt:
      "Študenti pri praktickej práci s kladivkom a drevom pod dohľadom učiteľa",
    imageSide: "end",
    points: [
      "Získaš solídny všeobecnovzdelávací základ.",
    ],
  },
];

export const howWeTeachClosing =
  "Náš vzdelávací program konzultujeme aj s odborníkmi z firemného prostredia a HR, aby si bol pripravený na rýchlo sa meniaci svet a nároky pracovného trhu na zručnosti 21. storočia.";
