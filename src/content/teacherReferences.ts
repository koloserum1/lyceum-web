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

/**
 * Cesty k fotkám v `public/teachers/`.
 * Predvolene `{id}.jpg` (napr. fabrici.jpg = Zuzka Mikloš Fabrici).
 * Ak máš iný názov súboru, doplníš ho sem.
 */
const TEACHER_IMAGE_FILE: Record<string, string> = {
  fabrici: "/teachers/fabrici.jpg",
  horvath: "/teachers/horvath.jpg",
  zvarik: "/teachers/zvarik.jpg",
  miklasova: "/teachers/miklasova.jpg",
  sumska: "/teachers/sumska.jpg",
  laco: "/teachers/laco.jpg",
  coyle: "/teachers/coyle.jpg",
  stasko: "/teachers/stasko.jpg",
  matulova: "/teachers/matulova.jpg",
};

export function teacherImagePath(id: string): string {
  if (Object.prototype.hasOwnProperty.call(TEACHER_IMAGE_FILE, id)) {
    return TEACHER_IMAGE_FILE[id];
  }
  return `/teachers/${id}.jpg`;
}

/** Rovnakí ľudia a texty ako v `teamMembers` / sekcia „Ľudia z Lýcea“. */
export const teacherReferences: TeacherReference[] = teamMembers.map((m) => ({
  id: m.id,
  name: m.name,
  role: m.role,
  imageSrc: teacherImagePath(m.id),
  quote: quoteFromMember(m),
}));
