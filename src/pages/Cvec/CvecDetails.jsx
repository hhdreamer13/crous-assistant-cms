import { useParams } from "react-router-dom";
import TextTemplate from "../../components/TextTemplate";
import { data } from "./cvecData";
import slugify from "../../utils/slugify";

const CvecDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ title }) => slugify(title) === name);

  return <TextTemplate content={content} />;
};
export default CvecDetails;
