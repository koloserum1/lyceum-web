"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { prijimackyPages } from "@/data/prijimacky-nav";

const navBeforePrijimacky = [
  { href: "/#tri-piliere", label: "O škole" },
  { href: "/#studium", label: "Štúdium" },
  { href: "/#pre-studentov", label: "Pre študentov" },
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
    "absolute left-0 top-full z-[60] pt-2 transition-[opacity,visibility,transform] duration-200 ease-out " +
    (prijimackyDesktopOpen
      ? "visible translate-y-0 opacity-100"
      : "invisible pointer-events-none -translate-y-1 opacity-0");

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
                key={l.href}
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
                className={`${linkClassDesktop} inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 font-sans`}
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
                <ul className="m-0 min-w-[min(100vw-2rem,20rem)] list-none rounded-2xl border border-black/[0.08] bg-white/[0.97] p-2 py-2.5 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.18)] backdrop-blur-md backdrop-saturate-150 xl:min-w-[22rem]">
                  {prijimackyPages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/prijimacky/${p.slug}`}
                        data-nav-link
                        className="block rounded-xl px-3 py-2.5 text-left text-[15px] font-normal leading-snug text-brand-fg1 no-underline transition-colors hover:bg-black/[0.05]"
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
                key={l.href}
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
          className={`${SHELL} ${bubbleRadius} rounded-t-none border-t border-black/[0.07] bg-white/[0.55] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 lg:hidden`}
        >
          <nav className="flex flex-col gap-1 py-4" aria-label="Hlavná navigácia">
            {navBeforePrijimacky.map((l) => (
              <Link
                key={l.href}
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
                className={`${linkClassMobile} flex w-full items-center justify-between text-left font-sans`}
                aria-expanded={prijimackyMobileOpen}
                aria-controls="prijimacky-submenu-mobile"
                id="prijimacky-trigger-mobile"
                onClick={() => setPrijimackyMobileOpen((v) => !v)}
              >
                <span>Prijímačky</span>
                <span
                  className={`text-sm opacity-70 transition-transform ${prijimackyMobileOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              {prijimackyMobileOpen ? (
                <ul
                  id="prijimacky-submenu-mobile"
                  className="m-0 mb-1 list-none border-l-2 border-[#fdb913]/80 pl-2"
                  role="list"
                >
                  {prijimackyPages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/prijimacky/${p.slug}`}
                        data-nav-link
                        className={`${linkClassMobile} block pl-2 text-[16px] text-brand-fg1`}
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
                key={l.href}
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
