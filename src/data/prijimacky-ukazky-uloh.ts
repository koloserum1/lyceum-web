/**
 * Kompletná ukážka prijímacích úloh (PDF).
 * Nahraď súbor `public/prijimacie-ukazky-uloh.pdf` reálnym dokumentom so zadaniami — stránka z neho nečíta text, len naň odkazuje.
 */
export const PRIJIMACIE_ULOHY_PDF = "/prijimacie-ukazky-uloh.pdf";

export const ukazkyUlohKategorie = [
  {
    id: "logicke",
    nazov: "Logické a slovné úlohy",
    popis:
      "Úlohy, kde treba vyhodnocovať pravidlá, kombinácie, poradie, vzťahy alebo uvažovanie nad zadaním.",
  },
  {
    id: "cisla-grafy",
    nazov: "Práca s číslami, tabuľkami a grafmi",
    popis:
      "Úlohy, kde sa pracuje s tabuľkou, údajmi, grafom, kalendárom alebo prepočtom.",
  },
  {
    id: "vizualne",
    nazov: "Vizuálne a diagramové úlohy",
    popis:
      "Úlohy s obrázkami, nádobami, schémami, cestami, vzťahmi alebo vizuálnym rozhodovaním.",
  },
  {
    id: "citanies",
    nazov: "Čítanie s porozumením",
    popis:
      "Práca s textom a následnými otázkami, kde treba porozumieť významu, údajom a súvislostiam.",
  },
] as const;
