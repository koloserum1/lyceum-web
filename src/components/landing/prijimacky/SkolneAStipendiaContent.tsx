import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";
const LINK_KONTAKT = "/#kontakt";

const heroCtaSecondary =
  "inline-flex items-center justify-center rounded-full border border-[#d4c8ea] bg-white/90 px-5 py-2.5 text-[13px] font-semibold text-brand-fg1 shadow-[0_8px_28px_-12px_rgba(90,70,130,0.18)] backdrop-blur-sm transition-[border-color,background-color,box-shadow,transform] hover:border-brand-primary/45 hover:bg-white hover:shadow-[0_12px_32px_-10px_rgba(100,80,150,0.2)] md:px-6 md:py-3 md:text-[14px]";

/** Hero karta — rovnaká ako „Ako sa dostať na Lýceum“. */
const heroCard =
  "overflow-x-clip rounded-[36px] bg-gradient-to-br from-white via-[#faf9f7] to-[#fff7f0] ring-1 ring-[#ebe4dc]/60 shadow-[0_24px_60px_-32px_rgba(90,80,70,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]";

/** Karta textu — ako na „Pridaj sa do tímu“ / prijímačky. */
const contentCard =
  "rounded-[28px] border border-[#ebe6e0]/90 bg-gradient-to-br from-white via-[#fcfbfa] to-[#fff5ec] p-6 text-brand-fg1 shadow-[0_28px_64px_-32px_rgba(90,80,70,0.09)] sm:p-8 md:p-10";

const eyebrow =
  "font-heading m-0 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-fg3 md:text-xs";

/** Podkarta v rámci contentCard (štipendiá, žiadosť/kontakt) */
const stipendSubCard =
  "rounded-2xl border border-[#e8e2dc]/90 bg-white/80 p-5 shadow-[0_12px_36px_-24px_rgba(65,52,92,0.2)] sm:p-6";

export function SkolneAStipendiaContent() {
  return (
    <main
      id="prijimacky-skolne-a-stipendia"
      className="scroll-mt-24 bg-brand-bg2 pb-12 md:scroll-mt-28 md:pb-16"
    >
      {/* 1. Hero — box ako ostatné prijímačkové stránky, pozadie stránky brand-bg2 */}
      <div className="bg-brand-bg2 pb-2 md:pb-4">
        <div className={`${CX} pt-6 md:pt-8`}>
          <section className={heroCard} aria-label="Úvod a ceny">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:pb-8">
              <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,1.08fr)] lg:gap-10 xl:gap-12">
                <div className="min-w-0">
                  <nav
                    className="m-0 text-[11px] font-medium leading-snug tracking-tight text-[#9a8eb0] md:text-[12px]"
                    aria-label="Oblasť stránky"
                  >
                    <Link
                      href="/#prijimacky"
                      className="text-[#8b7cab] underline decoration-brand-primary/28 underline-offset-2 transition-colors hover:text-brand-primary hover:decoration-brand-primary/50"
                    >
                      Prijímačky
                    </Link>
                    <span className="mx-1.5 text-[#bdb5cf]" aria-hidden>
                      /
                    </span>
                    <span className="text-[#958bad]">Školné a štipendiá</span>
                  </nav>

                  <header className="mt-5 max-w-xl md:mt-6" aria-label="Úvod">
                    <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6b5b8c] md:text-[11px]">
                      Školský rok 2025/2026
                    </p>
                    <h1 className="font-heading m-0 mt-3 text-[clamp(2rem,1.2rem+3.2vw,3.35rem)] font-bold leading-[1.05] tracking-tight text-brand-fg1 md:mt-4">
                      <span className="block">Školné</span>
                      <span className="mt-1 block text-[#fdb913]">a štipendiá</span>
                    </h1>
                    <p className="m-0 mt-5 max-w-[34rem] text-pretty text-[15px] leading-relaxed text-brand-fg2 sm:text-[16px] md:mt-6 md:text-[17px] md:leading-[1.62]">
                      Koľko stojí štúdium na Lýceu a aké možnosti podpory existujú, keď je to
                      finančne náročné.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-7">
                      <Link
                        href={LINK_KONTAKT}
                        className="btn-primary-site inline-flex justify-center px-7 py-3 text-[15px] sm:w-auto"
                      >
                        Kontaktovať nás
                      </Link>
                      <Link href={LINK_AKO} className={`${heroCtaSecondary} no-underline`}>
                        Ako sa dostať na Lýceum
                      </Link>
                    </div>
                  </header>

                  <ul
                    className="mt-8 flex list-none flex-wrap gap-2 p-0 lg:hidden"
                    aria-label="Stručný prehľad cien a podpory"
                  >
                    <li className="rounded-xl border border-[#e8e0f4] bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                        Zápisné
                      </span>
                      <span className="font-heading text-lg font-bold tabular-nums text-brand-fg1">
                        700 €
                      </span>
                    </li>
                    <li className="rounded-xl border border-[#fdb913]/35 bg-[#fffdf8]/95 px-3.5 py-2 shadow-sm backdrop-blur-sm">
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                        Školné
                      </span>
                      <span className="font-heading text-lg font-bold tabular-nums text-brand-fg1">
                        3 550 €
                      </span>
                    </li>
                    <li className="rounded-xl border border-[#d4c8ea]/70 bg-[#f8f4ff]/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                        Štipendiá
                      </span>
                      <span className="text-sm font-semibold text-[#5d4d7a]">až 70 %</span>
                    </li>
                  </ul>
                </div>

                <div
                  className="relative mx-auto hidden min-h-[17rem] w-full max-w-md lg:mx-0 lg:block lg:max-w-none"
                  aria-hidden
                >
                  <div className="absolute left-[8%] top-[6%] w-[78%] rotate-[-2.5deg] rounded-2xl border border-white/70 bg-white/55 px-5 py-4 shadow-[0_24px_56px_-28px_rgba(65,52,92,0.35)] backdrop-blur-md ring-1 ring-[#e8e0f4]/90">
                    <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                      Zápisné
                    </p>
                    <p className="font-heading m-0 mt-1.5 text-3xl font-bold tabular-nums text-brand-fg1">
                      700 €
                    </p>
                  </div>
                  <div className="absolute right-0 top-[32%] w-[82%] rotate-[2deg] rounded-2xl border border-[#fdb913]/30 bg-gradient-to-br from-white/90 to-[#fefbf3]/95 px-5 py-4 shadow-[0_28px_60px_-26px_rgba(65,52,92,0.32),0_0_0_1px_rgba(253,185,19,0.12)] backdrop-blur-md">
                    <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                      Školné / rok
                    </p>
                    <p className="font-heading m-0 mt-1.5 text-3xl font-bold tabular-nums text-brand-fg1">
                      3 550 €
                    </p>
                  </div>
                  <div className="absolute bottom-[6%] left-[12%] w-[72%] rotate-[-1deg] rounded-2xl border border-[#d4c8ea]/80 bg-gradient-to-br from-[#f5f0fc]/95 to-white/80 px-4 py-3.5 shadow-[0_20px_48px_-30px_rgba(95,75,140,0.28)] backdrop-blur-md">
                    <p className="m-0 text-center text-[12px] font-semibold leading-snug text-brand-fg1">
                      Štipendiá až do{" "}
                      <span className="whitespace-nowrap text-[#5d4d7a]">70 % školného</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 2. Ceny — hlavný vizuálny ťažiskový blok */}
      <div className={`${CX} mt-9 text-center md:mt-11 lg:mt-12`}>
        <section aria-labelledby="heading-cena">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
            Školský rok 2025/2026
          </p>
          <h2
            id="heading-cena"
            className="font-heading m-0 mt-2 text-[clamp(1rem,0.92rem+0.35vw,1.15rem)] font-semibold uppercase tracking-[0.08em] text-brand-fg3"
          >
            Koľko stojí štúdium
          </h2>

          <div className="mx-auto mt-5 grid max-w-3xl grid-cols-1 gap-4 sm:mt-6 md:grid-cols-2 md:gap-5 lg:gap-6">
            <div className="rounded-[1.25rem] bg-white px-6 py-8 text-center shadow-[0_20px_50px_-28px_rgba(65,52,92,0.18)] sm:rounded-[1.35rem] sm:px-8 sm:py-9 md:py-10 lg:px-10 lg:py-11">
              <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                Zápisné
              </p>
              <p className="font-heading m-0 mt-3 text-[clamp(2.5rem,1.6rem+4vw,3.75rem)] font-bold tabular-nums leading-none tracking-tight text-[#342c44] md:mt-4">
                700 €
              </p>
              <p className="m-0 mt-3 text-[15px] text-brand-fg2 md:text-[16px]">noví študenti</p>
            </div>
            <div className="relative rounded-[1.25rem] bg-white px-6 py-8 text-center shadow-[0_20px_50px_-28px_rgba(65,52,92,0.18)] ring-1 ring-[#fdb913]/35 sm:rounded-[1.35rem] sm:px-8 sm:py-9 md:py-10 lg:px-10 lg:py-11">
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 rounded-b-full bg-[#fdb913]/85 sm:w-16"
                aria-hidden
              />
              <p className="m-0 pt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-fg3 sm:pt-1.5">
                Školné
              </p>
              <p className="font-heading m-0 mt-3 text-[clamp(2.5rem,1.6rem+4vw,3.75rem)] font-bold tabular-nums leading-none tracking-tight text-[#342c44] md:mt-4">
                3 550 €
              </p>
              <p className="m-0 mt-3 text-[15px] text-brand-fg2 md:text-[16px]">
                / školský rok
              </p>
            </div>
          </div>

          <p className="m-0 mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-brand-fg3 md:mt-6 md:text-[15px]">
            V odôvodnených prípadoch je možné dohodnúť individuálny splátkový
            kalendár.
          </p>
        </section>
      </div>

      {/* 3. Praktické informácie — druhoradé, kompaktné, bez ťažkých rámov */}
      <div className={`${CX} mt-10 flex justify-center md:mt-12 lg:mt-14`}>
        <div className="w-full max-w-4xl rounded-[1.25rem] bg-white px-5 py-7 text-center ring-1 ring-[#e8e2ee] sm:px-7 sm:py-8 md:rounded-[1.35rem] md:px-8 md:py-9 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            <div aria-labelledby="heading-nepokryva">
              <h2
                id="heading-nepokryva"
                className="font-heading m-0 text-[0.95rem] font-bold leading-tight text-[#342c44] md:text-[1.02rem]"
              >
                Čo školné nepokrýva
              </h2>
              <ul className="m-0 mx-auto mt-3 max-w-md list-none space-y-2 p-0 text-left">
                {[
                  "stravu",
                  "výlety",
                  "teambuildingy",
                  "počítačové vybavenie (1 notebook na študenta)",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#d4c8ea] pl-3 text-[14px] font-medium leading-snug text-brand-fg1 md:text-[15px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="m-0 mx-auto mt-4 max-w-md text-[12px] leading-relaxed text-brand-fg3 md:text-[13px]">
                Výška príspevku sa môže medziročne upravovať približne podľa inflácie.
              </p>
            </div>

            <div
              className="border-t border-[#e4dcf0] pt-8 md:border-t-0 md:border-l md:border-[#e4dcf0] md:pl-10 md:pt-0 lg:pl-12"
              aria-labelledby="heading-platba"
            >
              <h2
                id="heading-platba"
                className="font-heading m-0 text-[0.95rem] font-bold leading-tight text-[#342c44] md:text-[1.02rem]"
              >
                Ako sa platí
              </h2>
              <dl className="m-0 mx-auto mt-3 max-w-md space-y-4 text-left">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-fg3">
                    IBAN
                  </dt>
                  <dd className="m-0 mt-1 font-mono text-[13px] font-medium tracking-tight text-[#342c44] sm:text-[14px]">
                    SK07 1100 0000 0029 4912 9790
                    <span className="mt-1 block font-sans text-[12px] font-normal text-brand-fg3 sm:inline sm:mt-0 sm:before:content-['·_']">
                      Tatra banka
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] font-semibold text-brand-fg1 md:text-[14px]">
                    Pri platbe uveď
                  </dt>
                  <dd className="m-0 mt-2">
                    <ul className="m-0 list-none space-y-1 p-0 text-[13px] leading-relaxed text-brand-fg2 md:text-[14px]">
                      <li className="flex gap-2">
                        <span className="w-3.5 shrink-0 text-brand-fg4">—</span>
                        <span>variabilný symbol (posielame mailom)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="w-3.5 shrink-0 text-brand-fg4">—</span>
                        <span>meno a priezvisko dieťaťa (účel platby)</span>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Štipendiá — úvod + dve podkarty v mriežke */}
      <div className={`${CX} mt-10 md:mt-12 lg:mt-14`}>
        <section className={contentCard} aria-labelledby="heading-stipendia">
          <div className="max-w-2xl">
            <p className={eyebrow}>Štipendiá</p>
            <h2
              id="heading-stipendia"
              className="font-heading m-0 mt-2 text-[clamp(1.2rem,1.05rem+0.9vw,1.65rem)] font-bold leading-tight text-brand-fg1 md:mt-2.5"
            >
              Keď je to finančne náročné
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[16px] md:leading-[1.58]">
              Máme štipendijný fond, aby škola ostala otvorená aj pre rodiny v náročnejšej
              situácii.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:gap-5 md:mt-9 md:grid-cols-2 md:items-stretch md:gap-6">
            <div className={`flex h-full flex-col ${stipendSubCard}`}>
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                Podpora školného
              </p>
              <p className="font-heading m-0 mt-3 text-[clamp(1.05rem,0.95rem+0.55vw,1.3rem)] font-bold leading-snug text-brand-fg1">
                Až 3 štipendiá do výšky 70 % školného
              </p>
            </div>
            <div className={`flex h-full flex-col ${stipendSubCard}`}>
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                Laptop
              </p>
              <p className="m-0 mt-3 text-[15px] font-semibold leading-snug text-brand-fg1 md:text-[16px]">
                Možnosť financovať študentský laptop (od 2. ročníka)
              </p>
            </div>
          </div>

          <p className="m-0 mt-6 text-[11px] text-brand-fg3 md:mt-7 md:text-[12px]">
            Vďaka Villum Foundation (2025/2026).
          </p>
        </section>
      </div>

      {/* 5. Žiadosť, termíny, kontakt — vonkajší rám + podkarty */}
      <div className={`${CX} mt-10 md:mt-12 lg:mt-14`}>
        <section
          className={contentCard}
          id="kontakt-skolne"
          aria-labelledby="heading-kto"
        >
          <p className={eyebrow}>Žiadosť a kontakt</p>

          <div className="mt-5 flex flex-col gap-4 md:mt-6 md:gap-5">
            <div className={stipendSubCard}>
              <h2
                id="heading-kto"
                className="font-heading m-0 text-[clamp(1.1rem,1rem+0.85vw,1.45rem)] font-bold leading-tight text-brand-fg1"
              >
                Kto môže požiadať o štipendium
              </h2>
              <ul className="m-0 mt-4 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-brand-fg2 marker:text-brand-primary/55 md:mt-5 md:text-[15px]">
                <li className="pl-0.5">motivovaný/á a talentovaný/á</li>
                <li className="pl-0.5">z viacpočetnej alebo neúplnej rodiny</li>
                <li className="pl-0.5">
                  alebo žije v rodine so skromnejšími finančnými pomermi
                </li>
              </ul>
              <p className="m-0 mt-4 max-w-xl border-t border-[#ebe6e0]/80 pt-4 text-[13px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[14px]">
                Rozhoduje kombinácia situácie rodiny a toho, ako uchádzač zvládne prijímací
                proces.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:items-stretch md:gap-5">
              <div className={`flex h-full flex-col ${stipendSubCard}`}>
                <h3
                  id="heading-kedy"
                  className="font-heading m-0 text-[clamp(1.05rem,0.98rem+0.45vw,1.2rem)] font-bold leading-tight text-brand-fg1"
                >
                  Kedy a kam sa ozvať
                </h3>
                <p className="m-0 mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                  Termíny
                </p>
                <ul className="m-0 mt-3 list-disc space-y-2 pl-5 text-[14px] leading-snug text-brand-fg2 marker:text-brand-primary/55 md:text-[15px]">
                  <li className="pl-0.5">
                    <span className="font-semibold text-brand-fg1">Uchádzači:</span> žiadosť
                    spolu s prihláškou
                  </li>
                  <li className="pl-0.5">
                    <span className="font-semibold text-brand-fg1">Aktuálni študenti:</span>{" "}
                    do 15. 6.
                  </li>
                </ul>
              </div>

              <div className={`flex h-full flex-col ${stipendSubCard}`}>
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                  Kontakt
                </p>
                <p className="font-heading m-0 mt-2 text-xl font-bold text-brand-fg1 md:text-2xl">
                  Zuzana Mišinová
                </p>
                <p className="m-0 mt-3 text-[14px] leading-relaxed md:text-[15px]">
                  <a
                    href="mailto:zuzana.misinova@lyceum.sk"
                    className="font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 transition-colors hover:decoration-brand-primary"
                  >
                    zuzana.misinova@lyceum.sk
                  </a>
                  <span className="text-brand-fg3"> · </span>
                  <a
                    href="tel:+421901788744"
                    className="font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 transition-colors hover:decoration-brand-primary"
                  >
                    +421 901 788 744
                  </a>
                </p>
                <div className="mt-auto pt-6">
                  <Link
                    href={LINK_KONTAKT}
                    className="btn-primary-site inline-flex w-full justify-center px-6 py-3.5 text-[15px] sm:w-auto sm:px-8"
                  >
                    Kontaktovať nás
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Jemný záver — bez ďalšej ťažkej karty */}
      <div className={`${CX} mt-10 max-w-lg text-center md:mt-12`}>
        <p className="font-heading m-0 text-[0.95rem] font-bold text-brand-fg1 md:text-[1.02rem]">
          Potrebuješ sa poradiť?
        </p>
        <p className="m-0 mt-2 text-[14px] leading-snug text-brand-fg2 md:text-[15px]">
          Ak riešite školné, splátky alebo štipendium, ozvite sa nám priamo.
        </p>
        <Link
          href={LINK_KONTAKT}
          className="btn-primary-site mt-4 inline-flex justify-center px-7 py-3 text-[15px]"
        >
          Kontaktovať nás
        </Link>
        <p className="m-0 mt-3 text-sm text-brand-fg3">
          <Link
            href={LINK_AKO}
            className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          >
            Ako sa dostať na Lýceum
          </Link>
        </p>
      </div>

      <div className={`${CX} pb-4 pt-10`}>
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
