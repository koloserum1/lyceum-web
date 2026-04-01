import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";
const LINK_KONTAKT = "/#kontakt";

export function SkolneAStipendiaContent() {
  return (
    <main
      id="prijimacky-skolne-a-stipendia"
      className="scroll-mt-24 bg-[#f7f5fa] pb-12 md:scroll-mt-28 md:pb-16"
    >
      {/* 1. Úvod — ľahký, CTA nenápadné */}
      <div className={`${CX} pt-5 md:pt-7`}>
        <nav className="mb-6 text-sm text-brand-fg3 md:mb-7" aria-label="Oblasť stránky">
          <Link
            href="/#prijimacky"
            className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          >
            Prijímačky
          </Link>
          <span className="mx-2 text-brand-fg3" aria-hidden>
            /
          </span>
          <span className="text-brand-fg2">Školné a štipendiá</span>
        </nav>

        <header className="max-w-2xl border-b border-[#e8e2ee] pb-8 md:pb-9" aria-label="Úvod">
          <h1 className="font-heading m-0 text-[clamp(1.75rem,1.1rem+2.2vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-[#342c44]">
            Školné a štipendiá
          </h1>
          <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg2 sm:text-[16px] md:mt-5 md:text-[17px] md:leading-[1.6]">
            Koľko stojí štúdium na Lýceu a aké možnosti podpory existujú, keď je to
            finančne náročné.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 md:mt-6">
            <Link
              href={LINK_KONTAKT}
              className="text-[14px] font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary md:text-[15px]"
            >
              Kontaktovať nás
            </Link>
            <span className="hidden text-brand-fg4 sm:inline" aria-hidden>
              ·
            </span>
            <Link
              href={LINK_AKO}
              className="text-[14px] font-medium text-brand-fg2 underline decoration-brand-fg3/40 underline-offset-2 hover:text-brand-fg1 hover:decoration-brand-primary/35 md:text-[15px]"
            >
              Ako sa dostať na Lýceum
            </Link>
          </div>
        </header>
      </div>

      {/* 2. Ceny — hlavný vizuálny ťažiskový blok */}
      <div className={`${CX} mt-9 md:mt-11 lg:mt-12`}>
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

          <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 md:grid-cols-2 md:gap-5 lg:gap-6">
            <div className="rounded-[1.25rem] bg-white px-6 py-8 shadow-[0_20px_50px_-28px_rgba(65,52,92,0.18)] sm:rounded-[1.35rem] sm:px-8 sm:py-9 md:py-10 lg:px-10 lg:py-11">
              <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                Zápisné
              </p>
              <p className="font-heading m-0 mt-3 text-[clamp(2.5rem,1.6rem+4vw,3.75rem)] font-bold tabular-nums leading-none tracking-tight text-[#342c44] md:mt-4">
                700 €
              </p>
              <p className="m-0 mt-3 text-[15px] text-brand-fg2 md:text-[16px]">noví študenti</p>
            </div>
            <div className="relative rounded-[1.25rem] bg-white px-6 py-8 shadow-[0_20px_50px_-28px_rgba(65,52,92,0.18)] ring-1 ring-[#fdb913]/35 sm:rounded-[1.35rem] sm:px-8 sm:py-9 md:py-10 lg:px-10 lg:py-11">
              <div
                className="pointer-events-none absolute left-0 top-6 bottom-6 w-1 rounded-full bg-[#fdb913]/75 sm:top-8 sm:bottom-8"
                aria-hidden
              />
              <p className="m-0 pl-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-fg3 sm:pl-2">
                Školné
              </p>
              <p className="font-heading m-0 mt-3 pl-1 text-[clamp(2.5rem,1.6rem+4vw,3.75rem)] font-bold tabular-nums leading-none tracking-tight text-[#342c44] sm:pl-2 md:mt-4">
                3 550 €
              </p>
              <p className="m-0 mt-3 pl-1 text-[15px] text-brand-fg2 sm:pl-2 md:text-[16px]">
                / školský rok
              </p>
            </div>
          </div>

          <p className="m-0 mt-5 max-w-2xl text-[14px] leading-relaxed text-brand-fg3 md:mt-6 md:text-[15px]">
            V odôvodnených prípadoch je možné dohodnúť individuálny splátkový
            kalendár.
          </p>
        </section>
      </div>

      {/* 3. Praktické informácie — druhoradé, kompaktné, bez ťažkých rámov */}
      <div className={`${CX} mt-10 md:mt-12 lg:mt-14`}>
        <div className="max-w-4xl rounded-[1.25rem] bg-[#faf8fc] px-5 py-7 sm:px-7 sm:py-8 md:rounded-[1.35rem] md:px-8 md:py-9 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            <div aria-labelledby="heading-nepokryva">
              <h2
                id="heading-nepokryva"
                className="font-heading m-0 text-[0.95rem] font-bold leading-tight text-[#342c44] md:text-[1.02rem]"
              >
                Čo školné nepokrýva
              </h2>
              <ul className="m-0 mt-3 list-none space-y-2 p-0">
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
              <p className="m-0 mt-4 text-[12px] leading-relaxed text-brand-fg3 md:text-[13px]">
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
              <dl className="m-0 mt-3 space-y-4">
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

      {/* 4. Štipendiá — výrazný, oddelený blok, bez vnorených kariet */}
      <div className={`${CX} mt-10 md:mt-12 lg:mt-14`}>
        <section
          className="max-w-4xl overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#ebe4f4] via-[#f2ebf8] to-[#e8dff5] md:rounded-[1.45rem]"
          aria-labelledby="heading-stipendia"
        >
          <div className="px-5 py-7 sm:px-8 sm:py-8 md:px-10 md:py-9">
            <h2
              id="heading-stipendia"
              className="font-heading m-0 text-[clamp(1.28rem,1.05rem+1vw,1.75rem)] font-bold leading-tight text-[#342c44]"
            >
              Keď je to finančne náročné
            </h2>
            <p className="m-0 mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-fg2 md:mt-4 md:text-[16px] md:leading-[1.58]">
              Máme štipendijný fond, aby škola ostala otvorená aj pre rodiny v
              náročnejšej situácii.
            </p>

            <div className="mt-7 space-y-0 border-t border-[#d4c8e0]/45">
              <div className="border-b border-[#d4c8e0]/45 py-5 md:py-6">
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                  Podpora školného
                </p>
                <p className="font-heading m-0 mt-2 text-[clamp(1.2rem,1.05rem+0.9vw,1.5rem)] font-bold leading-snug text-[#342c44] md:mt-2.5">
                  Až 3 štipendiá do výšky 70 % školného
                </p>
              </div>
              <div className="py-5 md:py-6">
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                  Laptop
                </p>
                <p className="m-0 mt-2 text-[15px] font-semibold leading-snug text-brand-fg1 md:text-[16px]">
                  Možnosť financovať študentský laptop (od 2. ročníka)
                </p>
              </div>
            </div>

            <p className="m-0 mt-2 text-center text-[11px] text-brand-fg3 md:text-[12px]">
              Vďaka Villum Foundation (2025/2026).
            </p>
          </div>
        </section>
      </div>

      {/* 5. Záver: oprávnenosť → termíny → kontakt — jeden plynulý blok */}
      <div className={`${CX} mt-10 md:mt-12 lg:mt-14`}>
        <section
          className="max-w-4xl overflow-hidden rounded-[1.25rem] bg-white shadow-[0_14px_44px_-26px_rgba(65,52,92,0.12)] md:rounded-[1.35rem]"
          id="kontakt-skolne"
          aria-labelledby="heading-kto"
        >
          <div className="px-5 py-6 sm:px-7 md:px-9 md:py-7">
            <h2
              id="heading-kto"
              className="font-heading m-0 text-[clamp(1.15rem,1.02rem+0.8vw,1.4rem)] font-bold leading-tight text-[#342c44]"
            >
              Kto môže požiadať o štipendium
            </h2>
            <ul className="m-0 mt-3 list-none space-y-2 p-0 text-[14px] leading-relaxed text-brand-fg1 md:text-[15px]">
              <li className="border-l-2 border-[#d4c8ea] pl-3">motivovaný/á a talentovaný/á</li>
              <li className="border-l-2 border-[#d4c8ea] pl-3">z viacpočetnej alebo neúplnej rodiny</li>
              <li className="border-l-2 border-[#d4c8ea] pl-3">
                alebo žije v rodine so skromnejšími finančnými pomermi
              </li>
            </ul>
            <p className="m-0 mt-4 text-[13px] leading-relaxed text-brand-fg2 md:text-[14px]">
              Rozhoduje kombinácia situácie rodiny a toho, ako uchádzač zvládne
              prijímací proces.
            </p>
          </div>

          <div className="border-t border-[#ece6f2] bg-[#fefbf3] px-5 py-6 sm:px-7 md:px-9 md:py-7">
            <h3
              id="heading-kedy"
              className="font-heading m-0 text-[clamp(1.05rem,0.98rem+0.45vw,1.2rem)] font-bold leading-tight text-[#342c44]"
            >
              Kedy a kam sa ozvať
            </h3>
            <p className="m-0 mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
              Termíny
            </p>
            <ul className="m-0 mt-3 list-none space-y-2.5 p-0 text-[14px] leading-snug text-brand-fg1 md:text-[15px]">
              <li>
                <span className="font-semibold text-[#342c44]">Uchádzači:</span>{" "}
                žiadosť spolu s prihláškou
              </li>
              <li>
                <span className="font-semibold text-[#342c44]">Aktuálni študenti:</span>{" "}
                do 15. 6.
              </li>
            </ul>
          </div>

          <div className="border-t border-[#e8dcc8] bg-gradient-to-br from-[#fffdf8] to-[#faf8fc] px-5 py-7 sm:px-7 md:px-9 md:py-8">
            <h3 className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
              Kontakt
            </h3>
            <p className="font-heading m-0 mt-2 text-xl font-bold text-[#342c44] md:text-2xl">
              Zuzana Mišinová
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="mailto:zuzana.misinova@lyceum.sk"
                className="inline-flex w-fit max-w-full items-center rounded-lg border border-[#e4dcf0] bg-white px-3.5 py-2.5 text-[14px] font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:border-brand-primary/40 hover:bg-white md:text-[15px]"
              >
                zuzana.misinova@lyceum.sk
              </a>
              <a
                href="tel:+421901788744"
                className="inline-flex w-fit items-center rounded-lg border border-[#e4dcf0] bg-white px-3.5 py-2.5 text-[14px] font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:border-brand-primary/40 hover:bg-white md:text-[15px]"
              >
                +421 901 788 744
              </a>
            </div>
            <Link
              href={LINK_KONTAKT}
              className="btn-primary-site mt-5 inline-flex w-full justify-center px-6 py-3.5 text-[15px] sm:w-auto sm:px-8"
            >
              Kontaktovať nás
            </Link>
          </div>
        </section>
      </div>

      {/* Jemný záver — bez ďalšej ťažkej karty */}
      <div className={`${CX} mt-10 max-w-lg md:mt-12`}>
        <p className="font-heading m-0 text-[0.95rem] font-bold text-[#342c44] md:text-[1.02rem]">
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
