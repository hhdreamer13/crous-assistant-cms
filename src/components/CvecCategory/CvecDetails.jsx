import { useParams } from "react-router-dom";
import TextTemplate from "../common/TextTemplate";
import { data } from "./cvecData";

const CvecDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ keyword }) => keyword === name);

  return <TextTemplate content={content} />;
};
export default CvecDetails;
