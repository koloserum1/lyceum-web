"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Plynulejší posun stránky (koliesko / trackpad). Kotvy ostávajú cez scroll-smooth na <html>.
 * Pri prefers-reduced-motion sa Lenis nespúšťa.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /** Lenis + touch často „seka“ a skáče; na mobile nech je natívny scroll (PC bez zmeny). */
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    let lenis: Lenis | null = null;

    const sync = () => {
      lenis?.destroy();
      lenis = null;
      if (!mqDesktop.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        lerp: 0.09,
      });
    };

    sync();
    mqDesktop.addEventListener("change", sync);

    return () => {
      mqDesktop.removeEventListener("change", sync);
      lenis?.destroy();
    };
  }, []);

  return null;
}
