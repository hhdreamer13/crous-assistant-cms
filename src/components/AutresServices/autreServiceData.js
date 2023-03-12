export const data = [
  {
    id: 1,
    title: "Repas à 1 euro / Restauration",
    paragraphs: [
      {
        id: 1,
        title: `🔸 Les étudiants boursiers`,
        text: "Seuls les étudiants relevant des catégories suivantes sont éligibles à ce tarif :",
        bullets: [
          "Être boursier sur critères sociaux (BCS) ou bénéficiaires de l’aide spécifique allocation annuelle (ASAA) des Crous de Paris, Créteil ou Versailles pour l'année universitaire en cours.",
          "Boursiers de la région en formation médicosocial.",
          "Bénéficiaires d’une bourse versée, sous conditions de ressources et financée par des crédits État, par un établissement d’enseignement supérieur",
          "Boursiers du gouvernement français.",
        ],
      },
      {
        id: 2,
        title: "",
        text: "Pour bénéficier du tarif :",
        bullets: [
          `Si l’étudiant a une notification définitive : l’étudiant n’a aucune démarche à effectuer, sa carte étudiante se met à jour automatiquement pour bénéficier du tarif boursier`,
          `Si l’étudiant a une notification conditionnelle : l’étudiant doit se déplacer dans un guichet izly (liste sur le site des Crous) avec sa carte étudiante et sa notification conditionnelle pour bénéficier du tarif à 1 euro jusqu’au 31/11 de l’année en cours (il devra avoir une notification définitive obligatoirement à cette date).`,
          `Si l’étudiant est en cours de traitement de DSE : l’étudiant ne pourra pas bénéficier du tarif à 1 euro et ne pourra pas non plus bénéficier du remboursement à la suite.`,
        ],
      },
      {
        id: 3,
        title: `🔸 Les étudiants non-boursiers`,
        text: `Le tarif à 1€ peut être accordé aux étudiants en situation de précarité, même s’ils ne sont pas boursiers, après une évaluation sociale.

          Cette situation doit être attestée par les pièces justificatives demandées. Après étude du dossier, l’étudiant recevra une réponse du service social. Si la demande est acceptée l’étudiant sera identifié comme bénéficiaire via son compte Izly.
          `,
        bullets: [
          "Pour faire la demande, il faut allez sur le site epa.lescrous.fr et cliquer sur la rubrique « Faire ma demande ».",
        ],
      },
      {
        id: 4,
        title: "🔸 Assistance Izly",
        text: "Les contacts avec le service Izly se feront via le Crous de gestion de l’étudiant.",
        bullets: [
          "assistance-izly@crous-paris.fr",
          "assistance-izly@crous-creteil.fr / support.izly@crous-créteil.fr ",
          "assistance-izly@crous-versailles.fr",
        ],
      },
      {
        id: 5,
        title: "🔸 Guichet Izly",
        text: "Pour les étudiants de Paris uniquement, il y a 5 guichets pour activer leur compte ou demander une carte Izly:",
        bullets: [
          "RU Mabillon : ouvert de 11h30 à 14h30",
          "RU Halle aux Farines : ouvert de 11h15 à 14h15.",
          "RU Cuvier : ouvert de 11h30 à 14h.",
          "RU Chatelet : ouvert 11h30 à 14h.",
          "RU Dauphine : ouvert les mardis et vendredis de 11h20 à 14h15.",
        ],
      },
      {
        id: 6,
        title: "🔸 Changement d'académie",
        text: "Pour les étudiants changeant d’académie en cours d’année, cela ne devra pas poser de problème. En effet l’application étant gérée par le Cnous, l’étudiant pourra bénéficier du tarif à 1 euro dans toute la France.",
        bullets: [],
      },
    ],
    keyword: "izly",
  },
  {
    id: 2,
    title: "Faire un ticket",
    paragraphs: [
      {
        id: 1,
        title: `🔸 Ticket pour remonter un dossier d’étudiant`,
        text: "",
        bullets: [
          "Nom:",
          "Prénom:",
          "Numéro INE:",
          "Crous de gestion:",
          "Phrase explicative:",
        ],
      },
      {
        id: 2,
        title: `🔸 Ticket pour débloquer un dossier`,
        text: "",
        bullets: ["Nom:", "Prénom:", "Crous de gestion:", "Année du dossier :"],
      },
      {
        id: 3,
        title: `🔸 Ticket social (en cas d’urgence uniquement)`,
        text: "",
        bullets: [
          "Nom :",
          "Prénom :",
          "Numéro INE :",
          "Crous de gestion :",
          "Nom de l’établissement :",
          "Adresse mail :",
          "Numéro de tél :",
          "Phrase explicative :",
        ],
      },
      {
        id: 4,
        title: `🔸 Ticket autre sujet`,
        text: "",
        bullets: [
          "Nom :",
          "Prénom :",
          "Adresse mail :",
          "Numéro de tél :",
          "Le Crous sollicité :",
          "Phrase explicative :",
        ],
      },
      {
        id: 5,
        title: `🔸 Ticket attestation non-boursier`,
        text: `
          Concernant les attestations de non-boursier de l’année N, il faut informer les étudiants que nous ne pourrons en fournir qu’à partir du 1er janvier de l’année N+1 (après la fermeture du serveur). Par exemple, une attestation non-boursier 2022-2023, ne pourrait être émise qu’à partir de 01/01/2023.

Pour toute demande d’attestation non-boursier pour l’année scolaire, il faut bien vérifier que l’étudiant n’ait pas de dossier en cours.

Si l’étudiant a un dossier un cours et qu’il fait la demande d’une attestation non-boursier, merci de l’inviter à joindre une attestation sur l’honneur indiquant qu’il renonce à bourse pour l’année N.

Autrement, une fois, avoir vérifié que l’étudiant n’a pas de dossier pour l’année N, merci de nous transmettre le ticket reprenant le modèle ci-dessous :
`,
        bullets: [
          "Nom :",
          "Prénom :",
          "Date de naissance :",
          "Numéro INE :",
          "Crous de gestion :",
          "Phrase explicative :",
        ],
      },
    ],
    keyword: "ticket",
  },
  {
    id: 3,
    title: "Informations générales",
    paragraphs: [
      {
        id: 1,
        title: `🔸 Transfert de dossier`,
        text: "Uniquement pour les dossiers avec l’activation V. Les transferts ne peuvent être effectués que par le Crous sortant.",
        bullets: [],
      },
      {
        id: 2,
        title: `🔸 Étudiant qui travaille`,
        text: "Pas plus de 20H de travail hebdomadaire (sensibiliser l’étudiant sur l’importance de l’assiduité sinon il devra rembourser...).",
        bullets: [],
      },
      {
        id: 3,
        title: `🔸 Toujours prendre la nationalité de l’étudiant`,
        text: "(Pour les doubles nationalités = français), si l’étudiant est français et que les parents vivent à l’étranger, indiquer à l’étudiant qu’il y aura une demande consulaire.",
        bullets: [],
      },
      {
        id: 4,
        title: `🔸 Diplôme Universitaire PAREO`,
        text: "(Passeport pour Réussir et s’Orienter) : Est le seul DU l’habilité à recevoir des boursiers du Crous. Cette remontée est indiquée comme non habilitée dans Aglaé, vous devrez donc demander le certificat de l’année N à l’étudiant et transmettre le dossier pour une mise en paiement.",
        bullets: [],
      },
      {
        id: 5,
        title: `🔸 AED (Assistants d’Éducation)`,
        text: "Les AED ont le droit à une dérogation aux règles de revenus avec une mise en paiement de leur bourse en échelon 2 minimum. Pour cela nous devons avoir le contrat de travail signé sur l’année N de la demande de bourse. Si le contrat a été signé sur les années précédente nous devrons disposer d’une attestation employeur sur l’année N. Si les documents sont conformes vous pourrez transmettre la demande pour une mise en paiement de sa bourse.",
        bullets: [],
      },
      {
        id: 6,
        title: `🔸 Les certificats de scolarité justifiant des points de charge fratrie`,
        text: "Du 15/01 au 31/08 demander le certificat de scolarité N-1 de l’année de la demande. A’ partir de septembre, demander certificat de scolarité l’année N de la demande (ex : instruction d’un DSE en octobre 2022, demander certificat de scolarité de la fratrie 2022/2023). Si vous constatez qu’un frère ou qu’une sœur est en fin de cursus sur son certificat de scolarité de N-1 de la demande, veuillez n’ajouter que deux points et demander à l’étudiant de fournir le certificat de scolarité de sa fratrie de l’année N dès qu’il l’aura.",
        bullets: [],
      },
      {
        id: 7,
        title: `🔸 Un droit consommé`,
        text: "Un droit de bourse est consommé au moment où l’étudiant a reçu une mensualité.",
        bullets: [],
      },
      {
        id: 8,
        title: `🔸 La bourse`,
        text: "accordée aux étudiants confrontés à des difficultés matérielles, elle constitue une aide complémentaire à celle de la famille (ne se substitue pas à l’aide OBLIGATOIRE des parents, Article 371-2 du code civil). La bourse ne peut être accordée que pour une inscription en initial dans un établissement habilité (toujours vérifier sur structure).",
        bullets: [],
      },
      {
        id: 9,
        title: `🔸 Étudiants mariés`,
        text: "Si le couple déclare plus de 90% d’un Salaire Minimum de Croissance (SMIC) et qu’ils ont joint l’acte de mariage, nous pouvons prendre en compte les revenus du couple. Ils peuvent fournir l’AF commun N-2 ou le plus récent. Si l’étudiant s’est marié l’année N de la demande, il doit nous fournir l’acte de mariage et ses bulletins de payes.",
        bullets: [],
      },
      {
        id: 10,
        title: `🔸 Brexit`,
        text: "Durant la période de transition (jusqu’au 30/06/2021), les conditions actuelles restes inchangées (mêmes conditions que pour les étudiants européens). Nous attendons plus d’informations sur les modalités d’accueil des étudiants britanniques après cette période.",
        bullets: [],
      },
      {
        id: 11,
        title: `🔸 Étudiants avec plusieurs Identifiant National Étudiant (INE)`,
        text: "Un étudiant français ne doit avoir qu’un INE (indiqué sur son relevé de note du bac), si vous constatez que l’étudiant en a plusieurs, vous devez lui indiquer qu’il doit se rapprocher de son Crous de gestion pour faire supprimer le second INE. Pour un étudiant ayant eu son bac dans un établissement étranger et disposant de plusieurs INE, il devra utiliser celui qui a été fourni par son premier établissement français d’inscription.",
        bullets: [],
      },
      {
        id: 12,
        title: `🔸 Les comptes bancaires européens`,
        text: "Les comptes bancaires européens sont acceptés, l’étudiant doit renseigner les informations SEPA.",
        bullets: [],
      },
      {
        id: 13,
        title: `🔸 Modification de RIB `,
        text: `seul l’étudiant peut modifier ces coordonnées bancaires en se connectant à son dossier sur MSE.gouv.fr. Si l’étudiant a un compte français il doit renseigner son IBAN complet avec les lettres en majuscules et confirmer. Attention si l’étudiant à un compte français il ne doit pas renseigner l’information SEPA sinon il sera bloqué. Si l’étudiant à un compte européen, il ne doit renseigner que le SEPA.
          Dans tous les cas, l’étudiant doit indiquer l’ancien RIB / SEPA à la suite pour confirmer la modification. S’il n’est pas en mesure de les renseigner, l’étudiant peut se déplacer à son Crous de gestion muni d’une pièce d’identité pour demander ces anciennes coordonnées bancaires (aucune information bancaire au téléphone).
          `,
        bullets: [],
      },
      {
        id: 14,
        title: `🔸 Frais de dossier`,
        text: "lors de la constitution du DSE, l’étudiant doit payer 4 euros de frais de dossier. Le paiement peut s’effectuer en ligne avec une carte bancaire (direct ou en différé). Si l’étudiant n’a pas pu payer en carte bancaire et qu’il a un dossier « classique » il peut joindre avec son dossier, un chèque à l’ordre de l’agent comptable de son Crous de gestion. Si l’étudiant n’a pas eu la possibilité de payer par carte bancaire ou chèque, il peut se déplacer à l’agence comptable de son Crous de gestion pour les payer directement (liquide accepté).",
        bullets: [],
      },
      {
        id: 15,
        title: `🔸 Le master MEEF`,
        text: "La BCS peut se cumuler avec la rémunération versée dans le cadre des stages réalisés par les étudiants préparant les concours enseignants ou la rémunération versée dans le cadre des parcours alternés au sein de masters existants intégrant une préparation aux concours enseignants. Dans les 2 cas précités, les étudiants ont la qualité de contractuels de droit public. En revanche, les étudiants faisant le choix d’un master par la voie de l’apprentissage ne peuvent bénéficier d’une BCS. La BCS est aussi cumulable avec la rémunération servie aux professeurs contractuels alternants inscrits en 1ère année de master MEEF.",
        bullets: [],
      },
    ],
    keyword: "info",
  },
  {
    id: 4,
    title: "",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: "",
        bullets: [],
      },
    ],
    keyword: "",
  },
];
