import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/landing/Header";
import { prijimackyPages } from "@/data/prijimacky-nav";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const staticSlugs = new Set([
    "ako-sa-dostat-na-lyceum",
    "co-te-caka-na-prijimackach",
    "detail-prijimaciek",
    "lycejna-vyzva",
    "vyskusaj-si-ulohy",
    "terminy-a-kapacita",
  ]);
  return prijimackyPages
    .filter((p) => !staticSlugs.has(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = prijimackyPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.label} — Prijímačky — Lýceum C. S. Lewisa`,
    description: `${page.label}. Informácie o prijímacom konaní na Lýceu C. S. Lewisa.`,
  };
}

export default async function PrijimackyPodstrankaPage({ params }: Props) {
  const { slug } = await params;
  const page = prijimackyPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main
        id={`prijimacky-${slug}`}
        className="scroll-mt-24 bg-brand-bg1 pb-14 md:scroll-mt-28 md:pb-20"
      >
        <div className={`${CX} pt-8 md:pt-12`}>
          <nav className="mb-6 text-sm text-brand-fg3" aria-label="Oblasť stránky">
            <Link
              href="/#prijimacky"
              className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
            >
              Prijímačky
            </Link>
            <span className="mx-2 text-brand-fg3" aria-hidden>
              /
            </span>
            <span className="text-brand-fg2">{page.label}</span>
          </nav>

          <article className="max-w-3xl">
            <h1 className="font-heading m-0 text-[clamp(1.65rem,1.1rem+2.2vw,2.35rem)] font-bold leading-tight tracking-tight text-brand-fg1">
              {page.label}
            </h1>
            <p className="m-0 mt-5 text-[15px] font-normal leading-relaxed text-brand-fg2 md:mt-6 md:text-base">
              Obsah tejto stránky pripravujeme. Ak potrebuješ pomôcť skôr, napíš nám
              cez{" "}
              <Link
                href="/#zaujemca"
                className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
              >
                záujem o štúdium
              </Link>
              .
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
