import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CrousServices from "./components/CrousServices/CrousServices";
import { Fragment } from "react";
import Bourse from "./components/BourseCategory/Bourse/Bourse";
import bourseRoutes from "./components/Routes/bourseRoutes";
import Logement from "./components/LogementCategory/Logement";
import LogementDetails from "./components/LogementCategory/LogementDetails";
import Social from "./components/SocialCategory/Social";
import SocialDetails from "./components/SocialCategory/SocialDetails";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<CrousServices />} />
        <Route path="/bourse" element={<Bourse />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/logement/:name" element={<LogementDetails />} />,
        <Route path="/social" element={<Social />} />
        <Route path="/social/:name" element={<SocialDetails />} />,
        {bourseRoutes}
      </Routes>
    </Fragment>
  );
}

export default App;
