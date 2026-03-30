import Link from "next/link";
import { LINK_TERMINY_VYSLEDKY_ZAPIS } from "@/data/prijimacky-nav";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const LINK_ULOHY = "/prijimacky/vyskusaj-si-ulohy";
const LINK_TERMINY = LINK_TERMINY_VYSLEDKY_ZAPIS;
const LINK_AKO = "/prijimacky/ako-sa-dostat-na-lyceum";

const sectionGap = "py-16 md:py-20 lg:py-24";
const h2Class =
  "font-heading m-0 text-center text-[clamp(1.35rem,1rem+1.5vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.05rem+1.6vw,2rem)]";

export function CoTeCakaNaPrijimackachContent() {
  return (
    <main
      id="prijimacky-co-te-caka-na-prijimackach"
      className="scroll-mt-24 bg-brand-bg1 pb-16 md:scroll-mt-28 md:pb-24"
    >
      <div className={`${CX} pt-6 md:pt-8`}>
        <nav className="mb-4 text-sm text-brand-fg3" aria-label="Oblasť stránky">
          <Link
            href="/#prijimacky"
            className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          >
            Prijímačky
          </Link>
          <span className="mx-2 text-brand-fg3" aria-hidden>
            /
          </span>
          <span className="text-brand-fg2">Čo ťa čaká na prijímačkách</span>
        </nav>
        <p className="m-0 mb-8 max-w-2xl text-[13px] leading-relaxed text-brand-fg3 md:text-sm">
          Ak potrebuješ ešte celkový prehľad a prvé kroky pred prihláškou, nájdeš ich
          na stránke{" "}
          <Link
            href={LINK_AKO}
            className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          >
            Ako sa dostať na Lýceum
          </Link>
          . Tu sa zameriavame len na to, čo ťa čaká pri ceste cez prijímacie skúšky.
        </p>
      </div>

      {/* 1. Hero */}
      <div className={CX}>
        <section
          className="rounded-[24px] bg-gradient-to-br from-white via-brand-bg2/40 to-[#f5f0fc] px-6 py-14 ring-1 ring-black/[0.06] sm:px-10 sm:py-16 md:rounded-[28px] md:px-12 md:py-16 lg:px-16"
          aria-label="Úvod"
        >
          <div className="max-w-3xl">
            <h1 className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.8vw,3rem)] font-bold leading-[1.08] tracking-tight text-brand-fg1">
              Čo ťa čaká na prijímačkách
            </h1>
            <p className="m-0 mt-6 max-w-2xl text-[15px] font-normal leading-relaxed text-brand-fg1/88 sm:text-[16px] md:mt-7 md:text-[17px] md:leading-[1.65]">
              Krátky prehľad toho, z čoho sa prijímačky skladajú, čo znamená
              individualizovaný vstup a ako sa počíta výsledok.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href={LINK_ULOHY}
                className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Vyskúšaj si úlohy
              </Link>
              <Link
                href={LINK_TERMINY}
                className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10 md:text-base"
              >
                Termíny a kapacita
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Z čoho sa skladajú */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-skladaju"
      >
        <h2 id="heading-skladaju" className={`${h2Class} mb-10 md:mb-14`}>
          Z čoho sa prijímačky skladajú
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {[
            {
              title: "Slovenský jazyk",
              text: "Písomný test zo slovenského jazyka",
            },
            { title: "Matematika", text: "Písomný test z matematiky" },
            {
              title: "Všeobecné študijné predpoklady",
              text: "Test zo všeobecných študijných predpokladov",
            },
            {
              title: "Individualizovaný vstup",
              text: "Druhá časť prijímacieho konania, ktorá dopĺňa písomné testy",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-black/[0.07] bg-white px-5 py-6 shadow-[0_8px_32px_-20px_rgba(0,0,0,0.08)] md:px-6 md:py-7"
            >
              <h3 className="font-heading m-0 text-[1.05rem] font-bold leading-snug text-brand-fg1 md:text-[1.1rem]">
                {c.title}
              </h3>
              <p className="m-0 mt-3 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Individualizovaný vstup */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-indiv"
      >
        <h2 id="heading-indiv" className={`${h2Class} mb-6 md:mb-8`}>
          Čo znamená individualizovaný vstup
        </h2>
        <div className="mx-auto max-w-3xl">
          <p className="m-0 text-center text-[15px] leading-relaxed text-brand-fg2 md:text-base">
            Je to časť prijímacieho konania, ktorá môže mať rôznu formu.
          </p>
          <ul className="m-0 mt-8 grid list-none gap-3 p-0 sm:grid-cols-3 sm:gap-4">
            {["Dotazník", "Skupinové zadanie", "Ústny rozhovor"].map((item) => (
              <li
                key={item}
                className="rounded-xl bg-brand-bg2/90 px-4 py-5 text-center text-[15px] font-semibold text-brand-fg1 ring-1 ring-black/[0.06] md:py-6"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Hodnotenie */}
      <section
        className={`${CX} ${sectionGap}`}
        aria-labelledby="heading-vysledok"
      >
        <h2 id="heading-vysledok" className={`${h2Class} mb-10 md:mb-12`}>
          Ako sa počíta výsledok
        </h2>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-2xl bg-brand-fg1 px-6 py-8 text-center text-white md:py-10">
            <p className="m-0 text-sm font-semibold uppercase tracking-wide text-white/75">
              Písomná časť
            </p>
            <p className="font-heading m-0 mt-3 text-[clamp(2.25rem,1.5rem+3vw,3.25rem)] font-bold leading-none">
              80 %
            </p>
          </div>
          <div className="rounded-2xl bg-brand-primary/90 px-6 py-8 text-center text-brand-fg1 md:py-10">
            <p className="m-0 text-sm font-semibold uppercase tracking-wide text-brand-fg1/70">
              Individualizovaný vstup
            </p>
            <p className="font-heading m-0 mt-3 text-[clamp(2.25rem,1.5rem+3vw,3.25rem)] font-bold leading-none">
              20 %
            </p>
          </div>
        </div>
        <p className="mx-auto m-0 mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-brand-fg1 md:mt-10 md:text-[16px]">
          Aby bol uchádzač úspešný, musí získať aspoň 50 % z testu a aspoň 40 %
          z individualizovaného vstupu.
        </p>
      </section>

      {/* 5. Ďalší krok */}
      <section
        className={`${CX} ${sectionGap} border-t border-black/[0.06]`}
        aria-labelledby="heading-dalsi"
      >
        <h2 id="heading-dalsi" className={`${h2Class} mb-6 md:mb-8`}>
          Chceš si to pozrieť konkrétnejšie?
        </h2>
        <div className="mx-auto max-w-xl rounded-2xl bg-gradient-to-br from-white to-brand-bg2/70 px-6 py-8 text-center ring-1 ring-black/[0.08] md:px-10 md:py-10">
          <p className="m-0 text-[15px] leading-relaxed text-brand-fg2 md:text-base">
            Pozri si ukážky úloh alebo termíny a kapacitu.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href={LINK_ULOHY}
              className="btn-primary-site justify-center px-8 py-3.5 text-[15px]"
            >
              Vyskúšaj si úlohy
            </Link>
            <Link
              href={LINK_TERMINY}
              className="btn-secondary-site justify-center px-8 py-3.5 text-[15px]"
            >
              Termíny a kapacita
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ŠVVP */}
      <div className={CX}>
        <section className="mx-auto max-w-2xl pb-4" aria-labelledby="heading-svvp">
          <div className="rounded-xl border border-dashed border-black/[0.12] bg-brand-bg2/40 px-5 py-5 md:px-6 md:py-6">
            <h2
              id="heading-svvp"
              className="font-heading m-0 text-base font-bold text-brand-fg1 md:text-lg"
            >
              Potrebujete individuálne úpravy?
            </h2>
            <p className="m-0 mt-2 text-[13px] leading-relaxed text-brand-fg3 md:text-sm">
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
      </div>

      <div className={`${CX} pt-10 pb-4`}>
        <p className="m-0 text-center text-sm text-brand-fg3">
          <Link
            href={LINK_AKO}
            className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          >
            Ako sa dostať na Lýceum
          </Link>
          <span className="mx-2 text-brand-fg4" aria-hidden>
            ·
          </span>
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
