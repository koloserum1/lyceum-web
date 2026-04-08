/**
 * Kompletná ukážka prijímacích úloh (PDF): oficiálny dokument Lýcea (súbor v `public/prijimacie-ukazky-uloh.pdf`).
 * Stránka z neho nečíta text, len naň odkazuje a voliteľne ho zobrazí v náhľade.
 */
export const PRIJIMACIE_ULOHY_PDF = "/prijimacie-ukazky-uloh.pdf";

/** Stručný prehľad typov na stránke „Vyskúšaj si úlohy“: jedna veta na kartu. */
export const ukazkyUlohKategorie = [
  {
    id: "logicke",
    nazov: "Logické a slovné úlohy",
    popis: "Pravidlá, kombinácie a súvislosti v zadaní.",
  },
  {
    id: "cisla-grafy",
    nazov: "Práca s číslami, tabuľkami a grafmi",
    popis: "Tabuľky, grafy, údaje a prepočty.",
  },
  {
    id: "vizualne",
    nazov: "Vizuálne a diagramové úlohy",
    popis: "Obrázky, schémy a vizuálne rozhodovanie.",
  },
  {
    id: "citanies",
    nazov: "Čítanie s porozumením",
    popis: "Text, význam a súvislosti medzi informáciami.",
  },
] as const;
