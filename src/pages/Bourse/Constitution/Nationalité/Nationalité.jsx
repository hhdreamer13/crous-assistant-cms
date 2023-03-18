import SelectionMenu from "../../../../components/SelectionMenu";
import { useLocation, useMatch, Outlet } from "react-router-dom";

const Nationalité = () => {
  const data = [
    {
      id: 1,
      name: "Étudiant français",
      link: "bourse/constitution/nationalité/français",
    },
    {
      id: 2,
      name: "Étudiant européen",
      link: "bourse/constitution/nationalité/européen",
    },
    {
      id: 3,
      name: "Étudiant hors-Europe",
      link: "bourse/constitution/nationalité/hors-europe",
    },
    {
      id: 4,
      name: "Étudiant Nouvelle-Calédonie",
      link: "bourse/constitution/nationalité/autres",
    },
  ];
  const location = useLocation();
  const match = useMatch(
    "/services/bourse/constitution-du-dse/conditions-de-nationalite/:name"
  );

  return match ? (
    <Outlet />
  ) : (
    <SelectionMenu items={data} location={location} />
  );
};

export default Nationalité;
