import Image from "next/image";
import Link from "next/link";
import { LINK_TERMINY_VYSLEDKY_ZAPIS } from "@/data/prijimacky-nav";
import { PRIJIMACIE_ULOHY_PDF, ukazkyUlohKategorie } from "@/data/prijimacky-ukazky-uloh";
import heroPills from "./heroFloatingPills.module.css";
import { VyskusajSiUlohyMiniQuiz } from "./VyskusajSiUlohyMiniQuiz";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_CO = "/prijimacky/co-te-caka-na-prijimackach";
const LINK_TERM = LINK_TERMINY_VYSLEDKY_ZAPIS;

const sectionY = "py-10 md:py-14 lg:py-16";

/** Hero: trieda pri spolupráci (editoriálny výrez). */
const HERO_VYSKUSAJ_SRC = "/prijimacky/hero-vyskusaj-si-ulohy.jpg";

const ctaPrimaryYellow =
  "inline-flex items-center justify-center rounded-full border-0 bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline shadow-[0_12px_32px_-12px_rgba(253,185,19,0.65)] transition-colors hover:bg-[#f5b010] md:px-10 md:text-base";

/** Sekundárne pill: jemný zlatý okraj (akcent ako na „Ako sa dostať“, nie plná výplň). */
const pillSecondaryHeroWarm =
  "inline-flex items-center justify-center rounded-full border border-[#d4be78]/75 bg-[#f7f2ea]/95 px-5 py-2.5 text-[14px] font-semibold text-[#2a1f18] no-underline shadow-[0_6px_20px_-10px_rgba(55,45,25,0.08)] backdrop-blur-sm transition-colors hover:border-[#fdb913]/45 hover:bg-[#faf0e4] hover:shadow-[0_8px_24px_-12px_rgba(253,185,19,0.12)] md:px-6 md:text-[15px]";

/** Jemný teplý wash v pravom dolnom rohu: doplní ombre bez výraznej oranžovej plochy. */
const vyskusajHeroWash =
  "pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(ellipse_118%_92%_at_100%_100%,rgba(235,185,145,0.09)_0%,rgba(248,225,205,0.05)_48%,transparent_72%)] md:rounded-[32px] lg:rounded-[36px]";

/** Obal minikvízu: layout ako FitQuiz na domovskej stránke, teplá paleta (žltý akcent zachovaný). */
const miniQuizShell =
  "relative isolate overflow-hidden rounded-[24px] bg-gradient-to-b from-[#fdf8f0] via-[#faf5ee]/75 to-[#f0e6dc] ring-1 ring-[#e8dcc8]/45 shadow-[0_16px_48px_-28px_rgba(45,35,22,0.12)]";

export function VyskusajSiUlohyContent() {
  return (
    <main
      id="prijimacky-vyskusaj-si-ulohy"
      className="scroll-mt-24 bg-brand-bg2 pb-12 md:scroll-mt-28 md:pb-16"
    >
      {/* Hero: tá istá skladba ako „Ako sa dostať na Lýceum“; jemný teplý ombre namiesto výraznej oranžovej. */}
      <div className={`${CX} pt-6 md:pt-8`}>
        <header
          className="relative overflow-x-clip rounded-[28px] bg-gradient-to-br from-[#faf7f3] via-[#faf8f6] to-[#f0e4dc] ring-1 ring-[#e8d4c8]/48 shadow-[0_24px_60px_-32px_rgba(75,52,38,0.08),inset_0_1px_0_0_rgba(255,255,255,0.92)] md:rounded-[32px] lg:rounded-[36px]"
          aria-label="Úvod a typy úloh"
        >
          <div className={vyskusajHeroWash} aria-hidden />
          <div className="relative z-[1]">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:pb-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(280px,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-10 xl:gap-12">
              <div className="relative mx-auto w-full max-w-[min(100%,24rem)] sm:max-w-[min(100%,28rem)] lg:mx-0 lg:max-w-none lg:w-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] ring-1 ring-[#c8b078]/55 md:aspect-[3/2] md:rounded-[28px] lg:rounded-[32px]">
                  <Image
                    src={HERO_VYSKUSAJ_SRC}
                    alt="Študenti Lýcea C. S. Lewisa pri spolupráci a riešení úlohy pri stole v triede"
                    fill
                    className="object-cover object-[center_42%]"
                    sizes="(max-width: 1024px) min(100vw, 28rem), (max-width: 1400px) 48vw, 640px"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3d2818]/[0.28] via-[#5c3a28]/[0.07] to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="absolute left-2 top-2 z-[2] sm:left-3 sm:top-3 lg:left-4 lg:top-4">
                  <span
                    className={`${heroPills.pillDriftA} font-heading inline-block rounded-full bg-[#4a3228] px-6 py-3.5 text-base font-bold leading-tight tracking-tight text-[#fff9f4] shadow-[0_12px_28px_-8px_rgba(45,28,18,0.32),0_4px_16px_-6px_rgba(120,75,45,0.16)] ring-1 ring-[#f0c068]/35 sm:px-7 sm:py-4 sm:text-lg md:px-8 md:py-[1.125rem] md:text-xl`}
                  >
                    Ukážky úloh
                  </span>
                </div>
                <div className="absolute right-2 bottom-2 z-[2] sm:right-3 sm:bottom-3 lg:right-4 lg:bottom-4">
                  <span
                    className={`${heroPills.pillDriftB} font-heading inline-block rounded-full border-2 border-[#dcc070]/65 bg-[#faf6ee]/98 px-6 py-3.5 text-base font-bold leading-tight tracking-tight text-[#2a1f18] shadow-[0_10px_28px_-10px_rgba(100,65,40,0.18)] backdrop-blur-sm sm:px-7 sm:py-4 sm:text-lg md:px-8 md:py-[1.125rem] md:text-xl`}
                  >
                    Prijímačky
                  </span>
                </div>
              </div>

              <div className="min-w-0">
                <nav
                  className="mb-5 text-[13px] md:mb-6"
                  aria-label="Oblasť stránky"
                >
                  <Link
                    href="/#prijimacky"
                    className="font-medium text-brand-primary underline decoration-[#e8c878]/45 underline-offset-2 hover:decoration-brand-primary"
                  >
                    Prijímačky
                  </Link>
                  <span className="mx-2 text-[#d4a088]" aria-hidden>
                    /
                  </span>
                  <span className="text-[#3d2e28]">Vyskúšaj si úlohy</span>
                </nav>

                <h1 className="font-heading m-0 max-w-xl text-[clamp(2rem,1.2rem+3.2vw,3.35rem)] font-bold leading-[1.05] tracking-tight text-[#1f1814]">
                  <span className="block">Vyskúšaj si</span>
                  <span className="mt-1 block text-[#fdb913]">úlohy</span>
                </h1>

                <p className="m-0 mt-5 max-w-md text-[15px] font-normal leading-relaxed text-[#4a362c]/92 sm:text-[16px] md:mt-6 md:text-[17px] md:leading-[1.62]">
                  Taký typ myslenia a zadaní, aký uvidíš na prijímačkách – bez tlaku, že musíš
                  všetko vedieť dopredu.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8">
                  <Link href="#heading-mini-quiz" className={`${ctaPrimaryYellow} w-fit`}>
                    Skús úlohy na nečisto
                  </Link>
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                    <Link href={LINK_CO} className={pillSecondaryHeroWarm}>
                      Čo ťa čaká na prijímačkách
                    </Link>
                    <Link href={LINK_TERM} className={pillSecondaryHeroWarm}>
                      Termíny, výsledky a zápis
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Typy úloh: integrovaný pás v tom istom hero bloku (ako termíny na „Ako sa dostať“) */}
            <div className="mt-8 border-t border-[#e5d5c8]/45 pt-6 md:mt-10 md:pt-8">
              <h2
                id="heading-typy"
                className="scroll-mt-28 font-heading m-0 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6e5c38] md:text-xs"
              >
                Typy úloh, s ktorými sa môžeš stretnúť
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {ukazkyUlohKategorie.map((kat) => {
                  const kratky = (kat.nazov.split(/[\s,]+/)[0] ?? kat.nazov).toLocaleUpperCase("sk");
                  return (
                    <div
                      key={kat.id}
                      className="rounded-2xl border border-black/[0.06] bg-white px-4 py-3.5 shadow-[0_8px_28px_-16px_rgba(90,55,35,0.08)] md:px-5 md:py-4"
                    >
                      <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9a8028]">
                        {kratky}
                      </p>
                      <p className="font-heading m-0 mt-1.5 text-[clamp(0.92rem,0.82rem+0.45vw,1.08rem)] font-bold leading-snug text-brand-fg1">
                        {kat.nazov}
                      </p>
                      <p className="m-0 mt-2 text-[13px] leading-relaxed text-brand-fg2 md:text-[14px]">
                        {kat.popis}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
        </header>
      </div>

      {/* Mini kvíz: layout ako „Otestuj sa“ (FitQuiz), farby teplé / žltý akcent */}
      <section
        className={`${CX} ${sectionY} scroll-mt-28 border-t border-[#dcc898]/45 md:scroll-mt-32`}
        aria-labelledby="heading-mini-quiz"
      >
        <div className={miniQuizShell}>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(160,120,70,0.09) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden
          />
          <div className="relative z-[1] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <header className="mx-auto max-w-2xl text-center">
              <h2
                id="heading-mini-quiz"
                className="font-heading m-0 text-[clamp(1.35rem,1rem+1.2vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.5rem,1.1rem+1.4vw,2rem)]"
              >
                Skús si 3 úlohy na{" "}
                <span className="text-[#fdb913]">nečisto</span>
              </h2>
              <p className="mx-auto mt-3 mb-0 max-w-lg text-[15px] font-normal leading-relaxed text-brand-fg2 md:mt-4 md:text-base">
                Ochutnávka typu zadaní – súvislosti a pokoj pri riešení, nie bifľovanie.
              </p>
            </header>
            <VyskusajSiUlohyMiniQuiz />
          </div>
        </div>
      </section>

      {/* 3. PDF: jedno záverečné CTA; náhľad len na väčších obrazovkách */}
      <section
        className={`${CX} ${sectionY} border-t border-black/[0.06]`}
        aria-labelledby="heading-cela"
      >
        <div className="mx-auto max-w-3xl rounded-[22px] border border-black/[0.07] bg-white px-6 py-9 shadow-[0_16px_48px_-28px_rgba(0,0,0,0.08)] md:rounded-[24px] md:px-10 md:py-10">
          <h2
            id="heading-cela"
            className="font-heading m-0 text-center text-[clamp(1.15rem,1rem+0.85vw,1.45rem)] font-bold leading-tight text-brand-fg1"
          >
            Chceš si prejsť viac úloh?
          </h2>
          <p className="m-0 mt-3 text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-4 md:text-[16px]">
            Kompletné znenia zadaní sú v jednom PDF – vždy rovnaké ako oficiálna ukážka.
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
          <div className="mt-7 hidden overflow-hidden rounded-xl border border-black/[0.08] bg-brand-bg2 md:mt-8 md:block">
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
