import { Route } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Services from "../pages/CrousServices/Services";
import Home from "../pages/Home/Home";
import ServicesDetails from "../pages/CrousServices/ServicesDetails";
import PageCondition from "../pages/PageCondition";
import NotFound from "../pages/NotFound";
import PageDetails from "../pages/PageDetails";

const AllRoutes = () => {
  return (
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services menu="menu" />}>
          <Route path=":service" element={<ServicesDetails />} />
        </Route>
        <Route
          path="/services/social/:name"
          element={<PageDetails page="social" />}
        />
        <Route
          path="/services/logement/:name"
          element={<PageDetails page="logement" />}
        />
        <Route
          path="/services/cvec/:name"
          element={<PageDetails page="cvec" />}
        />
        <Route
          path="/services/autre/:name"
          element={<PageDetails page="autre" />}
        />

        {/* Bourse Routes */}
        <Route
          path="/services/bourse/conditions-de-nationalite"
          element={
            <PageCondition page="conditions-de-nationalite" menu="subMenu" />
          }
        >
          <Route
            path=":name"
            element={<PageDetails page="bourse-nationalite" />}
          />
        </Route>
        <Route
          path="/services/bourse/justificatifs-de-ressources"
          element={
            <PageCondition page="justificatifs-de-ressources" menu="subMenu" />
          }
        >
          <Route
            path=":name"
            element={<PageDetails page="bourse-ressource" />}
          />
        </Route>
        <Route
          path="/services/bourse/:name"
          element={<PageDetails page="bourse" />}
        />
        <Route
          path="/services/bourse/revision"
          element={<PageCondition page="revision" menu="subMenu" />}
        >
          <Route
            path=":name"
            element={<PageDetails page="bourse-revision" />}
          />
        </Route>
        <Route
          path="/services/bourse/recours"
          element={<PageCondition page="recours" menu="subMenu" />}
        >
          <Route path=":name" element={<PageDetails page="bourse-recours" />} />
        </Route>
        <Route
          path="/services/bourse/aides-complementaires"
          element={
            <PageCondition page="aides-complementaires" menu="subMenu" />
          }
        >
          <Route
            path=":name"
            element={<PageDetails page="bourse-complementaire" />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  );
};

export default AllRoutes;
