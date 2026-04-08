"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { prijimackyPages } from "@/data/prijimacky-nav";
import { preStudentovPages } from "@/data/pre-studentov-nav";

const navStart = [
  { href: "/#tri-piliere", label: "O škole" },
  { href: "/#studium", label: "Štúdium" },
] as const;

const navKontakt = { href: "/kontakt", label: "Kontakt" } as const;

const navAfterPrijimacky = [
  { href: "/dva-percenta", label: "2 %" },
  { href: "/pridaj-sa-do-timu", label: "Pridaj sa do tímu" },
  { href: "/dod", label: "DOD" },
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
  const [preStudentovDesktopOpen, setPreStudentovDesktopOpen] = useState(false);
  const [preStudentovMobileOpen, setPreStudentovMobileOpen] = useState(false);
  const prijimackyDesktopRef = useRef<HTMLDivElement>(null);
  const preStudentovDesktopRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const preStudentLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const lastMobileMenuToggleRef = useRef(0);

  const toggleMobileMenu = useCallback(() => {
    const t = Date.now();
    if (t - lastMobileMenuToggleRef.current < 340) return;
    lastMobileMenuToggleRef.current = t;
    setOpen((v) => !v);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      setPrijimackyMobileOpen(false);
      setPreStudentovMobileOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (!prijimackyDesktopOpen && !preStudentovDesktopOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPrijimackyDesktopOpen(false);
        setPreStudentovDesktopOpen(false);
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node;
      const prij = prijimackyDesktopRef.current;
      const pre = preStudentovDesktopRef.current;
      if (prij && !prij.contains(t)) setPrijimackyDesktopOpen(false);
      if (pre && !pre.contains(t)) setPreStudentovDesktopOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [prijimackyDesktopOpen, preStudentovDesktopOpen]);

  const clearPrijLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const clearPreStudentLeaveTimer = () => {
    if (preStudentLeaveTimerRef.current) {
      clearTimeout(preStudentLeaveTimerRef.current);
      preStudentLeaveTimerRef.current = null;
    }
  };

  const onPrijimackyDesktopEnter = () => {
    clearPrijLeaveTimer();
    clearPreStudentLeaveTimer();
    setPreStudentovDesktopOpen(false);
    setPrijimackyDesktopOpen(true);
  };

  const onPrijimackyDesktopLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setPrijimackyDesktopOpen(false);
      leaveTimerRef.current = null;
    }, 160);
  };

  const onPreStudentovDesktopEnter = () => {
    clearPrijLeaveTimer();
    clearPreStudentLeaveTimer();
    setPrijimackyDesktopOpen(false);
    setPreStudentovDesktopOpen(true);
  };

  const onPreStudentovDesktopLeave = () => {
    preStudentLeaveTimerRef.current = setTimeout(() => {
      setPreStudentovDesktopOpen(false);
      preStudentLeaveTimerRef.current = null;
    }, 160);
  };

  const bubbleRadius = "rounded-[24px]";
  const glassDesktop = scrolled
    ? "bg-white/[0.55] ring-1 ring-black/[0.06] backdrop-blur-md backdrop-saturate-125 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.08)]"
    : "bg-white/[0.82] ring-1 ring-black/[0.05] backdrop-blur-sm backdrop-saturate-120 shadow-[0_1px_0_rgba(0,0,0,0.05)]";

  const dropdownPanelClass = (isOpen: boolean) =>
    "absolute left-0 top-full z-[60] pt-2 transition-[opacity,visibility,transform] duration-200 ease-out " +
    (isOpen
      ? "visible translate-y-0 opacity-100"
      : "invisible pointer-events-none -translate-y-1 opacity-0");

  return (
    <header className="site-header sticky top-0 z-[60] w-full pt-2 sm:pt-3">
      <div
        className={`${SHELL} overflow-hidden transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out xl:overflow-visible ${glassDesktop} ${bubbleRadius} ${
          open ? "rounded-b-none xl:rounded-b-[24px]" : ""
        }`}
      >
        <div className="flex min-w-0 flex-nowrap items-center justify-between gap-2 py-3 sm:gap-3 xl:gap-4 xl:py-[clamp(1rem,3vw,1.35rem)]">
          <Link
            href="/#domov"
            className="relative block min-w-0 shrink leading-none no-underline"
          >
            <Image
              src="/logo.svg"
              alt="Lýceum C. S. Lewisa"
              width={300}
              height={80}
              className="h-9 w-auto max-w-[min(42vw,200px)] object-contain object-left sm:h-10 sm:max-w-[min(46vw,240px)] lg:h-12 lg:max-w-[min(280px,52vw)] xl:h-14 xl:max-w-[min(320px,82vw)]"
              unoptimized
              priority
            />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-end gap-5 xl:flex xl:gap-6"
            aria-label="Hlavná navigácia"
          >
            {navStart.map((l) => (
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
              ref={preStudentovDesktopRef}
              className="relative"
              onMouseEnter={onPreStudentovDesktopEnter}
              onMouseLeave={onPreStudentovDesktopLeave}
            >
              <button
                type="button"
                className={`${linkClassDesktop} inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 font-sans outline-none focus-visible:ring-2 focus-visible:ring-black/[0.1] focus-visible:ring-offset-2`}
                aria-expanded={preStudentovDesktopOpen}
                aria-haspopup="true"
                aria-controls="pre-studentov-submenu-desktop"
                id="pre-studentov-trigger-desktop"
                onClick={() => {
                  setPrijimackyDesktopOpen(false);
                  setPreStudentovDesktopOpen((v) => !v);
                }}
              >
                Pre študentov
                <span className="inline-block text-[0.65em] opacity-75" aria-hidden>
                  ▾
                </span>
              </button>
              <div
                id="pre-studentov-submenu-desktop"
                role="region"
                aria-labelledby="pre-studentov-trigger-desktop"
                className={dropdownPanelClass(preStudentovDesktopOpen)}
              >
                <ul className="m-0 min-w-[min(100vw-2rem,20rem)] list-none rounded-2xl border border-black/[0.08] bg-white/[0.97] p-2 py-2.5 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.18)] backdrop-blur-md backdrop-saturate-150 xl:min-w-[22rem]">
                  {preStudentovPages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/pre-studentov/${p.slug}`}
                        data-nav-link
                        className="block rounded-xl px-3 py-2.5 text-left text-[15px] font-normal leading-snug text-brand-fg1 no-underline transition-colors hover:bg-black/[0.05]"
                        onClick={() => setPreStudentovDesktopOpen(false)}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href={navKontakt.href}
              data-nav-link
              className={linkClassDesktop}
            >
              {navKontakt.label}
            </Link>

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
                onClick={() => {
                  setPreStudentovDesktopOpen(false);
                  setPrijimackyDesktopOpen((v) => !v);
                }}
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
                className={dropdownPanelClass(prijimackyDesktopOpen)}
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
              className="btn-secondary-site inline-flex max-w-[min(46vw,11rem)] shrink-0 truncate whitespace-nowrap !py-2.5 !text-[clamp(10px,2.8vw,12px)] !px-[0.55rem] !pb-[0.45rem] sm:!px-3 sm:!text-xs xl:max-w-none xl:!px-[clamp(1.5rem,1.75vw,3.5rem)] xl:!py-[0.7rem] xl:!pb-[0.6rem] xl:!text-[clamp(15px,0.9rem+0.35vw,17px)]"
            >
              Záujem o štúdium
            </Link>
            <button
              type="button"
              className="relative z-10 shrink-0 touch-manipulation rounded-lg p-2 sm:p-2.5 xl:hidden [-webkit-tap-highlight-color:transparent]"
              aria-label="Menu"
              aria-expanded={open}
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu();
              }}
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
          className={`${SHELL} relative z-20 ${bubbleRadius} rounded-t-none border-t border-black/[0.06] bg-white shadow-[0_16px_48px_-20px_rgba(0,0,0,0.1)] transition-colors duration-300 xl:hidden`}
        >
          <nav className="flex flex-col gap-1 py-4" aria-label="Hlavná navigácia">
            {navStart.map((l) => (
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
                className={`${linkClassMobile} flex w-full items-center justify-between text-left font-sans`}
                aria-expanded={preStudentovMobileOpen}
                aria-controls="pre-studentov-submenu-mobile"
                id="pre-studentov-trigger-mobile"
                onClick={() => setPreStudentovMobileOpen((v) => !v)}
              >
                <span>Pre študentov</span>
                <span
                  className={`text-sm opacity-70 transition-transform ${preStudentovMobileOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              {preStudentovMobileOpen ? (
                <ul
                  id="pre-studentov-submenu-mobile"
                  className="m-0 mb-1 list-none border-l-2 border-brand-primary/80 pl-2"
                  role="list"
                >
                  {preStudentovPages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/pre-studentov/${p.slug}`}
                        data-nav-link
                        className={`${linkClassMobile} block pl-2 text-[16px] text-brand-fg1`}
                        onClick={() => {
                          setOpen(false);
                          setPreStudentovMobileOpen(false);
                        }}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <Link
              href={navKontakt.href}
              data-nav-link
              className={linkClassMobile}
              onClick={() => setOpen(false)}
            >
              {navKontakt.label}
            </Link>

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
