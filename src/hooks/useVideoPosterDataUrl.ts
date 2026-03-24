"use client";

import { useEffect, useState } from "react";

/** Zdieľaná cache — jeden skrytý fetch na URL, nie päť paralelných. */
const posterCache = new Map<string, string>();

type Options = {
  enabled?: boolean;
  /** Odložiť generovanie (rozloženie sieťovej záťaže) */
  delayMs?: number;
};

/**
 * Vygeneruje JPEG poster (data URL) z prvého snímku videa cez skrytý `<video>`.
 * Hlavné `<video>` môže mať `preload="none"` — používateľ vidí poster, dáta sa stiahnu pri play().
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
      if (!src) setPoster(null);
      return;
    }
    const cached = posterCache.get(src);
    if (cached) {
      setPoster(cached);
      return;
    }

    let cancelled = false;

    const start = (): (() => void) => {
      const v = document.createElement("video");
      v.muted = true;
      v.playsInline = true;
      v.preload = "metadata";
      v.src = src;

      let finished = false;

      const cleanupVideo = () => {
        v.removeAttribute("src");
        v.load();
      };

      const detach = () => {
        v.removeEventListener("loadeddata", onLoadedData);
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

      let seekScheduled = false;

      const onSeeked = () => {
        if (!seekScheduled || cancelled || finished) return;
        capture();
      };

      const onLoadedData = () => {
        if (cancelled || finished || v.videoWidth === 0) return;
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

      const onError = () => {
        if (finished) return;
        finished = true;
        detach();
        cleanupVideo();
      };

      v.addEventListener("loadeddata", onLoadedData);
      v.addEventListener("seeked", onSeeked);
      v.addEventListener("error", onError);

      return () => {
        if (!finished) {
          detach();
          cleanupVideo();
        }
      };
    };

    let innerCleanup: (() => void) | undefined;

    if (delayMs > 0) {
      const tid = window.setTimeout(() => {
        if (cancelled) return;
        innerCleanup = start();
      }, delayMs);
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

  return poster;
}
