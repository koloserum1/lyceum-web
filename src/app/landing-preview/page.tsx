import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { HeroInteractiveDots } from "@/components/landing/HeroInteractiveDots";
import { SiteContactFooter } from "@/components/landing/SiteContactFooter";
import { MaturitnyReportMarkdown } from "@/components/report/MaturitnyReportMarkdown";
import { CONTENT_SHELL_CLASS } from "@/lib/content-shell";

const HERO_IMG = "/hero-lyceum.jpg";

/** Rovnaký shell ako hero + text; pri tlači jednotné okraje ako pri A4. */
const SHELL = `${CONTENT_SHELL_CLASS} report-print-shell`;

export const metadata: Metadata = {
  title: "Odborný report — maturitný projekt (náhľad)",
  description:
    "Odborný report k projektu redizajnu webu Lýcea. Náhľad pre tlač a PDF.",
  robots: { index: false, follow: false },
};

/** Pri úprave .md súboru sa obsah znovu načíta bez rebuildu (dev aj produkcia s čerstvým HTML). */
export const dynamic = "force-dynamic";

export default function LandingPreviewPage() {
  return (
    <>
      <Header />
      <main
        id="report-domov"
        className="report-print-page scroll-mt-24 bg-brand-bg1 md:scroll-mt-28"
      >
        <div className="mt-2 pb-0 sm:mt-3 md:mt-4">
          <div
            className={`${SHELL} home-hero-top-shell relative overflow-hidden rounded-[24px] bg-brand-bg2 pb-6 pt-6 md:pb-8 md:pt-8`}
          >
            <HeroInteractiveDots />
            <div className="home-hero-top-cols relative z-[1]">
              <div className="hero-top-col-photo">
                <figure className="m-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/[0.04]">
                  <Image
                    src={HERO_IMG}
                    alt="Lýceum C. S. Lewisa — ilustračná fotografia k reportu"
                    width={1024}
                    height={681}
                    className="h-auto w-full object-cover object-center sm:max-h-[320px]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </figure>
              </div>
              <div className="hero-top-col-copy">
                <div className="hero-top-text-cluster">
                  <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                    Maturitný projekt · náhľad v prehliadači
                  </p>
                  <h1 className="home-hero-top-heading font-heading">
                    <span className="leading-[1.1]">Odborný report</span>
                  </h1>
                  <p className="home-hero-top-copy hero-top-lead m-0 w-full max-w-full font-sans text-brand-fg1">
                    Redizajn webovej prezentácie Lýcea. Text podľa súboru{" "}
                    <code className="rounded bg-white/80 px-1.5 py-0.5 text-[0.88em] text-brand-fg1 ring-1 ring-black/[0.06]">
                      docs/REPORT-MATURITNY-PROJEKT-LYCEUM-WEB.md
                    </code>
                    . Doplň vizualizácie na miestach označených červenou.
                  </p>
                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                    <a href="#obsah" className="btn-primary-site justify-center">
                      Začať čítať report
                    </a>
                    <Link href="/" className="btn-secondary-site justify-center">
                      Späť na hlavný web
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          aria-label="Text odborného reportu"
          className="bg-brand-bg1 pb-16 pt-4 md:pb-20 md:pt-6"
        >
          <div className={SHELL}>
            <MaturitnyReportMarkdown />
          </div>
        </section>

        <SiteContactFooter shellExtraClassName="report-print-shell" />
      </main>
    </>
  );
}
