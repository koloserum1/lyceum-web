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

  const spanClass = lg
    ? "inline-flex h-14 max-w-[240px] shrink-0 items-center justify-center opacity-90 transition hover:opacity-100 sm:h-16 sm:max-w-[300px]"
    : md
      ? "inline-flex h-11 max-w-[190px] shrink-0 items-center justify-center opacity-90 transition hover:opacity-100 sm:h-12 sm:max-w-[220px]"
      : "inline-flex h-10 max-w-[160px] shrink-0 items-center justify-center opacity-90 transition hover:opacity-100";

  const imgClass = lg
    ? "h-14 w-auto max-w-[240px] object-contain object-center sm:h-16 sm:max-w-[300px]"
    : md
      ? "h-11 w-auto max-w-[190px] object-contain object-center sm:h-12 sm:max-w-[220px]"
      : "h-10 w-auto max-w-[160px] object-contain object-center";

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
      <div className="flex w-max max-w-none flex-nowrap items-center gap-x-9 pr-4 md:mx-auto md:w-full md:max-w-full md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-5 md:pr-0 lg:gap-x-12">
        {partners.map((p) => (
          <LogoItem key={p.name} p={p} />
        ))}
      </div>
    </div>
  );
}
