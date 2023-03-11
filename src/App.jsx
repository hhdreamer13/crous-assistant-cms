import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CrousServices from "./components/CrousServices/CrousServices";
import { Fragment } from "react";
import bourseRoutes from "./components/Routes/bourseRoutes";
import LogementDetails from "./components/LogementCategory/LogementDetails";
import SocialDetails from "./components/SocialCategory/SocialDetails";
import CvecDetails from "./components/CvecCategory/CvecDetails";
import AutreServicesDetails from "./components/AutresServices/AutreServicesDetails";
import CrousServicesDetails from "./components/CrousServices/CrousServicesDetails";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<CrousServices />} />
        <Route path="/:name" element={<CrousServicesDetails />} />
        <Route path="/logement/:name" element={<LogementDetails />} />,
        <Route path="/social/:name" element={<SocialDetails />} />,
        <Route path="/cvec/:name" element={<CvecDetails />} />,{bourseRoutes}
        <Route path="/autre/:name" element={<AutreServicesDetails />} />,
        {bourseRoutes}
      </Routes>
    </Fragment>
  );
}

export default App;
