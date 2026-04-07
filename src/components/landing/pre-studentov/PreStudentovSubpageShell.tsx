import type { ReactNode } from "react";
import Link from "next/link";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

type Props = {
  title: string;
  slug: string;
  /** Bez max-width obmedzenia (embed PDF a pod.) */
  wideContent?: boolean;
  children?: ReactNode;
};

export function PreStudentovSubpageShell({
  title,
  slug,
  wideContent = false,
  children,
}: Props) {
  return (
    <main
      id={`pre-studentov-${slug}`}
      className="scroll-mt-24 bg-white pb-10 md:scroll-mt-28 md:pb-14"
    >
      <div className={`${CX} pt-6 md:pt-8`}>
        <section
          className="overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-[0_12px_40px_-24px_rgba(0,0,0,0.12)] md:rounded-[28px]"
          aria-labelledby={`pre-studentov-h1-${slug}`}
        >
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <nav
              className="mb-6 text-[13px] md:mb-8"
              aria-label="Oblasť stránky"
            >
              <Link
                href="/#studenti-videa"
                className="font-medium text-brand-primary underline decoration-[#b9a0e0]/45 underline-offset-2 hover:decoration-brand-primary"
              >
                Pre študentov
              </Link>
              <span className="mx-2 text-brand-fg3" aria-hidden>
                /
              </span>
              <span className="text-brand-fg1">{title}</span>
            </nav>

            <h1
              id={`pre-studentov-h1-${slug}`}
              className="font-heading m-0 max-w-3xl text-[clamp(1.75rem,1.1rem+2.4vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-brand-fg1"
            >
              {title}
            </h1>

            <div
              className={`mt-6 text-[15px] font-normal leading-relaxed sm:text-[16px] md:mt-8 md:text-[17px] md:leading-[1.62] ${
                wideContent ? "max-w-none" : "max-w-3xl text-brand-fg3"
              }`}
            >
              {children ?? (
                <p className="m-0 text-brand-fg3">
                  Obsah tejto stránky pripravíme. Sem môžete neskôr doplniť texty a
                  súbory.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
