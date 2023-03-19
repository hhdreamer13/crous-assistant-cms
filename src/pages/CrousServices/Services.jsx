import { useLocation, Outlet, useMatch } from "react-router-dom";
import SelectionMenu from "../../components/SelectionMenu";
import fetchMenu from "../../utils/fetchMenu";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";

const Services = ({ menu }) => {
  const { data, isLoading } = useQuery([menu], fetchMenu);

  const location = useLocation();
  const match = useMatch("services/:service");

  if (isLoading) {
    return <Loader />;
  }
  data.sort((a, b) => {
    const order = ["Bourse", "Logement", "Social", "CVEC", "Autre"];
    return order.indexOf(a.title) - order.indexOf(b.title);
  });

  return match ? (
    <Outlet />
  ) : (
    <SelectionMenu items={data} location={location} />
  );
};

export default Services;
