export const data = [
  {
    id: 1,
    title: "Maladie",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Indemnités journalière versées par l’assurance maladie",
          "Les 3 derniers bulletins de salaire",
          "Le complément versé par la complémentaire santé (non obligatoire)",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = RBG autre parent + montant des indemnités maladies + revenus capitaux mobiliers + revenus fonciers.",
        ],
      },
    ],
    keyword: "maladie",
  },
  {
    id: 2,
    title: "Chômage",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Montant de l’indemnité journalière de l’allocation d’Aide au Retour à l’Emploi (ARE)",
          "Si le parent ne bénéficie plus de l’ARE, il doit nous fournir le montant de l’indemnité journalière de l’allocation de Solidarité Spécifique (ASS)",
          "Si les parents ne bénéficient pas de l’ARE ni de l’ASS, il doit nous fournir l’attestation RSA",
          "Si aucun document, l’étudiant doit nous fournir une attestation de la CAF de non perception d’aide.",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = RBG autre parent + montants ARE ou ASS + revenus capitaux mobiliers + revenus fonciers.",
        ],
      },
    ],
    keyword: "chômage",
  },
  {
    id: 3,
    title: "Divorce",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Jugement de divorce, lettre de conciliation ou de non conciliation",
          "Allocation soutien familial",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = RBG du parent ayant la garde + revenus capitaux mobiliers /2 + revenus fonciers /2.",
        ],
      },
    ],
    keyword: "divorce",
  },
  {
    id: 4,
    title: "Décès",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: ["Acte de décès"],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
        ],
      },
    ],
    keyword: "décès",
  },
  {
    id: 5,
    title: "Retraite : pour le privé",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Montants versés par l’assurance retraite",
          "Montants versés par la complémentaire retraite",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = Retraite + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
        ],
      },
    ],
    keyword: "retraite-privé",
  },
  {
    id: 6,
    title: "Retraite : pour la fonction publique",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Retraite de base",
          "Retraite additionnelle de la fonction publique (si le parent de l’étudiant à plus de 62 ans)",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = Retraite + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
        ],
      },
    ],
    keyword: "retraite-publique",
  },
  {
    id: 7,
    title: "Surendettement",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Plan conventionnel de redressement définitif, daté",
          "Ou tableau des mesures imposées par la commission, daté",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        ],
      },
    ],
    keyword: "surendettement",
  },
  {
    id: 8,
    title: "Redressement judiciaire ou liquidation judiciaire",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Copie du jugement de liquidation ou de redressement judiciaire",
          "Avis fiscal N-1",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        ],
      },
    ],
    keyword: "redressement",
  },
  {
    id: 9,
    title: "Réduction du temps de travail",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Avenant au contrat de travail ou arrêté (pour les fonctionnaires) prévoyant la modification du temps de travail",
          "Les 3 derniers bulletins de salaires",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = Résultat révision + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
        ],
      },
    ],
    keyword: "réduction",
  },
  {
    id: 10,
    title: "Congés sans traitement, sans solde ou parental",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Document attestant de la prise de congés sans solde (privé et public)",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
        ],
      },
    ],
    keyword: "congés",
  },
  {
    id: 11,
    title: "Mise en disponibilité",
    paragraphs: [
      {
        id: 1,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Décision de l'administration attestant de la mise en disponibilité",
          "Copie des bulletins de salaires.",
        ],
      },
      {
        id: 2,
        title: "Calcul de révision",
        text: ``,
        bullets: [
          "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
          "Nouveau RBG = Résultat révision + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
        ],
      },
    ],
    keyword: "disponibilité",
  },
];
