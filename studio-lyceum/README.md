# Lyceum — Sanity Studio

Projekt: `iw5edpoc` · dataset: `production` (clean + TypeScript).

## Prvé spustenie

1. Prihlásenie do Sanity CLI (na **tvojom** počítači, v tomto priečinku):

   ```bash
   cd studio-lyceum
   npx sanity login
   ```

2. Inštalácia závislostí a dev server:

   ```bash
   npm install
   npm run dev
   ```

3. Otvor [http://localhost:3333](http://localhost:3333) a prihlás sa rovnakým účtom (Google / GitHub / e-mail) ako pri CLI.

---

**Poznámka:** Príkaz `npm create sanity@latest -- ...` v CI nefunguje bez predchádzajúceho `sanity login`. Tento priečinok je ekvivalentný „clean“ šablóny s priradeným projektom.

## Schéma Post + Vision (GROQ)

- Dokumentový typ **Post** je v `schemaTypes/postType.ts` (title, slug, publishedAt, image, body).
- V hornej lište Studio je okrem **Structure** aj nástroj **Vision** — tam môžeš skúšať GROQ, napr.  
  `*[_type == "post"]{ _id, title }`

## DOD popup (deň otvorených dverí)

1. V Studio otvor **DOD popup** (jedinečný dokument `dodPopup`).
2. Zapni **Zobraziť popup na webe**, vyplň **Nadpis** a voliteľne **Text** (Portable Text).
3. Voliteľné polia: text nad e-mailom, popisky, správa po odoslaní.
4. Na webe sa po načítaní zobrazí modal s formulárom (e-mail → „ozveme sa“).

**Uloženie e-mailov zo stránky:** v root projekte Lyceum-web nastav premennú **`SANITY_API_WRITE_TOKEN`** (token z [sanity.io/manage](https://www.sanity.io/manage) → API → token s právom vytvárať dokumenty). Odoslané adresy pribúdajú ako dokumenty typu **DOD – záujem (e-mail)** (`dodLead`). Bez tokenu API stále vráti úspech používateľovi, ale záznam sa neuloží (v logu servera je upozornenie).

## Next.js (hlavný web)

- Zoznam a detail postov sú na **`/posts`** a **`/posts/[slug]`** (úvodná stránka zostala nedotknutá).
- Klient: `src/sanity/client.ts` (projekt `iw5edpoc`, dataset `production`).
- DOD popup: `src/components/dod/DodPopup.tsx`, dáta z GROQ v `src/lib/dod-popup.ts`, odoslanie `POST /api/dod-lead`.

## Deploy Studio

```bash
npm run deploy
```

Potom môžeš pozvať spolupracovníkov v [sanity.io/manage](https://www.sanity.io/manage).
