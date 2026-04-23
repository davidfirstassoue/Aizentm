# heroplan : Refonte de la Hiérarchie du Hero Pays

Ce plan vise à supprimer l'effet de "déjà-vu" en inversant la hiérarchie visuelle sur les pages pays. La capitale devient l'élément central et le plus massif de la page.

## Objectifs
1.  **Inversion de Hiérarchie** : Faire de la Capitale le titre principal (`h1`) avec le style `text-hero`.
2.  **Réduction Marketing** : Passer la phrase "Gagnez 15h par semaine..." en texte secondaire (`text-title-lg` ou équivalent).
3.  **Accentuation Visuelle** : Maintenir le halo (Glow) coloré pour renforcer l'identité locale.

## Changements Proposés

### 1. [lib] Données Pays
#### [MODIFY] [countries.ts](file:///c:/Users/david/Downloads/Aizen%20TM/src/lib/countries.ts)
- Ajouter `color: string` pour chaque pays (ex: `rgba(255, 215, 0, 0.1)` pour l'or, `rgba(255, 0, 0, 0.08)` pour le Maroc, etc.).

### 2. [Component] Refonte de `src/app/[country]/page.tsx`
#### [MODIFY] [page.tsx](file:///c:/Users/david/Downloads/Aizen%20TM/src/app/%5Bcountry%5D/page.tsx)

**Ancienne structure :**
- Petit label : `STUDIO IA · VILLE`
- Grand Titre : `GAGNEZ 15H...`

**Nouvelle structure :**
- **Eyebrow (Petit)** : `STUDIO IA` en doré (`--primary`).
- **Grand Titre (Masque Hero)** : `[CAPITALE]` (ex: LIBREVILLE) en très grand.
- **Ligne de Promesse (Moyenne)** : "Gagnez 15h par semaine. Sans recruter." juste en dessous du nom de la ville.
- **Background Glow** : Un halo coloré centré derrière le nom de la ville.

### 3. [CSS] Ajout de styles de Glow (si besoin)
#### [MODIFY] [globals.css](file:///c:/Users/david/Downloads/Aizen%20TM/src/app/globals.css)
- Ajouter une classe `.hero-glow` pour gérer le halo flou de manière propre.

## Plan de Vérification

### Vérification Visuelle
- [ ] Confirmer que sur la Home, le titre est toujours la promesse marketing.
- [ ] Confirmer que sur la page Gabon, "LIBREVILLE" est le mot le plus gros à l'écran.
- [ ] Vérifier que le contraste reste optimal.

## Question Ouverte
- Pour les pays avec des noms de capitale longs (ex: Ouagadougou, Antananarivo), doit-on ajuster dynamiquement la taille du texte pour éviter qu'il ne déborde sur mobile ? (Je prévois un `text-hero` flexible avec `clamp`).
