import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { DetailPrijimaciekContent } from "@/components/landing/prijimacky/DetailPrijimaciekContent";

export const metadata: Metadata = {
  title: "Detail prijímačiek | Prijímačky | Lýceum C. S. Lewisa",
  description:
    "Prijímacie skúšky: písomné testy, individualizovaný vstup, hodnotenie a podmienky úspešnosti na Lýceu C. S. Lewisa.",
};

export default function DetailPrijimaciekPage() {
  return (
    <>
      <Header />
      <DetailPrijimaciekContent />
    </>
  );
}
