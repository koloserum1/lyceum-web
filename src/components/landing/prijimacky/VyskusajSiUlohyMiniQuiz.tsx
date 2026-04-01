"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  getMiniQuizResult,
  miniQuizQuestions,
  type MiniQuizQuestion,
  type QuizOptionKey,
} from "@/data/vyskusaj-si-ulohy-mini-quiz";

/**
 * Paleta akcentu (zhodná s CTA #fdb913): silný len na CTA / zvýraznenie,
 * stredný na okraje, slabý tint na pozadí — nie plná žltá plocha karty.
 */
const cardClass =
  "rounded-[1.35rem] border border-[#d8c498]/65 bg-[#faf5ee] px-5 py-6 text-brand-fg1 shadow-[0_20px_50px_-28px_rgba(45,35,22,0.1)] ring-1 ring-[#e5d8c4]/75 sm:rounded-[1.5rem] sm:px-7 sm:py-8 md:px-8 md:py-9";

const progressWrapClass =
  "inline-flex items-center gap-1.5 rounded-full border border-[#dcc898]/70 bg-[#fff3e0] px-3 py-1 tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]";

const progressCurrentClass = "text-[15px] font-bold text-[#fdb913] md:text-[16px]";
const progressTotalClass = "text-[13px] font-medium text-brand-fg3 md:text-[14px]";

const optionBase =
  "w-full rounded-xl text-left text-[15px] leading-snug transition-[border-color,background-color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb913]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf5ee] disabled:cursor-default md:text-[15px]";

const optionIdle =
  "border border-[#d8d2c8]/90 bg-[#fdfcfa] text-brand-fg1 hover:border-[#d8b868]/70 hover:bg-[#faf0e4] hover:shadow-[0_4px_18px_-12px_rgba(253,185,19,0.12)]";

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
  "border border-[#ddd8d0]/95 bg-[#f0ebe4]/98 text-brand-fg2 opacity-72";

const explainBoxClass =
  "rounded-[1rem] border-y border-r border-[#d8c8a8]/55 border-l-[3px] border-l-[#fdb913] bg-[#fff4e0] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] md:rounded-[1.1rem] md:px-5 md:py-[1.125rem]";

const explainTitleClass =
  "font-heading m-0 text-[12px] font-bold uppercase tracking-[0.1em] text-[#8a7228] md:text-[13px]";

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
        <div className="mt-8 flex justify-center border-t border-[#dcc898]/45 pt-6">
          <button
            type="button"
            onClick={restart}
            className="rounded-sm text-[14px] font-medium text-brand-fg2 underline decoration-[#c4a860]/55 underline-offset-[5px] transition-colors hover:text-brand-fg1 hover:decoration-[#fdb913]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb913]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf5ee]"
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
      <div className="flex items-center justify-between gap-3">
        <p className={progressWrapClass} aria-hidden>
          <span className={progressCurrentClass}>{index + 1}</span>
          <span className={progressTotalClass}> / {total}</span>
        </p>
      </div>

      <div className="mt-5 md:mt-6">
        <p className="m-0 text-[15px] font-semibold leading-relaxed text-brand-fg1 md:text-[16px] md:leading-[1.55]">
          {q.lead}
        </p>
        {q.bullets && q.bullets.length > 0 ? (
          <ul className="m-0 mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-brand-fg2 marker:text-[#c4a050] md:text-[15px]">
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
                <p className="m-0 mt-4 border-t border-[#dcc898]/45 pt-4 text-[13px] font-normal leading-relaxed text-brand-fg3 md:mt-5 md:pt-4 md:text-[14px] md:leading-[1.55]">
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
