import { defineField, defineType } from "sanity";

/**
 * Verejná podstránka /dod: keď je DOD popup vypnutý, menu vedie sem;
 * obsah sa dá editovať v CMS (text, obrázky).
 */
export const dodPageType = defineType({
  name: "dodPage",
  title: "DOD: podstránka",
  type: "document",
  description:
    "Stránka /dod: rovnaký vizuál ako podstránky „Pre študentov“. Odporúčaný úvodný text vieš nahrať príkazom npm run seed:dod v repozitári webu (vyžaduje SANITY_API_WRITE_TOKEN).",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Nadpis stránky",
      description: "Hlavný nadpis na stránke /dod.",
      validation: (rule) => rule.required(),
      initialValue: "Deň otvorených dverí",
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Obsah",
      description: "Text, obrázky a ďalšie bloky.",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternatívny text",
            }),
          ],
        },
      ],
    }),
  ],
});
