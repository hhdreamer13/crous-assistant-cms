import SelectionMenu from "../../../common/SelectionMenu";

const BourseRévision = () => {
  const data = [
    {
      id: 1,
      name: "Maladie",
      link: "bourse/paiement/révision/maladie",
    },
    {
      id: 2,
      name: "Chômage",
      link: "bourse/paiement/révision/chômage",
    },
    {
      id: 3,
      name: "Divorce",
      link: "bourse/paiement/révision/divorce",
    },
    {
      id: 4,
      name: "Décès",
      link: "bourse/paiement/révision/décès",
    },
    {
      id: 5,
      name: "Retraite : pour le privé",
      link: "bourse/paiement/révision/retraite-privé",
    },
    {
      id: 6,
      name: "Retraite : pour la fonction publique",
      link: "bourse/paiement/révision/retraite-publique",
    },
    {
      id: 7,
      name: "Surendettement",
      link: "bourse/paiement/révision/surendettement",
    },
    {
      id: 8,
      name: "Redressement judiciaire ou liquidation judiciaire",
      link: "bourse/paiement/révision/redressement",
    },
    {
      id: 9,
      name: "Réduction du temps de travail",
      link: "bourse/paiement/révision/réduction",
    },
    {
      id: 10,
      name: "Congés sans traitement, sans solde ou parental",
      link: "bourse/paiement/révision/congés",
    },
    {
      id: 11,
      name: "Mise en disponibilité",
      link: "bourse/paiement/révision/disponibilité",
    },
  ];
  return <SelectionMenu items={data} />;
};

export default BourseRévision;
