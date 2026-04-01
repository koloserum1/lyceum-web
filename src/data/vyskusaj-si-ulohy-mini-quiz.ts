/**
 * Mini kvíz „ochutnávka“ na stránke Vyskúšaj si úlohy — texty a odkazy na jednom mieste.
 */

export type QuizOptionKey = "A" | "B" | "C" | "D";

export type MiniQuizOption = {
  key: QuizOptionKey;
  /** Text bez písmena (zobrazí sa ako „A. …“) */
  text: string;
};

export type MiniQuizQuestion = {
  id: string;
  /** Hlavný odsek otázky (alebo úvod pred zoznamom) */
  lead: string;
  /** Voliteľné odrážky (napr. pravidlá automatu) */
  bullets?: string[];
  /** Text po zozname (ak bullets) */
  afterList?: string;
  options: MiniQuizOption[];
  correctKey: QuizOptionKey;
  feedbackCorrect: string;
  feedbackWrongExplain: string;
  feedbackWrongEncourage: string;
};

export const miniQuizQuestions: MiniQuizQuestion[] = [
  {
    id: "klara-april",
    lead:
      "Klára sa môže hrať 30 minút každý pracovný deň okrem pondelka. Cez víkend sa môže hrať 1,5 hodiny denne. Ak 1. apríl vyšiel na piatok, koľko hodín sa mohla hrať počas apríla spolu?",
    options: [
      { key: "A", text: "20 hodín" },
      { key: "B", text: "21,5 hodiny" },
      { key: "C", text: "22 hodín" },
      { key: "D", text: "23 hodín" },
    ],
    correctKey: "C",
    feedbackCorrect:
      "Správne. Tu rozhoduje pokojné rozdelenie problému na pracovné dni a víkendy.",
    feedbackWrongExplain:
      "V apríli boli 4 pondelky, takže z pracovných dní sa rátali len utorky až piatky. To je 17 dní po 30 minút = 8,5 hodiny. Víkendových dní bolo 9, každý po 1,5 hodiny = 13,5 hodiny. Spolu 22 hodín.",
    feedbackWrongEncourage:
      "Nevadí. Pri takýchto úlohách často rozhoduje pokoj a rozloženie problému na menšie kroky.",
  },
  {
    id: "automat",
    lead: "V automate platí:",
    bullets: [
      "tlačidlá 1 a 2 vydajú rožok a keksík",
      "tlačidlá 1, 3 a 4 vydajú jablko, keksík a džús",
      "tlačidlá 4 a 5 vydajú džús a pagáč",
    ],
    afterList: "Čo dostaneš po stlačení tlačidiel 3 a 5?",
    options: [
      { key: "A", text: "rožok a pagáč" },
      { key: "B", text: "jablko a pagáč" },
      { key: "C", text: "keksík a džús" },
      { key: "D", text: "jablko a džús" },
    ],
    correctKey: "B",
    feedbackCorrect:
      "Správne. Toto je presne typ úlohy, kde si človek skladá riešenie krok po kroku.",
    feedbackWrongExplain:
      "Zo zadania sa dá dopočítať, že 4 = džús a 5 = pagáč. Potom pri kombinácii 1, 3 a 4 musí byť 3 = jablko a 1 = keksík. Preto 3 + 5 = jablko + pagáč.",
    feedbackWrongEncourage:
      "Aj toto je typ úlohy, kde sa chyba často zmení na správne riešenie hneď pri druhom pokuse.",
  },
  {
    id: "analogia",
    lead: "Ktorá dvojica je v podobnom vzťahu ako slová nákup – taška?",
    options: [
      { key: "A", text: "ruka – prst" },
      { key: "B", text: "tuha – ceruzka" },
      { key: "C", text: "jablko – ovocie" },
      { key: "D", text: "voda – leto" },
    ],
    correctKey: "B",
    feedbackCorrect:
      "Správne. Ide o vzťah obsah a to, v čom je uložený alebo do čoho patrí.",
    feedbackWrongExplain:
      "V dvojici „nákup – taška“ ide o vzťah obsah → to, v čom je uložený. Podobne je tuha súčasťou ceruzky.",
    feedbackWrongEncourage:
      "Z chýb sa učíme najviac. A presne to je spôsob, akým sa u nás pracuje aj na hodinách.",
  },
];

export type MiniQuizResultCta = {
  label: string;
  href: string;
};

export type MiniQuizResultBlock = {
  title: string;
  body: string;
  ctas: [MiniQuizResultCta, MiniQuizResultCta];
};

/** Odkazy vo finálnej karte — relatívne alebo absolútne */
export const miniQuizResultByScore = {
  /** 3 / 3 */
  perfect: {
    title: "Premýšľaš dobre.",
    body: "Vyzerá to, že by si si s takýmto typom úloh vedel/a poradiť. Kľudne sa ozvi alebo si rovno pozri ďalšie kroky k prihláške.",
    ctas: [
      { label: "Pozrieť prijímačky", href: "/prijimacky/co-te-caka-na-prijimackach" },
      { label: "Napísať nám", href: "/kontakt" },
    ],
  } satisfies MiniQuizResultBlock,
  /** 2 / 3 */
  good: {
    title: "Dobrý základ.",
    body: "Máš na to. A presne takéto premýšľanie sa dá ešte ďalej rozvíjať tréningom, spätnou väzbou a praxou.",
    ctas: [
      { label: "Pozrieť ďalšie úlohy", href: "/prijimacky/vyskusaj-si-ulohy#heading-typy" },
      { label: "Zistiť viac o prijímačkách", href: "/prijimacky/detail-prijimaciek" },
    ],
  } satisfies MiniQuizResultBlock,
  /** 0–1 / 3 */
  gentle: {
    title: "Nevadí. Toto nie je stopka.",
    body: "Na Lýceu sa neučíš len vedieť správnu odpoveď, ale aj premýšľať, skúšať, opravovať chyby a rozumieť súvislostiam. A to je často dôležitejšie než prvý pokus.",
    ctas: [
      { label: "Pozrieť celú ukážku úloh", href: "/prijimacky/vyskusaj-si-ulohy#heading-cela" },
      { label: "Zistiť, ako to u nás funguje", href: "/prijimacky/ako-sa-dostat-na-lyceum" },
    ],
  } satisfies MiniQuizResultBlock,
} as const;

export function getMiniQuizResult(score: number): MiniQuizResultBlock {
  if (score >= 3) return miniQuizResultByScore.perfect;
  if (score === 2) return miniQuizResultByScore.good;
  return miniQuizResultByScore.gentle;
}
