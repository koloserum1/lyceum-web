import Link from "next/link";
import atmosphere from "./coTeCakaAtmosphere.module.css";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const eyebrow =
  "font-heading m-0 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-fg3 md:text-xs";

const borderSection = "border-[#e0d8ee]/85";

/** Horný úvod: ako pôvodná karta na prijímačkách. */
const introCard =
  "overflow-x-clip rounded-[28px] bg-gradient-to-br from-white via-[#faf9f7] to-[#fff7f0] ring-1 ring-[#ebe4dc]/60 shadow-[0_24px_60px_-32px_rgba(90,80,70,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)] md:rounded-[32px] lg:rounded-[36px]";

/** Prázdny stav – rovnaké triedy ako „Voľné pozície“ v JoinTeamContent. */
const emptyStateShell =
  "relative mt-6 flex min-h-[min(280px,42vh)] w-full flex-col items-center justify-center overflow-visible rounded-[28px] border-2 border-dashed border-[#d4c8e8]/90 bg-gradient-to-b from-[#faf8fc] to-[#f3eef8]/80 px-6 py-12 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] sm:min-h-[300px] sm:px-10 md:mt-8 md:py-14";

const emojiBubble =
  "pointer-events-none absolute right-[8%] top-[10%] z-[2] flex h-[3.25rem] w-[3.25rem] select-none items-center justify-center rounded-full border border-[#c9bee5]/70 bg-[#fdfbff]/95 text-[1.65rem] leading-none shadow-[0_12px_40px_-10px_rgba(125,102,175,0.28),0_4px_24px_-8px_rgba(170,150,215,0.18)] backdrop-blur-md sm:right-[10%] sm:top-[12%] sm:h-14 sm:w-14 sm:text-[1.85rem] md:right-[12%]";

export function VysledkyPrijimacichSkusokContent() {
  return (
    <main
      id="prijimacky-vysledky-prijimacich-skusok"
      className="relative isolate scroll-mt-24 bg-brand-bg2 pb-14 md:scroll-mt-28 md:pb-20"
    >
      <div className={`${CX} pt-6 md:pt-8`}>
        {/* 1. Úvodná karta – čo je táto stránka */}
        <section className={introCard} aria-labelledby="heading-vysledky-ps">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <nav
              className="mb-5 text-[13px] md:mb-6"
              aria-label="Oblasť stránky"
            >
              <Link
                href="/#prijimacky"
                className="font-medium text-brand-primary underline decoration-[#b9a0e0]/45 underline-offset-2 hover:decoration-brand-primary"
              >
                Prijímačky
              </Link>
              <span className="mx-2 text-brand-fg3" aria-hidden>
                /
              </span>
              <span className="text-brand-fg2">Výsledky prijímacích skúšok</span>
            </nav>

            <h1
              id="heading-vysledky-ps"
              className="font-heading m-0 max-w-2xl text-[clamp(2rem,1.2rem+3.2vw,3.35rem)] font-bold leading-[1.05] tracking-tight text-[#1a1f1e]"
            >
              <span className="block">Výsledky</span>
              <span className="mt-1 block text-[#fdb913]">prijímacích skúšok</span>
            </h1>

            <p className="m-0 mt-5 max-w-2xl text-[15px] font-normal leading-relaxed text-brand-fg2 sm:text-[16px] md:mt-6 md:text-[17px] md:leading-[1.62]">
              Oficiálne výsledky prijímacích skúšok zverejníme na tejto stránke po ich
              vyhodnotení. Nižšie nájdeš tabuľku – tam sa budú vkladať výsledky testov.
            </p>
          </div>
        </section>

        {/* 2. Samostatný blok ako „Voľné pozície“: sem sa doplnia výsledky */}
        <section
          className={`mt-10 border-t ${borderSection} pt-10 md:mt-12 md:pt-12`}
          aria-labelledby="heading-vysledky-tabulka"
        >
          <p className={eyebrow}>Zverejnenie</p>
          <h2
            id="heading-vysledky-tabulka"
            className="font-heading m-0 mt-2 text-[clamp(1.2rem,1.05rem+0.6vw,1.45rem)] font-bold leading-tight text-brand-fg1 md:mt-2.5"
          >
            Výsledky testov
          </h2>
          <p className="m-0 mt-2 max-w-prose text-[14px] leading-relaxed text-brand-fg3 md:text-[15px]">
            Nové výsledky budú vždy priamo tu.
          </p>

          <div
            className={emptyStateShell}
            role="region"
            aria-label="Zverejnené výsledky prijímacích skúšok"
          >
            <span
              className={`${emojiBubble} ${atmosphere.driftB}`}
              aria-hidden
            >
              😊
            </span>
            <p className="relative z-[1] m-0 max-w-md text-[15px] font-medium leading-relaxed text-brand-fg2 md:text-[16px] md:leading-[1.55]">
              Zatiaľ tu nie sú zverejnené žiadne výsledky. Po ukončení prijímacích
              skúšok a ich vyhodnotení ich pridáme presne sem.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
