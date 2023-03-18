import { useParams } from "react-router-dom";
import TextTemplate from "../../components/TextTemplate";
import slugify from "../../utils/slugify";
import { data } from "./socialData";

const SocialDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ title }) => slugify(title) === name);

  return <TextTemplate content={content} />;
};
export default SocialDetails;
