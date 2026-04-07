"use client";

import type { PortableTextBlock } from "@portabletext/types";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { PortableText } from "@portabletext/react";

import type { PrijimackyPopupPayload } from "@/lib/prijimacky-popup";

type Props = {
  data: PrijimackyPopupPayload;
};

function formatDateSk(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("sk-SK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

function formatTimeSk(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("sk-SK", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export function PrijimackyPopup({ data }: Props) {
  const [open, setOpen] = useState(true);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const emailFieldId = useId();
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    lastFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("button, [href], input")?.focus();
    }, 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!data) return null;

  const {
    title,
    deadlineLabel,
    deadlineAt,
    body,
    ctaHint,
    emailLabel,
    submitLabel,
    successMessage,
  } = data;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const website = String(fd.get("website") ?? "");
    if (website) return;
    setBusy(true);
    try {
      const res = await fetch("/api/dod-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          website,
          source: "prijimacky-popup",
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Odoslanie zlyhalo.");
        return;
      }
      setSent(true);
    } catch {
      setError("Sieťová chyba. Skús znova.");
    } finally {
      setBusy(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[102] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        aria-label="Zavrieť"
        onClick={close}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[103] w-full max-w-lg rounded-[24px] border border-black/[0.08] bg-white p-6 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.25)] sm:p-8"
      >
        <button
          type="button"
          className="absolute right-3 top-3 rounded-lg p-2 text-brand-fg3 hover:bg-black/[0.05] hover:text-brand-fg1"
          onClick={close}
          aria-label="Zavrieť popup"
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>

        <h2
          id={titleId}
          className="font-heading pr-8 text-[clamp(1.25rem,1rem+1.2vw,1.65rem)] font-bold leading-tight tracking-tight text-brand-fg1"
        >
          {title}
        </h2>

        {deadlineAt ? (
          <div className="mt-4 space-y-1 text-[15px] leading-relaxed text-brand-fg1 sm:text-[16px]">
            {deadlineLabel ? (
              <p className="m-0 text-sm leading-relaxed text-brand-fg3">{deadlineLabel}</p>
            ) : null}
            <p className="m-0 font-heading text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-bold leading-tight text-brand-fg1">
              {formatDateSk(deadlineAt)}
              {formatTimeSk(deadlineAt) ? (
                <span className="font-sans font-normal text-brand-fg3">
                  {" "}
                  · {formatTimeSk(deadlineAt)}
                </span>
              ) : null}
            </p>
          </div>
        ) : null}

        {body && body.length > 0 ? (
          <div className="mt-4 max-w-none text-[15px] leading-relaxed text-brand-fg1 sm:text-[16px] [&_a]:text-brand-primary [&_a]:underline [&_p]:m-0 [&_p+p]:mt-3">
            <PortableText value={body as PortableTextBlock[]} />
          </div>
        ) : null}

        {sent ? (
          <p className="mb-0 mt-6 text-center text-sm font-semibold text-brand-primary">
            {successMessage ?? "Ďakujeme, ozveme sa."}
          </p>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
            {ctaHint ? (
              <p className="m-0 text-sm leading-relaxed text-brand-fg3">{ctaHint}</p>
            ) : null}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
            <div>
              <label htmlFor={emailFieldId} className="sr-only">
                {emailLabel?.trim() || "E-mail"}
              </label>
              <input
                id={emailFieldId}
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-[#686e77] bg-white px-4 py-3 text-base outline-none ring-brand-primary focus:ring-2"
              />
            </div>
            {error ? (
              <p className="m-0 text-sm font-medium text-red-700" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={busy}
              className="btn-primary-site w-full justify-center py-3 disabled:opacity-60"
            >
              {busy ? "Odosielam…" : submitLabel ?? "Odoslať"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
