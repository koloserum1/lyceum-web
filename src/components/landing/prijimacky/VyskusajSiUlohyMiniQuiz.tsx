"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  getMiniQuizResult,
  miniQuizQuestions,
  type MiniQuizQuestion,
  type QuizOptionKey,
} from "@/data/vyskusaj-si-ulohy-mini-quiz";

const cardClass =
  "rounded-[1.35rem] border border-[#e8e2f4]/75 bg-gradient-to-b from-white to-[#faf8ff] px-5 py-6 shadow-[0_16px_48px_-20px_rgba(95,78,130,0.14)] ring-1 ring-black/[0.04] sm:rounded-[1.5rem] sm:px-7 sm:py-8 md:px-8 md:py-9";

const optionBase =
  "w-full rounded-xl text-left text-[15px] leading-snug transition-[border-color,background-color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8ff] disabled:cursor-default md:text-[15px]";

const optionIdle =
  "border border-[#e4deef]/85 bg-white/95 text-brand-fg1 hover:border-brand-primary/35 hover:bg-[#faf9ff] hover:shadow-[0_6px_20px_-12px_rgba(120,95,170,0.12)]";

/** Správna odpoveď — zreteľná zelená, tmavý text. */
const optionCorrectState =
  "border-2 border-emerald-600/85 bg-emerald-50 text-brand-fg1 shadow-[0_4px_20px_-10px_rgba(5,95,70,0.2)]";

/** Nesprávne zvolená — zreteľná ružovočervená, tmavý text. */
const optionWrongPickedState =
  "border-2 border-rose-500/88 bg-rose-50 text-brand-fg1 shadow-[0_4px_20px_-10px_rgba(180,50,70,0.12)]";

/** Po chybe: správna možnosť zvýraznená zelenou. */
const optionCorrectRevealState =
  "border-2 border-emerald-600/85 bg-emerald-50 text-brand-fg1 shadow-[0_4px_20px_-10px_rgba(5,95,70,0.18)]";

/** Ostatné možnosti po zamknutí — stlmené. */
const optionFadedState =
  "border border-[#e4e0eb]/88 bg-[#f7f7f9]/95 text-brand-fg2 opacity-72";

const explainBoxClass =
  "rounded-[1rem] border border-[#ddd6e8]/65 bg-[#f4f2f8] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] md:rounded-[1.1rem] md:px-5 md:py-[1.125rem]";

const explainTitleClass =
  "font-heading m-0 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-fg3 md:text-[13px]";

export function VyskusajSiUlohyMiniQuiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [picked, setPicked] = useState<QuizOptionKey | null>(null);
  const [locked, setLocked] = useState(false);

  const continueRef = useRef<HTMLButtonElement>(null);
  const resultTitleId = useId();
  const total = miniQuizQuestions.length;
  const q = miniQuizQuestions[index] as MiniQuizQuestion | undefined;

  const pick = useCallback(
    (key: QuizOptionKey) => {
      if (locked) return;
      const currentQ = miniQuizQuestions[index];
      if (!currentQ) return;
      setLocked(true);
      setPicked(key);
      if (key === currentQ.correctKey) {
        setScore((s) => s + 1);
      }
    },
    [locked, index],
  );

  useEffect(() => {
    if (!locked) return;
    continueRef.current?.focus({ preventScroll: true });
  }, [locked]);

  const goNext = useCallback(() => {
    if (index >= total - 1) {
      setPhase("result");
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
    setLocked(false);
  }, [index, total]);

  const restart = useCallback(() => {
    setIndex(0);
    setScore(0);
    setPhase("quiz");
    setPicked(null);
    setLocked(false);
  }, []);

  if (phase === "result") {
    const block = getMiniQuizResult(score);
    return (
      <div className={cardClass} role="region" aria-labelledby={resultTitleId}>
        <p
          id={resultTitleId}
          className="font-heading m-0 text-center text-[clamp(1.2rem,1.05rem+0.9vw,1.55rem)] font-bold leading-tight tracking-tight text-brand-fg1"
        >
          {block.title}
        </p>
        <p className="m-0 mt-4 text-center text-[15px] leading-relaxed text-brand-fg2 md:mt-5 md:text-[16px]">
          {block.body}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href={block.ctas[0].href}
            className="btn-primary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
          >
            {block.ctas[0].label}
          </Link>
          <Link
            href={block.ctas[1].href}
            className="btn-secondary-site justify-center px-8 py-3.5 text-[15px] md:px-10"
          >
            {block.ctas[1].label}
          </Link>
        </div>
        <div className="mt-8 flex justify-center border-t border-black/[0.06] pt-6">
          <button
            type="button"
            onClick={restart}
            className="rounded-sm text-[14px] font-medium text-brand-fg3 underline decoration-brand-fg3/35 underline-offset-[5px] transition-colors hover:text-brand-fg2 hover:decoration-brand-fg2/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/35 focus-visible:ring-offset-2"
          >
            Skúsiť znova
          </button>
        </div>
      </div>
    );
  }

  if (!q) return null;

  const correctKey = q.correctKey;
  const isCorrect = picked === correctKey;

  function optionClass(key: QuizOptionKey, answerKey: QuizOptionKey): string {
    const pad = "px-4 py-3.5 md:px-5 md:py-4";
    if (!locked) {
      return `${optionBase} ${optionIdle} ${pad}`;
    }
    const isThis = picked === key;
    const isAnswer = key === answerKey;

    if (isCorrect && isThis) {
      return `${optionBase} ${optionCorrectState} ${pad}`;
    }
    if (!isCorrect) {
      if (isThis) {
        return `${optionBase} ${optionWrongPickedState} ${pad}`;
      }
      if (isAnswer) {
        return `${optionBase} ${optionCorrectRevealState} ${pad}`;
      }
    }
    return `${optionBase} ${optionFadedState} ${pad}`;
  }

  return (
    <div
      className={cardClass}
      role="region"
      aria-label={`Otázka ${index + 1} z ${total}`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <p
          className="m-0 text-[13px] font-medium tabular-nums text-brand-fg3 md:text-[14px]"
          aria-hidden
        >
          {index + 1} / {total}
        </p>
      </div>

      <div className="mt-5 md:mt-6">
        <p className="m-0 text-[15px] font-semibold leading-relaxed text-brand-fg1 md:text-[16px] md:leading-[1.55]">
          {q.lead}
        </p>
        {q.bullets && q.bullets.length > 0 ? (
          <ul className="m-0 mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
            {q.bullets.map((line) => (
              <li key={line} className="pl-0.5">
                {line}
              </li>
            ))}
          </ul>
        ) : null}
        {q.afterList ? (
          <p className="m-0 mt-4 text-[15px] font-semibold leading-relaxed text-brand-fg1 md:mt-5 md:text-[16px]">
            {q.afterList}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-2.5 md:mt-7 md:gap-3" role="group" aria-label="Možnosti odpovede">
        {q.options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            disabled={locked}
            onClick={() => pick(opt.key)}
            className={optionClass(opt.key, correctKey)}
          >
            <span className="font-semibold">{opt.key}.</span>{" "}
            <span className="font-normal">{opt.text}</span>
          </button>
        ))}
      </div>

      {locked ? (
        <div className="mt-6 space-y-6 md:mt-7 md:space-y-7" aria-live="polite">
          <div className={explainBoxClass}>
            <p className={explainTitleClass}>Vysvetlenie</p>
            {isCorrect ? (
              <p className="m-0 mt-2.5 text-[14px] font-normal leading-relaxed text-brand-fg1 md:mt-3 md:text-[15px] md:leading-[1.55]">
                {q.feedbackCorrect}
              </p>
            ) : (
              <>
                <p className="m-0 mt-2.5 text-[14px] font-normal leading-relaxed text-brand-fg1 md:mt-3 md:text-[15px] md:leading-[1.55]">
                  {q.feedbackWrongExplain}
                </p>
                <p className="m-0 mt-4 border-t border-black/[0.06] pt-4 text-[13px] font-normal leading-relaxed text-brand-fg3 md:mt-5 md:pt-4 md:text-[14px] md:leading-[1.55]">
                  {q.feedbackWrongEncourage}
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col items-stretch sm:items-start">
            <button
              ref={continueRef}
              type="button"
              onClick={goNext}
              className="btn-primary-site w-full justify-center px-8 py-3.5 text-[15px] sm:w-auto"
            >
              Pokračovať
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
