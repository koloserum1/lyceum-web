import Image from "next/image";
import Link from "next/link";

const LINK_INSTAGRAM_LYCEUM = "https://www.instagram.com/lyceumcsl/";

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

const MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=17.1040%2C48.1210%2C17.1145%2C48.1275&layer=mapnik&marker=48.12425%2C17.10925";

/** Otvorenie adresy v mapách (presmerovanie). */
const MAPS_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=Haanova+28%2C+851+04+Bratislava";

const LINK_DVA_PERCENTA = "/dva-percenta";

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

      {/* BLOK 1: Hero + dvojblok v jednom celku */}
      <section className={`${CX} relative z-[1] pt-6 pb-10 md:pt-8 md:pb-12`} aria-labelledby="kontakt-hero-heading">
        <div className="rounded-[1.5rem] bg-gradient-to-br from-white/90 via-[#faf8fc] to-brand-bg2/90 px-5 py-7 ring-1 ring-black/[0.05] sm:px-7 sm:py-8 md:rounded-[1.75rem] md:px-9 md:py-9">
          {/* Hero — len eyebrow, nadpis, lead */}
          <header className="max-w-2xl">
            <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-fg3 md:text-[13px]">
              Kontakt
            </p>
            <h1
              id="kontakt-hero-heading"
              className="font-heading m-0 mt-3 text-[clamp(2rem,1.4rem+2.8vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-brand-fg1 md:mt-4"
            >
              Ozvi sa nám
            </h1>
            <p className="m-0 mt-3 text-[15px] leading-relaxed text-brand-fg2 md:mt-4 md:text-[16px]">
              Radi odpovieme na otázky o štúdiu, prijímačkách alebo návšteve školy.
            </p>
          </header>

          {/* Dvojblok — hneď pod hero */}
          <div className="mt-8 grid gap-6 border-t border-black/[0.06] pt-8 md:mt-9 md:gap-8 md:pt-9 lg:grid-cols-2 lg:items-stretch">
            <div className="flex min-h-0 flex-col" id="kontakt-na-nas-block">
              <h2 className="font-heading m-0 text-lg font-bold text-brand-fg1 md:text-xl">
                Kontakt na nás
              </h2>
              <div className="mt-4 flex flex-1 flex-col rounded-[1.5rem] border border-black/[0.07] bg-white p-6 shadow-[0_20px_50px_-28px_rgba(60,55,95,0.16)] md:mt-5 md:rounded-[1.65rem] md:p-8">
                <ul className="m-0 flex flex-1 list-none flex-col gap-6 p-0">
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
                      <p className="m-0 mt-1.5 text-[17px] font-bold leading-snug text-brand-fg1 md:text-lg">
                        {STREET}, {CITY_ZIP}
                      </p>
                    </div>
                  </li>
                </ul>
                <a href={MAILTO} className={`${ctaYellow} mt-8 w-full justify-center`}>
                  Napísať nám
                </a>
              </div>
            </div>

            <div id="napiste-nam" className="scroll-mt-28 flex min-h-0 flex-col lg:scroll-mt-32">
              <h2 className="font-heading m-0 text-lg font-bold text-brand-fg1 md:text-xl">
                Napíšte nám
              </h2>
              <form
                className="mt-4 flex flex-1 flex-col rounded-[1.5rem] border border-black/[0.08] bg-white p-6 shadow-[0_20px_50px_-28px_rgba(185,160,224,0.2)] md:mt-5 md:rounded-[1.65rem] md:p-8"
                noValidate
              >
                <div className="flex flex-1 flex-col gap-4">
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
                </div>
                <button type="button" className={`${ctaYellow} mt-6 w-full justify-center`}>
                  Odoslať správu
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BLOK 2: Mapa (~polovica šírky / výšky obrazovky) + text vedľa */}
      <section className={`${CX} relative z-[1] pb-10 md:pb-12`} aria-labelledby="heading-kde-najdes">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div className="order-2 min-w-0 lg:order-1">
            <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-black/[0.08] shadow-[0_20px_48px_-30px_rgba(45,50,70,0.2)] md:rounded-[1.75rem]">
              <div className="relative h-[min(50svh,17rem)] w-full bg-[#e4e8ee] sm:h-[min(50svh,19rem)] lg:h-[min(50svh,22rem)] lg:max-h-[50vh]">
                <iframe
                  title="Mapa — Haanova 28, Bratislava"
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[0.12] contrast-[0.98]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2">
            <h2
              id="heading-kde-najdes"
              className="font-heading m-0 text-[clamp(1.35rem,1.05rem+1.2vw,1.85rem)] font-bold tracking-tight text-brand-fg1"
            >
              Kde nás nájdeš
            </h2>
            <a
              href={MAPS_OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex w-fit max-w-full items-start gap-2 font-heading text-[clamp(1.05rem,0.95rem+0.5vw,1.3rem)] font-bold leading-snug tracking-tight text-brand-fg1 underline decoration-brand-primary/40 underline-offset-[3px] transition-colors hover:text-brand-primary hover:decoration-brand-primary md:mt-5"
            >
              <IconPin className="mt-1 shrink-0 text-brand-primary opacity-90" />
              <span>
                {ADDRESS_LINE}
                <span className="mt-1 block text-[13px] font-normal font-sans text-brand-fg3 no-underline group-hover:text-brand-fg2">
                  Otvorí sa v mapách
                </span>
              </span>
            </a>
            <p className="m-0 mt-5 max-w-md text-[13px] leading-relaxed text-brand-fg3 md:text-[14px]">
              Naša poloha sa môže v priebehu najbližších rokov meniť. Aktuálne fungujeme na Haanovej 28 a
              zároveň sme v procese prerábky budovy na Znievskej.
            </p>
            <p className="m-0 mt-4 max-w-md text-[13px] leading-relaxed text-brand-fg3 md:text-[14px]">
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
      </section>

      {/* BLOK 3: Social wall */}
      <section className={`${CX} relative z-[1] pb-10 md:pb-12`} aria-labelledby="heading-social">
        <h2
          id="heading-social"
          className="font-heading m-0 text-[clamp(1.35rem,1.05rem+1.2vw,1.85rem)] font-bold tracking-tight text-brand-fg1"
        >
          Kde nás môžeš sledovať
        </h2>
        <p className="m-0 mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-fg2 md:mt-4">
          Aktuálne dianie, zákulisie a novinky zdieľame aj na sociálnych sieťach.
        </p>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
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
                  <Image
                    src="/kontakt/instagram-lyceum-profile.png"
                    alt="Profil Lýceum C. S. Lewisa na Instagrame (@lyceumcsl)"
                    width={819}
                    height={1024}
                    className="h-auto w-full origin-center scale-[1.18] object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 320px"
                  />
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
              <div className="mt-4 flex flex-1 flex-col rounded-2xl border border-white/80 bg-white/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-[#8eb8f4] to-[#5b8def] ring-1 ring-[#5b8def]/20"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#3d5a8a]">Komunita · novinky</span>
                </div>
                <div className="mt-4 space-y-2 rounded-xl bg-white/70 p-3 ring-1 ring-[#c8daf4]/50">
                  <div className="h-2 w-[78%] rounded-full bg-[#3d5a8a]/12" />
                  <div className="h-2 w-full rounded-full bg-[#3d5a8a]/10" />
                  <div className="h-2 w-[85%] rounded-full bg-[#3d5a8a]/10" />
                </div>
                <div className="mt-3 min-h-[3.25rem] flex-1 rounded-xl border border-dashed border-[#5b8def]/25 bg-gradient-to-b from-white/60 to-[#eef5ff]/80" />
                <p className="m-0 mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5a7194]">
                  Priestor pre obsah
                </p>
              </div>
              <button type="button" className={`${socialCta} mt-5`}>
                Pozrieť profil
              </button>
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
              <div className="mt-4 flex flex-1 flex-col rounded-2xl border border-white/85 bg-white/65 p-4 backdrop-blur-sm">
                <div className="flex gap-1 border-b border-[#0a66c2]/12 pb-3">
                  <span className="rounded-md bg-[#0a66c2]/12 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0a66c2]">
                    Prax
                  </span>
                  <span className="rounded-md bg-brand-fg1/[0.06] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-fg3">
                    Projekty
                  </span>
                </div>
                <div className="mt-3 flex gap-3">
                  <div className="h-14 w-14 shrink-0 rounded-lg bg-gradient-to-br from-[#0a66c2]/15 to-[#0a66c2]/08 ring-1 ring-[#0a66c2]/15" />
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="h-2.5 w-[48%] rounded bg-brand-fg1/12" />
                    <div className="h-2 w-full rounded bg-brand-fg1/[0.07]" />
                    <div className="h-2 w-[90%] rounded bg-brand-fg1/[0.07]" />
                  </div>
                </div>
                <div className="mt-3 min-h-[3.25rem] flex-1 rounded-lg border border-dashed border-[#0a66c2]/20 bg-gradient-to-b from-white/80 to-[#f0f7fc]/90" />
                <p className="m-0 mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-fg3">
                  Priestor pre obsah
                </p>
              </div>
              <button type="button" className={`${socialCta} mt-5`}>
                Pozrieť profil
              </button>
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
              <div className="mt-4 flex flex-1 flex-col rounded-2xl border border-white/12 bg-[#1a1820]/80 p-4 backdrop-blur-sm">
                <div className="relative mx-auto aspect-[9/15] w-[52%] max-w-[7rem] overflow-hidden rounded-xl bg-gradient-to-b from-[#3d3848] to-[#1f1d26] ring-1 ring-white/10">
                  <div className="absolute inset-x-2 top-2.5 flex justify-center gap-1">
                    <span className="h-1 w-6 rounded-full bg-white/20" />
                    <span className="h-1 w-4 rounded-full bg-white/15" />
                  </div>
                  <div className="absolute inset-x-2 bottom-10 top-10 rounded-md bg-gradient-to-b from-white/8 to-transparent" />
                  <div className="absolute bottom-2.5 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#fdb913]/40 bg-[#fdb913]/15">
                    <span className="ml-0.5 block h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white/90" />
                  </div>
                </div>
                <p className="m-0 mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Priestor pre obsah
                </p>
              </div>
              <button
                type="button"
                className="mt-5 w-full rounded-full border-2 border-white/20 bg-white/10 py-3 text-[14px] font-bold text-white backdrop-blur-sm transition-[border-color,background-color] hover:border-[#fdb913]/45 hover:bg-white/[0.14] md:text-[15px]"
              >
                Pozrieť profil
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* BLOK 4: Spodný CTA — iná logika, bez opakovania „ozvi sa“ */}
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
