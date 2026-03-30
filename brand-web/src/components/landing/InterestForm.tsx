"use client";

import { useState } from "react";

export function InterestForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mx-auto max-w-lg space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label htmlFor="int-name" className="mb-1 block text-sm font-bold">
          Meno a priezvisko
        </label>
        <input
          id="int-name"
          name="name"
          required
          className="w-full rounded-lg border border-[#686e77] bg-white px-4 py-3 text-base outline-none ring-brand-primary focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="int-mail" className="mb-1 block text-sm font-bold">
          E-mail
        </label>
        <input
          id="int-mail"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-[#686e77] bg-white px-4 py-3 text-base outline-none ring-brand-primary focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="int-msg" className="mb-1 block text-sm font-bold">
          Správa (voliteľné)
        </label>
        <textarea
          id="int-msg"
          name="message"
          rows={4}
          className="w-full resize-y rounded-lg border border-[#686e77] bg-white px-4 py-3 text-base outline-none ring-brand-primary focus:ring-2"
          placeholder="Napr. ktorý ročník, otázky k prijímačkám…"
        />
      </div>
      <button type="submit" className="btn-primary-site w-full justify-center py-3">
        Odoslať
      </button>
      {sent ? (
        <p className="m-0 text-center text-sm font-bold text-brand-primary">
          Ďakujeme — demo formulár (backend ešte nepripojený).
        </p>
      ) : null}
    </form>
  );
}
