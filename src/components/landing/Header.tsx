"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#domov", label: "Domov" },
  { href: "#o-skole", label: "O škole" },
  { href: "#studium", label: "Štúdium" },
  { href: "#otestuj-sa", label: "Otestuj sa" },
  { href: "#skolsky-poriadok", label: "Školský poriadok" },
  { href: "#pridaj-sa", label: "Do tímu" },
  { href: "#prijimacky", label: "Prijímačky" },
] as const;

const SHELL = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bubbleRadius = "rounded-[24px]";
  const bubbleBase =
    "overflow-hidden bg-brand-bg2/95 ring-1 ring-black/[0.04] backdrop-blur-md transition-[box-shadow,background-color] duration-200";

  return (
    <header className="site-header sticky top-0 z-50 w-full pt-2 sm:pt-3">
      <div
        className={`${SHELL} ${bubbleBase} ${bubbleRadius} ${
          open ? "rounded-b-none lg:rounded-b-[24px]" : ""
        } ${
          scrolled
            ? "shadow-[0_8px_32px_-8px_rgba(27,22,36,0.12)]"
            : "shadow-[0_1px_0_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 py-[clamp(1rem,3vw,1.35rem)] lg:flex-nowrap">
          <Link
            href="/#domov"
            className="relative block shrink-0 leading-none no-underline"
          >
            <Image
              src="/logo.svg"
              alt="Lýceum C. S. Lewisa"
              width={300}
              height={80}
              className="h-11 w-auto max-w-[min(320px,82vw)] object-contain object-left sm:h-12 lg:h-14"
              unoptimized
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-nav-link
                className="whitespace-nowrap text-[clamp(15px,0.9rem+0.35vw,17px)] text-brand-fg1 no-underline decoration-2 underline-offset-4 hover:underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#zaujemca"
              className="btn-secondary-site hidden !py-2.5 text-[clamp(15px,0.9rem+0.35vw,17px)] md:inline-flex"
            >
              Záujem o štúdium
            </a>
            <button
              type="button"
              className="rounded-lg p-2 lg:hidden"
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
          className={`${SHELL} ${bubbleRadius} rounded-t-none border-t border-black/8 bg-brand-bg2/98 shadow-[0_8px_32px_-8px_rgba(27,22,36,0.1)] backdrop-blur-md lg:hidden`}
        >
          <nav className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-nav-link
                className="rounded-lg px-3 py-2.5 text-[17px] text-brand-fg1 no-underline hover:bg-black/[0.04]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#zaujemca"
              className="btn-secondary-site mt-3 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Záujem o štúdium
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
