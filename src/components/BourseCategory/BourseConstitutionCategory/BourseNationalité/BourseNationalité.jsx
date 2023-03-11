import SelectionMenu from "../../../common/SelectionMenu";

const BourseNationalité = () => {
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
  return <SelectionMenu items={data} />;
};

export default BourseNationalité;
