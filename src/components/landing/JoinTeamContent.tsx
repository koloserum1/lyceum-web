import { JoinTeamMiniQuiz } from "@/components/landing/JoinTeamMiniQuiz";

/** Nadpis podsekcie v združenom boxe */
const sectionTitle =
  "font-heading m-0 text-[clamp(1.15rem,1rem+1vw,1.5rem)] font-bold leading-tight tracking-tight text-brand-fg1 border-l-[4px] border-[#fdb913] pl-4 md:pl-5";

const PRACA_EMAIL = "praca@lyceum.sk";
const MAILTO = `mailto:${PRACA_EMAIL}?subject=${encodeURIComponent("Príchod do tímu Lýcea")}`;

/** Jeden vonkajší box: Čo ponúkame · Koho hľadáme · Ako prebieha výber */
const trioBox =
  "overflow-hidden rounded-2xl bg-brand-bg2/75 ring-1 ring-black/[0.08] shadow-[0_8px_40px_-20px_rgba(0,0,0,0.08)]";

const trioBlock = "px-6 py-8 md:px-10 md:py-10";
const trioDivider = "h-px w-full bg-gradient-to-r from-transparent via-black/[0.12] to-transparent";

export function JoinTeamContent() {
  return (
    <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
      <div className={trioBox}>
        <section aria-labelledby="join-co-ponukame" className={trioBlock}>
          <h3 id="join-co-ponukame" className={sectionTitle}>
            Čo ponúkame
          </h3>
          <ul className="m-0 mt-5 list-none space-y-3.5 p-0 text-[13px] leading-relaxed text-brand-fg1 md:mt-6 md:text-sm md:leading-relaxed">
            {[
              "tím, ktorý drží spolu a dáva si spätnú väzbu",
              "podporu a rast: školenia, vzdelávania, sprevádzanie v učení",
              "pracovný notebook a kvalitné kancelárske + digitálne vybavenie",
              "priestor tvoriť: byť pri vzniku nového konceptu školy a posúvať stredoškolské vzdelávanie cez prax a projekty",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-0.5 shrink-0 font-bold text-[#fdb913]"
                  aria-hidden
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className={trioDivider} aria-hidden />

        <section aria-labelledby="join-koho" className={trioBlock}>
          <h3 id="join-koho" className={sectionTitle}>
            Koho hľadáme
          </h3>
          <p className="m-0 mt-5 text-[13px] font-normal leading-relaxed text-brand-fg1 md:mt-6 md:text-sm">
            Ľudí, ktorí berú študentov vážne, vedia pracovať v tíme a chcú učiť
            tak, aby to malo zmysel aj mimo školy.
          </p>
        </section>

        <div className={trioDivider} aria-hidden />

        <section aria-labelledby="join-vyber" className={trioBlock}>
          <h3 id="join-vyber" className={sectionTitle}>
            Ako prebieha výber
          </h3>
          <div className="mt-5 space-y-3 text-[13px] font-normal leading-relaxed text-brand-fg1 md:mt-6 md:text-sm">
            <p className="m-0">
              Vybraných uchádzačov pozveme na rozhovor.
            </p>
            <p className="m-0">
              V druhom kole ťa radi uvidíme aj učiť (ukážka hodiny / zadanie).
            </p>
          </div>
        </section>
      </div>

      <section
        aria-labelledby="join-quiz"
        className="rounded-[32px] bg-[#f2f1eb] px-4 py-10 md:px-8 md:py-14"
      >
        <h3 id="join-quiz" className={sectionTitle}>
          Mini quiz
        </h3>
        <p className="m-0 mt-3 max-w-xl text-sm leading-relaxed text-brand-fg3 md:mt-4">
          Tri krátke otázky — pomôžu ti zvážiť, či ti sedí spôsob práce u nás.
        </p>
        <div className="mt-8 md:mt-10">
          <JoinTeamMiniQuiz />
        </div>
      </section>

      <section aria-labelledby="join-prihlaska" className="max-w-3xl">
        <h3 id="join-prihlaska" className={sectionTitle}>
          Ako sa prihlásiť
        </h3>
        <p className="m-0 mt-5 text-[13px] leading-relaxed text-brand-fg1 md:mt-6 md:text-sm">
          Pošli e-mail na{" "}
          <a
            href={MAILTO}
            className="font-semibold text-brand-fg1 underline decoration-brand-primary/40 underline-offset-2 hover:decoration-brand-primary"
          >
            {PRACA_EMAIL}
          </a>{" "}
          a prilož:
        </p>
        <ul className="m-0 mt-3 list-disc space-y-1.5 pl-5 text-[13px] leading-relaxed text-brand-fg1 md:text-sm">
          <li>motivačný list</li>
          <li>životopis</li>
        </ul>
        <a
          href={MAILTO}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#fdb913] px-8 py-3.5 text-[15px] font-bold text-brand-fg1 shadow-md transition hover:bg-[#f0ca2c] md:px-10 md:py-4 md:text-base"
        >
          Napísať na {PRACA_EMAIL}
        </a>
        <p className="m-0 mt-4 text-xs font-medium tracking-wide text-brand-fg3">
          <span className="text-brand-fg4">#ajjasomlyceum</span>
        </p>
      </section>

      {/* Veľká sekcia — budúce otvorené pozície */}
      <section
        aria-labelledby="join-pozicie-heading"
        className="rounded-2xl bg-gradient-to-b from-brand-bg2/90 to-brand-bg2/40 px-6 py-12 ring-1 ring-black/[0.06] md:px-10 md:py-16 lg:px-14 lg:py-20"
      >
        <h2
          id="join-pozicie-heading"
          className="font-heading m-0 text-center text-[clamp(1.85rem,1.2rem+2.8vw,3rem)] font-bold leading-[1.1] tracking-tight text-brand-fg1"
        >
          Voľné pozície
        </h2>
        <p className="m-0 mt-4 text-center text-[15px] font-medium text-brand-fg2 md:mt-5 md:text-lg">
          Momentálne tu nemáme aktívny inzerát.
        </p>
        <p className="mx-auto m-0 mt-2 max-w-xl text-center text-sm leading-relaxed text-brand-fg3 md:text-base">
          Tento priestor je pripravený na nové otvorené role — ako len budú,
          zobrazia sa tu prehľadne a jasne.
        </p>
        <div className="mx-auto mt-10 flex min-h-[min(40vh,320px)] max-w-3xl items-center justify-center rounded-2xl border-2 border-dashed border-black/[0.12] bg-brand-bg1/50 px-6 py-16 text-center md:mt-12 md:min-h-[min(36vh,380px)] md:py-20">
          <p className="m-0 max-w-md text-[15px] leading-relaxed text-brand-fg3 md:text-lg">
            Žiadne otvorené pozície zatiaľ neevidujeme. Skús sa pozrieť neskôr
            alebo nám napíš na{" "}
            <a
              href={MAILTO}
              className="font-semibold text-brand-fg1 underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
            >
              {PRACA_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
