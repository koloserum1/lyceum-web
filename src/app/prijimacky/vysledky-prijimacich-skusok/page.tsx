import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { VysledkyPrijimacichSkusokContent } from "@/components/landing/prijimacky/VysledkyPrijimacichSkusokContent";

export const metadata: Metadata = {
  title: "Výsledky prijímacích skúšok | Prijímačky | Lýceum C. S. Lewisa",
  description:
    "Zverejnené výsledky prijímacích skúšok na Lýceu C. S. Lewisa. Po vyhodnotení ich nájdeš na tejto stránke.",
};

export default function VysledkyPrijimacichSkusokPage() {
  return (
    <>
      <Header />
      <VysledkyPrijimacichSkusokContent />
    </>
  );
}
