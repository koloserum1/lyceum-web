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

/** Sekundárne CTA v hero — jemný lila podklad, kontrast voči pozadiu. */
const pillSecondaryHero =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/42 bg-[#f2ecfb]/95 px-5 py-2.5 text-[13px] font-semibold text-brand-fg1 no-underline shadow-[0_8px_28px_-10px_rgba(130,105,185,0.22),0_14px_36px_-14px_rgba(185,160,224,0.28)] backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] hover:border-brand-primary/58 hover:bg-[#faf6ff] hover:shadow-[0_12px_36px_-10px_rgba(140,115,195,0.3)] md:px-6 md:py-3 md:text-[14px]";

const pillSecondary =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/44 bg-[#ede7f8]/92 px-5 py-2.5 text-[14px] font-semibold text-brand-fg1 no-underline shadow-[0_8px_28px_-12px_rgba(125,100,175,0.22)] backdrop-blur-md transition-[border-color,background-color,box-shadow] hover:border-brand-primary/58 hover:bg-[#f5f0fc] hover:shadow-[0_14px_38px_-12px_rgba(150,125,200,0.28)] md:px-6 md:text-[15px]";

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

/** Statické boxy — spoločná výška na sm+ cez grid 2×2 + min-h; accent = jemný fialový podtón. */
const skladajuBoxBase =
  "flex h-full min-h-[12.5rem] flex-col rounded-[1.25rem] border px-5 py-6 shadow-[0_10px_36px_-14px_rgba(88,72,120,0.12)] md:rounded-[1.4rem] md:px-6 md:py-7 sm:min-h-0";

const skladajuBoxNeutral =
  `${skladajuBoxBase} border-[#d8d0e4]/55 bg-[#faf9fc] ring-1 ring-white/45`;

const skladajuBoxAccent =
  `${skladajuBoxBase} border-brand-primary/22 bg-gradient-to-b from-[#faf7ff] to-[#f1e9fb] ring-1 ring-brand-primary/12 shadow-[0_12px_40px_-12px_rgba(120,95,170,0.16)]`;

const skladajuKarty = [
  {
    title: "Slovenský jazyk",
    text: "Písomný test zo slovenského jazyka",
    variant: "neutral" as const,
  },
  {
    title: "Matematika",
    text: "Písomný test z matematiky",
    variant: "neutral" as const,
  },
  {
    title: "Všeobecné študijné predpoklady",
    text: "Test zo všeobecných študijných predpokladov",
    variant: "neutral" as const,
  },
  {
    title: "Individualizovaný vstup",
    text: "Druhá časť prijímacieho konania, ktorá dopĺňa písomné testy",
    variant: "accent" as const,
  },
] as const;

export function CoTeCakaNaPrijimackachContent() {
  return (
    <main
      id="prijimacky-co-te-caka-na-prijimackach"
      className="scroll-mt-24 bg-[#ebe6f4] pb-14 md:scroll-mt-28 md:pb-20"
    >
      {/* Atmosférické pozadie — sivofialová základná náladová plocha */}
      <div
        className="relative overflow-hidden"
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
          className="pointer-events-none absolute left-1/3 bottom-[5%] h-56 w-56 -translate-x-1/2 rounded-full bg-[#b8c8ec]/22 blur-[80px]"
          aria-hidden
        />

        {/* ——— Hero: čistý stred, bubliny len v bočných zónach (lg+), pod obsahom na mobile ——— */}
        <header className={`${CX} relative z-[1] pt-6 pb-2 md:pt-8 md:pb-4`}>
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

        {/* ——— Z čoho sa skladajú — kompaktný 2×2 grid ——— */}
        <section
          id="zo-co-sa-skladaju"
          className={`${CX} relative z-[1] pt-10 md:pt-12 lg:pt-14`}
          aria-labelledby="heading-skladaju"
        >
          <h2
            id="heading-skladaju"
            className="font-heading m-0 max-w-2xl text-[clamp(1.45rem,1.05rem+1.65vw,2.05rem)] font-bold leading-[1.12] tracking-tight text-brand-fg1"
          >
            Z čoho sa prijímačky skladajú
          </h2>

          <div className="mx-auto mt-5 grid max-w-3xl grid-cols-1 gap-3 sm:mt-6 sm:min-h-[24rem] sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 md:min-h-[25rem] md:gap-4">
            {skladajuKarty.map((item) => (
              <article
                key={item.title}
                className={
                  item.variant === "accent"
                    ? skladajuBoxAccent
                    : skladajuBoxNeutral
                }
              >
                <h3 className="font-heading m-0 text-[clamp(1.05rem,0.98rem+0.35vw,1.2rem)] font-bold leading-snug tracking-tight text-brand-fg1 md:text-[1.14rem]">
                  {item.title}
                </h3>
                <p className="m-0 mt-2 max-w-prose text-[14px] leading-relaxed text-brand-fg2 md:mt-2.5 md:text-[15px]">
                  {item.text}
                </p>
              </article>
            ))}
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
                className={`${item.cls} inline-flex cursor-default rounded-full border border-brand-primary/32 bg-[#e8e2f4]/88 px-5 py-2.5 text-[14px] font-semibold text-brand-fg1 shadow-[0_8px_28px_-10px_rgba(120,98,168,0.2)] backdrop-blur-sm transition-[transform,box-shadow,border-color] hover:border-brand-primary/52 hover:bg-[#f0eafc] hover:shadow-[0_14px_40px_-12px_rgba(140,115,195,0.32)] md:px-6 md:py-3 md:text-[15px]`}
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
              className="pointer-events-none absolute -inset-3 -z-[1] rounded-[2.1rem] bg-[radial-gradient(ellipse_at_30%_50%,rgba(150,130,205,0.35)_0%,transparent_55%),radial-gradient(ellipse_at_85%_50%,rgba(253,185,19,0.22)_0%,transparent_50%)] blur-2xl md:-inset-4 md:rounded-[2.35rem]"
              aria-hidden
            />
            <div
              className="relative overflow-hidden rounded-[1.75rem] shadow-[0_32px_80px_-28px_rgba(75,58,115,0.35),0_16px_48px_-20px_rgba(253,185,19,0.15)] ring-1 ring-[#b8a8d8]/45 md:rounded-[2rem]"
              role="img"
              aria-label="Pomer písomnej časti a individualizovaného vstupu: 80 % ku 20 %"
            >
              <div className="flex min-h-[10.5rem] flex-col sm:min-h-[11.5rem] md:min-h-[12.5rem] md:flex-row">
                <div className="relative flex flex-[8] flex-col justify-center bg-gradient-to-br from-[#dce2f4] via-[#cfd8ef] to-[#bfcae8] px-7 py-8 md:px-11 md:py-10">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(255,255,255,0.45)_0%,transparent_55%)]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#e8ecfa]/90 to-transparent"
                    aria-hidden
                  />
                  <p className="relative m-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4a4a62]/85 md:text-xs">
                    Písomná časť
                  </p>
                  <p className="font-heading relative m-0 mt-2 text-[clamp(2.6rem,1.85rem+3.8vw,4.1rem)] font-bold leading-[0.95] tracking-tight text-brand-fg1">
                    80 %
                  </p>
                </div>
                <div className="relative flex flex-[2] flex-col justify-center bg-[#fdb913] px-6 py-7 text-brand-fg1 md:px-7 md:py-9">
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/28 via-transparent to-[#f5a800]/12"
                    aria-hidden
                  />
                  <p className="relative m-0 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-brand-fg1/75 md:text-[11px]">
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
