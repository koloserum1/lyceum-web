"use client";

import { useCallback, useId, useMemo, useState } from "react";

const QUESTIONS = [
  "Viem povedať jednou vetou, prečo učím – bez klišé?",
  "Keď študentovi niečo nejde, viem držať náročnosť aj bezpečie naraz?",
  "Viem fungovať v tíme aj vtedy, keď to nie je podľa mňa – s rešpektom a spätnou väzbou?",
] as const;

/** Rovnaká vnútorná karta ako VyskusajSiUlohyMiniQuiz (FitQuiz štýl). */
const questionCardClass =
  "group relative isolate overflow-visible rounded-[20px] border border-[#d8c498]/65 bg-[#faf5ee]/95 px-5 pb-6 pt-9 text-brand-fg1 shadow-[0_12px_40px_-24px_rgba(45,35,22,0.14)] ring-1 ring-[#fff8f0]/90 backdrop-blur-[2px] sm:px-8 sm:pb-8 sm:pt-10";

const optionBase =
  "flex-1 rounded-[14px] border px-4 py-3.5 text-center font-heading text-[0.95rem] font-bold tracking-tight transition-[background-color,border-color,box-shadow,transform] duration-200 sm:min-w-[7rem] sm:py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb913]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf5ee]";

const optionIdle =
  "border-black/[0.08] bg-white/90 text-brand-fg1 shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:border-black/15 hover:bg-black/[0.02]";

const optionSelected =
  "border-brand-fg1 bg-brand-fg1 text-brand-bg1 shadow-[0_1px_0_rgba(0,0,0,0.06)]";

const resultCardClass =
  "rounded-[20px] border border-[#d8c498]/65 bg-gradient-to-br from-[#fff8f0] via-[#faf5ee] to-[#fff3e0] p-8 text-center text-brand-fg1 shadow-[0_12px_40px_-24px_rgba(45,35,22,0.12)] ring-1 ring-[#fff8f0]/90 sm:p-10";

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function JoinTeamMiniQuiz() {
  const groupId = useId();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(null | "ano" | "nie")[]>([
    null,
    null,
    null,
  ]);
  const [finished, setFinished] = useState(false);

  const total = QUESTIONS.length;
  const currentAnswer = answers[step];

  const progressPct = useMemo(() => {
    if (finished) return 100;
    const answeredCount = step + (currentAnswer !== null ? 1 : 0);
    return (answeredCount / total) * 100;
  }, [finished, step, currentAnswer, total]);

  const reset = useCallback(() => {
    setStep(0);
    setAnswers([null, null, null]);
    setFinished(false);
  }, []);

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

  if (finished) {
    return (
      <div className="mx-auto mt-8 max-w-xl md:mt-10">
        <div className={resultCardClass} role="region" aria-labelledby={`${groupId}-done`}>
          <p
            id={`${groupId}-done`}
            className="font-heading m-0 text-[clamp(1.15rem,1rem+1vw,1.45rem)] font-bold leading-snug text-brand-fg1"
          >
            Ďakujeme za úprimné odpovede
          </p>
          <p className="m-0 mt-4 text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[16px]">
            Odpovede sú len pre teba; pomôžu ti zvážiť, či ti sedí kultúra Lýcea. Ak chceš
            pokračovať, pozri sekciu{" "}
            <span className="font-medium text-brand-fg1">Ako sa prihlásiť</span> nižšie.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <button
              type="button"
              onClick={reset}
              className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
            >
              Zopakovať kvíz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-xl md:mt-10">
      <div className="mb-6 flex items-center gap-3 sm:mb-8">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e8dcc8]/45">
          <div
            className="h-full rounded-full bg-[#fdb913] transition-[width] duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span className="shrink-0 font-heading text-[11px] font-bold tabular-nums uppercase tracking-[0.12em] text-[#8a7228]">
          {step + 1} / {total}
        </span>
      </div>

      <div
        className={questionCardClass}
        role="region"
        aria-label={`Otázka ${step + 1} z ${total}`}
      >
        <div
          className="pointer-events-none absolute top-0 right-0 z-10 origin-bottom-left translate-x-[22%] -translate-y-[32%] rotate-[9deg] rounded-full bg-[#fdb913] px-3.5 py-1.5 shadow-[0_3px_14px_-3px_rgba(45,35,22,0.2)] sm:translate-x-[20%] sm:-translate-y-[28%] sm:rotate-[8deg] sm:px-4 sm:py-2"
          aria-hidden
        >
          <span className="font-heading block max-w-[10rem] text-center text-[0.85rem] font-bold leading-none tracking-tight text-brand-fg1 sm:max-w-[11rem] sm:text-[0.95rem]">
            Otázka {step + 1}
          </span>
        </div>

        <p className="m-0 mt-1 text-[15px] font-semibold leading-relaxed text-brand-fg1 md:mt-0 md:text-[16px] md:leading-[1.55]">
          {QUESTIONS[step]}
        </p>

        <p className="m-0 mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-fg3 md:mt-6">
          Vyberte len jednu možnosť
        </p>

        <div
          className="mt-2.5 flex flex-col gap-2.5 sm:mt-3 sm:flex-row sm:flex-wrap sm:gap-3"
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
              <button
                key={val}
                type="button"
                onClick={() => setAnswer(val)}
                className={`${optionBase} ${selected ? optionSelected : optionIdle}`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#dcc898]/45 pt-5 md:mt-8 md:pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white/90 px-3 py-2 text-xs font-bold text-brand-fg1 shadow-sm ring-1 ring-white/80 transition-colors hover:bg-black/[0.03] disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft className="h-4 w-4" />
            Späť
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={currentAnswer === null}
            className="btn-primary-site min-w-[7.5rem] justify-center px-8 py-3.5 text-[15px] disabled:cursor-not-allowed disabled:opacity-45"
          >
            {isLast ? "Hotovo" : "Ďalej"}
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2 px-2 sm:mt-10" aria-hidden>
        {QUESTIONS.map((_, i) => {
          const done = i < step || (i === step && currentAnswer !== null);
          const current = i === step;
          return (
            <div
              key={i}
              className={[
                "h-2.5 shrink-0 rounded-full transition-[background-color,width] duration-200",
                current
                  ? "w-8 bg-[#2a2218] shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                  : done
                    ? "w-2.5 bg-[#c4a050]"
                    : "w-2.5 bg-[#d8c8b0]",
              ].join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}
