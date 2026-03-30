import type { ReactNode } from "react";
import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";
const LINK_CO = "/prijimacky/co-te-caka-na-prijimackach";

const sectionGap = "py-16 md:py-20 lg:py-24";
const h2Class =
  "font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]";

export function TerminyVysledkyAZapisContent() {
  const terminy: { label: string; datum: ReactNode; step: string }[] = [
    { step: "1", label: "Prihláška", datum: "do 20. 2. 2026" },
    { step: "2", label: "Prijímačky", datum: "4. 5. 2026 a 11. 5. 2026" },
    { step: "3", label: "Výsledky", datum: "15. 5. 2026" },
    {
      step: "4",
      label: "Zápis",
      datum: (
        <>
          25. 5. 2026
          <span className="mt-2 block text-[0.82em] font-semibold leading-snug text-brand-fg2">
            Haanova 28
          </span>
        </>
      ),
    },
  ];

  return (
    <main
      id="prijimacky-terminy-vysledky-a-zapis"
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
          <span className="text-brand-fg2">Termíny, výsledky a zápis</span>
        </nav>
      </div>

      {/* 1. Hero */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-gradient-to-br from-white via-brand-bg2/50 to-[#fef9e8] px-6 py-14 ring-1 ring-black/[0.06] sm:px-10 sm:py-16 md:rounded-[28px] md:px-12 md:py-16 lg:px-16"
          aria-label="Úvod"
        >
          <div className="max-w-3xl">
            <h1 className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.8vw,3rem)] font-bold leading-[1.08] tracking-tight text-brand-fg1">
              Termíny, výsledky a zápis
            </h1>
            <p className="m-0 mt-6 max-w-2xl text-[15px] font-normal leading-relaxed text-brand-fg1/88 sm:text-[16px] md:mt-7 md:text-[17px] md:leading-[1.65]">
              Harmonogram prijatia, kapacita a čo nasleduje po vyhlásení výsledkov —
              na jednom mieste.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href={LINK_AKO}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Ako sa dostať na Lýceum
              </Link>
              <Link
                href={LINK_CO}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Čo ťa čaká na prijímačkách
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Dôležité termíny */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-terminy"
      >
        <h2 id="heading-terminy" className={`${h2Class} mb-12 md:mb-16`}>
          Dôležité termíny
        </h2>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="absolute bottom-8 left-[1.35rem] top-8 hidden w-px bg-gradient-to-b from-[#fdb913]/80 via-black/[0.12] to-[#fdb913]/40 md:block lg:left-1/2 lg:-ml-px"
            aria-hidden
          />
          <ol className="m-0 flex list-none flex-col gap-6 p-0 md:gap-0 lg:block lg:min-h-[28rem]">
            {terminy.map((t, i) => (
              <li
                key={t.label}
                className={`relative lg:mb-10 lg:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                }`}
              >
                <div className="flex gap-4 md:gap-5 lg:items-start">
                  <span
                    className="font-heading relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdb913] text-lg font-bold text-brand-fg1 shadow-md md:h-12 md:w-12 md:text-xl"
                    aria-hidden
                  >
                    {t.step}
                  </span>
                  <div className="min-w-0 flex-1 rounded-2xl bg-brand-fg1 px-5 py-6 text-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] md:px-7 md:py-7">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-white/65">
                      {t.label}
                    </p>
                    <div className="font-heading mt-3 text-[clamp(1.2rem,1rem+1.2vw,1.75rem)] font-bold leading-snug tracking-tight text-white md:text-[clamp(1.35rem,1.1rem+1.4vw,1.95rem)]">
                      {t.datum}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Kapacita */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-kapacita"
      >
        <h2 id="heading-kapacita" className={`${h2Class} mb-10 md:mb-12`}>
          Koľko miest otvárame
        </h2>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3 sm:gap-5">
          {[
            { title: "Triedy", text: "3 triedy 1. ročníka" },
            { title: "Počet žiakov", text: "51 žiakov" },
            { title: "Odbor", text: "3918 M Technické lýceum" },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-black/[0.07] bg-white px-5 py-7 text-center shadow-[0_12px_40px_-28px_rgba(0,0,0,0.15)] md:px-6 md:py-8"
            >
              <p className="m-0 text-xs font-semibold uppercase tracking-wide text-brand-fg3">
                {c.title}
              </p>
              <p className="font-heading m-0 mt-3 text-[clamp(1.05rem,0.92rem+0.55vw,1.25rem)] font-bold leading-snug text-brand-fg1">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Po výsledkoch */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-po-vysledkoch"
      >
        <h2 id="heading-po-vysledkoch" className={`${h2Class} mb-8 md:mb-10`}>
          Po vyhlásení výsledkov
        </h2>
        <div className="mx-auto grid max-w-3xl gap-4 md:gap-5">
          <div className="rounded-2xl border border-black/[0.07] bg-brand-bg2/80 px-5 py-5 md:px-7 md:py-6">
            <p className="m-0 text-[15px] font-medium leading-relaxed text-brand-fg1 md:text-[16px]">
              Prvých 47 uchádzačov s najvyšším počtom bodov dostane pozvánku na
              zápis.
            </p>
          </div>
          <div className="rounded-2xl border border-black/[0.07] bg-white px-5 py-5 ring-1 ring-black/[0.05] md:px-7 md:py-6">
            <p className="m-0 text-[15px] font-semibold leading-relaxed text-brand-fg1 md:text-[16px]">
              4 zriaďovateľské miesta
            </p>
          </div>
          <div className="rounded-2xl border border-black/[0.07] bg-white px-5 py-5 ring-1 ring-black/[0.05] md:px-7 md:py-6">
            <p className="m-0 text-[15px] leading-relaxed text-brand-fg1 md:text-[16px]">
              Po potvrdení nástupu, uhradení zápisného a podpísaní zmluvy o štúdiu
              je uchádzač prijatý.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Záverečný CTA */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-gradient-to-br from-brand-primary/18 via-white to-brand-bg2 px-6 py-12 ring-1 ring-black/[0.08] md:rounded-[28px] md:px-12 md:py-16 lg:px-16 lg:py-20"
          aria-labelledby="heading-dalsi"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="heading-dalsi"
              className="font-heading m-0 text-[clamp(1.3rem,1rem+1.3vw,1.8rem)] font-bold leading-tight text-brand-fg1"
            >
              Potrebuješ kontext k prijímačkám?
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg1/90 md:mt-5 md:text-[17px]">
              Celkový prehľad a dve cesty prijatia nájdeš na úvodnej stránke;
              formu skúšok popisujeme samostatne.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
              <Link
                href={LINK_AKO}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Ako sa dostať na Lýceum
              </Link>
              <Link
                href={LINK_CO}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
              >
                Čo ťa čaká na prijímačkách
              </Link>
            </div>
          </div>
        </section>
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
