import Image from "next/image";
import Link from "next/link";
import { siteContact } from "@/content/siteContact";
import { CONTENT_SHELL_CLASS } from "@/lib/content-shell";

const CX = CONTENT_SHELL_CLASS;

const iconBtn =
  "inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-fg1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/** Simple Icons: 24×24, jedna uzavretá cesta (FA 448×512 pri malom scale robila „dieru“) */
function IconTikTok({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.919-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.63.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function FooterSocialNav() {
  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)] sm:justify-start"
      aria-label="Sociálne siete"
    >
      <a
        href={siteContact.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label="Instagram – otvorí sa na novej karte"
      >
        <IconInstagram className="h-6 w-6" />
      </a>
      <a
        href={siteContact.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label="Facebook – otvorí sa na novej karte"
      >
        <IconFacebook className="h-6 w-6" />
      </a>
      <a
        href={siteContact.tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label="TikTok – otvorí sa na novej karte"
      >
        <IconTikTok className="h-6 w-6" />
      </a>
    </nav>
  );
}

type SiteContactFooterProps = {
  /** Pridá triedy k vnútorným shell kontajnerom (napr. report-print-shell pri tlači). */
  shellExtraClassName?: string;
};

export function SiteContactFooter({
  shellExtraClassName = "",
}: SiteContactFooterProps = {}) {
  const shell = [CX, shellExtraClassName].filter(Boolean).join(" ");
  return (
    <>
      <section
        id="kontakt"
        aria-labelledby="kontakt-heading"
        className="scroll-mt-24 border-t border-black/[0.06] bg-brand-bg1 py-12 md:scroll-mt-28 md:py-16"
      >
        <div className={shell}>
          <h2
            id="kontakt-heading"
            className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.5vw,2.85rem)] leading-[1.1] tracking-tight text-brand-fg1"
          >
            Kontakt
          </h2>
          <p className="mt-3 mb-0 max-w-2xl text-sm font-normal leading-relaxed text-brand-fg3 md:mt-4 md:text-[15px]">
            Ozvi sa nám, radi odpovieme na otázky o štúdiu alebo spolupráci.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="rounded-2xl border border-black/[0.06] bg-brand-bg2/50 p-6 shadow-[0_12px_40px_-28px_rgba(27,22,36,0.12)] ring-1 ring-white/80 md:p-8">
              <p className="font-heading m-0 text-[15px] tracking-tight text-brand-fg1 md:text-base">
                Škola
              </p>
              <a
                href={`mailto:${siteContact.email}`}
                className="mt-4 block text-[15px] font-medium text-brand-fg1 underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
              >
                {siteContact.email}
              </a>
              <a
                href={`tel:${siteContact.phoneTel}`}
                className="mt-2 block text-[15px] font-medium text-brand-fg1 tabular-nums underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
              >
                {siteContact.phone}
              </a>
              <p className="font-heading mt-6 mb-0 text-[12px] font-bold uppercase tracking-[0.14em] text-brand-fg3">
                Adresa
              </p>
              <address className="mt-2 mb-0 not-italic text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                {siteContact.schoolAddressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-brand-bg2/60 p-6 shadow-[0_12px_40px_-28px_rgba(27,22,36,0.12)] ring-1 ring-white/80 md:p-8">
              <p className="font-heading m-0 text-[15px] tracking-tight text-brand-fg1 md:text-base">
                Zriaďovateľ
              </p>
              <address className="mt-4 mb-0 not-italic text-[14px] leading-relaxed text-brand-fg2 md:text-[15px]">
                {siteContact.founderLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="border-t border-black/[0.08] bg-brand-bg2/95 pb-0 pt-7 md:pt-9"
        aria-label="Pätička stránky"
      >
        <div className="relative left-1/2 w-screen min-w-0 max-w-[100vw] -translate-x-1/2 overflow-x-clip">
          <div className="relative isolate">
            <Link
              href="/#domov"
              className="relative z-0 -mb-px block w-full leading-none no-underline"
            >
              <Image
                src="/logo.svg"
                alt="Lýceum C. S. Lewisa"
                width={560}
                height={150}
                className="mx-auto block h-[clamp(6rem,22vw,13rem)] w-full max-w-none object-contain object-bottom opacity-[0.16] sm:h-[clamp(6.5rem,24vw,14rem)] md:h-[clamp(7rem,26vw,15rem)]"
                unoptimized
              />
            </Link>

            {/* Text a ikony nad svetlým logom, spodok stránky */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end gap-4 pt-8 pb-3.5 md:gap-5 md:pt-10 md:pb-4">
              <div
                className={`${shell} pointer-events-auto flex flex-col gap-4 md:gap-5`}
              >
                <FooterSocialNav />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                  <p className="m-0 text-center text-[12px] text-brand-fg1 [text-shadow:0_1px_0_rgba(255,255,255,0.65)] sm:text-left md:text-[13px]">
                    © {new Date().getFullYear()} Lýceum C. S. Lewisa
                  </p>
                  <a
                    href={siteContact.privacyInfoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-center text-[12px] font-medium text-brand-fg1 underline decoration-black/[0.2] underline-offset-[3px] [text-shadow:0_1px_0_rgba(255,255,255,0.65)] md:text-[13px]"
                  >
                    Ochrana osobných údajov
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
