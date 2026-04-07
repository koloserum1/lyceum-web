/** Sekcia „Ako učíme na Lýceu“ — texty pre landing. */

/** Fotka v hornom úvodnom boxe (šedý shell s bodkami). */
export const howWeTeachIntroImageSrc = "/how-we-teach/ako-ucime-intro.png";

export const howWeTeachIntroHeading = "Ako učíme na Lýceu";

export const howWeTeachIntro =
  "Učíme študentov, ako viesť kvalitný život teraz i po škole. Rozvíjame ich zručnosti v orientácii v komplexnom globálnom svete, kritické myslenie, adaptáciu na neustálu zmenu, spoluprácu, odolnosť, životaschopnosť, ako aj odvahu žiť svoje hodnoty v každodennom živote.";

export const howWeTeachIntroImageAlt =
  "Študenti na podujatí — zapojenie, spolupráca a pozitívna atmosféra";

export const howWeTeachHighlight = "Učíme inak!";

/** Nadpis bloku s kategóriami pod úvodným boxom. */
export const howWeTeachCategoriesHeading = "Čo u nás študentov čaká";

export type HowWeTeachCategory = {
  id: string;
  title: string;
  /**
   * Jedna fotka na kategóriu — súbor v `public/how-we-teach/`.
   * `null` = zatiaľ bez obrázka.
   */
  imageSrc: string | null;
  imageAlt: string;
  /** Na desktope: obrázok vľavo alebo vpravo (na mobile vždy hore). */
  imageSide: "start" | "end";
  points: readonly string[];
};

/**
 * Body zoskupené do kategórií — jedna reprezentatívna fotka na tému.
 */
export const howWeTeachCategories: readonly HowWeTeachCategory[] = [
  {
    id: "triedy-spolupraca",
    title: "Malé triedy a spolupráca",
    imageSrc: "/how-we-teach/maletriedy.png",
    imageAlt:
      "Učiteľka so študentmi pri spoločnej práci — malá skupina v triede",
    imageSide: "start",
    points: [
      "Pracujeme v malých triedach po 17 žiakov a na niektorých predmetoch dokonca v skupinkách po 13 žiakov.",
      "Podporujeme samostatnú aj tímovú prácu.",
    ],
  },
  {
    id: "prax-svet",
    title: "Prax, zážitky a svet okolo nás",
    imageSrc: "/how-we-teach/prax-zazitky.png",
    imageAlt:
      "Študenti a lektori s ocenením na podujatí Climathon Bratislava — prax a zážitky mimo školy",
    imageSide: "end",
    points: [
      "Zameriavame sa na praktické vyučovanie a stretnutia s reálnym svetom.",
      "Realizujeme zážitkové učenie, exkurzie a teambuildingy.",
      "Organizujeme diskusie s expertmi.",
      "Zabezpečíme pre študentov prax v (nielen IT) spoločnostiach.",
    ],
  },
  {
    id: "odolnost-podpora",
    title: "Odolnosť, motivácia a sprievodca",
    imageSrc: "/how-we-teach/odolnost-motivacia.png",
    imageAlt:
      "Rozhovor v knižnici — sprievodca a študentky pri spoločnej diskusii a učení",
    imageSide: "start",
    points: [
      "Budujeme vnútornú odolnosť, zodpovednosť a vytrvalosť.",
      "Kladieme dôraz na prácu s vnútornou motiváciou, mentorujeme a tútorujeme.",
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
      "Dáme študentom solídny všeobecnovzdelávací základ.",
    ],
  },
];

export const howWeTeachClosing =
  "Náš vzdelávací program konzultujeme aj s odborníkmi z firemného prostredia a HR a tak reagujeme na výzvy pracovného trhu. Naši absolventi tak získajú výhodu pripravenosti na rýchlo sa meniaci svet a vysoké nároky pracovného trhu na zručnosti 21. storočia.";
