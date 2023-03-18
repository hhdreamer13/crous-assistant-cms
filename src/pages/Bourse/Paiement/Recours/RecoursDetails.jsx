import { useParams } from "react-router-dom";
import TextTemplate from "../../../../components/TextTemplate";
import { data } from "./recoursData";
import slugify from "../../../../utils/slugify";

const RecoursDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ title }) => slugify(title) === name);

  return <TextTemplate content={content} />;
};
export default RecoursDetails;
