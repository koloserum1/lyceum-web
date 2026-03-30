"use client";

import { useCallback, useId, useState } from "react";

const QUESTIONS = [
  "Viem povedať jednou vetou, prečo učím — bez klišé?",
  "Keď študentovi niečo nejde, viem držať náročnosť aj bezpečie naraz?",
  "Viem fungovať v tíme aj vtedy, keď to nie je podľa mňa — s rešpektom a spätnou väzbou?",
] as const;

const LIME_NEXT = "#C5F095";

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
    <div className="relative mx-auto max-w-[520px]">
      {/* Jemné „druhá karta“ pod spodkom */}
      <div
        className="pointer-events-none absolute -bottom-1 left-3 right-3 top-4 rounded-[26px] bg-white/70 shadow-sm md:left-4 md:right-4 md:top-5 md:rounded-[30px]"
        aria-hidden
      />

      <div
        className="relative overflow-hidden rounded-[22px] bg-white p-6 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06] md:rounded-[26px] md:p-9 md:pb-8"
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
                      i <= step ? "bg-[#1d1d1f]" : "bg-black/[0.12]"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={reset}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-[#f5f5f5] text-lg leading-none text-[#6e6e73] transition hover:bg-[#ebebeb] hover:text-brand-fg1"
                aria-label="Začať odznova"
              >
                ×
              </button>
            </div>

            <p className="m-0 mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#888888] md:mt-10">
              Otázka {String(step + 1).padStart(2, "0")} / {QUESTIONS.length}
            </p>

            <h4 className="font-heading m-0 mt-2 text-[clamp(1.2rem,1rem+1.2vw,1.45rem)] font-bold leading-snug tracking-tight text-[#1d1d1f] md:mt-3 md:text-[1.4rem]">
              {QUESTIONS[step]}
            </h4>

            <p className="m-0 mt-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#888888]">
              Vyberte len jednu možnosť
            </p>

            <div
              className="mt-3 space-y-1"
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
                        ? "border-[#1d1d1f]/25 bg-[#fafafa] ring-1 ring-[#1d1d1f]/10"
                        : "border-transparent hover:bg-[#f7f7f7]"
                    }`}
                  >
                    <span
                      className={`flex h-[22px] w-[22px] shrink-0 rounded-full border-2 ${
                        selected
                          ? "border-[#1d1d1f] bg-[#1d1d1f]"
                          : "border-[#c4c4c4] bg-white"
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
                    <span className="text-[15px] font-medium text-[#1d1d1f] md:text-base">
                      {label}
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-end gap-4 border-t border-black/[0.06] pt-6 md:mt-10 md:pt-7">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="text-sm font-semibold text-[#1d1d1f] underline decoration-black/25 underline-offset-4 transition enabled:hover:decoration-black/60 disabled:cursor-not-allowed disabled:opacity-35 disabled:no-underline"
              >
                Späť
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={currentAnswer === null}
                className="min-w-[7.5rem] rounded-xl px-6 py-2.5 text-sm font-bold text-[#1d1d1f] shadow-sm transition enabled:hover:brightness-[0.97] disabled:cursor-not-allowed disabled:opacity-45"
                style={{ backgroundColor: LIME_NEXT }}
              >
                {isLast ? "Hotovo" : "Ďalej"}
              </button>
            </div>
          </>
        ) : (
          <div className="pt-2">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={reset}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-[#f5f5f5] text-lg leading-none text-[#6e6e73] transition hover:bg-[#ebebeb] hover:text-brand-fg1"
                aria-label="Zavrieť a začať znova"
              >
                ×
              </button>
            </div>
            <p className="m-0 mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#888888]">
              Hotovo
            </p>
            <p className="font-heading m-0 mt-3 text-center text-[clamp(1.15rem,1rem+1vw,1.35rem)] font-bold leading-snug text-[#1d1d1f]">
              Ďakujeme za úprimné odpovede
            </p>
            <p className="m-0 mt-3 text-center text-sm leading-relaxed text-[#6e6e73]">
              Odpovede sú len pre teba — pomôžu ti zvážiť, či ti sedí kultúra
              Lýcea. Ak chceš pokračovať, pozri sekciu{" "}
              <span className="font-medium text-[#1d1d1f]">Ako sa prihlásiť</span>{" "}
              nižšie.
            </p>
            <div className="mt-8 flex justify-center border-t border-black/[0.06] pt-6">
              <button
                type="button"
                onClick={reset}
                className="rounded-xl px-6 py-2.5 text-sm font-bold text-[#1d1d1f] transition hover:brightness-[0.97]"
                style={{ backgroundColor: LIME_NEXT }}
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
