"use client";

import { useId, useState } from "react";

/**
 * Obsah 2 % z dane — stránka /dva-percenta.
 * Údaje + výber spôsobu príspevku + stabilný box 3 %.
 */

const box =
  "rounded-2xl bg-brand-bg2/70 p-6 ring-1 ring-black/[0.07] md:p-8 lg:p-9";

const boxTitle =
  "font-heading m-0 text-[clamp(1.35rem,1.05rem+1.6vw,2rem)] font-bold leading-[1.15] tracking-tight text-brand-fg1 md:text-[clamp(1.45rem,1.1rem+1.8vw,2.15rem)]";

const body =
  "mt-5 space-y-3 text-[13px] font-normal leading-relaxed text-brand-fg1 md:mt-6 md:text-sm";

type ContributorKind = "" | "zamestnanec" | "fyzicka" | "pravnicka";

const SELECT_OPTIONS: { value: ContributorKind; label: string }[] = [
  { value: "", label: "— Vyberte možnosť —" },
  { value: "zamestnanec", label: "Zamestnanec" },
  { value: "fyzicka", label: "Fyzická osoba (podáva daňové priznanie)" },
  { value: "pravnicka", label: "Právnická osoba" },
];

export function TwoPercentSection() {
  const [kind, setKind] = useState<ContributorKind>("");
  const selectId = useId();
  const labelId = useId();

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <section
        id="udaje-2-percenta"
        aria-labelledby="two-pct-udaje-heading"
        className={`${box} scroll-mt-28 md:scroll-mt-32`}
      >
        <h2 id="two-pct-udaje-heading" className={boxTitle}>
          Údaje, ktoré budete potrebovať
        </h2>
        <ul className="m-0 mt-5 list-none space-y-2.5 p-0 text-[13px] font-normal leading-relaxed text-brand-fg1 md:mt-6 md:text-sm">
          <li>
            <span className="font-semibold text-brand-fg1">IČO:</span> 52151492
          </li>
          <li>
            <span className="font-semibold text-brand-fg1">Obchodné meno:</span>{" "}
            OZ Planéta
          </li>
          <li>
            <span className="font-semibold text-brand-fg1">Právna forma:</span>{" "}
            Občianske združenie
          </li>
          <li>
            <span className="font-semibold text-brand-fg1">Sídlo:</span>{" "}
            Prievozská 1316/10, 821 09 Bratislava-Ružinov
          </li>
        </ul>
      </section>

      <section
        aria-labelledby={labelId}
        className={box}
        id="postup-prispievam"
      >
        <h2 id={labelId} className={boxTitle}>
          Prispievam ako…
        </h2>
        <p className="m-0 mt-3 max-w-2xl text-[13px] leading-relaxed text-brand-fg3 md:text-sm">
          Vyberte svoju situáciu — zobrazí sa vám stručný postup, čo a kedy
          vyplniť.
        </p>

        <div className="mt-5 md:mt-6">
          <label
            htmlFor={selectId}
            className="sr-only"
          >
            Prispievam ako
          </label>
          <select
            id={selectId}
            value={kind}
            onChange={(e) =>
              setKind(e.target.value as ContributorKind)
            }
            className="w-full max-w-xl cursor-pointer rounded-xl border border-black/[0.12] bg-white py-3.5 pl-4 pr-4 text-[15px] font-medium text-brand-fg1 shadow-sm ring-1 ring-black/[0.04] transition focus:border-[#fdb913] focus:outline-none focus:ring-2 focus:ring-[#fdb913]/35 md:text-base"
          >
            {SELECT_OPTIONS.map((o) => (
              <option key={o.value || "empty"} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div
          className="mt-6 min-h-[4rem] rounded-xl border border-dashed border-black/[0.08] bg-brand-bg1/80 p-5 md:mt-8 md:p-6"
          role="region"
          aria-live="polite"
          aria-label="Postup podľa výberu"
        >
          {kind === "" ? (
            <p className="m-0 text-[13px] leading-relaxed text-brand-fg3 md:text-sm">
              Z rozbaľovacieho zoznamu vyberte, či prispievate ako zamestnanec,
              fyzická osoba s daňovým priznaním alebo právnická osoba.
            </p>
          ) : null}

          {kind === "zamestnanec" ? (
            <div className={body}>
              <h3 className="m-0 text-base font-bold text-brand-fg1 md:text-lg">
                Zamestnanec
              </h3>
              <p className="m-0">
                Do 15. februára 2026 požiadajte zamestnávateľa o vykonanie ročného
                zúčtovania preddavkov na daň a o vystavenie Potvrdenia o zaplatení
                dane z príjmov zo závislej činnosti.
              </p>
              <p className="m-0">
                Vyplňte tlačivo Vyhlásenie o poukázaní podielu zaplatenej dane.
                Prosíme, zaškrtnite vo vyhlásení súhlas so zaslaním Vašich údajov,
                aby sme sa Vám mohli poďakovať (daňový úrad nám posiela mená a
                adresy bez súm).
              </p>
              <p className="m-0">
                Do 30. apríla 2026 doručte obe tlačivá na daňový úrad podľa Vášho
                bydliska.
              </p>
            </div>
          ) : null}

          {kind === "fyzicka" ? (
            <div className={body}>
              <h3 className="m-0 text-base font-bold text-brand-fg1 md:text-lg">
                Fyzická osoba (podáva daňové priznanie)
              </h3>
              <p className="m-0">
                V daňovom priznaní pre fyzické osoby vyplňte kolónky na poukázanie
                2 % z dane.
              </p>
              <p className="m-0">
                Daňové priznanie za zdaňovacie obdobie roku 2024 je potrebné podať
                do 31. marca 2026 (resp. v predĺženej lehote do 30. 06. 2026 alebo
                30. 09. 2026).
              </p>
            </div>
          ) : null}

          {kind === "pravnicka" ? (
            <div className={body}>
              <h3 className="m-0 text-base font-bold text-brand-fg1 md:text-lg">
                Právnická osoba
              </h3>
              <p className="m-0">
                V daňovom priznaní pre právnické osoby vyplňte kolónky na
                poukázanie 2 % z dane.
              </p>
              <p className="m-0">
                Lehota na podanie daňového priznania za zdaňovacie obdobie roka 2024
                je do 31. marca 2026 (resp. v predĺženej lehote do 30. 06. 2026
                alebo 30. 09. 2026).
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="two-pct-tri-heading" className={box}>
        <h2 id="two-pct-tri-heading" className={boxTitle}>
          Poukázanie 3 %
        </h2>
        <p className="m-0 mt-5 text-[13px] font-normal leading-relaxed text-brand-fg1 md:mt-6 md:text-sm">
          Ak fyzická osoba alebo zamestnanec vykonával/a v kalendárnom roku 2024
          dobrovoľnícku činnosť pre neziskovú organizáciu (ľubovoľnú) aspoň 40
          hodín, môže poukázať až 3 %. Nezisková organizácia k tomu vydá
          Potvrdenie o výkone dobrovoľníckej činnosti, ktoré sa prikladá k
          vyhláseniu alebo k daňovému priznaniu.
        </p>
      </section>
    </div>
  );
}
