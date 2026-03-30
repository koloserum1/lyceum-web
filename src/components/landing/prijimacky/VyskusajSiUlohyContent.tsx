import Link from "next/link";
import { LINK_TERMINY_VYSLEDKY_ZAPIS } from "@/data/prijimacky-nav";
import {
  PRIJIMACIE_ULOHY_PDF,
  ukazkyUlohKategorie,
} from "@/data/prijimacky-ukazky-uloh";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_CO = "/prijimacky/co-te-caka-na-prijimackach";

const sectionGap = "py-16 md:py-20 lg:py-24";
const h2Class =
  "font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]";

function PdfButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PRIJIMACIE_ULOHY_PDF}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary-site inline-flex justify-center px-5 py-2.5 text-[14px] md:text-[15px] ${className}`}
    >
      Zobraziť celú ukážku
    </a>
  );
}

export function VyskusajSiUlohyContent() {
  return (
    <main
      id="prijimacky-vyskusaj-si-ulohy"
      className="scroll-mt-24 bg-brand-bg1 pb-16 md:scroll-mt-28 md:pb-24"
    >
      <div className={`${CX} pt-6 md:pt-8`}>
        <nav className="mb-8 text-sm text-brand-fg3" aria-label="Oblasť stránky">
          <Link
            href="/#prijimacky"
            className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          >
            Prijímačky
          </Link>
          <span className="mx-2 text-brand-fg3" aria-hidden>
            /
          </span>
          <span className="text-brand-fg2">Vyskúšaj si úlohy</span>
        </nav>
      </div>

      {/* 1. Hero */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-gradient-to-br from-white via-brand-bg2/35 to-[#fef9e8] px-6 py-14 ring-1 ring-black/[0.06] sm:px-10 sm:py-16 md:rounded-[28px] md:px-12 md:py-16 lg:px-16"
          aria-label="Úvod"
        >
          <div className="max-w-3xl">
            <h1 className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.8vw,3rem)] font-bold leading-[1.08] tracking-tight text-brand-fg1">
              Vyskúšaj si úlohy
            </h1>
            <p className="m-0 mt-6 max-w-2xl text-[15px] font-normal leading-relaxed text-brand-fg1/88 sm:text-[16px] md:mt-7 md:text-[17px] md:leading-[1.65]">
              Pozri si ukážky úloh z prijímacích skúšok a sprav si predstavu o tom,
              aký typ premýšľania sa pri nich očakáva.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href={LINK_CO}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Čo ťa čaká na prijímačkách
              </Link>
              <Link
                href={LINK_TERMINY_VYSLEDKY_ZAPIS}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Termíny, výsledky a zápis
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Čo tu nájdeš */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-co-tu"
      >
        <h2 id="heading-co-tu" className={`${h2Class} mb-6 md:mb-8`}>
          Čo tu nájdeš
        </h2>
        <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-8 text-center ring-1 ring-black/[0.07] md:px-10 md:py-9">
          <p className="m-0 text-[15px] leading-relaxed text-brand-fg1 md:text-[17px]">
            Na tejto stránke sú ukážky reálnych typov úloh z prijímacích skúšok.
            Majú ti pomôcť spraviť si predstavu o forme zadaní a o tom, ako sa pri
            nich premýšľa.
          </p>
        </div>
      </section>

      {/* 3–4. Kategórie + ukážky (accordion) */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-typy"
      >
        <h2 id="heading-typy" className={`${h2Class} mb-4 md:mb-6`}>
          Typy úloh, s ktorými sa môžeš stretnúť
        </h2>
        <p className="mx-auto m-0 mb-10 max-w-2xl text-center text-[14px] leading-relaxed text-brand-fg3 md:mb-12 md:text-[15px]">
          Nižšie sú kategórie podľa charakteru úloh. Presné znenia zadaní sú v
          spoločnom PDF — tu ich neprepisujeme, aby ostali vždy zhodné s
          oficiálnou ukážkou.
        </p>

        <div className="mx-auto flex max-w-3xl flex-col gap-8 md:gap-10">
          {ukazkyUlohKategorie.map((kat) => (
            <article
              key={kat.id}
              id={kat.id}
              className="scroll-mt-28 rounded-[20px] border border-black/[0.08] bg-white p-5 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.12)] md:p-7"
            >
              <h3 className="font-heading m-0 text-[1.15rem] font-bold leading-tight text-brand-fg1 md:text-[1.25rem]">
                {kat.nazov}
              </h3>
              <p className="m-0 mt-3 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                {kat.popis}
              </p>

              <div className="mt-6 space-y-3">
                <details className="group rounded-xl bg-brand-bg2/70 ring-1 ring-black/[0.06]">
                  <summary className="cursor-pointer list-none px-4 py-3.5 pr-10 text-[15px] font-semibold text-brand-fg1 outline-none marker:content-none md:px-5 md:py-4 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-3">
                      Ukážka 1 — otvor detail
                      <span
                        className="text-brand-fg3 transition-transform group-open:rotate-180"
                        aria-hidden
                      >
                        ▾
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-black/[0.06] px-4 py-4 md:px-5 md:py-5">
                    <p className="m-0 text-[14px] leading-relaxed text-brand-fg2">
                      Konkrétne znenie úlohy nájdeš v súbore s ukážkami — hľadaj
                      bloky zodpovedajúce tomuto typu (logika, tabuľka, obrázok,
                      text).
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <PdfButton />
                    </div>
                  </div>
                </details>

                <details className="group rounded-xl bg-brand-bg2/70 ring-1 ring-black/[0.06]">
                  <summary className="cursor-pointer list-none px-4 py-3.5 pr-10 text-[15px] font-semibold text-brand-fg1 outline-none marker:content-none md:px-5 md:py-4 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-3">
                      Ukážka 2 — otvor detail
                      <span
                        className="text-brand-fg3 transition-transform group-open:rotate-180"
                        aria-hidden
                      >
                        ▾
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-black/[0.06] px-4 py-4 md:px-5 md:py-5">
                    <p className="m-0 text-[14px] leading-relaxed text-brand-fg2">
                      Ďalší reprezentatívny príklad z toho istého PDF. Po otvorení
                      súboru listuj podľa nadpisov alebo typu úlohy.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <PdfButton />
                    </div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Celá ukážka */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-cela"
      >
        <div className="mx-auto max-w-3xl rounded-[24px] bg-gradient-to-br from-brand-primary/12 via-white to-brand-bg2 px-6 py-10 ring-1 ring-black/[0.08] md:px-10 md:py-12">
          <h2
            id="heading-cela"
            className="font-heading m-0 text-center text-[clamp(1.2rem,1rem+1vw,1.55rem)] font-bold text-brand-fg1"
          >
            Chceš si prejsť viac úloh?
          </h2>
          <p className="m-0 mt-4 text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-base">
            Celá ukážka prijímacích úloh je v jednom PDF súbore — môžeš si ho
            otvoriť v prehliadači alebo stiahnuť.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={PRIJIMACIE_ULOHY_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-site justify-center px-10 py-3.5 text-[15px] md:px-12 md:text-base"
            >
              Pozrieť celú ukážku úloh
            </a>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-black/[0.08] bg-brand-bg2/50">
            <object
              data={PRIJIMACIE_ULOHY_PDF}
              type="application/pdf"
              title="Náhľad ukážky prijímacích úloh"
              className="h-[min(70vh,640px)] w-full"
            >
              <p className="m-0 px-4 py-8 text-center text-sm text-brand-fg3">
                Náhľad PDF sa v tomto prehliadači nezobrazil. Použi tlačidlo vyššie
                alebo stiahni súbor.
              </p>
            </object>
          </div>
        </div>
      </section>

      {/* 6. Záverečný CTA */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-gradient-to-br from-brand-bg2 via-white to-[#f5f0fc] px-6 py-12 ring-1 ring-black/[0.08] md:rounded-[28px] md:px-12 md:py-16 lg:px-16 lg:py-20"
          aria-labelledby="heading-dalsi"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="heading-dalsi"
              className="font-heading m-0 text-[clamp(1.3rem,1rem+1.3vw,1.8rem)] font-bold leading-tight text-brand-fg1"
            >
              Chceš vedieť, čo bude nasledovať ďalej?
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg1/90 md:mt-5 md:text-[17px]">
              Pozri si, čo ťa čaká na prijímačkách, alebo si prejdi termíny,
              výsledky a zápis.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
              <Link
                href={LINK_CO}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Čo ťa čaká na prijímačkách
              </Link>
              <Link
                href={LINK_TERMINY_VYSLEDKY_ZAPIS}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Termíny, výsledky a zápis
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className={`${CX} pt-12 pb-4`}>
        <p className="m-0 text-center text-sm text-brand-fg3">
          <Link
            href="/#prijimacky"
            className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          >
            Späť na prehľad prijímačok
          </Link>
        </p>
      </div>
    </main>
  );
}
