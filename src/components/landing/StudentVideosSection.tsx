"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { StudentVideo } from "@/content/studentVideos";
import {
  StudentVideoCard,
  endScreenPlayCta,
  type StudentVideoCardHandle,
} from "@/components/landing/StudentVideoCard";
import { useVideoPosterDataUrl } from "@/hooks/useVideoPosterDataUrl";

const LYCEUM_INSTAGRAM_URL =
  "https://www.instagram.com/lyceumcsl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

type Props = {
  items: StudentVideo[];
};

/** Rovnaký vizuál ako koniec ukážky videa: prvé video + prekryv + text + bubble „Prehrať“. */
function InstagramMoreCta({
  videoSrc,
  profileUrl,
}: {
  videoSrc: string;
  profileUrl: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterUrl = useVideoPosterDataUrl(videoSrc, { delayMs: 200 });

  useLayoutEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.loop = true;
    v.currentTime = 0;
  }, [videoSrc]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const v = videoRef.current;
    if (!wrap || !v) return;

    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries[0]?.isIntersecting ?? false;
        if (inView) {
          void v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { root: null, rootMargin: "0px 0px 64px 0px", threshold: 0.1 },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, [videoSrc]);

  return (
    <div
      ref={wrapRef}
      className="relative z-0 w-full overflow-hidden rounded-[20px] bg-brand-bg2 ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(27,22,36,0.2)] transition-shadow duration-300 group-hover:shadow-[0_16px_48px_-18px_rgba(27,22,36,0.25)]"
    >
      <div className="relative aspect-[9/16] w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          playsInline
          muted
          loop
          poster={posterUrl ?? undefined}
          preload={posterUrl ? "none" : "metadata"}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-5 sm:gap-7"
          style={{
            backgroundColor: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(10px) saturate(0.8)",
            WebkitBackdropFilter: "blur(10px) saturate(0.8)",
            pointerEvents: "auto",
          }}
          role="dialog"
          aria-label="Instagram Lýceum"
        >
          <div className="student-video-end-cta flex max-w-[min(100%,18rem)] flex-col items-center justify-center gap-6 text-center sm:max-w-[20rem] sm:gap-7">
            <p className="font-heading text-[clamp(1.2rem,4vw,1.65rem)] leading-[1.15] font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)]">
              Pozri si viac na našom instagrame
            </p>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={endScreenPlayCta}
            >
              Prehrať
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCarouselIndicators({
  count,
  activeIndex,
  progress,
  labels,
  onSelect,
}: {
  count: number;
  activeIndex: number;
  progress: number;
  labels: string[];
  onSelect: (index: number) => void;
}) {
  const safe = Math.min(1, Math.max(0, progress));

  return (
    <div
      className="mt-7 flex justify-center px-2 sm:mt-8"
      role="tablist"
      aria-label="Posun medzi videami"
    >
      <div className="flex max-w-full items-center gap-2.5 rounded-full border border-black/[0.08] bg-white/90 px-4 py-3 shadow-[0_8px_28px_-10px_rgba(0,0,0,0.1)] ring-1 ring-white/80 backdrop-blur-md sm:gap-3 sm:px-5 sm:py-3.5">
        {Array.from({ length: count }, (_, i) => {
          const isActive = i === activeIndex;
          const fill = isActive ? safe : 0;
          const label = labels[i] ?? `Video ${i + 1}`;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={isActive ? `${label}, priebeh ${Math.round(safe * 100)} %` : `Prejsť na ${label}`}
              onClick={() => onSelect(i)}
              className={[
                "relative shrink-0 ease-[cubic-bezier(0.33,0.1,0.2,1)]",
                "transition-[min-width,width,height,border-radius,background-color,box-shadow] duration-700",
                isActive
                  ? "h-2.5 min-w-[3.75rem] overflow-hidden rounded-full bg-black/[0.1] sm:min-w-[4rem]"
                  : "h-2.5 w-2.5 rounded-full bg-black/[0.14] hover:bg-black/25",
              ].join(" ")}
            >
              <span
                className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                style={{
                  transform: `scaleX(${fill})`,
                  willChange: "transform",
                  transition: isActive ? "none" : "transform 0.45s cubic-bezier(0.33,0.1,0.2,1)",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function StudentVideosSection({ items }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(StudentVideoCardHandle | null)[]>([]);
  const activeIndexRef = useRef(0);
  const playAfterScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Bodky = posledné explicitne zvolené video (klik na kartu / bodku), nie podľa scrollu ani resize */
  const userChoseCarouselRef = useRef(false);
  /** Ignorovať scroll z programového scrollIntoView hneď po mounte */
  const suppressScrollSyncRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFraction, setActiveFraction] = useState(0);

  activeIndexRef.current = activeIndex;

  const centerFirstItemInCarousel = useCallback(() => {
    const root = scrollRef.current;
    const el = itemRefs.current[0];
    if (!root || !el) return;
    el.scrollIntoView({ inline: "center", block: "nearest", behavior: "auto" });
  }, []);

  /** Pri načítaní vycentrovať prvé video — inak je „v strede“ iná karta (napr. Matúš) */
  useLayoutEffect(() => {
    suppressScrollSyncRef.current = true;
    centerFirstItemInCarousel();
    activeIndexRef.current = 0;
    setActiveIndex(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        suppressScrollSyncRef.current = false;
      });
    });
  }, [items.length, centerFirstItemInCarousel]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setActiveFraction(0));
    return () => cancelAnimationFrame(id);
  }, [activeIndex]);

  const onPlaybackProgress = useCallback((idx: number, fraction: number) => {
    if (idx !== activeIndexRef.current) return;
    setActiveFraction(fraction);
  }, []);

  useEffect(() => {
    const onWindowResize = () => {
      if (userChoseCarouselRef.current) return;
      suppressScrollSyncRef.current = true;
      centerFirstItemInCarousel();
      activeIndexRef.current = 0;
      setActiveIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          suppressScrollSyncRef.current = false;
        });
      });
    };

    window.addEventListener("resize", onWindowResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [centerFirstItemInCarousel]);

  const scrollToIndex = useCallback((i: number) => {
    const el = itemRefs.current[i];
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const handleVideoCarouselInteract = useCallback(
    (i: number) => {
      userChoseCarouselRef.current = true;
      cardRefs.current.forEach((h, idx) => {
        if (idx !== i) h?.pauseFromCarousel();
      });
      activeIndexRef.current = i;
      setActiveIndex(i);
      scrollToIndex(i);
    },
    [scrollToIndex],
  );

  const handleIndicatorSelect = useCallback(
    (i: number) => {
      userChoseCarouselRef.current = true;
      activeIndexRef.current = i;
      setActiveIndex(i);
      cardRefs.current.forEach((h) => h?.pauseFromCarousel());
      scrollToIndex(i);
      if (playAfterScrollTimer.current) {
        clearTimeout(playAfterScrollTimer.current);
      }
      playAfterScrollTimer.current = setTimeout(() => {
        playAfterScrollTimer.current = null;
        cardRefs.current[i]?.playFromCarousel();
      }, 480);
    },
    [scrollToIndex],
  );

  useEffect(() => {
    return () => {
      if (playAfterScrollTimer.current) {
        clearTimeout(playAfterScrollTimer.current);
      }
    };
  }, []);

  const labels = items.map((it) => it.name);

  return (
    <div>
      <div
        ref={scrollRef}
        className="-mx-4 no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth scroll-pl-4 scroll-pr-4 px-4 pb-2 pt-1 sm:-mx-6 sm:scroll-pl-6 sm:scroll-pr-6 sm:px-6 lg:-mx-8 lg:scroll-pl-8 lg:scroll-pr-8 lg:px-8"
        role="region"
        aria-label="Videá študentov — posun doprava"
      >
        <div className="flex w-max min-w-0 flex-nowrap gap-6 md:gap-8">
          {items.map((v, index) => (
            <article
              key={v.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="group relative isolate w-[min(78vw,280px)] shrink-0 snap-start pt-7 pr-5 sm:w-[min(72vw,300px)] sm:pt-8 sm:pr-6"
              aria-label={`Video — ${v.name}`}
            >
              <div
                className="relative z-0 w-full overflow-hidden rounded-[20px] bg-brand-bg2 ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(27,22,36,0.2)] transition-shadow duration-300 group-hover:shadow-[0_16px_48px_-18px_rgba(27,22,36,0.25)]"
              >
                <div className="aspect-[9/16] w-full">
                  {v.src ? (
                    <StudentVideoCard
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      item={v}
                      index={index}
                      isActive={activeIndex === index}
                      onPlaybackProgress={onPlaybackProgress}
                      onCarouselInteract={handleVideoCarouselInteract}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-bg2 via-brand-bg2 to-brand-primary/15 px-5 text-center">
                      <span className="font-heading text-xs font-semibold text-brand-fg1/80 sm:text-sm">
                        9:16 · video čoskoro
                      </span>
                      <span className="max-w-[9rem] text-[0.7rem] leading-snug text-brand-fg3 sm:max-w-[11rem] sm:text-xs">
                        Sem vložíme súbor, ktorý pošleš.
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div
                className="pointer-events-none absolute top-0 right-0 z-50 origin-bottom-left translate-x-[26%] -translate-y-[11%] rotate-[9deg] rounded-full bg-brand-secondary px-3.5 py-1.5 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] sm:translate-x-[22%] sm:-translate-y-[9%] sm:rotate-[8deg] sm:px-4 sm:py-2"
              >
                <span className="font-heading text-[0.9rem] font-bold leading-none tracking-tight text-brand-fg1 sm:text-[0.95rem]">
                  {v.name}
                </span>
              </div>
            </article>
          ))}

          <div className="group relative isolate flex w-[min(78vw,280px)] shrink-0 snap-start flex-col items-stretch justify-center pt-7 pr-5 sm:w-[min(72vw,300px)] sm:pt-8 sm:pr-6">
            {items[0]?.src ? (
              <InstagramMoreCta
                videoSrc={items[0].src}
                profileUrl={LYCEUM_INSTAGRAM_URL}
              />
            ) : (
              <a
                href={LYCEUM_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading relative flex aspect-[9/16] w-full flex-col items-center justify-center overflow-hidden rounded-[20px] bg-brand-bg2 text-center ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(27,22,36,0.2)] transition-shadow duration-300 hover:shadow-[0_16px_48px_-18px_rgba(27,22,36,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                aria-label="Pozri si viac na našom Instagrame (otvorí sa na novej karte)"
              >
                <span className="px-5 text-sm font-semibold text-brand-fg2">
                  Instagram
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      <VideoCarouselIndicators
        count={items.length}
        activeIndex={activeIndex}
        progress={activeFraction}
        labels={labels}
        onSelect={handleIndicatorSelect}
      />
    </div>
  );
}
