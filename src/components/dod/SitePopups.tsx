"use client";

import { DodPopup } from "@/components/dod/DodPopup";
import { PrijimackyPopup } from "@/components/dod/PrijimackyPopup";
import type { DodPopupPayload } from "@/lib/dod-popup";
import type { PrijimackyPopupPayload } from "@/lib/prijimacky-popup";

type Props = {
  dod: DodPopupPayload | null;
  prij: PrijimackyPopupPayload | null;
  showDod: boolean;
  showPrijimacky: boolean;
};

/**
 * Len jeden modal naraz: inak by jeden fullscreen overlay (nižší z-index) ostal
 * pod druhým a na mobile by „zrazil“ kliky (menu, odkazy) bez viditeľného dôvodu.
 */
export function SitePopups({ dod, prij, showDod, showPrijimacky }: Props) {
  if (showPrijimacky && prij) {
    return <PrijimackyPopup data={prij} />;
  }
  if (showDod && dod) {
    return <DodPopup data={dod} />;
  }
  return null;
}
