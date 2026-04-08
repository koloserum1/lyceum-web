/**
 * Učebný plán / predmety: sekcia „Predmety s využitím“ (interaktívna tabuľka podľa ročníka).
 */

export type SubjectYearId = "y1" | "y2" | "y3" | "y4";

export type YearCurriculumRow = {
  id: string;
  subject: string;
  /** Napr. „4“ alebo „15 spolu“ */
  hours: string;
  /** Zobrazí sa po rozbalení riadku */
  detail?: string;
};

export type YearCurriculumSection = {
  id: string;
  heading: string;
  rows: readonly YearCurriculumRow[];
};

export type YearCurriculumPlan = {
  yearId: SubjectYearId;
  /** Text na prepínači */
  tabLabel: string;
  /** Hlavička panelu */
  headline: string;
  /** Súhrn hodín */
  totalHours: string;
  lead: string;
  sections: readonly YearCurriculumSection[];
};

export const subjectsSectionTitle = "Predmety a ako ich využiješ";

export const subjectYearPlans: readonly YearCurriculumPlan[] = [
  {
    yearId: "y1",
    tabLabel: "1. ročník",
    headline: "1. ročník",
    totalHours: "31 hodín týždenne",
    lead: "Buduješ všeobecný základ a spoznávaš náš spôsob práce: projekty, jazyk v praxi, informatika ako nástroj.",
    sections: [
      {
        id: "y1-zaklad",
        heading: "Základ",
        rows: [
          {
            id: "y1-sjl",
            subject: "Slovenský jazyk a literatúra",
            hours: "2",
            detail:
              "Čítanie, písanie, argumentácia: základ pre maturity, eseje aj prezentácie v projektoch.",
          },
          {
            id: "y1-anj",
            subject: "Anglický jazyk",
            hours: "3",
            detail:
              "Všeobecný jazykový základ; dopĺňa ho biznis angličtina v špecifických predmetoch.",
          },
          {
            id: "y1-mat",
            subject: "Matematika",
            hours: "4",
            detail:
              "Logika, modelovanie, dáta: podpora pre prírodné vedy aj pre technické a podnikateľské projekty.",
          },
          {
            id: "y1-nae",
            subject: "Náboženstvo a etika",
            hours: "2",
            detail:
              "Reálne situácie, hodnoty a rozhodnutia – nie bifľovanie definícií.",
          },
          {
            id: "y1-tv",
            subject: "Telesná a športová výchova",
            hours: "2",
            detail: "Pohyb, tímové súťaže, návyky: rovnováha k projektom a stresu.",
          },
          {
            id: "y1-tried",
            subject: "Triednická hodina",
            hours: "1",
            detail: "Organizačné a výchovné témy triedy.",
          },
        ],
      },
      {
        id: "y1-spec",
        heading: "Špecifické u nás",
        rows: [
          {
            id: "y1-inf",
            subject: "Aplikovaná informatika",
            hours: "5",
            detail:
              "IT v kontexte úloh a projektov: dáta, nástroje a základy na ďalšie predmety a prax.",
          },
          {
            id: "y1-pc",
            subject: "Úvod do počítačov",
            hours: "1",
            detail: "Základy práce s technológiami a bezpečným používaním.",
          },
          {
            id: "y1-pod",
            subject: "Podnikanie a komunikácia",
            hours: "3",
            detail:
              "Nápad, dohody v tíme, posun vecí dopredu: komunikácia ako súčasť výstupu.",
          },
          {
            id: "y1-biz",
            subject: "Biznis angličtina",
            hours: "4",
            detail:
              "Angličtina, ktorú naozaj použiješ: e-mail, meeting, prezentácia, pitch.",
          },
          {
            id: "y1-se",
            subject: "Student enterprise",
            hours: "4",
            detail:
              "Mini‑firma ako projekt: roly v tíme, plán, výstup, prezentácia: učenie robením.",
          },
        ],
      },
    ],
  },
  {
    yearId: "y2",
    tabLabel: "2. ročník",
    headline: "2. ročník",
    totalHours: "34 hodín týždenne",
    lead: "Rozšírený všeobecný základ (dejepis, prírodné vedy) a silnejšie technické a podnikateľské predmety.",
    sections: [
      {
        id: "y2-zaklad",
        heading: "Základ",
        rows: [
          {
            id: "y2-sjl",
            subject: "Slovenský jazyk a literatúra",
            hours: "4",
            detail:
              "Čítanie, písanie, argumentácia: základ pre maturity a projekty.",
          },
          {
            id: "y2-anj",
            subject: "Anglický jazyk",
            hours: "3",
            detail: "Všeobecný jazykový základ v súlade s celým štvorročným plánom.",
          },
          {
            id: "y2-mat",
            subject: "Matematika",
            hours: "4",
            detail: "Logika a dáta: podpora pre prírodné a technické predmety.",
          },
          {
            id: "y2-nae",
            subject: "Náboženstvo a etika",
            hours: "2",
            detail: "Hodnoty a rozhodovanie v reálnych situáciách.",
          },
          {
            id: "y2-tv",
            subject: "Telesná a športová výchova",
            hours: "2",
            detail: "Pohyb a tímová spolupráca.",
          },
          {
            id: "y2-tried",
            subject: "Triednická hodina",
            hours: "1",
            detail: "Organizačné a výchovné témy triedy.",
          },
          {
            id: "y2-dej",
            subject: "Dejepis a občianska náuka",
            hours: "2",
            detail: "Kontext spoločnosti a dejín pre kritické myslenie.",
          },
          {
            id: "y2-pri",
            subject: "Fyzika, chémia, biológia, geografia",
            hours: "1",
            detail: "Úvod do prírodovedných disciplín podľa rozvrhu.",
          },
        ],
      },
      {
        id: "y2-spec",
        heading: "Špecifické u nás",
        rows: [
          {
            id: "y2-inf",
            subject: "Aplikovaná informatika",
            hours: "4",
            detail: "Pokračovanie IT v projektoch a praktických úlohách.",
          },
          {
            id: "y2-prg",
            subject: "Úvod do programovania",
            hours: "1",
            detail: "Základy logiky a kódu pre ďalšie technické predmety.",
          },
          {
            id: "y2-pod",
            subject: "Podnikanie a komunikácia",
            hours: "4",
            detail: "Tímová práca, komunikácia a posun projektov.",
          },
          {
            id: "y2-biz",
            subject: "Biznis angličtina",
            hours: "2",
            detail: "Pracovná angličtina v konkrétnych situáciách.",
          },
          {
            id: "y2-se",
            subject: "Student enterprise",
            hours: "4",
            detail: "Projekt mini‑firmy: roly, plán, výstupy.",
          },
        ],
      },
    ],
  },
  {
    yearId: "y3",
    tabLabel: "3. ročník",
    headline: "3. ročník",
    totalHours: "36 hodín týždenne",
    lead: "Silné voliteľné zameranie a prvá väčšia prax vo firmách: viac „robím to naozaj“.",
    sections: [
      {
        id: "y3-zaklad",
        heading: "Základ",
        rows: [
          {
            id: "y3-sjl",
            subject: "Slovenský jazyk a literatúra",
            hours: "2",
            detail: "Príprava na maturitu a písomný prejav.",
          },
          {
            id: "y3-anj",
            subject: "Anglický jazyk",
            hours: "3",
            detail: "Jazykový základ + prepojenie na odbornú angličtinu.",
          },
          {
            id: "y3-mat",
            subject: "Matematika",
            hours: "2",
            detail: "Logika a dáta pre vyššie ročníky a projekty.",
          },
          {
            id: "y3-nae",
            subject: "Náboženstvo a etika",
            hours: "2",
            detail: "Etické dilemy a rozhodovanie.",
          },
          {
            id: "y3-tv",
            subject: "Telesná a športová výchova",
            hours: "2",
            detail: "Pohyb a tímové aktivity.",
          },
          {
            id: "y3-tried",
            subject: "Triednická hodina",
            hours: "1",
            detail: "Organizačné a výchovné témy triedy.",
          },
          {
            id: "y3-dej",
            subject: "Dejepis a občianska náuka",
            hours: "3",
            detail: "Rozšírený kontext spoločnosti a občianstva.",
          },
          {
            id: "y3-pri",
            subject: "Prírodovedné predmety",
            hours: "2",
            detail: "Podľa rozvrhu: fyzika, chémia, biológia a súvislosti.",
          },
        ],
      },
      {
        id: "y3-vol",
        heading: "Voliteľné zameranie",
        rows: [
          {
            id: "y3-vol-sucet",
            subject: "Voliteľné predmety (súhrn)",
            hours: "15 spolu",
            detail:
              "Vlastné zameranie podľa výberu: napr. service design, UX&UI, Business Intelligence, dáta, marketing, Creative cloud, machine learning, backend programming.",
          },
        ],
      },
      {
        id: "y3-prax",
        heading: "Prax",
        rows: [
          {
            id: "y3-prax",
            subject: "Odborná prax",
            hours: "4",
            detail:
              "Čas v reálnej firme po príprave v škole: most medzi teóriou a praxou.",
          },
        ],
      },
    ],
  },
  {
    yearId: "y4",
    tabLabel: "4. ročník",
    headline: "4. ročník",
    totalHours: "35 hodín týždenne",
    lead: "Dokončenie zamerania, maturitná príprava v základe a väčší objem praxe.",
    sections: [
      {
        id: "y4-zaklad",
        heading: "Základ",
        rows: [
          {
            id: "y4-sjl",
            subject: "Slovenský jazyk a literatúra",
            hours: "4",
            detail: "Intenzívnejšia príprava na maturitu z jazyka.",
          },
          {
            id: "y4-anj",
            subject: "Anglický jazyk",
            hours: "3",
            detail: "Jazykový základ do maturity a ďalšieho štúdia.",
          },
          {
            id: "y4-mat",
            subject: "Matematika",
            hours: "2",
            detail: "Logika a dáta v závere štvorročného plánu.",
          },
          {
            id: "y4-nae",
            subject: "Náboženstvo a etika",
            hours: "2",
            detail: "Etika a hodnoty v praxi.",
          },
          {
            id: "y4-tv",
            subject: "Telesná a športová výchova",
            hours: "2",
            detail: "Pohyb a tímové súťaže.",
          },
          {
            id: "y4-tried",
            subject: "Triednická hodina",
            hours: "1",
            detail: "Organizačné a výchovné témy triedy.",
          },
        ],
      },
      {
        id: "y4-vol",
        heading: "Voliteľné a projekt",
        rows: [
          {
            id: "y4-vol",
            subject: "Voliteľné predmety (súhrn)",
            hours: "14 spolu",
            detail:
              "Vlastné zameranie podľa výberu: napr. service design, UX&UI, Business Intelligence, dáta, marketing, Creative cloud, machine learning, backend programming.",
          },
          {
            id: "y4-y4p",
            subject: "Projekt 4. ročníka (Y4)",
            hours: "2",
            detail: "Záverečný projekt v zvolenom smere: výstup a obhajoba.",
          },
        ],
      },
      {
        id: "y4-prax",
        heading: "Prax",
        rows: [
          {
            id: "y4-prax",
            subject: "Odborná prax",
            hours: "5",
            detail: "Vyšší týždenný objem praxe vo firmách.",
          },
        ],
      },
    ],
  },
];
