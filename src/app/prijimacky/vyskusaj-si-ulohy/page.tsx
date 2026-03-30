import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { VyskusajSiUlohyContent } from "@/components/landing/prijimacky/VyskusajSiUlohyContent";

export const metadata: Metadata = {
  title: "Vyskúšaj si úlohy — Prijímačky — Lýceum C. S. Lewisa",
  description:
    "Ukážky úloh z prijímacích skúšok: typy zadaní a odkaz na kompletný PDF súbor. Lýceum C. S. Lewisa.",
};

export default function VyskusajSiUlohyPage() {
  return (
    <>
      <Header />
      <VyskusajSiUlohyContent />
    </>
  );
}
