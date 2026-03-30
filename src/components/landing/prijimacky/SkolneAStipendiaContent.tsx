import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";
const LINK_KONTAKT = "/#kontakt";

const sectionGap = "py-16 md:py-20 lg:py-24";
const h2Class =
  "font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]";

export function SkolneAStipendiaContent() {
  return (
    <main
      id="prijimacky-skolne-a-stipendia"
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
          <span className="text-brand-fg2">Školné a štipendiá</span>
        </nav>
      </div>

      {/* 1. Hero */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-gradient-to-br from-[#f8f6fc] via-white to-[#fef9e8] px-6 py-14 ring-1 ring-black/[0.06] sm:px-10 sm:py-16 md:rounded-[28px] md:px-12 md:py-16 lg:px-16"
          aria-label="Úvod"
        >
          <div className="max-w-3xl">
            <h1 className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.8vw,3rem)] font-bold leading-[1.08] tracking-tight text-brand-fg1">
              Školné a štipendiá
            </h1>
            <p className="m-0 mt-6 max-w-2xl text-[15px] font-normal leading-relaxed text-brand-fg1/88 sm:text-[16px] md:mt-7 md:text-[17px] md:leading-[1.65]">
              Koľko stojí štúdium na Lýceu a aké možnosti podpory existujú, keď je to
              finančne náročné.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href={LINK_KONTAKT}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Kontaktovať nás
              </Link>
              <Link
                href={LINK_AKO}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Ako sa dostať na Lýceum
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Koľko stojí štúdium */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-cena"
      >
        <p className="m-0 mb-3 text-center text-[13px] font-medium uppercase tracking-wide text-brand-fg3 md:text-sm">
          Školský rok 2025/2026
        </p>
        <h2 id="heading-cena" className={`${h2Class} mb-10 md:mb-14`}>
          Koľko stojí štúdium
        </h2>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-2xl bg-brand-fg1 px-6 py-8 text-center text-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] md:py-10">
            <p className="m-0 text-xs font-semibold uppercase tracking-wide text-white/70">
              Zápisné
            </p>
            <p className="font-heading m-0 mt-3 text-[clamp(2rem,1.5rem+2.5vw,2.75rem)] font-bold leading-none">
              700 €
            </p>
            <p className="m-0 mt-2 text-sm text-white/85">noví študenti</p>
          </div>
          <div className="rounded-2xl border-2 border-[#fdb913]/70 bg-white px-6 py-8 text-center shadow-[0_16px_48px_-28px_rgba(0,0,0,0.12)] md:py-10">
            <p className="m-0 text-xs font-semibold uppercase tracking-wide text-brand-fg3">
              Školné
            </p>
            <p className="font-heading m-0 mt-3 text-[clamp(2rem,1.5rem+2.5vw,2.75rem)] font-bold leading-none text-brand-fg1">
              3 550 €
            </p>
            <p className="m-0 mt-2 text-sm text-brand-fg2">/ školský rok</p>
          </div>
        </div>
        <p className="mx-auto m-0 mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-10 md:text-base">
          V odôvodnených prípadoch je možné dohodnúť individuálny splátkový
          kalendár.
        </p>
      </section>

      {/* 3. Čo školné nepokrýva */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-nepokryva"
      >
        <h2 id="heading-nepokryva" className={`${h2Class} mb-8 md:mb-10`}>
          Čo školné nepokrýva
        </h2>
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2 sm:gap-4">
          {[
            "stravu",
            "výlety",
            "teambuildingy",
            "počítačové vybavenie (1 notebook na študenta)",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-brand-bg2/90 px-4 py-3.5 ring-1 ring-black/[0.06] md:px-5 md:py-4"
            >
              <span className="font-bold text-[#c9a010]" aria-hidden>
                ✓
              </span>
              <span className="text-[15px] font-medium text-brand-fg1">{item}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto m-0 mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-brand-fg3 md:mt-10 md:text-sm">
          Výška príspevku sa môže medziročne upravovať približne podľa inflácie.
        </p>
      </section>

      {/* 4. Ako sa platí */}
      <section className={CX} aria-labelledby="heading-platba">
        <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-black/[0.15] bg-white px-6 py-8 md:px-8 md:py-9">
          <h2
            id="heading-platba"
            className="font-heading m-0 text-[clamp(1.1rem,1rem+0.5vw,1.35rem)] font-bold text-brand-fg1"
          >
            Ako sa platí
          </h2>
          <p className="m-0 mt-4 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
            <span className="font-semibold text-brand-fg1">IBAN:</span>{" "}
            <span className="font-mono text-[13px] tracking-tight text-brand-fg1 sm:text-sm">
              SK07 1100 0000 0029 4912 9790
            </span>{" "}
            <span className="text-brand-fg3">(Tatra banka)</span>
          </p>
          <p className="m-0 mt-4 text-[14px] font-medium text-brand-fg1 md:text-[15px]">
            Pri platbe uveď:
          </p>
          <ul className="m-0 mt-2 list-none space-y-2 p-0 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
            <li className="flex gap-2">
              <span className="text-brand-fg3" aria-hidden>
                •
              </span>
              variabilný symbol (posielame mailom)
            </li>
            <li className="flex gap-2">
              <span className="text-brand-fg3" aria-hidden>
                •
              </span>
              meno a priezvisko dieťaťa (účel platby)
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Štipendiá */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-stipendia"
      >
        <div className="mx-auto max-w-3xl rounded-[24px] bg-gradient-to-br from-brand-primary/20 via-white to-[#fef9e8] px-6 py-10 ring-1 ring-black/[0.08] md:px-10 md:py-12">
          <h2
            id="heading-stipendia"
            className="font-heading m-0 text-center text-[clamp(1.35rem,1.1rem+1.2vw,1.85rem)] font-bold leading-tight text-brand-fg1"
          >
            Keď je to finančne náročné
          </h2>
          <p className="m-0 mt-5 text-center text-[15px] leading-relaxed text-brand-fg1 md:mt-6 md:text-[17px]">
            Máme štipendijný fond, aby škola ostala otvorená aj pre rodiny v
            náročnejšej situácii.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="rounded-2xl bg-white/95 px-5 py-6 shadow-sm ring-1 ring-black/[0.06] md:px-6 md:py-7">
              <h3 className="font-heading m-0 text-base font-bold text-brand-fg1 md:text-lg">
                Podpora školného
              </h3>
              <p className="m-0 mt-3 text-[15px] font-semibold leading-snug text-brand-fg1">
                Až 3 štipendiá do výšky 70 % školného
              </p>
            </div>
            <div className="rounded-2xl bg-white/95 px-5 py-6 shadow-sm ring-1 ring-black/[0.06] md:px-6 md:py-7">
              <h3 className="font-heading m-0 text-base font-bold text-brand-fg1 md:text-lg">
                Laptop
              </h3>
              <p className="m-0 mt-3 text-[15px] font-semibold leading-snug text-brand-fg1">
                Možnosť financovať študentský laptop (od 2. ročníka)
              </p>
            </div>
          </div>
          <p className="m-0 mt-6 text-center text-[13px] text-brand-fg3 md:text-sm">
            Vďaka Villum Foundation (2025/2026).
          </p>
        </div>
      </section>

      {/* 6. Kto môže požiadať */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-kto"
      >
        <h2 id="heading-kto" className={`${h2Class} mb-8 md:mb-10`}>
          Kto môže požiadať o štipendium
        </h2>
        <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-8 ring-1 ring-black/[0.07] md:px-10 md:py-9">
          <ul className="m-0 list-none space-y-3 p-0 text-[15px] leading-relaxed text-brand-fg1 md:text-base">
            <li className="flex gap-3">
              <span className="font-bold text-[#c9a010]" aria-hidden>
                •
              </span>
              <span>motivovaný/á a talentovaný/á</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#c9a010]" aria-hidden>
                •
              </span>
              <span>z viacpočetnej alebo neúplnej rodiny</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#c9a010]" aria-hidden>
                •
              </span>
              <span>alebo žije v rodine so skromnejšími finančnými pomermi</span>
            </li>
          </ul>
          <p className="m-0 mt-6 border-t border-black/[0.06] pt-6 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
            Rozhoduje kombinácia situácie rodiny a toho, ako uchádzač zvládne
            prijímací proces.
          </p>
        </div>
      </section>

      {/* 7. Termíny a kontakt */}
      <section
        className={CX}
        id="kontakt-skolne"
        aria-labelledby="heading-kedy"
      >
        <div className="mx-auto max-w-2xl rounded-2xl bg-brand-bg2/80 px-6 py-9 ring-1 ring-black/[0.08] md:px-10 md:py-10">
          <h2
            id="heading-kedy"
            className="font-heading m-0 text-center text-[clamp(1.2rem,1rem+0.8vw,1.5rem)] font-bold text-brand-fg1"
          >
            Kedy a kam sa ozvať
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="font-heading m-0 text-sm font-bold uppercase tracking-wide text-brand-fg3">
                Termíny
              </h3>
              <ul className="m-0 mt-3 list-none space-y-2 p-0 text-[14px] leading-relaxed text-brand-fg1 md:text-[15px]">
                <li>
                  <span className="font-medium">Uchádzači:</span> žiadosť spolu s
                  prihláškou
                </li>
                <li>
                  <span className="font-medium">Aktuálni študenti:</span> do 15. 6.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading m-0 text-sm font-bold uppercase tracking-wide text-brand-fg3">
                Kontakt
              </h3>
              <p className="m-0 mt-3 text-[15px] font-semibold text-brand-fg1">
                Zuzana Mišinová
              </p>
              <p className="m-0 mt-1">
                <a
                  href="mailto:zuzana.misinova@lyceum.sk"
                  className="text-[15px] font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
                >
                  zuzana.misinova@lyceum.sk
                </a>
              </p>
              <p className="m-0 mt-1">
                <a
                  href="tel:+421901788744"
                  className="text-[15px] font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
                >
                  +421 901 788 744
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href={LINK_KONTAKT}
              className="btn-primary-site justify-center px-10 py-3.5 text-[15px]"
            >
              Kontaktovať nás
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Spodný CTA */}
      <div className={`${CX} ${sectionGap}`}>
        <section
          className="rounded-[24px] bg-gradient-to-br from-white via-brand-bg2/50 to-brand-primary/12 px-6 py-12 ring-1 ring-black/[0.08] md:rounded-[28px] md:px-12 md:py-16 lg:px-16 lg:py-16"
          aria-labelledby="heading-poradit"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="heading-poradit"
              className="font-heading m-0 text-[clamp(1.25rem,1rem+1.2vw,1.75rem)] font-bold text-brand-fg1"
            >
              Potrebuješ sa poradiť?
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg1/90 md:mt-5 md:text-[17px]">
              Ak riešite školné, splátky alebo štipendium, ozvite sa nám priamo.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
              <Link
                href={LINK_KONTAKT}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Kontaktovať nás
              </Link>
              <Link
                href={LINK_AKO}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Ako sa dostať na Lýceum
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className={`${CX} pb-4`}>
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
