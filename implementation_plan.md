# Plan d'implémentation : Animation "Shine" (Lueur) sur les boutons

Ce plan décrit l'ajout d'une animation de lueur périodique (Glint/Shine) sur tous les boutons du site (`cp-solid-btn` et `cp-outline-btn`) pour attirer l'attention des utilisateurs et augmenter le taux de conversion.

## Objectif
Ajouter un effet visuel premium et discret qui simule un reflet de lumière traversant le bouton toutes les 4 secondes.

## Changements Proposés

### [CSS] Modification de `globals.css`

#### [MODIFY] [globals.css](file:///c:/Users/david/Downloads/Aizen%20TM/src/app/globals.css)

1.  **Définition des Keyframes** : Créer une animation `button-shine` qui déplace un dégradé de gauche à droite.
2.  **Styles Partagés** : 
    - Ajouter `position: relative` et `overflow: hidden` aux classes de boutons si ce n'est pas déjà le cas.
    - Créer un pseudo-élément `::after` pour les classes `.cp-solid-btn` et `.cp-outline-btn`.
3.  **Configuration de l'effet** :
    - Le `::after` sera un rectangle incliné avec un dégradé transparent -> blanc (ou beige) -> transparent.
    - L'animation tournera en boucle avec un délai (`infinite`).
    - L'opacité sera ajustée selon le mode (sombre/clair) pour rester subtile.

## Détails Techniques de l'Animation
- **Angle** : 45 degrés pour un look dynamique.
- **Vitesse** : 1.5s pour la traversée, avec une pause de 2.5s (total cycle 4s).
- **Couleur** : `rgba(255, 255, 255, 0.4)` en mode sombre, et une version adaptée en mode clair.

## Plan de Vérification

### Vérification Manuelle
- [ ] Vérifier que l'animation fonctionne sur le bouton "Audit gratuit" (Hero).
- [ ] Vérifier que l'animation fonctionne sur les boutons des cartes de prix.
- [ ] Tester le rendu en **Mode Sombre** (reflet blanc sur bouton blanc ou noir).
- [ ] Tester le rendu en **Mode Clair** (reflet discret sur bouton noir ou beige).
- [ ] S'assurer que l'animation ne gêne pas la lisibilité du texte pendant son passage.
