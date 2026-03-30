import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { TwoPercentSection } from "@/components/landing/TwoPercentSection";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const HERO = "/dva-percenta-hero.png";

const ARCHINFO_STUDIA =
  "https://www.archinfo.sk/diela/obcianska-stavba/lyceum-c-s-lewisa-studia.html";

export const metadata: Metadata = {
  title: "2 % pre Lýceum — Lýceum C. S. Lewisa",
  description:
    "Poukázanie 2 % z dane pre OZ Planéta — podpora Lýcea C. S. Lewisa. Údaje, lehoty a postup pre zamestnancov, fyzické a právnické osoby.",
};

export default function DvaPercentaPage() {
  return (
    <>
      <Header />
      <main
        id="dva-percenta"
        className="scroll-mt-24 bg-brand-bg1 pb-14 md:scroll-mt-28 md:pb-20"
      >
        <div className={`${CX} pt-2 sm:pt-3 md:pt-4`}>
          <section
            className="relative isolate min-h-[min(72vh,720px)] w-full overflow-hidden rounded-[24px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] sm:min-h-[min(68vh,680px)] md:rounded-[28px]"
            aria-label="2 % pre Lýceum"
          >
            <Image
              src={HERO}
              alt="Vizualizácia budovy Lýcea — moderná architektúra a okolie školy"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/35 md:from-black/78 md:via-black/48 md:to-black/25"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[min(72vh,720px)] flex-col justify-center px-6 py-16 sm:min-h-[min(68vh,680px)] sm:px-10 sm:py-20 md:px-14 md:py-24 lg:px-16 lg:py-28">
              <div className="max-w-xl md:max-w-2xl lg:max-w-[40rem]">
                <h1 className="font-heading m-0 text-[clamp(1.75rem,1.15rem+2.8vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
                  Vaše{" "}
                  <span className="text-[#fdb913] [text-shadow:0_1px_18px_rgba(0,0,0,0.45)]">
                    2 %
                  </span>{" "}
                  pomáhajú meniť priestory, v ktorých vzniká budúcnosť.
                </h1>

                <div className="mt-6 space-y-4 text-[15px] font-normal leading-relaxed text-white/92 md:mt-8 md:text-base md:leading-relaxed">
                  <p className="m-0">
                    Aktuálne sme v procese prerábky budovy na Znievskej a zároveň
                    stále fungujeme aj v prenajatých priestoroch.
                  </p>
                  <p className="m-0">
                    Budeme veľmi vďační, ak sa rozhodnete darovať svoje 2 % Lýceu.
                    Ďakujeme za Vašu podporu.
                  </p>
                  <p className="m-0">
                    Tu si môžete pozrieť{" "}
                    <a
                      href={ARCHINFO_STUDIA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white underline decoration-white/50 underline-offset-[3px] transition-colors hover:decoration-white"
                    >
                      architektonickú štúdiu našej novej budovy
                    </a>{" "}
                    na Archinfo.sk.
                  </p>
                </div>

                <a
                  href="#udaje-2-percenta"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 shadow-md transition hover:bg-[#f0ca2c] md:mt-10 md:px-10 md:py-4 md:text-base"
                >
                  Chcem prispieť
                </a>
              </div>
            </div>

            <a
              href="#udaje-2-percenta"
              className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur-sm transition hover:bg-white/18 sm:flex md:bottom-8 md:right-8"
            >
              <span>Ďalej</span>
              <span aria-hidden className="inline-block translate-y-px">
                ↓
              </span>
            </a>
          </section>
        </div>

        <div className={CX}>
          <div className="pt-10 md:pt-14">
            <TwoPercentSection />
          </div>
          <p className="mt-8 mb-0 text-center text-sm text-brand-fg3">
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
