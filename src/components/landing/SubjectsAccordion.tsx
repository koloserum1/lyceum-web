"use client";

import { useState, type ReactNode } from "react";

type Panel = { id: string; title: string; content: ReactNode };

const panels: Panel[] = [
  {
    id: "special",
    title: "1) To, čo je u nás špeciálne",
    content: (
      <ul className="mt-2 space-y-4 text-[0.95rem] font-normal leading-relaxed">
        <li>
          <strong>Biznis angličtina</strong> (1. roč. 4 h • 2. roč. 2 h) — angličtina,
          ktorú použiješ: prezentácia, e-mail, meeting, pitch.
        </li>
        <li>
          <strong>Student enterprise</strong> (1. roč. 4 h • 2. roč. 4 h) —
          „mini firma“ ako projekt: roly, plán, výstup, prezentácia.
        </li>
        <li>
          <strong>Odborná prax</strong> (3. roč. 4 h • 4. roč. 5 h) — najprv v škole,
          potom v reálnej firme.
        </li>
        <li>
          <strong>Podnikanie a komunikácia</strong> (1. roč. 3 h • 2. roč. 4 h) —
          nápad, dohody v tíme, posun vecí dopredu.
        </li>
      </ul>
    ),
  },
  {
    id: "tech",
    title: "2) Technické jadro",
    content: (
      <ul className="mt-2 space-y-3 text-[0.95rem] font-normal leading-relaxed">
        <li>
          <strong>Aplikovaná informatika</strong> (1. roč. 5 h • 2. roč. 4 h) — IT
          ako nástroj na úlohy a projekty.
        </li>
        <li className="text-brand-fg3">
          Ďalšie technické predmety doplníme podľa finálneho zamerania školy.
        </li>
      </ul>
    ),
  },
  {
    id: "general",
    title: "3) Všeobecný základ",
    content: (
      <ul className="mt-2 space-y-2 text-[0.95rem] font-normal leading-relaxed">
        <li>Slovenský jazyk a literatúra (2 • 4 • 2 • 4 h/týž.)</li>
        <li>Anglický jazyk (3 • 3 • 3 • 3)</li>
        <li>Matematika (4 • 4 • 2 • 2)</li>
        <li>Telesná a športová výchova (2 • 2 • 2 • 2)</li>
        <li>
          Náboženstvo a etika (2 • 2 • 2 • 2) — nie biflenie: reálne situácie,
          hodnoty, rozhodnutia, vzťahy.
        </li>
      </ul>
    ),
  },
  {
    id: "elective",
    title: "4) Voliteľné zameranie (3.–4. ročník)",
    content: (
      <p className="mt-2 text-[0.95rem] font-normal leading-relaxed">
        Service design • User Experience • Business intelligence • Data management •
        Digital marketing • Creative cloud • Y3/Y4 projekt — vyberáš smer podľa
        toho, čo ťa ťahá. Presné hodiny doplníme po finálnom rozvrhu.
      </p>
    ),
  },
  {
    id: "y1",
    title: "1. ročník (spolu 31 h/týždeň)",
    content: (
      <div className="mt-2 grid gap-4 text-[0.95rem] font-normal sm:grid-cols-2">
        <div>
          <p className="m-0 mb-2 font-heading text-base">Základ</p>
          <ul className="m-0 list-disc space-y-1 pl-5">
            <li>SJL 2, ANJ 3, MAT 4, NaE 2, TV 2, triednická 1</li>
          </ul>
        </div>
        <div>
          <p className="m-0 mb-2 font-heading text-base">Špecifické u nás</p>
          <ul className="m-0 list-disc space-y-1 pl-5">
            <li>Aplikovaná informatika 5, Úvod do počítačov 1</li>
            <li>Podnikanie a komunikácia 3, Biznis angličtina 4, Student enterprise 4</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "y2",
    title: "2. ročník (34 h/týždeň)",
    content: (
      <div className="mt-2 grid gap-4 text-[0.95rem] font-normal sm:grid-cols-2">
        <div>
          <p className="m-0 mb-2 font-heading text-base">Základ</p>
          <ul className="m-0 list-disc space-y-1 pl-5">
            <li>SJL 4, ANJ 3, MAT 4, NaE 2, TV 2, triednická 1</li>
            <li>Dejepis a OBN 2, fyzika/chem/bio/geo 1</li>
          </ul>
        </div>
        <div>
          <p className="m-0 mb-2 font-heading text-base">Špecifické u nás</p>
          <ul className="m-0 list-disc space-y-1 pl-5">
            <li>Aplikovaná informatika 4, Úvod do programovania 1</li>
            <li>Podnikanie a komunikácia 4, Biznis angličtina 2, Student enterprise 4</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "y3",
    title: "3. ročník (36 h/týždeň)",
    content: (
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.95rem] font-normal leading-relaxed">
        <li>Základ: SJL 2, ANJ 3, MAT 2, NaE 2, TV 2, triednická 1, Dejepis a OBN 3, prírodovedné predmety 2</li>
        <li>Voliteľné predmety spolu 15 h — vlastné zameranie</li>
        <li>Odborná prax 4 h (reálne firmy)</li>
      </ul>
    ),
  },
  {
    id: "y4",
    title: "4. ročník (35 h/týždeň)",
    content: (
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.95rem] font-normal leading-relaxed">
        <li>Základ: SJL 4, ANJ 3, MAT 2, NaE 2, TV 2, triednická 1</li>
        <li>Voliteľné predmety 14 h — dokončenie zamerania</li>
        <li>Y4 project 2 h, odborná prax 5 h</li>
      </ul>
    ),
  },
];

export function SubjectsAccordion() {
  const [open, setOpen] = useState<string | null>("special");

  return (
    <div className="space-y-2">
      {panels.map((p) => {
        const isOpen = open === p.id;
        return (
          <div
            key={p.id}
            className="overflow-hidden rounded-[16px] border border-black/8 bg-brand-bg1"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : p.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-[1.05rem] text-brand-fg1 transition-colors hover:bg-brand-bg2"
              aria-expanded={isOpen}
            >
              {p.title}
              <span
                className="text-brand-primary transition-transform shrink-0"
                style={{ transform: isOpen ? "rotate(180deg)" : undefined }}
              >
                ▼
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-black/8 px-5 py-4 text-brand-fg1">
                {p.content}
              </div>
            ) : null}
          </div>
        );
      })}
      <p className="mt-5 text-xs text-brand-fg3">
        Ďalšie predmety podľa ročníka · NaE = rozhovory a situácie, nie bifľovanie ·
        detaily na DOD.
      </p>
    </div>
  );
}
