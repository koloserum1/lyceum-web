import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/landing/Header";
import { getPillarBySlug, pillars } from "@/content/pillars";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};
  return {
    title: `${pillar.title} | Tri piliere | Lýceum C. S. Lewisa`,
    description: `${pillar.lead} ${pillar.body.slice(0, 120)}…`,
  };
}

export default async function PillarPage({ params }: Props) {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  return (
    <>
      <Header />
      <main
        id={`pillar-${slug}`}
        className="scroll-mt-24 bg-brand-bg1 pb-14 md:scroll-mt-28 md:pb-20"
      >
        <div className={`${CX} pt-8 md:pt-12`}>
          <nav className="mb-6 text-sm text-brand-fg3" aria-label="Navigácia">
            <Link
              href={`/#pillar-${slug}`}
              className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
            >
              Tri piliere
            </Link>
            <span className="mx-2 text-brand-fg3" aria-hidden>
              /
            </span>
            <span className="text-brand-fg1">{pillar.title}</span>
          </nav>

          <figure className="relative mb-8 aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-2xl shadow-[0_20px_50px_-28px_rgba(0,0,0,0.2)] ring-1 ring-black/[0.06]">
            <Image
              src={pillar.imageSrc}
              alt={pillar.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </figure>

          <article className="max-w-3xl">
            <p className="m-0 mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-fg3">
              {pillar.tag}
            </p>
            <h1 className="font-heading m-0 text-[clamp(1.65rem,1.1rem+2.2vw,2.35rem)] font-bold leading-tight tracking-tight text-brand-fg1">
              {pillar.title}
            </h1>
            <p className="m-0 mt-5 text-[17px] font-normal leading-relaxed text-brand-fg1 md:mt-6 md:text-lg">
              {pillar.lead}
            </p>
            <p className="m-0 mt-6 text-[15px] font-normal leading-relaxed text-brand-fg3 md:text-base">
              {pillar.body}
            </p>
            <p className="m-0 mt-10">
            <Link
              href={`/#pillar-${slug}`}
              className="inline-flex items-center rounded-full border border-black/12 bg-brand-bg2 px-5 py-2.5 text-sm font-medium text-brand-fg1 no-underline transition hover:border-black/20 hover:bg-white"
            >
              ← Späť na tri piliere
            </Link>
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
