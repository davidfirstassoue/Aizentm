# Charte Graphique & Structurelle - Aizen

Ce document définit l'identité visuelle et l'organisation du site vitrine d'**Aizen**. Il fusionne l'expertise structurelle de *Hodi.host* avec l'ADN visuel et technique de *Canal+*.

## 1. Analyse de l'Inspiration (Hodi.host)

### A. Page d'Accueil (Navigation Hub)
L'image de la page d'accueil présente une structure "Hub" centrée sur le continent africain :
*   **En-tête** : Logo central avec un slogan clair.
*   **Section Hero** : Image de fond sombre, texte blanc à fort contraste. Navigation intégrée sous le titre.
*   **Élément Central** : Une carte de l'Afrique stylisée, servant de point d'ancrage visuel et interactif.
*   **Actions de Conversion** : Trois cartes distinctes en bas de page pour le contact (Chat, RDV, Email).

### B. Page Régionale (Exemple Congo-Brazzaville)
*   **Hero Regional** : Titre personnalisé et bouton d'action immédiat.
*   **Grille de Services (Pricing)** : Grille à 4 colonnes (Site Pro, Cyber+, Odoo Cloud, Serveur Dédié).
*   **Section Inclusions** : Bloc large avec dégradé listant les avantages ("+ pratique", "+ sécurisé", etc.).
*   **Preuve Sociale** : Section "Aizen l'innovation" sous forme de grille d'images (style éditorial).

## 2. ADN Visuel & Technique (Canal+ Reconstitué)

### Fondations Globales (CSS Tokens)
```css
:root {
  --bg: #000000;
  --text: #FFFFFF;
  --text-muted: #999999;
  --border-strong: #FFFFFF;
  --border-soft: hsla(0,0%,100%,.3);
  --border-faint: hsla(0,0%,100%,.2);
  
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-pill: 100px;
  
  --page-padding: 50px;
  --grid-gap: 1.4vw;
  --grid-columns-count: 12;
}
```

### Typographie (Signature Aizen)
*   **Police Unique** : **Montserrat** (Google Fonts).
*   **Règles de style (Style Canal+)** :
    *   Signature dominante : **Italic + Bold + Uppercase**.
    *   Hiérarchie : Titres massifs (65px - 80px) vs Micro-labels éditoriaux (10px).
    *   L'italique est systématique pour donner une sensation cinématographique et dynamique.

### Composition & Grille
*   **Logique** : Grille de 12 colonnes avec des marges latérales importantes (`--page-padding`).
*   **Respiration** : Utilisation de marges verticales lourdes (100px à 280px) pour aérer le contenu.
*   **Boutons** : Style "Outline" sobre, pas de "bubble UI". Animation d'underlining au survol (`scaleX`).

### Motion Design
*   Courbes : `cubic-bezier(.175,.885,.32,1.275)` pour un effet de ressort discret.
*   Transitions : `0.2s` à `0.4s` pour les interactions UI standard.
*   Effets : Blur de fond (`backdrop-filter`) sur la navigation fixe.

## 3. Structure Logique & Parcours Utilisateur

### Étape 1 : Le "Landing" (La Bannière)
*   **Visuel** : Image immersive haute résolution.
*   **Texte** : Le nom "Aizen" en Montserrat Bold/Italic, positionné de manière imposante.

### Étape 2 : Le "Swipe" (La Transition)
*   Transition fluide (scroll/swipe) vers la **Carte de l'Afrique**.

### Étape 3 : L'Interaction Régionale (La Carte)
*   **Action** : Carte interactive SVG. Clic sur un pays francophone = redirection vers la route locale (ex: `/ga/`).

### Étape 4 : La Page Locale (Conversion)
*   Contenu personnalisé pour le pays (Congo, Sénégal, etc.).
*   Prix affichés en monnaie locale (CFA).
*   Structure héritée du modèle Congo-Brazzaville (Grille 4 cols, Inclusions, Showcase).

---

## 4. Mode Dynamique
*   **Jour/Nuit** : Inversion complète de la palette (Le fond blanc devient noir et vice versa) à la tombée de la nuit ou par switch manuel.
