import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { TerminyAKapacitaContent } from "@/components/landing/prijimacky/TerminyAKapacitaContent";

export const metadata: Metadata = {
  title: "Termíny a kapacita — Prijímačky — Lýceum C. S. Lewisa",
  description:
    "Dôležité dátumy prihlášky, prijímačiek, výsledkov a zápisu; kapacita 1. ročníka. Lýceum C. S. Lewisa.",
};

export default function TerminyAKapacitaPage() {
  return (
    <>
      <Header />
      <TerminyAKapacitaContent />
    </>
  );
}
