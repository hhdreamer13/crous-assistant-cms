import { useParams } from "react-router-dom";
import TextTemplate from "../../../../components/TextTemplate";
import { data } from "./ressourceParentsData";
import slugify from "../../../../utils/slugify";

const RessourcesParentsDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ title }) => slugify(title) === name);

  return <TextTemplate content={content} />;
};
export default RessourcesParentsDetails;
