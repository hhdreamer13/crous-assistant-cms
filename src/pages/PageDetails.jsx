import { useParams } from "react-router-dom";
import TextTemplate from "../components/TextTemplate";
import slugify from "../utils/slugify";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../utils/fetchData";
import Loader from "../components/Loader";

const PageDetails = ({ page }) => {
  const { name } = useParams();

  const { data, isLoading } = useQuery([page], fetchData);

  const [content] = data
    ? data.filter(({ title }) => slugify(title) === name)
    : [];

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <>{content ? <TextTemplate content={content} /> : <div></div>}</>;
};
export default PageDetails;
