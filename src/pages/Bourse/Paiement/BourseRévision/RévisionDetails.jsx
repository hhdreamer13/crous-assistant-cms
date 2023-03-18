import { useParams } from "react-router-dom";
import TextTemplate from "../../../../components/TextTemplate";
import { data } from "./révisionData";
import slugify from "../../../../utils/slugify";

const RévisionDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ title }) => slugify(title) === name);

  return <TextTemplate content={content} />;
};
export default RévisionDetails;
