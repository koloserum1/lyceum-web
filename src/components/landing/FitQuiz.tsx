"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { fitQuizQuestions } from "@/content/lyceum";

type Answer = "yes" | "unsure" | "no" | null;

const OPTIONS = [
  { value: "yes" as const, label: "Áno" },
  { value: "unsure" as const, label: "Neviem" },
  { value: "no" as const, label: "Nie" },
];

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

function resultBand(yes: number, total: number): { title: string; body: string } {
  const ratio = yes / total;
  if (ratio >= 0.85) {
    return {
      title: "Vyzerá to, že ti Lýceum môže sadnúť",
      body:
        "Veľa „áno“ znamená, že projekty, feedback a tímová práca ti nie sú cudzie – presne na tom staviame deň čo deň.",
    };
  }
  if (ratio >= 0.6) {
    return {
      title: "Solídna zhoda",
      body:
        "Smeruješ správnym smerom. Neváhaj si poznač otázky, kde si dal „neviem“ alebo „nie“, a príď ich prebrať na DOD.",
    };
  }
  if (ratio >= 0.35) {
    return {
      title: "Je čo prediskutovať",
      body:
        "Nižší počet „áno“ nemusí znamenať zlú školu; skôr ide o iné očakávania. Otvorená debata na dňoch otvorených dverí ti pomôže zistiť, či je Lýceum pre teba.",
    };
  }
  return {
    title: "Skús ešte porozmýšľať",
    body:
      "Projektová škola nie je pre každého, a to je v poriadku. Ak ťa zaujíma len časť toho, čo robíme, napíš nám alebo príď na DOD.",
  };
}

export function FitQuiz() {
  const total = fitQuizQuestions.length;
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(() =>
    fitQuizQuestions.map(() => null),
  );
  const [showResult, setShowResult] = useState(false);
  const [motionOk, setMotionOk] = useState(true);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionOk(!mq.matches);
    const fn = () => setMotionOk(!mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const yesCount = useMemo(
    () => answers.filter((a) => a === "yes").length,
    [answers],
  );

  const setAnswer = useCallback((i: number, value: Answer) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = value;
      return next;
    });
  }, []);

  const goBack = useCallback(() => {
    if (showResult) {
      setShowResult(false);
      setIdx(total - 1);
      return;
    }
    if (idx > 0) setIdx((i) => i - 1);
  }, [idx, showResult, total]);

  const onPick = useCallback(
    (value: Answer) => {
      setAnswer(idx, value);
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      const delay = motionOk ? 420 : 0;
      advanceTimer.current = setTimeout(() => {
        advanceTimer.current = null;
        if (idx < total - 1) {
          setIdx((i) => i + 1);
        } else {
          setShowResult(true);
        }
      }, delay);
    },
    [idx, motionOk, setAnswer, total],
  );

  const reset = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setAnswers(fitQuizQuestions.map(() => null));
    setIdx(0);
    setShowResult(false);
  }, []);

  const progressPct = useMemo(() => {
    const done = answers.filter((a) => a !== null).length;
    return (done / total) * 100;
  }, [answers, total]);

  /** Skok len na otázku, kde sú už vyplnené všetky predchádzajúce. */
  const canNavigateTo = useCallback(
    (i: number) => answers.slice(0, i).every((a) => a !== null),
    [answers],
  );

  const band = resultBand(yesCount, total);

  return (
    <div className="relative isolate overflow-hidden rounded-[24px] bg-gradient-to-b from-brand-bg1 via-brand-bg2/50 to-brand-bg2/90 ring-1 ring-black/[0.06] shadow-[0_16px_48px_-28px_rgba(27,22,36,0.22)]">
      {/* Jemná „dot grid“ textúra ako v hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(29,29,31,0.07) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />
      <div className="relative z-[1] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.5vw,2.85rem)] leading-[1.1] tracking-tight text-brand-fg1">
            Sadlo by ti Lýceum?
          </h2>
          <p className="mx-auto mt-3 mb-0 max-w-lg text-[15px] font-normal leading-relaxed text-brand-fg3 md:mt-4 md:text-base">
            Odpovedz na desať otázok o projektoch, spolupráci a spôsobe práce v škole – uvidíš,
            či ti náš prístup sedí (nie psychotest).
          </p>
        </header>

        {!showResult ? (
          <div className="mx-auto mt-8 max-w-xl md:mt-10">
            {/* Progress */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
                <div
                  className="h-full rounded-full bg-brand-secondary transition-[width] duration-500 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <span className="shrink-0 font-heading text-[11px] font-bold tabular-nums uppercase tracking-[0.12em] text-brand-fg3">
                {idx + 1} / {total}
              </span>
            </div>

            <div
              className="group relative isolate overflow-visible rounded-[20px] border border-black/[0.06] bg-brand-bg1/85 px-5 pb-6 pt-14 shadow-[0_12px_40px_-24px_rgba(27,22,36,0.16)] ring-1 ring-white/80 backdrop-blur-[2px] sm:px-8 sm:pb-8 sm:pt-10 sm:pr-7"
              role="group"
              aria-live="polite"
              aria-label={`Otázka ${idx + 1} z ${total}`}
            >
              <div
                className="pointer-events-none absolute top-0 right-0 z-10 origin-bottom-left translate-x-[22%] -translate-y-[32%] rotate-[9deg] rounded-full bg-brand-secondary px-3.5 py-1.5 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] sm:translate-x-[20%] sm:-translate-y-[28%] sm:rotate-[8deg] sm:px-4 sm:py-2"
              >
                <span className="font-heading block max-w-[10rem] text-center text-[0.85rem] font-bold leading-none tracking-tight text-brand-fg1 sm:max-w-[11rem] sm:text-[0.95rem]">
                  Otázka {idx + 1}
                </span>
              </div>

              <p
                key={idx}
                className={`m-0 max-w-[min(100%,36rem)] text-[clamp(1rem,0.95rem+0.5vw,1.2rem)] font-normal leading-snug text-brand-fg1 md:text-[1.25rem] md:leading-relaxed ${
                  motionOk ? "animate-fit-quiz-step-in" : ""
                }`}
              >
                {fitQuizQuestions[idx]}
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                {OPTIONS.map(({ value, label }) => {
                  const active = answers[idx] === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => onPick(value)}
                      className={[
                        "flex-1 touch-manipulation rounded-[14px] border px-4 py-3.5 text-center font-heading text-[0.95rem] font-bold tracking-tight transition-[background-color,border-color,box-shadow,transform] duration-200 sm:min-w-[7rem] sm:py-3",
                        active
                          ? "border-brand-fg1 bg-brand-fg1 text-brand-bg1 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                          : "border-black/[0.08] bg-white/90 text-brand-fg1 shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:border-black/15 hover:bg-black/[0.02]",
                      ].join(" ")}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 sm:mt-8">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={idx === 0}
                  className="inline-flex touch-manipulation items-center gap-1.5 rounded-full border border-black/[0.08] bg-white/90 px-3 py-2 text-xs font-bold text-brand-fg1 shadow-sm ring-1 ring-white/80 transition-colors hover:bg-black/[0.03] disabled:pointer-events-none disabled:opacity-35"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Späť
                </button>
              </div>
            </div>

            {/* Bodky ako pri učiteľoch / videách */}
            <div
              className="mt-8 flex justify-center gap-2 px-2 sm:mt-10"
              role="tablist"
              aria-label="Prehľad otázok"
            >
              {fitQuizQuestions.map((_, i) => {
                const done = answers[i] !== null;
                const current = i === idx;
                const allowed = canNavigateTo(i);
                return (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={current}
                    disabled={!allowed}
                    aria-label={`Otázka ${i + 1}${done ? " (zodpovedaná)" : ""}${current ? " (aktuálna)" : ""}`}
                    onClick={() => {
                      if (!allowed) return;
                      if (advanceTimer.current) clearTimeout(advanceTimer.current);
                      setIdx(i);
                    }}
                    className={[
                      "h-2.5 shrink-0 touch-manipulation rounded-full transition-[background-color,transform,width] duration-200",
                      !allowed
                        ? "w-2.5 cursor-not-allowed bg-black/[0.06] opacity-40"
                        : current
                          ? "w-8 bg-brand-fg1 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                          : done
                            ? "w-2.5 bg-brand-primary/70 hover:bg-brand-primary"
                            : "w-2.5 bg-black/[0.12] hover:bg-black/22",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div
            className={`mx-auto mt-10 max-w-xl md:mt-12 ${
              motionOk ? "animate-fit-quiz-step-in" : ""
            }`}
          >
            <div className="rounded-[20px] border border-black/[0.06] bg-gradient-to-br from-brand-tertiary/35 via-brand-bg1/95 to-brand-primary/[0.12] p-8 text-center shadow-[0_12px_40px_-24px_rgba(27,22,36,0.18)] ring-1 ring-white/90 sm:p-10">
              <p className="m-0 font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-brand-fg3">
                Tvoje „áno“
              </p>
              <p className="font-heading mt-2 mb-0 text-[clamp(2.5rem,6vw,3.75rem)] leading-none tracking-tight text-brand-fg1">
                {yesCount}
                <span className="text-brand-fg3">/{total}</span>
              </p>
              <h3 className="font-heading mt-6 mb-0 text-[clamp(1.15rem,1rem+1vw,1.45rem)] leading-snug text-brand-fg1">
                {band.title}
              </h3>
              <p className="mx-auto mt-3 mb-0 max-w-md text-[15px] font-normal leading-relaxed text-brand-fg3">
                {band.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
                <a href="#zaujemca" className="btn-primary-site justify-center">
                  Mám záujem o štúdium
                </a>
                <Link
                  href="/dod"
                  className="btn-secondary-site justify-center"
                >
                  Deň otvorených dverí
                </Link>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowResult(false);
                  setIdx(total - 1);
                }}
                className="mt-5 touch-manipulation text-sm font-normal text-brand-fg3 underline decoration-brand-fg4 underline-offset-4 transition-colors hover:text-brand-fg1"
              >
                Upraviť odpovede
              </button>
              <button
                type="button"
                onClick={reset}
                className="mt-3 touch-manipulation text-sm font-normal text-brand-fg3 underline decoration-brand-fg4 underline-offset-4 transition-colors hover:text-brand-fg1"
              >
                Zopakovať kvíz od začiatku
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
