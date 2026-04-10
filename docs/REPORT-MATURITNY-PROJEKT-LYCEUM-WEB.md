# Vonku ako vnútri: redizajn webu a vonkajšej komunikácie Lýcea

**Autori:** Matej Hrica, Hanka Fialová  
**Škola:** SOŠ Lýceum C. S. Lewisa  
**Školský rok:** 2025/2026  
**Konzultanti:** Calder (vizuál a identita), PS:Digital (odborná stáž)

---

**Finálny layout na tlač A4 / PDF:** otvorte [`docs/report-full.html`](report-full.html) → **Tlač** → **Uložiť ako PDF** → **A4**. Štruktúra zodpovedá rubrike Y4P: titulka → **Úvod** (0,5 str.) → **samostatná strana Obsah** (Table of contents) → ďalšie sekcie s rozsahmi. Obrázky vložte namiesto šedých rámov (`div.figure`).

Samostatná titulka: [`docs/report-titulka.html`](report-titulka.html) (iba názov + mená), ak ju chcete oddeliť podľa Y4P.

**Pätička** na vnútorných stranách reportu: vľavo `SOŠ Lýceum C. S. Lewisa`, vpravo `12.4.2026` — je už v `report-full.html`.

---

## Obsah

1. [Úvod: kontext projektu](#úvod-kontext-projektu)  
2. [Analýza problému](#analýza-problému)  
3. [Návrh riešenia](#návrh-riešenia)  
4. [MVP do decembra](#mvp-do-decembra)  
5. [Druhá iterácia MVP do marca](#druhá-iterácia-mvp-do-marca)  
6. [Výsledky projektu](#výsledky-projektu)  
7. [Záver](#záver)  
8. [Zdroje](#zdroje)

---

## Úvod: kontext projektu

Prvý kontakt s Lýceom často nie je brána, ale obrazovka. Chceli sme, aby ten prvý dojem zodpovedal tomu, čo ľudia o škole vedia z praxe, z hodín a z komunity — nie aby web pôsobil ako starší, roztrúsený alebo generický kus internetu. Projekt spája **obsah**, **vizuálnu identitu** a **technickú platformu** do jedného celku, ktorý škola vie sama udržiavať.¹

**Čo presne staviame.** Stručne: uchádzač alebo rodič má v priebehu pár sekúnd pochopiť, čo Lýceum ponúka, čím sa líši a kde nájde štúdium, prijímačky, podmienky a kontakt — bez blúdenia.

**Prečo sme si vybrali túto tému.** Matej ťahá vývoj a infraštruktúru (Next.js, CMS, nasadenie), Hanka texty, vizuál a prácu s obrazom. Spolu vieme prejsť od výskumu v komunite až po funkčný web; téma nie je cvičná — škola reálne potrebuje dôveryhodnú prezentáciu medzi konkurenciou stredných škôl.⁴

**Kto čo robí.** Projekt je školský, nie zákazka pre agentúru. Calder a PS:Digital sú konzultanti; rozhodnutia a výstupy držíme my so školou. Matej: architektúra webu, Sanity, GitHub, Netlify, špecifikácia. Hanka: copy, layout stránok, fotografie, mockupy, identita. Spoločne: dotazník, analýza, podklady pre vedenie, iterácie podľa spätnej väzby.

---

## Analýza problému

Lýceum je vnímané ako škola s praxou, technológiami a projektmi. Vonkajšia komunikácia — web a vizuál — ten obraz ešte nestihla držať pokope: časť materiálov pôsobí staršie alebo univerzálne, identita sa ešte stabilizuje. Keď hodnoty nie sú na webe čitateľné, škola môže pôsobiť slabšie, než naozaj je.²

**Výskum.** Na širšiu vzorku a porovnateľné odpovede sme zvolili kvantitatívny dotazník (Google Forms). Distribúcia cez školský Google Chat a e-mail rodičom; aktívny zber dva týždne, potom mesiac pasívne. Zapojilo sa **205 respondentov** (študenti, učitelia, rodičia).³

---

**Obrázok 1 — Respondenti podľa ročníka**  
*(sem graf alebo tabuľka; odporúčaná výška cca 6–8 cm v dokumente)*

Najviac odpovedí bolo medzi prváčmi, najmenej medzi tretiakmi — pri otvorených odpovediach berieme do úvahy, že nejde o rovnomerné zastúpenie ročníkov.

---

**Obrázok 2 — Otázka: „Vystihuje vizuálna identita to, akí naozaj ste?“ (1–5)**  
*(stĺpcový alebo koláčový graf)*

Väčšina dala **3 alebo 4**, málo ľudí **5**. Identita je znášaná, nie silná — zmysel zmeny je zosúladiť vonkajší obraz so skúsenosťou zo školy.

---

**Obrázok 3 — Ako často navštevujete web Lýcea?**  
*(frekvencia)*

Web väčšina nepoužíva ako bežný kanál. Nový web musí fungovať pri **prvom** kontakte; škola zároveň musí ľudí na web **aktívne posielať** (hodiny, rodičia, nástenky).

---

Z otvorených odpovedí sa opakovali motívy **podnikania a biznisu**, **praxe**, **digitalizácie a programovania**, **tímnej práce**; zároveň **komunita**, **bezpečné prostredie**, **kreativita**. Škola je vnímaná ako technologicko-praktická aj ako ľudsky podporná — oba pásy treba na webe čítať naraz.

---

**Obrázok 4 — Benchmark škola A**  
*(screenshot; napr. prehľadná sekcia prijímačiek)*

**Obrázok 5 — Benchmark škola B**  
*(screenshot; napr. silný vizuál alebo fotografie)*

Bereme si jasnú navigáciu a viditeľné termíny; nechceme generickú šablónu bez väzby na skutočnú komunitu Lýcea.

---

## Návrh riešenia

Navrhujeme **nový web**: texty z výskumu, nový vizuál (mockupy, typografia, farby, komponenty) a stack, ktorý škole umožní **upravovať obsah v CMS** bez programátora pri každej zmene. Technicky: **Next.js**, headless **Sanity**, kód na **GitHub**, nasadenie na **Netlify** (`*.netlify.app`, neskôr vlastná doména). Podrobnosti prevádzky sú v dokumente pre vedenie.

---

**Obrázok 6 — Wireframe / Figma: hero a navigácia**  
*(export alebo screenshot; miesto pre QR na náhľad)*

Uchádzač má hneď vidieť hierarchiu: štúdium, prijímačky, kontakt. Rovnaká logika ide do živého webu a schém v CMS.

**Používateľ.** Študent hľadá potvrdenie atmosféry a projektov — autentické fotky a texty. Rodič potrebuje podmienky, termíny, poplatky, kontakt v prehľadnej štruktúre. Uchádzač potrebuje jasné odlíšenie a čo sa naučí.

---

**Obrázok 7 — Časová os projektu**  
*(Gantt alebo jednoduchá os: výskum → identita → špecifikácia → obsah → vývoj → odovzdanie)*

Prvá polovica roka: dáta a identita. Druhá: web, obsah, implementácia.

### KPI (december / marec)

Tabuľka musí byť **zhodná** s *Updated Project Proposal* v Google Classroom (stĺpce, čísla, znenia).

| Výstup | December | Marec | Zodpovednosť |
|--------|----------|-------|----------------|
| Výskum komunity (min. 100 odpovedí) | min. 100 | — | obaja |
| Brand piliere + prvé vizuály identity | podľa UPP | — | Hanka (+ Calder) |
| Workshop so školou | podľa UPP | — | obaja |
| Špecifikácia webu | — | podľa UPP | Matej |
| Obsah + mockupy | — | podľa UPP | Hanka |
| Funkčný web / staging | — | podľa UPP | Matej |
| Kvalitatívne doplnenie | — | podľa UPP | obaja |

---

## MVP do decembra

Prvé MVP bolo **dôkaz problému a smer identite** pred veľkou stavbou webu: výskum, piliere, prvé vizuály — nie ešte finálny verejný launch.

---

**Obrázok 8 — Moodboard**  
**Obrázok 9 — Varianty loga / prvky identity**

**Obrázok 10 — 205 odpovedí podľa skupiny**  
*(študent / učiteľ / rodič)*

Zloženie MVP: dotazník, analýza otvorených odpovedí, **brand piliere**, prvé **vizuálne návrhy**. Najťažšia časť bola ručná kategorizácia otvorených textov bez skreslenia v prospech jednej skupiny. MVP dalo škole čísla a smer namiesto pocitu „niečo treba zmeniť“.

---

**Obrázok 11 — Graf: názor na súčasný brand**  
*(páči sa / neutrálne / nepáči sa — podľa dostupných dát)*

**Obrázok 12 — Graf: web alebo nájdenie informácií**  
*(Likert alebo spokojnosť so súčasným webom)*

Komunita nie je jednotná ohľadom súčasného brandu; web väčšine nestačí alebo ho ľudia nenavštevujú — to podporuje investíciu do redizajnu.

### KPI december (Demo Day)

| Oblast | Výsledok |
|--------|----------|
| Respondenti | cieľ ≥ 100 → **205** (prekonané) |
| Piliere + vizuálny smer | podľa UPP a konzultácie |
| Workshop | ak neprebehol — kapacity/čas (presne podľa UPP) |
| Kvalitatívne rozhovory | ak obmedzené — doplnené širokým dotazníkom; skew podľa ročníka |
| % spokojnosti s hotovým webom | pred finálnym webom nie je uzavriteľné — zmysel až po launchi |

---

## Druhá iterácia MVP do marca

**Z prvého MVP:** potvrdenie problému, 205 odpovedí, piliere, prvé vizuály. **Už nie v tom istom rozsahu:** ďalšie veľké kolo čistého výskumu bez paralelnej stavby; nekonečné varianty identity bez väzby na obrazovky. **Chýbalo viac:** krátke rozhovory s tretiakmi (kapacita išla na web).

Druhé MVP je **web ako výstup**: špecifikácia, obsah, vizuál, bežiaca implementácia (Next.js, Sanity, Netlify). Finál môže byť staging a schválenie vedením; doména a verejný launch sú často **next steps** pre školu.

---

**Obrázok 13 — Screenshot webu**  
*(landing / kľúčové sekcie; napr. staging)*

**Obrázok 14 — Výrez zo špecifikácie alebo obsahu**

Spätná väzba od riaditeľky napr. doplnila povinné informácie (vrátane **externistov**). Náročné bolo zladiť technické minimum s očakávaním školy.

---

**Obrázok 15 — User testing: úspešnosť úloh**  
*(nájdi prijímačky, kontakt, …)*

**Obrázok 16 — User testing: spokojnosť alebo SUS**

*(Doplňte dátum, metódu a počet testerov podľa skutočného priebehu.)*

### KPI marec

Tabuľka **identická** s UPP a s prezentáciou. Položky závislé od rozhodnutia školy (doména, dátum launchu) uvádzajte ako **next steps**, nie ako „nesplnené“ bez vysvetlenia.

---

## Výsledky projektu

**Marec voči KPI** — finálna tabuľka podľa UPP: čo je hotové, čo rozpracované, čo v odovzdávacom balíku (kód, dokumentácia, návod na obsah, checklist pre administratívu).

**Celkom sa podarilo:** presun od výskumu k **hmotnému webu**, čitateľná štruktúra pre rodiča aj uchádzača, **udržateľná správa obsahu** v CMS. **Už by sme nespoliehali** na to, že komunita sama začne chodiť na web bez komunikácie zvnútra. **Naplno chýbali:** viac študentských rozhovorov, skoršie úlohové testovanie. **Pri viac času** by sme ťažisko na webe posunuli skôr v roku — viac iterácií podľa testov.

---

## Záver

**Úvod** — Projekt spája techniku a kreatívu s reálnou potrebou školy; cieľom je web, ktorý pri prvom kontakte zodpovedá Lýceu. **Analýza** — 205 respondentov potvrdilo medzeru medzi vnútorným a vonkajším obrazom a slabé využívanie webu; výskum určil piliere obsahu. **Návrh** — Next.js, Sanity, Netlify a jasná architektúra; KPI držíme v súlade s Updated Project Proposal. **Prvé MVP** — dáta, piliere, prvé vizuály; niektoré aktivity (napr. workshop) sa presunuli; respondentov sme výrazne prekročili. **Druhá iterácia** — špecifikácia, obsah, funkčný smer webu a spätná väzba vedenia; dokončenie závisí aj od školy. **Výsledky** — odovzdanie kódu, dokumentácie a next steps; prínosom je aj **proces a nástroje**, ktoré ostávajú škole.

**Ďalšie kroky:** prevádzkové nasadenie (doména, účty Netlify/Sanity/GitHub), schválenie textov vedením, komunikácia spustenia k rodičom a uchádzačom — podrobnejšie v internom dokumente pre administratívu.

---

## Zdroje

Pri prenose do Google Docs: poznámky pod čiarou cez **Vložiť → Poznámka pod čiarou**; čísla generuje dokument.

¹ Krug, S.: *Don’t Make Me Think, Revisited*, New Riders, 2014.

² Norman, D. A.: *The Design of Everyday Things* (rev. vyd.), Basic Books, 2013.

³ Nielsen Norman Group: *Which UX Research Methods When?* — [online], cit. [doplňte dátum prístupu a URL].

⁴ Kasíková, M. a kol.: *Školská pedagogika*. Bratislava: IRIS, 2008. (kontext školy ako inštitúcie a komunikácie vo vzdelávaní — použite presné strany podľa vydania vo vašej knižnici).
