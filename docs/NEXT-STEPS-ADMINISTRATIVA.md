# Next steps — spustenie webu, doména, hosting a správa obsahu

## Úvod

Tento dokument slúži ako **prehľad toho, čo ešte treba dohodnúť a spraviť**, aby bol nový web **naozaj verejný na vlastnej adrese**, aby na ňom škola **vedela sama meniť texty** a aby bolo jasné, **kto za čo zodpovedá** a **s čím sa počíta v rozpočte**.

Nevysvetľuje technické detaily vývoja — len to, čo potrebuje vedenie, administratíva alebo poverená osoba pri škole **na rozhodnutie a spoluprácu s ľuďmi, ktorí nasadzujú web**.

## 1. Čo už máme zmysel mať pripravené

Web sa stavia ako moderná stránka (technicky **Next.js**), obsah sa dá upravovať (CMS) cez **Sanity** — teda **redakčný systém v prehliadači**, bez programovania. Kód leží na **GitHub-e**; **hosting na produkciu** je plánovaný cez **Netlify** — najprv typicky adresa v tvare `nieco.netlify.app`, neskôr **vlastná doména** (napr. lyceum.sk).

**Sanity Studio** — to je „administrácia“ obsahu — sa dá prevádzkovať online na adrese od Sanity.

Sanity studio: [https://lyceum.sanity.studio/](https://lyceum.sanity.studio/)

*(Náhľad obrazovky Studio — otvorte odkaz vyššie v prehliadači.)*

## 2. Čo má škola stručne vedieť (päť vecí)

1. **Kde beží web pre návštevníkov** — na **Netlify** (účet by mal patriť škole alebo zriaďovateľovi) [https://lyceumweb.netlify.app/](https://lyceumweb.netlify.app/)
2. **Aká je adresa** — najprv dočasná `*.netlify.app`, potom **vlastná doména**, ktorú škola drží u registrátora a nasmeruje ju podľa návodu od Netlify.
3. **Kde sa mení text a obrázky** — v **Sanity Studio**; po úprave treba vždy **Publish**, aby sa zmena ukázala na webe.
4. **Čo stojí peniaze** — väčšinou **doména** (ročne) a prípadne **platený plán** Netlify alebo Sanity, ak prestanú stačiť bezplatné limity (pri bežnom školskom webe často ostane veľa vecí zadarmo alebo za málo — presné sumy treba vždy pozrieť u poskytovateľa v deň rozhodnutia).
5. **Čo nie je súčasťou tohto webu** — napr. **firemný e-mail** na doméne (`info@…`) rieši škola cez Google Workspace, Microsoft 365 alebo registrátora **samostatne**; Netlify to nenahrádza.

## 4. Peniaze — orientačný prehľad

Ceny sa menia; pred nákupom vždy otvorte aktuálny cenník na stránke poskytovateľa.

- **Netlify** — často je možné začať **bez poplatku** (s určitými limitmi). Pri väčšom návštevnosti alebo pokročilých funkciách môže byť potrebný **mesačný plán** (rádovo desiatky eur). Na účely statického webu ako je teraz stačí zadarmo plán.
- **Doména .sk** — typicky **desiatky eur ročne**, podľa toho, u koho ju máte a či k tomu patria ďalšie služby.
- **Sanity** — pre tento typ webu často **stačí bezplatný alebo lacný plán**; pri veľmi veľa dát alebo premávke môže pribudnúť platený plán — [sanity.io/pricing](https://www.sanity.io/pricing).
- **Vývoj a dizajn** — riešia sa **zvlášť** (zmluva, projekt), nie sú „v cene hostingu“.

## 5. Čo treba spraviť po poradí (checklist)

### Ľudia a účty

- [ ] Kto má **prístup do Netlify** (ideálne aspoň **dvaja** ľudia).
- [ ] Kto má **oprávnenie v Sanity** (kto môže meniť obsah a kto len čítať).
- [ ] Kto je **vlastník domény** a kde je doména kúpená.
- [ ] Kto môže schvaľovať **zmeny na GitHub-e** (ak repozitár patrí škole).

### Web na Netlify

- [ ] Prepojiť **GitHub** s Netlify tak, aby sa po každej zmene na hlavnej vetve **sám zbuildil a nasadil** web.
- [ ] Do Netlify zadať **tajné kľúče** (premenné prostredia), ktoré potrebuje web — najmä spojenie so Sanity; **nikdy ich nedávať verejne** na internet.
- [ ] Skontrolovať, že stránka na `https://…netlify.app` **funguje** a zobrazuje správny obsah.

### Doména

- [ ] Dohodnúť **presnú adresu** (napr. lyceum.sk).
- [ ] U registrátora nastaviť **DNS** podľa návodu od Netlify.
- [ ] V Netlify pridať **vlastnú doménu** a overiť, že ide **HTTPS** (zámok v prehliadači).

### Obsah a Sanity

- [ ] Mať **nasadené Studio** na známej adrese (napr. lyceum.sanity.studio) a vedieť, kto tam **prihlasuje**.
- [ ] Určiť **1–2 redaktorov**, ktorí dostanú krátke zasvetenie: kde sú texty, DOD, prijímačky, že po úprave treba **Publish**.
- [ ] Formuláre (záujem o e-mail z popupov) — aby fungovali, musí byť na serveri nastavený **prístup na zápis do Sanity** (technicky rieši ten, kto nasadzuje web).

**Leady z formulárov** — momentálne sa ukladajú do **databázy Sanity** (ako súčasť projektu). Ak to škole nevyhovuje, dá sa to **presmerovať** — napr. zápis do **tabuľky (spreadsheet)** a **odosielanie na e-mail** dohodnutej osobe z vedenia; treba to **vopred dohodnúť** a pri nasadení **technicky nastaviť**.

### Pred tým, ako pôjdeme von naplno

- [ ] Stránka **ochrany osobných údajov** je aktuálna.
- [ ] **Kontakty** na webe sú správne.
- [ ] Dôležité texty (prijímačky, termíny) má niekto zo školy **prečítané a schválené**.

### Po spustení

- [ ] Dohodnúť, **kto aktualizuje** termíny (DOD, prijímačky) a ako často sa kontroluje web.

## 6. Ako redaktor pracuje v CMS (ľudsky)

1. Otvorí **Sanity Studio** (odkaz od správcu).
2. Nájde dokument — napr. **DOD — podstránka**, **DOD popup**, **Prijímačky — popup**.
3. Upraví text alebo pridá obrázok.
4. Stlačí **Publish** — kým to neurobí, návštevník na webe môže vidieť ešte starú verziu.
5. Ak niečo nevidí na webe hneď, môže to byť len **krátky odklad** (web si obsah sám po chvíli znovu stiahne); ak problém trvá, ozve sa **technickému kontaktu**.

## 7. Kto a čo

| Rola | Meno / kontakt | Čo rieši |
| :--- | :--- | :--- |
| Vedenie | *ZMF* | Dátum spustenia, schválenie textov a rozpočtu |
| Správca Netlify / domény | *Dočasne Matej Hrica, potom správca z Lýcea* | Účet, nasadenie, doména, kľúče |
| Redaktor obsahu | *Dočasne Matej Hrica, potom správca z Lýcea* | Sanity, termíny, texty |
| Technický kontakt | *Dočasne Matej Hrica, potom správca z Lýcea* | GitHub, chyby nasadenia, drobné úpravy |
