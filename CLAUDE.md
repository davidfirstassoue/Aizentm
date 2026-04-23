# Projet Aizen — Documentation Claude

@AGENTS.md

## Stack

- **Next.js 16.2.4** (App Router, Turbopack) — voir `AGENTS.md` pour les breaking changes
- **React 19.2** / **TypeScript 5**
- **Tailwind CSS v4** avec `@tailwindcss/postcss` — syntaxe `@import "tailwindcss"`, `@theme`, `@utility` (pas `@tailwind base/components/utilities`)
- **Framer Motion 12** — animations via `<Reveal>`
- **Lucide React 1.8**

## Breaking changes Next.js 16 confirmés

| Ancienne convention | Nouvelle convention |
| --- | --- |
| `middleware.ts` | `proxy.ts` — export nommé `proxy` (pas `middleware`) |
| `params` synchrones | `params: Promise<{...}>` — toujours `await params` dans Server Components |

Lire `node_modules/next/dist/docs/` avant tout ajout de fonctionnalité Next.

## Architecture des fichiers

```text
src/
├── app/
│   ├── globals.css          # Tokens Canal+ (CSS vars), Tailwind v4
│   ├── layout.tsx           # Navbar + Footer + GeoBanner + script anti-flash thème
│   ├── page.tsx             # Page d'accueil (hero + AfricaMap + hub contact)
│   └── [country]/
│       └── page.tsx         # Template pays (generateStaticParams, generateMetadata)
├── components/
│   ├── AfricaMap.tsx        # SVG interactif — pays cibles cliquables
│   ├── africa-paths.ts      # Données SVG brutes (~47 pays africains)
│   ├── CpLink.tsx           # Lien avec underline animé scaleX (style Canal+)
│   ├── Footer.tsx
│   ├── GeoBanner.tsx        # Bannière "version régionale détectée" (client)
│   ├── Navbar.tsx           # Sticky + backdrop-blur, ThemeToggle intégré
│   ├── Reveal.tsx           # Wrapper Framer Motion fade+slide au scroll
│   └── ThemeToggle.tsx      # Toggle dark/light, localStorage
├── lib/
│   └── countries.ts         # Source de vérité : codes pays, devises, tarifs
└── proxy.ts                 # Détection géo → cookie (≠ middleware.ts)
```

## Design System (Noir & Blanc Premium)

Palette de couleurs — Toujours utiliser les variables CSS :

```css
--bg: #18181A;           /* Noir charcoal chaud (Sombre par défaut) */
--text: #FFFFFF;         /* Blanc pur */
--primary: #FFFFFF;      /* Couleur d'action */
--border-soft: rgba(255, 255, 255, 0.18);
```

Thème clair (Beige) : classe `.theme-light` sur `<html>`.

- `--bg: #F5F0E8` (Beige doux)
- `--text: #18181A` (Noir charcoal)

Branding :

- Logos : `public/logo_noir.png` et `public/logo_blanc.png`.
- Transition : Gérée via CSS dans `Logo.tsx` pour éviter tout clignotement.

Classes utilitaires clés :

- `.text-cinematic` — bold uppercase (sans italique)
- `.text-hero` — clamp(42px, 8vw, 80px)
- `.text-title-lg` — clamp(35px, 5vw, 55px)
- `.display-grid` — grille 12 colonnes avec marges latérales (`--page-padding`)
- `.cp-link` + `.cp-link__label` — lien avec soulignement animé (Terracotta)
- `.cp-outline-btn` — bouton sobre (High contrast)

Thème clair : classe `.theme-light` sur `<html>`, invertit la palette complète.

## Pays supportés

28 pays **cibles** (routes actives, carte interactive) — francophones + Afrique du Sud + Kenya.

Données dans `src/lib/countries.ts` — chaque pays expose : `code`, `name`, `flag`, `capital`, `currency`, `demonym`, `prices` (4 packs).

Routes pré-rendues statiquement via `generateStaticParams` sur toutes les entrées de `COUNTRY_CODES`.

## Ajouter un pays

1. Ajouter l'entrée dans `COUNTRIES` dans `src/lib/countries.ts`
2. Ajouter le type dans `CountryCode`
3. Ajouter le path SVG dans `src/components/africa-paths.ts`
4. Si interactif : ajouter l'ISO (majuscules) dans `TARGET_ISO`

## Image hero

- **Active** — `public/hero.jpg` présent, utilisé dans `src/app/page.tsx` via `<Image fill priority />`.

- Overlay `bg-gradient-to-t from-black/90 via-black/40 to-black/10` pour la lisibilité du texte.
- Pour remplacer l'image : déposer un nouveau fichier dans `public/hero.jpg`.

## Curseur personnalisé

Composant `src/components/CustomCursor.tsx` ("use client") :

- Cercle `32×32` qui suit la souris via `mousemove` sur `document`
- Se transforme (`scale(1.8) + mix-blend-mode: difference`) au survol des éléments interactifs (`a, button, [role="link"]`)
- Monté dans `src/app/layout.tsx` au-dessus du reste du contenu

## Commandes

```bash
npm run dev      # Développement (Turbopack)
npm run build    # Build production
npm run lint
```

## À faire (Action Requis)

- [ ] **Formulaire de contact** : Remplacer `YOUR_FORM_ID` par votre identifiant Formspree réel dans `src/components/ContactHub.tsx` pour activer l'envoi des emails.

