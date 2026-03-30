import type { ReactNode } from "react";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { HeroInteractiveDots } from "@/components/landing/HeroInteractiveDots";
import { HeroProjektyBubble } from "@/components/landing/HeroProjektyBubble";
import { PartnerLogoStrip } from "@/components/landing/PartnerLogoStrip";
import { StudentVideosSection } from "@/components/landing/StudentVideosSection";
import { SchoolComparisonSection } from "@/components/landing/SchoolComparisonSection";
import { TeachersSection } from "@/components/landing/TeachersSection";
import { PartnerReferencesSection } from "@/components/landing/PartnerReferencesSection";
import { ThreePillarsSection } from "@/components/landing/ThreePillarsSection";
import { FitQuiz } from "@/components/landing/FitQuiz";
import { SubjectsAccordion } from "@/components/landing/SubjectsAccordion";
import { InterestForm } from "@/components/landing/InterestForm";
import { partnerBrands } from "@/content/partners";
import { studentVideos } from "@/content/studentVideos";
import { teacherReferences } from "@/content/teacherReferences";
import { partnerReferences } from "@/content/partnerReferences";
import { SiteContactFooter } from "@/components/landing/SiteContactFooter";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";
const HERO_IMG = "/hero-lyceum.jpg";

function Sec({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-11 md:py-14 ${className}`}>
      <div className={CX}>{children}</div>
    </section>
  );
}

function H2({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 className="font-heading m-0 text-[clamp(1.35rem,1rem+2vw,2.1rem)] leading-[1.15] tracking-tight text-brand-fg1">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 mb-0 max-w-xl text-sm font-normal leading-relaxed text-brand-fg3">
            {subtitle}
          </p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

function PlaceholderMini({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-black/12 bg-brand-bg2/50 px-5 py-10 text-center">
      <p className="font-heading m-0 text-base text-brand-fg1">{title}</p>
      <p className="mt-1 mb-0 text-xs text-brand-fg3">Čoskoro</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="domov" className="scroll-mt-24 md:scroll-mt-28">
        {/* Hero — tesne pod menu (menu má vlastný spodný „odstup“ cez pt na headeri) */}
        <div className="mt-2 pb-0 sm:mt-3 md:mt-4">
          <div
            className={`${CX} home-hero-top-shell relative overflow-hidden rounded-[24px] bg-brand-bg2 pb-6 pt-6 md:pb-8 md:pt-8`}
          >
            <HeroInteractiveDots />
            <div className="home-hero-top-cols relative z-[1]">
              <div className="hero-top-col-photo">
                <figure className="m-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/[0.04]">
                  <Image
                    src={HERO_IMG}
                    alt="Podujatie v Lýceu C. S. Lewisa — študenti pri prezentácii"
                    width={1024}
                    height={681}
                    className="h-auto w-full object-cover object-center sm:max-h-[380px]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </figure>
              </div>
              <div className="hero-top-col-copy">
                <div className="hero-top-text-cluster">
                  <h1 className="home-hero-top-heading font-heading">
                    <span className="leading-[1.1]">
                      Moderná stredná škola, kde sa učíš cez{" "}
                      <HeroProjektyBubble />
                    </span>
                  </h1>
                  <p className="home-hero-top-copy hero-top-lead m-0 w-full max-w-full font-sans text-brand-fg1">
                    Lýceum C. S. Lewisa je škola zameraná na digitálne zručnosti,
                    podnikavosť a charakter. Pracuješ v tíme, prezentuješ, dostávaš
                    spätnú väzbu a učíš sa na reálnych zadaniach v prostredí, kde ťa
                    berú vážne.
                  </p>
                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                    <a href="#ako-funguje" className="btn-primary-site justify-center">
                      Pozrieť, ako to u nás funguje
                    </a>
                    <a href="#prijimacky" className="btn-secondary-site justify-center">
                      Prijímačky
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          id="partneri"
          aria-label="Spolupráce"
          className="-mt-2 scroll-mt-24 bg-brand-bg1 sm:-mt-1 md:-mt-1 md:scroll-mt-28"
        >
          <div className={`${CX} py-6 sm:py-7 md:py-8`}>
            <PartnerLogoStrip partners={partnerBrands} />
          </div>
        </section>

        <ThreePillarsSection />

        <section
          id="studenti-videa"
          aria-labelledby="studenti-videa-heading"
          className="scroll-mt-24 bg-brand-bg1 py-10 md:scroll-mt-28 md:py-12"
        >
          <div className={CX}>
            <h2
              id="studenti-videa-heading"
              className="font-heading m-0 max-w-[min(100%,42rem)] text-[clamp(1.85rem,1.15rem+2.5vw,2.85rem)] leading-[1.1] tracking-tight text-brand-fg1"
            >
              Toto o nás hovoria študenti
            </h2>
            <div className="mt-8 md:mt-10">
              <StudentVideosSection items={studentVideos} />
            </div>
          </div>
        </section>

        <SchoolComparisonSection />

        <section
          id="ucitelia"
          aria-labelledby="ucitelia-heading"
          className="scroll-mt-24 bg-brand-bg1 py-10 md:scroll-mt-28 md:py-12"
        >
          <div className={CX}>
            <h2
              id="ucitelia-heading"
              className="font-heading m-0 max-w-[min(100%,42rem)] text-[clamp(1.85rem,1.15rem+2.5vw,2.85rem)] leading-[1.1] tracking-tight text-brand-fg1"
            >
              Učitelia na Lýceu
            </h2>
            <p className="mt-3 mb-0 max-w-2xl text-sm font-normal leading-relaxed text-brand-fg3 md:mt-4 md:text-[15px]">
              Referencie z výučby — celý text naraz, prepínanie šípkami alebo bodkami.
            </p>
            <div className="mt-8 md:mt-10">
              <TeachersSection items={teacherReferences} />
            </div>
          </div>
        </section>

        <section
          id="partneri-referencie"
          aria-labelledby="partneri-referencie-heading"
          className="scroll-mt-24 bg-brand-bg1 py-10 md:scroll-mt-28 md:py-12"
        >
          <div className={CX}>
            <h2
              id="partneri-referencie-heading"
              className="font-heading m-0 max-w-[min(100%,42rem)] text-[clamp(1.85rem,1.15rem+2.5vw,2.85rem)] leading-[1.1] tracking-tight text-brand-fg1"
            >
              Čo o nás hovoria partneri
            </h2>
            <div className="mt-8 md:mt-10">
              <PartnerReferencesSection items={partnerReferences} />
            </div>
          </div>
        </section>

        {/* Ako to funguje */}
        <Sec id="ako-funguje" className="bg-brand-bg1">
          <H2
            title="Tri veci, ktoré ťa tu čakajú"
            subtitle="Skratka namiesto dlhých odstavcov."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                e: "📌",
                t: "Projekty",
                d: "Reálne zadania, termíny, výstupy v tíme.",
                c: "border-[#d4b85e]/55 bg-gradient-to-br from-[#fdb91326] to-transparent",
              },
              {
                e: "↩",
                t: "Spätná väzba",
                d: "Dávaš ju aj prijímaš. Rastieš po iteráciách.",
                c: "border-[#9a7ec8]/55 bg-gradient-to-br from-[#5620821c] to-transparent",
              },
              {
                e: "🏢",
                t: "Prax",
                d: "Firmy a mentori — vidíš, ako to chodí vonku.",
                c: "border-[#a8a6b2]/50 bg-gradient-to-br from-[#1d1d1f0c] to-transparent",
              },
            ].map((x) => (
              <div
                key={x.t}
                className={`rounded-2xl border p-5 ${x.c}`}
              >
                <span className="text-2xl" aria-hidden>
                  {x.e}
                </span>
                <h3 className="font-heading mt-2 mb-0 text-lg">{x.t}</h3>
                <p className="mt-2 mb-0 text-[13px] font-normal leading-snug text-brand-fg3">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </Sec>

        {/* Realita — pás */}
        <Sec className="!py-0">
          <div className="rounded-2xl bg-brand-fg1 px-6 py-10 text-brand-bg1 md:px-12 md:py-12">
            <h2 className="font-heading m-0 max-w-xl text-[clamp(1.25rem,1rem+1.5vw,1.85rem)] leading-tight">
              Nie koncept na papieri. Reálna práca v deň, ktorý ťa čaká.
            </h2>
            <p className="mt-4 mb-0 max-w-2xl text-sm font-normal leading-relaxed text-white/85">
              Skúšaš veci v praxi, nie len memoruješ. Chyby pomenuješ a ideš
              ďalej — nie sa tváriť, že neexistujú.
            </p>
          </div>
        </Sec>

        {/* Komunita */}
        <Sec id="komunita" className="bg-brand-bg1">
          <H2
            title="Atmosféra = podmienka učenia"
            subtitle="Bezpečie a rešpekt, aby si mohol skúšať."
            right={
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-site !py-2 !text-xs"
              >
                Instagram
              </a>
            }
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Počúvame ťa — feedback ide oboma smermi.",
              "Kultúra: tímy, prezentácie, reflexie.",
              "Každý má priestor ukázať silné stránky.",
            ].map((t, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-xl bg-brand-bg2/80 px-4 py-3 ring-1 ring-black/[0.04]"
              >
                <span
                  className="font-heading text-brand-primary"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="m-0 text-[13px] font-normal leading-snug text-brand-fg1">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </Sec>

        {/* Štúdium / predmety */}
        <Sec id="studium" className="bg-brand-bg1">
          <div id="predmety" className="scroll-mt-24">
            <H2
              title="Predmety s využitím"
              subtitle="Prax a projekty. Rozbaľ blok, ktorý ťa zaujíma."
            />
            <SubjectsAccordion />
            <div
              id="dod"
              className="mt-6 flex flex-wrap items-center gap-3 scroll-mt-24"
            >
              <a href="#zaujemca" className="btn-primary-site">
                Deň otvorených dverí
              </a>
              <span className="text-xs text-brand-fg3">PDF plán doplníme.</span>
            </div>
          </div>
        </Sec>

        {/* Quiz */}
        <Sec id="otestuj-sa" className="bg-brand-bg1">
          <FitQuiz />
        </Sec>

        {/* Porovnanie — karty */}
        <Sec className="bg-brand-bg1 !pb-8">
          <H2
            title="Lýceum vs. obchodná akadémia"
            subtitle="Iný dôraz, nie „lepšie / horšie“."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-black/[0.06] bg-brand-bg2/60 p-6">
              <h3 className="font-heading m-0 text-lg text-brand-fg1">
                Lýceum C. S. Lewisa
              </h3>
              <ul className="mt-4 space-y-2 text-[13px] font-normal text-brand-fg1">
                <li>✓ Projekty, firmy, mentori</li>
                <li>✓ Digitál v kontexte úloh</li>
                <li>✓ Podnikavosť (enterprise, service design…)</li>
                <li>✓ Komunita a explicitný feedback</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-black/15 bg-brand-bg1 p-6">
              <h3 className="font-heading m-0 text-lg text-brand-fg3">
                Obchodná akadémia (typicky)
              </h3>
              <ul className="mt-4 space-y-2 text-[13px] font-normal text-brand-fg3">
                <li>— Ekonomika, účtovníctvo častejšie v centre</li>
                <li>— IT podľa školy</li>
                <li>— Iná štruktúra praxe</li>
                <li>— Závisí od konkrétnej školy</li>
              </ul>
            </div>
          </div>
        </Sec>

        {/* Záujem */}
        <Sec id="zaujemca" className="bg-brand-bg2/30">
          <div className="mx-auto max-w-md">
            <H2 title="Záujem o štúdium" subtitle="Krátko napíš — ozveme sa." />
            <InterestForm />
          </div>
        </Sec>

        {/* Placeholdery */}
        <Sec className="!pt-0">
          <div className="grid gap-4 md:grid-cols-3">
            <div id="pre-studentov" className="scroll-mt-24">
              <PlaceholderMini title="Pre študentov · školský poriadok" />
            </div>
            <div id="pridaj-sa" className="scroll-mt-24">
              <PlaceholderMini title="Pridaj sa do tímu" />
            </div>
            <div id="prijimacky" className="scroll-mt-24">
              <PlaceholderMini title="Prijímačky a termíny" />
            </div>
          </div>
          <div id="stipendia" className="mt-4 scroll-mt-24">
            <PlaceholderMini title="Štipendiá" />
          </div>
        </Sec>

        <SiteContactFooter />
      </main>
    </>
  );
}
