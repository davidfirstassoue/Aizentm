import type { Currency } from "./countries";

export type Lang = "fr" | "en";

export type SectorKey =
  | "supermarche"
  | "rh"
  | "avocats"
  | "pme"
  | "immobilier"
  | "comptable"
  | "change"
  | "ecommerce"
  | "ong"
  | "ambassade"
  | "bienetre"
  | "coiffure"
  | "pub"
  | "influenceur"
  | "medecin"
  | "hotel"
  | "transport"
  | "ecole"
  | "garage";

type AgentCard = {
  problem: string;
  agent: string;
  result: string;
  title: string;
};

type SectorDetailed = {
  label: string;
  cards: AgentCard[];
};

type SectorQuick = {
  label: string;
  items: string[];
};

type Sectors = {
  supermarche: SectorDetailed;
  rh: SectorDetailed;
  avocats: SectorDetailed;
  pme: SectorQuick;
  immobilier: SectorDetailed;
  comptable: SectorDetailed;
  change: SectorDetailed;
  ecommerce: SectorDetailed;
  ong: SectorDetailed;
  ambassade: SectorDetailed;
  bienetre: SectorDetailed;
  coiffure: SectorDetailed;
  pub: SectorDetailed;
  influenceur: SectorDetailed;
  medecin: SectorDetailed;
  hotel: SectorDetailed;
  transport: SectorDetailed;
  ecole: SectorDetailed;
  garage: SectorDetailed;
};

export type Translations = {
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  countryHero: {
    eyebrowStudio: string;
    titleLines: [string, string];
    subtitle: (countryWithPrep: string, capital: string, isMorocco: boolean) => string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whyAizen: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; body: string }>;
  };
  stats: {
    eyebrow: string;
    title: string;
    items: Array<{ figure: string; desc: string; linkToAizen: string }>;
  };
  agents: {
    eyebrow: string;
    title: string;
    sectorsOrder: SectorKey[];
    sectors: Sectors;
    labels: { problem: string; agent: string; result: string };
    cta: string;
    ctaLink: string;
  };
  included: {
    eyebrow: string;
    title: [string, string];
    points: string[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    valueProp: string;
    packLabel: string;
    startCta: string;
    footerText: (currency: Currency) => string;
    finalCta: string;
  };
  ctaBlock: {
    eyebrow: string;
    title: string;
    stats: { prefix: string; value: number; suffix: string; label: string }[];
    sectorsLabel: string;
    sectors: { icon: string; name: string }[];
    quote: string;
    signature: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; desc: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  misc: {
    backHome: string;
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// FRANÇAIS
// ─────────────────────────────────────────────────────────────────────────────
const fr: Translations = {
  hero: {
    eyebrow: "Studio · Automatisation IA & Web",
    titleLines: ["Gagnez 15h par semaine.", "Sans recruter."],
    subtitle:
      "AIZEN automatise les tâches répétitives de votre entreprise — devis, emails, suivi client — livré en moins de 2 semaines.",
    ctaPrimary: "Audit gratuit →",
    ctaSecondary: "Voir les forfaits",
  },
  countryHero: {
    eyebrowStudio: "STUDIO IA",
    titleLines: ["GAGNEZ 15H PAR SEMAINE.", "SANS RECRUTER."],
    subtitle: (countryWithPrep, capital, isMorocco) =>
      `AIZEN automatise les tâches répétitives des PME ${countryWithPrep} — devis, emails, suivi client — livré en moins de 2 semaines. Basé à ${capital}, disponible ${isMorocco ? "dans tout le Royaume" : "partout " + countryWithPrep}.`,
    ctaPrimary: "Audit gratuit →",
    ctaSecondary: "Voir les forfaits",
  },
  whyAizen: {
    eyebrow: "Pourquoi Aizen ?",
    title: "Trois raisons qui changent tout.",
    cards: [
      {
        title: "Chaque heure passée sur une tâche répétitive, c'est une heure que votre entreprise paie sans retour sur investissement.",
        body: "Saisie, relances, reporting, gestion des emails — chaque heure perdue sur ces tâches répétitives, c'est de l'argent qui part en fumée. Un agent AIZEN les absorbe entièrement, pour que vos équipes se concentrent sur ce qui génère vraiment du chiffre.",
      },
      {
        title: "Doublez votre chiffre d'affaires sans doubler vos effectifs.",
        body: "Vos concurrents recrutent pour scaler. Vous, vous automatisez. Un directeur qui nous fait confiance traite aujourd'hui 3× plus de clients qu'il y a 6 mois — avec exactement la même équipe.",
      },
      {
        title: "Vos concurrents ont un site. Vous, vous aurez une machine.",
        body: "Un site AIZEN ne fait pas que vous afficher en ligne. Il qualifie vos prospects, répond à leurs questions, prend leurs rendez-vous et génère des devis — pendant que vous dormez. C'est la différence entre une vitrine et un commercial qui ne s'arrête jamais.",
      },
    ],
  },
  stats: {
    eyebrow: "Chaque heure perdue est de l'argent perdu",
    title: "La digitalisation n'est plus un luxe.",
    items: [
      {
        figure: "12h / semaine",
        desc: "Les entreprises perdent en moyenne 12h/semaine sur des tâches qui peuvent être automatisées.",
        linkToAizen: "Aizen récupère ces heures dès le premier mois.",
      },
      {
        figure: "3 ×",
        desc: "Une entreprise digitalisée traite 3× plus de clients avec la même équipe.",
        linkToAizen: "Vous scalez sans embaucher.",
      },
      {
        figure: "2 jours / semaine",
        desc: "Nos clients récupèrent en moyenne 2 jours de travail par semaine dès le premier mois.",
        linkToAizen: "C'est autant de temps pour la stratégie, pas l'admin.",
      },
    ],
  },
  agents: {
    eyebrow: "Vos agents IA au travail",
    title: "Du concret. Par secteur.",
    sectorsOrder: [
      "supermarche", "rh", "avocats", "pme",
      "immobilier", "comptable", "change", "ecommerce",
      "ong", "ambassade", "bienetre", "coiffure",
      "pub", "influenceur", "medecin", "hotel",
      "transport", "ecole", "garage",
    ],
    labels: { problem: "Problème", agent: "Agent IA", result: "Résultat" },
    sectors: {
      supermarche: {
        label: "Supermarché",
        cards: [
          {
            title: "Agent IA · Stock & Commandes",
            problem:
              "Un supermarché gère 3 000+ références. Les ruptures coûtent des ventes, les surplus coûtent de l'espace. Un gestionnaire passe 6h/jour à vérifier les niveaux.",
            agent:
              "Surveille les stocks en temps réel, prédit les besoins selon les tendances de vente, génère automatiquement les bons de commande fournisseurs, alerte en cas d'anomalie.",
            result:
              "Zéro rupture critique, −70% de temps de gestion stock, commandes fournisseurs envoyées sans intervention humaine.",
          },
          {
            title: "Agent IA · Caisse & Fidélité",
            problem:
              "Suivre les clients fidèles, gérer les promotions personnalisées et analyser quels produits se vendent mal est impossible manuellement à grande échelle.",
            agent:
              "Analyse les habitudes d'achat, envoie des offres personnalisées par WhatsApp/SMS, identifie les produits à rotation lente et suggère des promotions ciblées.",
            result:
              "+25% de retour client, liquidation stock optimisée, zéro action marketing manuelle.",
          },
        ],
      },
      rh: {
        label: "Ressources Humaines",
        cards: [
          {
            title: "Agent IA · Recrutement",
            problem:
              "Une offre d'emploi reçoit 200+ CVs. Les lire, trier, répondre à chaque candidat prend 2 semaines à un RH à temps plein.",
            agent:
              "Lit et score tous les CVs automatiquement selon vos critères, envoie des emails de réponse personnalisés, planifie les entretiens dans le calendrier, met à jour le tableau de suivi en temps réel.",
            result:
              "200 CVs traités en 2 heures au lieu de 2 semaines, aucun candidat sans réponse, RH libéré pour les entretiens.",
          },
          {
            title: "Agent IA · Paie & Absences",
            problem:
              "Gérer les congés, absences, heures sup de 50+ employés sur Excel génère des erreurs, des oublis et des conflits RH chaque mois.",
            agent:
              "Centralise toutes les demandes de congés, vérifie les soldes automatiquement, notifie les managers, génère le rapport de paie mensuel sans saisie manuelle.",
            result:
              "Clôture de paie en 1 jour au lieu de 1 semaine, zéro erreur de calcul, conflits RH réduits de 80%.",
          },
        ],
      },
      avocats: {
        label: "Cabinet d'avocats",
        cards: [
          {
            title: "Agent IA · Dossiers & Délais",
            problem:
              "Un cabinet gère 150+ dossiers actifs. Surveiller les délais de procédure, les dates d'audience, les relances clients — une erreur peut coûter un procès.",
            agent:
              "Surveille tous les délais légaux, envoie des alertes automatiques aux avocats J-7 et J-1, rappelle les clients pour les documents manquants, met à jour le statut des dossiers.",
            result:
              "Zéro délai manqué, clients toujours informés, avocats concentrés sur le droit pas sur l'administratif.",
          },
          {
            title: "Agent IA · Facturation & Relances",
            problem:
              "Les honoraires non facturés ou les factures impayées représentent en moyenne 20% du chiffre d'affaires perdu dans un cabinet non digitalisé.",
            agent:
              "Génère les factures automatiquement à la clôture de chaque étape du dossier, envoie les relances de paiement par email avec escalade progressive, génère le rapport mensuel des impayés.",
            result:
              "+20% de CA récupéré, zéro facture oubliée, relances sans intervention humaine.",
          },
        ],
      },
      pme: {
        label: "PME générale",
        items: [
          "Répondre aux emails clients → agent répond en 2 min, vous validez en 10 min (−3h/jour)",
          "Créer un devis → généré automatiquement en 2 minutes (−45 min par client)",
          "Suivi clients sur Excel → CRM Odoo automatisé, zéro relance oubliée",
        ],
      },
      immobilier: {
        label: "Agence Immobilière",
        cards: [
          {
            title: "Agent IA · Leads & Visites",
            problem:
              "Une agence reçoit 50+ demandes/semaine par WhatsApp, email, Instagram. Qualifier chaque prospect, planifier les visites, relancer les indécis et gérer les dossiers mobilise 100% du temps des agents — au détriment de la négociation et de la signature.",
            agent:
              "Qualifie automatiquement chaque lead entrant (budget, type de bien, zone), planifie les visites dans le calendrier des agents, envoie les fiches des biens par WhatsApp, relance les prospects silencieux après 3 jours, prépare les dossiers de candidature locataire.",
            result:
              "Aucun lead non traité, agents concentrés uniquement sur les visites et signatures, temps de traitement d'un dossier réduit de 60%.",
          },
          {
            title: "Agent Orchestrateur · Pipeline Vente & Analyse Marché",
            problem:
              "L'agence ne sait pas quels biens se vendent le mieux, à quel prix, dans quel délai. Elle publie manuellement sur 5 portails, relance sans stratégie, et perd des deals faute de suivi structuré.",
            agent:
              "Sous-agent Scraping : scrape Jumia House, Expat-Dakar et les concurrents toutes les 6h pour alimenter une base de prix en temps réel. Sous-agent Valorisation : compare chaque nouveau bien avec la base, génère une estimation PDF envoyée au propriétaire via Gmail. Sous-agent Publication : publie automatiquement sur tous les portails avec une description marketing optimisée par IA. Sous-agent Scoring : score chaque lead entrant (budget, urgence, sérieux), crée la fiche dans Airtable/Notion et assigne à un agent humain. Sous-agent Suivi : déclenche une séquence de 5 messages WhatsApp/email sur 14 jours pour les prospects silencieux.",
            result:
              "Pipeline 100% automatisé de la captation au compromis, prix toujours alignés sur le marché, aucun lead jamais perdu.",
          },
        ],
      },
      comptable: {
        label: "Cabinet Comptable",
        cards: [
          {
            title: "Agent IA · Saisie & Déclarations",
            problem:
              "Un cabinet comptable gère 60+ dossiers clients. La saisie des factures, le rapprochement bancaire et les rappels pour documents manquants mobilisent 70% du temps des collaborateurs — du temps qui devrait aller au conseil.",
            agent:
              "Extrait automatiquement les données des factures (OCR + IA), rapproche les écritures bancaires, relance les clients pour les pièces manquantes, génère les brouillons de déclarations fiscales mensuelles.",
            result:
              "Saisie réduite de 80%, clôture mensuelle en 2 jours au lieu de 2 semaines, collaborateurs recentrés sur le conseil à valeur ajoutée.",
          },
          {
            title: "Agent Orchestrateur · Clôture, Conformité & Conseil Proactif",
            problem:
              "Le cabinet perd des semaines sur des tâches mécaniques alors que les clients attendent des conseils stratégiques. Les deadlines fiscales sont stressantes et les erreurs humaines coûteuses.",
            agent:
              "Sous-agent OCR & Extraction : lit tous les emails et pièces jointes Gmail, extrait les factures et relevés, classe dans les bons dossiers clients. Sous-agent Rapprochement : connecté à l'API bancaire, rapproche chaque écriture avec les factures extraites, signale les écarts dans un Google Sheet partagé avec le client. Sous-agent Conformité : surveille les deadlines fiscales de chaque client, envoie une alerte J-15 au client et au comptable, génère le brouillon de déclaration. Sous-agent Analyse : chaque mois, génère un rapport de performance (CA, marges, évolution N-1) avec 3 recommandations concrètes en PDF envoyé par Gmail. Sous-agent Relances : suit les factures impayées, envoie les relances avec escalade progressive (email → WhatsApp → courrier formel).",
            result:
              "Clôture mensuelle en 4h au lieu de 4 jours, zéro deadline fiscale manquée, clients qui reçoivent du conseil sans que le comptable lève le petit doigt.",
          },
        ],
      },
      change: {
        label: "Bureau de Change",
        cards: [
          {
            title: "Agent IA · Surveillance & Alertes Taux",
            problem:
              "Un bureau de change doit surveiller en permanence les fluctuations des taux EUR/XAF, USD/MAD, GBP/NGN, etc. Une décision de change mal timée sur un gros volume peut coûter des millions. Informer les clients des bons moments pour échanger est impossible manuellement.",
            agent:
              "Surveille les taux en temps réel 24h/24, alerte automatiquement les clients VIP par WhatsApp quand leur taux cible est atteint, génère un rapport quotidien des tendances, signale les anomalies suspectes (fraude potentielle).",
            result:
              "Clients fidélisés grâce aux alertes personnalisées, zéro opportunité de change manquée, détection fraude en temps réel.",
          },
          {
            title: "Agent Orchestrateur · KYC, Conformité AML & Reporting Réglementaire",
            problem:
              "Un bureau de change opère sur 8+ devises, doit respecter les obligations KYC/AML, signaler les transactions suspectes aux autorités et informer ses clients VIP — le tout simultanément.",
            agent:
              "Sous-agent Market Watch : scrape les taux sur 5 sources (XE, OANDA, banques locales), calcule le spread optimal, met à jour les taux affichés sur le site et les écrans. Sous-agent Alertes Clients : chaque client VIP définit ses seuils → WhatsApp personnalisé quand le taux cible est atteint avec lien de réservation direct. Sous-agent KYC : à chaque transaction au-dessus du seuil réglementaire, collecte les documents d'identité, vérifie la validité, crée le dossier. Sous-agent AML : analyse les patterns de transactions, détecte les comportements suspects (mêmes montants répétés, fractionnement), génère les rapports de déclaration de soupçon. Sous-agent Reporting : génère le rapport réglementaire mensuel conforme aux exigences de la banque centrale.",
            result:
              "Conformité réglementaire garantie sans juriste dédié, clients VIP servis en temps réel, aucune opportunité de change manquée.",
          },
        ],
      },
      ecommerce: {
        label: "E-commerce",
        cards: [
          {
            title: "Agent IA · Commandes, SAV & Abandons de Panier",
            problem:
              "Une boutique en ligne reçoit 100+ commandes/jour. Gérer les confirmations, les retards de livraison, les réclamations SAV, les remboursements et les relances de paniers abandonnés est impossible sans une équipe dédiée.",
            agent:
              "Confirme chaque commande automatiquement, envoie le tracking en temps réel, gère les demandes de retour/remboursement, répond aux questions fréquentes du SAV, relance les paniers abandonnés avec un message personnalisé et un code promo.",
            result:
              "SAV géré à 80% sans intervention humaine, taux de récupération de paniers abandonnés +25%, expérience client irréprochable à tout volume.",
          },
          {
            title: "Agent Orchestrateur · Pricing Dynamique, Stocks & Rétention",
            problem:
              "La boutique concurrence des géants avec une équipe réduite. Les prix sont rarement optimaux, les ruptures de stock font fuir les clients, et la relance après achat est inexistante.",
            agent:
              "Sous-agent Competitor Pricing : scrape les prix des concurrents toutes les 4h, ajuste automatiquement les prix selon la stratégie définie (marge minimum ou position vs concurrent). Sous-agent Stock Intelligence : analyse la vélocité de vente par SKU, prédit les ruptures 2 semaines à l'avance, génère les bons de commande fournisseur. Sous-agent Post-Purchase : séquence automatisée après chaque achat — remerciement J+0, demande avis J+3, produit complémentaire J+7, offre fidélité J+30. Sous-agent SAV Intelligent : classe les tickets par priorité, résout automatiquement les cas simples (remboursement, renvoi), escalade les cas complexes avec dossier complet. Sous-agent Reporting CEO : chaque lundi 8h, rapport synthétique (CA semaine, produits stars, taux de retour, clients perdus) avec recommandations.",
            result:
              "Prix toujours compétitifs sans surveillance manuelle, zéro rupture surprise, LTV client augmentée de 40% grâce aux séquences post-achat.",
          },
        ],
      },
      ong: {
        label: "ONG & Associations",
        cards: [
          {
            title: "Agent IA · Bénévoles, Bailleurs & Collecte",
            problem:
              "Une ONG jongle entre la coordination de 50+ bénévoles, les rapports mensuels exigés par 5 bailleurs différents (chacun avec son propre format), et les campagnes de collecte de fonds — tout ça avec une équipe de 3 personnes épuisées.",
            agent:
              "Coordonne les plannings bénévoles par WhatsApp, collecte les données terrain automatiquement, génère les rapports bailleurs dans le format requis par chacun, envoie les newsletters de collecte segmentées par type de donateur, relance les donateurs inactifs.",
            result:
              "Rapports bailleurs générés en 1h au lieu de 3 jours, bénévoles toujours informés sans réunion, collecte de fonds automatisée avec +30% de dons récurrents.",
          },
          {
            title: "Agent Orchestrateur · Terrain, Reporting Multiformat & Fundraising",
            problem:
              "L'ONG doit prouver son impact à 6 bailleurs différents avec 6 formats de rapport différents, coordonner 80 bénévoles sur le terrain, et maintenir une base de donateurs engagés — avec 2 coordinateurs.",
            agent:
              "Sous-agent Collecte Terrain : les bénévoles envoient leurs rapports par WhatsApp en format libre → l'agent extrait les données structurées et remplit la base d'impact. Sous-agent Reporting Multiformat : génère les rapports pour chaque bailleur dans leur format spécifique (Word, PDF, Excel) avec les KPIs exigés, envoyés par Gmail à la date limite. Sous-agent Coordination Bénévoles : gère le planning hebdomadaire, envoie les affectations par WhatsApp, alerte en cas de désistement et trouve un remplaçant dans la liste. Sous-agent Fundraising : segmente les donateurs par montant et fréquence, envoie des campagnes personnalisées, génère des reçus fiscaux automatiques, analyse les taux de conversion. Sous-agent Veille Financement : scrape les appels à projets des grands bailleurs (UE, AFD, ONU) correspondant aux thématiques de l'ONG → alerte le directeur avec résumé et deadline.",
            result:
              "6 rapports bailleurs générés sans effort, bénévoles coordonnés sans réunion hebdomadaire, nouvelles opportunités de financement détectées automatiquement.",
          },
        ],
      },
      ambassade: {
        label: "Ambassade & Consulat",
        cards: [
          {
            title: "Agent IA · Visas & Rendez-vous",
            problem:
              "Un consulat reçoit des centaines de demandes de visa par semaine. Répondre aux questions sur les documents requis, gérer les rendez-vous, suivre l'avancement des dossiers et notifier les demandeurs mobilise un personnel administratif surchargé.",
            agent:
              "Répond automatiquement aux questions fréquentes (documents requis, délais, frais), gère les prises de rendez-vous en ligne avec confirmation automatique, notifie le demandeur à chaque étape du traitement, alerte le personnel sur les dossiers incomplets.",
            result:
              "−70% d'appels et emails entrants, zéro rendez-vous manqué, demandeurs informés en temps réel sans solliciter le personnel.",
          },
          {
            title: "Agent Orchestrateur · Traitement Dossiers, Screening & Reporting Diplomatique",
            problem:
              "Des centaines de dossiers visa par semaine, chacun avec 12+ documents à vérifier, des bases de données à consulter, et des délais légaux à respecter — avec un personnel insuffisant et une pression politique constante.",
            agent:
              "Sous-agent Réception & Vérification : analyse chaque dossier soumis en ligne, vérifie la présence et la validité de chaque document, crée le dossier et notifie le demandeur des pièces manquantes. Sous-agent Screening : croise chaque demandeur avec les bases de données disponibles (listes de restrictions, vérification employeur), génère un rapport de risque pour chaque dossier. Sous-agent Workflow : route chaque dossier vers le bon agent consulaire selon le type de visa et la complexité, suit les délais légaux, alerte si une limite approche. Sous-agent Communication : notifie le demandeur à chaque étape avec explications, gère les demandes de recours. Sous-agent Reporting : génère les statistiques mensuelles pour le ministère (volume, délais moyens, taux d'approbation par nationalité).",
            result:
              "Temps de traitement divisé par 3, zéro dossier perdu, conformité légale garantie, rapports diplomatiques générés sans saisie manuelle.",
          },
        ],
      },
      bienetre: {
        label: "Spa / Bien-être / Pilates",
        cards: [
          {
            title: "Agent IA · Réservations & Fidélité",
            problem:
              "Un centre de bien-être perd des clients chaque semaine à cause de créneaux non relancés, d'abonnements qui expirent sans renouvellement, et de no-shows qui laissent des instructeurs sans élèves. La gestion manuelle par téléphone prend 2h/jour.",
            agent:
              "Gère toutes les réservations en ligne (cours de pilates, soins spa, massages), envoie des rappels 24h avant chaque séance, notifie quand un abonnement approche de son terme, suggère automatiquement des créneaux disponibles aux clients qui annulent, gère la liste d'attente.",
            result:
              "No-shows réduits de 60%, renouvellements d'abonnements +40%, planning toujours plein sans appel manuel.",
          },
          {
            title: "Agent Orchestrateur · Personnalisation, Yield Management & Rétention",
            problem:
              "Le centre perd 40% de ses clients après 3 mois. Les praticiens sont mal utilisés (créneaux vides à certaines heures, saturés à d'autres). Les ventes de soins complémentaires sont laissées au hasard.",
            agent:
              "Sous-agent Profil Client : construit un profil détaillé de chaque client (soins préférés, fréquence, budget, praticien favori, historique complet). Sous-agent Personnalisation : analyse le profil et envoie des recommandations hyper-personnalisées sur les créneaux et soins disponibles. Sous-agent Yield Management : analyse les créneaux vides par praticien, déclenche des promotions flash par WhatsApp sur les créneaux non remplis à J-48h. Sous-agent Fidélité : détecte les clients inactifs depuis 30/60/90 jours, déclenche des séquences de réengagement progressives avec offres croissantes. Sous-agent Planning Praticiens : optimise les plannings selon la demande prévue, alerte en cas de sous-utilisation, gère les remplacements en cas d'absence. Sous-agent Stock Produits : suit les ventes de produits en cabine, prédit les besoins de réapprovisionnement, génère les commandes fournisseurs automatiquement.",
            result:
              "Taux de rétention client +50%, créneaux vides réduits de 70%, revenus produits augmentés de 35% grâce aux recommandations personnalisées.",
          },
        ],
      },
      coiffure: {
        label: "Salon de Coiffure & Beauté",
        cards: [
          {
            title: "Agent IA · Réservations, Fidélité & Stock",
            problem:
              "Un salon reçoit des demandes de rendez-vous par WhatsApp toute la journée, même pendant les prestations. Les coiffeurs décrochent entre deux clients, oublient de rappeler, et le stock de produits capillaires est géré à vue — avec des ruptures fréquentes.",
            agent:
              "Gère les réservations WhatsApp automatiquement (heure, type de prestation, coiffeur souhaité), envoie un rappel la veille, propose de nouveaux créneaux en cas d'annulation, alerte quand un produit atteint le seuil minimum, envoie des offres anniversaire aux clients fidèles.",
            result:
              "Aucun rendez-vous perdu pendant les prestations, stock géré sans rupture, fidélité client renforcée par des attentions automatisées.",
          },
          {
            title: "Agent Orchestrateur · Rentabilité, Intelligence Concurrentielle & Expansion",
            problem:
              "Le salon veut ouvrir un 2ème site mais ne sait pas si la demande le justifie. Il perd des clients silencieux, ne connaît pas ses services les plus rentables, et gère ses coiffeuses à l'instinct.",
            agent:
              "Sous-agent Analyse Rentabilité : croise les données de chaque prestation (durée réelle, produits utilisés, prix facturé) pour calculer la marge nette par service avec recommandations de tarification. Sous-agent Veille Concurrence : scrape les pages Instagram/Google des salons concurrents dans un rayon de 5km, analyse leurs promotions, avis et nouveaux services. Sous-agent Churn Prediction : détecte les clients qui espacent leurs visites, déclenche une campagne de réengagement avant qu'ils partent définitivement. Sous-agent Google Reviews : après chaque visite, envoie un lien d'avis par WhatsApp, détecte les mauvais retours avant publication et alerte le manager. Sous-agent RH Coiffeuses : suit les performances par coiffeuse (CA généré, satisfaction client, taux de rebooking), génère un rapport mensuel confidentiel. Sous-agent Expansion : analyse la demande par zone géographique via scraping et données internes pour recommander le meilleur emplacement pour un 2ème site.",
            result:
              "Décisions basées sur la data, aucun client perdu silencieusement, stratégie d'expansion documentée.",
          },
        ],
      },
      pub: {
        label: "Agence de Publicité",
        cards: [
          {
            title: "Agent IA · Reporting & Gestion Campagnes",
            problem:
              "Une agence gère 15+ comptes clients simultanément sur Meta, Google, TikTok. Compiler les performances, rédiger les rapports mensuels, ajuster les budgets et briefer les créatifs prend 3 jours par mois — du temps non facturé.",
            agent:
              "Collecte automatiquement les données de toutes les plateformes, génère les rapports clients personnalisés avec analyse et recommandations, alerte en temps réel si une campagne sous-performe, rédige les briefs créatifs basés sur les meilleures performances.",
            result:
              "Rapports mensuels générés en 30 min au lieu de 3 jours, réactivité client améliorée, équipe créative briefée instantanément sur les insights.",
          },
          {
            title: "Agent Orchestrateur · Media Buying, Créatif & Intelligence Clients",
            problem:
              "L'agence gère 20 comptes clients sur 6 plateformes. Optimiser les budgets en temps réel, détecter les créatifs qui fatiguent, briefer les graphistes et prouver le ROI à chaque client est humainement impossible simultanément.",
            agent:
              "Sous-agent Performance Monitor : connecté aux API Meta, Google, TikTok, surveille toutes les campagnes en temps réel, alerte instantanément si un CPM dépasse le seuil ou si un ROAS chute sous la cible. Sous-agent Creative Intelligence : analyse les performances par visuel/texte/format, identifie les patterns gagnants (couleurs, longueur texte, CTA), génère automatiquement les briefs créatifs pour les prochains visuels. Sous-agent Budget Optimizer : redistribue automatiquement les budgets des campagnes sous-performantes vers les campagnes qui convertissent, dans les limites définies. Sous-agent Client Reporting : chaque lundi, génère et envoie par Gmail un rapport personnalisé pour chaque client (dashboard visuel, insights clés, recommandations). Sous-agent Veille Créative : scrape les meilleures pubs du secteur sur Facebook Ad Library, compile une newsletter hebdomadaire d'inspiration pour l'équipe créative. Sous-agent Prospection : scrape LinkedIn pour identifier des prospects qualifiés, enrichit les profils et prépare des emails de prospection personnalisés.",
            result:
              "Budgets toujours optimisés sans surveillance 24h/24, créatifs renouvelés avant d'être épuisés, clients impressionnés par la profondeur des rapports.",
          },
        ],
      },
      influenceur: {
        label: "Influenceur & Créateur",
        cards: [
          {
            title: "Agent IA · DMs, Sponsoring & Analytics",
            problem:
              "Un créateur avec 50 000+ abonnés reçoit 200+ DMs/jour entre les demandes de collaboration, les questions de la communauté et les propositions de sponsoring. Répondre à tout est impossible, les opportunités commerciales se perdent dans la masse.",
            agent:
              "Trie automatiquement les DMs par catégorie (sponsoring, question, collaboration), répond aux questions fréquentes de la communauté, envoie un kit média automatiquement aux marques intéressées, génère un rapport hebdomadaire des analytics, relance les marques qui n'ont pas répondu.",
            result:
              "Zéro opportunité commerciale manquée, communauté engagée sans y passer 3h/jour, kit média envoyé en 2 minutes au lieu de 2 jours.",
          },
          {
            title: "Agent Orchestrateur · Deal Flow, Audience Intelligence & Multi-Plateforme",
            problem:
              "Le créateur laisse de l'argent sur la table : des collaborations sous-négociées, une audience mal comprise, du contenu posté sans stratégie de timing ni de format optimal.",
            agent:
              "Sous-agent Deal Manager : trie tous les DMs/emails de collaboration entrants, qualifie les marques (réputation, budget probable), répond avec le kit média adapté, suit les négociations dans un CRM. Sous-agent Audience Intelligence : analyse les commentaires, DMs et réactions pour détecter les sujets qui résonnent le plus et les frustrations récurrentes → rapport mensuel. Sous-agent Content Optimizer : analyse les performances de chaque post (format, heure, longueur, hashtags), identifie les patterns de viralité, recommande le planning de publication optimal pour les 2 prochaines semaines. Sous-agent Multi-Plateforme : adapte chaque contenu principal au format optimal de chaque plateforme (Reel → TikTok + YouTube Shorts + Pinterest) avec légendes et hashtags ajustés. Sous-agent Revenue Tracker : centralise tous les revenus (sponsoring, affiliation, produits) dans un Google Sheet, génère les factures automatiquement, suit les paiements en retard et alerte à 30/60/90 jours. Sous-agent Trend Scout : surveille les tendances émergentes dans la niche du créateur sur TikTok, Twitter/X et Google Trends → alerte quotidienne des sujets à exploiter avant qu'ils explosent.",
            result:
              "Aucune opportunité commerciale non monétisée, contenu toujours aligné sur les tendances, revenus multipliés grâce au multi-plateforme automatisé.",
          },
        ],
      },
      medecin: {
        label: "Clinique & Cabinet Médical",
        cards: [
          {
            title: "Agent IA · Agenda & Patients",
            problem:
              "Une clinique reçoit 80+ appels/jour pour des rendez-vous, des résultats, des rappels. La secrétaire passe 6h sur le téléphone au lieu d'accueillir les patients présents. Les no-shows représentent 30% des créneaux perdus.",
            agent:
              "Gère les prises de rendez-vous par WhatsApp/SMS/Web, envoie des rappels automatiques 24h avant, répond aux questions fréquentes (horaires, tarifs, documents à apporter), notifie le médecin des urgences.",
            result:
              "−80% d'appels entrants, taux de no-show divisé par 3, secrétaire libérée pour l'accueil physique.",
          },
          {
            title: "Agent Orchestrateur · Suivi Patients Chroniques & Conformité Médicale",
            problem:
              "Une clinique avec 500+ patients chroniques (diabète, hypertension) ne peut pas assurer un suivi personnalisé entre les consultations. Les patients oublient leurs médicaments, leurs contrôles, et reviennent en urgence pour des situations évitables.",
            agent:
              "Sous-agent Suivi Chroniques : envoie des rappels personnalisés (prise de médicaments, mesure de glycémie/tension), collecte les résultats par WhatsApp et les stocke dans le dossier médical numérique. Sous-agent Alerte Médicale : détecte les valeurs anormales (glycémie hors seuil), alerte immédiatement le médecin traitant avec le dossier complet du patient. Sous-agent Coordination Examens : quand un médecin prescrit un examen, planifie automatiquement le rendez-vous au labo partenaire, rappelle le patient et récupère les résultats dans le dossier. Sous-agent Facturation Assurance : génère les feuilles de soins dans le format requis par chaque assurance partenaire, suit les remboursements, relance les dossiers en attente depuis +30 jours. Sous-agent Reporting Épidémio : analyse les données agrégées anonymisées pour détecter des tendances locales, génère des rapports pour le ministère de la santé.",
            result:
              "Hospitalisations d'urgence réduites de 30% grâce au suivi proactif, facturation assurance sans erreur, médecins alertés avant que les situations deviennent critiques.",
          },
        ],
      },
      hotel: {
        label: "Hôtel & Résidence",
        cards: [
          {
            title: "Agent IA · Réservations & Conciergerie",
            problem:
              "Un hôtel reçoit des demandes de réservation par email, WhatsApp, téléphone et booking simultanément. La synchronisation manuelle génère des doubles réservations, des oublis de réponse, et une expérience client incohérente.",
            agent:
              "Centralise toutes les demandes entrantes, vérifie les disponibilités en temps réel, confirme la réservation automatiquement, envoie les instructions d'arrivée, répond aux demandes de conciergerie (restaurant, taxi, activités) 24h/24.",
            result:
              "Zéro double réservation, taux de réponse 100% en moins de 2 minutes, expérience client premium sans recruter un réceptionniste supplémentaire.",
          },
          {
            title: "Agent Orchestrateur · Revenue Management, Expérience & Réputation",
            problem:
              "L'hôtel fixe ses tarifs à la semaine manuellement, sans analyser la concurrence ni la demande. Des chambres restent vides quand elles pourraient être vendues. Les avis négatifs en ligne ne sont jamais traités rapidement.",
            agent:
              "Sous-agent Revenue Manager : scrape les tarifs de tous les hôtels concurrents 3×/jour, analyse le taux d'occupation prévu (événements locaux, jours fériés, météo), ajuste automatiquement les tarifs pour maximiser le RevPAR. Sous-agent Expérience Pré-Séjour : 48h avant l'arrivée, envoie un message personnalisé avec propositions d'upgrade, restaurant, spa → revenus additionnels avant même l'arrivée. Sous-agent Housekeeping Intelligence : optimise le planning des femmes de chambre selon les départs/arrivées réels, alerte en temps réel sur les chambres prioritaires. Sous-agent Réputation Manager : surveille tous les avis (Booking, TripAdvisor, Google) en temps réel, génère des réponses personnalisées, alerte le directeur pour les avis < 3 étoiles, analyse les thèmes récurrents des plaintes. Sous-agent Fidélité Corporate : identifie les clients business récurrents, génère des offres de contrat corporate personnalisées, suit les négociations dans un CRM.",
            result:
              "RevPAR augmenté de 25%, réputation en ligne gérée sans Community Manager dédié, revenus additionnels pré-séjour générés automatiquement.",
          },
        ],
      },
      transport: {
        label: "Transport & Logistique",
        cards: [
          {
            title: "Agent IA · Dispatch & Suivi Flotte",
            problem:
              "Une entreprise de transport avec 20+ véhicules gère les missions par téléphone et WhatsApp. Affecter le bon chauffeur, suivre les livraisons, gérer les retards et facturer chaque course prend une équipe entière à temps plein.",
            agent:
              "Reçoit les demandes de transport, affecte automatiquement le chauffeur disponible le plus proche, envoie les instructions de mission, notifie le client en temps réel sur l'avancement, génère la facture à la livraison.",
            result:
              "Dispatch 10× plus rapide, facturation automatique sans saisie, clients informés sans intervention humaine, capacité à gérer 3× plus de missions avec la même équipe.",
          },
          {
            title: "Agent Orchestrateur · Optimisation Routes, Maintenance Prédictive & Conformité",
            problem:
              "Une flotte de 30+ camions génère des coûts cachés énormes : mauvaises routes, pannes non anticipées, douanes mal préparées. Chaque inefficacité se répercute sur la marge.",
            agent:
              "Sous-agent Route Intelligence : analyse le trafic en temps réel, les conditions routières et les restrictions de tonnage, optimise les itinéraires avant chaque départ et recalcule en cours de route si nécessaire. Sous-agent Maintenance Prédictive : collecte les données télémétriques de chaque véhicule (kilométrage, température moteur, alertes OBD2), prédit les pannes 2-3 semaines à l'avance, planifie les maintenances aux périodes de faible activité. Sous-agent Douane & Conformité : pour chaque expédition internationale, prépare automatiquement le dossier douanier complet, alerte sur les documents manquants, suit le statut en douane en temps réel. Sous-agent Performance Chauffeurs : analyse les données de conduite (vitesse, freinages brusques, consommation), génère un score mensuel par chauffeur, identifie les besoins de formation. Sous-agent Client Tracking : portail automatique où chaque expéditeur suit sa marchandise en temps réel avec notifications proactives en cas de retard.",
            result:
              "Coûts carburant réduits de 15%, pannes imprévues quasi éliminées, clients informés en temps réel sans appeler le dispatcher.",
          },
        ],
      },
      ecole: {
        label: "École Privée & Université",
        cards: [
          {
            title: "Agent IA · Inscriptions & Communication Parents",
            problem:
              "Chaque rentrée, une école privée traite des centaines de dossiers d'inscription manuellement. Pendant l'année, informer les parents des absences, bulletins, réunions et impayés mobilise une équipe administrative débordée.",
            agent:
              "Collecte et vérifie les dossiers d'inscription en ligne, relance automatiquement les pièces manquantes, notifie les parents par SMS/WhatsApp pour chaque absence, envoie les bulletins numériquement, relance les frais de scolarité impayés avec escalade progressive.",
            result:
              "Rentrée traitée en 3 jours au lieu de 3 semaines, −90% d'appels entrants parents, taux de recouvrement des frais amélioré de 40%.",
          },
          {
            title: "Agent Orchestrateur · Détection Décrochage, Admissions & Recouvrement",
            problem:
              "L'école perd des élèves chaque trimestre sans comprendre pourquoi. Les parents difficiles à joindre, les frais impayés qui s'accumulent, et les élèves en difficulté détectés trop tard sont des problèmes récurrents sans solution structurée.",
            agent:
              "Sous-agent Early Warning : analyse les absences, notes et comportements de chaque élève semaine par semaine, détecte les signaux de décrochage imminent (pattern d'absences + baisse de notes), alerte le conseiller pédagogique avec dossier complet. Sous-agent Communication Parents : segmente les communications par profil (parents engagés, difficiles à joindre, non-payeurs), adapte le canal (email / WhatsApp / appel automatisé), traduit en anglais pour les familles expatriées. Sous-agent Recouvrement Intelligent : suit chaque dossier de frais impayés, déclenche une séquence d'escalade progressive (rappel amical → relance formelle → convocation → procédure), propose des plans de paiement automatiquement. Sous-agent Admissions : gère le pipeline des nouvelles inscriptions (réception dossier → vérification → test planifié → résultat → contrat généré). Sous-agent Reporting Ministère : collecte les statistiques réglementaires, génère les rapports aux formats officiels requis, les soumet aux dates limites.",
            result:
              "Taux de décrochage réduit de 40% grâce à la détection précoce, taux de recouvrement des frais amélioré de 50%, admissions traitées 5× plus vite.",
          },
        ],
      },
      garage: {
        label: "Garage Automobile",
        cards: [
          {
            title: "Agent IA · Devis, Entretien & Relances",
            problem:
              "Un garage sérieux perd des milliers de XAF chaque mois sur des clients qui ne reviennent pas pour l'entretien, des devis jamais relancés et une gestion des pièces détachées chaotique sur papier ou Excel.",
            agent:
              "Envoie des rappels d'entretien personnalisés par SMS/WhatsApp, relance automatiquement les devis non acceptés après 3 jours, alerte quand le stock d'une pièce est bas, génère la facture dès que la réparation est validée.",
            result:
              "+35% de clients qui reviennent pour l'entretien, aucun devis oublié, stock géré sans rupture surprise, facturation immédiate sans attente.",
          },
          {
            title: "Agent Orchestrateur · Diagnostic Prédictif, Sourcing Pièces & Fidélisation",
            problem:
              "Le garage rate des revenus importants : pièces achetées trop cher (pas de comparaison fournisseurs), clients qui partent après 1 réparation, diagnostics sous-estimés par des techniciens débordés.",
            agent:
              "Sous-agent Historique Véhicule : construit une fiche complète pour chaque véhicule (toutes les réparations, km à chaque passage, pièces changées), prédit les prochaines maintenances selon les recommandations constructeur. Sous-agent Sourcing Pièces : pour chaque commande, scrape automatiquement 5+ fournisseurs, compare les prix et délais, recommande le meilleur choix et génère le bon de commande. Sous-agent Devis Intelligent : à partir du diagnostic du technicien (vocal ou texte), génère un devis complet et professionnel en 2 minutes, l'envoie par WhatsApp avec photos du problème, attend l'approbation client. Sous-agent Suivi Post-Réparation : 7 jours après chaque réparation, envoie un message de satisfaction, détecte les insatisfactions avant les mauvais avis et propose une vérification gratuite si problème. Sous-agent Veille Technique : surveille les rappels constructeurs et bulletins techniques concernant les marques/modèles dans la base clients, alerte proactivement les propriétaires concernés.",
            result:
              "Marge pièces améliorée de 20% grâce au sourcing automatisé, fidélisation client +45%, revenus de maintenance préventive doublés grâce aux alertes proactives.",
          },
        ],
      },
    },
    cta: "Votre secteur n'est pas listé ? On a probablement déjà une solution.",
    ctaLink: "Parlez-nous de votre cas →",
  },
  included: {
    eyebrow: "Toujours inclus",
    title: ["+ de temps. + de sécurité.", "+ de vitesse."],
    points: [
      "Vos équipes gagnent du temps dès le premier jour",
      "Vos données restent en Afrique, sur nos serveurs locaux",
      "Déployé en 2 semaines, opérationnel immédiatement",
    ],
  },
  pricing: {
    eyebrow: "Forfaits",
    title: "UN FORFAIT POUR CHAQUE ÉTAPE DE VOTRE CROISSANCE.",
    valueProp:
      "Chaque forfait inclut l'accompagnement, la formation et le support — pas juste la livraison technique. Vous ne payez pas un outil, vous payez une transformation.",
    packLabel: "Pack",
    startCta: "Voir ce forfait →",
    footerText: (currency) => `Forfaits adaptés à chaque budget — à partir de 99 000 ${currency}/mois. Devis personnalisé sous 24h.`,
    finalCta: "Obtenir mon devis gratuit →",
  },
  ctaBlock: {
    eyebrow: "Aizen aime la croissance",
    title: "Rejoins les entreprises qui travaillent moins et produisent plus.",
    stats: [
      { prefix: "+", value: 120, suffix: "", label: "heures/mois économisées par nos clients" },
      { prefix: "", value: 14, suffix: "", label: "pays couverts en Afrique" },
      { prefix: "", value: 2, suffix: "", label: "semaines délai moyen de livraison" },
      { prefix: "+", value: 30, suffix: "", label: "automatisations déployées" },
    ],
    sectorsLabel: "Déjà déployé dans ces secteurs —",
    sectors: [
      { icon: "Stethoscope", name: "Santé" },
      { icon: "Building2", name: "Immobilier" },
      { icon: "Truck", name: "Transport" },
      { icon: "ShoppingCart", name: "E-commerce" },
      { icon: "GraduationCap", name: "Éducation" },
      { icon: "Hotel", name: "Hôtellerie" },
      { icon: "Calculator", name: "Cabinet comptable" },
      { icon: "Store", name: "Supermarché" },
    ],
    quote: "La question n'est plus 'est-ce que j'ai besoin de l'IA ?' — c'est 'combien de temps j'ai déjà perdu sans elle ?'",
    signature: "— Équipe AIZEN",
    cta: "Démarrez votre audit gratuit →",
  },
  contact: {
    eyebrow: "Contact",
    title: "3 façons de démarrer aujourd'hui — gratuitement",
    cards: [
      { title: "Chat", desc: "Discutez avec notre équipe en direct." },
      { title: "Rendez-vous", desc: "Planifiez un appel stratégique de 30 min avec un membre de notre équipe." },
      { title: "Email", desc: "Recevez un devis personnalisé sous 24h." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Les questions qu'on nous pose.",
    items: [
      {
        q: "Combien de temps pour livrer ?",
        a: "Moins de 2 semaines pour la majorité des projets. On démarre par un audit gratuit, on identifie les automatisations à plus fort impact, puis on déploie par sprints hebdomadaires. Vous voyez des résultats concrets dès la première semaine.",
      },
      {
        q: "Je n'ai pas encore de budget important, par où commencer ?",
        a: "Commencez par l'audit gratuit. On identifie ensemble LE processus qui vous fait perdre le plus de temps, et on propose une automatisation cible à petit budget. Beaucoup de nos clients démarrent avec un seul agent IA, puis étendent une fois le ROI prouvé.",
      },
      {
        q: "C'est quoi concrètement un agent IA ?",
        a: "Un agent IA, c'est un logiciel qui exécute des tâches répétitives à votre place : lire des emails, générer des devis, trier des CVs, envoyer des relances. Il travaille 24/7, ne se trompe pas dans les calculs, et coûte moins cher qu'un employé à temps plein.",
      },
      {
        q: "Est-ce que je garde la propriété de mon site et de mes outils ?",
        a: "Oui, 100%. Vous êtes propriétaire du code, des données, des accès. On livre tout avec la documentation. Si vous voulez un jour reprendre en interne ou changer de prestataire, vous partez avec tout. Pas de lock-in.",
      },
      {
        q: "Vous travaillez vraiment avec des PME africaines locales ?",
        a: "Oui — c'est notre coeur de métier. Hébergement sur serveurs africains, support dans votre langue et votre fuseau, tarifs en devise locale, et équipe qui connaît le contexte réel (coupures de courant, bande passante limitée, habitudes d'achat). Pas un modèle occidental plaqué.",
      },
    ],
  },
  misc: {
    backHome: "← Retour à l'accueil",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
const en: Translations = {
  hero: {
    eyebrow: "Studio · AI & Web Automation",
    titleLines: ["Save 15 hours a week.", "Without hiring."],
    subtitle:
      "AIZEN automates your repetitive business tasks — quotes, emails, client follow-ups — delivered in under 2 weeks.",
    ctaPrimary: "Free Audit →",
    ctaSecondary: "See Plans",
  },
  countryHero: {
    eyebrowStudio: "STUDIO IA",
    titleLines: ["SAVE 15 HOURS A WEEK.", "WITHOUT HIRING."],
    subtitle: (countryWithPrep, capital, isMorocco) =>
      `AIZEN automates repetitive tasks for SMEs ${countryWithPrep} — quotes, emails, client follow-ups — delivered in under 2 weeks. Based in ${capital}, available ${isMorocco ? "throughout the Kingdom" : "nationwide"}.`,
    ctaPrimary: "Free Audit →",
    ctaSecondary: "See Plans",
  },
  whyAizen: {
    eyebrow: "Why Aizen?",
    title: "Three things that change everything.",
    cards: [
      {
        title: "Your managers lose 12 hours a week on tasks that don't matter.",
        body: "Data entry, follow-ups, reporting, email management — every hour lost on these repetitive tasks is money down the drain. An AIZEN agent absorbs them entirely, so your teams can focus on what actually generates revenue.",
      },
      {
        title: "Double your revenue without doubling your headcount.",
        body: "Your competitors hire to scale. You automate. One of our directors now handles 3× more clients than 6 months ago — with exactly the same team.",
      },
      {
        title: "Your competitors have a website. You will have a machine.",
        body: "An AIZEN site doesn't just put you online. It qualifies your prospects, answers their questions, books their meetings, and generates quotes — while you sleep. It's the difference between a storefront and a salesperson who never stops.",
      },
    ],
  },
  stats: {
    eyebrow: "Every hour lost is money lost",
    title: "Digitalization is no longer a luxury.",
    items: [
      {
        figure: "12h / week",
        desc: "African SMEs lose on average 12 hours a week to tasks that can be automated.",
        linkToAizen: "Aizen wins those hours back from month one.",
      },
      {
        figure: "3 ×",
        desc: "A digitalized SME serves 3× more clients with the same team.",
        linkToAizen: "You scale without hiring.",
      },
      {
        figure: "2 days / week",
        desc: "Our clients reclaim on average 2 working days a week within the first month.",
        linkToAizen: "That's time for strategy, not admin.",
      },
    ],
  },
  agents: {
    eyebrow: "Your AI agents at work",
    title: "Real outcomes. By sector.",
    sectorsOrder: [
      "supermarche", "rh", "avocats", "pme",
      "immobilier", "comptable", "change", "ecommerce",
      "ong", "ambassade", "bienetre", "coiffure",
      "pub", "influenceur", "medecin", "hotel",
      "transport", "ecole", "garage",
    ],
    labels: { problem: "Problem", agent: "AI Agent", result: "Result" },
    sectors: {
      supermarche: {
        label: "Retail / Supermarket",
        cards: [
          {
            title: "AI Agent · Stock & Orders",
            problem:
              "A supermarket manages 3,000+ SKUs. Stock-outs cost sales, overstock costs shelf space. A manager spends 6h/day checking levels.",
            agent:
              "Monitors stock in real time, forecasts needs from sales trends, auto-generates supplier orders, flags anomalies instantly.",
            result:
              "Zero critical stock-outs, −70% time on stock management, supplier orders sent without human input.",
          },
          {
            title: "AI Agent · Checkout & Loyalty",
            problem:
              "Tracking loyal customers, running personalized promos, and spotting slow-moving products manually is impossible at scale.",
            agent:
              "Analyzes buying patterns, sends personalized offers via WhatsApp/SMS, identifies slow-movers and suggests targeted promos.",
            result:
              "+25% repeat customers, optimized clearance cycles, zero manual marketing work.",
          },
        ],
      },
      rh: {
        label: "Human Resources",
        cards: [
          {
            title: "AI Agent · Recruiting",
            problem:
              "A job posting gets 200+ CVs. Reading, ranking and replying takes a full-time HR rep 2 weeks.",
            agent:
              "Reads and scores every CV against your criteria, sends personalized replies, books interviews into the calendar, updates your tracker live.",
            result:
              "200 CVs processed in 2 hours instead of 2 weeks, zero candidate left without an answer, HR freed up for interviews.",
          },
          {
            title: "AI Agent · Payroll & Leave",
            problem:
              "Handling leave, absences and overtime for 50+ employees in Excel produces errors, missed days and HR conflicts every month.",
            agent:
              "Centralizes leave requests, checks balances automatically, notifies managers, generates the monthly payroll report without manual entry.",
            result:
              "Payroll close in 1 day instead of 1 week, zero calculation errors, HR conflicts down 80%.",
          },
        ],
      },
      avocats: {
        label: "Law Firm",
        cards: [
          {
            title: "AI Agent · Cases & Deadlines",
            problem:
              "A firm handles 150+ active cases. Tracking procedural deadlines, hearing dates and client follow-ups — one miss can cost a case.",
            agent:
              "Monitors every legal deadline, sends automatic alerts to lawyers at D-7 and D-1, reminds clients for missing docs, keeps case status current.",
            result:
              "Zero missed deadlines, clients always informed, lawyers focused on law instead of admin.",
          },
          {
            title: "AI Agent · Billing & Collections",
            problem:
              "Unbilled fees and unpaid invoices represent on average 20% of lost revenue in a non-digitalized firm.",
            agent:
              "Generates invoices automatically at each case milestone, sends escalating payment reminders by email, produces the monthly AR report.",
            result:
              "+20% revenue recovered, zero forgotten invoices, collections without human input.",
          },
        ],
      },
      pme: {
        label: "General SME",
        items: [
          "Answering client emails → agent drafts in 2 min, you approve in 10 min (−3h/day)",
          "Creating a quote → auto-generated in 2 minutes (−45 min per client)",
          "Client tracking in Excel → automated Odoo CRM, zero forgotten follow-up",
        ],
      },
      immobilier: {
        label: "Real Estate Agency",
        cards: [
          {
            title: "AI Agent · Leads & Viewings",
            problem:
              "An agency receives 50+ enquiries per week via WhatsApp, email and Instagram. Qualifying each prospect, scheduling viewings, following up undecided clients and managing files consumes 100% of agents' time — at the expense of negotiating and closing.",
            agent:
              "Automatically qualifies each incoming lead (budget, property type, area), schedules viewings in agents' calendars, sends property sheets via WhatsApp, follows up silent prospects after 3 days, prepares tenant application files.",
            result:
              "No lead left unhandled, agents focused solely on viewings and signings, file processing time reduced by 60%.",
          },
          {
            title: "Orchestrator Agent · Sales Pipeline & Market Analysis",
            problem:
              "The agency doesn't know which properties sell best, at what price, or in what timeframe. It publishes manually on 5 portals, follows up without strategy, and loses deals for lack of structured tracking.",
            agent:
              "Scraping sub-agent: scrapes competitor portals every 6h to feed a real-time market price database. Valuation sub-agent: compares each new listing against the database and generates an automated PDF estimate sent to the owner via Gmail. Publishing sub-agent: automatically publishes on all property portals with AI-optimized descriptions. Scoring sub-agent: scores each incoming lead (budget, urgency, seriousness), creates the record in Airtable/Notion and assigns to a human agent. Follow-up sub-agent: triggers a 5-message WhatsApp/email sequence over 14 days for non-responding prospects.",
            result:
              "Fully automated pipeline from lead capture to signing, prices always aligned with the market, no lead ever lost.",
          },
        ],
      },
      comptable: {
        label: "Accounting Firm",
        cards: [
          {
            title: "AI Agent · Data Entry & Declarations",
            problem:
              "An accounting firm manages 60+ client files. Invoice data entry, bank reconciliation and chasing missing documents consume 70% of staff time — time that should go to advisory work.",
            agent:
              "Automatically extracts invoice data (OCR + AI), reconciles bank entries, chases clients for missing documents, generates draft monthly tax declarations.",
            result:
              "Data entry reduced by 80%, monthly close in 2 days instead of 2 weeks, staff refocused on high-value advisory.",
          },
          {
            title: "Orchestrator Agent · Close, Compliance & Proactive Advisory",
            problem:
              "The firm loses weeks on mechanical tasks while clients await strategic advice. Tax deadlines are stressful and human errors are costly.",
            agent:
              "OCR & Extraction sub-agent: reads all Gmail emails and attachments, extracts invoices and bank statements, files them in the right client folders automatically. Reconciliation sub-agent: connected to the banking API, reconciles each entry against extracted invoices, flags discrepancies in a shared Google Sheet. Compliance sub-agent: monitors tax deadlines for each client, sends a D-15 alert to both client and assigned accountant, generates the declaration draft. Analysis sub-agent: monthly financial performance report (revenue, margins, YoY evolution) with 3 concrete recommendations, sent as a PDF via Gmail. Collections sub-agent: tracks unpaid invoices, sends escalating reminders (email → WhatsApp → formal letter).",
            result:
              "Monthly close in 4h instead of 4 days, zero missed tax deadline, clients receive advice without the accountant lifting a finger.",
          },
        ],
      },
      change: {
        label: "Currency Exchange",
        cards: [
          {
            title: "AI Agent · Rate Monitoring & Alerts",
            problem:
              "A currency exchange bureau must monitor constant fluctuations in EUR/ZAR, USD/KES, GBP/NGN etc. A poorly timed trade on a large volume can cost millions. Alerting clients to the right moment to exchange is impossible manually.",
            agent:
              "Monitors rates in real time 24/7, automatically alerts VIP clients via WhatsApp when their target rate is reached, generates daily trend reports, flags suspicious anomalies (potential fraud).",
            result:
              "Clients retained through personalized alerts, zero missed exchange opportunity, real-time fraud detection.",
          },
          {
            title: "Orchestrator Agent · KYC, AML Compliance & Regulatory Reporting",
            problem:
              "A bureau operates across 8+ currencies, must meet KYC/AML obligations, report suspicious transactions to authorities and inform VIP clients — all simultaneously.",
            agent:
              "Market Watch sub-agent: scrapes rates from 5 sources in real time, calculates the optimal spread, updates displayed rates on the website and screens. Client Alerts sub-agent: each VIP client sets their thresholds → personalized WhatsApp when the target rate is reached with a direct booking link. KYC sub-agent: for each transaction above the regulatory threshold, collects identity documents, verifies validity and creates the compliance file. AML sub-agent: analyzes transaction patterns, detects suspicious behavior (repeated amounts, structuring), generates suspicious activity reports. Reporting sub-agent: generates the monthly regulatory report in compliance with central bank requirements.",
            result:
              "Full regulatory compliance without a dedicated legal officer, VIP clients served in real time, no exchange opportunity missed.",
          },
        ],
      },
      ecommerce: {
        label: "E-commerce",
        cards: [
          {
            title: "AI Agent · Orders, Support & Cart Recovery",
            problem:
              "An online store handles 100+ orders/day. Managing confirmations, delivery delays, support claims, refunds and abandoned cart follow-ups is impossible without a dedicated team.",
            agent:
              "Automatically confirms every order, sends real-time tracking updates, handles return/refund requests, answers frequent support questions, re-engages abandoned carts with a personalized message and promo code.",
            result:
              "80% of support handled without human input, abandoned cart recovery rate +25%, flawless customer experience at any volume.",
          },
          {
            title: "Orchestrator Agent · Dynamic Pricing, Stock & Retention",
            problem:
              "The store competes with giants using a small team. Prices are rarely optimal, stock-outs drive customers away, and post-purchase follow-up is non-existent.",
            agent:
              "Competitor Pricing sub-agent: scrapes competitor prices every 4h, automatically adjusts prices according to the defined strategy (minimum margin or position vs competitor). Stock Intelligence sub-agent: analyzes sales velocity per SKU, predicts stock-outs 2 weeks ahead, auto-generates supplier purchase orders. Post-Purchase sub-agent: automated sequence after every purchase — thank-you D+0, review request D+3, complementary product D+7, loyalty offer D+30. Smart Support sub-agent: ranks tickets by priority, automatically resolves simple cases (refunds, re-shipments), escalates complex cases with full file. CEO Reporting sub-agent: every Monday at 8am, sends a summary report (weekly revenue, top products, return rate, lost customers) with recommendations.",
            result:
              "Always competitive pricing without manual monitoring, zero surprise stock-outs, customer LTV increased 40% through post-purchase sequences.",
          },
        ],
      },
      ong: {
        label: "NGO & Associations",
        cards: [
          {
            title: "AI Agent · Volunteers, Donors & Reporting",
            problem:
              "An NGO juggles coordinating 50+ volunteers, monthly reports required by 5 different donors (each with their own format), and fundraising campaigns — all with a burnt-out 3-person team.",
            agent:
              "Coordinates volunteer schedules via WhatsApp, automatically collects field data, generates donor reports in each required format, sends segmented fundraising newsletters by donor type, re-engages inactive donors.",
            result:
              "Donor reports generated in 1h instead of 3 days, volunteers always informed without meetings, fundraising automated with +30% recurring donations.",
          },
          {
            title: "Orchestrator Agent · Field Data, Multi-Format Reporting & Fundraising",
            problem:
              "The NGO must prove its impact to 6 different donors with 6 different report formats, coordinate 80 field volunteers, and maintain an engaged donor base — with 2 coordinators.",
            agent:
              "Field Collection sub-agent: volunteers send their activity reports via WhatsApp in free format → the agent extracts structured data and populates the impact database. Multi-Format Reporting sub-agent: generates reports for each donor in their specific format (Word, PDF, Excel) with required KPIs, sent by Gmail at the deadline. Volunteer Coordination sub-agent: manages the weekly schedule, sends assignments via WhatsApp, alerts when someone drops out and finds a replacement from the list. Fundraising sub-agent: segments donors by amount and frequency, sends personalized campaigns, generates automatic tax receipts, analyzes conversion rates. Funding Watch sub-agent: scrapes grant calls from major donors (EU, AFD, UN) matching the NGO's themes → alerts the director with summary and deadline.",
            result:
              "6 donor reports generated without effort, volunteers coordinated without weekly meetings, new funding opportunities detected automatically.",
          },
        ],
      },
      ambassade: {
        label: "Embassy & Consulate",
        cards: [
          {
            title: "AI Agent · Visas & Appointments",
            problem:
              "A consulate receives hundreds of visa applications per week. Answering questions about required documents, managing appointments, tracking file progress and notifying applicants overwhelms administrative staff.",
            agent:
              "Automatically answers frequent questions (required documents, timelines, fees), manages online appointment booking with automatic confirmation, notifies applicants at each processing stage, flags incomplete files to staff.",
            result:
              "−70% incoming calls and emails, zero missed appointments, applicants informed in real time without bothering staff.",
          },
          {
            title: "Orchestrator Agent · File Processing, Screening & Diplomatic Reporting",
            problem:
              "Hundreds of visa files per week, each with 12+ documents to verify, databases to check, and legal deadlines to meet — with insufficient staff and constant political pressure.",
            agent:
              "Reception & Verification sub-agent: analyzes each submitted file, checks the presence and validity of every document, creates the record and notifies the applicant of missing items. Screening sub-agent: cross-references each applicant against available databases (restriction lists, employer verification), generates a risk report for each file. Workflow sub-agent: routes each file to the right consular officer by visa type and complexity, tracks legal deadlines, alerts if a limit is approaching. Communication sub-agent: notifies the applicant at each stage with explanations, handles appeal requests. Reporting sub-agent: generates monthly statistics for the ministry (volume, average processing times, approval rates by nationality).",
            result:
              "Processing time divided by 3, zero lost files, legal compliance guaranteed, diplomatic reports generated without manual data entry.",
          },
        ],
      },
      bienetre: {
        label: "Spa / Wellness / Pilates",
        cards: [
          {
            title: "AI Agent · Bookings & Loyalty",
            problem:
              "A wellness center loses clients every week to unfollowed-up slots, memberships expiring without renewal, and no-shows leaving instructors without students. Manual phone management takes 2h/day.",
            agent:
              "Manages all online bookings (pilates, spa treatments, massages), sends reminders 24h before each session, notifies when a membership is about to expire, automatically suggests available slots to clients who cancel, manages the waiting list.",
            result:
              "No-shows down 60%, membership renewals +40%, schedule always full without manual calls.",
          },
          {
            title: "Orchestrator Agent · Personalization, Yield Management & Retention",
            problem:
              "The center loses 40% of its clients after 3 months. Practitioners are poorly utilized (empty slots at certain hours, saturated at others). Upsells on complementary treatments are left to chance.",
            agent:
              "Client Profile sub-agent: builds a detailed profile for every client (preferred treatments, frequency, budget, favorite practitioner, full history). Personalization sub-agent: analyzes the profile and sends hyper-personalized recommendations for available slots and treatments. Yield Management sub-agent: analyzes empty slots by practitioner, triggers WhatsApp flash promotions for slots unfilled at D-48h. Loyalty sub-agent: detects clients inactive for 30/60/90 days, triggers progressive re-engagement sequences with escalating offers. Practitioner Scheduling sub-agent: optimizes schedules based on forecast demand, alerts on chronic under-utilization, manages replacements when absent. Product Stock sub-agent: tracks in-room product sales, predicts restocking needs, auto-generates supplier orders.",
            result:
              "Client retention rate +50%, empty slots reduced 70%, product revenue up 35% through personalized recommendations.",
          },
        ],
      },
      coiffure: {
        label: "Hair & Beauty Salon",
        cards: [
          {
            title: "AI Agent · Bookings, Loyalty & Stock",
            problem:
              "A salon receives appointment requests via WhatsApp all day, even during services. Stylists answer between clients, forget to call back, and hair product stock is managed by eye — with frequent stock-outs.",
            agent:
              "Manages WhatsApp bookings automatically (time, service type, preferred stylist), sends a reminder the day before, suggests new slots when a booking is cancelled, alerts when a product hits the minimum threshold, sends birthday offers to loyal clients.",
            result:
              "No appointment lost during services, stock managed without stock-outs, client loyalty strengthened through automated personal touches.",
          },
          {
            title: "Orchestrator Agent · Profitability, Competitive Intelligence & Expansion",
            problem:
              "The salon wants to open a 2nd location but doesn't know if demand justifies it. It loses silent clients, doesn't know its most profitable services, and manages stylists by instinct.",
            agent:
              "Profitability Analysis sub-agent: cross-references data for each service (actual time, products used, price charged) to calculate net margin per service with pricing recommendations. Competitive Intelligence sub-agent: scrapes Instagram/Google pages of competing salons within a 5km radius, analyzes their promotions, reviews and new services. Churn Prediction sub-agent: detects clients who are spacing out their visits, triggers a re-engagement campaign before they leave permanently. Google Reviews sub-agent: after every visit, sends a WhatsApp review link, detects negative feedback before publication and alerts the manager immediately. Stylist Performance sub-agent: tracks performance per stylist (revenue generated, client satisfaction, rebooking rate), generates a confidential monthly report. Expansion sub-agent: analyzes demand by geographic area via scraping and internal data to recommend the best location for a 2nd site.",
            result:
              "Data-driven decisions, no client lost silently, expansion strategy documented.",
          },
        ],
      },
      pub: {
        label: "Advertising Agency",
        cards: [
          {
            title: "AI Agent · Reporting & Campaign Management",
            problem:
              "An agency manages 15+ client accounts simultaneously across Meta, Google and TikTok. Compiling performance data, writing monthly reports, adjusting budgets and briefing creatives takes 3 days a month — unbilled time.",
            agent:
              "Automatically pulls data from all platforms, generates personalized client reports with analysis and recommendations, sends real-time alerts if a campaign underperforms, writes creative briefs based on top-performing insights.",
            result:
              "Monthly reports generated in 30 min instead of 3 days, improved client responsiveness, creative team instantly briefed on insights.",
          },
          {
            title: "Orchestrator Agent · Media Buying, Creative & Client Intelligence",
            problem:
              "The agency manages 20 client accounts across 6 platforms. Optimizing budgets in real time, detecting creative fatigue, briefing designers and proving ROI to every client is humanly impossible simultaneously.",
            agent:
              "Performance Monitor sub-agent: connected to Meta, Google and TikTok APIs, monitors all campaigns in real time, instantly alerts when a CPM exceeds the threshold or ROAS drops below target. Creative Intelligence sub-agent: analyzes performance by visual/copy/format, identifies winning patterns, auto-generates creative briefs for next visuals based on insights. Budget Optimizer sub-agent: automatically reallocates budgets from underperforming campaigns to converting ones within defined limits. Client Reporting sub-agent: every Monday, generates and sends a personalized report for each client via Gmail (visual dashboard, key insights, recommendations). Creative Scouting sub-agent: scrapes top ads in each client's sector on Facebook Ad Library, compiles a weekly inspiration newsletter for the creative team. Prospecting sub-agent: scrapes LinkedIn for qualified prospects, enriches profiles and drafts personalized outreach emails.",
            result:
              "Budgets always optimized without 24/7 human monitoring, creatives refreshed before exhaustion, clients impressed by report depth.",
          },
        ],
      },
      influenceur: {
        label: "Influencer & Creator",
        cards: [
          {
            title: "AI Agent · DMs, Sponsorships & Analytics",
            problem:
              "A creator with 50,000+ followers receives 200+ DMs/day — collaboration requests, community questions, sponsorship proposals. Responding to everything is impossible, and commercial opportunities get lost in the noise.",
            agent:
              "Automatically sorts DMs by category (sponsorship, question, collaboration), answers frequent community questions, automatically sends a media kit to interested brands, generates a weekly analytics report, follows up with brands that haven't replied.",
            result:
              "Zero missed commercial opportunity, community engaged without spending 3h/day, media kit sent in 2 minutes instead of 2 days.",
          },
          {
            title: "Orchestrator Agent · Deal Flow, Audience Intelligence & Multi-Platform",
            problem:
              "The creator is leaving money on the table: under-negotiated deals, a poorly understood audience, and content posted without optimal timing or format strategy.",
            agent:
              "Deal Manager sub-agent: sorts all incoming DMs and emails, qualifies brands (reputation, likely budget), responds with the right media kit, tracks negotiations in a CRM. Audience Intelligence sub-agent: analyzes comments, DMs and reactions to detect the topics that resonate most and recurring frustrations → monthly report. Content Optimizer sub-agent: analyzes every post's performance (format, time, length, hashtags), identifies virality patterns, recommends the optimal publishing schedule for the next 2 weeks. Multi-Platform sub-agent: adapts each main piece of content to the optimal format for each platform (Reel → TikTok + YouTube Shorts + Pinterest) with adjusted captions and hashtags. Revenue Tracker sub-agent: centralizes all revenue (sponsorships, affiliate, products) in a Google Sheet, auto-generates invoices, tracks late payments and alerts at 30/60/90 days. Trend Scout sub-agent: monitors emerging trends in the creator's niche on TikTok, Twitter/X and Google Trends → daily alert of topics to capitalize on before they explode.",
            result:
              "No commercial opportunity left unmonetized, content always aligned with trends, revenue multiplied through automated multi-platform distribution.",
          },
        ],
      },
      medecin: {
        label: "Clinic & Medical Practice",
        cards: [
          {
            title: "AI Agent · Appointments & Patients",
            problem:
              "A clinic receives 80+ calls/day for appointments, test results and reminders. The receptionist spends 6h on the phone instead of welcoming patients in person. No-shows account for 30% of lost slots.",
            agent:
              "Manages appointment bookings via WhatsApp/SMS/Web, sends automatic reminders 24h before, answers frequent questions (opening hours, fees, documents to bring), notifies the doctor of urgent cases.",
            result:
              "−80% incoming calls, no-show rate divided by 3, receptionist freed up for in-person care.",
          },
          {
            title: "Orchestrator Agent · Chronic Patient Follow-up & Medical Compliance",
            problem:
              "A clinic with 500+ chronic patients (diabetes, hypertension) cannot provide personalized follow-up between consultations. Patients forget medication, miss check-ups, and return as emergencies for avoidable situations.",
            agent:
              "Chronic Follow-up sub-agent: sends personalized reminders (medication, blood sugar/blood pressure checks), collects results via WhatsApp and stores them in the digital medical record. Medical Alert sub-agent: detects abnormal values (blood sugar above threshold), immediately alerts the treating physician with the patient's full file. Exam Coordination sub-agent: when a doctor prescribes a test, automatically schedules the appointment at the partner lab, reminds the patient and retrieves results into the file. Insurance Billing sub-agent: generates claim forms in the format required by each partner insurer, tracks reimbursements, chases files pending for +30 days. Epidemiological Reporting sub-agent: analyzes aggregated anonymized data to detect local trends, generates reports for the health ministry.",
            result:
              "Emergency hospitalizations reduced 30% through proactive follow-up, error-free insurance billing, doctors alerted before situations become critical.",
          },
        ],
      },
      hotel: {
        label: "Hotel & Residence",
        cards: [
          {
            title: "AI Agent · Reservations & Concierge",
            problem:
              "A hotel receives booking requests simultaneously by email, WhatsApp, phone and booking platforms. Manual synchronization causes double bookings, unanswered enquiries and an inconsistent guest experience.",
            agent:
              "Centralizes all incoming requests, checks availability in real time, automatically confirms reservations, sends arrival instructions, answers concierge requests (restaurant, taxi, activities) 24/7.",
            result:
              "Zero double bookings, 100% response rate in under 2 minutes, premium guest experience without hiring an extra receptionist.",
          },
          {
            title: "Orchestrator Agent · Revenue Management, Experience & Reputation",
            problem:
              "The hotel sets rates manually once a week, without analyzing competition or demand. Rooms sit empty when they could be sold at a discount. Negative online reviews are never addressed quickly.",
            agent:
              "Revenue Manager sub-agent: scrapes competitor hotel rates 3×/day, analyzes forecast occupancy (local events, holidays, weather), automatically adjusts rates to maximize RevPAR. Pre-Stay Experience sub-agent: 48h before arrival, sends a personalized message with upgrade, restaurant and spa proposals → additional revenue before the guest even arrives. Housekeeping Intelligence sub-agent: optimizes room attendant schedules based on actual departures/arrivals, sends real-time alerts on priority rooms. Reputation Manager sub-agent: monitors all reviews (Booking, TripAdvisor, Google) in real time, generates personalized responses, alerts the director for reviews below 3 stars, analyzes recurring complaint themes. Corporate Loyalty sub-agent: identifies recurring business clients, auto-generates personalized corporate rate proposals, tracks negotiations in a CRM.",
            result:
              "RevPAR up 25%, online reputation managed without a dedicated Community Manager, pre-stay additional revenue generated automatically.",
          },
        ],
      },
      transport: {
        label: "Transport & Logistics",
        cards: [
          {
            title: "AI Agent · Dispatch & Fleet Tracking",
            problem:
              "A transport company with 20+ vehicles manages jobs by phone and WhatsApp. Assigning the right driver, tracking deliveries, handling delays and invoicing each trip requires a full-time team.",
            agent:
              "Receives transport requests, automatically assigns the nearest available driver, sends job instructions, notifies the client in real time on progress, generates the invoice on delivery.",
            result:
              "Dispatch 10× faster, automatic invoicing without data entry, clients informed without human intervention, capacity to handle 3× more jobs with the same team.",
          },
          {
            title: "Orchestrator Agent · Route Optimization, Predictive Maintenance & Compliance",
            problem:
              "A fleet of 30+ trucks generates massive hidden costs: poor routes, unanticipated breakdowns, poorly prepared customs paperwork. Every inefficiency hits the margin.",
            agent:
              "Route Intelligence sub-agent: analyzes real-time traffic, road conditions and weight restrictions, optimizes routes before departure and recalculates en route when necessary. Predictive Maintenance sub-agent: collects telemetry data from every vehicle (mileage, engine temperature, OBD2 alerts), predicts breakdowns 2-3 weeks ahead, schedules maintenance during low-activity periods. Customs & Compliance sub-agent: for every international shipment, automatically prepares the complete customs file, alerts on missing documents, tracks customs status in real time. Driver Performance sub-agent: analyzes driving data (speed, harsh braking, fuel consumption), generates a monthly score per driver and identifies training needs. Client Tracking sub-agent: automatic portal where every shipper tracks their cargo in real time with proactive notifications in case of delay.",
            result:
              "Fuel costs down 15%, unplanned breakdowns nearly eliminated, clients informed in real time without calling the dispatcher.",
          },
        ],
      },
      ecole: {
        label: "Private School & University",
        cards: [
          {
            title: "AI Agent · Enrolment & Parent Communication",
            problem:
              "At every school year start, a private school processes hundreds of enrolment files manually. During the year, informing parents about absences, report cards, meetings and unpaid fees overwhelms an already stretched admin team.",
            agent:
              "Collects and verifies enrolment files online, automatically chases missing documents, notifies parents via SMS/WhatsApp for every absence, sends report cards digitally, follows up unpaid tuition fees with progressive escalation.",
            result:
              "School year processed in 3 days instead of 3 weeks, −90% incoming parent calls, tuition fee recovery improved by 40%.",
          },
          {
            title: "Orchestrator Agent · Dropout Detection, Admissions & Collections",
            problem:
              "The school loses students every term without understanding why. Hard-to-reach parents, accumulating unpaid fees, and struggling students detected too late are recurring problems with no structured solution.",
            agent:
              "Early Warning sub-agent: analyzes each student's absences, grades and behavior week by week, detects early dropout signals (absence patterns + grade decline), alerts the academic advisor with a full file. Parent Communication sub-agent: segments communications by profile (engaged, hard-to-reach, non-paying), adapts the channel (email / WhatsApp / automated call), translates to English for expatriate families. Smart Collections sub-agent: tracks every unpaid tuition file, triggers a progressive escalation sequence (friendly reminder → formal notice → summons → proceedings), automatically proposes payment plans. Admissions sub-agent: manages the new enrolment pipeline (file receipt → verification → entrance test scheduled → result → contract auto-generated). Ministry Reporting sub-agent: collects regulatory statistics, generates reports in required official formats and submits them by the deadline.",
            result:
              "Dropout rate reduced 40% through early detection, tuition fee recovery improved 50%, admissions processed 5× faster.",
          },
        ],
      },
      garage: {
        label: "Auto Garage",
        cards: [
          {
            title: "AI Agent · Quotes, Maintenance & Follow-ups",
            problem:
              "A serious garage loses thousands every month to customers who don't return for servicing, quotes that are never followed up, and spare parts management done chaotically on paper or in Excel.",
            agent:
              "Sends personalized service reminders via SMS/WhatsApp, automatically follows up unaccepted quotes after 3 days, alerts when a part is running low, generates the invoice as soon as a repair is signed off.",
            result:
              "+35% of customers returning for servicing, no quote forgotten, stock managed without surprise stock-outs, immediate invoicing without waiting.",
          },
          {
            title: "Orchestrator Agent · Predictive Diagnostics, Parts Sourcing & Loyalty",
            problem:
              "The garage misses significant revenue: parts bought at too high a price (no supplier comparison), customers who leave after 1 repair, and diagnostics under-quoted by overworked technicians.",
            agent:
              "Vehicle History sub-agent: builds a complete file for every vehicle (all repairs, mileage at each visit, parts replaced), predicts upcoming maintenance needs according to manufacturer recommendations. Parts Sourcing sub-agent: for every parts order, automatically scrapes 5+ suppliers, compares prices and lead times, recommends the best choice and generates the purchase order. Smart Quote sub-agent: from the technician's diagnosis (voice or text), generates a complete professional quote in 2 minutes, sends it via WhatsApp with problem photos, waits for client approval. Post-Repair Follow-up sub-agent: 7 days after each repair, sends a satisfaction message, detects dissatisfaction before bad reviews and offers a free check-up if there's an issue. Technical Watch sub-agent: monitors manufacturer recalls and technical bulletins for the makes/models in the client database, proactively alerts owners concerned.",
            result:
              "Parts margin improved 20% through automated sourcing, client loyalty +45%, preventive maintenance revenue doubled through proactive alerts.",
          },
        ],
      },
    },
    cta: "Your sector isn't listed? We probably already have a solution.",
    ctaLink: "Tell us about your case →",
  },
  included: {
    eyebrow: "Always included",
    title: ["+ time. + security.", "+ speed."],
    points: [
      "Your teams save time from day one",
      "Your data stays in Africa, on our local servers",
      "Deployed in 2 weeks, operational immediately",
    ],
  },
  pricing: {
    eyebrow: "Plans",
    title: "A PLAN FOR EVERY STAGE OF YOUR GROWTH.",
    valueProp:
      "Every plan includes onboarding, training and support — not just technical delivery. You're not paying for a tool, you're paying for a transformation.",
    packLabel: "Pack",
    startCta: "See this plan →",
    footerText: (currency) => `Plans tailored to every budget — starting from 99,000 ${currency}/month. Custom quote in 24h.`,
    finalCta: "Get my free quote →",
  },
  ctaBlock: {
    eyebrow: "Aizen loves growth",
    title: "Join the first African SMEs working less and producing more.",
    stats: [
      { prefix: "+", value: 120, suffix: "", label: "hours/month saved by our clients" },
      { prefix: "", value: 14, suffix: "", label: "countries covered in Africa" },
      { prefix: "", value: 2, suffix: "", label: "weeks average delivery time" },
      { prefix: "+", value: 30, suffix: "", label: "automations deployed" },
    ],
    sectorsLabel: "Already deployed in these sectors —",
    sectors: [
      { icon: "Stethoscope", name: "Healthcare" },
      { icon: "Building2", name: "Real Estate" },
      { icon: "Truck", name: "Transport" },
      { icon: "ShoppingCart", name: "E-commerce" },
      { icon: "GraduationCap", name: "Education" },
      { icon: "Hotel", name: "Hospitality" },
      { icon: "Calculator", name: "Accounting Firm" },
      { icon: "Store", name: "Supermarket" },
    ],
    quote: "The question is no longer 'do I need AI?' — it's 'how much time have I already lost without it?'",
    signature: "— Team AIZEN",
    cta: "Start your free audit →",
  },
  contact: {
    eyebrow: "Contact",
    title: "3 ways to get started today — free",
    cards: [
      { title: "Chat", desc: "Talk to our team live." },
      { title: "Book a call", desc: "Schedule a 30-min strategy call." },
      { title: "Email", desc: "Get a personalized quote within 24h." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "The questions we get.",
    items: [
      {
        q: "How long does delivery take?",
        a: "Under 2 weeks for most projects. We start with a free audit, identify the highest-impact automations, and deploy in weekly sprints. You see concrete results from week one.",
      },
      {
        q: "I don't have a big budget yet — where do I start?",
        a: "Start with the free audit. We identify together the ONE process costing you the most time, and propose a small-budget automation. Many clients start with a single AI agent, then expand once the ROI is proven.",
      },
      {
        q: 'What exactly is an "AI agent"?',
        a: "An AI agent is software that handles repetitive tasks for you: reading emails, drafting quotes, ranking CVs, sending reminders. It works 24/7, doesn't mis-calculate, and costs less than a full-time employee.",
      },
      {
        q: "Do I keep ownership of my site and tools?",
        a: "Yes, 100%. You own the code, the data, the access. We hand everything over with documentation. If you ever want to bring it in-house or switch vendors, you walk away with everything. No lock-in.",
      },
      {
        q: "Do you really work with local African SMEs?",
        a: "Yes — that's our core business. Hosting on African servers, support in your language and timezone, local-currency pricing, and a team that knows the real context (power cuts, limited bandwidth, buying habits). Not a Western model bolted on.",
      },
    ],
  },
  misc: {
    backHome: "← Back to home",
  },
};

export const translations: Record<Lang, Translations> = { fr, en };

export function t(lang: Lang): Translations {
  return translations[lang];
}
