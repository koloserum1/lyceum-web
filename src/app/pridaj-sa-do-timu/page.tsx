import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { JoinTeamContent } from "@/components/landing/JoinTeamContent";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const HERO = "/pridaj-sa-hero-team.png";

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
        className="scroll-mt-24 bg-[#f7f5fa] pb-12 md:scroll-mt-28 md:pb-16"
      >
        <div className={`${CX} pt-5 md:pt-7`}>
          <section
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-14"
            aria-label="Pridaj sa do tímu"
          >
            <div className="lg:col-span-5 xl:col-span-5">
              <h1 className="font-heading m-0 text-[clamp(1.7rem,1.08rem+2.3vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-[#342c44]">
                Pridaj sa do tímu{" "}
                <span className="relative inline-block">
                  <span className="relative z-[1]">Lýcea</span>
                  <span
                    className="absolute -bottom-0.5 left-[-0.06em] right-[-0.06em] -z-0 h-[0.36em] rounded-sm bg-[#fdb913]/42"
                    aria-hidden
                  />
                </span>
              </h1>
              <p className="m-0 mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-brand-fg2 sm:mt-5 sm:text-[16px] md:text-[17px] md:leading-[1.6]">
                Hľadáme ľudí, ktorí chcú učiť kvalitne a moderne. Bez pózy. S
                rešpektom a náročnosťou, ktorá dáva zmysel.
              </p>
            </div>

            <div className="lg:col-span-7 xl:col-span-7">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.15rem] sm:aspect-[16/10] sm:rounded-[1.25rem] lg:aspect-[16/11]">
                <Image
                  src={HERO}
                  alt="Časť tímu na streche pri západe slnka — priateľská atmosféra, oranžové visačky"
                  fill
                  priority
                  className="object-cover object-left"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </section>
        </div>

        <div className={CX}>
          <div
            id="tim-obsah"
            className="scroll-mt-28 border-t border-[#e4dcf0] pt-9 md:scroll-mt-32 md:pt-11 lg:pt-12"
          >
            <JoinTeamContent />
          </div>

          <p className="m-0 pt-10 text-center text-sm text-brand-fg3 md:pt-12">
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
