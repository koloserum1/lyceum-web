"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { prijimackyPages } from "@/data/prijimacky-nav";

const navBeforePrijimacky = [
  { href: "/#tri-piliere", label: "O škole" },
  { href: "/#studium", label: "Štúdium" },
  { href: "/#studenti-videa", label: "Pre študentov" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

const navAfterPrijimacky = [
  { href: "/dva-percenta", label: "2 %" },
  { href: "/pridaj-sa-do-timu", label: "Pridaj sa do tímu" },
  { href: "/#dod", label: "DOD" },
] as const;

const SHELL = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

const linkClassDesktop =
  "whitespace-nowrap text-[clamp(15px,0.9rem+0.35vw,17px)] text-brand-fg1 no-underline decoration-2 underline-offset-4 hover:underline";

const linkClassMobile =
  "rounded-lg px-3 py-2.5 text-[17px] text-brand-fg1 no-underline hover:bg-black/[0.04]";

/** Položky podmenu Prijímačky — rovnaká reč ako ostatné odkazy (bez fialových boxov). */
const prijimackySubmenuLinkClass =
  "block w-full rounded-lg px-3 py-2.5 text-left text-[15px] font-medium leading-snug text-brand-fg1 no-underline transition-colors hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/[0.08] focus-visible:ring-offset-2";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prijimackyDesktopOpen, setPrijimackyDesktopOpen] = useState(false);
  const [prijimackyMobileOpen, setPrijimackyMobileOpen] = useState(false);
  const prijimackyDesktopRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) setPrijimackyMobileOpen(false);
  }, [open]);

  useEffect(() => {
    if (!prijimackyDesktopOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPrijimackyDesktopOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      const el = prijimackyDesktopRef.current;
      if (el && !el.contains(e.target as Node)) setPrijimackyDesktopOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [prijimackyDesktopOpen]);

  const clearPrijLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const onPrijimackyDesktopEnter = () => {
    clearPrijLeaveTimer();
    setPrijimackyDesktopOpen(true);
  };

  const onPrijimackyDesktopLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setPrijimackyDesktopOpen(false);
      leaveTimerRef.current = null;
    }, 160);
  };

  const bubbleRadius = "rounded-[24px]";
  const glassDesktop = scrolled
    ? "bg-white/[0.55] ring-1 ring-black/[0.06] backdrop-blur-md backdrop-saturate-125 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.08)]"
    : "bg-white/[0.82] ring-1 ring-black/[0.05] backdrop-blur-sm backdrop-saturate-120 shadow-[0_1px_0_rgba(0,0,0,0.05)]";

  const dropdownPanelClass =
    "absolute left-0 top-full z-[60] pt-2 transition-[opacity,visibility] duration-200 ease-out " +
    (prijimackyDesktopOpen
      ? "visible opacity-100"
      : "invisible pointer-events-none opacity-0");

  return (
    <header className="site-header sticky top-0 z-50 w-full pt-2 sm:pt-3">
      <div
        className={`${SHELL} overflow-hidden transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out lg:overflow-visible ${glassDesktop} ${bubbleRadius} ${
          open ? "rounded-b-none lg:rounded-b-[24px]" : ""
        }`}
      >
        <div className="flex flex-nowrap items-center justify-between gap-2 py-3 sm:gap-3 lg:gap-4 lg:py-[clamp(1rem,3vw,1.35rem)]">
          <Link
            href="/#domov"
            className="relative block min-w-0 shrink leading-none no-underline"
          >
            <Image
              src="/logo.svg"
              alt="Lýceum C. S. Lewisa"
              width={300}
              height={80}
              className="h-9 w-auto max-w-[min(42vw,200px)] object-contain object-left sm:h-10 sm:max-w-[min(46vw,240px)] lg:h-14 lg:max-w-[min(320px,82vw)]"
              unoptimized
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-6"
            aria-label="Hlavná navigácia"
          >
            {navBeforePrijimacky.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                data-nav-link
                className={linkClassDesktop}
              >
                {l.label}
              </Link>
            ))}

            <div
              ref={prijimackyDesktopRef}
              className="relative"
              onMouseEnter={onPrijimackyDesktopEnter}
              onMouseLeave={onPrijimackyDesktopLeave}
            >
              <button
                type="button"
                className={`${linkClassDesktop} inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 font-sans outline-none focus-visible:ring-2 focus-visible:ring-black/[0.1] focus-visible:ring-offset-2`}
                aria-expanded={prijimackyDesktopOpen}
                aria-haspopup="true"
                aria-controls="prijimacky-submenu-desktop"
                id="prijimacky-trigger-desktop"
                onClick={() =>
                  setPrijimackyDesktopOpen((v) => !v)
                }
              >
                Prijímačky
                <span className="inline-block text-[0.65em] opacity-75" aria-hidden>
                  ▾
                </span>
              </button>
              <div
                id="prijimacky-submenu-desktop"
                role="region"
                aria-labelledby="prijimacky-trigger-desktop"
                className={dropdownPanelClass}
              >
                <ul className="m-0 flex min-w-[min(100vw-2rem,20rem)] list-none flex-col gap-0.5 rounded-xl border border-black/[0.08] bg-white/95 p-1.5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)] backdrop-blur-sm xl:min-w-[22rem]">
                  {prijimackyPages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/prijimacky/${p.slug}`}
                        data-nav-link
                        className={prijimackySubmenuLinkClass}
                        onClick={() => setPrijimackyDesktopOpen(false)}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {navAfterPrijimacky.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                data-nav-link
                className={linkClassDesktop}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Link
              href="/#zaujemca"
              className="btn-secondary-site inline-flex max-w-[min(46vw,11rem)] shrink-0 truncate whitespace-nowrap !py-2.5 !text-[clamp(10px,2.8vw,12px)] !px-[0.55rem] !pb-[0.45rem] sm:!px-3 sm:!text-xs lg:max-w-none lg:!px-[clamp(1.5rem,1.75vw,3.5rem)] lg:!py-[0.7rem] lg:!pb-[0.6rem] lg:!text-[clamp(15px,0.9rem+0.35vw,17px)]"
            >
              Záujem o štúdium
            </Link>
            <button
              type="button"
              className="shrink-0 rounded-lg p-1.5 sm:p-2 lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 5v1.5h14V5H5z" />
                <path d="M5 12.8h14v-1.5H5v1.5z" />
                <path d="M5 19h14v-1.5H5V19z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className={`${SHELL} ${bubbleRadius} rounded-t-none border-t border-black/[0.06] bg-white shadow-[0_16px_48px_-20px_rgba(0,0,0,0.1)] transition-colors duration-300 lg:hidden`}
        >
          <nav className="flex flex-col gap-1 py-4" aria-label="Hlavná navigácia">
            {navBeforePrijimacky.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                data-nav-link
                className={linkClassMobile}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <div className="flex flex-col">
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-left text-[17px] font-sans text-brand-fg1 transition-colors ${
                  prijimackyMobileOpen ? "bg-black/[0.04]" : "hover:bg-black/[0.03]"
                }`}
                aria-expanded={prijimackyMobileOpen}
                aria-controls="prijimacky-submenu-mobile"
                id="prijimacky-trigger-mobile"
                onClick={() => setPrijimackyMobileOpen((v) => !v)}
              >
                <span className="font-medium">Prijímačky</span>
                <span
                  className={`text-sm text-brand-fg3 transition-transform ${prijimackyMobileOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              {prijimackyMobileOpen ? (
                <ul
                  id="prijimacky-submenu-mobile"
                  className="m-0 mt-2 flex list-none flex-col gap-0.5 rounded-xl border border-black/[0.06] bg-white p-2 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.08)]"
                  role="list"
                >
                  {prijimackyPages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/prijimacky/${p.slug}`}
                        data-nav-link
                        className={prijimackySubmenuLinkClass}
                        onClick={() => {
                          setOpen(false);
                          setPrijimackyMobileOpen(false);
                        }}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {navAfterPrijimacky.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                data-nav-link
                className={linkClassMobile}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#zaujemca"
              className="btn-secondary-site mt-3 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Záujem o štúdium
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
