import { JoinTeamMiniQuiz } from "@/components/landing/JoinTeamMiniQuiz";

const eyebrow =
  "font-heading m-0 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-fg3 md:text-xs";

const h2Section =
  "font-heading m-0 mt-2 text-[clamp(1.05rem,0.95rem+0.55vw,1.25rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:mt-2.5";

/** Karta sekcie — rovnaká reč ako bloky na prijímačkách („Kto sa môže prihlásiť“). */
const contentCard =
  "rounded-[28px] border border-[#ebe6e0]/90 bg-gradient-to-br from-white via-[#fcfbfa] to-[#fff5ec] p-6 text-brand-fg1 shadow-[0_28px_64px_-32px_rgba(90,80,70,0.09)] sm:p-8 md:p-10";

/** Obal minikvízu — rovnako ako na „Vyskúšaj si úlohy“ (FitQuiz). */
const joinTeamMiniQuizShell =
  "relative isolate overflow-hidden rounded-[24px] bg-gradient-to-b from-[#fdf8f0] via-[#faf5ee]/75 to-[#f0e6dc] ring-1 ring-[#e8dcc8]/45 shadow-[0_16px_48px_-28px_rgba(45,35,22,0.12)]";

const borderSection = "border-[#e0d8ee]/85";

const PRACA_EMAIL = "praca@lyceum.sk";
const MAILTO = `mailto:${PRACA_EMAIL}?subject=${encodeURIComponent("Príchod do tímu Lýcea")}`;

export function JoinTeamContent() {
  return (
    <div className="flex flex-col gap-10 md:gap-12">
      <section aria-label="Čo ponúkame, koho hľadáme a výber">
        {/* Vždy tri samostatné karty pod sebou — na každej šírke jasne oddelené boxy */}
        <div className="flex flex-col gap-6 md:gap-8">
          <section
            aria-labelledby="join-co-ponukame"
            className={contentCard}
          >
            <p className={eyebrow}>Ponuka</p>
            <h2 id="join-co-ponukame" className={h2Section}>
              Čo ponúkame
            </h2>
            <ul className="m-0 mt-4 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-brand-fg2 marker:text-brand-primary/55 md:mt-5 md:text-[15px] md:leading-[1.55]">
              {[
                "tím, ktorý drží spolu a dáva si spätnú väzbu",
                "podporu a rast: školenia, vzdelávania, sprevádzanie v učení",
                "pracovný notebook a kvalitné kancelárske + digitálne vybavenie",
                "priestor tvoriť: byť pri vzniku nového konceptu školy a posúvať stredoškolské vzdelávanie cez prax a projekty",
              ].map((item) => (
                <li key={item} className="pl-0.5">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="join-koho" className={contentCard}>
            <p className={eyebrow}>Profil</p>
            <h2 id="join-koho" className={h2Section}>
              Koho hľadáme
            </h2>
            <p className="m-0 mt-4 text-[14px] font-normal leading-relaxed text-brand-fg2 md:mt-5 md:text-[15px] md:leading-[1.58]">
              Ľudí, ktorí berú študentov vážne, vedia pracovať v tíme a chcú učiť
              tak, aby to malo zmysel aj mimo školy.
            </p>
          </section>

          <section aria-labelledby="join-vyber" className={contentCard}>
            <p className={eyebrow}>Postup</p>
            <h2 id="join-vyber" className={h2Section}>
              Ako prebieha výber
            </h2>
            <div className="mt-4 space-y-3 text-[14px] font-normal leading-relaxed text-brand-fg2 md:mt-5 md:text-[15px]">
              <p className="m-0">
                Vybraných uchádzačov pozveme na rozhovor.
              </p>
              <p className="m-0">
                V druhom kole ťa radi uvidíme aj učiť (ukážka hodiny / zadanie).
              </p>
            </div>
          </section>
        </div>
      </section>

      <section
        aria-labelledby="join-quiz"
        className="border-t border-[#dcc898]/45 pt-10 md:pt-12"
      >
        <div className={joinTeamMiniQuizShell}>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(160,120,70,0.09) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden
          />
          <div className="relative z-[1] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <header className="mx-auto max-w-2xl text-center">
              <h2
                id="join-quiz"
                className="font-heading m-0 text-[clamp(1.35rem,1rem+1.2vw,1.85rem)] font-bold leading-tight tracking-tight text-brand-fg1 md:text-[clamp(1.5rem,1.1rem+1.4vw,2rem)]"
              >
                Mini quiz —{" "}
                <span className="text-[#fdb913]">tri otázky</span>
              </h2>
              <p className="mx-auto mt-3 mb-0 max-w-lg text-[15px] font-normal leading-relaxed text-brand-fg2 md:mt-4 md:text-base">
                Tri krátke otázky — pomôžu ti zvážiť, či ti sedí spôsob práce u nás.
              </p>
            </header>
            <JoinTeamMiniQuiz />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="join-prihlaska"
        className={`rounded-[28px] border border-[#ebe6e0]/90 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(55,45,85,0.08)] sm:p-8 md:p-10`}
      >
        <p className={eyebrow}>Kontakt</p>
        <h2
          id="join-prihlaska"
          className="font-heading m-0 mt-2 text-[clamp(1.2rem,1.02rem+0.85vw,1.5rem)] font-bold leading-tight text-brand-fg1 md:mt-2.5"
        >
          Ako sa prihlásiť
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3 md:text-[11px]">
              Kam
            </p>
            <a
              href={MAILTO}
              className="mt-2 inline-block text-[16px] font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary md:text-[17px]"
            >
              {PRACA_EMAIL}
            </a>
          </div>
          <div>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-fg3 md:text-[11px]">
              Čo priložiť
            </p>
            <ul className="m-0 mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-brand-fg2 marker:text-brand-primary/45 md:text-[16px]">
              <li className="pl-0.5">motivačný list</li>
              <li className="pl-0.5">životopis</li>
            </ul>
          </div>
        </div>

        <a
          href={MAILTO}
          className="btn-primary-site mt-8 inline-flex items-center justify-center px-8 py-3.5 text-[15px] md:mt-9 md:px-10 md:py-4 md:text-base"
        >
          Napísať na {PRACA_EMAIL}
        </a>
        <p className="m-0 mt-3 text-xs font-medium tracking-wide text-brand-fg3">
          <span className="text-brand-fg4">#ajjasomlyceum</span>
        </p>
      </section>

      <section
        aria-labelledby="join-pozicie-heading"
        className={`border-t ${borderSection} pt-10 md:pt-12`}
      >
        <p className={eyebrow}>Kariéra</p>
        <h2
          id="join-pozicie-heading"
          className="font-heading m-0 mt-2 text-lg font-bold leading-tight text-brand-fg1 md:text-xl"
        >
          Voľné pozície
        </h2>
        <p className="m-0 mt-3 max-w-2xl text-[15px] font-medium text-brand-fg2 md:mt-4 md:text-[16px]">
          Momentálne tu nemáme aktívny inzerát.
        </p>
        <p className="m-0 mt-2 max-w-2xl text-[14px] leading-relaxed text-brand-fg3 md:text-[15px]">
          Tento priestor je pripravený na nové otvorené role — ako len budú,
          zobrazia sa tu prehľadne a jasne.
        </p>
        <p className="m-0 mt-5 max-w-2xl rounded-xl border border-[#e8e4ee]/90 bg-[#faf8fc]/80 px-4 py-3 text-[13px] leading-relaxed text-brand-fg2 md:mt-6 md:text-[14px]">
          Žiadne otvorené pozície zatiaľ neevidujeme. Skús sa pozrieť neskôr
          alebo nám napíš na{" "}
          <a
            href={MAILTO}
            className="font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          >
            {PRACA_EMAIL}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
