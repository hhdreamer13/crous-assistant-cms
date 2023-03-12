import { useParams } from "react-router-dom";
import TextTemplate from "../../../common/TextTemplate";
import { data } from "./révisionData";

const BourseRévisionDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ keyword }) => keyword === name);

  return <TextTemplate content={content} />;
};
export default BourseRévisionDetails;
