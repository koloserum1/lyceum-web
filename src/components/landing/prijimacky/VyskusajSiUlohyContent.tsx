import Image from "next/image";
import Link from "next/link";
import { LINK_TERMINY_VYSLEDKY_ZAPIS } from "@/data/prijimacky-nav";
import { PRIJIMACIE_ULOHY_PDF, ukazkyUlohKategorie } from "@/data/prijimacky-ukazky-uloh";
import { VyskusajSiUlohyMiniQuiz } from "./VyskusajSiUlohyMiniQuiz";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_CO = "/prijimacky/co-te-caka-na-prijimackach";
const LINK_TERM = LINK_TERMINY_VYSLEDKY_ZAPIS;

const sectionY = "py-10 md:py-14 lg:py-16";

/** Vertikálna fotka sekcie (Lýceum C. S. Lewisa) — súbor `public/prijimacky/typy-uloh-portrait.png`. */
const TYPY_ULOH_PORTRAIT_SRC = "/prijimacky/typy-uloh-portrait.png";

/** Jednotné číslovanie typov úloh — rovnaký badge na každej karte. */
const typUlohyCisloBadge =
  "flex h-8 w-9 shrink-0 items-center justify-center self-start rounded-lg bg-[#ebe6f4] text-[12px] font-bold tabular-nums leading-none text-brand-fg2 ring-1 ring-[#d2c8e4]/65";

export function VyskusajSiUlohyContent() {
  return (
    <main
      id="prijimacky-vyskusaj-si-ulohy"
      className="scroll-mt-24 bg-brand-bg1 pb-12 md:scroll-mt-28 md:pb-16"
    >
      <div className={`${CX} pt-6 md:pt-8`}>
        <nav className="mb-6 text-sm text-brand-fg3 md:mb-8" aria-label="Oblasť stránky">
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

      {/* 1. Úvod — jeden nadpis, jedna myšlienka, jemné odkazy */}
      <div className={CX}>
        <header
          className="rounded-[22px] bg-gradient-to-br from-white via-brand-bg2/35 to-[#fef9e8] px-6 py-10 ring-1 ring-black/[0.06] sm:px-8 sm:py-11 md:rounded-[26px] md:px-10 md:py-12"
        >
          <h1 className="font-heading m-0 max-w-2xl text-[clamp(1.75rem,1.1rem+2.5vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-brand-fg1">
            Vyskúšaj si úlohy
          </h1>
          <p className="m-0 mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[16px] md:leading-[1.55]">
            Pozri si, aký typ premýšľania sa objavuje v prijímačkách na Lýceum. Krátko,
            zrozumiteľne a bez zbytočného stresu.
          </p>
          <p className="m-0 mt-5 text-[13px] text-brand-fg3 md:mt-6 md:text-[14px]">
            <Link
              href={LINK_CO}
              className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-[3px] transition-colors hover:decoration-brand-primary/55"
            >
              Čo ťa čaká na prijímačkách
            </Link>
            <span className="mx-2 text-brand-fg4" aria-hidden>
              ·
            </span>
            <Link
              href={LINK_TERM}
              className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-[3px] transition-colors hover:decoration-brand-primary/55"
            >
              Termíny a kapacita
            </Link>
          </p>
        </header>
      </div>

      {/* 2. Typy úloh — editoriálna kompozícia: portrét + asymetrické bloky */}
      <section className={`${CX} ${sectionY} relative`} aria-labelledby="heading-typy">
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-brand-primary/12 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-[15%] h-64 w-64 rounded-full bg-[#fef6d4]/45 blur-[90px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl">
          <h2
            id="heading-typy"
            className="font-heading m-0 max-w-[22ch] text-[clamp(1.35rem,1.05rem+1.15vw,1.75rem)] font-bold leading-[1.12] tracking-tight text-brand-fg1 md:max-w-[28ch] lg:text-[clamp(1.45rem,1.1rem+1.2vw,1.9rem)]"
          >
            Typy úloh, s ktorými sa môžeš stretnúť
          </h2>

          <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:mt-10 lg:grid-cols-12 lg:items-start lg:gap-9 xl:gap-12">
            {/* Portrét — kratší než 9∶16, lepšia výška voči obsahu vpravo */}
            <div className="relative lg:col-span-5 xl:col-span-4">
              <figure className="relative mx-auto w-full max-w-[min(100%,17rem)] lg:mx-0 lg:max-w-[15.5rem] xl:max-w-[16rem]">
                <div
                  className="pointer-events-none absolute -inset-2.5 -z-[1] rounded-[1.75rem] bg-[radial-gradient(ellipse_at_40%_35%,rgba(185,160,224,0.32)_0%,transparent_68%)] opacity-90 blur-xl md:-inset-3 md:rounded-[2rem]"
                  aria-hidden
                />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] shadow-[0_22px_56px_-22px_rgba(55,45,95,0.32),0_10px_32px_-16px_rgba(185,160,224,0.2)] ring-1 ring-black/[0.06] md:rounded-[1.75rem] lg:rounded-[1.85rem]">
                  <Image
                    src={TYPY_ULOH_PORTRAIT_SRC}
                    alt="Študenti Lýcea C. S. Lewisa pri spolupráci pri stole v triede"
                    fill
                    className="object-cover object-[center_48%]"
                    sizes="(max-width: 1024px) 272px, 256px"
                    priority={false}
                  />
                </div>
              </figure>
            </div>

            {/* Štyri typy — rovnaké číslovanie (badge), zachovaná variácia kariet */}
            <div className="flex flex-col gap-4 md:gap-5 lg:col-span-7 lg:pt-0.5 xl:col-span-8">
              <article
                key={ukazkyUlohKategorie[0].id}
                className="rounded-[1.35rem] border border-[#e2d8f0]/75 bg-gradient-to-br from-[#f3edfb] via-white to-[#faf8ff] p-5 shadow-[0_18px_50px_-28px_rgba(90,72,130,0.2)] ring-1 ring-white/55 md:p-6 lg:rounded-[1.5rem] lg:p-7"
              >
                <div className="flex gap-3 md:gap-3.5">
                  <span className={typUlohyCisloBadge} aria-hidden>
                    01
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading m-0 text-[1.12rem] font-bold leading-snug text-brand-fg1 md:text-[1.22rem]">
                      {ukazkyUlohKategorie[0].nazov}
                    </h3>
                    <p className="m-0 mt-2 max-w-prose text-[15px] leading-relaxed text-brand-fg2 md:mt-2.5 md:text-[16px]">
                      {ukazkyUlohKategorie[0].popis}
                    </p>
                  </div>
                </div>
              </article>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2 xl:gap-5">
                <article
                  key={ukazkyUlohKategorie[1].id}
                  className="rounded-[1.2rem] border border-black/[0.06] bg-white/95 p-5 shadow-[0_14px_40px_-26px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03] md:p-5"
                >
                  <div className="flex gap-3 md:gap-3.5">
                    <span className={typUlohyCisloBadge} aria-hidden>
                      02
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading m-0 text-[1.05rem] font-bold leading-snug text-brand-fg1 md:text-[1.1rem]">
                        {ukazkyUlohKategorie[1].nazov}
                      </h3>
                      <p className="m-0 mt-2 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                        {ukazkyUlohKategorie[1].popis}
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  key={ukazkyUlohKategorie[2].id}
                  className="rounded-[1.15rem] border border-brand-primary/22 bg-[#faf9fc] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-brand-primary/18 md:p-5 xl:translate-x-0.5"
                >
                  <div className="flex gap-3 md:gap-3.5">
                    <span className={typUlohyCisloBadge} aria-hidden>
                      03
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading m-0 text-[1.05rem] font-bold leading-snug text-brand-fg1 md:text-[1.1rem]">
                        {ukazkyUlohKategorie[2].nazov}
                      </h3>
                      <p className="m-0 mt-2 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                        {ukazkyUlohKategorie[2].popis}
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <article
                key={ukazkyUlohKategorie[3].id}
                className="relative overflow-hidden rounded-[1.25rem] border border-[#eae6f2] bg-white py-5 pl-5 pr-5 shadow-[0_12px_40px_-22px_rgba(75,60,115,0.12)] md:rounded-[1.35rem] md:py-5 md:pl-6 md:pr-5"
              >
                <div
                  className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-gradient-to-b from-brand-primary via-[#c4aee8] to-brand-accent"
                  aria-hidden
                />
                <div className="flex gap-3 pl-3 md:gap-3.5 md:pl-3.5">
                  <span className={typUlohyCisloBadge} aria-hidden>
                    04
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading m-0 text-[1.06rem] font-bold leading-snug text-brand-fg1 md:text-[1.12rem]">
                      {ukazkyUlohKategorie[3].nazov}
                    </h3>
                    <p className="m-0 mt-2 max-w-prose text-[14px] leading-relaxed text-brand-fg2 md:mt-2 md:text-[15px]">
                      {ukazkyUlohKategorie[3].popis}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mini kvíz — hlavný interaktívny blok */}
      <section
        className={`${CX} ${sectionY} border-t border-black/[0.06]`}
        aria-labelledby="heading-mini-quiz"
      >
        <div className="mx-auto max-w-2xl md:max-w-3xl">
          <h2
            id="heading-mini-quiz"
            className="font-heading m-0 text-center text-[clamp(1.3rem,1rem+1.2vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1"
          >
            Skús si 3 úlohy na nečisto
          </h2>
          <p className="m-0 mt-3 text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-4 md:text-[16px]">
            Ochutnávka typu zadaní — súvislosti a pokoj pri riešení, nie biflenie.
          </p>
          <div className="mt-7 md:mt-8">
            <VyskusajSiUlohyMiniQuiz />
          </div>
        </div>
      </section>

      {/* 4. PDF — jedno záverečné CTA; náhľad len na väčších obrazovkách */}
      <section
        className={`${CX} ${sectionY} border-t border-black/[0.06]`}
        aria-labelledby="heading-cela"
      >
        <div className="mx-auto max-w-3xl rounded-[22px] bg-gradient-to-br from-brand-primary/12 via-white to-brand-bg2 px-6 py-9 ring-1 ring-black/[0.07] md:rounded-[24px] md:px-10 md:py-10">
          <h2
            id="heading-cela"
            className="font-heading m-0 text-center text-[clamp(1.15rem,1rem+0.85vw,1.45rem)] font-bold leading-tight text-brand-fg1"
          >
            Chceš si prejsť viac úloh?
          </h2>
          <p className="m-0 mt-3 text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-4 md:text-[16px]">
            Kompletné znenia zadaní sú v jednom PDF — vždy rovnaké ako oficiálna ukážka.
          </p>
          <div className="mt-7 flex justify-center md:mt-8">
            <a
              href={PRIJIMACIE_ULOHY_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-site justify-center px-10 py-3.5 text-[15px] md:px-12 md:text-base"
            >
              Pozrieť celú ukážku úloh
            </a>
          </div>
          <div className="mt-7 hidden overflow-hidden rounded-xl border border-black/[0.08] bg-brand-bg2/50 md:mt-8 md:block">
            <object
              data={PRIJIMACIE_ULOHY_PDF}
              type="application/pdf"
              title="Náhľad ukážky prijímacích úloh"
              className="h-[min(48vh,420px)] w-full"
            >
              <p className="m-0 px-4 py-6 text-center text-sm text-brand-fg3">
                Náhľad PDF sa tu nezobrazil. Otvor súbor cez tlačidlo vyššie.
              </p>
            </object>
          </div>
        </div>
      </section>

      <div className={`${CX} pt-8 pb-4 md:pt-10`}>
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
