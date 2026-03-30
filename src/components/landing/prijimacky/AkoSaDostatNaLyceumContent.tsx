import type { ReactNode } from "react";
import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_DETAIL_PRIJIMACIEK = "/prijimacky/detail-prijimaciek";
const LINK_LYCEJNA_VYZVA = "/prijimacky/lycejna-vyzva";

const sectionGap = "py-16 md:py-20 lg:py-24";
const h2Class =
  "font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]";

export function AkoSaDostatNaLyceumContent() {
  return (
    <main
      id="prijimacky-ako-sa-dostat-na-lyceum"
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
          <span className="text-brand-fg2">Ako sa dostať na Lýceum</span>
        </nav>
      </div>

      {/* 1. Hero */}
      <div className={CX}>
        <section
          className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-brand-bg2 via-white to-[#fef9e8] px-6 py-14 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] sm:px-10 sm:py-16 md:rounded-[28px] md:px-12 md:py-20 lg:px-16 lg:py-22"
          aria-label="Úvod"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#fdb913]/12 blur-3xl md:h-80 md:w-80"
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <h1 className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.8vw,3.1rem)] font-bold leading-[1.08] tracking-tight text-brand-fg1">
              Ako sa dostať na{" "}
              <span className="text-[#c9a010]">Lýceum</span>
            </h1>
            <p className="m-0 mt-6 max-w-2xl text-[15px] font-normal leading-relaxed text-brand-fg1/88 sm:text-[16px] sm:leading-relaxed md:mt-7 md:text-[17px] md:leading-[1.65]">
              Prijímačky na Lýceum nie sú o tom, čo vieš odrapkať. Skôr o tom, či
              vieš premýšľať, čítať s porozumením, pýtať sa a predstaviť svoje
              silné stránky.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#na-lyceum-vedu-dve-cesty"
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Pozrieť možnosti prijatia
              </a>
              <a
                href="#dolezite-terminy"
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Termíny a dôležité dátumy
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Termíny */}
      <section
        id="dolezite-terminy"
        className={`${CX} ${sectionGap} scroll-mt-28`}
        aria-labelledby="heading-terminy"
      >
        <h2 id="heading-terminy" className={`${h2Class} mb-10 md:mb-14`}>
          Dôležité termíny na jednom mieste
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {(
            [
              { title: "Prihláška", date: "do 20. 2. 2026" as ReactNode },
              { title: "Prijímačky", date: "4. 5. 2026 a 11. 5. 2026" },
              { title: "Výsledky", date: "15. 5. 2026" },
              {
                title: "Zápis",
                date: (
                  <>
                    25. 5. 2026
                    <span className="mt-1 block text-[0.85em] font-semibold leading-snug text-brand-fg2">
                      Haanova 28
                    </span>
                  </>
                ),
              },
            ] as { title: string; date: ReactNode }[]
          ).map((box) => (
            <div
              key={box.title}
              className="flex flex-col rounded-2xl bg-brand-bg2/90 px-5 py-6 ring-1 ring-black/[0.07] md:px-6 md:py-7"
            >
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.06em] text-brand-fg3">
                {box.title}
              </p>
              <div className="font-heading mt-3 text-[clamp(1.15rem,0.95rem+1vw,1.45rem)] font-bold leading-snug tracking-tight text-brand-fg1">
                {box.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Kto sa môže prihlásiť */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-kto"
      >
        <h2 id="heading-kto" className={`${h2Class} mb-6 md:mb-8`}>
          Kto sa môže prihlásiť
        </h2>
        <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-8 ring-1 ring-black/[0.06] md:px-10 md:py-10">
          <p className="m-0 text-[15px] font-medium text-brand-fg2 md:text-base">
            Na Lýceum sa môžu hlásiť:
          </p>
          <ul className="m-0 mt-4 list-none space-y-3 p-0 text-[15px] leading-relaxed text-brand-fg1 md:text-base">
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[#c9a010]" aria-hidden>
                •
              </span>
              <span>deviataci ZŠ v školskom roku 2025/2026</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[#c9a010]" aria-hidden>
                •
              </span>
              <span>študenti 8-ročných gymnázií (kvinta a vyššie)</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-[#c9a010]" aria-hidden>
                •
              </span>
              <span>študenti iných stredných škôl</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Koľko berieme */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-kolko"
      >
        <h2 id="heading-kolko" className={`${h2Class} mb-10 md:mb-12`}>
          Koľko študentov berieme
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {[
            { title: "Triedy", text: "3 triedy 1. ročníka" },
            { title: "Počet žiakov", text: "51 žiakov" },
            { title: "Odbor", text: "3918 M Technické lýceum" },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-black/[0.06] bg-white px-5 py-6 text-center md:px-6 md:py-8"
            >
              <p className="m-0 text-xs font-semibold uppercase tracking-wide text-brand-fg3">
                {c.title}
              </p>
              <p className="font-heading m-0 mt-3 text-[clamp(1rem,0.9rem+0.5vw,1.2rem)] font-bold leading-snug text-brand-fg1">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Dve cesty */}
      <section
        id="na-lyceum-vedu-dve-cesty"
        className={`${CX} ${sectionGap} scroll-mt-28`}
        aria-labelledby="heading-dve-cesty"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="heading-dve-cesty" className={h2Class}>
            Na Lýceum vedú 2 cesty
          </h2>
          <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[17px]">
            Môžeš sa k nám dostať cez Lýcejnú výzvu alebo cez prijímacie skúšky.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          <article className="flex flex-col rounded-[24px] bg-gradient-to-b from-white to-brand-bg2/80 p-6 shadow-[0_24px_56px_-24px_rgba(0,0,0,0.18)] ring-2 ring-[#fdb913]/35 md:p-8 lg:p-9">
            <h3 className="font-heading m-0 text-[clamp(1.2rem,1rem+1vw,1.45rem)] font-bold leading-tight text-brand-fg1">
              1. Cez Lýcejnú výzvu
            </h3>
            <p className="m-0 mt-3 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
              Táto cesta je pre uchádzačov, ktorí chcú ukázať svoj prístup,
              premýšľanie a silné stránky už vopred.
            </p>
            <ul className="m-0 mt-6 flex-1 list-none space-y-2.5 p-0 text-[14px] leading-snug text-brand-fg1 md:text-[15px]">
              {[
                "úspešný riešiteľ Lýcejnej výzvy",
                "umiestnenie do 47. miesta",
                "test aspoň 60 %",
                "rozhovor aspoň 40 %",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    className="mt-0.5 shrink-0 font-bold text-[#c9a010]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={LINK_LYCEJNA_VYZVA}
              className="btn-primary-site mt-8 w-full justify-center py-3.5 text-[15px] md:mt-10"
            >
              Pozrieť detail Lýcejnej výzvy
            </Link>
          </article>

          <article className="flex flex-col rounded-[24px] bg-gradient-to-b from-white to-brand-bg2/80 p-6 shadow-[0_24px_56px_-24px_rgba(0,0,0,0.18)] ring-2 ring-[#fdb913]/35 md:p-8 lg:p-9">
            <h3 className="font-heading m-0 text-[clamp(1.2rem,1rem+1vw,1.45rem)] font-bold leading-tight text-brand-fg1">
              2. Cez prijímacie skúšky
            </h3>
            <p className="m-0 mt-3 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
              Druhá cesta vedie cez prijímacie skúšky a individualizovaný vstup.
            </p>
            <ul className="m-0 mt-6 flex-1 list-none space-y-2.5 p-0 text-[14px] leading-snug text-brand-fg1 md:text-[15px]">
              {[
                "test aspoň 50 %",
                "individualizovaný vstup aspoň 40 %",
                "výsledok sa počíta: 80 % písomná časť a 20 % individualizovaný vstup",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    className="mt-0.5 shrink-0 font-bold text-[#c9a010]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={LINK_DETAIL_PRIJIMACIEK}
              className="btn-secondary-site mt-8 w-full justify-center py-3.5 text-[15px] md:mt-10"
            >
              Pozrieť detail prijímačiek
            </Link>
          </article>
        </div>
      </section>

      {/* 6. Čo spraviť ako prvé */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-kroky"
      >
        <h2 id="heading-kroky" className={`${h2Class} mb-10 md:mb-12`}>
          Čo spraviť ako prvé
        </h2>
        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-3 md:gap-6">
          {(
            [
              { step: "1", title: "Podaj prihlášku" as ReactNode },
              { step: "2", title: "Vyber si cestu prijatia" },
              {
                step: "3",
                title: (
                  <>
                    Pozri si detail{" "}
                    <Link
                      href={LINK_DETAIL_PRIJIMACIEK}
                      className="font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
                    >
                      prijímačiek
                    </Link>{" "}
                    alebo{" "}
                    <Link
                      href={LINK_LYCEJNA_VYZVA}
                      className="font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
                    >
                      Lýcejnej výzvy
                    </Link>
                  </>
                ),
              },
            ] as { step: string; title: ReactNode }[]
          ).map((k) => (
            <li
              key={k.step}
              className="flex gap-4 rounded-2xl bg-white px-5 py-6 ring-1 ring-black/[0.07] md:flex-col md:items-center md:text-center md:px-6 md:py-8"
            >
              <span
                className="font-heading flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdb913]/25 text-lg font-bold text-brand-fg1 md:h-12 md:w-12 md:text-xl"
                aria-hidden
              >
                {k.step}
              </span>
              <p className="m-0 self-center text-[15px] font-medium leading-snug text-brand-fg1 md:text-base">
                {k.title}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 7. Spodný CTA */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-gradient-to-br from-brand-primary/25 via-brand-bg2 to-brand-secondary/30 px-6 py-12 ring-1 ring-black/[0.08] md:rounded-[28px] md:px-12 md:py-16 lg:px-16 lg:py-20"
          aria-labelledby="heading-zaver"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="heading-zaver"
              className="font-heading m-0 text-[clamp(1.4rem,1.05rem+1.4vw,1.9rem)] font-bold leading-tight tracking-tight text-brand-fg1"
            >
              Vieš, ktorá cesta je pre teba?
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg1/90 md:mt-5 md:text-[17px] md:leading-relaxed">
              Pozri si detail prijímačiek alebo Lýcejnej výzvy a vyber si cestu,
              ktorá ti dáva najväčší zmysel.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
              <Link
                href={LINK_DETAIL_PRIJIMACIEK}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Pozrieť detail prijímačiek
              </Link>
              <Link
                href={LINK_LYCEJNA_VYZVA}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Pozrieť Lýcejnú výzvu
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
