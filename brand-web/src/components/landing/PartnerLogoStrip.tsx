"use client";

import Image from "next/image";
import type { PartnerBrand } from "@/content/partners";

const LOGO_W = 160;
const LOGO_H = 40;
const LOGO_MD_W = 200;
const LOGO_MD_H = 50;
const LOGO_LG_W = 300;
const LOGO_LG_H = 72;

function LogoItem({ p }: { p: PartnerBrand }) {
  const lg = p.emphasize === true;
  const md = p.medium === true && !lg;
  const svg = p.logoSrc.endsWith(".svg");

  /** Na mobile menšie logá + užší riadok, aby sa zmestili vedľa seba. */
  const spanClass = lg
    ? "inline-flex h-8 max-w-[min(26vw,104px)] shrink-0 items-center justify-center opacity-90 transition hover:opacity-100 sm:h-12 sm:max-w-[200px] md:h-14 md:max-w-[240px] lg:h-16 lg:max-w-[300px]"
    : md
      ? "inline-flex h-7 max-w-[min(22vw,88px)] shrink-0 items-center justify-center opacity-90 transition hover:opacity-100 sm:h-10 sm:max-w-[180px] md:h-12 md:max-w-[220px]"
      : "inline-flex h-6 max-w-[min(18vw,72px)] shrink-0 items-center justify-center opacity-90 transition hover:opacity-100 sm:h-9 sm:max-w-[140px] md:h-10 md:max-w-[160px]";

  const imgClass = lg
    ? "h-8 w-auto max-w-[min(26vw,104px)] object-contain object-center sm:h-12 sm:max-w-[200px] md:h-14 md:max-w-[240px] lg:h-16 lg:max-w-[300px]"
    : md
      ? "h-7 w-auto max-w-[min(22vw,88px)] object-contain object-center sm:h-10 sm:max-w-[180px] md:h-11 md:max-w-[220px]"
      : "h-6 w-auto max-w-[min(18vw,72px)] object-contain object-center sm:h-9 sm:max-w-[140px] md:h-10 md:max-w-[160px]";

  const width = lg ? LOGO_LG_W : md ? LOGO_MD_W : LOGO_W;
  const height = lg ? LOGO_LG_H : md ? LOGO_MD_H : LOGO_H;

  return (
    <span className={spanClass}>
      <Image
        src={p.logoSrc}
        alt={p.name}
        width={width}
        height={height}
        className={imgClass}
        unoptimized={svg}
      />
    </span>
  );
}

export function PartnerLogoStrip({ partners }: { partners: PartnerBrand[] }) {
  return (
    <div className="no-scrollbar w-full overflow-x-auto overflow-y-hidden overscroll-x-contain md:overflow-visible">
      <div className="flex w-max max-w-[100vw] flex-nowrap items-center justify-center gap-x-1.5 px-1 sm:gap-x-4 sm:px-2 md:mx-auto md:w-full md:max-w-full md:flex-wrap md:gap-x-10 md:gap-y-5 md:px-0 lg:gap-x-12">
        {partners.map((p) => (
          <LogoItem key={p.name} p={p} />
        ))}
      </div>
    </div>
  );
}
