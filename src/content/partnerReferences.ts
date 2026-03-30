/**
 * Referencie partnerov — horizontálny pás na webe.
 * Logá: `/public/partners/referencie/` (názvy súborov v SUBORY.txt v tom istom priečinku).
 * Ak súbor ešte nie je nahraný, v UI sa zobrazí placeholder.
 */
export type PartnerReference = {
  id: string;
  quote: string;
  /** Zobrazenie na žltom štítku (krátky názov) */
  badgeLabel: string;
  /** Celý názov organizácie pod logom */
  partnerName: string;
  /** Cesta pod `/public/partners/referencie/` */
  logoSrc: string;
};

export const partnerReferences: readonly PartnerReference[] = [
  {
    id: "titans-proaktivita",
    badgeLabel: "Titans",
    partnerName: "Titans Freelancers",
    logoSrc: "/partners/referencie/titans.svg",
    quote:
      "Krátko po predstavení zadania na daný týždeň už chalani proaktívne vytvorili schému a plán práce, čo nás naozaj veľmi milo prekvapilo. Jednak čo sa týka rýchlosti, akou sa chopili zadania, rovnako aj spôsobu myslenia, akým k problému pristupovali.",
  },
  {
    id: "wigro-fin",
    badgeLabel: "Wigro-Fin",
    partnerName: "Wigro-Fin",
    logoSrc: "/partners/referencie/wirgofin.jpeg",
    quote:
      "Brainstorming s prínosom mladíckej energie do rôznych tém súvisiacich s prezentáciou našej firmy na sociálnych sieťach — inšpiratívne nápady s úprimnou snahou a záujmom, angažovanosť.",
  },
  {
    id: "fbe",
    badgeLabel: "FBE",
    partnerName: "FBE",
    logoSrc: "/partners/referencie/FBE.jpeg",
    quote:
      "Veľmi rýchla adaptácia a dobrá priateľská komunikácia, rýchle pochopenie zadania — vrátane vystupovania na školení FBE, ktorého sa zúčastnil s klientmi FBE a rýchlo nadviazal kontakt aj so seniornými účastníkmi.",
  },
  {
    id: "accace-mashka",
    badgeLabel: "Accace",
    partnerName: "Accace",
    logoSrc: "/partners/accace.png",
    quote:
      "Veľmi ma milo prekvapilo, keď som Mashke vysvetľovala zadanie prezentácie, ktorá nás bude čakať pre externé publikum — aktívne počúvala, písala si poznámky a navrhla, ako by slajdy mohli vyzerať. Zúčastnili sme sa spolu interného školenia k UX téme a nebojácne sa vrhla do spoločnej aktivity s ľuďmi v skupine z HR profesie z iných spoločností. Bola veľmi vnímavá a definovala, čo by sa chcela dozvedieť. Každý deň príjemné prekvapenie.",
  },
  {
    id: "o2-praca",
    badgeLabel: "O2",
    partnerName: "O2",
    logoSrc: "/partners/referencie/o2.svg",
    quote:
      "Robíte veľmi užitočnú prácu so študentmi. Vytvárate hodnotu pre samotných študentov, ale aj pre trh práce. Vďaka vám za to!",
  },
  {
    id: "gmb-galeria",
    badgeLabel: "GMB",
    partnerName: "Galéria mesta Bratislavy",
    logoSrc: "/partners/referencie/galeria-mesta-bratislavy.svg",
    quote:
      "Zásadná bola reflexia, prečo má ich generácia malú motiváciu navštevovať galérie alebo múzeá. Otvorenosť, s akou komunikovali napríklad o lenivosti či nízkom záujme objavovať umenie naživo, keď ho majú dostupné cez online platformy, nás vedie k prehodnoteniu foriem komunikácie cielenej na študentstvo stredných škôl.",
  },
  {
    id: "compass",
    badgeLabel: "Compass",
    partnerName: "Compass Architects",
    logoSrc: "/partners/referencie/compass.png",
    quote:
      "Boli sme veľmi príjemne prekvapení, keď Oliver a David prejavili vlastné postrehy, návrhy a riešenia. Presne dodržiavali dohodnuté časy. Na všetkých kolegov zapôsobilo ich sebavedomé a slušné vystupovanie. Oliver a David na nás urobili vynikajúci dojem, boli aktívni a bola to radosť stráviť s nimi týždeň. Dohodli sme sa, že zadania, ktoré rozpracovali, ešte spoločne dotiahneme po skončení programu.",
  },
  {
    id: "dase",
    badgeLabel: "DASE",
    partnerName: "DASE",
    logoSrc: "/partners/referencie/DASE.jpeg",
    quote:
      "Študenti boli prirodzene zvedaví, čo bolo výborné, lebo sme sa snažili odpovedať na veci, ktoré ich zaujímajú. Boli sme však veľmi milo prekvapení, ako veľa už vedia.",
  },
];
