import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { KontaktContent } from "@/components/landing/KontaktContent";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

export const metadata: Metadata = {
  title: "Kontakt | Lýceum C. S. Lewisa",
  description:
    "Kontaktujte Lýceum C. S. Lewisa: e-mail, telefón, adresa Haanova 28, Bratislava. Sociálne siete a prijímačky.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main
        id="kontakt-stranka"
        className="scroll-mt-24 bg-brand-bg1 pb-4 md:scroll-mt-28 md:pb-6"
      >
        <KontaktContent />
        <div className={`${CX} border-t border-black/[0.06] pb-10 pt-8 md:pb-12 md:pt-10`}>
          <p className="m-0 text-center text-sm text-brand-fg3">
            <Link
              href="/#domov"
              className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
            >
              Späť na domov
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
