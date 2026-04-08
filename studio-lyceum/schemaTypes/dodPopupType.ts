import { defineField, defineType } from "sanity";

/**
 * Jedinečný dokument: v Studio vždy jedna karta „DOD popup“ (id: dodPopup).
 */
export const dodPopupType = defineType({
  name: "dodPopup",
  title: "DOD popup",
  type: "document",
  fields: [
    defineField({
      name: "enabled",
      type: "boolean",
      title: "Zobraziť popup na webe",
      description:
        "Keď je zapnuté, návštevníkom sa pri načítaní stránky zobrazí popup. Položka DOD v menu vždy vedie na podstránku /dod.",
      initialValue: false,
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Nadpis",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Text",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "ctaHint",
      type: "string",
      title: "Text nad poľom e-mail (voliteľné)",
      description: "Napr. „Zanechaj nám e-mail a ozveme sa s termínom DOD.“",
    }),
    defineField({
      name: "emailLabel",
      type: "string",
      title: "Popisok poľa e-mail",
      initialValue: "Tvoj e-mail",
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
