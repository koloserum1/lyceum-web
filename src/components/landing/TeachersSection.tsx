"use client";

import { useCallback, useEffect, useState } from "react";
import type { TeacherReference } from "@/content/teacherReferences";

function TeacherPhoto({
  name,
  imageSrc,
  photoKey,
}: {
  name: string;
  imageSrc: string | null;
  /** Pri zmene učiteľa resetuje stav chyby načítania obrázka */
  photoKey: string;
}) {
  const initial = name.trim().charAt(0) || "?";
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setLoadError(false);
  }, [photoKey]);

  const showImage = Boolean(imageSrc) && !loadError;

  return (
    <div
      className="relative z-0 w-full overflow-hidden rounded-[20px] bg-brand-bg2 ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(27,22,36,0.2)] transition-shadow duration-300 group-hover:shadow-[0_16px_48px_-18px_rgba(27,22,36,0.25)]"
    >
      <div className="relative aspect-[3/4] w-full">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element -- lokálne JPEG z public; next/image + Sharp často zlyhá pri niektorých exportoch
          <img
            src={imageSrc!}
            alt={`Portrét — ${name}`}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
            onError={() => setLoadError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-brand-bg2 via-brand-bg2 to-brand-primary/[0.18]
              px-4 text-center"
            aria-hidden
          >
            <span className="font-heading text-[clamp(2.5rem,12vw,4rem)] font-bold leading-none text-brand-fg1/[0.22]">
              {initial}
            </span>
            <span className="mt-3 max-w-[12rem] text-[11px] font-medium uppercase tracking-[0.12em] text-brand-fg3">
              {imageSrc ? "Foto sa nenašlo — skontroluj názov súboru" : "Foto doplníme"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

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

function ChevronRight({ className }: { className?: string }) {
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
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

type Props = {
  items: readonly TeacherReference[];
};

export function TeachersSection({ items }: Props) {
  const [index, setIndex] = useState(0);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionOk(!mq.matches);
    const fn = () => setMotionOk(!mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  const count = items.length;
  const safeIndex = ((index % count) + count) % count;
  const current = items[safeIndex];

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta;
        return ((next % count) + count) % count;
      });
    },
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (count === 0) return null;

  return (
    <div className="relative">
      <div
        className={`flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10 lg:gap-12 ${
          motionOk ? "transition-[opacity] duration-300 ease-out" : ""
        }`}
      >
        {/* Portrét + žltý štítok s menom (ako pri videách so študentmi) */}
        <div className="relative isolate mx-auto w-full max-w-[min(78vw,280px)] shrink-0 pt-7 pr-5 sm:max-w-[min(78vw,300px)] sm:pt-8 sm:pr-6 md:mx-0">
          <div className="group">
            <TeacherPhoto
              name={current.name}
              imageSrc={current.imageSrc}
              photoKey={current.id}
            />
          </div>
          <div
            className="pointer-events-none absolute top-0 right-0 z-50 origin-bottom-left translate-x-[26%] -translate-y-[11%] rotate-[9deg] rounded-full bg-brand-secondary px-3.5 py-1.5 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] sm:translate-x-[22%] sm:-translate-y-[9%] sm:rotate-[8deg] sm:px-4 sm:py-2"
            aria-hidden
          >
            <span className="font-heading block max-w-[12rem] text-center text-[0.9rem] font-bold leading-none tracking-tight text-brand-fg1 sm:max-w-[13rem] sm:text-[0.95rem]">
              {current.name}
            </span>
          </div>
          <p className="mt-4 mb-0 text-center text-[11px] font-bold uppercase tracking-wide text-brand-primary md:text-left">
            {current.role}
          </p>
        </div>

        {/* Text + šípky */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-3 md:gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Predchádzajúca referencia"
              className="order-2 flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-black/[0.08] bg-white/90 text-brand-fg1 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-white/80 backdrop-blur-sm transition-colors hover:border-black/15 hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 sm:order-1 sm:self-stretch sm:rounded-[20px]"
            >
              <ChevronLeft className="h-5 w-5 opacity-80" />
            </button>

            <div
              className="order-1 min-h-0 flex-1 rounded-[20px] border border-black/[0.06] bg-brand-bg2/60 p-6 shadow-[0_12px_40px_-24px_rgba(27,22,36,0.18)] ring-1 ring-white/80 backdrop-blur-[2px] sm:order-2 md:p-8"
              role="region"
              aria-live="polite"
              aria-label={`Referencia — ${current.name}`}
            >
              <p
                key={current.id}
                className={`m-0 text-[14px] font-normal leading-relaxed text-brand-fg1 sm:text-[15px] md:text-[16px] md:leading-[1.65] ${
                  motionOk ? "animate-teachers-quote-in" : ""
                }`}
              >
                {current.quote}
              </p>
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Ďalšia referencia"
              className="order-3 flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-black/[0.08] bg-white/90 text-brand-fg1 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-white/80 backdrop-blur-sm transition-colors hover:border-black/15 hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 sm:order-3 sm:self-stretch sm:rounded-[20px]"
            >
              <ChevronRight className="h-5 w-5 opacity-80" />
            </button>
          </div>

          {/* Bodky — rovnaká veľkosť, aktívna tmavšia (bez rozšírenia / progress) */}
          <div
            className="mt-2 flex justify-center gap-2.5 px-2 sm:mt-8"
            role="tablist"
            aria-label="Výber referencie učiteľa"
          >
            {items.map((item, i) => {
              const active = i === safeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`${item.name}${active ? " (aktuálne)" : ""}`}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2.5 w-2.5 shrink-0 rounded-full transition-[background-color,transform] duration-200 ease-out",
                    active
                      ? "scale-100 bg-brand-fg1 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                      : "bg-black/[0.14] hover:bg-black/25",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
