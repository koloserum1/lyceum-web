"use client";

import { useEffect, useRef, useState } from "react";
import type { StudentVideo } from "@/content/studentVideos";

type Props = {
  item: StudentVideo;
  index: number;
};

const bubbleYellow =
  "inline-flex items-center justify-center rounded-full border border-black/[0.08] bg-brand-secondary px-5 py-2.5 text-center font-heading text-sm font-bold tracking-tight text-brand-fg1 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] transition-transform hover:bg-brand-tertiary active:scale-[0.98] sm:px-6 sm:text-[0.95rem]";

export function StudentVideoCard({ item, index }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const isFirst = index === 0;
  const [soundOn, setSoundOn] = useState(false);
  const [paused, setPaused] = useState(!isFirst);
  const [showEndScreen, setShowEndScreen] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || !item.src) return;

    const onPause = () => setPaused(true);
    const onPlay = () => setPaused(false);
    const onEnded = () => {
      v.muted = true;
      v.currentTime = 0;
      v.loop = true;
      setSoundOn(false);
      void v.play().catch(() => {});
      setPaused(false);
      setShowEndScreen(true);
    };

    v.addEventListener("pause", onPause);
    v.addEventListener("play", onPlay);
    v.addEventListener("ended", onEnded);

    if (isFirst) {
      v.muted = true;
      v.loop = false;
      void v.play().catch(() => {});
      setPaused(false);
    }

    return () => {
      v.removeEventListener("pause", onPause);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("ended", onEnded);
    };
  }, [item.src, isFirst]);

  const handleRootClick = () => {
    if (showEndScreen) return;
    const v = ref.current;
    if (!v || !item.src) return;

    if (isFirst) {
      if (!soundOn) {
        v.currentTime = 0;
        v.muted = false;
        setSoundOn(true);
        void v.play();
        return;
      }
      if (v.paused) void v.play();
      else v.pause();
      return;
    }

    v.muted = false;
    if (v.paused) void v.play();
    else v.pause();
  };

  if (!item.src) return null;

  const showPlayOverlay =
    !showEndScreen &&
    ((!isFirst && paused) || (isFirst && soundOn && paused));
  const showSoundHint = isFirst && !soundOn && !showEndScreen;

  const videoMuted = showEndScreen || (isFirst && !soundOn);

  return (
    <div
      className={`relative aspect-[9/16] w-full ${showEndScreen ? "cursor-default" : "cursor-pointer"}`}
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
        ref={ref}
        className={`h-full w-full object-cover transition-[filter] duration-500 ${showEndScreen ? "scale-[1.02] blur-[3px]" : ""}`}
        playsInline
        preload={isFirst ? "auto" : "metadata"}
        muted={videoMuted}
        loop={showEndScreen}
      >
        <source src={item.src} type="video/mp4" />
      </video>

      {showEndScreen ? (
        <div
          className="student-video-end-overlay absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-black/30 px-5 backdrop-blur-md backdrop-saturate-75 sm:gap-7"
          role="dialog"
          aria-label="Koniec ukážky"
        >
          <div className="student-video-end-cta flex max-w-[min(100%,18rem)] flex-col items-center gap-6 text-center sm:max-w-[20rem] sm:gap-7">
            <p className="font-heading text-[clamp(1.2rem,4vw,1.65rem)] leading-[1.15] font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)]">
              Dopožeraj celé video
            </p>
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={bubbleYellow}
              onClick={(e) => e.stopPropagation()}
            >
              Prehrať
            </a>
          </div>
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
}
