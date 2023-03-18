import { useParams } from "react-router-dom";
import TextTemplate from "../../../../components/TextTemplate";
import { data } from "./ressourceEtudiantData";
import slugify from "../../../../utils/slugify";

const RessourcesÉtudiantDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ title }) => slugify(title) === name);

  return <TextTemplate content={content} />;
};
export default RessourcesÉtudiantDetails;
