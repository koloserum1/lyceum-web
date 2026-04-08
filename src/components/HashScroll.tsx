"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHashFromLocation() {
  if (typeof window === "undefined") return;
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return;
  const run = () => {
    const el = document.getElementById(raw);
    if (el) {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };
  requestAnimationFrame(() => requestAnimationFrame(run));
}

/**
 * Po navigácii (vrátane späť z podstránky) zarovná kotvu v URL so skutočným prvkom.
 * Next.js nie vždy spoľahlivo posunie na #hash na mobile Safari.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToHashFromLocation();
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToHashFromLocation();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
