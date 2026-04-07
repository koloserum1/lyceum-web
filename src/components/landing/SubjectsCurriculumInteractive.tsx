"use client";

import { useCallback, useId, useState } from "react";
import {
  subjectYearPlans,
  type SubjectYearId,
  type YearCurriculumPlan,
  type YearCurriculumRow,
} from "@/content/subjectsCurriculum";

function YearTabList({
  value,
  onChange,
  baseId,
}: {
  value: SubjectYearId;
  onChange: (id: SubjectYearId) => void;
  baseId: string;
}) {
  const baseBtn =
    "min-h-[44px] flex-1 rounded-full px-3 py-2.5 text-center text-[12px] font-semibold leading-snug transition-[background-color,color,box-shadow] duration-200 ease-out sm:px-4 sm:text-[13px] motion-reduce:transition-none md:text-[14px]";
  const active = "bg-white text-brand-fg1 shadow-sm ring-1 ring-black/[0.06]";
  const idle = "text-brand-fg3 hover:text-brand-fg1";

  return (
    <div
      className="grid grid-cols-2 gap-1 rounded-full bg-black/[0.06] p-1 ring-1 ring-black/[0.06] sm:grid-cols-4"
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
      className="-m-1 inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-brand-fg3 transition-colors hover:text-brand-fg1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 focus-visible:ring-offset-1"
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
}: {
  row: YearCurriculumRow;
  yearId: SubjectYearId;
  expandedRows: Set<string>;
  toggleRow: (key: string) => void;
}) {
  const key = `${yearId}-${row.id}`;
  const open = expandedRows.has(key);
  const hasDetail = Boolean(row.detail?.trim());

  return (
    <div className="min-w-0">
      <div className="flex gap-2 border-b border-black/[0.06] py-3.5 align-top">
        <div className="min-w-0 flex-1">
          <p className="m-0 text-[14px] font-medium leading-snug text-brand-fg1">
            {row.subject}
          </p>
        </div>
        <p className="m-0 w-11 shrink-0 text-right text-[14px] tabular-nums text-brand-fg2 sm:w-12">
          {row.hours}
        </p>
        <div className="flex w-8 shrink-0 justify-end sm:w-9">
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
        <div className="border-b border-black/[0.06] bg-brand-bg2/40 px-0 py-3 text-[13px] leading-relaxed text-brand-fg2 sm:text-[14px]">
          {row.detail}
        </div>
      ) : null}
    </div>
  );
}

function YearTable({
  plan,
  expandedRows,
  toggleRow,
}: {
  plan: YearCurriculumPlan;
  expandedRows: Set<string>;
  toggleRow: (key: string) => void;
}) {
  return (
    <div className="min-w-0 space-y-8">
      {plan.sections.map((section) => {
        const leftRows = section.rows.filter((_, i) => i % 2 === 0);
        const rightRows = section.rows.filter((_, i) => i % 2 === 1);

        return (
          <div key={section.id} className="min-w-0">
            <h4 className="font-heading m-0 text-[16px] font-semibold leading-snug tracking-tight text-brand-fg1 sm:text-[17px]">
              {section.heading}
            </h4>

            <div className="mt-3 md:hidden">
              {section.rows.map((row) => (
                <SubjectRowBlock
                  key={row.id}
                  row={row}
                  yearId={plan.yearId}
                  expandedRows={expandedRows}
                  toggleRow={toggleRow}
                />
              ))}
            </div>

            <div className="mt-3 hidden gap-x-6 md:grid md:grid-cols-2">
              <div className="min-w-0">
                {leftRows.map((row) => (
                  <SubjectRowBlock
                    key={row.id}
                    row={row}
                    yearId={plan.yearId}
                    expandedRows={expandedRows}
                    toggleRow={toggleRow}
                  />
                ))}
              </div>
              <div className="min-w-0">
                {rightRows.map((row) => (
                  <SubjectRowBlock
                    key={row.id}
                    row={row}
                    yearId={plan.yearId}
                    expandedRows={expandedRows}
                    toggleRow={toggleRow}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SubjectsCurriculumInteractive() {
  const baseId = useId();
  const [year, setYear] = useState<SubjectYearId>("y1");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(() => new Set());

  const toggleRow = useCallback((key: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const onYearChange = useCallback((id: SubjectYearId) => {
    setYear(id);
    setExpandedRows(new Set());
  }, []);

  const activePlan =
    subjectYearPlans.find((x) => x.yearId === year) ?? subjectYearPlans[0];

  return (
    <div
      id="predmety-plan"
      className="scroll-mt-28 rounded-[24px] border border-black/[0.07] bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:p-7 md:p-9"
    >
      <YearTabList value={year} onChange={onYearChange} baseId={baseId} />

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${year}`}
        className="mt-6 sm:mt-8"
      >
        <div className="border-b border-black/[0.07] pb-5 sm:pb-6">
          <p className="font-heading m-0 text-[clamp(1.35rem,1.1rem+0.85vw,1.85rem)] font-semibold leading-[1.12] tracking-tight text-brand-fg1">
            {activePlan.headline}
            <span className="font-semibold text-brand-fg2"> · {activePlan.totalHours}</span>
          </p>
          <p className="mt-2.5 mb-0 max-w-3xl text-[14px] font-normal leading-relaxed text-brand-fg2 sm:text-[15px]">
            {activePlan.lead}
          </p>
        </div>
        <div className="pt-5 sm:pt-6">
          <YearTable
            plan={activePlan}
            expandedRows={expandedRows}
            toggleRow={toggleRow}
          />
        </div>
      </div>
    </div>
  );
}
