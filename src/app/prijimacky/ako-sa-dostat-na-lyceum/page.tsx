import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { AkoSaDostatNaLyceumContent } from "@/components/landing/prijimacky/AkoSaDostatNaLyceumContent";

export const metadata: Metadata = {
  title: "Ako sa dostať na Lýceum | Prijímačky | Lýceum C. S. Lewisa",
  description:
    "Ako sa môžeš dostať na Lýceum a čo spraviť ako prvé: termíny, dve cesty prijatia (Lýcejná výzva alebo prijímacie skúšky) a ďalšie kroky.",
};

export default function AkoSaDostatNaLyceumPage() {
  return (
    <>
      <Header />
      <AkoSaDostatNaLyceumContent />
    </>
  );
}
