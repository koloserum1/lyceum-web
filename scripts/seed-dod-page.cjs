/**
 * Naplní / aktualizuje dokument `dodPage` v Sanity (odporúčaný text pre DOD podstránku).
 *
 * Spustenie z koreňa projektu (potrebný SANITY_API_WRITE_TOKEN v .env.local):
 *   npm run seed:dod
 */

const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");

function loadEnvLocal() {
  const envPath = path.join(__dirname, "..", ".env.local");
  try {
    const raw = fs.readFileSync(envPath, "utf8");
    for (const line of raw.split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const eq = t.indexOf("=");
      if (eq === -1) continue;
      const key = t.slice(0, eq).trim();
      let val = t.slice(eq + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = val;
    }
  } catch {
    /* ignore */
  }
}

loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "iw5edpoc";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const doc = {
  _id: "dodPage",
  _type: "dodPage",
  title: "Deň otvorených dverí",
  body: [
    {
      _type: "block",
      _key: "p1",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "p1s",
          marks: [],
          text:
            "Deň otvorených dverí je chvíľa, keď si môžeš pozrieť školu v pohybe: učebne, projekty a ľudí, ktorí ťa budú sprevádzať štúdiom. Pripravíme prehliadku, čas na otázky a stručné informácie o prihlásení.",
        },
      ],
    },
    {
      _type: "block",
      _key: "h2a",
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "h2as",
          marks: [],
          text: "Kedy ďalší termín?",
        },
      ],
    },
    {
      _type: "block",
      _key: "p2",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "p2s",
          marks: [],
          text:
            "Termín a miesto zverejníme na webe vždy, keď je DOD dopredu naplánovaný. Ak zrovna žiadny neprebieha, sleduj aktualizácie: o novom termíne ťa necháme včas vedieť.",
        },
      ],
    },
    {
      _type: "block",
      _key: "h2b",
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "h2bs",
          marks: [],
          text: "Čo ťa čaká",
        },
      ],
    },
    {
      _type: "block",
      _key: "li1",
      style: "normal",
      listItem: "bullet",
      level: 1,
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "li1s",
          marks: [],
          text: "prehliadka priestorov a ukážky výučby,",
        },
      ],
    },
    {
      _type: "block",
      _key: "li2",
      style: "normal",
      listItem: "bullet",
      level: 1,
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "li2s",
          marks: [],
          text: "stretnutie s učiteľmi a študentmi,",
        },
      ],
    },
    {
      _type: "block",
      _key: "li3",
      style: "normal",
      listItem: "bullet",
      level: 1,
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "li3s",
          marks: [],
          text: "informácie o prijímacích skúškach a študijných programoch.",
        },
      ],
    },
    {
      _type: "block",
      _key: "p3",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "p3s",
          marks: [],
          text:
            "Viac o prihlásení nájdeš v sekcii Prijímačky; na konkrétne otázky ti radi odpovieme cez kontakt.",
        },
      ],
    },
  ],
};

async function main() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    console.error(
      "Chýba SANITY_API_WRITE_TOKEN (pridaj do .env.local alebo exportuj v shelli).",
    );
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    token,
    useCdn: false,
  });

  await client.createOrReplace(doc);
  console.log("OK: dokument dodPage bol uložený v datasete „%s“.", dataset);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
