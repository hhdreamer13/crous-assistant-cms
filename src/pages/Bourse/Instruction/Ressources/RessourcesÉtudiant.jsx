import SelectionMenu from "../../../../components/SelectionMenu";
import { useLocation, useMatch, Outlet } from "react-router-dom";

const RessourcesÉtudiant = () => {
  const data = [
    {
      id: 1,
      name: "ASE",
      link: "bourse/instruction/ressources/étudiant/ase",
    },
    {
      id: 2,
      name: "Réfugié",
      link: "bourse/instruction/ressources/étudiant/réfugié",
    },
    {
      id: 3,
      name: "Orphelin de ses deux parents",
      link: "bourse/instruction/ressources/étudiant/orphelin",
    },
    {
      id: 4,
      name: "Étudiant avec enfant",
      link: "bourse/instruction/ressources/étudiant/avec-enfant",
    },
    {
      id: 5,
      name: "Étudiant marié ou pacsé",
      link: "bourse/instruction/ressources/étudiant/étudiant-marié",
    },
  ];

  const location = useLocation();
  const match = useMatch(
    "/services/bourse/instruction-du-dse/justificatifs-de-ressources-etudiant/:name"
  );

  return match ? (
    <Outlet />
  ) : (
    <SelectionMenu items={data} location={location} />
  );
};

export default RessourcesÉtudiant;
