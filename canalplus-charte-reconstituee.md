# Charte graphique reconstituée — canalplusgroup.com/fr

## 1. ADN visuel
- Direction artistique **éditoriale, premium, corporate et cinématographique**.
- Univers presque entièrement **monochrome** : fond noir, texte blanc, gris de soutien, très peu de couleur d’accent.
- Sensation générale : **grand média / luxe sobre / magazine institutionnel**.

## 2. Fondations globales
### Variables de layout
```css
:root {
  --page-padding: 50px;
  --grid-gap: 1.4vw;
  --grid-columns-count: 12;
}
@media (max-width: 899px) {
  :root {
    --page-padding: 20px;
    --grid-gap: 1vw;
    --grid-columns-count: 12;
  }
}
```

### Base globale
```css
html {
  color: #fff;
  font-weight: 700;
  font-style: italic;
  background-color: #000;
  scroll-behavior: smooth;
}
*,:before,:after { box-sizing: border-box; }
* { margin: 0; }
img { display: block; max-width: 100%; }
a, button, select { color: inherit; }
```

## 3. Typographie
### Police principale
Le site utilise une **font custom propriétaire** chargée en `woff2`.

```css
@font-face {
  font-family: 'CanalPlusCustom';
  src: url('https://www.canalplusgroup.com/_next/static/media/9736d76a29e0f522-s.p.woff2') format('woff2');
  font-display: swap;
  font-weight: 700;
}
@font-face {
  font-family: 'CanalPlusCustom';
  src: url('https://www.canalplusgroup.com/_next/static/media/3928ae2952555aef-s.p.woff2') format('woff2');
  font-display: swap;
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: 'CanalPlusCustom';
  src: url('https://www.canalplusgroup.com/_next/static/media/192998a82791dae1-s.p.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
  font-style: italic;
}
```

### Règles typographiques
- La signature visuelle dominante est **italic + bold + uppercase**.
- Le site exploite très souvent des petits labels éditoriaux en capitales.
- Les corps de texte sont rares ; la hiérarchie repose surtout sur **titres massifs** et **micro-labels**.

### Échelle observée
- Labels / CTA micro : `0.625rem` (10px)
- Sur-titres / métadonnées : `0.75rem` (12px)
- Texte courant fort : `1rem` (16px)
- Intertitres : `1.125rem` (18px)
- Titres intermédiaires : `22px`, `24px`, `28px`, `30px`
- Titres majeurs : `35px`, `40px`, `45px`, `55px`
- Hero XXL : `65px`, `80px`, parfois `42px` sur très petit mobile

## 4. Palette couleur
### Palette dominante
```css
:root {
  --cp-black: #000;
  --cp-white: #fff;
  --cp-gray-999: #999;
  --cp-gray-262626: #262626;
  --cp-white-10: hsla(0,0%,100%,.1);
  --cp-white-20: hsla(0,0%,100%,.2);
  --cp-white-30: hsla(0,0%,100%,.3);
  --cp-white-40: hsla(0,0%,100%,.4);
  --cp-white-50: hsla(0,0%,100%,.5);
  --cp-white-60: hsla(0,0%,100%,.6);
}
```

### Usage
- Fond principal : noir plein.
- Texte principal : blanc plein.
- Bordures : blanc transparent ou gris sombre.
- Overlay de navigation : dégradé noir transparent.
- Pas de palette marketing colorée visible dans le système UI principal.

## 5. Grille et composition
### Système de grille
Le site repose sur une **grille 12 colonnes** avec marges latérales calculées et répétées dans presque tous les blocs.

```css
.display-grid {
  display: grid;
  grid-template-columns:
    calc(var(--page-padding) - var(--grid-gap))
    repeat(var(--grid-columns-count), minmax(0, 1fr))
    calc(var(--page-padding) - var(--grid-gap));
  column-gap: var(--grid-gap);
}
```

### Logique de composition
- Très forte utilisation du **plein écran** et des sections généreusement espacées.
- Marges verticales lourdes : souvent `80px`, `100px`, `120px`, `200px`, `280px`.
- Titres souvent placés de `grid-column: 2 / -2` ou `3 / -3`.

## 6. Boutons et liens
### CTA texte souligné animé
```css
.cp-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}
.cp-link__label {
  position: relative;
  font-size: 0.625rem;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2;
  text-transform: uppercase;
  color: #fff;
  padding: 10px 0;
  transition: opacity .25s ease;
}
.cp-link__label::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: 0 100%;
  transition: transform .2s ease;
}
@media (pointer:fine) {
  .cp-link__label:hover::before { transform: scaleX(1); }
}
```

### Bouton circulaire slider
```css
.cp-slider-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 55px;
  height: 55px;
  border: none;
  background: transparent;
  transition: opacity .2s, transform .2s cubic-bezier(.175,.885,.32,1.275);
}
.cp-slider-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid currentColor;
  opacity: .5;
  transition: opacity .2s;
}
@media (pointer:fine) {
  .cp-slider-btn:hover:not(:disabled),
  .cp-slider-btn:focus-visible {
    transform: scale(1.1);
  }
  .cp-slider-btn:hover:not(:disabled)::before,
  .cp-slider-btn:focus-visible::before {
    opacity: 1;
  }
}
```

## 7. Radius, bordures, contours
### Valeurs observées
- `border-radius: 2px` pour mini tags / pastilles.
- `border-radius: 4px` pour cartes et containers sobres.
- `border-radius: 50%` pour curseur / éléments parfaitement ronds.
- `border-radius: 100px` pour bullets allongés et pills.

### Bordures
- Majoritairement `1px solid #222`, `1px solid #fff`, ou `1px solid hsla(0,0%,100%,alpha)`.
- Le contour est un élément fort du design, surtout sur fond noir.

## 8. Navigation
### Header sticky
```css
.cp-nav-wrap {
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  padding-top: 60px;
  transition: transform .4s;
}
.cp-nav-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  backdrop-filter: blur(4px);
  background: linear-gradient(180deg, rgba(0,0,0,.5) 16.15%, transparent);
  z-index: -1;
}
.cp-nav-wrap.is-hidden {
  transform: translateY(-100%);
}
@media (max-width:1120px) {
  .cp-nav-wrap {
    padding: 30px 0 10px;
  }
  .cp-nav-wrap.is-open {
    background: #000;
    height: 100vh;
    overflow-y: auto;
  }
}
```

## 9. Animation et motion
### Courbes et durées observées
- `0.2s ease`
- `0.25s ease`
- `0.3s ease`
- `0.4s ease`
- `0.8s` pour certaines images hover reveal
- ressort / overshoot : `cubic-bezier(.175,.885,.32,1.275)`

### Effets dominants
- Underline reveal au hover.
- Scale léger au hover sur boutons circulaires.
- Opacity reveal sur visuels.
- Translation du header sticky.
- Blur de fond pour la navigation.

## 10. Curseur custom
```css
.cp-cursor {
  position: fixed;
  top: -70px;
  left: -70px;
  pointer-events: none;
}
.cp-cursor__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  color: #000;
  font-size: .75rem;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  transition-duration: .3s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(.175,.885,.32,1.275);
}
```

## 11. Recommandation fidèle pour reproduction
### Tokens minimaux à reprendre
```css
:root {
  --bg: #000;
  --text: #fff;
  --text-muted: #999;
  --border-strong: #fff;
  --border-soft: hsla(0,0%,100%,.3);
  --border-faint: hsla(0,0%,100%,.2);
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-pill: 100px;
  --page-padding: 50px;
  --page-padding-mobile: 20px;
  --grid-gap: 1.4vw;
  --grid-gap-mobile: 1vw;
  --transition-fast: .2s ease;
  --transition-ui: .25s ease;
  --transition-mid: .4s ease;
  --transition-bounce: .2s cubic-bezier(.175,.885,.32,1.275);
}
```

### Ce qu’il faut respecter pour que ça ressemble vraiment au site
1. Fond noir total + texte blanc net.
2. Font italique très présente, souvent en capitales.
3. Grille 12 colonnes avec gros respirations latérales.
4. Très peu de couleurs ; laisser la photo et le contenu créer la tension visuelle.
5. Boutons sobres, souvent outline, jamais “bubble UI”.
6. Hover discrets mais précis.
7. Titres énormes, éditoriaux, avec rythme de magazine.
