import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { TerminyVysledkyAZapisContent } from "@/components/landing/prijimacky/TerminyVysledkyAZapisContent";

export const metadata: Metadata = {
  title: "Termíny, výsledky a zápis | Prijímačky | Lýceum C. S. Lewisa",
  description:
    "Termíny prihlášky, prijímačiek, výsledkov a zápisu, kapacita 1. ročníka a kroky po vyhlásení výsledkov. Lýceum C. S. Lewisa.",
};

export default function TerminyVysledkyAZapisPage() {
  return (
    <>
      <Header />
      <TerminyVysledkyAZapisContent />
    </>
  );
}
