"use client";

import { useEffect, useState } from "react";

/** Zdieľaná cache — jeden skrytý fetch na URL, nie päť paralelných. */
const posterCache = new Map<string, string>();

/** Pre záložný odber z hlavného `<video>` (napr. iOS). */
export function cacheVideoPoster(src: string, dataUrl: string) {
  posterCache.set(src, dataUrl);
}

type Options = {
  enabled?: boolean;
  /** Odložiť generovanie (rozloženie sieťovej záťaže) */
  delayMs?: number;
};

function prefersAggressiveVideoLoad(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(max-width: 1023px)").matches ||
    (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0)
  );
}

/**
 * Vygeneruje JPEG poster (data URL) z prvého snímku videa cez skrytý `<video>`.
 * Na mobile/iOS sa používa agresívnejšie `preload` a viac udalostí, aby prvý frame naozaj dekódoval.
 */
export function useVideoPosterDataUrl(
  src: string | null,
  options: Options = {},
): string | null {
  const { enabled = true, delayMs = 0 } = options;
  const [poster, setPoster] = useState<string | null>(() =>
    src && posterCache.has(src) ? posterCache.get(src)! : null,
  );

  useEffect(() => {
    if (!src || !enabled) {
      return;
    }
    const cached = posterCache.get(src);
    if (cached) {
      setPoster(cached);
      return;
    }

    let cancelled = false;
    const effectiveDelay = prefersAggressiveVideoLoad() ? 0 : delayMs;

    const start = (): (() => void) => {
      const v = document.createElement("video");
      v.muted = true;
      v.playsInline = true;
      v.setAttribute("playsinline", "true");
      v.setAttribute("webkit-playsinline", "true");
      v.preload = prefersAggressiveVideoLoad() ? "auto" : "metadata";
      v.src = src;

      let finished = false;
      let seekScheduled = false;
      let fallbackTimer: number | null = null;

      const cleanupVideo = () => {
        if (fallbackTimer !== null) {
          clearTimeout(fallbackTimer);
          fallbackTimer = null;
        }
        v.removeAttribute("src");
        v.load();
      };

      const detach = () => {
        v.removeEventListener("loadedmetadata", onLoadedMetadata);
        v.removeEventListener("loadeddata", onLoadedData);
        v.removeEventListener("canplay", onCanPlay);
        v.removeEventListener("seeked", onSeeked);
        v.removeEventListener("error", onError);
      };

      const capture = () => {
        if (finished || cancelled) return;
        finished = true;
        detach();
        const w = v.videoWidth;
        const h = v.videoHeight;
        if (!w || !h) {
          cleanupVideo();
          return;
        }
        const maxW = 960;
        const scale = w > maxW ? maxW / w : 1;
        const cw = Math.round(w * scale);
        const ch = Math.round(h * scale);
        const canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          cleanupVideo();
          return;
        }
        try {
          ctx.drawImage(v, 0, 0, cw, ch);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
          posterCache.set(src, dataUrl);
          setPoster(dataUrl);
        } catch {
          // canvas tainted / CORS
        }
        cleanupVideo();
      };

      const scheduleSeek = () => {
        if (cancelled || finished || seekScheduled || v.videoWidth === 0) return;
        seekScheduled = true;
        const dur = v.duration && Number.isFinite(v.duration) ? v.duration : 1;
        const t = Math.min(0.12, Math.max(dur * 0.02, 0.04));
        try {
          v.currentTime = t;
        } catch {
          seekScheduled = false;
          capture();
        }
      };

      const onSeeked = () => {
        if (!seekScheduled || cancelled || finished) return;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => capture());
        });
      };

      const kickDecode = () => {
        if (cancelled || finished || v.videoWidth === 0) return;
        scheduleSeek();
      };

      const onLoadedMetadata = () => {
        kickDecode();
      };

      const onLoadedData = () => {
        kickDecode();
      };

      const onCanPlay = () => {
        if (!seekScheduled) kickDecode();
      };

      const onError = () => {
        if (finished) return;
        finished = true;
        detach();
        cleanupVideo();
      };

      v.addEventListener("loadedmetadata", onLoadedMetadata);
      v.addEventListener("loadeddata", onLoadedData);
      v.addEventListener("canplay", onCanPlay);
      v.addEventListener("seeked", onSeeked);
      v.addEventListener("error", onError);

      fallbackTimer = window.setTimeout(() => {
        fallbackTimer = null;
        if (cancelled || finished) return;
        if (v.videoWidth > 0 && !seekScheduled) {
          scheduleSeek();
        } else if (v.videoWidth > 0 && seekScheduled) {
          /* seeked niekedy nedorazí na iOS */
          capture();
        }
      }, 2500);

      return () => {
        if (!finished) {
          detach();
          cleanupVideo();
        }
      };
    };

    let innerCleanup: (() => void) | undefined;

    if (effectiveDelay > 0) {
      const tid = window.setTimeout(() => {
        if (cancelled) return;
        innerCleanup = start();
      }, effectiveDelay);
      return () => {
        cancelled = true;
        window.clearTimeout(tid);
        innerCleanup?.();
      };
    }

    innerCleanup = start();
    return () => {
      cancelled = true;
      innerCleanup?.();
    };
  }, [src, enabled, delayMs]);

  if (!src) return null;
  return poster;
}
