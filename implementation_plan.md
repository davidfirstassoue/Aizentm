# Plan d'implémentation : Formulaire de Capture avant Chat IA

Ce plan détaille l'ajout d'une étape de qualification (nom, entreprise, email, téléphone) avant de permettre à l'utilisateur de communiquer avec l'agent IA, qui gérera désormais aussi les rendez-vous.

## Proposed Changes

### 1. Composants UI

#### [NEW] [src/components/ChatGateForm.tsx](file:///c:/Users/david/Downloads/Aizentm-main/Aizentm-main/src/components/ChatGateForm.tsx)
- Créer un formulaire premium avec les champs :
    - Nom et prénom complet
    - Entreprise
    - Email
    - Numéro de téléphone
- Validation des champs (requis, format email).
- Design cinématique assorti à l'identité visuelle d'AIZEN.
- Fonction de sauvegarde dans le `localStorage` pour éviter de redemander les infos à chaque session.

#### [MODIFY] [src/components/ContactHub.tsx](file:///c:/Users/david/Downloads/Aizentm-main/Aizentm-main/src/components/ContactHub.tsx)
- Ajouter le bouton "Prendre rendez-vous" sur la carte 02.
- Faire pointer ce bouton vers `/chat?source=booking`.

### 2. Page Chat

#### [MODIFY] [src/app/chat/page.tsx](file:///c:/Users/david/Downloads/Aizentm-main/Aizentm-main/src/app/chat/page.tsx)
- Ajouter une logique de conditionnement :
    - Si les infos de l'utilisateur ne sont pas connues (pas en session/localStorage), afficher `ChatGateForm`.
    - Une fois validé, afficher l'interface de chat existante.
- Optionnel : Envoyer les infos du lead à n8n lors du premier message pour que l'agent sache à qui il parle.

### 3. Libs & Hooks

#### [MODIFY] [src/hooks/useChat.ts](file:///c:/Users/david/Downloads/Aizentm-main/Aizentm-main/src/hooks/useChat.ts)
- Étendre le hook pour accepter des métadonnées (nom, entreprise, etc.) lors de l'envoi du premier message ou lors de l'initialisation de la session.

## Verification Plan

### Automated Verification
- Tester que la page `/chat` affiche bien le formulaire par défaut.
- Vérifier que le bouton "Envoyer" du formulaire n'est actif que si les champs sont valides.
- Vérifier que l'interface de chat apparaît après la validation.

### Manual Verification
- Saisir des informations de test et vérifier qu'elles sont conservées dans le localStorage.
- Vérifier que le bouton "Rendez-vous" sur la home redirige correctement vers le chat.
