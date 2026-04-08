import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/landing/Header";
import {
  PreStudentovBody,
  preStudentovWideContent,
} from "@/components/landing/pre-studentov/PreStudentovBodies";
import { PreStudentovSubpageShell } from "@/components/landing/pre-studentov/PreStudentovSubpageShell";
import {
  preStudentovPages,
  type PreStudentovSlug,
} from "@/data/pre-studentov-nav";

const BASE_TITLE = "Lýceum C. S. Lewisa";

function pageMeta(slug: string) {
  return preStudentovPages.find((p) => p.slug === slug);
}

export function generateStaticParams(): { slug: PreStudentovSlug }[] {
  return preStudentovPages.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pageMeta(slug);
  if (!page) return { title: BASE_TITLE };
  return {
    title: `${page.label} | Pre študentov | ${BASE_TITLE}`,
    description: `Informácie pre študentov: ${page.label}.`,
  };
}

export default async function PreStudentovSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = pageMeta(slug);
  if (!page) notFound();

  const wide = preStudentovWideContent(page.slug as PreStudentovSlug);

  return (
    <>
      <Header />
      <PreStudentovSubpageShell
        title={page.label}
        slug={page.slug}
        wideContent={wide}
      >
        <PreStudentovBody slug={page.slug as PreStudentovSlug} />
      </PreStudentovSubpageShell>
    </>
  );
}
