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

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.09,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
