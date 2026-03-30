/** Porovnanie Lýcea s bežným gymnáziom — hodiny „za týždeň a sčítané za celé štúdium“. */

export const schoolComparisonIntro = {
  title: "Ako vyzerá praktická škola?",
} as const;

export type ComparisonBarRow = {
  label: string;
  /** Šírka stĺpca (max. škála nižšie); null = žiadny vizuálny pás */
  barValue: number | null;
  /** Zobrazenie hodín (presný text) */
  hoursDisplay: string;
};

export const MAX_BAR_HOURS = 24;

export const lyceumComparison = {
  title: "Lýceum C. S. Lewisa",
  intro:
    "Lýceum sa sústredí na 3 piliere: Podnikavosť, Digitál a Charakter. Má navýšenú dotáciu angličtiny. Veľa predmetov je praktických.",
  rows: [
    { label: "Matematika", barValue: 12, hoursDisplay: "12 hodín" },
    { label: "Angličtina", barValue: 18, hoursDisplay: "18 hodín" },
    { label: "Druhý cudzí jazyk", barValue: 0, hoursDisplay: "0 hodín" },
    {
      label: "Prírodné vedy (BIO/CHEM/FYZ/GEO)",
      barValue: 3,
      hoursDisplay: "3 hodiny",
    },
    {
      label: 'Digitálne predmety ~ „Informatika“',
      barValue: 16,
      hoursDisplay: "16 hodín",
    },
    {
      label: 'Odborné predmety ~ „Podnikavosť“',
      barValue: 14,
      hoursDisplay: "14 hodín",
    },
    {
      label: "Cvičná firma + Prax",
      barValue: 21,
      hoursDisplay: "12 + 9 hodín",
    },
    {
      label: "Náboženstvo a Etika",
      barValue: 8,
      hoursDisplay: "8 hodín",
    },
  ] satisfies ComparisonBarRow[],
  maturitaTitle: "Maturita",
  maturita:
    "Štúdium je ukončené maturitou zo SJ, AJ a odbornou maturitou – teoretickou a praktickou.",
  afterTitle: "Čo po škole?",
  afterBody:
    "Rozbehnúť vlastný projekt, zamestnať sa, alebo pokračovať na vysokej škole.",
} as const;

export const gymnasiumComparison = {
  title: "Bežné 4-ročné gymnázium",
  intro:
    "Na gymnáziu sú rovnomerne rozvrhnuté všetky predmety, v ktorých sa študent zdokonaľuje v akademických zručnostiach.",
  rows: [
    { label: "Matematika", barValue: 12, hoursDisplay: "12 hodín" },
    { label: "Angličtina", barValue: 14, hoursDisplay: "14 hodín" },
    { label: "Druhý cudzí jazyk", barValue: 12, hoursDisplay: "12 hodín" },
    {
      label: "Prírodné vedy (BIO/CHEM/FYZ/GEO)",
      barValue: 20,
      hoursDisplay: "20 hodín",
    },
    {
      label: 'Digitálne predmety ~ "Informatika"',
      barValue: 3,
      hoursDisplay: "3 hodiny",
    },
    {
      label: 'Odborné predmety ~ "Podnikavosť"',
      barValue: 0,
      hoursDisplay: "0 hodín",
    },
    { label: "Prax", barValue: 0, hoursDisplay: "0 hodín" },
    { label: "Etika", barValue: 2, hoursDisplay: "2 hodiny" },
  ] satisfies ComparisonBarRow[],
  maturitaTitle: "Maturita",
  maturita:
    "Štúdium je ukončené maturitou zo SJ, AJ a dvoch ďalších predmetov.",
  afterTitle: "Čo po škole?",
  afterBody:
    "Rozbehnúť vlastný projekt, zamestnať sa, alebo pokračovať na vysokej škole.",
} as const;

/**
 * Obchodná akadémia (6317 M) — hodiny podľa rovnakej logiky ako v poznámke pod grafom
 * (súčet týždenných hodín za I.–IV. ročník), vychádzajúc z bežného ŠVP / učebných plánov
 * (napr. OA Bratislava Nevädzová, obsah štúdia 2025/26).
 *
 * Matematika 3+3+2+2, angličtina 4+4+3+3, druhý cudzí jazyk 3+3+2+2, biológia 2+1,
 * informatika 2 + aplikovaná informatika 2+2. Prírodné vedy: na OA typicky výrazne menej
 * ako na gymnáziu (v príklade len biológia v I. a II. ročníku).
 * Odborné predmety: súhrn kľúčovej odbornej dotácie (ekonomika, účtovníctvo, administratíva
 * a ďalšie podľa ŠVP) — vyššia ako na bežnom gymnáziu; hodnota na škále grafu je zaokrúhlená.
 * Prax / etika: porovnateľné s gymnáziom v tabuľke (súvislá prax na OA je mimo týždenných hodín).
 */
export const businessAcademyComparison = {
  title: "Obchodná akadémia",
  intro:
    "Na obchodnej akadémii sú rovnomerne rozvrhnuté všetky predmety, v ktorých sa študent zdokonaľuje v ekonomických a odborných zručnostiach.",
  rows: [
    { label: "Matematika", barValue: 10, hoursDisplay: "10 hodín" },
    { label: "Angličtina", barValue: 14, hoursDisplay: "14 hodín" },
    { label: "Druhý cudzí jazyk", barValue: 10, hoursDisplay: "10 hodín" },
    {
      label: "Prírodné vedy (BIO/CHEM/FYZ/GEO)",
      barValue: 3,
      hoursDisplay: "3 hodiny",
    },
    {
      label: 'Digitálne predmety ~ „Informatika“',
      barValue: 6,
      hoursDisplay: "6 hodín",
    },
    {
      label: 'Odborné predmety ~ „Podnikavosť“',
      barValue: 20,
      hoursDisplay: "20 hodín",
    },
    { label: "Prax", barValue: 9, hoursDisplay: "9 hodín" },
    { label: "Etika", barValue: 2, hoursDisplay: "2 hodiny" },
  ] satisfies ComparisonBarRow[],
  maturitaTitle: "Maturita",
  maturita:
    "Štúdium je ukončené maturitou zo slovenského jazyka a literatúry, z cudzieho jazyka a z odborných predmetov (teoretická a praktická časť).",
  afterTitle: "Čo po škole?",
  afterBody:
    "Rozbehnúť vlastný projekt, zamestnať sa, alebo pokračovať na vysokej škole.",
} as const;

export type AlternativeSchoolKey = "gymnasium" | "businessAcademy";

export const schoolComparisonFootnote = {
  asterisk:
    "Počet hodín sa udáva „za týždeň a sčítaný za celé štúdium“.",
  example1:
    "Príklad 1: žiaci majú každý rok 3 hodiny matematiky týždenne: 3+3+3+3 = 12 hodín matematiky týždenne, za celé štúdium.",
  example2:
    "Príklad 2: žiaci majú na bežnom gymnáziu 2 hodiny informatiky v prvom ročníku a 1 hodinu v 4. ročníku: 2+0+0+1 = 3 hodiny informatiky týždenne, za celé štúdium.",
} as const;
