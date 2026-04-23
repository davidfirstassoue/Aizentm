# navplan : Navigation Contextuelle Dynamique

Ce plan décrit comment transformer la barre de navigation pour qu'elle affiche les liens pertinents et ordonnés en fonction de la page où se trouve l'utilisateur.

## Objectifs
1.  **Contextualisation** : Afficher des liens différents sur la Home et sur les pages Pays.
2.  **Cohérence de l'ordre** : Les liens doivent suivre l'ordre d'apparition des sections dans la page.
3.  **Ancrage Précis** : S'assurer que chaque section cible possède l'ID correspondant.

## Changements Proposés

### 1. [Component] Mise à jour de `Navbar.tsx`
#### [MODIFY] [Navbar.tsx](file:///c:/Users/david/Downloads/Aizen%20TM/src/components/Navbar.tsx)
- Importer `usePathname` de `next/navigation`.
- Définir une logique de détection :
    - `isHome = pathname === "/" || pathname === "/en"` (à adapter selon les routes).
    - `isCountryPage = pathname.length > 3`.
- Créer deux tableaux de liens :
    - **Links Home** : `Expertise (#expertise)`, `Régions (#map)`, `Contact (#contact)`.
    - **Links Pays** : `Expertise (#expertise)`, `Tarifs (#pricing)`, `Contact (#contact)`.
- Rendre la liste des liens dynamique via un `.map()`.

### 2. [Component] Ajout des IDs de sections
#### [MODIFY] [WhyAizen.tsx](file:///c:/Users/david/Downloads/Aizen%20TM/src/components/WhyAizen.tsx)
- Ajouter `id="expertise"` à la balise `<section>`.

### 3. [Logic] Internationalisation des labels
- Les labels des liens (Expertise, Régions, Tarifs, Contact) devront être récupérés via l'objet `copy` pour supporter le français et l'anglais.

## Plan de Vérification

### Vérification Manuelle
- [ ] Sur la Home : Vérifier que les liens sont Expertise, Régions, Contact.
- [ ] Sur une page Pays (ex: Maroc) : Vérifier que les liens sont Expertise, Tarifs, Contact.
- [ ] Tester que le clic sur "Tarifs" mène bien à la section des prix de la page pays.
- [ ] Vérifier que les liens fonctionnent toujours après avoir scrollé.

## Question Ouverte
- Souhaitez-vous inclure d'autres sections comme "Agents" ou "FAQ" dans la navbar, ou préfère-t-on garder une navigation minimaliste à 3 liens ? (Je recommande 3 liens pour la clarté cinématique).
