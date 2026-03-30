"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { PartnerReference } from "@/content/partnerReferences";

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

function LogoPlaceholder({ partnerName }: { partnerName: string }) {
  return (
    <div
      className="flex min-h-[120px] w-full max-w-[280px] items-center justify-center rounded-xl border border-dashed border-black/12 bg-brand-bg1/80 px-6 py-8 sm:min-h-[140px]"
      aria-hidden
    >
      <span className="text-center font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-brand-fg3">
        Logo · {partnerName}
      </span>
    </div>
  );
}

function PartnerLogo({
  partnerName,
  logoSrc,
}: {
  partnerName: string;
  logoSrc: string | null;
}) {
  const svg = logoSrc?.endsWith(".svg");
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setLoadError(false);
  }, [logoSrc]);

  if (!logoSrc || loadError) {
    return <LogoPlaceholder partnerName={partnerName} />;
  }

  return (
    <div className="flex w-full max-w-[280px] items-center justify-center">
      <Image
        src={logoSrc}
        alt={`Logo ${partnerName}`}
        width={320}
        height={120}
        className="h-auto max-h-32 w-auto max-w-full object-contain object-center sm:max-h-36 md:max-h-40"
        unoptimized={svg}
        onError={() => setLoadError(true)}
      />
    </div>
  );
}

function DotIndicators({
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
      aria-label="Posun medzi referenciami partnerov"
    >
      <div className="flex max-w-full flex-wrap items-center justify-center gap-2.5 rounded-full border border-black/[0.08] bg-white/90 px-4 py-3 shadow-[0_8px_28px_-10px_rgba(0,0,0,0.1)] ring-1 ring-white/80 backdrop-blur-md sm:gap-3 sm:px-5 sm:py-3.5">
        {Array.from({ length: count }, (_, i) => {
          const active = i === activeIndex;
          const label = labels[i] ?? `Referencia ${i + 1}`;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={active ? `${label} (aktuálne)` : `Prejsť na ${label}`}
              onClick={() => onSelect(i)}
              className={[
                "h-2.5 w-2.5 shrink-0 rounded-full transition-[background-color,transform] duration-200 ease-out",
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
  items: readonly PartnerReference[];
};

export function PartnerReferencesSection({ items }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const syncActiveRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null,
  );
  const suppressScrollSyncRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

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
  }, [scrollCarouselToIndex]);

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

    root.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      root.removeEventListener("scroll", onScroll);
      if (syncActiveRef.current) cancelAnimationFrame(syncActiveRef.current);
    };
  }, [syncActiveFromScroll, items.length]);

  const scrollToIndex = useCallback(
    (i: number) => {
      suppressScrollSyncRef.current = true;
      setActiveIndex(i);
      scrollCarouselToIndex(i, "smooth");
      window.setTimeout(() => {
        suppressScrollSyncRef.current = false;
      }, 400);
    },
    [scrollCarouselToIndex],
  );

  const labels = items.map((it) => it.badgeLabel);

  if (items.length === 0) return null;

  return (
    <div>
      <div
        ref={scrollRef}
        className="-mx-4 no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth scroll-pl-4 scroll-pr-4 px-4 pb-2 pt-1 sm:-mx-6 sm:scroll-pl-6 sm:scroll-pr-6 sm:px-6 lg:-mx-8 lg:scroll-pl-8 lg:scroll-pr-8 lg:px-8"
        role="region"
        aria-label="Referencie partnerov — posun doprava"
      >
        <div className="flex w-max min-w-0 flex-nowrap gap-6 md:gap-8">
          {items.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="group relative isolate w-[min(78vw,300px)] shrink-0 snap-start pt-7 pr-5 sm:w-[min(72vw,320px)] sm:pt-8 sm:pr-6"
              aria-label={`Referencia — ${item.partnerName}`}
            >
              <div
                className="relative z-0 flex min-h-[min(72vh,520px)] w-full flex-col overflow-hidden rounded-[20px] bg-brand-bg2 ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(27,22,36,0.2)] transition-shadow duration-300 group-hover:shadow-[0_16px_48px_-18px_rgba(27,22,36,0.25)]"
              >
                <div className="flex shrink-0 items-center justify-center border-b border-black/[0.04] bg-brand-bg1/80 px-5 py-8 sm:px-6 sm:py-10">
                  <PartnerLogo
                    partnerName={item.partnerName}
                    logoSrc={item.logoSrc}
                  />
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
                  <p className="m-0 text-[14px] font-normal leading-relaxed text-brand-fg1 sm:text-[15px] md:text-[16px] md:leading-[1.65]">
                    {item.quote}
                  </p>
                </div>
              </div>

              <div
                className="pointer-events-none absolute top-0 right-0 z-50 origin-bottom-left translate-x-[26%] -translate-y-[11%] rotate-[9deg] rounded-full bg-brand-secondary px-3.5 py-1.5 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] sm:translate-x-[22%] sm:-translate-y-[9%] sm:rotate-[8deg] sm:px-4 sm:py-2"
              >
                <span className="font-heading block max-w-[12rem] text-center text-[0.9rem] font-bold leading-none tracking-tight text-brand-fg1 sm:max-w-[13rem] sm:text-[0.95rem]">
                  {item.badgeLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <DotIndicators
        count={items.length}
        activeIndex={activeIndex}
        labels={labels}
        onSelect={scrollToIndex}
      />
    </div>
  );
}
