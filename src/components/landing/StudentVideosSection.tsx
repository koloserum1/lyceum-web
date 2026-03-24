import type { StudentVideo } from "@/content/studentVideos";
import { StudentVideoCard } from "@/components/landing/StudentVideoCard";

type Props = {
  items: StudentVideo[];
};

export function StudentVideosSection({ items }: Props) {
  return (
    <div
      className="-mx-4 snap-x snap-mandatory overflow-x-auto overflow-y-visible overscroll-x-contain scroll-pl-4 scroll-pr-4 px-4 pb-2 pt-1 [scrollbar-gutter:stable] sm:-mx-6 sm:scroll-pl-6 sm:scroll-pr-6 sm:px-6 lg:-mx-8 lg:scroll-pl-8 lg:scroll-pr-8 lg:px-8"
      role="region"
      aria-label="Videá študentov — posun doprava"
    >
      <div className="flex w-max min-w-0 flex-nowrap gap-6 md:gap-8">
        {items.map((v, index) => (
          <article
            key={v.id}
            className="group relative w-[min(78vw,280px)] shrink-0 snap-start pt-7 pr-5 sm:w-[min(72vw,300px)] sm:pt-8 sm:pr-6"
            aria-label={`Video — ${v.name}`}
          >
            <div
              className="absolute top-0 right-0 z-20 origin-bottom-left translate-x-[26%] -translate-y-[11%] rotate-[9deg] rounded-full border border-black/[0.08] bg-brand-secondary px-3.5 py-1.5 shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] sm:translate-x-[22%] sm:-translate-y-[9%] sm:rotate-[8deg] sm:px-4 sm:py-2"
            >
              <span className="font-heading text-[0.9rem] font-bold leading-none tracking-tight text-brand-fg1 sm:text-[0.95rem]">
                {v.name}
              </span>
            </div>

            <div
              className="relative w-full overflow-hidden rounded-[20px] bg-brand-bg2 ring-1 ring-black/[0.06] shadow-[0_12px_40px_-20px_rgba(27,22,36,0.2)] transition-shadow duration-300 group-hover:shadow-[0_16px_48px_-18px_rgba(27,22,36,0.25)]"
            >
              <div className="aspect-[9/16] w-full">
                {v.src ? (
                  <StudentVideoCard item={v} index={index} />
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
          </article>
        ))}
      </div>
    </div>
  );
}
