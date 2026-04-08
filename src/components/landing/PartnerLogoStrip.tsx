"use client";

import type { CSSProperties } from "react";
import { memo, useEffect, useRef, useState } from "react";
import type { PartnerBrand } from "@/content/partners";

/** Jednotná výška loga (mobile trochu menšie, nie „mini“). */
const SLOT =
  "inline-flex h-10 w-[128px] shrink-0 items-center justify-center sm:h-11 sm:w-[148px] md:h-12 md:w-[168px]";

const IMG =
  "h-8 w-auto max-h-8 max-w-[118px] object-contain object-center sm:h-10 sm:max-h-10 sm:max-w-[136px] md:h-11 md:max-h-11 md:max-w-[152px]";

const IMG_W = 200;
const IMG_H = 48;

/** Natívne img: menej režijných nákladov ako next/image pri 2× opakovaní v marquee. */
const LogoItem = memo(function LogoItem({ p }: { p: PartnerBrand }) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element -- statické logá z /public, viac kópií v animácii
    <img
      src={p.logoSrc}
      alt=""
      width={IMG_W}
      height={IMG_H}
      className={IMG}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );

  return (
    <span className={SLOT}>
      {p.lightBackdrop ? (
        <span className="inline-flex max-h-full max-w-full items-center justify-center rounded-lg bg-white px-2 py-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/[0.06] sm:px-2.5 sm:py-2">
          {img}
        </span>
      ) : (
        img
      )}
    </span>
  );
});

export function PartnerLogoStrip({ partners }: { partners: PartnerBrand[] }) {
  const listLabel = partners.map((p) => p.name).join(", ");
  const durationSec = Math.max(36, Math.round(partners.length * 3.5));

  const marqueeStyle = {
    "--partner-marquee-duration": `${durationSec}s`,
  } as CSSProperties;

  const wrapRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(true);
  const [marqueeActive, setMarqueeActive] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const sync = () => {
      setMarqueeActive(!document.hidden && inViewRef.current);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        inViewRef.current = e.isIntersecting;
        sync();
      },
      { threshold: 0, rootMargin: "80px" },
    );

    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <>
      <p className="sr-only">Partneri a spolupráce: {listLabel}</p>
      <div
        ref={wrapRef}
        className={`partner-marquee-wrap -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8${marqueeActive ? "" : " is-marquee-paused"}`}
        style={marqueeStyle}
      >
        <div
          className="partner-marquee-track flex w-max min-w-0 flex-nowrap items-center gap-x-8 py-2 sm:gap-x-10 md:gap-x-12"
          aria-hidden
        >
          {partners.map((p) => (
            <LogoItem key={`m1-${p.name}`} p={p} />
          ))}
          {partners.map((p) => (
            <LogoItem key={`m2-${p.name}`} p={p} />
          ))}
        </div>
      </div>
    </>
  );
}
