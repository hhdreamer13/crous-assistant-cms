import SelectionMenu from "../../../common/SelectionMenu";

const BourseRecours = () => {
  const data = [
    {
      id: 1,
      name: "Recours - Bourses sur critères sociaux",
      link: "bourse/paiement/recours/recours-détails/bcs",
    },
    {
      id: 2,
      name: "Recours - Aides complémentaires",
      link: "bourse/paiement/recours/recours-détails/complémentaire",
    },
  ];
  return <SelectionMenu items={data} />;
};

export default BourseRecours;
