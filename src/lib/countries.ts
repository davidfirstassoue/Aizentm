// Pays supportés — toutes les routes régionales disponibles sur le site.
export type CountryCode =
  | "sn" | "ci" | "ga" | "cm" | "cg" | "cd"
  | "ml" | "bf" | "ne" | "bj" | "tg" | "gn"
  | "gw" | "gq" | "mr" | "ma" | "dz" | "tn"
  | "ly" | "cf" | "td" | "mg" | "dj" | "rw"
  | "bi" | "st" | "za" | "ke";

export type Currency = "XOF" | "XAF" | "CDF" | "MRU" | "MAD" | "DZD" | "TND" | "LYD" | "MGA" | "DJF" | "RWF" | "BIF" | "STN" | "USD" | "ZAR" | "KES";

export type Language = "fr" | "en";

export type Pack = {
  id: string;
  name: string;
  tagline: string;
  target: string;
  features: string[];
  delay: string;
  cta: string;
  featured?: boolean;
  badge?: string;
};

export type Country = {
  code: CountryCode;
  name: string;
  nameEn?: string;
  flag: string;
  capital: string;
  currency: Currency;
  demonym: string;
  demonymEn?: string;
  language: Language;
  prices: Record<string, number>;
  color?: string;
};

export const STUDIO_PACKS: Pack[] = [
  {
    id: "studio-essentiel",
    name: "Essentiel",
    tagline: "Vitrine digitale impeccable",
    target: "Entreprise sans présence digitale ou avec un site daté qui nuit à son image.",
    features: [
      "Site web professionnel sur mesure (mobile-first)",
      "Design éditorial aligné à ton identité de marque",
      "Formulaires de contact + intégration WhatsApp",
      "SEO local optimisé",
      "Hébergement 12 mois inclus",
      "1 mois de support inclus",
    ],
    delay: "Délai : 1 semaine",
    cta: "Obtenir mon devis →",
  },
  {
    id: "studio-pro",
    name: "Pro",
    tagline: "Site qui travaille pour toi",
    target: "Entreprise qui veut un site qui travaille pour elle, pas juste qui l'affiche.",
    features: [
      "Tout ce qui est dans Essentiel",
      "Prise de rendez-vous automatisée intégrée",
      "1 agent IA conversationnel (FAQ + qualification leads)",
      "Tableau de bord analytics",
      "Intégration CRM basique",
      "Support prioritaire 3 mois inclus",
    ],
    delay: "Délai : 2 semaines",
    cta: "Obtenir mon devis →",
  },
  {
    id: "studio-sur-mesure",
    name: "Sur Mesure",
    tagline: "Plateforme digitale complète",
    target: "Grand compte ou groupe qui veut une plateforme digitale complète et unique.",
    features: [
      "Architecture web entièrement personnalisée",
      "Système multilingue (FR/EN et autres langues)",
      "Intégration à tous les outils existants",
      "Identité visuelle complète si nécessaire",
      "Accompagnement stratégique",
    ],
    delay: "Délai : Sur devis",
    cta: "Parlons de ton projet →",
  },
];

export const AI_PACKS: Pack[] = [
  {
    id: "ai-starter",
    name: "Starter",
    tagline: "Tester l'automatisation",
    target: "Direction qui veut tester l'automatisation sans engagement lourd.",
    features: [
      "1 agent IA métier sur mesure (réservations / relances / FAQ / devis)",
      "Intégration WhatsApp + Email",
      "Base de données simple",
      "Formation équipe incluse",
      "Support email 5j/7",
    ],
    delay: "Délai : 1 semaine",
    cta: "Obtenir mon devis →",
  },
  {
    id: "ai-business",
    name: "Business",
    tagline: "ROI mesurable",
    target: "Entreprise avec des processus internes à optimiser. Direction qui veut un ROI mesurable.",
    features: [
      "3 agents IA interconnectés (emails + devis automatiques + relances)",
      "Intégration CRM + base de données avancée",
      "Tableau de bord de suivi en temps réel",
      "Reporting automatique hebdomadaire",
      "Support prioritaire 6j/7",
    ],
    delay: "Délai : 2 semaines",
    cta: "Obtenir mon devis →",
  },
  {
    id: "ai-enterprise",
    name: "Enterprise",
    tagline: "Multi-départements",
    target: "Entreprise structurée avec plusieurs départements à automatiser.",
    features: [
      "Jusqu'à 8 agents IA interconnectés",
      "Automatisation multi-départements (RH, Finance, Commercial, SAV)",
      "Intégration ERP / Odoo complète",
      "Scraping & veille concurrentielle automatisée",
      "Formations équipes incluses",
      "Account manager dédié",
      "SLA garanti 99,5%",
    ],
    delay: "Délai : 4 semaines",
    cta: "Obtenir mon devis →",
  },
  {
    id: "ai-souverain",
    name: "Souverain",
    tagline: "Solution totale & confidentielle",
    target: "Grand compte, institution, groupe multi-filiales. Direction qui veut une solution unique, confidentielle et totale.",
    features: [
      "Architecture IA + Web entièrement sur mesure",
      "Agents IA illimités avec orchestration complexe",
      "Serveurs privés dédiés (données souveraines, zéro cloud étranger)",
      "Intégration à tous les systèmes existants",
      "Équipe AIZEN dédiée exclusivement au compte",
      "Accompagnement stratégique mensuel avec la direction",
      "Contrat de confidentialité + SLA personnalisé",
      "Évolutions continues sans surcoût",
    ],
    delay: "Délai : Sur devis",
    cta: "Parlons stratégie →",
    featured: true,
    badge: "Offre phare",
  },
];

export const COUNTRIES: Record<CountryCode, Country> = {
  // ── Afrique de l'Ouest ──────────────────────────────────────────────────────
  sn: {
    code: "sn",
    name: "Sénégal",
    flag: "",
    capital: "Dakar",
    currency: "XOF",
    demonym: "sénégalaises",
    language: "fr",
    color: "rgba(0, 180, 80, 0.09)",
    prices: { "site-pro": 150000, "cyber-plus": 95000, "odoo-cloud": 320000, "serveur-dedie": 180000 },
  },
  ci: {
    code: "ci",
    name: "Côte d'Ivoire",
    flag: "",
    capital: "Abidjan",
    currency: "XOF",
    demonym: "ivoiriennes",
    language: "fr",
    color: "rgba(240, 120, 0, 0.09)",
    prices: { "site-pro": 160000, "cyber-plus": 100000, "odoo-cloud": 340000, "serveur-dedie": 190000 },
  },
  ml: {
    code: "ml",
    name: "Mali",
    flag: "",
    capital: "Bamako",
    currency: "XOF",
    demonym: "maliennes",
    language: "fr",
    color: "rgba(200, 160, 0, 0.09)",
    prices: { "site-pro": 140000, "cyber-plus": 88000, "odoo-cloud": 300000, "serveur-dedie": 165000 },
  },
  bf: {
    code: "bf",
    name: "Burkina Faso",
    flag: "",
    capital: "Ouagadougou",
    currency: "XOF",
    demonym: "burkinabèses",
    language: "fr",
    color: "rgba(220, 30, 30, 0.09)",
    prices: { "site-pro": 135000, "cyber-plus": 85000, "odoo-cloud": 290000, "serveur-dedie": 160000 },
  },
  ne: {
    code: "ne",
    name: "Niger",
    flag: "",
    capital: "Niamey",
    currency: "XOF",
    demonym: "nigériennes",
    language: "fr",
    color: "rgba(230, 100, 0, 0.09)",
    prices: { "site-pro": 130000, "cyber-plus": 82000, "odoo-cloud": 280000, "serveur-dedie": 155000 },
  },
  bj: {
    code: "bj",
    name: "Bénin",
    flag: "",
    capital: "Cotonou",
    currency: "XOF",
    demonym: "béninoises",
    language: "fr",
    color: "rgba(0, 160, 60, 0.09)",
    prices: { "site-pro": 138000, "cyber-plus": 87000, "odoo-cloud": 295000, "serveur-dedie": 162000 },
  },
  tg: {
    code: "tg",
    name: "Togo",
    flag: "",
    capital: "Lomé",
    currency: "XOF",
    demonym: "togolaises",
    language: "fr",
    color: "rgba(0, 140, 60, 0.09)",
    prices: { "site-pro": 136000, "cyber-plus": 86000, "odoo-cloud": 292000, "serveur-dedie": 160000 },
  },
  gn: {
    code: "gn",
    name: "Guinée",
    flag: "",
    capital: "Conakry",
    currency: "XOF",
    demonym: "guinéennes",
    language: "fr",
    color: "rgba(210, 160, 0, 0.09)",
    prices: { "site-pro": 132000, "cyber-plus": 83000, "odoo-cloud": 284000, "serveur-dedie": 156000 },
  },
  gw: {
    code: "gw",
    name: "Guinée-Bissau",
    flag: "",
    capital: "Bissau",
    currency: "XOF",
    demonym: "bissau-guinéennes",
    language: "fr",
    color: "rgba(200, 20, 20, 0.09)",
    prices: { "site-pro": 128000, "cyber-plus": 80000, "odoo-cloud": 275000, "serveur-dedie": 150000 },
  },
  mr: {
    code: "mr",
    name: "Mauritanie",
    flag: "",
    capital: "Nouakchott",
    currency: "MRU",
    demonym: "mauritaniennes",
    language: "fr",
    color: "rgba(0, 140, 70, 0.09)",
    prices: { "site-pro": 142000, "cyber-plus": 90000, "odoo-cloud": 305000, "serveur-dedie": 168000 },
  },
  // ── Afrique Centrale ────────────────────────────────────────────────────────
  cm: {
    code: "cm",
    name: "Cameroun",
    flag: "",
    capital: "Yaoundé",
    currency: "XAF",
    demonym: "camerounaises",
    language: "fr",
    color: "rgba(180, 160, 0, 0.09)",
    prices: { "site-pro": 240000, "cyber-plus": 150000, "odoo-cloud": 500000, "serveur-dedie": 290000 },
  },
  ga: {
    code: "ga",
    name: "Gabon",
    flag: "",
    capital: "Libreville",
    currency: "XAF",
    demonym: "gabonaises",
    language: "fr",
    color: "rgba(0, 120, 200, 0.09)",
    prices: { "site-pro": 250000, "cyber-plus": 160000, "odoo-cloud": 520000, "serveur-dedie": 300000 },
  },
  cg: {
    code: "cg",
    name: "Congo-Brazzaville",
    flag: "",
    capital: "Brazzaville",
    currency: "XAF",
    demonym: "congolaises",
    language: "fr",
    color: "rgba(200, 150, 0, 0.09)",
    prices: { "site-pro": 245000, "cyber-plus": 155000, "odoo-cloud": 510000, "serveur-dedie": 295000 },
  },
  cd: {
    code: "cd",
    name: "RD Congo",
    flag: "",
    capital: "Kinshasa",
    currency: "CDF",
    demonym: "congolaises",
    language: "fr",
    color: "rgba(0, 140, 220, 0.09)",
    prices: { "site-pro": 380000, "cyber-plus": 240000, "odoo-cloud": 800000, "serveur-dedie": 460000 },
  },
  cf: {
    code: "cf",
    name: "Centrafrique",
    flag: "",
    capital: "Bangui",
    currency: "XAF",
    demonym: "centrafricaines",
    language: "fr",
    color: "rgba(0, 80, 180, 0.09)",
    prices: { "site-pro": 230000, "cyber-plus": 145000, "odoo-cloud": 480000, "serveur-dedie": 275000 },
  },
  td: {
    code: "td",
    name: "Tchad",
    flag: "",
    capital: "N'Djaména",
    currency: "XAF",
    demonym: "tchadiennes",
    language: "fr",
    color: "rgba(0, 60, 180, 0.09)",
    prices: { "site-pro": 228000, "cyber-plus": 143000, "odoo-cloud": 475000, "serveur-dedie": 270000 },
  },
  gq: {
    code: "gq",
    name: "Guinée équatoriale",
    flag: "",
    capital: "Malabo",
    currency: "XAF",
    demonym: "équato-guinéennes",
    language: "fr",
    color: "rgba(0, 150, 70, 0.09)",
    prices: { "site-pro": 260000, "cyber-plus": 165000, "odoo-cloud": 540000, "serveur-dedie": 310000 },
  },
  st: {
    code: "st",
    name: "São Tomé",
    flag: "",
    capital: "São Tomé",
    currency: "STN",
    demonym: "santoméennes",
    language: "fr",
    color: "rgba(200, 160, 0, 0.09)",
    prices: { "site-pro": 220000, "cyber-plus": 138000, "odoo-cloud": 460000, "serveur-dedie": 265000 },
  },
  // ── Afrique du Nord (Maghreb) ────────────────────────────────────────────────
  ma: {
    code: "ma",
    name: "Maroc",
    flag: "",
    capital: "Rabat",
    currency: "MAD",
    demonym: "marocaines",
    language: "fr",
    color: "rgba(200, 15, 45, 0.10)",
    prices: { "site-pro": 5500, "cyber-plus": 3500, "odoo-cloud": 11500, "serveur-dedie": 6500 },
  },
  dz: {
    code: "dz",
    name: "Algérie",
    flag: "",
    capital: "Alger",
    currency: "DZD",
    demonym: "algériennes",
    language: "fr",
    color: "rgba(0, 100, 55, 0.09)",
    prices: { "site-pro": 68000, "cyber-plus": 43000, "odoo-cloud": 140000, "serveur-dedie": 80000 },
  },
  tn: {
    code: "tn",
    name: "Tunisie",
    flag: "",
    capital: "Tunis",
    currency: "TND",
    demonym: "tunisiennes",
    language: "fr",
    color: "rgba(210, 15, 45, 0.10)",
    prices: { "site-pro": 1600, "cyber-plus": 1000, "odoo-cloud": 3300, "serveur-dedie": 1900 },
  },
  ly: {
    code: "ly",
    name: "Libye",
    flag: "",
    capital: "Tripoli",
    currency: "LYD",
    demonym: "libyennes",
    language: "fr",
    color: "rgba(0, 160, 60, 0.09)",
    prices: { "site-pro": 2400, "cyber-plus": 1500, "odoo-cloud": 5000, "serveur-dedie": 2800 },
  },
  // ── Afrique de l'Est ─────────────────────────────────────────────────────────
  dj: {
    code: "dj",
    name: "Djibouti",
    flag: "",
    capital: "Djibouti",
    currency: "DJF",
    demonym: "djiboutiennes",
    language: "fr",
    color: "rgba(110, 180, 220, 0.11)",
    prices: { "site-pro": 90000, "cyber-plus": 57000, "odoo-cloud": 188000, "serveur-dedie": 107000 },
  },
  rw: {
    code: "rw",
    name: "Rwanda",
    flag: "",
    capital: "Kigali",
    currency: "RWF",
    demonym: "rwandaises",
    language: "fr",
    color: "rgba(0, 155, 205, 0.10)",
    prices: { "site-pro": 85000, "cyber-plus": 53000, "odoo-cloud": 178000, "serveur-dedie": 102000 },
  },
  bi: {
    code: "bi",
    name: "Burundi",
    flag: "",
    capital: "Bujumbura",
    currency: "BIF",
    demonym: "burundaises",
    language: "fr",
    color: "rgba(200, 20, 40, 0.09)",
    prices: { "site-pro": 80000, "cyber-plus": 50000, "odoo-cloud": 168000, "serveur-dedie": 96000 },
  },
  // ── Afrique Insulaire ─────────────────────────────────────────────────────────
  mg: {
    code: "mg",
    name: "Madagascar",
    flag: "",
    capital: "Antananarivo",
    currency: "MGA",
    demonym: "malgaches",
    language: "fr",
    color: "rgba(220, 50, 50, 0.09)",
    prices: { "site-pro": 235000, "cyber-plus": 148000, "odoo-cloud": 490000, "serveur-dedie": 280000 },
  },
  // ── Afrique Australe & de l'Est (anglophones) ────────────────────────────────
  za: {
    code: "za",
    name: "Afrique du Sud",
    nameEn: "South Africa",
    flag: "",
    capital: "Johannesburg",
    currency: "ZAR",
    demonym: "sud-africaines",
    demonymEn: "South African",
    language: "en",
    color: "rgba(255, 180, 0, 0.10)",
    prices: { "site-pro": 4500, "cyber-plus": 2800, "odoo-cloud": 9500, "serveur-dedie": 5400 },
  },
  ke: {
    code: "ke",
    name: "Kenya",
    nameEn: "Kenya",
    flag: "",
    capital: "Nairobi",
    currency: "KES",
    demonym: "kenyanes",
    demonymEn: "Kenyan",
    language: "en",
    color: "rgba(180, 30, 30, 0.10)",
    prices: { "site-pro": 32000, "cyber-plus": 20000, "odoo-cloud": 67000, "serveur-dedie": 38000 },
  },
};

export const COUNTRY_CODES = Object.keys(COUNTRIES) as CountryCode[];

const ISO_TO_CODE: Record<string, CountryCode> = {
  SN: "sn", CI: "ci", GA: "ga", CM: "cm", CG: "cg", CD: "cd",
  ML: "ml", BF: "bf", NE: "ne", BJ: "bj", TG: "tg", GN: "gn",
  GW: "gw", GQ: "gq", MR: "mr", MA: "ma", DZ: "dz", TN: "tn",
  LY: "ly", CF: "cf", TD: "td", MG: "mg", DJ: "dj", RW: "rw",
  BI: "bi", ST: "st", ZA: "za", KE: "ke",
};

export function isCountryCode(code: string): code is CountryCode {
  return code in COUNTRIES;
}

export function codeFromIso(iso: string | null | undefined): CountryCode | null {
  if (!iso) return null;
  return ISO_TO_CODE[iso.toUpperCase()] ?? null;
}

