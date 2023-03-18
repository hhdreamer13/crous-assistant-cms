import { useLocation, Outlet, useMatch } from "react-router-dom";
import SelectionMenu from "../../components/SelectionMenu";

const Services = () => {
  const location = useLocation();
  const crousServices = [
    {
      id: 1,
      name: "Bourse",
    },
    {
      id: 2,
      name: "Logement",
    },
    {
      id: 3,
      name: "Social",
    },
    {
      id: 4,
      name: "CVEC",
    },
    {
      id: 5,
      name: "Autre",
    },
  ];

  const match = useMatch("services/:service");

  return match ? (
    <Outlet />
  ) : (
    <SelectionMenu items={crousServices} location={location} />
  );
};

export default Services;
