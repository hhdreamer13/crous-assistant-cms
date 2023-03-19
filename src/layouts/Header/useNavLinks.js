import { useQuery } from "@tanstack/react-query";
import fetchMenu from "../../utils/fetchMenu";
import slugify from "../../utils/slugify";

const useNavLinks = () => {
  const { data, isLoading } = useQuery(["menu"], fetchMenu);
  if (isLoading) {
    return { navLinks: null, isLoading: true };
  }
  const order = ["Bourse", "Logement", "Social", "CVEC", "Autre"];

  const sortedData = [...data].sort(
    (a, b) => order.indexOf(a.title) - order.indexOf(b.title)
  );

  const navLinks = sortedData.map(({ _id, items, title }) => {
    return {
      id: _id,
      name: title,
      link: `services/${slugify(title)}`,
      subLink: items.map((item) => {
        return {
          id: item._id,
          name: item.title,
          link: `services/${slugify(title)}/${slugify(item.title)}`,
        };
      }),
    };
  });
  console.log("newLink", navLinks);

  return { navLinks, isLoading: false };
};

export default useNavLinks;
