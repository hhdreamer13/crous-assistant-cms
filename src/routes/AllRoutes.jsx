import { Route } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Services from "../pages/CrousServices/Services";
import Home from "../pages/Home/Home";
import ServicesDetails from "../pages/CrousServices/ServicesDetails";
import BourseDetails from "../pages/Bourse/BourseDetails";
import Nationalité from "../pages/Bourse/Constitution/Nationalité/Nationalité";
import RessourcesParents from "../pages/Bourse/Instruction/Ressources/RessourcesParents";
import RessourcesÉtudiant from "../pages/Bourse/Instruction/Ressources/RessourcesÉtudiant";
import Révision from "../pages/Bourse/Paiement/BourseRévision/Révision";
import Recours from "../pages/Bourse/Paiement/Recours/Recours";
import NotFound from "../pages/NotFound";
import PageDetails from "../pages/PageDetails";

const AllRoutes = () => {
  return (
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />}>
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
        <Route path="/services/bourse/:stages" element={<BourseDetails />} />
        <Route
          path="/services/bourse/constitution-du-dse/:name"
          element={<PageDetails page="bourse" />}
        />
        <Route
          path="/services/bourse/constitution-du-dse/conditions-de-nationalite"
          element={<Nationalité />}
        >
          <Route
            path=":name"
            element={<PageDetails page="bourse-nationalite" />}
          />
        </Route>
        <Route
          path="/services/bourse/instruction-du-dse/:name"
          element={<PageDetails page="bourse" />}
        />
        <Route
          path="/services/bourse/instruction-du-dse/justificatifs-de-ressources-parents"
          element={<RessourcesParents />}
        >
          <Route
            path=":name"
            element={<PageDetails page="bourse-ressource" />}
          />
        </Route>
        <Route
          path="/services/bourse/instruction-du-dse/justificatifs-de-ressources-etudiant"
          element={<RessourcesÉtudiant />}
        >
          <Route
            path=":name"
            element={<PageDetails page="bourse-ressource" />}
          />
        </Route>
        <Route
          path="/services/bourse/paiement-du-dse/:name"
          element={<PageDetails page="bourse" />}
        />
        <Route
          path="/services/bourse/paiement-du-dse/revision"
          element={<Révision />}
        >
          <Route
            path=":name"
            element={<PageDetails page="bourse-revision" />}
          />
        </Route>
        <Route
          path="/services/bourse/paiement-du-dse/recours"
          element={<Recours />}
        >
          <Route path=":name" element={<PageDetails page="bourse-recours" />} />
        </Route>
        <Route
          path="/services/bourse/aides-complementaires/:name"
          element={<PageDetails page="bourse-complementaire" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  );
};

export default AllRoutes;
