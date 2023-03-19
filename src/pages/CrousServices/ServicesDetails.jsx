import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SelectionMenu from "../../components/SelectionMenu";
import slugify from "../../utils/slugify";
import fetchMenu from "../../utils/fetchMenu";
import Loader from "../../components/Loader";

const ServicesDetails = () => {
  const { data, isLoading } = useQuery(["menu"], fetchMenu);

  const location = useLocation();
  const { service } = useParams();

  if (isLoading) {
    return <Loader />;
  }

  const [category] = data.filter(({ title }) => slugify(title) === service);

  return <SelectionMenu items={category.items} location={location} />;
};

export default ServicesDetails;
