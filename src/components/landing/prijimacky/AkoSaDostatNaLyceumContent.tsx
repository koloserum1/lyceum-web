import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import heroPills from "./heroFloatingPills.module.css";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_CO = "/prijimacky/co-te-caka-na-prijimackach";
const LINK_ULOHY = "/prijimacky/vyskusaj-si-ulohy";
const LINK_TERM_VYS_ZAPIS = "/prijimacky/terminy-vysledky-a-zapis";
const LINK_LYCEJNA_VYZVA = "/prijimacky/lycejna-vyzva";
const LINK_SELF = "/prijimacky/ako-sa-dostat-na-lyceum";

const ctaPrimaryYellow =
  "inline-flex items-center justify-center rounded-full border-0 bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline shadow-[0_12px_32px_-12px_rgba(253,185,19,0.65)] transition-colors hover:bg-[#f5b010] md:px-10 md:text-base";

const pillSecondary =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/45 bg-white/90 px-5 py-2.5 text-[14px] font-semibold text-brand-fg1 no-underline shadow-sm backdrop-blur-sm transition-colors hover:border-brand-primary hover:bg-brand-accent/35 md:px-6 md:text-[15px]";

const pillSecondaryHero =
  "inline-flex items-center justify-center rounded-full border border-[#e8e4df] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#1a1f1e] no-underline shadow-[0_4px_16px_-8px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-colors hover:border-[#e8c4a8]/80 hover:bg-[#fffaf6] hover:shadow-[0_6px_20px_-8px_rgba(200,150,110,0.12)] md:px-6 md:text-[15px]";

export function AkoSaDostatNaLyceumContent() {
  return (
    <main
      id="prijimacky-ako-sa-dostat-na-lyceum"
      className="scroll-mt-24 bg-brand-bg2 pb-10 md:scroll-mt-28 md:pb-14"
    >
      {/* BLOK 1 — Hero + termíny v jednom celku */}
      <div className={`${CX} pt-6 md:pt-8`}>
        <section
          className="overflow-x-clip rounded-[36px] bg-gradient-to-br from-white via-[#faf9f7] to-[#fff7f0] ring-1 ring-[#ebe4dc]/60 shadow-[0_24px_60px_-32px_rgba(90,80,70,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]"
          aria-label="Úvod a dôležité termíny"
        >
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:pb-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,1.08fr)] lg:items-start lg:gap-10 xl:gap-12">
              <div className="min-w-0">
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
                  <span className="text-brand-fg2">Ako sa dostať na Lýceum</span>
                </nav>

                <h1 className="font-heading m-0 max-w-xl text-[clamp(2rem,1.2rem+3.2vw,3.35rem)] font-bold leading-[1.05] tracking-tight text-[#1a1f1e]">
                  <span className="block">Ako sa dostať na</span>
                  <span className="mt-1 block text-[#fdb913]">Lýceum</span>
                </h1>

                <p className="m-0 mt-5 max-w-md text-[15px] font-normal leading-relaxed text-[#2a3533]/92 sm:text-[16px] md:mt-6 md:text-[17px] md:leading-[1.62]">
                  Prijímačky na Lýceum nie sú o tom, čo vieš odrapkať. Skôr o tom, či
                  vieš premýšľať, čítať s porozumením, pýtať sa a predstaviť svoje
                  silné stránky.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8">
                  <Link href={LINK_CO} className={`${ctaPrimaryYellow} w-fit`}>
                    Čo ťa čaká na prijímačkách
                  </Link>
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                    <Link href={LINK_ULOHY} className={pillSecondaryHero}>
                      Vyskúšaj si úlohy
                    </Link>
                    <Link href={LINK_TERM_VYS_ZAPIS} className={pillSecondaryHero}>
                      Termíny, výsledky a zápis
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[min(100%,24rem)] sm:max-w-[min(100%,28rem)] lg:mx-0 lg:max-w-none lg:w-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] ring-1 ring-[#ebe8e4]/90 md:aspect-[3/2] md:rounded-[28px] lg:rounded-[32px]">
                  <Image
                    src="/images/prijimacky/hero-ako-sa-dostat-na-lyceum.png"
                    alt="Študenti na Lýceu pri spoločnej práci v priestoroch školy"
                    fill
                    className="object-cover object-[center_40%]"
                    sizes="(max-width: 1024px) min(100vw, 28rem), (max-width: 1400px) 48vw, 640px"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a2218]/[0.22] via-[#4a3d2e]/[0.05] to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="absolute left-2 top-2 z-[2] sm:left-3 sm:top-3 lg:left-4 lg:top-4">
                  <span
                    className={`${heroPills.pillDriftA} font-heading inline-block rounded-full border border-[#f0d8c8]/90 bg-gradient-to-br from-white to-[#fff2e8] px-6 py-3.5 text-base font-bold leading-tight tracking-tight text-brand-fg1 shadow-[0_12px_28px_-10px_rgba(180,130,90,0.18)] sm:px-7 sm:py-4 sm:text-lg md:px-8 md:py-[1.125rem] md:text-xl`}
                  >
                    Lýcejná výzva
                  </span>
                </div>
                <div className="absolute right-2 bottom-2 z-[2] sm:right-3 sm:bottom-3 lg:right-4 lg:bottom-4">
                  <span
                    className={`${heroPills.pillDriftB} font-heading inline-block rounded-full border-2 border-[#e8e2dc]/90 bg-white/95 px-6 py-3.5 text-base font-bold leading-tight tracking-tight text-brand-fg1 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:px-7 sm:py-4 sm:text-lg md:px-8 md:py-[1.125rem] md:text-xl`}
                  >
                    Prijímačky
                  </span>
                </div>
              </div>
            </div>

            {/* Termíny: integrovaný pás v tom istom bloku */}
            <div
              id="dolezite-terminy"
              className="scroll-mt-28 mt-8 border-t border-[#ebe8e4]/90 pt-6 md:mt-10 md:pt-8"
            >
              <p className="font-heading m-0 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-fg3 md:text-xs">
                Dôležité termíny na jednom mieste
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {(
                  [
                    {
                      label: "Prihláška",
                      date: "do 20. 2. 2026" as ReactNode,
                      sub: null as ReactNode,
                    },
                    {
                      label: "Prijímačky",
                      date: "4. 5. 2026 a 11. 5. 2026",
                      sub: null,
                    },
                    { label: "Výsledky", date: "15. 5. 2026", sub: null },
                    {
                      label: "Zápis",
                      date: "25. 5. 2026",
                      sub: (
                        <span className="mt-0.5 block text-[0.9em] font-semibold text-brand-fg2">
                          Haanova 28
                        </span>
                      ),
                    },
                  ] as const
                ).map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/[0.05] bg-white px-4 py-3.5 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm md:px-5 md:py-4"
                  >
                    <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                      {item.label}
                    </p>
                    <p className="font-heading m-0 mt-1.5 text-[clamp(0.98rem,0.88rem+0.5vw,1.2rem)] font-bold leading-snug text-brand-fg1">
                      {item.date}
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BLOK 2 — Pre koho + základné info v jednom celku */}
      <section
        className={`${CX} py-8 md:py-10`}
        aria-labelledby="heading-kto-a-info"
      >
        <div className="relative overflow-hidden rounded-[36px] border border-[#ebe6e0]/90 bg-gradient-to-br from-white via-[#fcfbfa] to-[#fff5ec] p-6 text-brand-fg1 shadow-[0_28px_64px_-32px_rgba(90,80,70,0.09)] sm:p-8 md:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-tr from-white/80 via-transparent to-[#ffd4b8]/[0.14]"
            aria-hidden
          />
          <div className="relative z-[1]">
          <h2
            id="heading-kto-a-info"
            className="font-heading m-0 max-w-2xl text-[clamp(1.35rem,1rem+1.4vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.5vw,2rem)]"
          >
            Kto sa môže prihlásiť
            <span className="text-brand-fg3"> — </span>
            základné informácie o prijatí
          </h2>
          <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg2 md:text-base">
            Na Lýceum sa môžu hlásiť:
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5 md:gap-3">
            {[
              "deviataci ZŠ v školskom roku 2025/2026",
              "študenti 8-ročných gymnázií (kvinta a vyššie)",
              "študenti iných stredných škôl",
            ].map((text) => (
              <span
                key={text}
                className="inline-flex max-w-full rounded-full border border-[#e8e4df] bg-white px-4 py-2 text-[13px] font-medium leading-snug text-brand-fg1 shadow-[0_2px_12px_-6px_rgba(0,0,0,0.06)] backdrop-blur-[2px] md:text-[14px]"
              >
                {text}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 md:mt-12 md:gap-5">
            {(
              [
                { title: "Triedy", value: "3 triedy 1. ročníka" },
                { title: "Počet žiakov", value: "51 žiakov" },
                { title: "Odbor", value: "3918 M Technické lýceum" },
              ] as const
            ).map((row) => (
              <div key={row.title} className="relative">
                <div
                  className="pointer-events-none absolute -inset-1 rounded-2xl bg-[#ffd4b8]/20 blur-xl"
                  aria-hidden
                />
                <div className="relative rounded-2xl border border-[#ebe8e4] bg-white px-5 py-5 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.06)] md:py-6">
                  <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                    {row.title}
                  </p>
                  <p className="font-heading m-0 mt-2 text-[clamp(1.05rem,0.95rem+0.6vw,1.35rem)] font-bold leading-snug text-brand-fg1">
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* BLOK 3 — Dve cesty */}
      <section
        id="na-lyceum-vedu-dve-cesty"
        className={`${CX} scroll-mt-28 py-10 md:py-12`}
        aria-labelledby="heading-dve-cesty"
      >
        <div className="mb-8 max-w-2xl lg:mb-10">
          <h2
            id="heading-dve-cesty"
            className="font-heading m-0 text-[clamp(1.5rem,1.1rem+1.5vw,2.15rem)] font-bold leading-[1.1] tracking-tight text-brand-fg1"
          >
            Na Lýceum vedú 2 cesty
          </h2>
          <p className="m-0 mt-3 text-[15px] leading-relaxed text-brand-fg2 md:mt-4 md:text-[17px]">
            Môžeš sa k nám dostať cez Lýcejnú výzvu alebo cez prijímacie skúšky.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
          <article className="relative flex min-h-full flex-col overflow-hidden rounded-[28px] border border-[#edd8cc]/80 bg-gradient-to-br from-white via-[#faf7f2] to-[#fff0e6] p-7 text-brand-fg1 shadow-[0_28px_64px_-28px_rgba(120,90,70,0.1)] md:p-9 lg:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#ffd4b8]/25 blur-3xl"
              aria-hidden
            />
            <h3 className="font-heading relative m-0 text-[clamp(1.25rem,1.05rem+1vw,1.55rem)] font-bold leading-tight text-brand-fg1">
              1. Cez Lýcejnú výzvu
            </h3>
            <p className="relative m-0 mt-4 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
              Táto cesta je pre uchádzačov, ktorí chcú ukázať svoj prístup,
              premýšľanie a silné stránky už vopred.
            </p>
            <ul className="relative m-0 mt-7 flex-1 list-none space-y-2.5 p-0 text-[14px] leading-snug text-brand-fg1 md:mt-8 md:text-[15px]">
              {[
                "úspešný riešiteľ Lýcejnej výzvy",
                "umiestnenie do 47. miesta",
                "test aspoň 60 %",
                "rozhovor aspoň 40 %",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 font-bold text-[#e8a078]" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={LINK_LYCEJNA_VYZVA}
              className={`${ctaPrimaryYellow} relative mt-9 w-full justify-center md:mt-10`}
            >
              Pozrieť detail Lýcejnej výzvy
            </Link>
          </article>

          <article className="relative flex min-h-full flex-col rounded-[28px] border-2 border-brand-primary/40 bg-white p-7 shadow-[0_32px_64px_-36px_rgba(120,90,160,0.22)] md:p-9 lg:p-10">
            <div
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-[100%] bg-brand-accent/40 blur-2xl"
              aria-hidden
            />
            <h3 className="font-heading relative m-0 text-[clamp(1.25rem,1.05rem+1vw,1.55rem)] font-bold leading-tight text-brand-fg1">
              2. Cez prijímacie skúšky
            </h3>
            <p className="relative m-0 mt-4 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
              Druhá cesta vedie cez prijímacie skúšky a individualizovaný vstup.
            </p>
            <ul className="relative m-0 mt-7 flex-1 list-none space-y-2.5 p-0 text-[14px] leading-snug text-brand-fg1 md:mt-8 md:text-[15px]">
              {[
                "test aspoň 50 %",
                "individualizovaný vstup aspoň 40 %",
                "výsledok sa počíta: 80 % písomná časť a 20 % individualizovaný vstup",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
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
              className="relative mt-9 inline-flex w-full items-center justify-center rounded-full border-2 border-brand-fg1 bg-transparent px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline transition-colors hover:bg-brand-fg1 hover:text-white md:mt-10 md:text-base"
            >
              Čo ťa čaká na prijímačkách
            </Link>
          </article>
        </div>
      </section>

      {/* BLOK 4 — Kroky + ďalšie kroky v jednom */}
      <div className={CX}>
        <section
          className="mb-10 overflow-hidden rounded-[28px] bg-white p-6 ring-1 ring-black/[0.06] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.1)] sm:p-8 md:rounded-[32px] md:p-10"
          aria-label="Čo spraviť ako prvé a ďalšie kroky"
        >
          <p
            id="heading-kroky"
            className="m-0 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-fg3"
          >
            Čo spraviť ako prvé
          </p>

          <ol className="m-0 mt-5 flex list-none flex-col gap-6 p-0 md:mt-6 md:flex-row md:items-start md:gap-0 md:justify-between">
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
              <li
                key={k.step}
                className="flex flex-1 flex-col gap-3 md:items-center md:px-2 md:text-center"
              >
                <span
                  className="font-heading relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fdb913] text-base font-bold text-brand-fg1 shadow-sm md:mx-auto md:h-11 md:w-11"
                  aria-hidden
                >
                  {k.step}
                </span>
                <p className="m-0 max-w-[16rem] text-[15px] font-medium leading-snug text-brand-fg1 md:text-base">
                  {k.title}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-black/[0.06] pt-8 md:mt-12 md:pt-10">
            <h2
              id="heading-zaver"
              className="font-heading m-0 text-base font-bold text-brand-fg1 md:text-lg"
            >
              Ďalšie kroky
            </h2>
            <p className="m-0 mt-2 max-w-xl text-[15px] leading-relaxed text-brand-fg2 md:text-[16px]">
              Formu skúšok, ukážky úloh a presný harmonogram nájdeš na nasledujúcich
              stránkach.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={LINK_CO} className={`${ctaPrimaryYellow} justify-center`}>
                Čo ťa čaká na prijímačkách
              </Link>
              <Link href={LINK_ULOHY} className={`${pillSecondary} justify-center`}>
                Vyskúšaj si úlohy
              </Link>
              <Link href={LINK_TERM_VYS_ZAPIS} className={`${pillSecondary} justify-center`}>
                Termíny, výsledky a zápis
              </Link>
            </div>
            <Link
              href="/#prijimacky"
              className="mt-5 inline-block text-[14px] font-semibold text-brand-fg3 underline decoration-brand-fg3/30 underline-offset-[5px] transition-colors hover:text-brand-fg1"
            >
              Späť na prehľad prijímačok
            </Link>
          </div>
        </section>
      </div>

      <div className={`${CX} pb-2 pt-0`}>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-black/[0.06] pt-6 text-center text-[14px] text-brand-fg3 md:pt-8"
          aria-label="Navigácia"
        >
          <Link
            href={LINK_SELF}
            className="font-medium text-brand-fg2 underline decoration-brand-fg3/35 underline-offset-[5px] hover:text-brand-fg1"
          >
            Ako sa dostať na Lýceum
          </Link>
          <span className="text-brand-fg4" aria-hidden>
            ·
          </span>
          <Link
            href="/#prijimacky"
            className="font-medium text-brand-fg2 underline decoration-brand-fg3/35 underline-offset-[5px] hover:text-brand-fg1"
          >
            Späť na prehľad prijímačok
          </Link>
        </nav>
      </div>
    </main>
  );
}
