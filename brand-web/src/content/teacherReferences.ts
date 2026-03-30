import type { TeamMember } from "./lyceum";
import { teamMembers } from "./lyceum";

export type TeacherReference = {
  id: string;
  name: string;
  role: string;
  /** Cesta pod `public/`, napr. `/teachers/fabrici.jpg`. `null` = placeholder do nahratia fotiek. */
  imageSrc: string | null;
  /** Celý text profilu (rovnaký obsah ako pri kartách v sekcii „Ľudia z Lýcea“ po rozšírení) */
  quote: string;
};

function quoteFromMember(m: TeamMember): string {
  const parts = [m.bioBefore.trim(), m.bioLyceum.trim()];
  if (m.bioSchool?.trim()) parts.push(m.bioSchool.trim());
  return parts.join(" ");
}

/** Rovnakí ľudia a texty ako v `teamMembers` / sekcia „Ľudia z Lýcea“. */
export const teacherReferences: TeacherReference[] = teamMembers.map((m) => ({
  id: m.id,
  name: m.name,
  role: m.role,
  imageSrc: null,
  quote: quoteFromMember(m),
}));
