export type Testimonial = {
  id: string;
  quote: string;
  company: string;
  /** Skrátený úvod pre kartu */
  excerpt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    company: "Titans Freelancers",
    excerpt:
      "Krátko po predstavení zadania už študenti proaktívne vytvorili schému a plán práce — milo nás to prekvapilo.",
    quote:
      "Krátko po predstavení zadania na daný týždeň už chalani proaktívne vytvorili schému a plán práce, čo nás naozaj veľmi milo prekvapilo. Jednak čo sa týka rýchlosti, akou sa chopili zadania, rovnako aj spôsobu myslenia, akým k problému pristupovali.",
  },
  {
    id: "t2",
    company: "Titans Freelancers",
    excerpt:
      "Výrazne predčili očakávania — proaktívny prístup, perfektná realizácia a pozitívny feedback z biznisu.",
    quote:
      "Chalani boli naozaj veľmi šikovní a výrazne predčili naše očakávania. Od veľmi proaktívneho prístupu k zadaniu až po jeho perfektnú realizáciu. Pýtali sa zaujímavé otázky ohľadom fungovania nášho tímu a firmy. Feedback na nich aj od kolegov z biznisu bol veľmi pozitívny. Boli veľmi slušní a komunikatívni. Spolupráca s nimi bola naozaj veľmi prínosná aj pre nás.",
  },
  {
    id: "t3",
    company: "FBE",
    excerpt:
      "Rýchla adaptácia, priateľská komunikácia a rýchle pochopenie zadania vrátane vystúpenia na školení s klientmi.",
    quote:
      "Veľmi rýchla adaptácia a dobrá priateľská komunikácia, rýchle pochopenie zadania. Vrátane vystupovania na školení FBE, ktorého sa zúčastnil s klientmi FBE a rýchlo nadviazal kontakt aj so seniormi účastníkmi.",
  },
  {
    id: "t4",
    company: "Accace",
    excerpt:
      "Aktívne počúvala, robila si poznámky a navrhla štruktúru slidov — každý deň milé prekvapenie.",
    quote:
      "Mňa veľmi milo prekvapilo, keď som Mashke vysvetľovala zadanie prezentácie, ktorá nás bude čakať pre externé publikum — aktívne počúvala, písala si poznámky a navrhla, ako by slides mohli vyzerať. Taktiež sme sa spoločne zúčastnili interného školenia k UX téme a nebojácne sa vrhla do spoločnej aktivity s ľuďmi zo skupiny, ktorí boli z HR profesie z iných spoločností. Bola taktiež veľmi vnímavá a zadefinovala, čo by sa chcela dozvedieť. Naozaj som bola veľmi milo prekvapená každý deň.",
  },
  {
    id: "t5",
    company: "O2",
    excerpt:
      "Natália dala projektu extra námahu aj vo večerných hodinách — oceňujeme angažovanosť.",
    quote:
      "Natália pracovala na zadaní vo Figme aj vo večerných hodinách — dala tomu extra námahu. Naozaj si to cením. Hoci sebe aj ľuďom v tíme hovorím, že práca po večeroch je síce obdivuhodná, ale nemala by sa stať rutinou, je to potom skôr obraz nezvládnutého time managementu.",
  },
  {
    id: "t6",
    company: "O2",
    excerpt:
      "Robíte veľmi užitočnú prácu so študentmi — vytvárate hodnotu pre nich aj pre trh práce.",
    quote:
      "Robíte veľmi užitočnú prácu so študentmi. Vytvárate hodnotu pre samotných študentov, ale aj pre trh práce. Vďaka vám za to!",
  },
  {
    id: "t7",
    company: "Accace",
    excerpt:
      "Namiesto poznámok dodala hotovú reportáž; na výzvu k analýze dát prišiel celý report s grafmi.",
    quote:
      "Ešte pred eventom sme študentku poprosili, aby si robila krátke poznámky, že reportáž spravíme spoločne. Na konci eventu nám však dodala hotovú reportáž! Alebo keď sme sa jej spýtali, či by si trúfla spraviť analýzu dát, ktoré jej dáme, dostali sme celý report aj s grafmi.",
  },
  {
    id: "t8",
    company: "Galéria mesta Bratislava",
    excerpt:
      "Otvorená reflexia, prečo ich generácia menej chodí do galérií — inšpirácia pre našu komunikáciu.",
    quote:
      "Zásadná bola reflexia, prečo má ich generácia malú motiváciu navštevovať galérie alebo múzeá. Otvorenosť, s akou komunikovali napríklad o lenivosti, nízkom záujme objavovať umenie naživo, keď ho majú dostupné cez online platformy, nás vedie k prehodnoteniu foriem komunikácie cielenej na študentstvo stredných škôl.",
  },
  {
    id: "t9",
    company: "Wigro-Fin",
    excerpt:
      "Brainstorming s mladou energiou — inšpiratívne nápady, úprimná snaha a angažovanosť.",
    quote:
      "Brainstorming s prínosom mládežníckej energie do rôznych tém súvisiacich s prezentáciou našej firmy na sociálnych sieťach — inšpiratívne nápady s úprimnou snahou a záujmom, angažovanosť.",
  },
  {
    id: "t10",
    company: "Compass Architects",
    excerpt:
      "Oliver a David — vlastné postrehy, dodržané termíny a sebavedomé, slušné vystupovanie.",
    quote:
      "Boli sme veľmi príjemne prekvapení, keď Oliver a David prejavili svoje vlastné postrehy, návrhy a riešenia. Presne dodržiavali dohodnuté časy. Na všetkých kolegov zapôsobilo ich sebavedomé a slušné vystupovanie. Oliver aj David na nás urobili vynikajúci dojem, boli aktívni a bola to radosť stráviť s nimi týždeň. Dohodli sme sa, že zadania, ktoré rozpracovali, ešte spoločne dotiahneme po skončení programu.",
  },
  {
    id: "t11",
    company: "DASE",
    excerpt:
      "Prirodzená zvedavosť a prekvapivo veľa už vedia — skvelá diskusia.",
    quote:
      "Študenti boli prirodzene zvedaví, čo bolo výborné, lebo sme sa snažili odpovedať na veci, ktoré ich zaujímajú. Boli sme však veľmi milo prekvapení, ako veľa už vedia.",
  },
];

export const fitQuizQuestions = [
  "Teší ťa, keď sa učíš na reálnych projektoch, nielen z učebnice?",
  "Vieš pracovať v tíme aj vtedy, keď to nejde úplne ľahko?",
  "Nevadí ti prezentovať svoju prácu pred druhými?",
  "Dokážeš prijať spätnú väzbu bez toho, aby ťa zložila?",
  "Vieš povedať svoj názor slušne a vecne?",
  "Keď spravíš chybu, vieš ju pomenovať a skúsiť to znova?",
  "Zaujíma ťa digitál, biznis alebo tvorba vecí, ktoré majú reálny výsledok?",
  "Vieš si zobrať zodpovednosť za svoju časť práce?",
  "Záleží ti na tom, ako sa darí aj ostatným v tíme?",
  "Chceš sa v škole posúvať, nie ňou len prejsť?",
] as const;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bioBefore: string;
  bioLyceum: string;
  bioSchool?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "fabrici",
    name: "Zuzka Mikloš Fabrici",
    role: "Riaditeľka",
    bioBefore:
      "Študovala učiteľstvo angličtiny a nemčiny, pracovala v korporáciách, učila vo firmách, jazykovkách, v Nemecku a v Narnii, kde viedla jazykový department a akademický pilier. So študentmi sa zapájala do programov rozvíjajúcich podnikavosť.",
    bioLyceum:
      "Na Lýceu pôsobí od začiatku ako riaditeľka a verí, že tak môže pozitívne ovplyvniť slovenské školstvo.",
    bioSchool:
      "Naša krajina potrebuje akčných, schopných, nadšených a tolerantných ľudí. Preto na Lýceu podporujeme rozvoj nielen hard skills, ale aj podnikavé myslenie a charakter, aby naši absolventi tvorili krajinu, kde všetci chceme spolu žiť.",
  },
  {
    id: "horvath",
    name: "Jano Horváth",
    role: "Digitálny pilier",
    bioBefore:
      "Študoval informatiku na University of Edinburgh, pôsobil v IT od startupov po korporácie. Po štúdiu učil cez program Teach na ZŠ aj SOŠ, potom rozbehol projekt Informatika 2.0 pre desiatky tisíc detí na Slovensku.",
    bioLyceum:
      "Na Lýceu vedie digitálny pilier a učí digitálne predmety.",
    bioSchool:
      "Digitálny svet sa čoraz viac prelína s klasickým. Je radosť učiť študentov tento hybridný svet objavovať a zodpovedne spolu-vytvárať. Toto nie je o „kódovaní appiek“. Lýceum je digitálna škola, no nie továreň na ajťákov — budujeme zručnosti na plavbu 21. storočím.",
  },
  {
    id: "zvarik",
    name: "Emil Zvarík",
    role: "Učiteľ, koordinácia",
    bioBefore:
      "Po učiteľských protestoch spoluzakladal Lepšiu Metodku, študoval matfyz (bakalár informatika, magister kognitívna veda), učil na gymnáziách, absolvoval Nexteriu. Pracoval s dátami v startupe, potom sa vrátil k ľuďom — a k Lýceu.",
    bioLyceum:
      "Lýceum je pre neho iná škola — kde sa dá a chce. Tímový hráč medzi motivovanými kolegami. Nie ostrov, ale miesto prepojení s praxou.",
    bioSchool:
      "Učí digitálne aj podnikavé predmety, koordinuje vzdelávanie učiteľov, je triedny aj mentor.",
  },
  {
    id: "miklasova",
    name: "Saška Miklášová",
    role: "Matematika",
    bioBefore:
      "Profesionálny basketbal počas strednej, potom pravdepodobnosť a štatistika na FMFI UK. Po ukončení športu dokončila pedagogické minimum a nastúpila ako učiteľka matematiky.",
    bioLyceum:
      "Okrem výučby sa podieľa na učebných plánoch a triednictve. Vízia: „Študent má Lýceum rád“ — lebo ona sama ho má rada.",
    bioSchool:
      "Lýceum je pre ňu prostredie na sebarozvoj a kreativitu v podporujúcej atmosfére. Na hodinách buduje bezpečné a dôverujúce prostredie.",
  },
  {
    id: "sumska",
    name: "Zuzka Šumská",
    role: "Podnikavosť, mentoring",
    bioBefore:
      "Po Ekonomickej univerzite marketing, reklama a predaj online priestoru. Koučing (Business Coaching College), certifikovaná ICF life koučka.",
    bioLyceum:
      "Učí Podnikanie a komunikáciu, Student enterprise, koordinuje mentoring a je mentorkou.",
    bioSchool:
      "Lýceum je škola, kde by chcela sama študovať — ľudskosť, partnerský prístup, profesionalita. Žiadna otázka nie je zlá, z chýb sa učíme a chodí sa s úsmevom.",
  },
  {
    id: "laco",
    name: "Michal Laco",
    role: "Service design, Business strategy",
    bioBefore:
      "Inovačný konzultant a tréner pre startupy aj veľké firmy, mentor v akcelerátoroch, vlastné podnikanie. Vyštudoval ekonómiu v St Andrews a LSE.",
    bioLyceum:
      "Rozvíja podnikavosť študentov, vyučuje a spoluvytvára kurikulum pre Service Design a Business Strategy.",
    bioSchool:
      "Lýceum je unikátne prostredie, kde sa učíme žiť relevantne pre dnešok — praktické zručnosti, charakter, odvaha a vytrvalosť meniť seba aj svet.",
  },
  {
    id: "coyle",
    name: "Fraser Coyle",
    role: "Business English",
    bioBefore:
      "Štúdiá v Škótsku, potom biznis a vzdelávanie — BMW, Land Rover, jazykové školy vrátane Berlitz, Narnia. Učil angličtinu a business English rôznym vekovým skupinám.",
    bioLyceum:
      "Na Lýceu učí Business English — moderné biznis koncepty a jazyk v pracovnom kontexte.",
    bioSchool:
      "„Lýceum otvára dvere a príležitosti. Hodiny sú aktuálne, pracujú s hodnotami. Personál je otvorený a buduje vzťahy so študentmi — skvelé prostredie pre učiteľa.“",
  },
  {
    id: "stasko",
    name: "Stano Staško",
    role: "Náboženstvo a etika, charakter",
    bioBefore:
      "Saleziáni, teológia a pedagogika s tínedžermi, potom herectvo na VŠMU, divadlo, televízia, dabing, voiceover.",
    bioLyceum:
      "Vyučuje NaE, stará sa o charakterové a neformálne vzdelávanie. Veľa sa pýta a počúva — na chodbách aj ako mentor.",
    bioSchool:
      "Má rád energiu, nápady a ochotu robiť veci spolu. Lýceum je miesto, kde si sám za seba, ale nikdy nie sám — pri úspechoch aj nezdaroch, aby sme z nich vyťažili maximum.",
  },
  {
    id: "hojnosova",
    name: "Vanda Hojnošová",
    role: "Školská psychologička",
    bioBefore:
      "Psychológia a francúzština na Masarykovej univerzite. Chatové poradenstvo, neziskovka, dobrovoľníctvo, krízová intervencia.",
    bioLyceum:
      "Vníma prácu psychológa ako podporu pri prežívaní aj pri hľadaní nových perspektív. Do Lýcea prináša témy duševného zdravia, odolnosti a citlivosti k rozmanitosti.",
  },
  {
    id: "matulova",
    name: "Milina Matulová",
    role: "Pilier podnikavosti",
    bioBefore:
      "Angličtina, psychológia, MBA. Pedagogika, poradenstvo, psychológia, manažment — vo viacerých odvetviach. Školstvo sa stalo vášňou.",
    bioLyceum:
      "Spolutvorí kurikulum, vedie tím učiteľov podnikavosti, stará sa o stáže. Verí, že svet sa dá meniť hodinu po hodine.",
    bioSchool:
      "Rozvoj zvedavosti, otvorenej mysle a kreativity. Na Lýceu rozvíjame zručnosti pre 21. storočie a učíme „I can“ prístup uviesť do praxe.",
  },
];

export const stevoQuote = {
  attribution: "Števo Machajdík, predseda správnej rady",
  text:
    "Na obdobie, keď som mal 16 rokov, si pamätám ako na obdobie snívania. Mal som šťastie na ľudí, ktorí ma sprevádzali a challengovali — a to sa stalo mojím poslaním. Mojím prianím je, aby Lýceum C. S. Lewisa bolo presne takým prostredím pre ďalšie generácie.",
};
