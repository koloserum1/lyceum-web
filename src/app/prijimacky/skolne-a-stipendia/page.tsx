import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { SkolneAStipendiaContent } from "@/components/landing/prijimacky/SkolneAStipendiaContent";

export const metadata: Metadata = {
  title: "Školné a štipendiá — Prijímačky — Lýceum C. S. Lewisa",
  description:
    "Koľko stojí štúdium na Lýceu, čo školné zahŕňa a nezahŕňa, platobné údaje, štipendijný fond a kontakt na školné a štipendiá.",
};

export default function SkolneAStipendiaPage() {
  return (
    <>
      <Header />
      <SkolneAStipendiaContent />
    </>
  );
}
