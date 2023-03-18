import SelectionMenu from "../../../../components/SelectionMenu";
import { useLocation, useMatch, Outlet } from "react-router-dom";

const Révision = () => {
  const data = [
    {
      id: 1,
      name: "Maladie",
      link: "bourse/paiement/révision/révision-détails/maladie",
    },
    {
      id: 2,
      name: "Chômage",
      link: "bourse/paiement/révision/révision-détails/chômage",
    },
    {
      id: 3,
      name: "Divorce",
      link: "bourse/paiement/révision/révision-détails/divorce",
    },
    {
      id: 4,
      name: "Décès",
      link: "bourse/paiement/révision/révision-détails/décès",
    },
    {
      id: 5,
      name: "Retraite : pour le privé",
      link: "bourse/paiement/révision/révision-détails/retraite-privé",
    },
    {
      id: 6,
      name: "Retraite : pour la fonction publique",
      link: "bourse/paiement/révision/révision-détails/retraite-publique",
    },
    {
      id: 7,
      name: "Surendettement",
      link: "bourse/paiement/révision/révision-détails/surendettement",
    },
    {
      id: 8,
      name: "Redressement judiciaire ou liquidation judiciaire",
      link: "bourse/paiement/révision/révision-détails/redressement",
    },
    {
      id: 9,
      name: "Réduction du temps de travail",
      link: "bourse/paiement/révision/révision-détails/réduction",
    },
    {
      id: 10,
      name: "Congés sans traitement, sans solde ou parental",
      link: "bourse/paiement/révision/révision-détails/congés",
    },
    {
      id: 11,
      name: "Mise en disponibilité",
      link: "bourse/paiement/révision/révision-détails/disponibilité",
    },
  ];
  const location = useLocation();
  const match = useMatch("/services/bourse/paiement-du-dse/revision/:name");

  return match ? (
    <Outlet />
  ) : (
    <SelectionMenu items={data} location={location} />
  );
};

export default Révision;
