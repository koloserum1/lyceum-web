import Link from "next/link";
import { LINK_TERMINY_VYSLEDKY_ZAPIS } from "@/data/prijimacky-nav";
import atmosphere from "./coTeCakaAtmosphere.module.css";
const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_ULOHY = "/prijimacky/vyskusaj-si-ulohy";
const LINK_TERMINY = LINK_TERMINY_VYSLEDKY_ZAPIS;
const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";

/** Paleta pod hero: jemná lila / modrastá levanduľa, tmavá slivka na text, žltá len na kľúčové akcenty a CTA. */
const washPage = "bg-[#faf9fc]";
const borderSection = "border-[#e0d8ee]/85";
const eyebrowPlum =
  "text-[10px] font-bold uppercase tracking-[0.16em] text-[#6b5b8c] md:text-[11px]";
const headingEmphasis = "text-[#5d4d7a]";
const captionPlum = "text-[#6b5b8c]";
const linkPlumHover =
  "transition-colors hover:text-[#5d4d7a] hover:decoration-[#9b8ab8]/55";

const ctaPrimaryYellow =
  "inline-flex items-center justify-center rounded-full border-0 bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline shadow-[0_14px_36px_-12px_rgba(253,185,19,0.5)] transition-[transform,box-shadow,background-color] hover:bg-[#f5b010] hover:shadow-[0_18px_40px_-10px_rgba(253,185,19,0.48)] md:px-10 md:py-4 md:text-base";

/** Sekundárne CTA v hero — jemný lila podklad, kontrast voči pozadiu. */
const pillSecondaryHero =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/42 bg-[#f2ecfb]/95 px-5 py-2.5 text-[13px] font-semibold text-brand-fg1 no-underline shadow-[0_8px_28px_-10px_rgba(130,105,185,0.22),0_14px_36px_-14px_rgba(185,160,224,0.28)] backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] hover:border-brand-primary/58 hover:bg-[#faf6ff] hover:shadow-[0_12px_36px_-10px_rgba(140,115,195,0.3)] md:px-6 md:py-3 md:text-[14px]";

/** Veľké plávajúce bubliny — výraznejší odtieň a jemný glow oproti hero pozadiu. */
const heroBubbleBase =
  "inline-flex max-w-full items-center justify-center rounded-full border border-[#c9bee5]/65 bg-[#fdfbff]/96 text-center font-semibold text-brand-fg1 shadow-[0_12px_40px_-10px_rgba(125,102,175,0.28),0_4px_24px_-8px_rgba(170,150,215,0.18)] backdrop-blur-xl transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_18px_48px_-10px_rgba(115,92,168,0.32),0_8px_28px_-8px_rgba(185,165,225,0.22)]";

const heroBubbleMd =
  `${heroBubbleBase} whitespace-nowrap px-8 py-4 text-[14px] font-semibold md:px-10 md:py-[1.05rem] md:text-[15px]`;

/** Najširší riadok — Všeobecné študijné predpoklady. */
const heroBubbleWide =
  `${heroBubbleBase} max-w-[min(100%,20rem)] px-7 py-4 text-[13px] font-semibold leading-snug sm:max-w-[21rem] md:max-w-[23rem] md:px-10 md:py-4 md:text-[14px]`;

/** Individualizovaný vstup — výraznejší lila highlight v hero. */
const heroBubbleAccent =
  "inline-flex max-w-full items-center justify-center rounded-full border border-brand-primary/52 bg-gradient-to-br from-[#faf6ff] via-[#ebe4fb] to-brand-accent/55 text-center text-[13px] font-semibold leading-snug text-brand-fg1 shadow-[0_0_0_1px_rgba(165,140,210,0.35),0_16px_44px_-8px_rgba(130,105,185,0.35),0_8px_28px_-8px_rgba(200,175,235,0.25)] backdrop-blur-xl transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(155,130,200,0.45),0_22px_56px_-10px_rgba(120,95,175,0.38)] md:text-[14px] md:px-9 md:py-4";

/** Spoločné s hero boxom: jemný lila rám, mäkký gradient (sekcie pod hero). */
const sectionHeroRing = "ring-1 ring-[#d8cef0]/90";
const sectionHeroCardShadow =
  "shadow-[0_32px_80px_-40px_rgba(85,65,130,0.2),0_1px_0_rgba(0,0,0,0.03)]";

/** Prehľad štyroch častí — tri jemne rozdielne tóny + štvrtá výraznejšia (zlato + lila). */
const skladajuBoxBase =
  "flex h-full flex-col rounded-2xl border border-[#c9bee5]/50 px-5 py-5 shadow-[0_12px_40px_-28px_rgba(125,102,175,0.14),0_1px_0_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 md:rounded-[1.35rem] md:px-6 md:py-6 hover:border-[#a895d0]/65 hover:shadow-[0_18px_48px_-26px_rgba(110,90,160,0.18)]";

const skladajuTint = {
  cool: "bg-gradient-to-br from-[#fdfbff] via-[#f3f5fd] to-[#e2e8f7]/72",
  base: "bg-gradient-to-br from-[#fdfbff] via-[#faf7ff] to-[#ebe4f8]/78",
  warm: "bg-gradient-to-br from-[#fffdfb] via-[#f8f4ff] to-[#ede6f6]/80",
} as const;

const skladajuBoxIndiv =
  "flex h-full flex-col rounded-2xl border border-[#c9bee5]/45 border-l-[4px] border-l-[#fdb913] bg-gradient-to-br from-[#fff9f2] via-[#faf4ff] to-[#e8e0f4]/88 px-5 py-5 shadow-[0_0_0_1px_rgba(253,185,19,0.14),0_20px_52px_-28px_rgba(95,75,140,0.2),0_10px_36px_-22px_rgba(253,185,19,0.1)] transition-[border-color,box-shadow] duration-200 md:rounded-[1.35rem] md:px-6 md:py-6 hover:border-[#b8a5d8]/70 hover:shadow-[0_24px_56px_-26px_rgba(90,70,130,0.22)]";

const skladajuNumPlum =
  "font-heading text-[11px] font-bold tabular-nums uppercase tracking-[0.14em] text-[#6b5b8c]";
const skladajuNumGold =
  "font-heading text-[11px] font-bold tabular-nums uppercase tracking-[0.14em] text-[#b89830]";

const skladajuKarty = [
  {
    num: "01",
    title: "Slovenský jazyk",
    text: "Písomný test zo slovenského jazyka",
    variant: "neutral" as const,
    tint: "cool" as const,
  },
  {
    num: "02",
    title: "Matematika",
    text: "Písomný test z matematiky",
    variant: "neutral" as const,
    tint: "base" as const,
  },
  {
    num: "03",
    title: "Všeobecné študijné predpoklady",
    text: "Test zo všeobecných študijných predpokladov",
    variant: "neutral" as const,
    tint: "warm" as const,
  },
  {
    num: "04",
    title: "Individualizovaný vstup",
    text: "Druhá časť prijímacieho konania, ktorá dopĺňa písomné testy",
    variant: "indiv" as const,
    tint: "warm" as const,
  },
] as const;

export function CoTeCakaNaPrijimackachContent() {
  return (
    <main
      id="prijimacky-co-te-caka-na-prijimackach"
      className={`scroll-mt-24 ${washPage} pb-14 md:scroll-mt-28 md:pb-20`}
    >
      {/* Atmosféra len okolo hero — pod hero čistá biela */}
      <div
        className="relative overflow-hidden pb-2 md:pb-4"
        style={{
          background: `
            radial-gradient(ellipse 110% 75% at 50% -12%, rgba(198, 178, 235, 0.42) 0%, transparent 58%),
            radial-gradient(ellipse 60% 50% at 100% 12%, rgba(175, 195, 235, 0.28) 0%, transparent 52%),
            radial-gradient(ellipse 55% 48% at 0% 38%, rgba(210, 200, 245, 0.38) 0%, transparent 50%),
            radial-gradient(ellipse 70% 45% at 80% 85%, rgba(180, 205, 228, 0.22) 0%, transparent 55%),
            linear-gradient(180deg, #f2eef9 0%, #e8e2f4 32%, #ebe6f2 58%, #f0ecf8 100%)
          `,
        }}
      >
        <div
          className="pointer-events-none absolute -left-28 top-[22%] h-80 w-80 rounded-full bg-[#c4b0e8]/35 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-[48%] h-72 w-72 rounded-full bg-brand-accent/32 blur-[95px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[5%] left-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-[#b8c8ec]/22 blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-b from-transparent to-white md:h-36"
          aria-hidden
        />

        <header className={`${CX} relative z-[1] pt-6 md:pt-8`}>
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_32px_80px_-32px_rgba(85,65,130,0.28)] ring-1 ring-[#d8cef0]/90 md:rounded-[28px] lg:rounded-[32px]">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fbf8ff] via-[#ebe4f8] to-[#dde8f5]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-[#f5f0fc]/80 to-[#e8e0f7]/95"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[-32%] h-[88%] w-[95%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,175,245,0.5)_0%,rgba(220,210,250,0.2)_45%,transparent_68%)] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-[-22%] right-[-5%] h-[58%] w-[55%] rounded-full bg-[radial-gradient(circle_at_center,rgba(165,188,235,0.38)_0%,transparent_68%)] blur-3xl"
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
      </div>

      {/* ——— Z čoho sa prijímačky skladajú — 2×2, ľahké karty ——— */}
      <section
        id="zo-co-sa-skladaju"
        className={`${CX} border-t ${borderSection} bg-gradient-to-b from-[#f7f4fc]/35 via-transparent to-transparent pt-12 md:pt-16 lg:pt-20`}
        aria-labelledby="heading-skladaju"
      >
        <p className={`m-0 mx-auto mb-2 max-w-2xl text-center ${eyebrowPlum}`}>
          Štyri súčasti
        </p>
        <h2
          id="heading-skladaju"
          className="font-heading m-0 mx-auto max-w-2xl text-center text-[clamp(1.45rem,1.05rem+1.65vw,2.05rem)] font-bold leading-[1.12] tracking-tight text-brand-fg1"
        >
          Z čoho sa <span className={headingEmphasis}>prijímačky</span> skladajú
        </h2>
        <div
          className="mx-auto mt-3 h-px max-w-[6rem] bg-gradient-to-r from-transparent via-[#c9bee5]/80 to-transparent md:mt-4"
          aria-hidden
        />
        <p className="m-0 mx-auto mt-3 max-w-2xl text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-4 md:text-[16px]">
          Štyri súčasti konania — tri písomné testy a doplnkový{" "}
          <span className={`font-medium ${headingEmphasis}`}>individualizovaný vstup</span>.
        </p>

        <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-10">
          {skladajuKarty.map((item) => (
            <article
              key={item.title}
              className={
                item.variant === "indiv"
                  ? skladajuBoxIndiv
                  : `${skladajuBoxBase} ${skladajuTint[item.tint]}`
              }
            >
              <p
                className={`m-0 ${item.variant === "indiv" ? skladajuNumGold : skladajuNumPlum}`}
              >
                {item.num}
              </p>
              <h3 className="font-heading m-0 mt-3 text-[1.05rem] font-bold leading-snug tracking-tight text-brand-fg1 md:text-[1.12rem]">
                {item.title}
              </h3>
              <p className="m-0 mt-2 max-w-prose text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ——— Čo znamená individualizovaný vstup — výklad nad boxom, formy vedľa seba ——— */}
      <section
        className={`${CX} border-t ${borderSection} pt-12 md:pt-16 lg:pt-20`}
        aria-labelledby="heading-indiv"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className={`m-0 mb-2 ${eyebrowPlum}`}>Druhá časť konania</p>
          <h2
            id="heading-indiv"
            className="font-heading m-0 text-[clamp(1.35rem,1rem+1.35vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1"
          >
            Čo znamená{" "}
            <span className="text-[#c9a820] underline decoration-[#e8d06a]/55 decoration-2 underline-offset-[5px]">
              individualizovaný vstup
            </span>
          </h2>
          <div
            className="mx-auto mt-3 h-px max-w-[6rem] bg-gradient-to-r from-transparent via-[#fdb913]/45 to-transparent md:mt-4"
            aria-hidden
          />
          <p className="m-0 mt-4 text-[15px] leading-[1.65] text-brand-fg2 md:mt-5 md:text-[16px]">
            Ide o druhú časť prijímacieho konania, ktorá dopĺňa písomné testy. Nie je to
            samostatná skúška z jednej témy — škola ťa spoznáva inak ako cez tabuľku odpovedí:
            záujem, spôsob myslenia a ako komunikuješ v menšej skupine alebo v rozhovore.
          </p>
        </div>

        <div
          className={`mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#fbf8ff] via-[#f3edfb] to-[#e8e0f4]/55 px-5 py-6 ${sectionHeroRing} ${sectionHeroCardShadow} md:mt-10 md:px-8 md:py-8`}
        >
          <p
            className={`m-0 text-center text-[11px] font-bold uppercase tracking-[0.14em] md:text-[12px] ${captionPlum}`}
          >
            Možné formy (vyberá škola)
          </p>
          <ul className="m-0 mt-5 grid list-none grid-cols-1 gap-4 p-0 sm:mt-6 sm:grid-cols-3 sm:gap-5 md:gap-6">
            {(
              [
                {
                  label: "Dotazník",
                  hint: "Písomné otázky na zamyšlenie.",
                },
                {
                  label: "Skupinové zadanie",
                  hint: "Krátka spolupráca v menšej skupine.",
                },
                {
                  label: "Ústny rozhovor",
                  hint: "Konverzácia s komisiou.",
                },
              ] as const
            ).map((form) => (
              <li
                key={form.label}
                className="group flex min-h-0 flex-col rounded-2xl border border-[#c9bee5]/55 bg-gradient-to-b from-white to-[#f7f4fc]/90 px-5 py-5 shadow-[0_12px_40px_-28px_rgba(125,102,175,0.12),0_1px_0_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 md:px-6 md:py-6 hover:border-[#9b87c4]/45 hover:shadow-[0_16px_44px_-24px_rgba(105,85,155,0.16)]"
              >
                <span
                  className="mb-3 inline-flex h-1 w-10 rounded-full bg-gradient-to-r from-[#d8cef0] to-[#c4b4e2] transition-[width,opacity] duration-200 group-hover:w-12 group-hover:opacity-90"
                  aria-hidden
                />
                <p
                  className={`m-0 text-[15px] font-semibold leading-snug md:text-base ${headingEmphasis}`}
                >
                  {form.label}
                </p>
                <p className="m-0 mt-2 text-[13px] leading-relaxed text-brand-fg3 md:mt-2.5 md:text-[14px]">
                  {form.hint}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Ako sa počíta výsledok — čistá vizualizácia 80 / 20 ——— */}
      <section
        className={`${CX} border-t ${borderSection} bg-gradient-to-b from-transparent via-[#f5f2fb]/40 to-transparent pt-12 md:pt-16 lg:pt-20`}
        aria-labelledby="heading-vysledok"
      >
        <p className={`m-0 mx-auto mb-2 max-w-2xl text-center ${eyebrowPlum}`}>
          Pomer váh
        </p>
        <h2
          id="heading-vysledok"
          className="font-heading m-0 text-center text-[clamp(1.45rem,1.05rem+1.6vw,2.05rem)] font-bold leading-tight tracking-tight text-brand-fg1"
        >
          Ako sa počíta <span className={headingEmphasis}>výsledok</span>
        </h2>
        <div
          className="mx-auto mt-3 h-px max-w-[6rem] bg-gradient-to-r from-transparent via-[#b8a8d8]/85 to-transparent md:mt-4"
          aria-hidden
        />

        <div className="mx-auto mt-10 max-w-xl md:mt-12">
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#fbf8ff] via-white to-[#ebe6f4]/45 p-6 ${sectionHeroRing} ${sectionHeroCardShadow} md:p-8`}
            role="img"
            aria-label="Pomer písomnej časti a individualizovaného vstupu: 80 % ku 20 %"
          >
            <div
              className="mb-6 h-1 w-full rounded-full bg-gradient-to-r from-[#b8a8d8] via-[#d8cef0] to-[#fdb913]"
              aria-hidden
            />
            <div className="flex h-3 overflow-hidden rounded-full bg-[#e4dcf5]/80 shadow-[inset_0_1px_2px_rgba(90,70,130,0.06)]">
              <div
                className="w-[80%] rounded-l-full bg-gradient-to-r from-[#b0a0d0] via-[#c9bee5] to-[#d8cef0]"
                aria-hidden
              />
              <div
                className="w-[20%] rounded-r-full bg-gradient-to-b from-[#ffd54a] to-[#fdb913] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]"
                aria-hidden
              />
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
              <div>
                <p
                  className={`m-0 text-[10px] font-semibold uppercase tracking-[0.14em] ${captionPlum}`}
                >
                  Písomná časť
                </p>
                <p
                  className={`font-heading m-0 mt-1 text-[2.25rem] font-bold leading-none tracking-tight md:text-[2.5rem] ${headingEmphasis}`}
                >
                  80 %
                </p>
                <p className="m-0 mt-2 max-w-xs text-[13px] leading-relaxed text-brand-fg2 md:text-[14px]">
                  Slovenský jazyk, matematika a všeobecné študijné predpoklady.
                </p>
              </div>
              <div className="border-t border-[#d8cef0]/65 pt-5 sm:border-t-0 sm:border-l sm:border-l-[#d8cef0]/70 sm:pl-8 sm:pt-0">
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b89830]">
                  Individualizovaný vstup
                </p>
                <p className="font-heading m-0 mt-1 text-[1.85rem] font-bold leading-none tracking-tight text-[#c9a820] md:text-[2rem]">
                  20 %
                </p>
                <p className="m-0 mt-2 max-w-[14rem] text-[13px] leading-relaxed text-brand-fg2 md:text-[14px]">
                  Dotazník, skupinové zadanie alebo ústny rozhovor — podľa rozhodnutia školy.
                </p>
              </div>
            </div>
          </div>
          <p className="m-0 mt-8 max-w-xl text-center text-[14px] leading-relaxed text-brand-fg2 md:mx-auto md:mt-9 md:text-[15px]">
            Aby bol uchádzač úspešný, musí získať aspoň{" "}
            <span className={`font-semibold ${headingEmphasis}`}>50 %</span> z testu a aspoň{" "}
            <span className={`font-semibold ${headingEmphasis}`}>40 %</span> z individualizovaného vstupu.
          </p>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section
        className={`${CX} border-t ${borderSection} pt-12 md:pt-16 lg:pt-20`}
        aria-labelledby="heading-dalsi"
      >
        <div className="mx-auto max-w-2xl rounded-[1.75rem] bg-gradient-to-b from-[#fbf8ff] via-[#f4f0fb] to-[#e8e2f4]/55 px-5 py-10 ring-1 ring-[#d8cef0]/75 shadow-[0_28px_70px_-38px_rgba(85,65,130,0.18)] sm:px-8 md:px-10 md:py-12">
          <p className={`m-0 mb-2 text-center ${eyebrowPlum}`}>Ďalší krok</p>
          <h2
            id="heading-dalsi"
            className="font-heading m-0 text-center text-[clamp(1.28rem,1rem+1.1vw,1.65rem)] font-bold leading-tight text-brand-fg1"
          >
            Chceš si to pozrieť{" "}
            <span className={headingEmphasis}>konkrétnejšie</span>?
          </h2>
          <div
            className="mx-auto mt-3 h-px max-w-[5rem] bg-gradient-to-r from-transparent via-[#fdb913]/45 to-transparent"
            aria-hidden
          />
          <p className="m-0 mt-4 text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[16px]">
            Pozri si ukážky úloh alebo{" "}
            <span className={`font-medium ${captionPlum}`}>termíny, výsledky a zápis</span>.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 md:mt-10">
            <Link href={LINK_ULOHY} className={`${ctaPrimaryYellow} justify-center`}>
              Vyskúšaj si úlohy
            </Link>
            <Link href={LINK_TERMINY} className={`${pillSecondaryHero} justify-center`}>
              Termíny, výsledky a zápis
            </Link>
          </div>
        </div>
      </section>

      {/* ——— ŠVVP ——— */}
      <section className={`${CX} pt-12 md:pt-14`} aria-labelledby="heading-svvp">
        <div className={`mx-auto max-w-xl border-t ${borderSection} pt-10 md:pt-11`}>
          <p className={`m-0 mb-1 ${eyebrowPlum}`}>ŠVVP</p>
          <h2
            id="heading-svvp"
            className="font-heading m-0 text-[0.95rem] font-bold text-brand-fg2 md:text-base"
          >
            Potrebujete <span className={headingEmphasis}>individuálne úpravy</span>?
          </h2>
          <p className="m-0 mt-2 text-[13px] leading-relaxed text-brand-fg3 md:text-[14px]">
            Informácie pre uchádzačov so špeciálnymi výchovno-vzdelávacími potrebami (ŠVVP) ti
            radi poskytneme na vyžiadanie — napíš nám cez{" "}
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
        className={`${CX} mt-12 flex flex-col items-center justify-center gap-2 border-t ${borderSection} pt-8 pb-10 text-center text-[13px] text-brand-fg3 sm:flex-row sm:gap-0 sm:pb-12 sm:text-[14px] md:mt-14 md:pt-9`}
        aria-label="Navigácia na konci stránky"
      >
        <Link
          href={LINK_AKO}
          className={`font-medium text-brand-fg2 underline decoration-[#c9bee5]/50 underline-offset-[5px] ${linkPlumHover}`}
        >
          Ako sa dostať na Lýceum
        </Link>
        <span className={`hidden sm:inline sm:px-2.5 ${captionPlum}`} aria-hidden>
          ·
        </span>
        <Link
          href="/#prijimacky"
          className={`font-medium text-brand-fg2 underline decoration-[#c9bee5]/50 underline-offset-[5px] ${linkPlumHover}`}
        >
          Späť na prehľad prijímačok
        </Link>
      </nav>
    </main>
  );
}
