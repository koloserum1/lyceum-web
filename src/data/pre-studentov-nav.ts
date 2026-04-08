/**
 * Pre študentov: podstránky v menu.
 */
export const preStudentovPages = [
  { slug: "skolsky-poriadok", label: "Školský poriadok" },
  { slug: "ziadosti-a-potvrdenia", label: "Žiadosti a potvrdenia" },
  { slug: "stravovanie", label: "Stravovanie" },
  { slug: "dokumenty", label: "Dokumenty" },
] as const;

export type PreStudentovSlug = (typeof preStudentovPages)[number]["slug"];
