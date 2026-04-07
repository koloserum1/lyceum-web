import type { PortableTextBlock } from "@portabletext/types";
import type { Metadata } from "next";

import { DodPageBody } from "@/components/dod/DodPageBody";
import { DodSubpageShell } from "@/components/dod/DodSubpageShell";
import { Header } from "@/components/landing/Header";
import { getDodPageSettings, hasDodPageBody } from "@/lib/dod-page";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getDodPageSettings();
  const title = page?.title?.trim() || "Deň otvorených dverí";
  return {
    title: `${title} — Lýceum C. S. Lewisa`,
    description:
      "Deň otvorených dverí v Lýceu C. S. Lewisa — prehliadka školy, informácie o štúdiu a prihlásení.",
  };
}

export default async function DodPage() {
  const page = await getDodPageSettings();
  const title = page?.title?.trim() || "Deň otvorených dverí";
  const body = page?.body;
  const showContent = hasDodPageBody(body);

  return (
    <>
      <Header />
      <DodSubpageShell title={title}>
        {showContent && body ? (
          <DodPageBody value={body as PortableTextBlock[]} />
        ) : (
          <p className="m-0 text-[15px] leading-relaxed text-brand-fg3 sm:text-[16px] md:text-[17px] md:leading-[1.62]">
            Termín a podrobnosti o ďalšom dni otvorených dverí pripravíme a zverejníme
            na webe. Ak ťa zaujíma štúdium u nás, pozri si sekciu Prijímačky alebo nás
            kontaktuj — radi odpovieme na otázky k škole a prihláseniu.
          </p>
        )}
      </DodSubpageShell>
    </>
  );
}
