import SelectionMenu from "../../../../components/SelectionMenu";
import { useLocation, useMatch, Outlet } from "react-router-dom";

const RessourcesParents = () => {
  const data = [
    {
      id: 1,
      name: "Parents mariés, pacsés, concubins ",
      link: "bourse/instruction/ressources/parents/mariés",
    },
    {
      id: 2,
      name: "Parents divorcés, séparés",
      link: "bourse/instruction/ressources/parents/séparés",
    },
    {
      id: 3,
      name: "Parent isolé",
      link: "bourse/instruction/ressources/parents/isolé",
    },
    {
      id: 4,
      name: "Parent remarié",
      link: "bourse/instruction/ressources/parents/remarié",
    },
    {
      id: 5,
      name: "Parent inconnu",
      link: "bourse/instruction/ressources/parents/inconnu",
    },
    {
      id: 6,
      name: "Parent décédé",
      link: "bourse/instruction/ressources/parents/décédé",
    },
  ];

  const location = useLocation();
  const match = useMatch(
    "/services/bourse/instruction-du-dse/justificatifs-de-ressources-parents/:name"
  );

  return match ? (
    <Outlet />
  ) : (
    <SelectionMenu items={data} location={location} />
  );
};

export default RessourcesParents;
