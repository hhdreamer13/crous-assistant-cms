import SelectionMenu from "../components/SelectionMenu";
import { useLocation, useMatch, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import slugify from "../utils/slugify";
import fetchMenu from "../utils/fetchMenu";
import Loader from "../components/Loader";

const PageCondition = ({ page, menu }) => {
  const { data, isLoading } = useQuery([menu], fetchMenu);

  const location = useLocation();

  const match = useMatch(`/services/bourse/${page}/:name`);

  if (isLoading) {
    return <Loader />;
  }

  const url = location.pathname.split("/");
  const currentUrl = url.pop();

  const [category] = data.filter(({ title }) => slugify(title) === currentUrl);
  console.log(page, menu, match, category);

  return match ? (
    <Outlet />
  ) : (
    <SelectionMenu items={category.items} location={location} />
  );
};

export default PageCondition;
