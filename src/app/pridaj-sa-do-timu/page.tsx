import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { JoinTeamContent } from "@/components/landing/JoinTeamContent";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const HERO = "/pridaj-sa-hero.png";

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
        className="scroll-mt-24 bg-brand-bg1 pb-14 md:scroll-mt-28 md:pb-20"
      >
        <div className={`${CX} pt-2 sm:pt-3 md:pt-4`}>
          <section
            className="relative isolate min-h-[min(58svh,520px)] w-full overflow-hidden rounded-[20px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] sm:min-h-[min(64svh,620px)] sm:rounded-[24px] md:min-h-[min(70svh,700px)] md:rounded-[28px] lg:min-h-[min(72svh,720px)]"
            aria-label="Pridaj sa do tímu"
          >
            <Image
              src={HERO}
              alt="Tím Lýcea s kartónom „Poď do nášho tímu!“ — študenti v mikinách školy"
              fill
              priority
              className="object-cover object-[52%_center] sm:object-[58%_center] md:object-[64%_center] lg:object-[70%_center]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, min(100vw, 1400px)"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/93 via-black/78 to-black/40 sm:from-black/90 sm:via-black/68 sm:to-black/28 md:from-black/88 md:via-black/55 md:to-black/18 lg:to-transparent"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[min(58svh,520px)] flex-col justify-center py-10 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:min-h-[min(64svh,620px)] sm:py-14 sm:pl-[max(1.25rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] md:min-h-[min(70svh,700px)] md:py-16 md:pl-[max(2rem,env(safe-area-inset-left))] lg:min-h-[min(72svh,720px)] lg:py-20 lg:pl-[max(2.5rem,env(safe-area-inset-left))] lg:pr-[max(3rem,env(safe-area-inset-right))]">
              <div className="w-full max-w-[min(100%,19.5rem)] text-left sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h1 className="font-heading m-0 text-[clamp(1.5rem,0.9rem+2.2svw,2.85rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-[clamp(1.6rem,1rem+2.4vw,2.85rem)]">
                  Pridaj sa do tímu{" "}
                  <span className="text-[#fdb913] [text-shadow:0_1px_18px_rgba(0,0,0,0.45)]">
                    Lýcea
                  </span>
                </h1>
                <p className="m-0 mt-4 max-w-xl text-pretty text-[14px] font-normal leading-relaxed text-white/93 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] sm:mt-5 sm:text-[15px] md:mt-6 md:text-base md:leading-relaxed">
                  Hľadáme ľudí, ktorí chcú učiť kvalitne a moderne. Bez pózy. S
                  rešpektom a náročnosťou, ktorá dáva zmysel.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className={CX}>
          <div id="tim-obsah" className="scroll-mt-28 pt-10 md:scroll-mt-32 md:pt-14">
            <JoinTeamContent />
          </div>

          <p className="mt-12 mb-0 text-center text-sm text-brand-fg3 md:mt-16">
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
