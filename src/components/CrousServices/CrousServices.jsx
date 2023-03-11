import SelectionMenu from "../common/SelectionMenu";

const CrousServices = () => {
  const crousServices = [
    {
      id: 1,
      name: "Bourse",
      link: "bourse",
    },
    {
      id: 2,
      name: "Logement",
      link: "logement",
    },
    {
      id: 3,
      name: "Social",
      link: "social",
    },
    {
      id: 4,
      name: "CVEC",
      link: "cvec",
    },
    {
      id: 5,
      name: "Autre",
      link: "autre",
    },
  ];
  return <SelectionMenu items={crousServices} />;
};

export default CrousServices;
