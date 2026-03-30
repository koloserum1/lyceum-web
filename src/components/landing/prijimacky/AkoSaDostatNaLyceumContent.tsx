import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

/** Väčší vertikálny odstup: zlom medzi hlavnými časťami stránky. */
const gapMajor = "py-12 md:py-14 lg:py-16";

const LINK_CO = "/prijimacky/co-te-caka-na-prijimackach";
const LINK_ULOHY = "/prijimacky/vyskusaj-si-ulohy";
const LINK_TERM_VYS_ZAPIS = "/prijimacky/terminy-vysledky-a-zapis";
const LINK_LYCEJNA_VYZVA = "/prijimacky/lycejna-vyzva";

/** Hero + záver: žlté primárne CTA podľa zadania (mimo globálnej fialovej .btn-primary-site). */
const ctaPrimaryYellow =
  "inline-flex items-center justify-center rounded-full border-0 bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline shadow-[0_12px_32px_-12px_rgba(253,185,19,0.65)] transition-colors hover:bg-[#f5b010] md:px-10 md:text-base";

const pillSecondary =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/45 bg-white/90 px-5 py-2.5 text-[14px] font-semibold text-brand-fg1 no-underline shadow-sm backdrop-blur-sm transition-colors hover:border-brand-primary hover:bg-brand-accent/35 md:px-6 md:text-[15px]";

export function AkoSaDostatNaLyceumContent() {
  return (
    <main
      id="prijimacky-ako-sa-dostat-na-lyceum"
      className="scroll-mt-24 bg-brand-bg1 pb-12 md:scroll-mt-28 md:pb-16"
    >
      {/* 1. Hero — asymetrický 2-stĺpec, obrázok vpravo */}
      <div className={`${CX} pt-6 md:pt-8`}>
        <section
          className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#faf8fc] via-white to-[#fff9e8] ring-1 ring-black/[0.07] md:rounded-[32px] lg:rounded-[36px]"
          aria-label="Úvod"
        >
          <div className="grid gap-10 p-6 sm:p-8 md:gap-12 md:p-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:items-center lg:gap-14 lg:p-12 xl:p-14">
            <div className="min-w-0">
              <nav
                className="mb-6 text-[13px] text-brand-fg3 md:mb-8"
                aria-label="Oblasť stránky"
              >
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

              <h1 className="font-heading m-0 max-w-xl text-[clamp(2rem,1.2rem+3.2vw,3.35rem)] font-bold leading-[1.05] tracking-tight text-brand-fg1">
                <span className="block">Ako sa dostať na</span>
                <span className="mt-1 block text-[#fdb913]">Lýceum</span>
              </h1>

              <p className="m-0 mt-6 max-w-md text-[15px] font-normal leading-relaxed text-brand-fg1/90 sm:text-[16px] md:mt-7 md:text-[17px] md:leading-[1.62]">
                Prijímačky na Lýceum nie sú o tom, čo vieš odrapkať. Skôr o tom, či
                vieš premýšľať, čítať s porozumením, pýtať sa a predstaviť svoje
                silné stránky.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mt-10">
                <Link href={LINK_CO} className={`${ctaPrimaryYellow} w-fit`}>
                  Čo ťa čaká na prijímačkách
                </Link>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                  <Link href={LINK_ULOHY} className={pillSecondary}>
                    Vyskúšaj si úlohy
                  </Link>
                  <Link href={LINK_TERM_VYS_ZAPIS} className={pillSecondary}>
                    Termíny, výsledky a zápis
                  </Link>
                </div>
              </div>
            </div>

            {/* Pravý panel — fotografia + floating labels */}
            <div className="relative min-h-[240px] lg:min-h-[320px]">
              <div className="relative aspect-[4/5] min-h-[240px] w-full overflow-hidden rounded-[24px] ring-1 ring-black/[0.08] md:min-h-[280px] md:rounded-[28px] lg:min-h-[320px] lg:rounded-[32px]">
                <Image
                  src="/images/prijimacky/hero-ako-sa-dostat-na-lyceum.png"
                  alt="Študenti na Lýceu pri spoločnej práci v priestoroch školy"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="absolute -left-1 top-6 z-[2] sm:left-2 md:top-10 lg:-left-2">
                <span className="inline-block rounded-full bg-brand-fg1 px-3.5 py-1.5 text-[12px] font-bold text-white shadow-lg sm:text-[13px]">
                  Lýcejná výzva
                </span>
              </div>
              <div className="absolute -right-1 bottom-16 z-[2] sm:right-0 md:bottom-20 lg:-right-2">
                <span className="inline-block rounded-full border border-black/[0.08] bg-white/95 px-3.5 py-1.5 text-[12px] font-bold text-brand-fg1 shadow-md sm:text-[13px]">
                  Prijímačky
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Dôležité termíny — horizontálna timeline (mobile vertikálna) */}
      <section
        id="dolezite-terminy"
        className="mx-auto w-full max-w-[1400px] px-4 pt-10 pb-5 sm:px-6 md:pt-11 md:pb-6 lg:px-8"
        aria-labelledby="heading-terminy"
      >
        <h2
          id="heading-terminy"
          className="font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.9rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2.05rem)]"
        >
          Dôležité termíny na jednom mieste
        </h2>

        <div className="relative mx-auto mt-8 max-w-5xl md:mt-10">
          <div
            className="absolute left-[1.15rem] top-0 hidden h-full w-px bg-gradient-to-b from-brand-primary/50 via-brand-primary/25 to-transparent md:left-1/2 md:block md:-translate-x-1/2 md:bg-gradient-to-r md:from-transparent md:via-brand-primary/30 md:to-transparent md:top-[2.25rem] md:h-px md:w-[calc(100%-4rem)]"
            aria-hidden
          />
          <ol className="m-0 grid list-none gap-8 p-0 md:grid-cols-4 md:gap-4 md:gap-y-14">
            {(
              [
                {
                  label: "Prihláška",
                  date: "do 20. 2. 2026",
                  sub: null as ReactNode,
                  offset: "md:mt-0",
                },
                {
                  label: "Prijímačky",
                  date: "4. 5. 2026 a 11. 5. 2026",
                  sub: null,
                  offset: "md:mt-10",
                },
                {
                  label: "Výsledky",
                  date: "15. 5. 2026",
                  sub: null,
                  offset: "md:mt-0",
                },
                {
                  label: "Zápis",
                  date: "25. 5. 2026",
                  sub: (
                    <span className="mt-1 block text-[0.88em] font-semibold leading-snug text-brand-fg2">
                      Haanova 28
                    </span>
                  ),
                  offset: "md:mt-10",
                },
              ] as const
            ).map((item, i) => (
              <li
                key={item.label}
                className={`relative flex gap-4 md:flex-col md:items-center md:text-center ${item.offset}`}
              >
                <span
                  className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary/50 bg-white text-xs font-bold text-brand-fg1 shadow-sm md:relative md:z-[1] md:h-10 md:w-10"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div className="min-w-0 pt-0.5 md:pt-3">
                  <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                    {item.label}
                  </p>
                  <p className="font-heading m-0 mt-2 text-[clamp(1.05rem,0.9rem+0.9vw,1.35rem)] font-bold leading-snug tracking-tight text-brand-fg1">
                    {item.date}
                    {item.sub}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Kto sa môže prihlásiť — 3 ľahké horizontálne karty */}
      <section
        className="border-t border-black/[0.06] bg-[#f7f5fa]/80 pt-6 pb-6 md:pt-7 md:pb-7"
        aria-labelledby="heading-kto"
      >
        <div className={CX}>
          <h2
            id="heading-kto"
            className="font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]"
          >
            Kto sa môže prihlásiť
          </h2>
          <p className="m-0 mt-4 text-center text-[15px] text-brand-fg2 md:mt-5 md:text-base">
            Na Lýceum sa môžu hlásiť:
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3 sm:gap-4 md:mt-10">
            {[
              "deviataci ZŠ v školskom roku 2025/2026",
              "študenti 8-ročných gymnázií (kvinta a vyššie)",
              "študenti iných stredných škôl",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.05] bg-white/90 px-4 py-4 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.12)] md:flex-col md:items-center md:px-5 md:py-5 md:text-center"
              >
                <span
                  className="mt-1 h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand-primary/70 to-brand-secondary/80 md:mt-0 md:h-1 md:w-10 md:bg-gradient-to-r"
                  aria-hidden
                />
                <p className="m-0 text-left text-[14px] font-medium leading-snug text-brand-fg1 md:text-center md:text-[15px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Základné informácie o prijatí — minimalistické stat cards */}
      <section
        className={`${CX} pt-5 pb-11 md:pt-6 md:pb-14`}
        aria-labelledby="heading-zakladne-info"
      >
        <h2
          id="heading-zakladne-info"
          className="font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]"
        >
          Základné informácie o prijatí
        </h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3 md:mt-10 md:gap-8">
          {(
            [
              { title: "Triedy", value: "3 triedy 1. ročníka" },
              { title: "Počet žiakov", value: "51 žiakov" },
              { title: "Odbor", value: "3918 M Technické lýceum" },
            ] as const
          ).map((row) => (
            <div
              key={row.title}
              className="rounded-[20px] border border-black/[0.06] bg-brand-bg2/50 px-6 py-8 text-center md:py-10"
            >
              <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                {row.title}
              </p>
              <p className="font-heading m-0 mt-5 text-[clamp(1.2rem,0.95rem+1.1vw,1.65rem)] font-bold leading-snug tracking-tight text-brand-fg1">
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Dve cesty — vizuálny vrchol, odlišné feature karty */}
      <section
        id="na-lyceum-vedu-dve-cesty"
        className={`scroll-mt-28 bg-gradient-to-b from-white via-[#fefce8]/40 to-white ${gapMajor}`}
        aria-labelledby="heading-dve-cesty"
      >
        <div className={CX}>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="heading-dve-cesty"
              className="font-heading m-0 text-[clamp(1.45rem,1.1rem+1.4vw,2.1rem)] font-bold leading-tight tracking-tight text-brand-fg1"
            >
              Na Lýceum vedú 2 cesty
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[17px] md:leading-relaxed">
              Môžeš sa k nám dostať cez Lýcejnú výzvu alebo cez prijímacie skúšky.
            </p>
          </div>

          <div className="mx-auto mt-9 grid max-w-6xl gap-8 lg:mt-11 lg:grid-cols-2 lg:gap-10">
            <article className="relative flex min-h-full flex-col overflow-hidden rounded-[28px] bg-brand-fg1 p-8 text-white shadow-[0_32px_64px_-28px_rgba(0,0,0,0.35)] ring-1 ring-white/10 md:p-10 lg:p-11">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#fdb913]/25 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/20 to-transparent"
                aria-hidden
              />
              <h3 className="font-heading relative m-0 text-[clamp(1.35rem,1.1rem+1vw,1.65rem)] font-bold leading-tight text-white">
                1. Cez Lýcejnú výzvu
              </h3>
              <p className="relative m-0 mt-4 text-[14px] leading-relaxed text-white/85 md:text-[15px]">
                Táto cesta je pre uchádzačov, ktorí chcú ukázať svoj prístup,
                premýšľanie a silné stránky už vopred.
              </p>
              <ul className="relative m-0 mt-8 flex-1 list-none space-y-3 p-0 text-[14px] leading-snug text-white/95 md:text-[15px]">
                {[
                  "úspešný riešiteľ Lýcejnej výzvy",
                  "umiestnenie do 47. miesta",
                  "test aspoň 60 %",
                  "rozhovor aspoň 40 %",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 font-bold text-[#fdb913]" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={LINK_LYCEJNA_VYZVA}
                className={`${ctaPrimaryYellow} relative mt-10 w-full justify-center md:mt-12`}
              >
                Pozrieť detail Lýcejnej výzvy
              </Link>
            </article>

            <article className="relative flex min-h-full flex-col rounded-[28px] border-2 border-brand-primary/35 bg-white p-8 shadow-[0_28px_56px_-32px_rgba(185,160,224,0.45)] md:p-10 lg:p-11">
              <div
                className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-brand-accent/50 blur-2xl"
                aria-hidden
              />
              <h3 className="font-heading relative m-0 text-[clamp(1.35rem,1.1rem+1vw,1.65rem)] font-bold leading-tight text-brand-fg1">
                2. Cez prijímacie skúšky
              </h3>
              <p className="relative m-0 mt-4 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                Druhá cesta vedie cez prijímacie skúšky a individualizovaný vstup.
              </p>
              <ul className="relative m-0 mt-8 flex-1 list-none space-y-3 p-0 text-[14px] leading-snug text-brand-fg1 md:text-[15px]">
                {[
                  "test aspoň 50 %",
                  "individualizovaný vstup aspoň 40 %",
                  "výsledok sa počíta: 80 % písomná časť a 20 % individualizovaný vstup",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-0.5 shrink-0 font-bold text-brand-primary"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={LINK_CO}
                className="relative mt-10 inline-flex w-full items-center justify-center rounded-full border-2 border-brand-fg1 bg-transparent px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline transition-colors hover:bg-brand-fg1 hover:text-white md:mt-12 md:text-base"
              >
                Čo ťa čaká na prijímačkách
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Čo spraviť ako prvé — horizontálny flow s čiarou (menší horný odstup po „2 cesty“) */}
      <section
        className={`${CX} border-t border-black/[0.06] pt-9 pb-11 md:pt-10 md:pb-14`}
        aria-labelledby="heading-kroky"
      >
        <h2
          id="heading-kroky"
          className="font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]"
        >
          Čo spraviť ako prvé
        </h2>
        <div className="relative mx-auto mt-9 max-w-4xl md:mt-10">
          <div
            className="absolute left-6 right-6 top-[1.35rem] hidden h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 md:block"
            aria-hidden
          />
          <ol className="m-0 grid list-none gap-8 p-0 md:grid-cols-3 md:gap-6">
            {(
              [
                { step: "1", title: "Podaj prihlášku" as ReactNode },
                { step: "2", title: "Vyber si cestu prijatia" },
                {
                  step: "3",
                  title: (
                    <>
                      Pozri si{" "}
                      <Link
                        href={LINK_CO}
                        className="font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
                      >
                        čo ťa čaká na prijímačkách
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
              <li key={k.step} className="relative flex flex-col items-center text-center">
                <span
                  className="font-heading relative z-[1] flex h-11 w-11 items-center justify-center rounded-full bg-[#fdb913] text-lg font-bold text-brand-fg1 shadow-md md:h-12 md:w-12 md:text-xl"
                  aria-hidden
                >
                  {k.step}
                </span>
                <p className="m-0 mt-4 max-w-[220px] text-[15px] font-medium leading-snug text-brand-fg1 md:max-w-none md:text-base">
                  {k.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Ďalšie kroky — hierarchický navigačný záver */}
      <div className={`${CX} pt-2 md:pt-4`}>
        <section
          className="overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-bg2 via-white to-brand-accent/25 px-6 py-12 ring-1 ring-black/[0.07] md:rounded-[32px] md:px-12 md:py-16 lg:px-16"
          aria-labelledby="heading-zaver"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="heading-zaver"
              className="font-heading m-0 text-[clamp(1.35rem,1.05rem+1.2vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1"
            >
              Ďalšie kroky
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg1/88 md:mt-5 md:text-[17px]">
              Formu skúšok, ukážky úloh a presný harmonogram nájdeš na nasledujúcich
              stránkach.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 md:mt-10">
              <Link href={LINK_CO} className={`${ctaPrimaryYellow} w-full max-w-sm justify-center sm:w-auto`}>
                Čo ťa čaká na prijímačkách
              </Link>
              <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
                <Link href={LINK_ULOHY} className={`${pillSecondary} flex-1 justify-center sm:flex-none`}>
                  Vyskúšaj si úlohy
                </Link>
                <Link href={LINK_TERM_VYS_ZAPIS} className={`${pillSecondary} flex-1 justify-center sm:flex-none`}>
                  Termíny, výsledky a zápis
                </Link>
              </div>
              <Link
                href="/#prijimacky"
                className="mt-2 text-[14px] font-semibold text-brand-fg3 underline decoration-brand-fg3/30 underline-offset-[5px] transition-colors hover:text-brand-fg1 hover:decoration-brand-fg1/40"
              >
                Späť na prehľad prijímačok
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className={`${CX} pb-4 pt-5 md:pt-6`} />
    </main>
  );
}
