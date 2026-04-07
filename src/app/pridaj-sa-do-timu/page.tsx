import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { JoinTeamContent } from "@/components/landing/JoinTeamContent";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const HERO = "/pridaj-sa-hero-team.png";

/** Hero karta — rovnaká logika ako „Ako sa dostať na Lýceum“ (prijímačky). */
const heroCard =
  "overflow-x-clip rounded-[36px] bg-gradient-to-br from-white via-[#faf9f7] to-[#fff7f0] ring-1 ring-[#ebe4dc]/60 shadow-[0_24px_60px_-32px_rgba(90,80,70,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]";

export const metadata: Metadata = {
  title: "Pridaj sa do tímu — Lýceum C. S. Lewisa",
  description:
    "Uč kvalitne a moderne v Lýceu C. S. Lewisa. Tím, rast, vybavenie a priestor tvoriť nový koncept školy. Napíš na praca@lyceum.sk.",
};

export default function PridajSaDoTimuPage() {
  return (
    <>
      <Header />
      <main
        id="pridaj-sa-do-timu"
        className="scroll-mt-24 bg-brand-bg2 pb-12 md:scroll-mt-28 md:pb-16"
      >
        <div className={`${CX} pt-6 md:pt-8`}>
          <section className={heroCard} aria-label="Pridaj sa do tímu">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:pb-8">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,1.08fr)] lg:items-start lg:gap-10 xl:gap-12">
                <div className="min-w-0">
                  <nav
                    className="m-0 text-[11px] font-medium leading-snug tracking-tight text-[#9a8eb0] md:text-[12px]"
                    aria-label="Oblasť stránky"
                  >
                    <Link
                      href="/#domov"
                      className="text-[#8b7cab] underline decoration-brand-primary/28 underline-offset-2 transition-colors hover:text-brand-primary hover:decoration-brand-primary/50"
                    >
                      Domov
                    </Link>
                    <span className="mx-1.5 text-[#bdb5cf]" aria-hidden>
                      /
                    </span>
                    <span className="text-[#958bad]">Pridaj sa do tímu</span>
                  </nav>

                  <h1 className="font-heading m-0 mt-5 max-w-xl text-[clamp(2rem,1.2rem+3.2vw,3.35rem)] font-bold leading-[1.05] tracking-tight text-brand-fg1 md:mt-6">
                    <span className="block">Pridaj sa do tímu</span>
                    <span className="mt-1 block text-[#fdb913]">Lýcea</span>
                  </h1>

                  <p className="m-0 mt-5 max-w-md text-pretty text-[15px] font-normal leading-relaxed text-brand-fg2 sm:mt-6 sm:text-[16px] md:text-[17px] md:leading-[1.62]">
                    Hľadáme ľudí, ktorí chcú učiť kvalitne a moderne. Bez pózy. S
                    rešpektom a náročnosťou, ktorá dáva zmysel.
                  </p>
                </div>

                <div className="relative mx-auto w-full max-w-[min(100%,24rem)] sm:max-w-[min(100%,28rem)] lg:mx-0 lg:max-w-none lg:w-full">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] ring-1 ring-[#ebe8e4]/90 md:aspect-[3/2] md:rounded-[28px] lg:rounded-[32px]">
                    <Image
                      src={HERO}
                      alt="Časť tímu na streche pri západe slnka — priateľská atmosféra, oranžové visačky"
                      fill
                      priority
                      className="object-cover object-left"
                      sizes="(max-width: 1024px) min(100vw, 28rem), (max-width: 1400px) 48vw, 640px"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a2218]/[0.22] via-[#4a3d2e]/[0.05] to-transparent"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={CX}>
          <div
            id="tim-obsah"
            className="scroll-mt-28 border-t border-[#e0d8ee]/85 pt-10 md:scroll-mt-32 md:pt-12 lg:pt-14"
          >
            <JoinTeamContent />
          </div>
        </div>

        <div
          className={`${CX} border-t border-black/[0.06] pb-10 pt-8 md:pb-12 md:pt-10`}
        >
          <p className="m-0 text-center text-sm text-brand-fg3">
            <Link
              href="/#domov"
              className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
            >
              Späť na domov
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
