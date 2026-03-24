export type PartnerBrand = {
  name: string;
  /** Cesta pod `/public` (napr. `/partners/tatrabanka.png`). */
  logoSrc: string;
  /** Väčšie zobrazenie v páse partnerov. */
  emphasize?: boolean;
};

export const partnerBrands: PartnerBrand[] = [
  { name: "Tatra banka", logoSrc: "/partners/tatrabanka.png", emphasize: true },
  { name: "Siemens", logoSrc: "/partners/siemens.png" },
  { name: "O2", logoSrc: "/partners/o2.svg" },
  { name: "Curaprox", logoSrc: "/partners/curaprox.png" },
  { name: "Accace", logoSrc: "/partners/accace.png" },
  { name: "Titans", logoSrc: "/partners/titans.svg" },
];
