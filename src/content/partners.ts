export type PartnerBrand = {
  name: string;
  /** Cesta pod `/public` (napr. `/partners/tatrabanka.png`). */
  logoSrc: string;
  /** Väčšie zobrazenie v páse partnerov. */
  emphasize?: boolean;
  /** O niečo väčšie ako štandard (medzi default a emphasize). */
  medium?: boolean;
  /** Biely podklad za logom (napr. transparentné PNG, ktoré by inak „zaplnilo“ tmavé). */
  lightBackdrop?: boolean;
};

export const partnerBrands: PartnerBrand[] = [
  { name: "Tatra banka", logoSrc: "/partners/tatrabanka.png", emphasize: true },
  { name: "Siemens", logoSrc: "/partners/siemens.png" },
  { name: "O2", logoSrc: "/partners/o2.svg" },
  { name: "Curaprox", logoSrc: "/partners/curaprox.png" },
  { name: "Accace", logoSrc: "/partners/accace.png" },
  { name: "Titans", logoSrc: "/partners/titans.svg", medium: true },
  { name: "Martinus", logoSrc: "/partners/martinus-logo.png" },
  { name: "DXC Technology", logoSrc: "/partners/dxc.jpg" },
  { name: "Made by Vaculik", logoSrc: "/partners/made-by-vaculik.png" },
];
