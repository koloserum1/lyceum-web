import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_DETAIL = "/prijimacky/detail-prijimaciek";
const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";

const sectionGap = "py-16 md:py-20 lg:py-24";
const h2Class =
  "font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]";

export function LycejnaVyzvaContent() {
  return (
    <main
      id="prijimacky-lycejna-vyzva"
      className="scroll-mt-24 bg-brand-bg2 pb-16 md:scroll-mt-28 md:pb-24"
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
          <span className="text-brand-fg2">Lýcejná výzva</span>
        </nav>
      </div>

      {/* 1. Hero */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-white px-6 py-14 ring-1 ring-black/[0.06] sm:px-10 sm:py-16 md:rounded-[28px] md:px-12 md:py-16 lg:px-16"
          aria-label="Úvod"
        >
          <div className="relative max-w-3xl">
            <h1 className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.8vw,3rem)] font-bold leading-[1.08] tracking-tight text-brand-fg1">
              Lýcejná výzva
            </h1>
            <p className="m-0 mt-6 max-w-2xl text-[15px] font-normal leading-relaxed text-brand-fg1/88 sm:text-[16px] md:mt-7 md:text-[17px] md:leading-[1.65]">
              Alternatívna cesta prijatia pre tých, ktorí chcú ukázať svoj prístup,
              premýšľanie a silné stránky aj mimo klasických prijímačiek.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href={LINK_DETAIL}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Pozrieť detail prijímačiek
              </Link>
              <Link
                href={LINK_AKO}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Späť na Ako sa dostať na Lýceum
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Kto sa môže zapojiť */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-kto"
      >
        <h2 id="heading-kto" className={`${h2Class} mb-6 md:mb-8`}>
          Kto sa môže zapojiť
        </h2>
        <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-8 text-center ring-1 ring-black/[0.07] md:px-10 md:py-9">
          <p className="m-0 text-[15px] leading-relaxed text-brand-fg1 md:text-[17px]">
            Do Lýcejnej výzvy sa môže zapojiť každý, kto si podá prihlášku.
          </p>
        </div>
      </section>

      {/* 3. Ako to funguje */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-ako"
      >
        <h2 id="heading-ako" className={`${h2Class} mb-10 md:mb-14`}>
          Ako to funguje
        </h2>
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="flex flex-col rounded-[24px] border border-[#fdb913]/40 bg-white p-6 shadow-[0_16px_48px_-28px_rgba(0,0,0,0.12)] md:p-8 lg:p-9">
            <h3 className="font-heading m-0 text-[clamp(1.15rem,1rem+0.8vw,1.4rem)] font-bold text-brand-fg1">
              Domáca časť
            </h3>
            <p className="m-0 mt-4 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
              Domáca časť má 3 kolá a treba spraviť 2 z 3. Úlohy sa posielajú
              mailom a odpovede sa odovzdávajú cez Google Forms.
            </p>
          </article>
          <article className="flex flex-col rounded-[24px] border border-brand-primary/35 bg-white p-6 shadow-[0_16px_48px_-28px_rgba(0,0,0,0.12)] md:p-8 lg:p-9">
            <h3 className="font-heading m-0 text-[clamp(1.15rem,1rem+0.8vw,1.4rem)] font-bold text-brand-fg1">
              Školská časť
            </h3>
            <p className="m-0 mt-4 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
              Školská časť prebieha na konci marca 2026. Zahŕňa test, rozhovor a
              tímovú aktivitu.
            </p>
          </article>
        </div>
      </section>

      {/* 4. Domáca časť – kolá */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-domaca"
      >
        <h2 id="heading-domaca" className={`${h2Class} mb-10 md:mb-12`}>
          Domáca časť: kolá a termíny
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {[
              {
                title: "1. kolo",
                lines: [
                  "Zadania od 23. 11. 2025",
                  "Odovzdanie do 14. 12. 2025",
                ],
              },
              {
                title: "2. kolo",
                lines: [
                  "Zadania po uzavretí prihlášok",
                  "Odovzdanie do 28. 2. 2026",
                ],
              },
              {
                title: "3. kolo",
                lines: ["Upresníme"],
              },
            ].map((box) => (
              <div
                key={box.title}
                className="flex flex-col rounded-2xl bg-brand-bg2/90 px-5 py-6 ring-1 ring-black/[0.08] md:px-6 md:py-7"
              >
                <p className="font-heading m-0 text-sm font-bold uppercase tracking-wide text-brand-fg3">
                  {box.title}
                </p>
                <div className="mt-3 space-y-1.5 text-[15px] font-semibold leading-snug text-brand-fg1 md:text-[16px]">
                  {box.lines.map((line) => (
                    <p key={line} className="m-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="m-0 mt-8 text-center text-[15px] font-semibold text-brand-fg1 md:mt-10">
            Treba spraviť 2 z 3 kôl.
          </p>
        </div>
      </section>

      {/* 5. Školská časť */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-skolska"
      >
        <h2 id="heading-skolska" className={`${h2Class} mb-10 md:mb-12`}>
          Školská časť
        </h2>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3 sm:gap-5">
          <div className="rounded-2xl border border-black/[0.07] bg-white px-5 py-6 text-center md:py-7">
            <p className="m-0 text-xs font-semibold uppercase tracking-wide text-brand-fg3">
              Test
            </p>
            <p className="font-heading m-0 mt-2 text-[clamp(1.5rem,1.2rem+1.5vw,2rem)] font-bold text-brand-fg1">
              Aspoň 60 %
            </p>
          </div>
          <div className="rounded-2xl border border-black/[0.07] bg-white px-5 py-6 text-center md:py-7">
            <p className="m-0 text-xs font-semibold uppercase tracking-wide text-brand-fg3">
              Rozhovor
            </p>
            <p className="font-heading m-0 mt-2 text-[clamp(1.5rem,1.2rem+1.5vw,2rem)] font-bold text-brand-fg1">
              Aspoň 40 %
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-black/[0.15] bg-brand-bg2/50 px-5 py-6 text-center md:py-7">
            <p className="m-0 text-xs font-semibold uppercase tracking-wide text-brand-fg3">
              Tímová aktivita
            </p>
            <p className="m-0 mt-2 text-[15px] font-semibold leading-snug text-brand-fg2 md:text-base">
              Nehodnotená
            </p>
          </div>
        </div>
        <p className="mx-auto m-0 mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-10 md:text-base">
          Školská časť prebieha na konci marca 2026. Presný dátum upresníme.
        </p>
      </section>

      {/* 6. Výsledok */}
      <section className={CX} aria-labelledby="heading-vysledok">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-8 ring-1 ring-black/[0.07] md:px-10 md:py-9">
          <h2
            id="heading-vysledok"
            className="font-heading m-0 text-center text-[clamp(1.2rem,1rem+1vw,1.5rem)] font-bold text-brand-fg1"
          >
            Kedy sa dozvieš výsledok
          </h2>
          <p className="m-0 mt-4 text-center text-[15px] leading-relaxed text-brand-fg1 md:mt-5 md:text-base">
            Zoznam úspešných riešiteľov bude zverejnený začiatkom apríla 2026.
          </p>
        </div>
      </section>

      {/* 7. Navigácia na druhú cestu */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-klasicka"
      >
        <h2 id="heading-klasicka" className={`${h2Class} mb-6 md:mb-8`}>
          Radšej chceš ísť klasickou cestou?
        </h2>
        <div className="mx-auto max-w-xl rounded-2xl border border-black/[0.07] bg-white px-6 py-8 text-center md:px-10 md:py-10">
          <p className="m-0 text-[15px] leading-relaxed text-brand-fg2 md:text-base">
            Pozri si detail prijímačiek a porovnaj si, ktorá cesta ti dáva väčší
            zmysel.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href={LINK_DETAIL}
              className="btn-primary-site justify-center px-8 py-3.5 text-[15px]"
            >
              Pozrieť detail prijímačiek
            </Link>
            <Link
              href={LINK_AKO}
              className="btn-secondary-site justify-center px-8 py-3.5 text-[15px]"
            >
              Späť na Ako sa dostať na Lýceum
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Spodný CTA */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-white px-6 py-12 ring-1 ring-black/[0.08] md:rounded-[28px] md:px-12 md:py-16 lg:px-16 lg:py-20"
          aria-labelledby="heading-zaver"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="heading-zaver"
              className="font-heading m-0 text-[clamp(1.35rem,1rem+1.4vw,1.85rem)] font-bold leading-tight text-brand-fg1"
            >
              Vyber si cestu, ktorá ti sedí viac
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg1/90 md:mt-5 md:text-[17px]">
              Lýcejná výzva je jedna z možností, ako sa dostať na Lýceum. Ak si
              chceš porovnať obe cesty, pozri si aj detail prijímačiek.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
              <Link
                href={LINK_DETAIL}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Pozrieť detail prijímačiek
              </Link>
              <Link
                href={LINK_AKO}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Späť na Ako sa dostať na Lýceum
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
