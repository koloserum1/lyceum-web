import { defineField, defineType } from "sanity";

/**
 * Záznam z DOD popupu (odoslaný e-mail): ukladá API, ak je nastavený write token.
 */
export const dodLeadType = defineType({
  name: "dodLead",
  title: "Záujem: e-mail z popupu",
  type: "document",
  fields: [
    defineField({
      name: "email",
      type: "string",
      title: "E-mail",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "source",
      type: "string",
      title: "Zdroj",
      description: "dod-popup alebo prijimacky-popup",
      initialValue: "dod-popup",
      readOnly: true,
    }),
  ],
  preview: {
    select: { email: "email", source: "source" },
    prepare({ email, source }) {
      return {
        title: email ?? "Bez e-mailu",
        subtitle: source ?? "",
      };
    },
  },
});
