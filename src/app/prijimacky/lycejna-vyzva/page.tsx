import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { LycejnaVyzvaContent } from "@/components/landing/prijimacky/LycejnaVyzvaContent";

export const metadata: Metadata = {
  title: "Lýcejná výzva | Prijímačky | Lýceum C. S. Lewisa",
  description:
    "Domáca a školská časť Lýcejnej výzvy: kolá, termíny, podmienky a zverejnenie výsledkov. Lýceum C. S. Lewisa.",
};

export default function LycejnaVyzvaPage() {
  return (
    <>
      <Header />
      <LycejnaVyzvaContent />
    </>
  );
}
