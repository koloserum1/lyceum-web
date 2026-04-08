"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { TeacherReference } from "@/content/teacherReferences";

/** Približne polovica textu na odrezanie (na medzeru), aby nebolo orezané v strede slova. */
function splitQuoteForPreview(text: string): { first: string; second: string } {
  const t = text.trim();
  if (t.length < 160) return { first: t, second: "" };
  const mid = Math.floor(t.length / 2);
  let cut = t.lastIndexOf(" ", mid + 24);
  if (cut < 40) cut = t.indexOf(" ", mid);
  if (cut <= 0 || cut >= t.length - 8) return { first: t, second: "" };
  return {
    first: t.slice(0, cut).trim(),
    second: t.slice(cut).trim(),
  };
}

function TeacherQuoteMobileExpandable({
  quote,
  itemId,
  motionClass,
}: {
  quote: string;
  itemId: string;
  motionClass: string;
}) {
  const { first, second } = splitQuoteForPreview(quote);
  const needsToggle = Boolean(second);
  const [open, setOpen] = useState(false);

  if (!needsToggle) {
    return (
      <p className={`m-0 ${motionClass} text-[14px] font-normal leading-relaxed text-brand-fg1`}>
        {quote}
      </p>
    );
  }

  return (
    <div>
      <p
        id={`teacher-quote-${itemId}`}
        className={`m-0 ${motionClass} text-[14px] font-normal leading-relaxed text-brand-fg1`}
      >
        {open ? quote : `${first} …`}
      </p>
      {!open ? (
        <button
          type="button"
          className="mt-3 touch-manipulation text-left text-[13px] font-semibold text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors hover:text-brand-fg1"
          aria-expanded={false}
          aria-controls={`teacher-quote-${itemId}`}
          onClick={() => setOpen(true)}
        >
          Chcem vedieť viac
        </button>
      ) : (
        <button
          type="button"
          className="mt-3 touch-manipulation text-left text-[13px] font-normal text-brand-fg3 underline decoration-brand-fg4 underline-offset-2"
          aria-expanded
          onClick={() => setOpen(false)}
        >
          Zobraziť menej
        </button>
      )}
    </div>
  );
}

function scrollCarouselItemIntoCenter(
  root: HTMLDivElement,
  el: HTMLElement,
  behavior: ScrollBehavior,
) {
  const rootRect = root.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const delta =
    elRect.left + elRect.width / 2 - (rootRect.left + rootRect.width / 2);
  const max = Math.max(0, root.scrollWidth - root.clientWidth);
  const next = Math.max(0, Math.min(max, root.scrollLeft + delta));
  root.scrollTo({ left: next, behavior });
}

function TeacherPhoto({
  name,
  imageSrc,
  photoKey,
}: {
  name: string;
  imageSrc: string | null;
  photoKey: string;
}) {
  const initial = name.trim().charAt(0) || "?";
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setLoadError(false);
  }, [photoKey]);

  const showImage = Boolean(imageSrc) && !loadError;

  return (
    <div
      className="relative z-0 w-full overflow-hidden rounded-[20px] bg-brand-bg2 ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(27,22,36,0.2)] transition-shadow duration-300 group-hover:shadow-[0_16px_48px_-18px_rgba(27,22,36,0.25)]"
    >
      <div className="relative aspect-[3/4] w-full">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element -- lokálne JPEG z public; next/image + Sharp často zlyhá pri niektorých exportoch
          <img
            src={imageSrc!}
            alt={`Portrét (${name})`}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
            onError={() => setLoadError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-brand-bg2 via-brand-bg2 to-brand-primary/[0.18]
              px-4 text-center"
            aria-hidden
          >
            <span className="font-heading text-[clamp(2.5rem,12vw,4rem)] font-bold leading-none text-brand-fg1/[0.22]">
              {initial}
            </span>
            <span className="mt-3 max-w-[12rem] text-[11px] font-medium uppercase tracking-[0.12em] text-brand-fg3">
              {imageSrc ? "Foto sa nenašlo – skontroluj názov súboru" : "Foto doplníme"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function TeacherDotIndicators({
  count,
  activeIndex,
  onSelect,
  labels,
}: {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  labels: string[];
}) {
  return (
    <div
      className="mt-7 flex justify-center px-2 sm:mt-8"
      role="tablist"
      aria-label="Výber referencie učiteľa"
    >
      <div className="flex max-w-full flex-wrap items-center justify-center gap-2.5 rounded-full border border-black/[0.08] bg-white/90 px-4 py-3 shadow-[0_8px_28px_-10px_rgba(0,0,0,0.1)] ring-1 ring-white/80 backdrop-blur-md sm:gap-3 sm:px-5 sm:py-3.5">
        {Array.from({ length: count }, (_, i) => {
          const active = i === activeIndex;
          const label = labels[i] ?? `Učiteľ ${i + 1}`;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={active ? `${label} (aktuálne)` : `Prejsť na ${label}`}
              onClick={() => onSelect(i)}
              className={[
                "h-2.5 w-2.5 shrink-0 touch-manipulation rounded-full transition-[background-color,transform] duration-200 ease-out",
                active
                  ? "scale-100 bg-brand-fg1 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                  : "bg-black/[0.14] hover:bg-black/25",
              ].join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}

type Props = {
  items: readonly TeacherReference[];
};

export function TeachersSection({ items }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const syncActiveRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null,
  );
  const suppressScrollSyncRef = useRef(false);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionOk(!mq.matches);
    const fn = () => setMotionOk(!mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const count = items.length;

  const scrollCarouselToIndex = useCallback(
    (index: number, behavior: ScrollBehavior) => {
      const root = scrollRef.current;
      const el = itemRefs.current[index];
      if (!root || !el) return;
      scrollCarouselItemIntoCenter(root, el, behavior);
    },
    [],
  );

  const centerFirstItemInCarousel = useCallback(() => {
    scrollCarouselToIndex(0, "auto");
  }, [scrollCarouselToIndex]);

  useLayoutEffect(() => {
    suppressScrollSyncRef.current = true;
    centerFirstItemInCarousel();
    setActiveIndex(0);
    activeIndexRef.current = 0;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        suppressScrollSyncRef.current = false;
      });
    });
  }, [items.length, centerFirstItemInCarousel]);

  const syncActiveFromScroll = useCallback(() => {
    const root = scrollRef.current;
    if (!root || suppressScrollSyncRef.current) return;
    const rootRect = root.getBoundingClientRect();
    const center = rootRect.left + rootRect.width / 2;
    let best = 0;
    let bestDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const elCenter = r.left + r.width / 2;
      const dist = Math.abs(elCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveIndex(best);
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const onScroll = () => {
      if (suppressScrollSyncRef.current) return;
      if (syncActiveRef.current) cancelAnimationFrame(syncActiveRef.current);
      syncActiveRef.current = requestAnimationFrame(() => {
        syncActiveRef.current = null;
        syncActiveFromScroll();
      });
    };

    const onTouchEnd = () => {
      if (suppressScrollSyncRef.current) return;
      syncActiveFromScroll();
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    root.addEventListener("touchend", onTouchEnd, { passive: true });
    const scrollEndSupported = "onscrollend" in root;
    if (scrollEndSupported) {
      root.addEventListener("scrollend", onTouchEnd as EventListener);
    }
    return () => {
      root.removeEventListener("scroll", onScroll);
      root.removeEventListener("touchend", onTouchEnd);
      if (scrollEndSupported) {
        root.removeEventListener("scrollend", onTouchEnd as EventListener);
      }
      if (syncActiveRef.current) cancelAnimationFrame(syncActiveRef.current);
    };
  }, [syncActiveFromScroll, items.length]);

  const scrollToIndex = useCallback(
    (i: number) => {
      suppressScrollSyncRef.current = true;
      setActiveIndex(i);
      activeIndexRef.current = i;
      scrollCarouselToIndex(i, "smooth");
      window.setTimeout(() => {
        suppressScrollSyncRef.current = false;
      }, 400);
    },
    [scrollCarouselToIndex],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const i = activeIndexRef.current;
      if (e.key === "ArrowLeft" && i > 0) {
        e.preventDefault();
        scrollToIndex(i - 1);
      }
      if (e.key === "ArrowRight" && i < count - 1) {
        e.preventDefault();
        scrollToIndex(i + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, scrollToIndex]);

  const labels = items.map((it) => it.name);

  if (count === 0) return null;

  return (
    <div>
      <div
        ref={scrollRef}
        className="-mx-4 touch-pan-x no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth scroll-pl-4 scroll-pr-4 px-4 pb-2 pt-1 sm:-mx-6 sm:scroll-pl-6 sm:scroll-pr-6 sm:px-6 lg:-mx-8 lg:scroll-pl-8 lg:scroll-pr-8 lg:px-8 md:mx-0 md:max-w-full md:px-0 md:scroll-pl-0 md:scroll-pr-0 [-webkit-overflow-scrolling:touch]"
        role="region"
        aria-label="Referencie učiteľov, posun doprava"
      >
        <div className="flex w-max min-w-0 flex-nowrap gap-6 md:w-full md:max-w-full md:gap-0">
          {items.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`relative isolate w-[min(78vw,300px)] shrink-0 snap-start pt-7 pr-5 sm:w-[min(72vw,320px)] sm:pt-8 sm:pr-6 md:box-border md:min-w-0 md:w-full md:max-w-full md:flex-[0_0_100%] md:px-0 md:pt-0 md:pr-0 md:z-auto ${
                index === activeIndex ? "max-md:z-20" : "max-md:z-0"
              }`}
              aria-label={`Učiteľ ${item.name}`}
            >
              {/* Mobile / tablet: rovnaký vzor ako „Čo o nás hovoria partneri“ */}
              <div className="md:hidden">
                <div className="group relative flex min-h-[min(72vh,520px)] w-full flex-col overflow-hidden rounded-[20px] bg-brand-bg2 ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(27,22,36,0.2)] transition-shadow duration-300">
                  <div className="flex shrink-0 items-center justify-center border-b border-black/[0.04] bg-brand-bg1/80 px-5 py-8 sm:px-6 sm:py-10">
                    <div className="w-full max-w-[220px]">
                      <TeacherPhoto
                        name={item.name}
                        imageSrc={item.imageSrc}
                        photoKey={item.id}
                      />
                    </div>
                  </div>
                  <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
                    <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                      {item.role}
                    </p>
                    <TeacherQuoteMobileExpandable
                      quote={item.quote}
                      itemId={item.id}
                      motionClass={motionOk ? "animate-teachers-quote-in" : ""}
                    />
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute top-0 right-0 z-[60] origin-bottom-left translate-x-[26%] -translate-y-[7%] rotate-[9deg] rounded-full bg-brand-secondary px-3.5 py-1.5 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] sm:translate-x-[22%] sm:-translate-y-[5%] sm:rotate-[8deg] sm:px-4 sm:py-2"
                  aria-hidden
                >
                  <span className="font-heading block max-w-[12rem] text-center text-[0.9rem] font-bold leading-none tracking-tight text-brand-fg1 sm:max-w-[13rem] sm:text-[0.95rem]">
                    {item.name}
                  </span>
                </div>
              </div>

              {/* Desktop: pôvodný dvojstĺpec */}
              <div className="hidden md:block">
                <div className="box-border w-full max-w-full overflow-x-clip px-5 sm:px-6 lg:px-8">
                  <div
                    className={`flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-x-12 md:gap-y-8 lg:gap-x-16 ${
                      motionOk ? "transition-[opacity] duration-300 ease-out" : ""
                    }`}
                  >
                    <div className="relative isolate mx-auto w-full max-w-[min(78vw,280px)] shrink-0 pt-7 pr-5 sm:max-w-[min(78vw,300px)] sm:pt-8 sm:pr-6 md:mx-0 md:max-w-[min(42vw,320px)] md:pr-10 lg:max-w-[360px] lg:pr-14">
                      <div className="group">
                        <TeacherPhoto
                          name={item.name}
                          imageSrc={item.imageSrc}
                          photoKey={item.id}
                        />
                      </div>
                      <div
                        className="pointer-events-none absolute top-0 right-0 z-[60] origin-bottom-left translate-x-[22%] -translate-y-[7%] rotate-[9deg] rounded-full bg-brand-secondary px-3.5 py-1.5 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] sm:px-4 sm:py-2 lg:translate-x-[26%]"
                        aria-hidden
                      >
                        <span className="font-heading block max-w-[12rem] text-center text-[0.9rem] font-bold leading-none tracking-tight text-brand-fg1 sm:max-w-[13rem] sm:text-[0.95rem]">
                          {item.name}
                        </span>
                      </div>
                      <p className="mt-4 mb-0 w-full text-center text-[11px] font-bold uppercase tracking-wide text-brand-primary md:text-left">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex w-full min-h-0 min-w-0 max-w-full flex-1 flex-col md:min-w-0">
                      <div
                        className="min-h-0 w-full max-w-full flex-1 rounded-[20px] border border-black/[0.06] bg-brand-bg2/60 p-5 shadow-[0_12px_40px_-24px_rgba(27,22,36,0.18)] ring-1 ring-white/80 backdrop-blur-[2px] sm:p-6 md:p-8"
                        role="region"
                        aria-live="polite"
                        aria-label={`Referencia, ${item.name}`}
                      >
                        <p
                          key={item.id}
                          className={`m-0 text-[14px] font-normal leading-relaxed text-brand-fg1 sm:text-[15px] md:text-[16px] md:leading-[1.65] ${
                            motionOk ? "animate-teachers-quote-in" : ""
                          }`}
                        >
                          {item.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <TeacherDotIndicators
        count={items.length}
        activeIndex={activeIndex}
        labels={labels}
        onSelect={scrollToIndex}
      />
    </div>
  );
}
