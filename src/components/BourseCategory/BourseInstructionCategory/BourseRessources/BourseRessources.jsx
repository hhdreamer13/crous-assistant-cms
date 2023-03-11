import SelectionMenu from "../../../common/SelectionMenu";
import { useParams } from "react-router-dom";

const BourseRessources = () => {
  const data = [
    {
      id: 1,
      title: "Ressources Parents",
      keyword: "ressources-parents",
      items: [
        {
          id: 1,
          name: "Parents mariés / pacsés / concubins ",
          link: "bourse/instruction/ressources-parents/mariés",
        },
        {
          id: 2,
          name: "Parents divorcés / séparés",
          link: "bourse/instruction/ressources-parents/séparés",
        },
        {
          id: 3,
          name: "Parent isolé",
          link: "bourse/instruction/ressources-parents/isolé",
        },
        {
          id: 4,
          name: "Parent remarié",
          link: "bourse/instruction/ressources-parents/remarié",
        },
        {
          id: 5,
          name: "Parent inconnu",
          link: "bourse/instruction/ressources-parents/inconnu",
        },
        {
          id: 6,
          name: "Parent décédé",
          link: "bourse/instruction/ressources-parents/décédé",
        },
      ],
    },
    {
      id: 1,
      title: "Ressources Étudiant",
      keyword: "ressources-étudiant",
      items: [
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
      ],
    },
  ];

  const { name } = useParams();
  const [service] = data.filter(({ keyword }) => keyword === name);

  return <SelectionMenu items={service.items} />;
};

export default BourseRessources;
