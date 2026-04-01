import Image from "next/image";
import Link from "next/link";
import { siteContact } from "@/content/siteContact";

const LINK_INSTAGRAM_LYCEUM = siteContact.instagramUrl;
const LINK_FACEBOOK_LYCEUM = siteContact.facebookUrl;
const LINK_LINKEDIN_LYCEUM = siteContact.linkedinUrl;
const LINK_TIKTOK_LYCEUM = siteContact.tiktokUrl;

/** Náhľady v kartách sociálnych sietí (existujúce fotky z public). */
const SOCIAL_PREVIEW_INSTAGRAM = "/kontakt/instagram-lyceum-preview.png";
const SOCIAL_PREVIEW_FACEBOOK = "/kontakt/facebook-lyceum-preview.png";
const SOCIAL_PREVIEW_LINKEDIN = "/kontakt/linkedin-lyceum-preview.png";
const SOCIAL_PREVIEW_TIKTOK = "/kontakt/tiktok-lyceum-preview.png";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const INFO_EMAIL = "info@lyceum.sk";
const MAILTO = `mailto:${INFO_EMAIL}`;
const PHONE_DISPLAY = "+421 901 788 744";
const PHONE_TEL = "tel:+421901788744";
const STREET = "Haanova 28";
const CITY_ZIP = "851 04 Bratislava";
const ADDRESS_LINE = `${STREET} · ${CITY_ZIP}`;

const ctaYellow =
  "inline-flex items-center justify-center rounded-full border-0 bg-[#fdb913] px-7 py-3 text-[15px] font-bold text-brand-fg1 no-underline shadow-[0_12px_32px_-12px_rgba(253,185,19,0.5)] transition-[transform,box-shadow,background-color] hover:bg-[#f5b010] hover:shadow-[0_14px_36px_-10px_rgba(253,185,19,0.45)] md:px-9 md:text-base";

const ctaOutline =
  "inline-flex items-center justify-center rounded-full border-2 border-brand-fg1/18 bg-white/80 px-7 py-3 text-[15px] font-bold text-brand-fg1 no-underline backdrop-blur-sm transition-[border-color,background-color,box-shadow] hover:border-brand-primary/45 hover:bg-white hover:shadow-[0_12px_32px_-14px_rgba(185,160,224,0.25)] md:px-9 md:text-base";

const inputClass =
  "w-full rounded-2xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-brand-fg1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-[border-color,box-shadow] placeholder:text-brand-fg4 focus:border-brand-primary/45 focus:shadow-[0_0_0_3px_rgba(185,160,224,0.2)] md:px-5 md:py-4";

/** Základ social kariet — rovnaká výška, rohy, hover. */
const socialCardBase =
  "group relative flex min-h-[19.5rem] flex-col overflow-hidden rounded-[1.75rem] shadow-[0_20px_48px_-28px_rgba(55,50,85,0.2)] ring-1 ring-black/[0.06] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(55,50,85,0.26)] md:min-h-[20rem] md:rounded-[1.85rem]";

const socialCta =
  "mt-auto w-full rounded-full border-0 bg-[#fdb913] py-3 text-[14px] font-bold text-brand-fg1 shadow-[0_10px_28px_-8px_rgba(253,185,19,0.5)] transition-[background-color,box-shadow] hover:bg-[#f5b010] md:text-[15px]";

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm2 0 6 5 6-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18 12 13l6 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.5 4h2l1.2 4.5-2.1 1.2a12 12 0 006.9 6.9l1.2-2.1L22 15.5V17.5A2.5 2.5 0 0119.5 20h-1C10.6 20 4 13.4 4 5.5V4A2.5 2.5 0 016.5 4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

/** Embed centrum: Haanova 28 / Lýceum (OSM Nominatim ~48.1230, 17.1239). */
const MAP_LAT = 48.1230061;
const MAP_LON = 17.1239325;
const MAP_EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
  `${MAP_LON - 0.005},${MAP_LAT - 0.004},${MAP_LON + 0.005},${MAP_LAT + 0.004}`,
)}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LON}`;

/** Otvorenie adresy v mapách (presmerovanie). */
const MAPS_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=Haanova+28%2C+851+04+Bratislava";

const LINK_DVA_PERCENTA = "/dva-percenta";
const LINK_PRIJIMACKY_PREHLAD = "/prijimacky/co-te-caka-na-prijimackach";

const ADDRESS_BLOCK = `${STREET}, ${CITY_ZIP}`;

/** Sekundárne CTA v lycejnom „pill“ štýle (nie generický outline). */
const ctaPillLavender =
  "inline-flex items-center justify-center rounded-full border border-brand-primary/42 bg-white px-6 py-2.5 text-[14px] font-bold text-brand-fg1 no-underline shadow-[0_6px_22px_-10px_rgba(120,95,170,0.18)] transition-[border-color,background-color,box-shadow] hover:border-brand-primary/55 hover:bg-brand-accent/25 hover:shadow-[0_10px_28px_-12px_rgba(185,160,224,0.22)] md:px-8 md:py-3 md:text-[15px]";

export function KontaktContent() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 85% 50% at 10% 0%, rgba(216, 198, 240, 0.32) 0%, transparent 50%),
            radial-gradient(ellipse 60% 45% at 95% 20%, rgba(197, 221, 216, 0.22) 0%, transparent 48%),
            linear-gradient(180deg, #faf9fc 0%, #f6f4f9 100%)
          `,
        }}
        aria-hidden
      />

      {/* BLOK 1 — jednoduchý svetlý úvod (bez fotky, bez prekrytia) */}
      <section className={`${CX} relative z-[1] pt-6 pb-2 md:pt-8 md:pb-4`} aria-labelledby="kontakt-hero-heading">
        <div className="rounded-[1.5rem] bg-gradient-to-br from-white/90 via-[#faf8fc] to-brand-bg2/90 px-5 py-7 ring-1 ring-black/[0.05] sm:px-7 sm:py-8 md:rounded-[1.75rem] md:px-9 md:py-9">
          <header className="max-w-2xl">
            <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-fg3 md:text-[13px]">
              KONTAKT
            </p>
            <h1
              id="kontakt-hero-heading"
              className="font-heading m-0 mt-3 text-[clamp(2rem,1.4rem+2.8vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-brand-fg1 md:mt-4"
            >
              Ozvi sa nám
            </h1>
            <p className="m-0 mt-3 max-w-xl text-[15px] leading-relaxed text-brand-fg2 md:mt-4 md:text-[16px]">
              Radi odpovieme na otázky o štúdiu, prijímačkách alebo návšteve školy.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#napiste-nam" className={`${ctaYellow} justify-center sm:w-auto`}>
                Napísať nám
              </a>
              <Link href={LINK_PRIJIMACKY_PREHLAD} className={`${ctaPillLavender} justify-center sm:w-auto`}>
                Pozrieť prijímačky
              </Link>
            </div>
          </header>
        </div>
      </section>

      {/* BLOK 2 — kontakt vľavo + formulár vpravo */}
      <section className={`${CX} relative z-[1] pt-8 md:pt-10`} aria-label="Kontakt a formulár">
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white/90 via-[#faf8fc] to-brand-bg2/90 shadow-[0_20px_50px_-32px_rgba(60,55,95,0.14)] ring-1 ring-black/[0.05] md:rounded-[1.75rem] lg:grid lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col border-b border-black/[0.06] p-6 sm:p-7 md:p-8 lg:border-b-0 lg:border-r lg:border-black/[0.06]">
            <h2 className="font-heading m-0 text-lg font-bold text-brand-fg1 md:text-xl">Kontakt na nás</h2>
            <ul className="m-0 mt-4 flex flex-1 list-none flex-col gap-5 p-0 md:mt-5 md:gap-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/50 text-brand-fg1">
                  <IconMail />
                </span>
                <div>
                  <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                    E-mail
                  </p>
                  <a
                    href={MAILTO}
                    className="mt-1.5 block text-[17px] font-bold text-brand-fg1 underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary md:text-lg"
                  >
                    {INFO_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/50 text-brand-fg1">
                  <IconPhone />
                </span>
                <div>
                  <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                    Telefón
                  </p>
                  <a
                    href={PHONE_TEL}
                    className="mt-1.5 block text-[19px] font-bold tracking-tight text-brand-fg1 md:text-[1.35rem]"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/50 text-brand-fg1">
                  <IconPin />
                </span>
                <div>
                  <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-fg3">
                    Adresa
                  </p>
                  <a
                    href={MAPS_OPEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 block text-[17px] font-bold leading-snug text-brand-fg1 underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary md:text-lg"
                  >
                    {ADDRESS_BLOCK}
                  </a>
                </div>
              </li>
            </ul>
            <a href={MAILTO} className={`${ctaYellow} mt-8 w-full justify-center lg:mt-auto`}>
              Napísať nám
            </a>
          </div>

          <div id="napiste-nam" className="scroll-mt-28 flex flex-col bg-white/70 p-6 sm:p-7 md:p-8 lg:scroll-mt-32">
            <h2 className="font-heading m-0 text-lg font-bold text-brand-fg1 md:text-xl">Napíšte nám</h2>
            <form className="mt-4 flex flex-1 flex-col gap-4 md:mt-5" noValidate>
              <div>
                <label htmlFor="kontakt-meno" className="mb-1.5 block text-[13px] font-semibold text-brand-fg2">
                  Meno
                </label>
                <input id="kontakt-meno" name="meno" type="text" autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="kontakt-email" className="mb-1.5 block text-[13px] font-semibold text-brand-fg2">
                  E-mail
                </label>
                <input
                  id="kontakt-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col">
                <label htmlFor="kontakt-sprava" className="mb-1.5 block text-[13px] font-semibold text-brand-fg2">
                  Správa
                </label>
                <textarea
                  id="kontakt-sprava"
                  name="sprava"
                  rows={5}
                  className={`${inputClass} min-h-[7.5rem] flex-1 resize-y`}
                />
              </div>
              <button type="button" className={`${ctaYellow} mt-2 w-full justify-center`}>
                Odoslať správu
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* BLOK 3 — mapa (~polovica šírky) + text vpravo */}
      <section className={`${CX} relative z-[1] pt-8 pb-6 md:pt-10 md:pb-8`} aria-labelledby="heading-kde-najdes">
        <h2
          id="heading-kde-najdes"
          className="font-heading m-0 text-[clamp(1.35rem,1.05rem+1.15vw,1.85rem)] font-bold tracking-tight text-brand-fg1"
        >
          Kde nás nájdeš
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <div className="order-2 min-h-0 lg:order-1">
            <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-black/[0.08] shadow-[0_16px_40px_-26px_rgba(45,50,70,0.16)] md:rounded-[1.65rem]">
              <div className="relative h-[min(42svh,15rem)] w-full bg-[#e4e8ee] sm:h-[min(40svh,16rem)] lg:h-[min(50svh,28rem)] lg:min-h-[20rem]">
                <iframe
                  title="Mapa — Haanova 28, Bratislava"
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[0.08] contrast-[0.98]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center gap-4 lg:order-2 lg:pl-2">
            <a
              href={MAPS_OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-[clamp(1.05rem,0.95rem+0.45vw,1.25rem)] font-bold leading-snug tracking-tight text-brand-fg1 underline decoration-brand-primary/40 underline-offset-[3px] transition-colors hover:text-brand-primary hover:decoration-brand-primary"
            >
              {ADDRESS_LINE}
              <span className="mt-1 block text-[12px] font-medium text-brand-fg3 no-underline">
                Otvorí sa v mapách
              </span>
            </a>
            <div className="space-y-2 text-[12px] leading-relaxed text-brand-fg3 md:text-[13px]">
              <p>Naša poloha sa môže v priebehu najbližších rokov meniť.</p>
              <p>
                Aktuálne fungujeme na Haanovej 28 a zároveň sme v procese prerábky budovy na Znievskej.
              </p>
              <p>
                Ak ťa zaujíma viac o budove, projekte alebo podpore školy, pozri si podstránku{" "}
                <Link
                  href={LINK_DVA_PERCENTA}
                  className="font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
                >
                  2 % pre Lýceum
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOK 4: Social wall */}
      <section className={`${CX} relative z-[1] pt-4 pb-10 md:pt-6 md:pb-12`} aria-labelledby="heading-social">
        <h2
          id="heading-social"
          className="font-heading m-0 text-[clamp(1.35rem,1.05rem+1.2vw,1.85rem)] font-bold tracking-tight text-brand-fg1"
        >
          Kde nás môžeš sledovať
        </h2>

        <div className="mt-6 grid gap-5 sm:mt-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {/* Instagram — vizuálne najbohatšia */}
          <article className={`${socialCardBase} border border-[#f0d8e8]/60`}>
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#fff5f8] via-[#f5e8f4] to-[#ebe0f8]"
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)
                `,
                backgroundSize: "26px 26px",
              }}
              aria-hidden
            />
            <div className="absolute -right-8 top-1/4 h-36 w-36 rounded-full bg-[#e8b4d4]/25 blur-3xl" aria-hidden />
            <div className="relative z-[1] flex flex-1 flex-col p-6 md:p-7">
              <h3 className="font-heading m-0 text-lg font-bold text-brand-fg1">Instagram</h3>
              <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/45 p-2 shadow-inner shadow-white/40 backdrop-blur-sm sm:p-3">
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/[0.06]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={SOCIAL_PREVIEW_INSTAGRAM}
                      alt="Futbalový tím Lýcea — život školy na Instagrame (@lyceumcsl)"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 320px"
                    />
                  </div>
                </div>
              </div>
              <a
                href={LINK_INSTAGRAM_LYCEUM}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialCta} relative z-[1] mt-5 inline-flex justify-center no-underline`}
              >
                Pozrieť profil
              </a>
            </div>
          </article>

          {/* Facebook — modrý, community */}
          <article className={`${socialCardBase} border border-[#c8daf4]/70`}>
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#eef5ff] via-[#e3edfb] to-[#d8e6f8]"
              aria-hidden
            />
            <div
              className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-[#5b8def]/15 blur-2xl"
              aria-hidden
            />
            <div className="relative z-[1] flex flex-1 flex-col p-6 md:p-7">
              <h3 className="font-heading m-0 text-lg font-bold text-brand-fg1">Facebook</h3>
              <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/45 p-2 shadow-inner shadow-white/40 backdrop-blur-sm sm:p-3">
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/[0.06]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={SOCIAL_PREVIEW_FACEBOOK}
                      alt="Tím Lýcea s víťazným šekom z Pronea Hackathon 2026 — novinky na Facebooku"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 320px"
                    />
                  </div>
                </div>
              </div>
              <a
                href={LINK_FACEBOOK_LYCEUM}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialCta} relative z-[1] mt-5 inline-flex justify-center no-underline`}
              >
                Pozrieť profil
              </a>
            </div>
          </article>

          {/* LinkedIn — svetlomodrý editorial */}
          <article className={`${socialCardBase} border border-[#b8d4ec]/65`}>
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#f0f7fc] via-[#e8f2fa] to-[#dcecf7]"
              aria-hidden
            />
            <div
              className="absolute right-0 top-0 h-24 w-24 translate-x-1/4 -translate-y-1/4 rounded-full bg-[#0a66c2]/10 blur-2xl"
              aria-hidden
            />
            <div className="relative z-[1] flex flex-1 flex-col p-6 md:p-7">
              <h3 className="font-heading m-0 text-lg font-bold text-brand-fg1">LinkedIn</h3>
              <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/45 p-2 shadow-inner shadow-white/40 backdrop-blur-sm sm:p-3">
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/[0.06]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={SOCIAL_PREVIEW_LINKEDIN}
                      alt="Článok o študentoch Lýcea — crowdfunding a projektová výučba (LinkedIn)"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 320px"
                    />
                  </div>
                </div>
              </div>
              <a
                href={LINK_LINKEDIN_LYCEUM}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialCta} relative z-[1] mt-5 inline-flex justify-center no-underline`}
              >
                Pozrieť profil
              </a>
            </div>
          </article>

          {/* TikTok — tmavší, stále v systéme Lýcea */}
          <article className={`${socialCardBase} border border-[#3d3a48]/40`}>
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#2c2834] via-[#252830] to-[#1e1c24]"
              aria-hidden
            />
            <div
              className="absolute left-1/4 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-primary/15 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute bottom-0 right-0 h-24 w-24 translate-x-1/4 rounded-full bg-[#fdb913]/08 blur-2xl"
              aria-hidden
            />
            <div className="relative z-[1] flex flex-1 flex-col p-6 md:p-7">
              <h3 className="font-heading m-0 text-lg font-bold text-white/95">TikTok</h3>
              <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/45 p-2 shadow-inner shadow-white/40 backdrop-blur-sm sm:p-3">
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/[0.06]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={SOCIAL_PREVIEW_TIKTOK}
                      alt="TikTok Lýcea — rozhovor v ateliéri, účet @lyceumcsl"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 320px"
                    />
                  </div>
                </div>
              </div>
              <a
                href={LINK_TIKTOK_LYCEUM}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-[1] mt-5 inline-flex w-full justify-center rounded-full border-2 border-white/20 bg-white/10 py-3 text-[14px] font-bold text-white no-underline backdrop-blur-sm transition-[border-color,background-color] hover:border-[#fdb913]/45 hover:bg-white/[0.14] md:text-[15px]"
              >
                Pozrieť profil
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* BLOK 5: Spodný CTA */}
      <section className={`${CX} relative z-[1] pb-12 md:pb-14`} aria-labelledby="heading-dalsi-krok">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-brand-bg2 to-brand-accent/30 px-6 py-8 text-center ring-1 ring-black/[0.06] shadow-[0_18px_44px_-24px_rgba(185,160,224,0.28)] md:rounded-[1.75rem] md:px-10 md:py-9">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-32 w-[min(90%,20rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/15 blur-3xl"
            aria-hidden
          />
          <h2
            id="heading-dalsi-krok"
            className="font-heading relative m-0 text-[clamp(1.15rem,1rem+0.6vw,1.45rem)] font-bold text-brand-fg1"
          >
            Nevieš, kde začať?
          </h2>
          <p className="relative m-0 mt-2 max-w-lg text-[14px] leading-relaxed text-brand-fg2 md:mx-auto md:text-[15px]">
            Radi poradíme s prijímačkami, štúdiom alebo návštevou školy.
          </p>
          <div className="relative mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
            <a href={MAILTO} className={`${ctaYellow} justify-center`}>
              Napísať nám
            </a>
            <Link href="/prijimacky/ako-sa-dostat-na-lyceum" className={`${ctaOutline} justify-center`}>
              Pozrieť prijímačky
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
