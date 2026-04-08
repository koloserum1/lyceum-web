import type { PreStudentovSlug } from "@/data/pre-studentov-nav";

const DRIVE_PREVIEW = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview`;

const FORM_PRESTUP =
  "https://docs.google.com/forms/d/10HHxZlnN98E4khDYZrrwiEwbNfJnmTh6vIvcApD5uzM/viewform";

const LINK_UVOLNENIE =
  "https://lyceum.sk/wp-content/uploads/2023/10/Ziadost-o-uvolnenie-z-vyucovania.pdf";
const LINK_IUP =
  "https://lyceum.sk/wp-content/uploads/2023/12/Ziadost_o_studium_podla_IUP-1-1.docx";
const LINK_ZAHRANICIE = "/docs/ziadost-o-studium-v-zahranici.docx";

function DrivePdfEmbed({ fileId, title }: { fileId: string; title: string }) {
  return (
    <div className="relative mt-4 w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-brand-bg2 shadow-inner">
      <iframe
        title={title}
        src={DRIVE_PREVIEW(fileId)}
        className="h-[min(78vh,720px)] w-full min-h-[420px] border-0 sm:min-h-[480px]"
        allow="autoplay"
      />
    </div>
  );
}

const h2 = "font-heading mt-8 text-lg font-bold tracking-tight text-brand-fg1 first:mt-0 md:text-xl";
const h3 = "font-heading mt-6 text-base font-bold tracking-tight text-brand-fg1 md:text-[17px]";
const p = "m-0 mt-3 text-[15px] leading-relaxed text-brand-fg1 sm:text-[16px] md:text-[17px] md:leading-[1.62]";

function SkolskyPoriadok() {
  return (
    <div className="text-brand-fg1">
      <p className="m-0 text-[15px] font-medium leading-relaxed text-brand-fg1 sm:text-[16px] md:text-[17px]">
        Aktuálny školský poriadok pre školský rok 2025/26
      </p>
      <DrivePdfEmbed
        fileId="1jTz4kkrvsWvN05n8rZ16bLVgMDeNQb0Z"
        title="Školský poriadok 2025/26 (PDF)"
      />
      <p className="mt-4 text-sm text-brand-fg3">
        Ak sa dokument nezobrazí, otvorte ho priamo v{" "}
        <a
          href="https://drive.google.com/file/d/1jTz4kkrvsWvN05n8rZ16bLVgMDeNQb0Z/view"
          className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Drive
        </a>
        .
      </p>
    </div>
  );
}

function Stravovanie() {
  const softCard =
    "rounded-2xl border border-black/[0.08] bg-brand-bg2/75 px-4 py-4 shadow-[0_8px_28px_-18px_rgba(27,22,36,0.08)] sm:px-5 sm:py-4";
  const priceRow =
    "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-black/[0.06] py-3 last:border-b-0 last:pb-0 first:pt-0";
  const labelMuted = "text-[15px] text-brand-fg3 sm:text-[16px]";
  const priceEm =
    "font-heading shrink-0 text-lg font-bold tabular-nums tracking-tight text-brand-fg1 sm:text-xl";

  return (
    <div className="max-w-3xl space-y-0 text-brand-fg1">
      <h2 className={`${h2} !mt-0`}>Obedy v škole</h2>

      <h3 className={`${h3} !mt-6`}>Kto zabezpečuje obedy</h3>
      <p className={p}>Obedy zabezpečuje firma PINO, s.r.o.</p>
      <p className={p}>
        Otázky k platbám, predpisom a vyúčtovaniu rieši priamo dodávateľ:
      </p>
      <div className={`${softCard} mt-3`}>
        <p className="m-0 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-brand-fg3">
          Kontakt dodávateľa
        </p>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
          <a
            href="tel:+421911839075"
            className="font-heading text-lg font-bold text-brand-fg1 underline decoration-brand-primary/35 underline-offset-2 transition-colors hover:decoration-brand-primary"
          >
            0911 839 075
          </a>
          <span className="hidden text-brand-fg4 sm:inline" aria-hidden>
            •
          </span>
          <a
            href="mailto:uhrady@pinostravovanie.sk"
            className="break-all text-[15px] font-semibold text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary sm:text-[16px]"
          >
            uhrady@pinostravovanie.sk
          </a>
        </div>
      </div>
      <p className={`${p} text-brand-fg3`}>
        (Prípadne sa vieš spýtať aj v jedálni priamo v škole.)
      </p>

      <h3 className={h3}>Kedy a kde sa vydáva strava</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className={softCard}>
          <p className="m-0 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-brand-fg3">
            Čas výdaja
          </p>
          <p className="mt-2 font-heading text-xl font-bold tabular-nums text-brand-fg1 sm:text-2xl">
            11:30 – 14:15
          </p>
        </div>
        <div className={softCard}>
          <p className="m-0 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-brand-fg3">
            Miesto
          </p>
          <p className="mt-2 text-[15px] font-semibold leading-snug text-brand-fg1 sm:text-[16px]">
            školská jedáleň
            <span className="mt-0.5 block text-[13px] font-normal text-brand-fg3">
              prízemie
            </span>
          </p>
        </div>
      </div>

      <h3 className={h3}>Koľko to stojí (platné od 1. 9. 2025)</h3>
      <div className={`${softCard} mt-3`}>
        <div className={priceRow}>
          <span className={labelMuted}>obed</span>
          <span className={priceEm}>2,50 €</span>
        </div>
        <div className={priceRow}>
          <span className={labelMuted}>mesačná réžia</span>
          <span className={priceEm}>16,50 € / mesiac</span>
        </div>
        <div className={`${priceRow} border-t border-black/[0.06] pt-3`}>
          <span className={labelMuted}>vegánske menu (VEGE)</span>
          <span className={`${priceEm} text-brand-fg1`}>4,50 €</span>
        </div>
      </div>
      <p className={p}>
        Réžia sa štandardne nevracia. Výnimka je, ak študent neodoberie ani
        jeden obed celý kalendárny mesiac.
      </p>

      <h3 className={h3}>Ako platíš</h3>
      <p className={p}>
        <strong className="font-semibold text-brand-fg1">IBAN</strong>
      </p>
      <div className="mt-2 rounded-xl border border-dashed border-black/[0.12] bg-black/[0.03] px-3 py-3 sm:px-4">
        <p className="m-0 select-all font-mono text-[14px] font-medium leading-relaxed tracking-wide text-brand-fg1 sm:text-[15px]">
          SK15 1100 0000 0029 4002 7069
        </p>
      </div>
      <p className={p}>Pri platbe vždy uveď:</p>
      <ul className="m-0 mt-2 list-disc space-y-1.5 pl-5 text-[15px] text-brand-fg1 marker:text-brand-fg3 sm:text-[16px] md:text-[17px]">
        <li>variabilný symbol (pridelený systémom)</li>
        <li>do správy meno žiaka</li>
      </ul>
      <p className={p}>Platiť sa dá aj cez EduPage (napr. VIAMO).</p>

      <h3 className={h3}>Ako si obed objednáš / odhlásiš</h3>
      <p className={p}>
        Obedy nie sú automatické; objednávaš ich v EduPage.
      </p>
      <div className="mt-3 space-y-3">
        <div className="rounded-2xl border-l-[4px] border-brand-secondary bg-brand-bg2/60 py-3 pl-4 pr-3 shadow-[0_6px_24px_-16px_rgba(27,22,36,0.1)] sm:pl-5">
          <p className="m-0 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-brand-fg3">
            Prihlásenie obedov
          </p>
          <p className="m-0 mt-2 text-[15px] font-semibold leading-snug text-brand-fg1 sm:text-[16px]">
            najneskôr do 10:00 predchádzajúceho pracovného dňa
          </p>
          <p className={`m-0 mt-1.5 text-[13px] text-brand-fg3`}>
            napr. v piatok do 10:00 na pondelok
          </p>
        </div>
        <div className="rounded-2xl border-l-[4px] border-brand-primary/55 bg-brand-bg2/60 py-3 pl-4 pr-3 shadow-[0_6px_24px_-16px_rgba(27,22,36,0.1)] sm:pl-5">
          <p className="m-0 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-brand-fg3">
            Odhlásenie
          </p>
          <p className="m-0 mt-2 text-[15px] font-semibold leading-snug text-brand-fg1 sm:text-[16px]">
            v daný deň najneskôr do 7:00
          </p>
        </div>
      </div>
      <p className={p}>
        Po tomto čase už obed nie je možné odhlásiť a účtuje sa.
      </p>
      <p className={p}>
        Jedálny lístok je v EduPage 2 týždne dopredu.
      </p>
    </div>
  );
}

function Ziadosti() {
  const itemClass =
    "block rounded-xl border border-black/[0.08] bg-brand-bg2/80 px-4 py-4 transition-colors hover:border-brand-primary/35 hover:bg-brand-accent/20";

  return (
    <div className="max-w-3xl space-y-4 text-brand-fg1">
      <p className="m-0 text-[15px] leading-relaxed sm:text-[16px] md:text-[17px]">
        Stiahnite si formulár – kliknutím sa súbor otvorí alebo stiahne.
      </p>
      <ul className="m-0 list-none space-y-3 p-0">
        <li>
          <a
            href={LINK_UVOLNENIE}
            className={itemClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-heading font-bold text-brand-fg1">
              Žiadosť o uvoľnenie študenta z vyučovania na viac ako 3 dni
            </span>
            <span className="mt-1 block text-sm text-brand-fg3">PDF</span>
          </a>
        </li>
        <li>
          <a
            href={LINK_IUP}
            className={itemClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-heading font-bold text-brand-fg1">
              Žiadosť o štúdium podľa IUP
            </span>
            <span className="mt-1 block text-sm text-brand-fg3">Word (.docx)</span>
          </a>
        </li>
        <li>
          <a href={LINK_ZAHRANICIE} className={itemClass} download>
            <span className="font-heading font-bold text-brand-fg1">
              Žiadosť o štúdium v zahraničí
            </span>
            <span className="mt-1 block text-sm text-brand-fg3">Word (.docx)</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

function Dokumenty() {
  return (
    <div className="space-y-8 text-brand-fg1">
      <div>
        <h2 className="font-heading m-0 text-base font-bold text-brand-fg1 md:text-lg">
          Vyhlásenia
        </h2>
        <DrivePdfEmbed fileId="12t0-Fv0nmph2kjOcY3aMqVjT5qNw9szL" title="Vyhlásenia (PDF)" />
        <p className="mt-3 text-sm text-brand-fg3">
          <a
            href="https://drive.google.com/file/d/12t0-Fv0nmph2kjOcY3aMqVjT5qNw9szL/view?usp=drive_web"
            className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Otvoriť v Google Drive
          </a>
        </p>
      </div>

      <div>
        <h2 className="font-heading m-0 text-base font-bold text-brand-fg1 md:text-lg">
          Záujem o prestup
        </h2>
        <p className={`${p} mt-3 max-w-3xl`}>
          Formulár na vyjadrenie záujmu o prestup vyplňte online.
        </p>
        <a
          href={FORM_PRESTUP}
          className="mt-4 inline-flex items-center justify-center rounded-full border-0 bg-brand-secondary px-6 py-3 text-[15px] font-bold text-brand-fg1 no-underline shadow-sm transition-colors hover:bg-[#e8c84a]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Otvoriť formulár (Google Forms)
        </a>
      </div>
    </div>
  );
}

export function PreStudentovBody({ slug }: { slug: PreStudentovSlug }) {
  switch (slug) {
    case "skolsky-poriadok":
      return <SkolskyPoriadok />;
    case "stravovanie":
      return <Stravovanie />;
    case "ziadosti-a-potvrdenia":
      return <Ziadosti />;
    case "dokumenty":
      return <Dokumenty />;
    default:
      return null;
  }
}

export function preStudentovWideContent(slug: PreStudentovSlug): boolean {
  return slug === "skolsky-poriadok" || slug === "dokumenty";
}
