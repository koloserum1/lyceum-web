"use client";

import { useCallback, useId, useState } from "react";

const QUESTIONS = [
  "Viem povedať jednou vetou, prečo učím — bez klišé?",
  "Keď študentovi niečo nejde, viem držať náročnosť aj bezpečie naraz?",
  "Viem fungovať v tíme aj vtedy, keď to nie je podľa mňa — s rešpektom a spätnou väzbou?",
] as const;

export function JoinTeamMiniQuiz() {
  const groupId = useId();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(null | "ano" | "nie")[]>([
    null,
    null,
    null,
  ]);
  const [finished, setFinished] = useState(false);

  const reset = useCallback(() => {
    setStep(0);
    setAnswers([null, null, null]);
    setFinished(false);
  }, []);

  const currentAnswer = answers[step];
  const isLast = step === QUESTIONS.length - 1;

  const setAnswer = (value: "ano" | "nie") => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = value;
      return next;
    });
  };

  const goNext = () => {
    if (currentAnswer === null) return;
    if (isLast) {
      setFinished(true);
      return;
    }
    setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step <= 0) return;
    setStep((s) => s - 1);
  };

  return (
    <div className="relative w-full max-w-[520px] md:max-w-none lg:max-w-[560px]">
      <div
        className="relative overflow-hidden rounded-xl bg-white p-5 shadow-[0_10px_36px_-22px_rgba(65,52,92,0.14)] sm:rounded-[1.1rem] sm:p-6 md:p-7"
        role="region"
        aria-label="Mini quiz — tri otázky"
      >
        {!finished ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <div
                className="flex flex-1 gap-1.5 pt-0.5"
                role="progressbar"
                aria-valuenow={step + 1}
                aria-valuemin={1}
                aria-valuemax={QUESTIONS.length}
                aria-label={`Otázka ${step + 1} z ${QUESTIONS.length}`}
              >
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i <= step ? "bg-brand-primary/55" : "bg-[#e4dcf0]"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={reset}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e4dcf0] bg-[#faf8fc] text-lg leading-none text-brand-fg3 transition hover:border-brand-primary/35 hover:bg-white hover:text-brand-fg1"
                aria-label="Začať odznova"
              >
                ×
              </button>
            </div>

            <p className="m-0 mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3 md:mt-8">
              Otázka {String(step + 1).padStart(2, "0")} / {QUESTIONS.length}
            </p>

            <h3 className="font-heading m-0 mt-2 text-[clamp(1.12rem,1rem+1vw,1.38rem)] font-bold leading-snug tracking-tight text-[#342c44] md:mt-2.5">
              {QUESTIONS[step]}
            </h3>

            <p className="m-0 mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-fg3 md:mt-6">
              Vyberte len jednu možnosť
            </p>

            <div
              className="mt-2.5 space-y-1"
              role="radiogroup"
              aria-labelledby={`${groupId}-legend`}
            >
              <span id={`${groupId}-legend`} className="sr-only">
                Odpoveď na otázku {step + 1}
              </span>
              {(["ano", "nie"] as const).map((val) => {
                const label = val === "ano" ? "Áno" : "Nie";
                const selected = currentAnswer === val;
                return (
                  <label
                    key={val}
                    className={`flex cursor-pointer items-center gap-3.5 rounded-xl border px-4 py-3.5 transition md:px-5 md:py-4 ${
                      selected
                        ? "border-brand-primary/35 bg-[#f7f3fc] ring-1 ring-brand-primary/15"
                        : "border-transparent hover:bg-[#faf8fc]"
                    }`}
                  >
                    <span
                      className={`flex h-[22px] w-[22px] shrink-0 rounded-full border-2 ${
                        selected
                          ? "border-brand-primary bg-brand-primary"
                          : "border-[#d0c4e0] bg-white"
                      }`}
                      aria-hidden
                    >
                      {selected ? (
                        <span className="m-auto block h-2 w-2 rounded-full bg-white" />
                      ) : null}
                    </span>
                    <input
                      type="radio"
                      name={`quiz-${groupId}-${step}`}
                      value={val}
                      checked={selected}
                      onChange={() => setAnswer(val)}
                      className="sr-only"
                    />
                    <span className="text-[15px] font-medium text-[#342c44] md:text-base">
                      {label}
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-4 border-t border-[#ece6f2] pt-5 md:mt-8 md:pt-6">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="text-sm font-semibold text-brand-fg1 underline decoration-brand-primary/30 underline-offset-4 transition enabled:hover:decoration-brand-primary disabled:cursor-not-allowed disabled:opacity-35 disabled:no-underline"
              >
                Späť
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={currentAnswer === null}
                className="min-w-[7.5rem] rounded-full bg-[#fdb913] px-6 py-2.5 text-sm font-bold text-brand-fg1 shadow-[0_8px_24px_-12px_rgba(253,185,19,0.45)] transition enabled:hover:bg-[#f5b010] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {isLast ? "Hotovo" : "Ďalej"}
              </button>
            </div>
          </>
        ) : (
          <div className="pt-1">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={reset}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4dcf0] bg-[#faf8fc] text-lg leading-none text-brand-fg3 transition hover:border-brand-primary/35 hover:bg-white hover:text-brand-fg1"
                aria-label="Zavrieť a začať znova"
              >
                ×
              </button>
            </div>
            <p className="m-0 mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
              Hotovo
            </p>
            <p className="font-heading m-0 mt-2 text-center text-[clamp(1.08rem,1rem+0.8vw,1.32rem)] font-bold leading-snug text-[#342c44]">
              Ďakujeme za úprimné odpovede
            </p>
            <p className="m-0 mt-3 text-center text-sm leading-relaxed text-brand-fg2">
              Odpovede sú len pre teba — pomôžu ti zvážiť, či ti sedí kultúra
              Lýcea. Ak chceš pokračovať, pozri sekciu{" "}
              <span className="font-medium text-[#342c44]">Ako sa prihlásiť</span>{" "}
              nižšie.
            </p>
            <div className="mt-6 flex justify-center border-t border-[#ece6f2] pt-5">
              <button
                type="button"
                onClick={reset}
                className="rounded-full bg-[#fdb913] px-6 py-2.5 text-sm font-bold text-brand-fg1 shadow-[0_8px_24px_-12px_rgba(253,185,19,0.4)] transition hover:bg-[#f5b010]"
              >
                Zopakovať kvíz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
