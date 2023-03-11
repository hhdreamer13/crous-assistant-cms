import SelectionMenu from "../../../common/SelectionMenu";

const RessourcesÉtudiant = () => {
  const data = [
    {
      id: 1,
      name: "ASE",
      link: "bourse/instruction/ressources-étudiant/ase",
    },
    {
      id: 2,
      name: "Réfugié",
      link: "bourse/instruction/ressources-étudiant/réfugié",
    },
    {
      id: 3,
      name: "Orphelin de ses deux parents",
      link: "bourse/instruction/ressources-étudiant/orphelin",
    },
    {
      id: 4,
      name: "Étudiant avec enfant",
      link: "bourse/instruction/ressources-étudiant/avec-enfant",
    },
    {
      id: 5,
      name: "Étudiant marié ou pacsé",
      link: "bourse/instruction/ressources-étudiant/étudiant-marié",
    },
  ];
  return <SelectionMenu items={data} />;
};

export default RessourcesÉtudiant;
