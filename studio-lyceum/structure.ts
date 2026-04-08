import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Lyceum")
    .items([
      S.listItem()
        .title("DOD popup")
        .id("dodPopup")
        .child(
          S.document().schemaType("dodPopup").documentId("dodPopup"),
        ),
      S.listItem()
        .title("Prijímačky: popup")
        .id("prijimackyPopup")
        .child(
          S.document()
            .schemaType("prijimackyPopup")
            .documentId("prijimackyPopup"),
        ),
      S.listItem()
        .title("DOD: podstránka")
        .id("dodPage")
        .child(S.document().schemaType("dodPage").documentId("dodPage")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          listItem.getId() !== "dodPopup" &&
          listItem.getId() !== "prijimackyPopup" &&
          listItem.getId() !== "dodPage",
      ),
    ]);
