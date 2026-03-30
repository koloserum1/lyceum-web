"use client";

import { useState } from "react";
import type { TeamMember } from "@/content/lyceum";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function MemberCard({ m }: { m: TeamMember }) {
  const [open, setOpen] = useState(false);
  const teaser = `${m.bioLyceum}`.slice(0, 120).trim() + "…";
  const hasExtra =
    (m.bioSchool && m.bioSchool.length > 0) || m.bioBefore.length > 80;

  return (
    <article className="w-[260px] shrink-0 snap-start rounded-2xl border border-black/[0.06] bg-brand-bg1 p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary/25 font-heading text-sm font-bold text-brand-fg1"
          aria-hidden
        >
          {initials(m.name)}
        </div>
        <div className="min-w-0">
          <h3 className="font-heading m-0 text-base leading-tight">{m.name}</h3>
          <p className="mt-0.5 mb-0 text-[11px] font-bold uppercase tracking-wide text-brand-primary">
            {m.role}
          </p>
        </div>
      </div>
      <p
        className={`mt-3 mb-0 text-[13px] font-normal leading-snug text-brand-fg1 ${open ? "" : "line-clamp-4"}`}
      >
        {open ? (
          <>
            {m.bioBefore} {m.bioLyceum}{" "}
            {m.bioSchool ? <span> {m.bioSchool}</span> : null}
          </>
        ) : (
          teaser
        )}
      </p>
      {hasExtra ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-3 text-[12px] font-bold text-brand-fg1 underline decoration-brand-primary/50 underline-offset-2 hover:text-brand-primary"
        >
          {open ? "Skrátiť" : "Viac"}
        </button>
      ) : null}
    </article>
  );
}

export function TeamSection({ members }: { members: TeamMember[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory md:gap-5">
      {members.map((m) => (
        <MemberCard key={m.id} m={m} />
      ))}
    </div>
  );
}
