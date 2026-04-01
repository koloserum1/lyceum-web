import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";
const LINK_CO = "/prijimacky/co-te-caka-na-prijimackach";

const HERO_ILLUSTRATION_SRC = "/prijimacky/hero-terminy-zapis.png";

const ctaPrimaryYellow =
  "inline-flex items-center justify-center rounded-full border-0 bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline shadow-[0_14px_36px_-12px_rgba(253,185,19,0.5)] transition-[transform,box-shadow,background-color] hover:bg-[#f5b010] hover:shadow-[0_18px_40px_-10px_rgba(253,185,19,0.48)] md:px-10 md:py-4 md:text-base";

const ctaSecondaryLavender =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/44 bg-[#ede7f8]/95 px-8 py-3.5 text-[15px] font-semibold text-brand-fg1 no-underline shadow-[0_8px_28px_-12px_rgba(125,100,175,0.22)] backdrop-blur-sm transition-[border-color,background-color,box-shadow] hover:border-brand-primary/58 hover:bg-[#f5f0fc] hover:shadow-[0_14px_38px_-12px_rgba(150,125,200,0.28)] md:px-10 md:py-4 md:text-base";

/** Jemný raster bodov — nízka intenzita, integrovaný do plochy */
const surfaceDotsSoft =
  "bg-[radial-gradient(circle_at_center,rgba(165,140,205,0.11)_1px,transparent_1px)] bg-[length:20px_20px]";

/** Veľmi jemná mriežka */
const surfaceGridFaint =
  "bg-[linear-gradient(rgba(155,130,190,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(155,130,190,0.07)_1px,transparent_1px)] bg-[length:32px_32px]";

export function TerminyVysledkyAZapisContent() {
  const terminy: {
    label: string;
    datum: ReactNode;
    step: string;
    layout: "wide" | "narrow" | "full" | "finale";
  }[] = [
    { step: "1", label: "Prihláška", datum: "do 20. 2. 2026", layout: "wide" },
    { step: "2", label: "Prijímačky", datum: "4. 5. 2026 a 11. 5. 2026", layout: "narrow" },
    { step: "3", label: "Výsledky", datum: "15. 5. 2026", layout: "full" },
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
      layout: "finale",
    },
  ];

  const prehladStudia = [
    { label: "Triedy", big: "3", detail: "triedy 1. ročníka" },
    { label: "Počet žiakov", big: "51", detail: "žiakov" },
    { label: "Odbor", big: "3918 M", detail: "Technické lýceum" },
  ] as const;

  const poVysledkochKroky = [
    {
      step: "1",
      title: "Kto dostane pozvánku",
      body: "Prvých 47 uchádzačov s najvyšším počtom bodov dostane pozvánku na zápis.",
    },
    {
      step: "2",
      title: "Zriaďovateľské miesta",
      body: "4 zriaďovateľské miesta",
    },
    {
      step: "3",
      title: "Potvrdenie prijatia",
      body: "Po potvrdení nástupu, uhradení zápisného a podpísaní zmluvy o štúdiu je uchádzač prijatý.",
    },
  ] as const;

  return (
    <main
      id="prijimacky-terminy-vysledky-a-zapis"
      className="relative isolate scroll-mt-24 bg-[#f9f7fb] pb-14 md:scroll-mt-28 md:pb-20"
    >
      {/* Hero — biely panel, kompozícia bez prekrytia informačného boxu cez obrázok */}
      <div className={`${CX} relative z-[1] pt-6 md:pt-8`}>
        <section
          className="relative overflow-hidden rounded-[1.5rem] border border-[#e4dcf0] bg-white shadow-[0_18px_48px_-28px_rgba(72,56,105,0.12)] md:rounded-[1.65rem]"
          aria-label="Úvod"
        >
          <div
            className={`pointer-events-none absolute inset-0 opacity-[0.35] ${surfaceGridFaint}`}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-24 w-24 border-l border-b border-[#e8e0f0] opacity-70 md:h-28 md:w-28"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 border-t border-r border-[#e8e0f0] opacity-70 md:h-24 md:w-24"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 gap-8 px-5 py-8 sm:px-7 sm:py-9 md:gap-10 md:px-9 md:py-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <nav
                className="mb-4 text-sm text-brand-fg3 md:mb-5"
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
                <span className="text-brand-fg2">Termíny, výsledky a zápis</span>
              </nav>

              <h1 className="font-heading m-0 text-[clamp(1.7rem,1.05rem+2.1vw,2.55rem)] font-bold leading-[1.08] tracking-tight text-[#342c44]">
                <span className="relative inline-block">
                  Termíny
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-[0.32em] rounded-sm bg-brand-primary/22"
                    aria-hidden
                  />
                </span>
                , výsledky{" "}
                <span className="relative inline-block text-[#3d3550]">
                  <span className="relative z-[1]">a zápis</span>
                  <span
                    className="absolute -bottom-1 left-[-0.08em] right-[-0.08em] -z-0 h-[0.38em] skew-x-[-2deg] rounded-sm bg-[#fdb913]/35"
                    aria-hidden
                  />
                </span>
              </h1>
              <p className="m-0 mt-4 max-w-xl text-[15px] leading-relaxed text-brand-fg2 sm:text-[16px] md:mt-5 md:text-[17px] md:leading-[1.6]">
                Harmonogram prijatia, kapacita a čo nasleduje po vyhlásení výsledkov — na jednom mieste.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={LINK_AKO} className={`${ctaPrimaryYellow} justify-center`}>
                  Ako sa dostať na Lýceum
                </Link>
                <Link href={LINK_CO} className={`${ctaSecondaryLavender} justify-center`}>
                  Čo ťa čaká na prijímačkách
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5 lg:pt-1">
              <div className="relative mx-auto w-full max-w-[15.5rem] sm:max-w-[17rem] lg:mx-0 lg:ml-auto lg:max-w-[16.5rem]">
                <div
                  className="pointer-events-none absolute -left-1 -top-1 right-3 h-px bg-gradient-to-r from-[#d4c8ea] to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -left-1 -top-1 bottom-4 w-px bg-gradient-to-b from-[#d4c8ea] to-transparent"
                  aria-hidden
                />
                <div className="relative ml-2 mt-2 overflow-hidden rounded-br-[1.75rem] rounded-tl-xl border border-[#e0d8ec] bg-[#f5f1fa] shadow-[0_12px_32px_-18px_rgba(65,52,92,0.14)]">
                  <div className="relative aspect-[5/4] w-full">
                    <Image
                      src={HERO_ILLUSTRATION_SRC}
                      alt="Ilustrácia školskej atmosféry a prijímacieho obdobia v jemných fialových a zlatých tónoch"
                      fill
                      className="object-cover object-[center_42%]"
                      sizes="(max-width: 1024px) 260px, 264px"
                      priority
                    />
                  </div>
                </div>
              </div>

              <aside className="mx-auto w-full max-w-[15.5rem] rounded-xl border border-[#e4dcf0] bg-[#faf8fc] px-4 py-3.5 shadow-[0_6px_20px_-12px_rgba(65,52,92,0.12)] sm:max-w-[17rem] lg:mx-0 lg:ml-auto lg:max-w-[16.5rem]">
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                  Zápis
                </p>
                <p className="font-heading m-0 mt-1 text-[1.1rem] font-bold tabular-nums text-[#342c44]">
                  25. 5. 2026
                </p>
                <p className="m-0 mt-1 border-t border-[#e8e2ee] pt-2 text-[13px] font-medium leading-snug text-brand-fg2">
                  Haanova 28
                </p>
              </aside>
            </div>
          </div>
        </section>
      </div>

      {/* Dôležité termíny — lila panel, dynamické šírky kariet */}
      <section
        className={`${CX} relative z-[1] mt-2 py-12 md:py-16 lg:py-[4.5rem]`}
        aria-labelledby="heading-terminy"
      >
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#dcd2eb] bg-gradient-to-b from-[#f3eef9] to-[#ebe4f4] px-4 py-10 shadow-[0_16px_44px_-24px_rgba(75,58,110,0.14)] sm:px-7 md:rounded-[1.65rem] md:px-9 md:py-12 lg:px-11">
          <div
            className={`pointer-events-none absolute inset-0 opacity-[0.4] ${surfaceDotsSoft}`}
            aria-hidden
          />

          <div className="relative mx-auto max-w-3xl text-center md:max-w-none md:text-left lg:mx-0 lg:max-w-[42rem]">
            <h2
              id="heading-terminy"
              className="font-heading m-0 text-[clamp(1.5rem,1.08rem+1.35vw,2.1rem)] font-bold leading-tight tracking-tight text-[#342c44]"
            >
              Dôležité termíny
            </h2>
          </div>

          <div className="relative mx-auto mt-10 max-w-lg md:mt-12 md:max-w-3xl lg:max-w-4xl">
            <div
              className="absolute left-[1.125rem] top-3 bottom-3 w-px bg-[#c4b2dc] md:left-[1.375rem]"
              aria-hidden
            />
            <ol className="relative m-0 flex list-none flex-col gap-0 p-0">
              {terminy.map((t, i) => {
                const isLast = i === terminy.length - 1;
                const widthCls =
                  t.layout === "wide"
                    ? "md:max-w-[100%] lg:max-w-[95%]"
                    : t.layout === "narrow"
                      ? "md:ml-8 md:max-w-[88%] lg:ml-12 lg:max-w-[82%]"
                      : t.layout === "full"
                        ? "md:max-w-[92%]"
                        : "md:max-w-[96%] lg:border-l-[3px] lg:border-[#fdb913]/55 lg:pl-5";

                const surfaceCls =
                  t.layout === "finale"
                    ? "border-[#e8dcc8] bg-gradient-to-br from-white to-[#fffdf8] shadow-[0_14px_40px_-20px_rgba(120,95,60,0.08)] ring-1 ring-[#f5ead0]/45"
                    : t.layout === "full"
                      ? "border-[#d8cce8] bg-white shadow-[0_12px_36px_-20px_rgba(75,58,110,0.1)]"
                      : i % 2 === 0
                        ? "border-[#e0d6ee] bg-white/90"
                        : "border-[#ddd4e8] bg-[#faf8fc]/95";

                return (
                  <li key={t.label} className="relative flex gap-0 pb-10 last:pb-0 md:gap-2 md:pb-12">
                    <div className="relative z-[1] flex w-[2.5rem] shrink-0 flex-col items-center md:w-[3.25rem]">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-bold tabular-nums shadow-sm ring-2 ring-white md:h-11 md:w-11 md:text-[16px] ${
                          t.layout === "finale"
                            ? "bg-[#fdb913] text-[#3a3228]"
                            : "bg-white text-brand-primary ring-1 ring-[#d4c8ea]"
                        }`}
                        aria-hidden
                      >
                        {t.step}
                      </span>
                      {!isLast ? (
                        <span
                          className="mt-2 block h-10 w-px bg-gradient-to-b from-[#c4b2dc] to-[#dcd0ec] md:mt-2.5 md:h-12"
                          aria-hidden
                        />
                      ) : null}
                    </div>

                    <div
                      className={`min-w-0 flex-1 rounded-[1.15rem] border px-5 py-5 md:rounded-[1.25rem] md:px-6 md:py-6 ${surfaceCls} ${widthCls}`}
                    >
                      <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-fg3 md:text-xs">
                        {t.label}
                      </p>
                      <div className="font-heading mt-2 text-[clamp(1.35rem,1.05rem+1.1vw,2rem)] font-bold leading-[1.15] tracking-tight text-[#342c44] md:mt-2.5 md:text-[clamp(1.45rem,1.1rem+1.2vw,2.15rem)]">
                        {t.datum}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Prehľad štúdia — tri typografické karty bez ikon */}
      <section
        className={`${CX} relative z-[1] py-12 md:py-16 lg:py-[4.5rem]`}
        aria-labelledby="heading-prehlad-studia"
      >
        <h2
          id="heading-prehlad-studia"
          className="font-heading m-0 text-[clamp(1.5rem,1.08rem+1.35vw,2.1rem)] font-bold leading-tight tracking-tight text-[#342c44]"
        >
          Prehľad štúdia
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-9 md:mt-10 md:grid-cols-3 md:gap-9 lg:gap-11">
          {prehladStudia.map((c) => (
            <div
              key={c.label}
              className="flex min-h-[12rem] flex-col rounded-[1.35rem] border border-[#dfd6eb] bg-white px-6 py-7 shadow-[0_10px_32px_-20px_rgba(65,52,92,0.1)] sm:rounded-[1.45rem] sm:px-7 sm:py-8 md:min-h-[12.5rem] lg:px-8 lg:py-9"
            >
              <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
                {c.label}
              </p>
              <p className="font-heading m-0 mt-5 text-[clamp(2.65rem,1.95rem+2.8vw,3.65rem)] font-bold tabular-nums leading-none tracking-tight text-[#3d3250] sm:mt-6">
                {c.big}
              </p>
              <p className="m-0 mt-auto border-t border-[#ece6f2] pt-4 text-[15px] font-medium leading-snug text-brand-fg2 md:text-[16px]">
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Po vyhlásení — proces, striedanie odsadenia, bez žltej výplne na každom kroku */}
      <section
        className={`${CX} relative z-[1] py-12 md:py-16 lg:py-[4.5rem]`}
        aria-labelledby="heading-po-vysledkoch"
      >
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#e2dce8] bg-[#fbf9fc] px-5 py-10 md:rounded-[1.65rem] md:px-9 md:py-12">
          <div
            className={`pointer-events-none absolute inset-0 opacity-[0.3] ${surfaceGridFaint}`}
            aria-hidden
          />

          <h2
            id="heading-po-vysledkoch"
            className="relative font-heading m-0 text-center text-[clamp(1.5rem,1.08rem+1.35vw,2.1rem)] font-bold leading-tight tracking-tight text-[#342c44] md:text-left"
          >
            Po vyhlásení výsledkov
          </h2>

          <div className="relative mx-auto mt-10 max-w-2xl md:mt-12">
            <div
              className="absolute left-[0.875rem] top-6 bottom-6 w-px bg-gradient-to-b from-[#c9b8dc] via-[#b8a4cf] to-[#d4c8e8] md:left-5"
              aria-hidden
            />

            <ol className="relative m-0 flex list-none flex-col gap-0 p-0">
              {poVysledkochKroky.map((k, idx) => {
                const stagger = idx === 1 ? "md:ml-10 lg:ml-14" : idx === 2 ? "md:ml-4 lg:ml-6" : "";
                return (
                  <li key={k.step} className={`relative flex gap-4 pb-12 last:pb-0 md:gap-6 ${stagger}`}>
                    <div className="relative z-[1] flex w-8 shrink-0 justify-center md:w-10">
                      <span
                        className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white text-[14px] font-bold tabular-nums text-[#5c4d72] shadow-[0_4px_14px_-6px_rgba(65,52,92,0.12)] md:h-10 md:w-10 md:text-[15px] ${
                          idx === 0 ? "border-[#fdb913]" : "border-[#d8cce8]"
                        }`}
                        aria-hidden
                      >
                        {k.step}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 border-l border-transparent pl-1 md:pl-0">
                      <div className="rounded-[1.1rem] border border-[#e6e0ec] bg-white px-5 py-5 shadow-[0_8px_28px_-16px_rgba(65,52,92,0.08)] md:rounded-[1.2rem] md:px-6 md:py-6">
                        <h3 className="font-heading m-0 text-[1.22rem] font-bold leading-snug text-[#342c44] md:text-[1.32rem]">
                          {k.title}
                        </h3>
                        <p className="m-0 mt-3.5 text-[15px] leading-[1.58] text-brand-fg2 md:mt-4 md:text-[16px] md:leading-[1.62]">
                          {k.body}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Záverečný CTA */}
      <div className={`${CX} relative z-[1] pb-4 pt-2`}>
        <section
          className="overflow-hidden rounded-[1.5rem] border border-[#e4dcf0] bg-gradient-to-br from-white via-[#faf8fc] to-[#f3ebfa] px-6 py-11 shadow-[0_18px_44px_-24px_rgba(72,56,105,0.12)] md:rounded-[1.65rem] md:px-12 md:py-14 lg:px-14 lg:py-16"
          aria-labelledby="heading-dalsi"
        >
          <div
            className={`pointer-events-none absolute inset-0 opacity-[0.28] ${surfaceDotsSoft}`}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2
              id="heading-dalsi"
              className="font-heading m-0 text-[clamp(1.32rem,1.02rem+1.1vw,1.9rem)] font-bold leading-tight text-[#342c44]"
            >
              Potrebuješ kontext k prijímačkám?
            </h2>
            <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[17px]">
              Celkový prehľad a dve cesty prijatia nájdeš na úvodnej stránke; formu skúšok popisujeme
              samostatne.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
              <Link href={LINK_AKO} className={`${ctaPrimaryYellow} justify-center`}>
                Ako sa dostať na Lýceum
              </Link>
              <Link href={LINK_CO} className={`${ctaSecondaryLavender} justify-center`}>
                Čo ťa čaká na prijímačkách
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className={`${CX} relative z-[1] pb-4 pt-10`}>
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
