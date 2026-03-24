"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { StudentVideo } from "@/content/studentVideos";
import {
  cacheVideoPoster,
  useVideoPosterDataUrl,
} from "@/hooks/useVideoPosterDataUrl";

export type StudentVideoCardHandle = {
  pauseFromCarousel: () => void;
  playFromCarousel: () => void;
};

type Props = {
  item: StudentVideo;
  index: number;
  /** Karusel: len aktívna karta posiela priebeh do bodkového indikátora */
  isActive?: boolean;
  onPlaybackProgress?: (index: number, fraction: number) => void;
  /** Klik na video — synchronizácia s bodkovým indikátorom (karusel) */
  onCarouselInteract?: (index: number) => void;
};

const TAIL_SEC = 2;

function remainInTail(el: HTMLVideoElement) {
  if (!el.duration || !Number.isFinite(el.duration)) return false;
  const remain = el.duration - el.currentTime;
  return remain <= TAIL_SEC && remain >= 0;
}

export const endScreenPlayCta =
  "inline-flex items-center justify-center rounded-full border border-black/[0.08] bg-brand-secondary px-7 py-3.5 text-center font-heading text-base font-bold tracking-tight text-brand-fg1 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] transition-[transform,background-color] hover:bg-brand-tertiary active:scale-[0.98] sm:px-9 sm:py-4 sm:text-lg";

export const StudentVideoCard = forwardRef<StudentVideoCardHandle, Props>(
  function StudentVideoCard(
    {
      item,
      index,
      isActive = true,
      onPlaybackProgress,
      onCarouselInteract,
    },
    forwardedRef,
  ) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const showEndScreenRef = useRef(false);
  const isActiveRef = useRef(isActive);
  const onPlaybackProgressRef = useRef(onPlaybackProgress);
  const soundOnRef = useRef(false);
  const isFirst = index === 0;
  const [soundOn, setSoundOn] = useState(false);
  const [paused, setPaused] = useState(!isFirst);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [tailProgress, setTailProgress] = useState(0);
  const tailRafRef = useRef(0);

  /** Náhľad z prvého snímku; hlavné video môže zostať `preload="none"`. */
  const posterUrl = useVideoPosterDataUrl(item.src, {
    delayMs: index * 140,
  });

  /** Záloha (iOS / skrytý video): prvý frame z tohto istého `<video>` po načítaní metadát. */
  const [fallbackPoster, setFallbackPoster] = useState<string | null>(null);
  const posterResolved = posterUrl ?? fallbackPoster;

  useEffect(() => {
    setFallbackPoster(null);
  }, [item.src]);

  useEffect(() => {
    if (posterUrl) setFallbackPoster(null);
  }, [posterUrl]);

  useLayoutEffect(() => {
    if (!item.src || posterUrl) return;
    const v = videoRef.current;
    if (!v) return;

    let cancelled = false;
    let seekScheduled = false;

    const captureFromElement = () => {
      if (cancelled || v.videoWidth < 2) return;
      const maxW = 960;
      const scale = Math.min(1, maxW / v.videoWidth);
      const cw = Math.round(v.videoWidth * scale);
      const ch = Math.round(v.videoHeight * scale);
      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      try {
        ctx.drawImage(v, 0, 0, cw, ch);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
        cacheVideoPoster(item.src!, dataUrl);
        setFallbackPoster(dataUrl);
      } catch {
        /* canvas */
      }
    };

    const onSeeked = () => {
      v.removeEventListener("seeked", onSeeked);
      requestAnimationFrame(() => {
        requestAnimationFrame(captureFromElement);
      });
    };

    const kick = () => {
      if (cancelled || seekScheduled || v.videoWidth < 2) return;
      seekScheduled = true;
      const dur = v.duration && Number.isFinite(v.duration) ? v.duration : 1;
      const t = Math.min(0.12, Math.max(dur * 0.02, 0.04));
      v.addEventListener("seeked", onSeeked);
      try {
        v.currentTime = t;
      } catch {
        v.removeEventListener("seeked", onSeeked);
        seekScheduled = false;
        captureFromElement();
      }
    };

    const onReady = () => {
      if (cancelled) return;
      kick();
    };

    if (v.readyState >= 2 && v.videoWidth > 0) {
      kick();
    } else {
      v.addEventListener("loadeddata", onReady, { once: true });
      v.addEventListener("loadedmetadata", onReady, { once: true });
    }

    return () => {
      cancelled = true;
      v.removeEventListener("seeked", onSeeked);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("loadedmetadata", onReady);
    };
  }, [item.src, posterUrl]);

  showEndScreenRef.current = showEndScreen;
  isActiveRef.current = isActive;
  onPlaybackProgressRef.current = onPlaybackProgress;
  soundOnRef.current = soundOn;

  useImperativeHandle(forwardedRef, () => ({
    pauseFromCarousel: () => {
      const v = videoRef.current;
      if (!v || !item.src) return;
      v.pause();
    },
    playFromCarousel: () => {
      const v = videoRef.current;
      if (!v || !item.src) return;
      if (showEndScreenRef.current) return;

      if (isFirst) {
        if (!soundOnRef.current) {
          v.currentTime = 0;
          v.loop = false;
          v.muted = false;
          v.volume = 1;
          setSoundOn(true);
          void v.play();
          return;
        }
        v.muted = false;
        v.volume = 1;
        if (v.paused) void v.play();
        return;
      }

      v.muted = false;
      v.volume = 1;
      if (v.paused) void v.play();
    },
  }));

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !item.src) return;

    const cancelTailRaf = () => {
      if (tailRafRef.current) {
        cancelAnimationFrame(tailRafRef.current);
        tailRafRef.current = 0;
      }
    };

    const runTailFrame = () => {
      if (showEndScreenRef.current) {
        cancelTailRaf();
        return;
      }
      const el = videoRef.current;
      if (!el || !el.duration || !Number.isFinite(el.duration)) {
        cancelTailRaf();
        return;
      }
      const remain = el.duration - el.currentTime;
      if (remain > TAIL_SEC || remain < 0) {
        setTailProgress(0);
        if (!el.muted) el.volume = 1;
        cancelTailRaf();
        return;
      }
      const t = 1 - remain / TAIL_SEC;
      setTailProgress(t);
      if (!el.muted) {
        el.volume = Math.max(0, 1 - t);
      }
      tailRafRef.current = requestAnimationFrame(runTailFrame);
    };

    const onPause = () => {
      setPaused(true);
      cancelTailRaf();
    };

    const onPlay = () => {
      setPaused(false);
      cancelTailRaf();
      const el = videoRef.current;
      if (el && remainInTail(el)) {
        tailRafRef.current = requestAnimationFrame(runTailFrame);
      }
    };

    const onEnded = () => {
      cancelTailRaf();
      if (isFirst && !soundOnRef.current) {
        const el = videoRef.current;
        if (el) {
          el.currentTime = 0;
          void el.play().catch(() => {});
        }
        return;
      }
      setSoundOn(false);
      setPaused(false);
      setTailProgress(0);
      setShowEndScreen(true);
    };

    const onTimeUpdate = () => {
      if (showEndScreenRef.current) return;
      const el = videoRef.current;
      if (!el || !el.duration || !Number.isFinite(el.duration)) return;
      const remain = el.duration - el.currentTime;
      if (remain <= TAIL_SEC && remain >= 0 && !tailRafRef.current) {
        tailRafRef.current = requestAnimationFrame(runTailFrame);
      }
      if (remain > TAIL_SEC) {
        setTailProgress(0);
        if (!el.muted) el.volume = 1;
      }
    };

    v.addEventListener("pause", onPause);
    v.addEventListener("play", onPlay);
    v.addEventListener("ended", onEnded);
    v.addEventListener("timeupdate", onTimeUpdate);

    if (isFirst) {
      v.muted = true;
      v.loop = !soundOnRef.current;
      void v.play().catch(() => {});
      setPaused(false);
    }

    return () => {
      cancelTailRaf();
      v.removeEventListener("pause", onPause);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [item.src, index, isFirst]);

  /** Prvé video: ticho = nekonečný loop; po zapnutí zvuku loop vypnúť, aby sa dal ukončiť a zobraziť CTA. */
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !item.src || !isFirst || showEndScreen) return;
    v.loop = !soundOn;
    if (!soundOn) v.muted = true;
  }, [item.src, isFirst, soundOn, showEndScreen]);

  /** ~60 fps: priebeh z currentTime/duration — končí s videom; pri pause len seek/play obnoví kreslenie */
  useEffect(() => {
    if (!item.src || !isActive) return;
    const v = videoRef.current;
    if (!v) return;
    let raf = 0;
    const tick = () => {
      const el = videoRef.current;
      if (!el || !isActiveRef.current) return;
      if (showEndScreenRef.current) {
        onPlaybackProgressRef.current?.(index, 1);
        return;
      }
      if (!el.duration || !Number.isFinite(el.duration)) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const frac = Math.min(1, Math.max(0, el.currentTime / el.duration));
      onPlaybackProgressRef.current?.(index, frac);
      if (el.paused) return;
      raf = requestAnimationFrame(tick);
    };
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    schedule();
    v.addEventListener("play", schedule);
    v.addEventListener("seeked", schedule);
    return () => {
      v.removeEventListener("play", schedule);
      v.removeEventListener("seeked", schedule);
      cancelAnimationFrame(raf);
    };
  }, [item.src, index, isActive]);

  /** Po konci prehrania: vždy znova od začiatku, stíšené, loop — po commite DOM (muted/loop props). */
  useLayoutEffect(() => {
    if (!showEndScreen) return;
    const v = videoRef.current;
    if (!v || !item.src) return;

    const startMutedLoop = () => {
      v.muted = true;
      v.loop = true;
      v.volume = 1;
      v.currentTime = 0;
      void v.play().catch(() => {});
    };

    startMutedLoop();
    const id = requestAnimationFrame(startMutedLoop);
    return () => cancelAnimationFrame(id);
  }, [showEndScreen, item.src]);

  const handleRootClick = () => {
    if (showEndScreen) return;
    const v = videoRef.current;
    if (!v || !item.src) return;

    onCarouselInteract?.(index);

    if (isFirst) {
      if (!soundOn) {
        v.currentTime = 0;
        v.loop = false;
        v.muted = false;
        v.volume = 1;
        setSoundOn(true);
        void v.play();
        return;
      }
      if (v.paused) void v.play();
      else v.pause();
      return;
    }

    v.muted = false;
    v.volume = 1;
    if (v.paused) void v.play();
    else v.pause();
  };

  if (!item.src) return null;

  const showPlayOverlay =
    !showEndScreen &&
    ((!isFirst && paused) || (isFirst && soundOn && paused));
  const showSoundHint = isFirst && !soundOn && !showEndScreen;

  const videoMuted = showEndScreen || (isFirst && !soundOn);

  const overlayFactor = showEndScreen ? 1 : tailProgress;
  const showTailOrEndOverlay = tailProgress > 0 || showEndScreen;

  return (
    <div
      className={`relative aspect-[9/16] w-full overflow-hidden bg-brand-bg2 ${showEndScreen ? "cursor-default" : "cursor-pointer"}`}
      role="button"
      tabIndex={showEndScreen ? -1 : 0}
      aria-label={
        showEndScreen
          ? "Koniec ukážky — celé video na Instagrame"
          : isFirst
            ? soundOn
              ? "Pozastaviť alebo spustiť video"
              : "Zapnúť zvuk a prehrať video od začiatku"
            : paused
              ? "Spustiť video"
              : "Pozastaviť video"
      }
      onClick={handleRootClick}
      onKeyDown={(e) => {
        if (showEndScreen) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleRootClick();
        }
      }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        playsInline
        poster={posterResolved ?? undefined}
        preload={
          isFirst ? "metadata" : posterResolved ? "none" : "metadata"
        }
        muted={videoMuted}
        loop={showEndScreen || (isFirst && !soundOn)}
      >
        <source src={item.src} type="video/mp4" />
      </video>

      {showTailOrEndOverlay ? (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-5 sm:gap-7"
          style={{
            backgroundColor: `rgba(0,0,0,${0.35 * overlayFactor})`,
            backdropFilter: `blur(${10 * overlayFactor}px) saturate(${1 - 0.2 * overlayFactor})`,
            WebkitBackdropFilter: `blur(${10 * overlayFactor}px) saturate(${1 - 0.2 * overlayFactor})`,
            pointerEvents: showEndScreen ? "auto" : "none",
          }}
          role={showEndScreen ? "dialog" : undefined}
          aria-hidden={!showEndScreen}
          aria-label={showEndScreen ? "Koniec ukážky" : undefined}
        >
          {showEndScreen ? (
            <div className="student-video-end-cta flex max-w-[min(100%,18rem)] flex-col items-center justify-center gap-6 text-center sm:max-w-[20rem] sm:gap-7">
              <p className="font-heading text-[clamp(1.2rem,4vw,1.65rem)] leading-[1.15] font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)]">
                Dopozeraj celé video
              </p>
              <a
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={endScreenPlayCta}
                onClick={(e) => e.stopPropagation()}
              >
                Prehrať
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      {showPlayOverlay ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-[5rem] w-[5rem] translate-x-1 text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.9),0_0_2px_rgba(0,0,0,0.5)] sm:h-[5.75rem] sm:w-[5.75rem] sm:translate-x-1.5"
            aria-hidden
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : null}

      {showSoundHint ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 pb-3 pt-10 text-center">
          <span className="text-xs font-medium text-white drop-shadow-sm sm:text-sm">
            Kliknutím zapneš zvuk
          </span>
        </div>
      ) : null}
    </div>
  );
});
