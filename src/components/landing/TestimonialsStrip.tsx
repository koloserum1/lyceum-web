"use client";

import { useState } from "react";
import type { Testimonial } from "@/content/lyceum";

/** Kompaktný pás: horizontálny scroll, krátke citáty, modal na celý text */
export function TestimonialsStrip({ items }: { items: Testimonial[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = items.find((x) => x.id === openId);

  return (
    <>
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar snap-x snap-mandatory md:gap-4">
          {items.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setOpenId(t.id)}
              className="snap-start text-left w-[min(100%,280px)] shrink-0 rounded-2xl border border-black/[0.06] bg-brand-bg2/80 p-4 transition hover:border-brand-primary/40 hover:bg-brand-bg2"
            >
              <p className="m-0 line-clamp-3 text-[13px] font-normal leading-snug text-brand-fg1">
                „{t.excerpt}”
              </p>
              <p className="mt-3 mb-0 text-[10px] font-bold uppercase tracking-wider text-brand-fg4">
                {t.company}
              </p>
            </button>
          ))}
        </div>
        <p className="mt-3 mb-0 text-center text-[11px] text-brand-fg4 md:text-left">
          Potiahni ↔ pre ďalšie · klikni na kartu pre celý text
        </p>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-4 sm:items-center"
          role="dialog"
          aria-modal
          aria-labelledby="testimonial-dialog-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Zavrieť"
            onClick={() => setOpenId(null)}
          />
          <div className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-brand-bg1 p-6 shadow-2xl">
            <h3
              id="testimonial-dialog-title"
              className="font-heading m-0 text-lg text-brand-fg1"
            >
              {active.company}
            </h3>
            <p className="mt-4 mb-0 text-[0.95rem] font-normal leading-relaxed text-brand-fg1">
              {active.quote}
            </p>
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="btn-primary-site mt-6 w-full justify-center"
            >
              Zavrieť
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
