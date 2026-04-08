"use client";

import { useCallback, useId, useMemo, useState } from "react";
import {
  subjectYearPlans,
  type SubjectYearId,
  type YearCurriculumPlan,
  type YearCurriculumRow,
  type YearCurriculumSection,
} from "@/content/subjectsCurriculum";

/** Súčet týždenných hodín v sekcii (čísla ako „4“, prípadne prvé číslo z „15 spolu“). */
function sumSectionWeeklyHours(rows: readonly YearCurriculumRow[]): number {
  let sum = 0;
  for (const r of rows) {
    const h = r.hours.trim();
    if (/^\d+$/.test(h)) {
      sum += parseInt(h, 10);
      continue;
    }
    const m = /^(\d+)/.exec(h);
    if (m) sum += parseInt(m[1], 10);
  }
  return sum;
}

/** Jemná paleta podľa ročníka – pozadie panelu, karty rozsahu, sekcie predmetov. */
const YEAR_THEME: Record<
  SubjectYearId,
  {
    shell: string;
    tabStrip: string;
    tabActive: string;
    tabIdle: string;
    section: string;
    weekly: string;
    rowDetail: string;
  }
> = {
  y1: {
    shell:
      "bg-gradient-to-br from-[#fffcf8] via-white to-[#fff9f2] transition-[background] duration-300 ease-out",
    tabStrip: "bg-[#f0ebe3]/90 ring-black/[0.05]",
    tabActive:
      "bg-white text-brand-fg1 shadow-sm ring-1 ring-[#e5dcd2]/80",
    tabIdle: "text-brand-fg3 hover:text-brand-fg1",
    section:
      "border-[#ebe6df]/90 bg-gradient-to-b from-white to-[#faf7f2]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95)]",
    weekly:
      "bg-gradient-to-br from-[#fffbf7] to-[#fff3e6]/95 ring-1 ring-[#e8dccf]/55 shadow-[0_6px_28px_-14px_rgba(140,110,70,0.12)]",
    rowDetail: "bg-[#faf7f2]/55",
  },
  y2: {
    shell:
      "bg-gradient-to-br from-[#f8fcfa] via-white to-[#f2faf6] transition-[background] duration-300 ease-out",
    tabStrip: "bg-emerald-950/[0.07] ring-emerald-950/[0.06]",
    tabActive:
      "bg-white text-brand-fg1 shadow-sm ring-1 ring-emerald-800/15",
    tabIdle: "text-brand-fg3 hover:text-brand-fg1",
    section:
      "border-emerald-800/[0.1] bg-gradient-to-b from-white to-[#f4faf7]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95)]",
    weekly:
      "bg-gradient-to-br from-[#f6fbf9] to-[#eaf6f0]/95 ring-1 ring-emerald-800/18 shadow-[0_6px_28px_-14px_rgba(50,110,85,0.1)]",
    rowDetail: "bg-emerald-50/45",
  },
  y3: {
    shell:
      "bg-gradient-to-br from-[#fbf9ff] via-white to-[#f6f2ff] transition-[background] duration-300 ease-out",
    tabStrip: "bg-violet-950/[0.06] ring-violet-950/[0.05]",
    tabActive:
      "bg-white text-brand-fg1 shadow-sm ring-1 ring-violet-300/45",
    tabIdle: "text-brand-fg3 hover:text-brand-fg1",
    section:
      "border-violet-200/55 bg-gradient-to-b from-white to-[#f9f6ff]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95)]",
    weekly:
      "bg-gradient-to-br from-[#faf8ff] to-[#f0e8ff]/90 ring-1 ring-violet-200/55 shadow-[0_6px_28px_-14px_rgba(95,75,150,0.1)]",
    rowDetail: "bg-violet-50/35",
  },
  y4: {
    shell:
      "bg-gradient-to-br from-[#f7f9fc] via-white to-[#f1f5fb] transition-[background] duration-300 ease-out",
    tabStrip: "bg-slate-900/[0.07] ring-slate-900/[0.06]",
    tabActive:
      "bg-white text-brand-fg1 shadow-sm ring-1 ring-slate-300/55",
    tabIdle: "text-brand-fg3 hover:text-brand-fg1",
    section:
      "border-slate-200/75 bg-gradient-to-b from-white to-[#f5f8fc]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95)]",
    weekly:
      "bg-gradient-to-br from-[#f8fafd] to-[#e9f0fa]/90 ring-1 ring-slate-300/45 shadow-[0_6px_28px_-14px_rgba(55,75,110,0.1)]",
    rowDetail: "bg-slate-50/55",
  },
};

function parseWeeklyHoursLabel(totalHours: string): {
  numberPart: string;
  restPart: string;
} {
  const m = totalHours.trim().match(/^(\d+(?:[.,]\d+)?)\s+(.+)$/);
  if (m) return { numberPart: m[1].replace(",", "."), restPart: m[2] };
  return { numberPart: "", restPart: totalHours };
}

function YearTabList({
  value,
  onChange,
  baseId,
}: {
  value: SubjectYearId;
  onChange: (id: SubjectYearId) => void;
  baseId: string;
}) {
  const strip = YEAR_THEME[value].tabStrip;
  const baseBtn =
    "min-h-[44px] flex-1 touch-manipulation rounded-full px-3 py-2.5 text-center text-[12px] font-semibold leading-snug transition-[background-color,color,box-shadow] duration-200 ease-out sm:px-4 sm:text-[13px] motion-reduce:transition-none md:text-[14px]";
  const active = YEAR_THEME[value].tabActive;
  const idle = YEAR_THEME[value].tabIdle;

  return (
    <div
      className={`grid grid-cols-2 gap-1 rounded-full p-1 ring-1 sm:grid-cols-4 ${strip}`}
      role="tablist"
      aria-label="Ročník"
    >
      {subjectYearPlans.map((plan) => {
        const selected = plan.yearId === value;
        return (
          <button
            key={plan.yearId}
            id={`${baseId}-tab-${plan.yearId}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`${baseId}-panel`}
            tabIndex={selected ? 0 : -1}
            className={`${baseBtn} ${selected ? active : idle}`}
            onClick={() => onChange(plan.yearId)}
          >
            {plan.tabLabel}
          </button>
        );
      })}
    </div>
  );
}

function ExpandRowButton({
  expanded,
  onToggle,
  subjectLabel,
}: {
  expanded: boolean;
  onToggle: () => void;
  subjectLabel: string;
}) {
  const label = expanded
    ? `Skryť popis: ${subjectLabel}`
    : `Zobraziť popis: ${subjectLabel}`;
  return (
    <button
      type="button"
      className="-m-1 inline-flex min-h-[44px] min-w-[44px] shrink-0 touch-manipulation items-center justify-center rounded-lg p-2 text-brand-fg3 transition-colors hover:text-brand-fg1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 focus-visible:ring-offset-1"
      aria-expanded={expanded}
      aria-label={label}
      onClick={onToggle}
    >
      <svg
        className={`h-5 w-5 transition-transform duration-200 ease-out motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

function SubjectRowBlock({
  row,
  yearId,
  expandedRows,
  toggleRow,
  rowDetailClass,
}: {
  row: YearCurriculumRow;
  yearId: SubjectYearId;
  expandedRows: Set<string>;
  toggleRow: (key: string) => void;
  rowDetailClass: string;
}) {
  const key = `${yearId}-${row.id}`;
  const open = expandedRows.has(key);
  const hasDetail = Boolean(row.detail?.trim());

  return (
    <div className="min-w-0">
      <div className="flex gap-3 py-3 align-middle sm:gap-4 sm:py-3.5">
        <div className="min-w-0 flex-1 self-center">
          <p className="m-0 text-[14px] font-medium leading-snug text-brand-fg1 sm:text-[15px]">
            {row.subject}
          </p>
        </div>
        <div
          className="flex min-w-[3rem] shrink-0 items-center justify-end self-center sm:min-w-[3.25rem]"
          title="Hodiny týždenne"
        >
          <span className="text-[14px] font-medium tabular-nums tracking-tight text-brand-fg2 sm:text-[15px]">
            {row.hours}
          </span>
        </div>
        <div className="flex w-8 shrink-0 justify-end self-center sm:w-9">
          {hasDetail ? (
            <ExpandRowButton
              expanded={open}
              onToggle={() => toggleRow(key)}
              subjectLabel={row.subject}
            />
          ) : (
            <span className="inline-block w-8 sm:w-9" aria-hidden />
          )}
        </div>
      </div>
      {hasDetail && open ? (
        <div
          className={`border-t border-black/[0.06] px-0 py-3 pl-1 text-[13px] leading-relaxed text-brand-fg2 sm:pl-0 sm:text-[14px] ${rowDetailClass}`}
        >
          {row.detail}
        </div>
      ) : null}
    </div>
  );
}

function SectionColumnHeader() {
  return (
    <div
      className="flex gap-3 border-b border-black/[0.1] py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3 sm:gap-4"
      aria-hidden
    >
      <span className="min-w-0 flex-1">Predmet</span>
      <span className="flex w-[3rem] shrink-0 items-center justify-end sm:w-[3.25rem]">
        Hod.
      </span>
      <span className="w-8 sm:w-9" />
    </div>
  );
}

function ChevronSection({
  expanded,
  className,
}: {
  expanded: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-brand-fg3 transition-transform duration-200 ease-out motion-reduce:transition-none ${expanded ? "rotate-180" : ""} ${className ?? ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Každá sekcia učebného plánu: zbalená = nadpis, súčet hodín, šípka; rozbalená = predmety. */
function CollapsibleCurriculumSection({
  section,
  plan,
  expandedRows,
  toggleRow,
  sectionClass,
  rowDetailClass,
  isOpen,
  onToggle,
}: {
  section: YearCurriculumSection;
  plan: YearCurriculumPlan;
  expandedRows: Set<string>;
  toggleRow: (key: string) => void;
  sectionClass: string;
  rowDetailClass: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `curriculum-section-panel-${section.id}`;
  const triggerId = `curriculum-section-trigger-${section.id}`;
  const sumH = sumSectionWeeklyHours(section.rows);

  return (
    <div
      className={`min-w-0 overflow-hidden rounded-2xl border ${sectionClass}`}
    >
      <button
        type="button"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full touch-manipulation items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-black/[0.02] sm:gap-4 sm:px-5 sm:py-5 md:px-6"
        onClick={onToggle}
      >
        <div className="min-w-0 flex-1">
          <h4 className="font-heading m-0 text-[15px] font-semibold leading-snug tracking-tight text-brand-fg1 sm:text-[16px] md:text-[17px]">
            {section.heading}
          </h4>
          <p className="m-0 mt-1 text-[13px] leading-snug text-brand-fg3 sm:text-[14px]">
            Spolu{" "}
            <span className="font-semibold tabular-nums text-brand-fg2">
              {sumH}
            </span>{" "}
            hodín v tejto sekcii
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span
            className="hidden font-heading text-[18px] font-bold tabular-nums text-brand-fg1 sm:inline sm:text-[20px]"
            aria-hidden
          >
            {sumH} h
          </span>
          <ChevronSection expanded={isOpen} />
        </div>
      </button>

      {isOpen ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="border-t border-black/[0.06] px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6"
        >
          <div className="mt-3 sm:mt-4">
            <SectionColumnHeader />
            <div className="divide-y divide-black/[0.04]">
              {section.rows.map((row) => (
                <SubjectRowBlock
                  key={row.id}
                  row={row}
                  yearId={plan.yearId}
                  expandedRows={expandedRows}
                  toggleRow={toggleRow}
                  rowDetailClass={rowDetailClass}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function YearTable({
  plan,
  expandedRows,
  toggleRow,
  sectionClass,
  rowDetailClass,
  openSectionIds,
  toggleSection,
}: {
  plan: YearCurriculumPlan;
  expandedRows: Set<string>;
  toggleRow: (key: string) => void;
  sectionClass: string;
  rowDetailClass: string;
  openSectionIds: Set<string>;
  toggleSection: (sectionId: string) => void;
}) {
  return (
    <div className="min-w-0 space-y-6 sm:space-y-8">
      {plan.sections.map((section) => (
        <CollapsibleCurriculumSection
          key={section.id}
          section={section}
          plan={plan}
          expandedRows={expandedRows}
          toggleRow={toggleRow}
          sectionClass={sectionClass}
          rowDetailClass={rowDetailClass}
          isOpen={openSectionIds.has(section.id)}
          onToggle={() => toggleSection(section.id)}
        />
      ))}
    </div>
  );
}

function WeeklyHoursHighlight({
  totalHours,
  cardClass,
}: {
  totalHours: string;
  cardClass: string;
}) {
  const parsed = useMemo(() => parseWeeklyHoursLabel(totalHours), [totalHours]);
  const hasNum = Boolean(parsed.numberPart);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl px-6 py-5 sm:px-7 sm:py-6 md:min-w-[11.5rem] ${cardClass}`}
    >
      <p className="m-0 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-brand-fg3 sm:text-[11px]">
        Rozsah výučby
      </p>
      {hasNum ? (
        <>
          <p
            className="font-heading m-0 mt-1 text-center text-[clamp(2.1rem,1.4rem+2.8vw,2.75rem)] font-bold leading-none tabular-nums tracking-tight text-brand-fg1"
            aria-hidden
          >
            {parsed.numberPart}
          </p>
          <p className="m-0 mt-1.5 text-center text-[13px] font-medium leading-tight text-brand-fg2 sm:text-[14px]">
            {parsed.restPart}
          </p>
        </>
      ) : (
        <p className="m-0 mt-2 text-center text-[14px] font-semibold leading-snug text-brand-fg1">
          {totalHours}
        </p>
      )}
    </div>
  );
}

export function SubjectsCurriculumInteractive() {
  const baseId = useId();
  const [year, setYear] = useState<SubjectYearId>("y1");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(() => new Set());
  /** Rozbalené sekcie učebného plánu (id sekcie). Predvolene zbalené. */
  const [openSectionIds, setOpenSectionIds] = useState<Set<string>>(
    () => new Set(),
  );

  const theme = YEAR_THEME[year];

  const toggleRow = useCallback((key: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const toggleSection = useCallback((sectionId: string) => {
    setOpenSectionIds((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) next.delete(sectionId);
      else next.add(sectionId);
      return next;
    });
  }, []);

  const onYearChange = useCallback((id: SubjectYearId) => {
    setYear(id);
    setExpandedRows(new Set());
    setOpenSectionIds(new Set());
  }, []);

  const activePlan =
    subjectYearPlans.find((x) => x.yearId === year) ?? subjectYearPlans[0];

  return (
    <div
      id="predmety-plan"
      className={`scroll-mt-28 rounded-[24px] border border-black/[0.08] p-5 shadow-[0_8px_40px_-24px_rgba(27,22,36,0.08),0_1px_0_rgba(0,0,0,0.04)] sm:p-7 md:p-9 ${theme.shell}`}
    >
      <YearTabList value={year} onChange={onYearChange} baseId={baseId} />

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${year}`}
        className="mt-6 sm:mt-8"
      >
        <div className="border-b border-black/[0.07] pb-6 sm:pb-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-8">
            <div className="min-w-0 flex-1">
              <p className="font-heading m-0 text-[clamp(1.35rem,1.1rem+0.85vw,1.85rem)] font-semibold leading-[1.12] tracking-tight text-brand-fg1">
                {activePlan.headline}
              </p>
              <p className="mt-3 mb-0 max-w-3xl text-[14px] font-normal leading-relaxed text-brand-fg2 sm:mt-3.5 sm:text-[15px] md:leading-[1.65]">
                {activePlan.lead}
              </p>
            </div>
            <WeeklyHoursHighlight
              totalHours={activePlan.totalHours}
              cardClass={theme.weekly}
            />
          </div>
          <p className="sr-only">
            {activePlan.headline}: {activePlan.totalHours}.
          </p>
        </div>

        <div className="pt-6 sm:pt-7">
          <YearTable
            plan={activePlan}
            expandedRows={expandedRows}
            toggleRow={toggleRow}
            sectionClass={theme.section}
            rowDetailClass={theme.rowDetail}
            openSectionIds={openSectionIds}
            toggleSection={toggleSection}
          />
        </div>
      </div>
    </div>
  );
}
