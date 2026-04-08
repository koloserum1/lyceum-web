import { defineField, defineType } from "sanity";

/**
 * Popup k prijímačkam: rovnaký vzor ako DOD, plus zvýraznený termín.
 */
export const prijimackyPopupType = defineType({
  name: "prijimackyPopup",
  title: "Prijímačky: popup",
  type: "document",
  fields: [
    defineField({
      name: "enabled",
      type: "boolean",
      title: "Zobraziť popup na webe",
      description:
        "Zobrazí sa nad DOD popupom (vyšší „layer“). Po zatvorení môže byť viditeľný aj DOD popup.",
      initialValue: false,
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Nadpis",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "deadlineLabel",
      type: "string",
      title: "Text nad dátumom (napr. posledný termín)",
      description: "Zobrazí sa nad veľkým dátumom.",
      initialValue: "Posledný termín na podanie prihlášok",
    }),
    defineField({
      name: "deadlineAt",
      type: "datetime",
      title: "Dátum a čas (zvýraznené)",
      description: "Zobrazí sa veľkým písmom. Ak nevyplníš, blok s dátumom sa skryje.",
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Doplňujúci text",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "ctaHint",
      type: "string",
      title: "Text nad poľom e-mail (voliteľné)",
      description: "Ak nevyplníš, žiadny text sa nezobrazí.",
    }),
    defineField({
      name: "emailLabel",
      type: "string",
      title: "Prístupný popis poľa e-mail (voliteľné)",
      description:
        "Len pre čítačky obrazovky (pole nemá viditeľný popisok). Ak necháš prázdne, použije sa „E-mail“.",
    }),
    defineField({
      name: "submitLabel",
      type: "string",
      title: "Text tlačidla",
      initialValue: "Odoslať",
    }),
    defineField({
      name: "successMessage",
      type: "string",
      title: "Správa po úspešnom odoslaní",
      initialValue: "Ďakujeme, ozveme sa.",
    }),
  ],
});
