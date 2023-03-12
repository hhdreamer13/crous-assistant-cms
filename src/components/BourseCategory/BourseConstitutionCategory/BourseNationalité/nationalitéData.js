export const data = [
  {
    id: 1,
    title: "Étudiant français",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `Pas de conditions particulières de nationalité. Une pièce d’identité à titre vérificatif peut être demandée pour une première demande de bourse.`,
        bullets: [],
      },
      {
        id: 2,
        title: "Justifier sa nationalité",
        text: ``,
        bullets: ["Carte nationale d’identité", "Passeport"],
      },
      {
        id: 3,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "Parents en France : prendre l’AF des parents N-2 de la demande.",
          "Parents à l’étranger : demande de consulat à faire.",
        ],
      },
    ],
    keyword: "français",
  },
  {
    id: 1,
    title: "Étudiant européen",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `Doivent justifier pour eux ou leurs parents d’une présence minimum en France au cours de l’année précédente (contrat de travail ou certificat de scolarité N-1...) ou justifier d’une présence en France ou 5 ans de résidence régulière en France, s’il n’était pas en France l’année précédant la demande de bourse.`,
        bullets: [],
      },
      {
        id: 2,
        title: "Justifier sa présence",
        text: ``,
        bullets: [
          "Soit un certificat de scolarité N-1.",
          "Soit un contrat de travail même d’une journée ou 1h pour lui ou ses parents.",
        ],
      },
      {
        id: 3,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "Parents en France : prendre l’AF des parents N-2 de la demande.",
          "Parents en Europe : joindre la « fiche Europe » avec justificatifs fiscaux traduits.",
          "Parents hors Europe : joindre la « fiche autre / com » avec justificatifs fiscaux traduits",
        ],
      },
    ],
    keyword: "européen",
  },
  {
    id: 3,
    title: "Étudiant hors-europe",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `L’étudiant doit justifier de deux ans de présence continue en France avec les documents suivants uniquement.`,
        bullets: [],
      },
      {
        id: 2,
        title: "Justifier sa présence",
        text: ``,
        bullets: [
          "Copie du plus vieux titre de séjour ;",
          "Copie de récépissé titre de séjour ;",
          "3 derniers certificats de scolarité ;",
          "Attestation de la préfecture avec temps de présence en France obligatoirement ;",
        ],
      },
      {
        id: 3,
        title: "",
        text: `Pour les mineurs`,
        bullets: ["Copie du plus ancien titre de circulation pour mineur."],
      },
      {
        id: 4,
        title: "Prise de revenus",
        text: ``,
        bullets: ["Avis fiscal N-2 des parents ou tuteur."],
      },
    ],
    keyword: "hors-europe",
  },
  {
    id: 4,
    title: "Étudiant Nouvelle-Calédonie / Polynésie française/ Saint-Martin",
    paragraphs: [
      {
        id: 1,
        title: "",
        text: `Si les parent ne résident pas en France, l’étudiant ne peut pas bénéficier de la bourse.`,
        bullets: [],
      },
      {
        id: 2,
        title: "Justifier sa situation",
        text: ``,
        bullets: [
          "La carte CPS (indique le nombre d’enfant à charge des parents)",
        ],
      },
      {
        id: 3,
        title: "Prise de revenus",
        text: ``,
        bullets: [
          "Demander le Relevé d’information des revenus familiaux (remplace l’AF)",
        ],
      },
    ],
    keyword: "autres",
  },
];
