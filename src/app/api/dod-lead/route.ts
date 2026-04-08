import { NextResponse } from "next/server";

import { getSanityWriteClient } from "@/sanity/writeClient";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ALLOWED_SOURCES = new Set(["dod-popup", "prijimacky-popup"]);

export async function POST(req: Request) {
  let body: { email?: string; website?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Neplatný JSON." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Zadaj platný e-mail." }, { status: 400 });
  }

  const rawSource =
    typeof body.source === "string" ? body.source.trim() : "dod-popup";
  const source = ALLOWED_SOURCES.has(rawSource) ? rawSource : "dod-popup";

  const write = getSanityWriteClient();
  if (write) {
    try {
      await write.create({
        _type: "dodLead",
        email,
        source,
      });
    } catch (e) {
      console.error("[dod-lead] Sanity create failed:", e);
      return NextResponse.json(
        { ok: false, error: "Nepodarilo sa uložiť. Skús neskôr." },
        { status: 500 },
      );
    }
  } else {
    console.warn(
      "[dod-lead] SANITY_API_WRITE_TOKEN nie je nastavený: lead sa neuloží do Sanity.",
    );
  }

  return NextResponse.json({ ok: true, stored: Boolean(write) });
}
