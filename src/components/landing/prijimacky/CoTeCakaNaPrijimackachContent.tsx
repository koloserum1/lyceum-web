import Link from "next/link";
import { LINK_TERMINY_VYSLEDKY_ZAPIS } from "@/data/prijimacky-nav";
import chipMotion from "./coTeCakaChips.module.css";
import atmosphere from "./coTeCakaAtmosphere.module.css";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_ULOHY = "/prijimacky/vyskusaj-si-ulohy";
const LINK_TERMINY = LINK_TERMINY_VYSLEDKY_ZAPIS;
const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";

const ctaPrimaryYellow =
  "inline-flex items-center justify-center rounded-full border-0 bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline shadow-[0_14px_36px_-12px_rgba(253,185,19,0.5)] transition-[transform,box-shadow,background-color] hover:bg-[#f5b010] hover:shadow-[0_18px_40px_-10px_rgba(253,185,19,0.48)] md:px-10 md:py-4 md:text-base";

/** Sekundárne CTA v hero — menšie a jemnejšie ako primárne. */
const pillSecondaryHero =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/38 bg-white/88 px-5 py-2.5 text-[13px] font-semibold text-brand-fg1 no-underline shadow-[0_10px_28px_-12px_rgba(185,160,224,0.32)] backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] hover:border-brand-primary/55 hover:bg-white hover:shadow-[0_14px_34px_-10px_rgba(185,160,224,0.36)] md:px-6 md:py-3 md:text-[14px]";

const pillSecondary =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/40 bg-white/85 px-5 py-2.5 text-[14px] font-semibold text-brand-fg1 no-underline shadow-[0_8px_28px_-14px_rgba(185,160,224,0.35)] backdrop-blur-md transition-[border-color,background-color,box-shadow] hover:border-brand-primary/55 hover:bg-white hover:shadow-[0_12px_32px_-12px_rgba(185,160,224,0.38)] md:px-6 md:text-[15px]";

/** Veľké plávajúce bubliny — jednotný „vzdušný“ základ. */
const heroBubbleBase =
  "inline-flex max-w-full items-center justify-center rounded-full border border-white/95 bg-white/88 text-center font-semibold text-brand-fg1 shadow-[0_18px_48px_-12px_rgba(120,105,165,0.28),0_8px_28px_-10px_rgba(160,185,210,0.2)] backdrop-blur-xl transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_22px_52px_-12px_rgba(120,105,165,0.32)]";

const heroBubbleMd =
  `${heroBubbleBase} whitespace-nowrap px-8 py-4 text-[14px] font-semibold md:px-10 md:py-[1.05rem] md:text-[15px]`;

/** Najširší riadok — Všeobecné študijné predpoklady. */
const heroBubbleWide =
  `${heroBubbleBase} max-w-[min(100%,20rem)] px-7 py-4 text-[13px] font-semibold leading-snug sm:max-w-[21rem] md:max-w-[23rem] md:px-10 md:py-4 md:text-[14px]`;

/** Individualizovaný vstup — jemné odlíšenie. */
const heroBubbleAccent =
  "inline-flex max-w-full items-center justify-center rounded-full border border-brand-primary/45 bg-gradient-to-br from-white/95 via-white/88 to-brand-accent/45 text-center text-[13px] font-semibold leading-snug text-brand-fg1 shadow-[0_0_0_1px_rgba(185,160,224,0.25),0_18px_48px_-10px_rgba(185,160,224,0.35),0_12px_32px_-12px_rgba(140,120,180,0.15)] backdrop-blur-xl transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(185,160,224,0.35),0_24px_56px_-12px_rgba(185,160,224,0.38)] md:text-[14px] md:px-9 md:py-4";

const islandBase =
  "rounded-[1.75rem] border border-white/70 bg-white/55 px-6 py-6 shadow-[0_20px_56px_-28px_rgba(80,70,110,0.18)] backdrop-blur-md ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-300 hover:shadow-[0_24px_60px_-26px_rgba(80,70,110,0.22)] md:px-7 md:py-7";

export function CoTeCakaNaPrijimackachContent() {
  return (
    <main
      id="prijimacky-co-te-caka-na-prijimackach"
      className="scroll-mt-24 bg-[#f7f5fa] pb-14 md:scroll-mt-28 md:pb-20"
    >
      {/* Jednotné atmosférické pozadie celej stránky */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% -8%, rgba(216, 198, 240, 0.38) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 100% 18%, rgba(184, 210, 206, 0.22) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 0% 45%, rgba(230, 224, 248, 0.35) 0%, transparent 48%),
            linear-gradient(180deg, #faf9fc 0%, #f5f3f8 38%, #f8f7fa 100%)
          `,
        }}
      >
        <div
          className="pointer-events-none absolute -left-32 top-[28%] h-72 w-72 rounded-full bg-brand-accent/25 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-[52%] h-64 w-64 rounded-full bg-[#c5ddd8]/30 blur-[90px]"
          aria-hidden
        />

        {/* ——— Hero: čistý stred, bubliny len v bočných zónach (lg+), pod obsahom na mobile ——— */}
        <header className={`${CX} relative z-[1] pt-6 pb-2 md:pt-8 md:pb-4`}>
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_28px_72px_-36px_rgba(95,80,130,0.2)] ring-1 ring-white/85 md:rounded-[28px] lg:rounded-[32px]">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fefdfb] via-[#f7f4fb] to-[#f0f4f9]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[-30%] h-[85%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(230,216,248,0.55)_0%,transparent_62%)] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-[-20%] right-0 h-[55%] w-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,224,230,0.35)_0%,transparent_65%)] blur-3xl"
              aria-hidden
            />

            {/* Desktop: bubliny výhradne v okrajoch, mimo stredového stĺpca textu */}
            <div className="pointer-events-none absolute inset-0 z-[5] hidden lg:block" aria-hidden>
              <span
                className={`${atmosphere.driftC} ${heroBubbleWide} pointer-events-auto absolute left-[max(0.25rem,0.5%)] top-[36%] max-w-[13.5rem] -rotate-[1deg] xl:left-[max(0.5rem,1%)] xl:top-[38%] xl:max-w-[15rem]`}
              >
                Všeobecné študijné predpoklady
              </span>
              <span
                className={`${atmosphere.driftA} ${heroBubbleMd} pointer-events-auto absolute left-[max(0.25rem,0.5%)] top-[56%] -rotate-[2deg] xl:left-[max(0.5rem,1%)] xl:top-[58%]`}
              >
                Slovenský jazyk
              </span>
              <span
                className={`${atmosphere.driftB} ${heroBubbleMd} pointer-events-auto absolute bottom-[22%] right-[5%] rotate-[2deg]`}
              >
                Matematika
              </span>
              <span
                className={`${atmosphere.driftD} ${heroBubbleAccent} pointer-events-auto absolute bottom-[8%] right-[5%] max-w-[14rem] -rotate-[1deg]`}
              >
                Individualizovaný vstup
              </span>
            </div>

            <div className="relative z-10 mx-auto max-w-2xl px-5 py-10 text-center sm:px-6 sm:py-11 md:py-12 lg:px-8">
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
                <span className="text-[#958bad]">Čo ťa čaká na prijímačkách</span>
              </nav>

              <h1 className="font-heading m-0 mt-5 text-[clamp(2.1rem,1.25rem+3.8vw,3.5rem)] font-bold leading-[1.06] tracking-tight text-brand-fg1 md:mt-6">
                <span className="block">Čo ťa čaká na</span>
                <span className="block">prijímačkách</span>
              </h1>

              <p className="m-0 mt-3 max-w-xl text-pretty text-[15px] leading-snug text-brand-fg2 sm:mx-auto sm:mt-3.5 sm:text-[16px] md:text-[17px] md:leading-[1.45]">
                Krátky prehľad toho, z čoho sa prijímačky skladajú, čo znamená individualizovaný vstup a ako
                sa počíta výsledok.
              </p>

              <div className="mx-auto mt-5 flex w-full max-w-[17rem] flex-col items-stretch gap-2 sm:mt-6">
                <Link href={LINK_ULOHY} className={`${ctaPrimaryYellow} justify-center`}>
                  Vyskúšaj si úlohy
                </Link>
                <Link href={LINK_TERMINY} className={`${pillSecondaryHero} justify-center`}>
                  Termíny, výsledky a zápis
                </Link>
                <Link
                  href={LINK_AKO}
                  className="pt-1 text-center text-[12px] font-medium text-brand-fg4 underline decoration-brand-fg3/25 underline-offset-[5px] transition-colors hover:text-brand-fg3 md:text-[13px]"
                >
                  ← Ako sa dostať na Lýceum
                </Link>
              </div>
            </div>

            {/* Mobile / tablet: bubliny až pod CTA — žiadne prekrývanie */}
            <div
              className="relative z-10 flex flex-wrap justify-center gap-2.5 px-5 pb-9 pt-2 lg:hidden"
              aria-hidden
            >
              <span className={`${atmosphere.driftC} ${heroBubbleWide} max-w-[18rem] text-[12px] md:text-[13px]`}>
                Všeobecné študijné predpoklady
              </span>
              <span className={`${atmosphere.driftA} ${heroBubbleMd} text-[13px] md:px-7 md:py-3 md:text-[14px]`}>
                Slovenský jazyk
              </span>
              <span className={`${atmosphere.driftB} ${heroBubbleMd} text-[13px] md:px-7 md:py-3 md:text-[14px]`}>
                Matematika
              </span>
              <span className={`${atmosphere.driftD} ${heroBubbleAccent} max-w-[16rem] text-[12px] md:px-7 md:py-3 md:text-[13px]`}>
                Individualizovaný vstup
              </span>
            </div>
          </div>
        </header>

        {/* ——— Z čoho sa skladajú — ostrovčeky, plynulý náväzok ——— */}
        <section
          id="zo-co-sa-skladaju"
          className={`${CX} relative z-[1] pt-16 md:pt-20 lg:pt-24`}
          aria-labelledby="heading-skladaju"
        >
          <h2
            id="heading-skladaju"
            className="font-heading m-0 max-w-xl text-[clamp(1.5rem,1.05rem+1.8vw,2.15rem)] font-bold leading-[1.12] tracking-tight text-brand-fg1"
          >
            Z čoho sa prijímačky skladajú
          </h2>

          <div className="mt-12 flex flex-col gap-10 md:mt-14 md:gap-12 lg:mt-16 lg:gap-14">
            <div className="flex flex-col items-stretch gap-10 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12">
              <article
                className={`${islandBase} w-full max-w-md md:-rotate-[0.35deg] md:translate-x-1`}
              >
                <h3 className="font-heading m-0 text-[1.12rem] font-bold leading-snug text-brand-fg1 md:text-[1.2rem]">
                  Slovenský jazyk
                </h3>
                <p className="m-0 mt-3 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                  Písomný test zo slovenského jazyka
                </p>
              </article>
              <article
                className={`${islandBase} w-full max-w-[17.5rem] md:mt-14 md:rotate-[0.5deg] md:self-end`}
              >
                <h3 className="font-heading m-0 text-[1.12rem] font-bold leading-snug text-brand-fg1 md:text-[1.2rem]">
                  Matematika
                </h3>
                <p className="m-0 mt-3 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                  Písomný test z matematiky
                </p>
              </article>
            </div>

            <article
              className={`${islandBase} mx-auto w-full max-w-lg md:mx-0 md:ml-[4%] md:max-w-xl md:-rotate-[0.25deg]`}
            >
              <h3 className="font-heading m-0 text-[1.08rem] font-bold leading-snug text-brand-fg1 md:text-[1.14rem]">
                Všeobecné študijné predpoklady
              </h3>
              <p className="m-0 mt-3 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                Test zo všeobecných študijných predpokladov
              </p>
            </article>

            <article
              className={`${islandBase} mx-auto w-full max-w-3xl rounded-[2rem] border-brand-primary/25 bg-gradient-to-br from-white/70 via-white/50 to-brand-accent/35 px-7 py-7 shadow-[0_24px_64px_-28px_rgba(120,95,170,0.2)] ring-brand-primary/15 md:px-9 md:py-8`}
            >
              <h3 className="font-heading m-0 text-[1.15rem] font-bold leading-snug text-brand-fg1 md:text-[1.28rem]">
                Individualizovaný vstup
              </h3>
              <p className="m-0 mt-3 max-w-2xl text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                Druhá časť prijímacieho konania, ktorá dopĺňa písomné testy
              </p>
            </article>
          </div>
        </section>

        {/* ——— Čo znamená individualizovaný vstup ——— */}
        <section
          className={`${CX} relative z-[1] pt-14 md:pt-16 lg:pt-20`}
          aria-labelledby="heading-indiv"
        >
          <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
            <h2
              id="heading-indiv"
              className="font-heading m-0 text-[clamp(1.35rem,1rem+1.35vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1"
            >
              Čo znamená individualizovaný vstup
            </h2>
            <p className="m-0 mt-5 text-[15px] leading-relaxed text-brand-fg2 md:mt-6 md:text-[16px]">
              Je to časť prijímacieho konania, ktorá môže mať rôznu formu.
            </p>
          </div>
          <div className="relative mt-10 flex min-h-[6.5rem] flex-wrap items-center justify-center gap-3 md:mt-12 md:min-h-[7.5rem] md:gap-5">
            {(
              [
                { label: "Dotazník", cls: chipMotion.chipFloat1 },
                { label: "Skupinové zadanie", cls: chipMotion.chipFloat2 },
                { label: "Ústny rozhovor", cls: chipMotion.chipFloat3 },
              ] as const
            ).map((item, i) => (
              <span
                key={item.label}
                className={`${item.cls} inline-flex cursor-default rounded-full border border-brand-primary/22 bg-white/80 px-5 py-2.5 text-[14px] font-semibold text-brand-fg1 shadow-[0_10px_32px_-14px_rgba(185,160,224,0.38)] backdrop-blur-sm transition-[transform,box-shadow,border-color] hover:border-brand-primary/45 md:px-6 md:py-3 md:text-[15px]`}
                style={{
                  marginLeft: i === 1 ? "0.2rem" : undefined,
                  marginTop: i === 1 ? "-0.4rem" : undefined,
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </section>

        {/* ——— Ako sa počíta výsledok — mäkký široký ratio ——— */}
        <section
          className={`${CX} relative z-[1] pt-14 md:pt-16 lg:pt-20`}
          aria-labelledby="heading-vysledok"
        >
          <h2
            id="heading-vysledok"
            className="font-heading m-0 text-center text-[clamp(1.45rem,1.05rem+1.6vw,2.05rem)] font-bold leading-tight tracking-tight text-brand-fg1"
          >
            Ako sa počíta výsledok
          </h2>

          <div className="relative mx-auto mt-10 max-w-4xl md:mt-12">
            <div
              className="pointer-events-none absolute inset-0 -z-[1] rounded-[2rem] bg-[#fdb913]/12 blur-2xl md:rounded-[2.25rem]"
              aria-hidden
            />
            <div
              className="relative overflow-hidden rounded-[1.75rem] shadow-[0_28px_72px_-32px_rgba(60,55,90,0.18)] ring-1 ring-black/[0.06] md:rounded-[2rem]"
              role="img"
              aria-label="Pomer písomnej časti a individualizovaného vstupu: 80 % ku 20 %"
            >
              <div className="flex min-h-[10.5rem] flex-col sm:min-h-[11.5rem] md:min-h-[12.5rem] md:flex-row">
                <div className="relative flex flex-[8] flex-col justify-center bg-gradient-to-br from-[#eef1f6] via-[#e6ebf2] to-[#dde3ec] px-7 py-8 md:px-11 md:py-10">
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-white/35 to-transparent"
                    aria-hidden
                  />
                  <p className="relative m-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-fg2 md:text-xs">
                    Písomná časť
                  </p>
                  <p className="font-heading relative m-0 mt-2 text-[clamp(2.6rem,1.85rem+3.8vw,4.1rem)] font-bold leading-[0.95] tracking-tight text-brand-fg1">
                    80 %
                  </p>
                </div>
                <div className="relative flex flex-[2] flex-col justify-center bg-[#fdb913] px-6 py-7 text-brand-fg1 md:px-7 md:py-9">
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent"
                    aria-hidden
                  />
                  <p className="relative m-0 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-brand-fg1/72 md:text-[11px]">
                    Individualizovaný vstup
                  </p>
                  <p className="font-heading relative m-0 mt-2 text-[clamp(2rem,1.45rem+2.2vw,2.85rem)] font-bold leading-none tracking-tight">
                    20 %
                  </p>
                </div>
              </div>
            </div>
            <p className="m-0 mt-7 max-w-2xl text-center text-[14px] leading-relaxed text-brand-fg2 md:mx-auto md:mt-8 md:text-[15px]">
              Aby bol uchádzač úspešný, musí získať aspoň 50 % z testu a aspoň 40 %
              z individualizovaného vstupu.
            </p>
          </div>
        </section>

        {/* ——— CTA — prirodzené pokračovanie ——— */}
        <section
          className={`${CX} relative z-[1] pt-14 md:pt-16 lg:pt-20`}
          aria-labelledby="heading-dalsi"
        >
          <div className="relative mx-auto max-w-2xl px-2 text-center md:px-4">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[min(100%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/30 blur-3xl"
              aria-hidden
            />
            <h2
              id="heading-dalsi"
              className="font-heading relative m-0 text-[clamp(1.28rem,1rem+1.1vw,1.65rem)] font-bold leading-tight text-brand-fg1"
            >
              Chceš si to pozrieť konkrétnejšie?
            </h2>
            <p className="relative m-0 mt-4 text-[15px] leading-relaxed text-brand-fg2 md:text-[16px]">
              Pozri si ukážky úloh alebo termíny, výsledky a zápis.
            </p>
            <div className="relative mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 md:mt-10">
              <Link href={LINK_ULOHY} className={`${ctaPrimaryYellow} justify-center`}>
                Vyskúšaj si úlohy
              </Link>
              <Link href={LINK_TERMINY} className={`${pillSecondary} justify-center`}>
                Termíny, výsledky a zápis
              </Link>
            </div>
          </div>
        </section>

        {/* ——— ŠVVP — servisný blok ——— */}
        <section
          className={`${CX} relative z-[1] pt-12 md:pt-14`}
          aria-labelledby="heading-svvp"
        >
          <div className="mx-auto max-w-xl border-t border-black/[0.06] pt-10 md:pt-11">
            <h2
              id="heading-svvp"
              className="font-heading m-0 text-[0.95rem] font-bold text-brand-fg2 md:text-base"
            >
              Potrebujete individuálne úpravy?
            </h2>
            <p className="m-0 mt-2 text-[13px] leading-relaxed text-brand-fg3 md:text-[14px]">
              Informácie pre uchádzačov so špeciálnymi výchovno-vzdelávacími
              potrebami (ŠVVP) ti radi poskytneme na vyžiadanie — napíš nám cez{" "}
              <Link
                href="/#zaujemca"
                className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
              >
                záujem o štúdium
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ——— Spodná navigácia ——— */}
        <nav
          className={`${CX} relative z-[1] mt-12 flex flex-col items-center justify-center gap-2 border-t border-black/[0.05] pt-8 pb-10 text-center text-[13px] text-brand-fg3 sm:flex-row sm:gap-0 sm:pb-12 sm:text-[14px] md:mt-14 md:pt-9`}
          aria-label="Navigácia na konci stránky"
        >
          <Link
            href={LINK_AKO}
            className="font-medium text-brand-fg2 underline decoration-brand-fg3/30 underline-offset-[5px] transition-colors hover:text-brand-fg1 hover:decoration-brand-primary/45"
          >
            Ako sa dostať na Lýceum
          </Link>
          <span className="hidden text-brand-fg4 sm:inline sm:px-2.5" aria-hidden>
            ·
          </span>
          <Link
            href="/#prijimacky"
            className="font-medium text-brand-fg2 underline decoration-brand-fg3/30 underline-offset-[5px] transition-colors hover:text-brand-fg1 hover:decoration-brand-primary/45"
          >
            Späť na prehľad prijímačok
          </Link>
        </nav>
      </div>
    </main>
  );
}
