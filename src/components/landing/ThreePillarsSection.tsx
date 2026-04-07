import Image from "next/image";
import Link from "next/link";
import { pillars, pillarsIntro } from "@/content/pillars";

/** Tri karty s fotkou a prekrývajúcim sa textovým boxom. */
export function ThreePillarsSection() {
  return (
    <section
      id="tri-piliere"
      aria-labelledby="tri-piliere-heading"
      className="scroll-mt-24 bg-brand-bg2/80 py-10 md:scroll-mt-28 md:py-14"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2
            id="tri-piliere-heading"
            className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.5vw,2.85rem)] leading-[1.1] tracking-tight text-brand-fg1"
          >
            {pillarsIntro.title}
          </h2>
          <p className="mt-4 mb-0 text-[15px] font-normal leading-relaxed text-brand-fg3 md:mt-5 md:text-base md:leading-relaxed">
            {pillarsIntro.paragraph}
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:gap-7 md:mt-12 md:grid-cols-3 md:gap-6 lg:gap-8">
          {pillars.map((p) => (
            <Link
              key={p.slug}
              href={`/piliere/${p.slug}`}
              className="group relative isolate block aspect-[4/5] w-full overflow-hidden rounded-[22px] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.2)] ring-1 ring-black/[0.06] transition-[box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none hover:shadow-[0_26px_56px_-24px_rgba(0,0,0,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#562082]"
            >
              <Image
                src={p.imageSrc}
                alt=""
                fill
                className="object-cover object-center transition-transform duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.016] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/[0.06]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-black/[0.05] motion-reduce:transition-none motion-reduce:group-hover:bg-transparent"
                aria-hidden
              />

              <div className="absolute inset-x-0 bottom-0 z-[1] p-3 sm:p-4 md:inset-x-auto md:right-3 md:bottom-3 md:left-auto md:w-[min(100%,88%)] md:max-w-[340px] lg:right-4 lg:bottom-4">
                <div className="rounded-xl border border-black/[0.07] bg-[#fdfbf7] p-4 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.16)] transition-shadow duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_16px_44px_-22px_rgba(0,0,0,0.2)] motion-reduce:transition-none sm:p-5">
                  <h3 className="font-heading m-0 text-[clamp(1.25rem,1rem+1.2vw,1.65rem)] leading-[1.12] tracking-tight text-brand-fg1">
                    {p.title}
                  </h3>
                  <p className="mt-2 mb-0 text-[13px] font-normal leading-snug text-brand-fg3 md:text-[14px]">
                    {p.lead}
                  </p>
                  <p className="mt-3 mb-0 text-xs font-medium text-brand-primary">
                    Čítať viac
                    <span aria-hidden> →</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
