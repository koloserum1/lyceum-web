import Image from "next/image";
import Link from "next/link";
import { LINK_TERMINY_VYSLEDKY_ZAPIS } from "@/data/prijimacky-nav";
import heroPills from "./heroFloatingPills.module.css";

const HERO_ATMOSFERA_SRC = "/prijimacky/co-te-caka-hero-studenti.png";
const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_ULOHY = "/prijimacky/vyskusaj-si-ulohy";
const LINK_TERMINY = LINK_TERMINY_VYSLEDKY_ZAPIS;
const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";

/** Paleta pod hero: jemná lila / modrastá levanduľa, tmavá slivka na text, žltá len na kľúčové akcenty a CTA. */
const washPage = "bg-brand-bg2";
const borderSection = "border-[#e0d8ee]/85";

/** Jedna karta: hero + „Z čoho sa skladajú“: veľmi jemný fialový ombre (takmer neutrálna báza, len náznak levandule). */
const coTeCakaUnifiedCard =
  "relative overflow-x-clip rounded-[36px] bg-gradient-to-br from-[#faf9f7] via-[#faf8fb] to-[#efeaf8] ring-1 ring-[#e8e0e8]/65 shadow-[0_24px_60px_-32px_rgba(85,75,120,0.09),inset_0_1px_0_0_rgba(255,255,255,0.92)]";
const coTeCakaUnifiedCardPurpleWash =
  "pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(ellipse_120%_90%_at_100%_100%,rgba(200,185,230,0.08)_0%,rgba(225,218,242,0.04)_50%,transparent_72%)]";

/** Sekcia „Čo znamená individualizovaný vstup“: rovnaký jemný ombre + wash ako hero karta. */
const coTeCakaIndivSectionCard =
  "relative overflow-hidden rounded-[36px] border border-[#e8e4ee]/85 bg-gradient-to-br from-[#faf9f7] via-[#faf8fb] to-[#efeaf8] p-6 text-brand-fg1 opacity-100 shadow-[0_24px_60px_-32px_rgba(85,75,120,0.09),inset_0_1px_0_0_rgba(255,255,255,0.92)] sm:p-8 md:p-10 lg:p-12";
const eyebrowPlum =
  "text-[10px] font-bold uppercase tracking-[0.16em] text-[#6b5b8c] md:text-[11px]";
const headingEmphasis = "text-[#5d4d7a]";
const captionPlum = "text-[#6b5b8c]";
const linkPlumHover =
  "transition-colors hover:text-[#5d4d7a] hover:decoration-[#9b8ab8]/55";

const ctaPrimaryYellow =
  "inline-flex items-center justify-center rounded-full border-0 bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 no-underline shadow-[0_14px_36px_-12px_rgba(253,185,19,0.5)] transition-[transform,box-shadow,background-color] hover:bg-[#f5b010] hover:shadow-[0_18px_40px_-10px_rgba(253,185,19,0.48)] md:px-10 md:py-4 md:text-base";

/** Sekundárne CTA v hero: jemný lila podklad, kontrast voči pozadiu. */
const pillSecondaryHero =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/42 bg-[#f2ecfb]/95 px-5 py-2.5 text-[13px] font-semibold text-brand-fg1 no-underline shadow-[0_8px_28px_-10px_rgba(130,105,185,0.22),0_14px_36px_-14px_rgba(185,160,224,0.28)] backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] hover:border-brand-primary/58 hover:bg-[#faf6ff] hover:shadow-[0_12px_36px_-10px_rgba(140,115,195,0.3)] md:px-6 md:py-3 md:text-[14px]";

/** Spoločné s hero boxom: jemný lila rám, mäkký gradient (sekcie pod hero). */
const sectionHeroRing = "ring-1 ring-[#d8cef0]/90";
const sectionHeroCardShadow =
  "shadow-[0_32px_80px_-40px_rgba(85,65,130,0.2),0_1px_0_rgba(0,0,0,0.03)]";

/** Prehľad štyroch častí: rovnaký rám ako termínové karty na „Ako sa dostať na Lýceum“. */
const skladajuBox =
  "flex h-full flex-col items-center text-center rounded-2xl border border-black/[0.05] bg-white px-4 py-3.5 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-[box-shadow] duration-200 md:px-5 md:py-4 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.09)]";

/** 04: výraznejší, jemný béžovo-fialový podklad (ladí s hero accentom). */
const skladajuBoxIndiv =
  "flex h-full flex-col items-center text-center rounded-2xl border border-[#c4b8dc]/55 bg-gradient-to-br from-[#fffbf7] via-[#f4eef8] to-[#e8e0f4] px-4 py-3.5 shadow-[0_10px_36px_-14px_rgba(105,85,155,0.22),0_4px_20px_-12px_rgba(90,70,50,0.06),inset_0_1px_0_0_rgba(255,255,255,0.75)] ring-1 ring-[#d8cef0]/70 backdrop-blur-sm transition-[box-shadow,border-color] duration-200 md:px-5 md:py-4 hover:border-[#a896cc]/55 hover:shadow-[0_16px_44px_-14px_rgba(95,75,150,0.26),0_6px_24px_-10px_rgba(120,95,80,0.08)]";

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
      {/* Hero: rovnaké pozadie ako zvyšok stránky (brand-bg2), karta jemne oddelená */}
      <div className="relative overflow-hidden bg-brand-bg2 pb-2 md:pb-4">
        <header className={`${CX} relative z-[1] pt-6 md:pt-8`}>
          <div className={`opacity-100 ${coTeCakaUnifiedCard}`}>
            <div className={coTeCakaUnifiedCardPurpleWash} aria-hidden />
            <div className="relative z-[1]">
            {/* Horný blok hero: rovnaký grid ako „Ako sa dostať na Lýceum“ (veľká fotka vpravo) */}
            <div className="relative opacity-100">
              <div className="grid gap-8 px-5 py-10 sm:px-6 sm:py-11 md:gap-10 md:py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,1.08fr)] lg:items-start lg:gap-10 lg:px-10 lg:py-10 xl:gap-12">
                <div className="min-w-0 text-left">
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

              <p className="m-0 mt-3 max-w-xl text-pretty text-[15px] leading-snug text-brand-fg2 sm:mt-3.5 sm:text-[16px] md:text-[17px] md:leading-[1.45]">
                Krátky prehľad toho, z čoho sa prijímačky skladajú, čo znamená individualizovaný vstup a ako
                sa počíta výsledok.
              </p>

              <div className="mt-5 flex w-full max-w-[17rem] flex-col items-stretch gap-2 sm:mt-6">
                <Link href={LINK_ULOHY} className={`${ctaPrimaryYellow} justify-center`}>
                  Vyskúšaj si úlohy
                </Link>
                <Link href={LINK_TERMINY} className={`${pillSecondaryHero} justify-center`}>
                  Termíny, výsledky a zápis
                </Link>
                <Link
                  href={LINK_AKO}
                  className="pt-1 text-left text-[12px] font-medium text-brand-fg4 underline decoration-brand-fg3/25 underline-offset-[5px] transition-colors hover:text-brand-fg3 md:text-[13px]"
                >
                  ← Ako sa dostať na Lýceum
                </Link>
              </div>
                </div>

                <div className="relative mx-auto hidden w-full max-w-[min(100%,24rem)] sm:max-w-[min(100%,28rem)] lg:mx-0 lg:block lg:max-w-none">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] shadow-[0_24px_56px_-32px_rgba(55,40,85,0.2)] ring-1 ring-[#ebe8e4]/90 md:aspect-[3/2] md:rounded-[28px] lg:rounded-[32px]">
                    <Image
                      src={HERO_ATMOSFERA_SRC}
                      alt="Žiaci pri spoločnej práci pri stole v triede"
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
                      className={`${heroPills.pillDriftA} font-heading inline-block rounded-full border border-[#c9bee5]/80 bg-gradient-to-br from-white via-[#fcfbff] to-[#f0ebf8] px-6 py-3.5 text-base font-bold leading-tight tracking-tight text-brand-fg1 shadow-[0_12px_32px_-12px_rgba(125,102,175,0.2)] sm:px-7 sm:py-4 sm:text-lg md:px-8 md:py-[1.125rem] md:text-xl`}
                    >
                      Slovenský jazyk
                    </span>
                  </div>
                  <div className="absolute right-2 bottom-2 z-[2] sm:right-3 sm:bottom-3 lg:right-4 lg:bottom-4">
                    <span
                      className={`${heroPills.pillDriftB} font-heading inline-block rounded-full border border-[#d4cce8]/85 bg-[#fdfbff]/95 px-6 py-3.5 text-base font-bold leading-tight tracking-tight text-brand-fg1 shadow-[0_10px_28px_-10px_rgba(105,85,155,0.12)] backdrop-blur-sm sm:px-7 sm:py-4 sm:text-lg md:px-8 md:py-[1.125rem] md:text-xl`}
                    >
                      Individuálny prístup
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Z čoho sa prijímačky skladajú: kontinuálne s hero (jedna karta) */}
            <section
              id="zo-co-sa-skladaju"
              className="relative z-10 scroll-mt-28 px-5 pb-10 pt-8 sm:px-6 md:pb-12 md:pt-10 lg:px-10"
              aria-labelledby="heading-skladaju"
            >
              <h2
                id="heading-skladaju"
                className="font-heading m-0 max-w-2xl text-left text-[11px] font-bold uppercase tracking-[0.16em] text-brand-fg3 md:text-xs"
              >
                Z čoho sa prijímačky skladajú
              </h2>

              <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-10">
                {skladajuKarty.map((item) => (
                  <article
                    key={item.title}
                    className={item.variant === "indiv" ? skladajuBoxIndiv : skladajuBox}
                  >
                    <p
                      className={`m-0 ${item.variant === "indiv" ? skladajuNumGold : skladajuNumPlum}`}
                    >
                      {item.num}
                    </p>
                    <h3 className="font-heading m-0 mt-3 max-w-prose text-[1.05rem] font-bold leading-snug tracking-tight text-brand-fg1 md:text-[1.12rem]">
                      {item.title}
                    </h3>
                    <p className="m-0 mt-2 max-w-prose text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>
            </div>
          </div>
        </header>
      </div>

      {/* --- Čo znamená individualizovaný vstup: layout ako blok „Kto sa môže prihlásiť“ na „Ako sa dostať“ --- */}
      <section className={`${CX} py-8 md:py-10`} aria-labelledby="heading-indiv">
        <div className={coTeCakaIndivSectionCard}>
          <div className={coTeCakaUnifiedCardPurpleWash} aria-hidden />
          <div className="relative z-[1]">
            <p className={`m-0 mb-2 max-w-2xl ${eyebrowPlum}`}>Druhá časť konania</p>
            <h2
              id="heading-indiv"
              className="font-heading m-0 max-w-2xl text-[clamp(1.35rem,1rem+1.4vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.5vw,2rem)]"
            >
              Čo znamená{" "}
              <span className="text-[#c9a820] underline decoration-[#e8d06a]/55 decoration-2 underline-offset-[5px]">
                individualizovaný vstup
              </span>
            </h2>
            <p className="m-0 mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-fg2 md:text-base">
              Ide o druhú časť prijímacieho konania, ktorá dopĺňa písomné testy. Nie je to
              samostatná skúška z jednej témy: škola ťa spoznáva inak ako cez tabuľku odpovedí:
              záujem, spôsob myslenia a ako komunikuješ v menšej skupine alebo v rozhovore.
            </p>

            <div
              className={`mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl bg-white px-5 py-6 ${sectionHeroRing} ${sectionHeroCardShadow} md:mt-10 md:px-8 md:py-8`}
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
                    className="flex min-h-0 flex-col rounded-2xl border border-[#c9bee5]/55 bg-white px-5 py-5 shadow-[0_12px_40px_-28px_rgba(125,102,175,0.12),0_1px_0_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 md:px-6 md:py-6 hover:border-[#9b87c4]/45 hover:shadow-[0_16px_44px_-24px_rgba(105,85,155,0.16)]"
                  >
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
          </div>
        </div>
      </section>

      {/* --- Ako sa počíta výsledok: čistá vizualizácia 80 / 20 --- */}
      <section
        className={`${CX} border-t ${borderSection} bg-brand-bg2 pt-12 md:pt-16 lg:pt-20`}
        aria-labelledby="heading-vysledok"
      >
        <p className={`m-0 mb-2 max-w-2xl text-left ${eyebrowPlum}`}>
          Pomer váh
        </p>
        <h2
          id="heading-vysledok"
          className="font-heading m-0 text-left text-[clamp(1.45rem,1.05rem+1.6vw,2.05rem)] font-bold leading-tight tracking-tight text-brand-fg1"
        >
          Ako sa počíta <span className={headingEmphasis}>výsledok</span>
        </h2>

        <div className="mx-auto mt-10 max-w-xl md:mt-12">
          <div
            className={`relative overflow-hidden rounded-2xl bg-white p-6 ${sectionHeroRing} ${sectionHeroCardShadow} md:p-8`}
            role="img"
            aria-label="Pomer písomnej časti a individualizovaného vstupu: 80 % ku 20 %"
          >
            <div className="flex h-4 overflow-hidden rounded-full bg-[#e4dcf5]/80 shadow-[inset_0_1px_2px_rgba(90,70,130,0.06)]">
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
                  Dotazník, skupinové zadanie alebo ústny rozhovor: podľa rozhodnutia školy.
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

      {/* --- CTA --- */}
      <section
        className={`${CX} border-t ${borderSection} pt-12 md:pt-16 lg:pt-20`}
        aria-labelledby="heading-dalsi"
      >
        <div className="mx-auto max-w-2xl rounded-[1.75rem] bg-white px-5 py-10 ring-1 ring-[#d8cef0]/75 shadow-[0_28px_70px_-38px_rgba(85,65,130,0.18)] sm:px-8 md:px-10 md:py-12">
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

      {/* --- ŠVVP --- */}
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
            radi poskytneme na vyžiadanie: napíš nám cez{" "}
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

      {/* --- Spodná navigácia --- */}
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
