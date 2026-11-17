// Coordonnées et contenus de l'entreprise : un seul endroit pour tout le site.
// Sources : kb/01_ENTREPRISE.md (dépôt everest-acker), le premier site d'Acker Électricité
// (16 nov. 2026) et Fabrice. Une valeur null s'affiche "à confirmer".

export const entreprise = {
  nom: 'Acker Électricité',
  dirigeant: 'Fabrice Acker',
  formeJuridique: 'Fabrice Acker EI, entrepreneur individuel (micro-entreprise)',
  siret: '949 168 942 00017',
  telephone: '06 73 99 41 12',
  telephoneLien: '+33673994112',
  // Adresse pro Google Workspace. Affichée par un petit script pour limiter le spam.
  emailUtilisateur: 'fabrice',
  emailDomaine: 'acker-electricite.fr',
  instagram: 'https://www.instagram.com/acker.electricite/',
  instagramNom: '@acker.electricite',
  adresse: {
    rue: '77, route de la Valentine',
    codePostal: '13011',
    ville: 'Marseille',
  },
  horaires: 'Du lundi au vendredi, de 8 h à 18 h',
  zone: 'Marseille et alentours',
  experience: '17 ans',
  creation: 2023,
  assurance: 'Groupe AMI 3F / ERGO, contrat n° SV75020721/07416',
  partenaire: {
    nom: "Le Comptoir de l'éclairage",
    url: 'https://lcdle.com',
    logo: '/logo-lcdle.webp',
  },
  domaine: 'acker-electricite.fr',
};

export const photos = {
  fabrice: { src: '/photos/fabrice-acker.jpg', alt: "Fabrice Acker, électricien, fondateur d'Acker Électricité" },
  intervention: { src: '/photos/intervention-tableau.jpg', alt: 'Fabrice Acker en intervention sur un tableau électrique' },
  commerce: { src: '/photos/amenagement-commerce.jpg', alt: "Aménagement électrique d'un commerce" },
  niches: { src: '/photos/eclairage-niches-led.jpg', alt: 'Niches murales mises en valeur par un éclairage LED intégré' },
  exterieur: { src: '/photos/eclairage-exterieur.jpg', alt: 'Éclairage extérieur' },
  tableauLocal: { src: '/photos/tableau-local-technique.jpg', alt: 'Tableau électrique en local technique' },
  tableauTertiaire: { src: '/photos/tableau-tertiaire.jpg', alt: 'Tableau électrique tertiaire' },
  tableauRepartition: { src: '/photos/tableau-repartition.jpg', alt: 'Tableau de répartition' },
  controle: { src: '/photos/controle-prise.jpg', alt: "Contrôle d'une installation" },
  baie: { src: '/photos/baie-informatique.jpg', alt: 'Baie de brassage informatique' },
  reunion: { src: '/photos/salle-reunion.jpg', alt: "Équipement d'une salle de réunion" },
};

export const services = [
  {
    slug: 'renovation-electrique',
    titre: 'Rénovation électrique complète',
    court: "Remise à neuf de l'installation d'un appartement, d'une villa, d'un commerce ou d'un local professionnel.",
    intro:
      "Je reprends toute l'électricité de votre appartement, de votre villa, de votre commerce ou de votre local professionnel : circuits, prises, éclairage et tableau. Vous me laissez les clés, je fais, je nettoie, je pars.",
    points: [
      'Appartements et villas',
      'Boutiques, cabinets, bureaux, locaux',
      'Tableau, prises, interrupteurs, éclairage',
      'Circuits spécialisés (four, plaque, chauffe-eau…)',
      'Chantier rendu propre',
    ],
    photo: 'commerce',
  },
  {
    slug: 'eclairage-led',
    titre: 'Éclairage LED et mise en valeur des matières',
    court: 'Rubans LED, profilés intégrés et éclairage d’ambiance pour sublimer vos matériaux.',
    intro:
      "Bien pensé, l'éclairage révèle le relief d'un mur en pierre, le veinage d'un plan de travail ou la chaleur d'une boiserie. J'accompagne les particuliers, les maîtres d'œuvre et les architectes : conception et pose d'éclairages LED intégrés, discrets et durables, avec les produits du Comptoir de l'éclairage.",
    points: [
      'Rubans et bandeaux LED',
      'Profilés aluminium intégrés',
      'Mise en lumière d’une pièce, d’une niche, d’une matière',
      'Éclairage extérieur',
    ],
    photo: 'niches',
  },
  {
    slug: 'tableau-electrique-mise-aux-normes',
    titre: 'Tableau électrique et mise aux normes',
    court: 'Remplacement de tableau, mise en sécurité, mise aux normes NF C 15-100, levée de réserves.',
    intro:
      "Je sécurise votre installation selon la norme NF C 15-100 : protection des personnes, mise à la terre, différentiels. Pour une vente, une location, l'assurance, ou après un diagnostic avec des réserves à lever.",
    points: [
      'Diagnostic de l’existant',
      'Remplacement de tableau électrique',
      'Mise en sécurité et mise en conformité',
      'Levée de réserves',
    ],
    photo: 'tableauLocal',
  },
  {
    slug: 'interphones-cameras-depannage',
    titre: 'Interphones, caméras, réseaux et dépannage',
    court: 'Interphones, caméras, baies réseau, petits travaux et recherche de panne.',
    intro:
      "Pour les travaux plus courts : poser un interphone ou des caméras, équiper une salle de réunion, câbler une baie réseau, ajouter une prise. Et quand ça ne marche plus : disjoncteur qui saute, prise ou appareil défaillant, je recherche la panne et je répare.",
    points: [
      'Interphones et caméras',
      'Baies de brassage et réseaux',
      'Ajout ou modification de prises, d’éclairage et de circuits',
      'Diagnostic et recherche de panne',
    ],
    photo: 'baie',
  },
];

export const galerie = [
  'intervention',
  'tableauTertiaire',
  'commerce',
  'exterieur',
  'baie',
  'tableauRepartition',
  'reunion',
  'controle',
  'tableauLocal',
  'niches',
];
