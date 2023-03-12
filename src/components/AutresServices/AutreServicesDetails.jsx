import { useParams } from "react-router-dom";
import TextTemplate from "../common/TextTemplate";
import { data } from "./autreServiceData";

const AutreServicesDetails = () => {
  const { name } = useParams();
  const [autreSection] = data.filter(({ keyword }) => keyword === name);

  return <TextTemplate content={autreSection} />;
};
export default AutreServicesDetails;
