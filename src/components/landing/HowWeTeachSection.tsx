import Image from "next/image";
import { HeroInteractiveDots } from "@/components/landing/HeroInteractiveDots";
import {
  howWeTeachCategories,
  howWeTeachCategoriesHeading,
  howWeTeachClosing,
  howWeTeachHighlight,
  howWeTeachIntro,
  howWeTeachIntroHeading,
  howWeTeachIntroImageAlt,
  howWeTeachIntroImageSrc,
} from "@/content/howWeTeach";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

export function HowWeTeachSection() {
  return (
    <section
      id="ako-ucime"
      aria-labelledby="ako-ucime-heading"
      className="scroll-mt-24 bg-brand-bg1 py-10 md:scroll-mt-28 md:py-12"
    >
      <div className={CX}>
        <div className="relative overflow-hidden rounded-[24px] bg-brand-bg2 ring-1 ring-black/[0.04]">
          <HeroInteractiveDots
            dotColor="rgba(29, 31, 35, 0.1)"
            textMaskSelector=".how-we-teach-text-cluster"
            pointerInteraction={false}
          />
          <div className="relative z-[1] grid gap-8 p-6 sm:p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:items-center md:gap-10 md:p-8 lg:gap-12 lg:p-9">
            <figure className="m-0 w-full max-w-[min(100%,440px)] justify-self-center overflow-hidden rounded-2xl shadow-md ring-1 ring-black/[0.04] lg:max-w-[min(100%,480px)]">
              <div className="relative mx-auto aspect-[16/10] w-full max-w-full md:aspect-[4/3]">
                <Image
                  src={howWeTeachIntroImageSrc}
                  alt={howWeTeachIntroImageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </figure>
            <div className="how-we-teach-text-cluster min-w-0">
              <h2
                id="ako-ucime-heading"
                className="font-heading m-0 text-[clamp(1.65rem,1.1rem+2.2vw,2.65rem)] leading-[1.1] tracking-tight text-brand-fg1"
              >
                {howWeTeachIntroHeading}
              </h2>
              <p className="mt-3 mb-0 max-w-[min(100%,40rem)] text-[clamp(0.98rem,0.9rem+0.4vw,1.3125rem)] font-normal leading-[1.55] text-brand-fg1 md:mt-4 md:leading-[1.58]">
                {howWeTeachIntro}
              </p>
            </div>
          </div>
        </div>

        {/* Kategórie: biele pozadie, striedanie obrázok vľavo/vpravo, bez šedého panelu */}
        <div className="relative isolate mt-10 md:mt-14">
          <div role="region" aria-labelledby="ako-ucime-oblasti-heading">
            <h3
              id="ako-ucime-oblasti-heading"
              className="font-heading m-0 max-w-[min(100%,42rem)] text-[clamp(1.25rem,1.05rem+1vw,1.85rem)] leading-tight tracking-tight text-brand-fg1"
            >
              {howWeTeachCategoriesHeading}
            </h3>
            <div className="mt-8 flex flex-col gap-12 md:mt-10 md:gap-14 lg:gap-16">
            {howWeTeachCategories.map((cat) => (
              <article
                key={cat.id}
                className="border-0 bg-transparent p-0 shadow-none ring-0"
              >
                <div
                  className={`grid gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-12 ${
                    !cat.imageSrc ? "md:grid-cols-1" : ""
                  }`}
                >
                  {cat.imageSrc ? (
                    <figure
                      className={`m-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/[0.06] ${
                        cat.imageSide === "end" ? "md:order-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] md:aspect-[4/3]">
                        <Image
                          src={cat.imageSrc}
                          alt={cat.imageAlt}
                          fill
                          className="z-0 object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 45vw"
                        />
                        {cat.id === "triedy-spolupraca" ? (
                          <div
                            className="pointer-events-none absolute right-2 top-2 z-10 origin-center rotate-[8deg] sm:right-3 sm:top-3 md:right-4 md:top-4"
                            aria-hidden
                          >
                            <div className="rounded-full bg-brand-secondary px-3.5 py-1.5 text-center shadow-[0_3px_14px_-3px_rgba(27,22,36,0.22)] sm:px-4 sm:py-2">
                              <span className="font-heading text-[0.9rem] font-bold leading-none tracking-tight text-brand-fg1 sm:text-[0.95rem]">
                                {howWeTeachHighlight}
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </figure>
                  ) : null}
                  <div
                    className={`min-w-0 ${
                      cat.imageSrc && cat.imageSide === "end"
                        ? "md:order-1"
                        : ""
                    }`}
                  >
                    <h4 className="font-heading m-0 text-[clamp(1.35rem,1.08rem+0.9vw,1.85rem)] leading-tight tracking-tight text-brand-fg1">
                      {cat.title}
                    </h4>
                    <ul className="m-0 mt-4 list-disc space-y-3 pl-[1.2rem] text-brand-fg1 sm:mt-5 sm:space-y-3.5 sm:pl-5 marker:text-brand-fg3">
                      {cat.points.map((text, i) => (
                        <li
                          key={i}
                          className="ps-0.5 text-[15px] font-normal leading-relaxed sm:text-[16px] md:text-[17px] md:leading-[1.6]"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
            </div>
          </div>

          <div className="mt-8 border-t border-black/[0.08] pt-8 md:mt-10 md:pt-10">
            <p className="m-0 max-w-[min(100%,48rem)] text-[14px] font-normal leading-relaxed text-brand-fg1 sm:text-[15px] md:text-[16px] md:leading-[1.65]">
              {howWeTeachClosing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
