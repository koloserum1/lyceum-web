"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  businessAcademyComparison,
  gymnasiumComparison,
  lyceumComparison,
  MAX_BAR_HOURS,
  schoolComparisonFootnote,
  schoolComparisonIntro,
  type AlternativeSchoolKey,
  type ComparisonBarRow,
} from "@/content/schoolComparison";

const EASE_BAR = "cubic-bezier(0.22, 1, 0.36, 1)";
const BAR_DURATION_MS = 780;
const STAGGER_MS = 52;

function barWidthPct(value: number | null): number {
  if (value === null) return 0;
  return Math.min(100, (value / MAX_BAR_HOURS) * 100);
}

function ComparisonBars({
  rows,
  animated,
  variant,
  startIndex,
}: {
  rows: readonly ComparisonBarRow[];
  animated: boolean;
  variant: "dark" | "light";
  startIndex: number;
}) {
  const track =
    variant === "dark" ? "bg-white/[0.1]" : "bg-black/[0.06]";
  const fill = "bg-[#e0c04a]";

  return (
    <div className="space-y-2.5 md:space-y-2">
      {rows.map((row, i) => {
        const pct = barWidthPct(row.barValue);
        const delay = `${(startIndex + i) * STAGGER_MS}ms`;
        const style: CSSProperties = {
          width: animated ? `${pct}%` : "0%",
          transitionProperty: "width",
          transitionDuration: `${BAR_DURATION_MS}ms`,
          transitionTimingFunction: EASE_BAR,
          transitionDelay: delay,
        };

        return (
          <div key={row.label}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <p
                className={`m-0 max-w-[min(100%,20rem)] text-[13px] leading-snug sm:text-[14px] ${
                  variant === "dark" ? "text-white/80" : "text-brand-fg1"
                }`}
              >
                {row.label}
              </p>
              <p
                className={`m-0 shrink-0 text-[13px] font-medium tabular-nums tracking-tight sm:text-right sm:text-[14px] ${
                  variant === "dark" ? "text-white/75" : "text-brand-fg1"
                }`}
              >
                {row.hoursDisplay}
              </p>
            </div>
            <div
              className={`mt-1.5 h-[5px] overflow-hidden rounded-full ${track}`}
              aria-hidden
            >
              <div className={`h-full min-w-0 rounded-full ${fill}`} style={style} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AlternativeSchoolToggle({
  value,
  onChange,
}: {
  value: AlternativeSchoolKey;
  onChange: (key: AlternativeSchoolKey) => void;
}) {
  const base =
    "flex-1 rounded-full px-2 py-2.5 text-center text-[11px] font-semibold leading-snug transition-[background-color,color,box-shadow] duration-200 ease-out sm:px-3 sm:py-2.5 sm:text-[12px] md:text-[13px] motion-reduce:transition-none";
  const active = "bg-white text-brand-fg1 shadow-sm ring-1 ring-black/[0.06]";
  const idle = "text-brand-fg3 hover:text-brand-fg1";

  return (
    <div
      className="relative z-10 flex w-full touch-manipulation rounded-full bg-black/[0.06] p-1 ring-1 ring-black/[0.06]"
      role="tablist"
      aria-label="Typ porovnávanej školy"
    >
      <button
        type="button"
        role="tab"
        aria-selected={value === "gymnasium"}
        className={`${base} ${value === "gymnasium" ? active : idle}`}
        onClick={() => onChange("gymnasium")}
      >
        Bežné 4-ročné gymnázium
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={value === "businessAcademy"}
        className={`${base} ${value === "businessAcademy" ? active : idle}`}
        onClick={() => onChange("businessAcademy")}
      >
        Obchodná akadémia
      </button>
    </div>
  );
}

function CompareCard({
  variant,
  title,
  intro,
  rows,
  maturitaTitle,
  maturita,
  afterTitle,
  afterBody,
  animated,
  barIndexOffset,
  beforeTitle,
  leadingSpacerForAlignment,
}: {
  variant: "dark" | "light";
  title: string;
  intro: string;
  rows: readonly ComparisonBarRow[];
  maturitaTitle: string;
  maturita: string;
  afterTitle: string;
  afterBody: string;
  animated: boolean;
  barIndexOffset: number;
  /** Napr. prepínač v pravom stĺpci: titulok a úvod sú nižšie pod ním. */
  beforeTitle?: ReactNode;
  /** Neviditeľná medzera v ľavom stĺpci = výška prepínača + medzera pod ním (desktop). */
  leadingSpacerForAlignment?: ReactNode;
}) {
  const shell =
    variant === "dark"
      ? "border border-white/[0.08] bg-[#2a2a2d]"
      : "border border-black/[0.06] bg-brand-bg1 shadow-sm";

  const titleClass =
    variant === "dark" ? "text-white" : "text-brand-fg1";

  const introClass =
    variant === "dark" ? "text-white/70" : "text-brand-fg3";

  const blockHeading =
    variant === "dark" ? "text-white" : "text-brand-fg1";

  const blockBody =
    variant === "dark" ? "text-white/65" : "text-brand-fg3";

  const titleTop = beforeTitle !== undefined ? "mt-4" : "";

  return (
    <div
      className={`flex min-h-0 flex-col rounded-2xl p-6 sm:p-7 md:p-8 md:h-full ${shell}`}
    >
        {leadingSpacerForAlignment ? (
          <div className="shrink-0">{leadingSpacerForAlignment}</div>
        ) : null}
        {beforeTitle ? (
          <div className="shrink-0">{beforeTitle}</div>
        ) : null}
        <h3
          className={`shrink-0 font-heading m-0 text-[clamp(1.25rem,1rem+1.4vw,1.65rem)] leading-tight tracking-tight ${titleClass} ${titleTop}`}
        >
          {title}
        </h3>
        {/* Na desktope flex-1: kratší úvod nespustí predmety vyššie ako v druhom stĺpci */}
        <div className="mt-2 flex min-h-0 w-full flex-col md:mt-2.5 md:flex-1">
          <p
            className={`m-0 shrink-0 text-[14px] font-normal leading-relaxed md:text-[15px] ${introClass}`}
          >
            {intro}
          </p>
          <div className="hidden min-h-0 flex-1 md:block" aria-hidden />
        </div>

        <div className="mt-3 shrink-0 md:mt-3.5">
          <ComparisonBars
            rows={rows}
            animated={animated}
            variant={variant}
            startIndex={barIndexOffset}
          />
        </div>

        <div
          className={`mt-8 shrink-0 border-t pt-1.5 md:mt-9 md:min-h-[7.5rem] md:pt-2 ${
            variant === "dark" ? "border-white/10" : "border-black/[0.08]"
          }`}
        >
          <p
            className={`font-heading m-0 text-[15px] tracking-tight md:text-base ${blockHeading}`}
          >
            {maturitaTitle}
          </p>
          <p
            className={`mt-0.5 mb-0 text-[13px] font-normal leading-relaxed md:text-[14px] ${blockBody}`}
          >
            {maturita}
          </p>
        </div>

        <div className="mt-0.5 shrink-0 md:mt-1">
          <p
            className={`font-heading m-0 text-[15px] tracking-tight md:text-base ${blockHeading}`}
          >
            {afterTitle}
          </p>
          <p
            className={`mt-0.5 mb-0 text-[13px] font-normal leading-relaxed md:text-[14px] ${blockBody}`}
          >
            {afterBody}
          </p>
        </div>
    </div>
  );
}

export function SchoolComparisonSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [barsOn, setBarsOn] = useState(false);
  const [introOn, setIntroOn] = useState(false);
  const [alternativeSchool, setAlternativeSchool] =
    useState<AlternativeSchoolKey>("gymnasium");

  const rightComparison =
    alternativeSchool === "gymnasium"
      ? gymnasiumComparison
      : businessAcademyComparison;

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setIntroOn(true);
      setBarsOn(true);
      return;
    }

    /* Úzke displeje: IO často nespustí včas (viewport, iOS), titulok by ostal opacity-0. */
    const narrow = window.matchMedia("(max-width: 1023px)");
    if (narrow.matches) {
      setIntroOn(true);
      requestAnimationFrame(() => setBarsOn(true));
      return;
    }

    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setIntroOn(true);
          requestAnimationFrame(() => setBarsOn(true));
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 12% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      id="porovnanie-skoly"
      aria-labelledby="porovnanie-skoly-heading"
      className="scroll-mt-24 bg-brand-bg1 py-10 md:scroll-mt-28 md:py-14"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <header
          className={`max-w-3xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            introOn
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <h2
            id="porovnanie-skoly-heading"
            className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.5vw,2.85rem)] leading-[1.1] tracking-tight text-brand-fg1"
          >
            {schoolComparisonIntro.title}
          </h2>
        </header>

        <div className="mt-9 grid gap-5 md:mt-11 md:grid-cols-2 md:items-stretch md:gap-6 lg:gap-8">
          <CompareCard
            variant="dark"
            leadingSpacerForAlignment={
              <div className="mb-4 hidden md:block" aria-hidden="true">
                {/* Rovnaká výška ako viditeľný prepínač vpravo (pevná px výška klamala) */}
                <div className="pointer-events-none invisible select-none">
                  <AlternativeSchoolToggle
                    value={alternativeSchool}
                    onChange={setAlternativeSchool}
                  />
                </div>
              </div>
            }
            title={lyceumComparison.title}
            intro={lyceumComparison.intro}
            rows={lyceumComparison.rows}
            maturitaTitle={lyceumComparison.maturitaTitle}
            maturita={lyceumComparison.maturita}
            afterTitle={lyceumComparison.afterTitle}
            afterBody={lyceumComparison.afterBody}
            animated={barsOn}
            barIndexOffset={0}
          />
          <CompareCard
            variant="light"
            beforeTitle={
              <AlternativeSchoolToggle
                value={alternativeSchool}
                onChange={setAlternativeSchool}
              />
            }
            title={rightComparison.title}
            intro={rightComparison.intro}
            rows={rightComparison.rows}
            maturitaTitle={rightComparison.maturitaTitle}
            maturita={rightComparison.maturita}
            afterTitle={rightComparison.afterTitle}
            afterBody={rightComparison.afterBody}
            animated={barsOn}
            barIndexOffset={lyceumComparison.rows.length}
          />
        </div>

        <div className="mt-9 max-w-3xl space-y-2.5 text-[12px] leading-relaxed text-brand-fg3 md:mt-10 md:text-[13px]">
          <p className="m-0">{schoolComparisonFootnote.asterisk}</p>
          <p className="m-0">{schoolComparisonFootnote.example1}</p>
          <p className="m-0">{schoolComparisonFootnote.example2}</p>
        </div>
      </div>
    </section>
  );
}
