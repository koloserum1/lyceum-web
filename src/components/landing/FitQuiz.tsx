"use client";

import { useMemo, useState } from "react";
import { fitQuizQuestions } from "@/content/lyceum";

type Answer = "yes" | "unsure" | "no" | null;

export function FitQuiz() {
  const [answers, setAnswers] = useState<Answer[]>(
    () => fitQuizQuestions.map(() => null),
  );

  const yesCount = useMemo(
    () => answers.filter((a) => a === "yes").length,
    [answers],
  );

  const setAnswer = (index: number, value: Answer) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const answered = answers.every((a) => a !== null);

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-brand-bg2/80 p-5 md:p-8">
      <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 md:gap-x-8 md:gap-y-5">
        {fitQuizQuestions.map((q, i) => (
          <li
            key={i}
            className="border-b border-black/[0.06] pb-4 last:border-0 md:border-0 md:pb-0"
          >
            <p className="m-0 mb-2 text-[13px] font-bold leading-snug text-brand-fg1">
              {q}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  ["yes", "Áno"],
                  ["unsure", "Neviem"],
                  ["no", "Nie"],
                ] as const
              ).map(([val, label]) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAnswer(i, val)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                    answers[i] === val
                      ? "bg-brand-fg1 text-brand-bg1"
                      : "bg-brand-bg1 text-brand-fg1 ring-1 ring-black/10 hover:ring-brand-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {answered ? (
        <div className="mt-6 rounded-xl bg-brand-tertiary/50 px-5 py-4 text-brand-fg1">
          <p className="m-0 font-heading text-base">
            „Áno“: <strong>{yesCount}</strong> / {fitQuizQuestions.length}
          </p>
          <p className="mt-2 mb-0 text-xs font-normal leading-relaxed text-brand-fg3">
            Čím viac áno, tým viac sedíš na projektovú školu. Pri váhaní si poznač
            otázky na DOD.
          </p>
        </div>
      ) : (
        <p className="mt-4 mb-0 text-xs text-brand-fg3">
          Vyplň všetky riadky pre výsledok.
        </p>
      )}
    </div>
  );
}
