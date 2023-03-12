export const data = [
  {
    id: 1,
    title: "Parents mariés / pacsés / concubins",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `Les revenus des deux parents sont pris en compte.`,
        bullets: [],
      },
      {
        id: 2,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "Avis fiscal commun des parents",
          "Un acte de naissance pour verifier les noms des parents",
        ],
      },
      {
        id: 3,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "Avis d'impôt 2022 (imposition, non-imposition...) se rapportant aux revenus perçus en 2021 par les parents",
        ],
      },
      {
        id: 4,
        title: "Attention",
        text: `Les parents concubins n’ont pas d’avis fiscal commun. Pour savoir s’ils sont concubins, il faut se rapporter à l’adresse renseignée sur l’AF de chaque parent.`,
        bullets: [],
      },
    ],
    keyword: "mariés",
  },
  {
    id: 2,
    title: "Parent décédé",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `En cas de décès d’un parent, on prend en compte seulement les revenus du parent vivant`,
        bullets: [],
      },
      {
        id: 2,
        title: "Justifier sa situation",
        text: ``,
        bullets: ["Acte de décès du parent concerné"],
      },
      {
        id: 3,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "Avis d'impôt 2022 (imposition, non-imposition...) se rapportant aux revenus perçus en 2021 par le parent existant",
        ],
      },
      {
        id: 4,
        title: "Attention",
        text: ``,
        bullets: [
          "Si le parent est décédé après l'année N-2, il nous faut l'avis fiscal commun des parents, pour calculer les droits à la bourse par rapports aux revenus du déclarant qui est vivant. Dans un dossier dématérialisé, on ne trouve pas les revenus de chaque déclarant sur les données fiscales",
          "S’il s’agit d’un renouvellement l’information est déjà enregistré dans les pièces pérennes.",
        ],
      },
    ],
    keyword: "décédé",
  },
  {
    id: 3,
    title: "Parent inconnu",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `Si un étudiant n’a pas été reconnu par l’un de ses parents, alors la bourse est calculée en fonction des revenus du seul lien de filiation existant.`,
        bullets: [],
      },
      {
        id: 2,
        title: "Justifier sa situation",
        text: ``,
        bullets: ["Un acte de naissance", "Ou un livret de famille"],
      },
      {
        id: 3,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "Avis d'impôt 2022 (imposition, non-imposition...) se rapportant aux revenus perçus en 2021 par le parent existant",
        ],
      },
      {
        id: 4,
        title: "Attention",
        text: ``,
        bullets: [
          "Sur un acte de naissance ou un livret de famille, on regarde la partie du parent concerné non renseigné sur le livret de famille",
          "Lorsqu’un étudiant dit ne pas pouvoir fournir l’AF d’un de ses parents (pas de contacte avec le parent), il peut établir une attestation sur l’honneur (datée et signée) indiquant qu’il n’a plus de contact avec le parent concerné.",
          "Avant d’indiquer la procédure précédente, il faut bien vérifier que l’étudiant n’a pas déjà joint l’AF de son père l’année précédente, ce qui laisserait penser à une fausse déclaration.",
        ],
      },
    ],
    keyword: "inconnu",
  },
  {
    id: 4,
    title: "Parents divorcés / séparés",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `Plusieurs cas sont possibles en fonction de la situation des parents de l’étudiant.`,
        bullets: [],
      },
      {
        id: 2,
        title: "Cas 1 : Avec jugement de divorce + pension alimentaire",
        text: ``,
        bullets: [
          "Si un jugement, ou une ordonnance de non-conciliation prévoit une pension alimentaire avec une résidence exclusive chez un parent alors seuls les revenus du parent qui la perçoit doivent être pris en compte.",
          "L’étudiant doit joindre la copie complète et signée du jugement de divorce en cas de divorce judiciaire.",
          "Si les parents divorcent par consentement mutuel, alors l’étudiant doit fournir la convention de divorce signée ainsi que le jugement d’homologation ou l’acte notarié authentifiant la convention.",
        ],
      },
      {
        id: 3,
        title: "Cas 2 : Avec jugement de divorce - pension alimentaire",
        text: ``,
        bullets: [
          "En l’absence de pension alimentaire et/ou de garde exclusive au bénéfice de l’un des parents, les revenus des deux parents sont pris en compte.",
        ],
      },
      {
        id: 4,
        title: "Cas 3 : Sans jugement de divorce",
        text: ``,
        bullets: [
          "En l’absence de jugement, les revenus des deux parents sont pris en compte.",
        ],
      },
      {
        id: 4,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "Cas 1 : Seuls les revenus du parent qui perçoit la pension alimentaire doivent être pris en compte.",
          "Cas 2 : Les revenus des deux parents sont pris en compte",
          "Cas 3 : Les revenus des deux parents sont pris en compte",
        ],
      },
      {
        id: 4,
        title: "Attention",
        text: ``,
        bullets: [
          "On considère qu’il y a une pension alimentaire lorsqu’il est mentionné qu’un des parents est « impécunieux ».",
        ],
      },
    ],
    keyword: "séparés",
  },
  {
    id: 5,
    title: "Parent isolé",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `Est considérée comme isolée une personne veuve, divorcée, séparée ou célibataire, qui ne vit pas en couple de manière notoire et permanente et qui notamment ne met pas en commun avec un conjoint, concubin ou partenaire civil de solidarité ses ressources et ses charges. Lorsque l’un des membres du couple réside à l’étranger, n’est pas considéré comme isolé celui qui réside en France`,
        bullets: [],
      },

      {
        id: 2,
        title: "Justifier sa situation",
        text: `Lettre « T »`,
        bullets: [
          "On demande l'avis fiscal pour vérifier le status parent isolé (les données fiscales en cas d'un dossier dématérialisé)",
          `La lettre « T » se trouve sur l'avis fiscal du parent, dans la case "Cas Particulier"`,
        ],
      },
      {
        id: 3,
        title: "",
        text: `Allocation de Soutien Familial (ASF)`,
        bullets: [
          "L'Allocation de soutien familial se trouve sur l'attestation de paiement de la Caf (un document récent est nécessaire)",
        ],
      },
      {
        id: 4,
        title: "",
        text: `RSA majoré / Lettre « L »`,
        bullets: [
          "RSA majoré se trouve sur l'attestation de paiement de la Caf (un document récent est nécessaire)",
          `La lettre « L » se trouve sur l'avis fiscal du parent, dans la case "Cas Particulier"`,
        ],
      },
      {
        id: 5,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "L'avis fiscal sur les revenus de l'année N-2 du parent isolé",
        ],
      },
      {
        id: 6,
        title: "Attention",
        text: ``,
        bullets: [
          "La situation de parent isolé ayant la charge fiscale de l’étudiant prévaut désormais sur celle de parents séparés (avec ou sans jugement de divorce).",
          "Dans le cas où la lettre « T » figure sur l’avis fiscal des deux parents de l’étudiant (en cas de doute demander l’AF des deux parents), cela annule le statut parent isolé et les revenus des deux parents sont pris en compte",
        ],
      },
    ],
    keyword: "isolé",
  },
  {
    id: 6,
    title: "Parent remarié",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `"Lorsque le nouveau conjoint prend fiscalement à charge un ou des enfants étudiants issus du premier mariage de son conjoint, le droit à bourse de ces étudiants doit être examiné en fonction des ressources du nouveau couple constitué.",`,
        bullets: [],
      },
      {
        id: 2,
        title: "Les cas différents",
        text: `Cas 1 : Étudiant rattaché sur AF commun « mère / beau-père »`,
        bullets: [
          "S'il y a un jugement de divorce concernant les parents (avec pension alimentaire), les revenus de l'AF commun de « mère / beau-père » sont pris en compte.",
          "S'il y a un jugement de divorce concernant les parents (sans pension alimentaire), les revenus de l'AF commun de « mère / beau-père » avec les revenus du père sont pris en compte",
        ],
      },
      {
        id: 3,
        title: "",
        text: `Cas 2 : Étudiant rattaché sur AF commun « mère / beau-père » + « père / belle-mère »`,
        bullets: [
          "les deux parents sont remarié et la garde de l'étudiant est alternée, donc les revenus de l'avis fiscal commun de « mère / beau-père » + « père / belle-mère » sont pris en compte.",
        ],
      },
      {
        id: 4,
        title: "",
        text: `Cas 3 : Étudiant pas rattaché sur AF commun « mère / beau-père »`,
        bullets: [
          "S'il y a un jugement de divorce concernant les parents (avec pension alimentaire), les revenus de l'AF de « mère » sont pris en compte.",
          "S'il y a un jugement de divorce concernant les parents (sans pension alimentaire), les revenus de l'AF de « mère » et « père » sont pris en compte",
          "S'il n'y a pas un jugement de divorce concernant les parents, les revenus de l'AF de « mère » et « père » sont pris en compte",
        ],
      },
      {
        id: 5,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "Cas 1 : Selon l'existance d'un jugement de divorce et une pension alimentaire, l'AF commun du parent remarié et l'AF de l'autre parent",
          "Cas 2 : Les revenus des deux AF commun des parents remarié sont pris en compte",
          "Cas 3 : Selon l'existance d'un jugement de divorce et une pension alimentaire, l'AF des parents sont pris en compte",
        ],
      },
      {
        id: 6,
        title: "Attention",
        text: ``,
        bullets: [
          "Nous devons prendre en compte les revenus des beaux-parents en plus des revenus des parents uniquement si l’étudiant est rattaché fiscalement à l’avis fiscal commun du nouveau couple.",
          "Si le parent 1 ne peut pas justifier du statut de parent isolé, nous prendrons en plus du revenu du nouveau couple, les revenus du parent 2.",
        ],
      },
    ],
    keyword: "remarié",
  },
];
