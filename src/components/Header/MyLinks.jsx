export const links = [
  {
    name: "Bourse",
    link: "/bourse",
    submenu: true,
    sublinks: [
      {
        Head: "Constitution",
        sublink: [
          {
            name: "Phases",
            link: "/bourse/constitution/phases",
          },
          {
            name: "Critères",
            link: "/bourse/constitution/critères",
          },
          {
            name: "Nationalité",
            link: "/bourse/constitution/nationalité",
          },
        ],
      },
      {
        Head: "Instruction",
        sublink: [
          {
            name: "Revenus - Parents",
            link: "/bourse/instruction/ressources/parents",
          },
          {
            name: "Revenus - Étudiant",
            link: "/bourse/instruction/ressources/étudiant",
          },
          {
            name: "Fratrie (pts)",
            link: "/bourse/instruction/points-fratrie",
          },
          {
            name: "Distance (pts)",
            link: "/bourse/instruction/points-distance",
          },
          { name: "Modification de vœu", link: "/bourse/instruction/voeu" },
          {
            name: "Notification conditionnelle",
            link: "/bourse/instruction/notification-conditionnelle",
          },
        ],
      },
      {
        Head: "Paiement",
        sublink: [
          {
            name: "Notification définitive",
            link: "/bourse/paiement/notification-définitive",
          },
          {
            name: "Conseil de l’Europe",
            link: "/bourse/paiement/conseil-europe",
          },
          { name: "ECTS", link: "/bourse/paiement/ects" },
          {
            name: "Refus et suspension",
            link: "/bourse/paiement/refus-suspension",
          },
          { name: "Révision", link: "/bourse/paiement/révision" },
          { name: "Recours", link: "/bourse/paiement/recours" },
        ],
      },
      {
        Head: "Aides complémentaires",
        sublink: [
          {
            name: "Mérite Nationale",
            link: "/bourse/complémentaires/bm-nationale",
          },
          {
            name: "Mérite Régionale",
            link: "/bourse/complémentaires/bm-régionale",
          },
          {
            name: "Grandes Vacances",
            link: "/bourse/complémentaires/cgv",
          },
          {
            name: "Mobilité Parcoursup",
            link: "/bourse/complémentaires/amp",
          },
          {
            name: "Mobilité Master",
            link: "/bourse/complémentaires/amm",
          },
        ],
      },
    ],
  },
  {
    name: "Logement",
    link: "/logement",
    submenu: true,
    sublinks: [
      {
        Head: "Logement",
        sublink: [
          { name: "Introduction", link: "/logement/introduction" },
          { name: "Phase initiale", link: "/logement/phase-initiale" },
          {
            name: "Phase complémentaire",
            link: "/logement/phase-complémentaire",
          },
          { name: "Renouvellement", link: "/logement/renouvellement" },
          { name: "Principes généraux", link: "/logement/info" },
          { name: "Solution alternative", link: "/logement/autre" },
        ],
      },
    ],
  },
  {
    name: "Social",
    link: "/social",
    submenu: true,
    sublinks: [
      {
        Head: "Social",
        sublink: [
          { name: "Introduction", link: "/social/introduction" },
          { name: "ASAA", link: "/social/asaa" },
          { name: "ASAP", link: "/social/asap" },
        ],
      },
    ],
  },
  {
    name: "CVEC",
    link: "/cvec",
    submenu: true,
    sublinks: [
      {
        Head: "CVEC",
        sublink: [
          { name: "Introduction", link: "/cvec/introduction" },
          { name: "Exonération", link: "/cvec/exonération" },
          { name: "Paiement de la CVEC", link: "/cvec/paiement" },
          { name: "FAQ de la CVEC", link: "/cvec/faq" },
        ],
      },
    ],
  },
  {
    name: "Autre",
    link: "/autre",
    submenu: true,
    sublinks: [
      {
        Head: "Autre",
        sublink: [
          { name: "IZLY", link: "/autre/izly" },
          { name: "Informations générales", link: "/autre/info" },
          { name: "Faire un Ticket", link: "/autre/ticket" },
          { name: "Mail type", link: "/autre/mail" },
        ],
      },
    ],
  },
];
