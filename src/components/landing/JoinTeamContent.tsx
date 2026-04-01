import { JoinTeamMiniQuiz } from "@/components/landing/JoinTeamMiniQuiz";

const colTitle =
  "font-heading m-0 text-[1.02rem] font-bold leading-tight tracking-tight text-[#342c44] md:text-[1.08rem]";

const accentBar = "mb-3 h-0.5 w-9 rounded-full bg-[#fdb913]/85";

const PRACA_EMAIL = "praca@lyceum.sk";
const MAILTO = `mailto:${PRACA_EMAIL}?subject=${encodeURIComponent("Príchod do tímu Lýcea")}`;

export function JoinTeamContent() {
  return (
    <div className="flex flex-col gap-0">
      {/* Tri stĺpce — editoriál, bez kariet */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#e4dcf0] lg:gap-0">
        <section
          aria-labelledby="join-co-ponukame"
          className="md:pr-8 lg:pr-10"
        >
          <div className={accentBar} aria-hidden />
          <h2 id="join-co-ponukame" className={colTitle}>
            Čo ponúkame
          </h2>
          <ul className="m-0 mt-4 list-none space-y-2.5 p-0 text-[14px] leading-relaxed text-brand-fg1 md:mt-5 md:text-[15px] md:leading-[1.55]">
            {[
              "tím, ktorý drží spolu a dáva si spätnú väzbu",
              "podporu a rast: školenia, vzdelávania, sprevádzanie v učení",
              "pracovný notebook a kvalitné kancelárske + digitálne vybavenie",
              "priestor tvoriť: byť pri vzniku nového konceptu školy a posúvať stredoškolské vzdelávanie cez prax a projekty",
            ].map((item) => (
              <li key={item} className="pl-0">
                <span className="text-brand-fg3">— </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="join-koho"
          className="border-t border-[#e4dcf0] pt-10 md:border-t-0 md:px-8 md:pt-0 lg:px-10"
        >
          <div className={accentBar} aria-hidden />
          <h2 id="join-koho" className={colTitle}>
            Koho hľadáme
          </h2>
          <p className="m-0 mt-4 text-[14px] font-normal leading-relaxed text-brand-fg1 md:mt-5 md:text-[15px] md:leading-[1.58]">
            Ľudí, ktorí berú študentov vážne, vedia pracovať v tíme a chcú učiť
            tak, aby to malo zmysel aj mimo školy.
          </p>
        </section>

        <section aria-labelledby="join-vyber" className="border-t border-[#e4dcf0] pt-10 md:border-t-0 md:pl-8 md:pt-0 lg:pl-10">
          <div className={accentBar} aria-hidden />
          <h2 id="join-vyber" className={colTitle}>
            Ako prebieha výber
          </h2>
          <div className="mt-4 space-y-3 text-[14px] font-normal leading-relaxed text-brand-fg1 md:mt-5 md:text-[15px]">
            <p className="m-0">
              Vybraných uchádzačov pozveme na rozhovor.
            </p>
            <p className="m-0">
              V druhom kole ťa radi uvidíme aj učiť (ukážka hodiny / zadanie).
            </p>
          </div>
        </section>
      </div>

      {/* Mini quiz — jemne zvýraznená zóna, bez ťažkého obrysu */}
      <section
        aria-labelledby="join-quiz"
        className="mt-12 rounded-[1.2rem] bg-[#ede8f4]/45 px-4 py-7 sm:px-6 sm:py-8 md:mt-14 md:rounded-[1.3rem] md:px-8 md:py-8 lg:px-10 lg:py-9"
      >
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 id="join-quiz" className={colTitle}>
              Mini quiz
            </h2>
            <p className="m-0 mt-3 max-w-[26ch] text-[14px] leading-relaxed text-brand-fg2 md:mt-3.5 md:text-[15px]">
              Tri krátke otázky — pomôžu ti zvážiť, či ti sedí spôsob práce u nás.
            </p>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <JoinTeamMiniQuiz />
          </div>
        </div>
      </section>

      {/* Prihláška — praktický blok, delenie stĺpcov */}
      <section
        aria-labelledby="join-prihlaska"
        className="mt-12 border-t border-[#dcd2eb] pt-10 md:mt-14 md:pt-11"
      >
        <h2
          id="join-prihlaska"
          className="font-heading m-0 text-[clamp(1.15rem,1.02rem+0.75vw,1.42rem)] font-bold leading-tight text-[#342c44]"
        >
          Ako sa prihlásiť
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
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
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
              Čo priložiť
            </p>
            <ul className="m-0 mt-2 list-none space-y-1.5 p-0 text-[15px] leading-relaxed text-brand-fg1 md:text-[16px]">
              <li>
                <span className="text-brand-fg3">— </span>
                motivačný list
              </li>
              <li>
                <span className="text-brand-fg3">— </span>
                životopis
              </li>
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

      {/* Voľné pozície — druhoradé, ľahké */}
      <section
        aria-labelledby="join-pozicie-heading"
        className="mt-12 border-t border-[#e8e2ee] pt-9 md:mt-14 md:pt-10"
      >
        <h2
          id="join-pozicie-heading"
          className="font-heading m-0 text-lg font-bold leading-tight text-brand-fg3 md:text-xl"
        >
          Voľné pozície
        </h2>
        <p className="m-0 mt-2 max-w-2xl text-[15px] font-medium text-brand-fg2 md:text-[16px]">
          Momentálne tu nemáme aktívny inzerát.
        </p>
        <p className="m-0 mt-2 max-w-2xl text-[14px] leading-relaxed text-brand-fg3 md:text-[15px]">
          Tento priestor je pripravený na nové otvorené role — ako len budú,
          zobrazia sa tu prehľadne a jasne.
        </p>
        <p className="m-0 mt-5 max-w-2xl border-l-2 border-[#d4c8ea] pl-3.5 text-[13px] leading-relaxed text-brand-fg2 md:mt-6 md:text-[14px]">
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
