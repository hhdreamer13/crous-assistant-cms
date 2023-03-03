import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CrousServices from "./components/CrousServices/CrousServices";
import { Fragment } from "react";
import Bourse from "./components/BourseCategory/Bourse/Bourse";
import bourseRoutes from "./components/Routes/bourseRoutes";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<CrousServices />} />
        <Route path="/bourse" element={<Bourse />} />
        {bourseRoutes}
      </Routes>
    </Fragment>
  );
}

export default App;
