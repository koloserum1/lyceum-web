import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { CoTeCakaNaPrijimackachContent } from "@/components/landing/prijimacky/CoTeCakaNaPrijimackachContent";

export const metadata: Metadata = {
  title: "Čo ťa čaká na prijímačkách — Prijímačky — Lýceum C. S. Lewisa",
  description:
    "Cesta cez prijímacie skúšky: zloženie konania, individualizovaný vstup, hodnotenie a ďalšie kroky. Lýceum C. S. Lewisa.",
};

export default function CoTeCakaNaPrijimackachPage() {
  return (
    <>
      <Header />
      <CoTeCakaNaPrijimackachContent />
    </>
  );
}
