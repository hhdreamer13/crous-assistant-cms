import SelectionMenu from "../../../../components/SelectionMenu";
import { useLocation, useMatch, Outlet } from "react-router-dom";

const Recours = () => {
  const data = [
    {
      id: 1,
      name: "Recours pour les bourses d'enseignement supérieur",
      link: "bourse/paiement/recours/recours-détails/bcs",
    },
    {
      id: 2,
      name: "Recours pour les aides complémentaires",
      link: "bourse/paiement/recours/recours-détails/complémentaire",
    },
  ];
  const location = useLocation();
  const match = useMatch("/services/bourse/paiement-du-dse/recours/:name");

  return match ? (
    <Outlet />
  ) : (
    <SelectionMenu items={data} location={location} />
  );
};

export default Recours;
