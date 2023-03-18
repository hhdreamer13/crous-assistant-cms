import { Route } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Services from "../pages/CrousServices/Services";
import Home from "../pages/Home/Home";
import ServicesDetails from "../pages/CrousServices/ServicesDetails";
import SocialDetails from "../pages/Social/SocialDetails";
import LogementDetails from "../pages/Logement/LogementDetails";
import CvecDetails from "../pages/Cvec/CvecDetails";
import AutreDetails from "../pages/Autre/AutreDetails";
import BourseDetails from "../pages/Bourse/BourseDetails";
import ConstitutionDetails from "../pages/Bourse/Constitution/ConstitutionDetails";
import Nationalité from "../pages/Bourse/Constitution/Nationalité/Nationalité";
import NationalitéDetails from "../pages/Bourse/Constitution/Nationalité/NationalitéDetails";
import InstructionDetails from "../pages/Bourse/Instruction/InstructionDetails";
import RessourcesParents from "../pages/Bourse/Instruction/Ressources/RessourcesParents";
import RessourcesParentsDetails from "../pages/Bourse/Instruction/Ressources/RessourcesParentsDetails";
import RessourcesÉtudiant from "../pages/Bourse/Instruction/Ressources/RessourcesÉtudiant";
import RessourcesÉtudiantDetails from "../pages/Bourse/Instruction/Ressources/RessourcesÉtudiantDetails";
import PaiementDetails from "../pages/Bourse/Paiement/PaiementDetails";
import Révision from "../pages/Bourse/Paiement/BourseRévision/Révision";
import RévisionDetails from "../pages/Bourse/Paiement/BourseRévision/RévisionDetails";
import Recours from "../pages/Bourse/Paiement/Recours/Recours";
import RecoursDetails from "../pages/Bourse/Paiement/Recours/RecoursDetails";
import ComplémentairesDetails from "../pages/Bourse/Complémentaires/ComplémentairesDetails";

const AllRoutes = () => {
  return (
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path=":service" element={<ServicesDetails />} />
        </Route>
        <Route path="/services/social/:name" element={<SocialDetails />} />
        <Route path="/services/logement/:name" element={<LogementDetails />} />
        <Route path="/services/cvec/:name" element={<CvecDetails />} />
        <Route path="/services/autre/:name" element={<AutreDetails />} />
        <Route path="/services/bourse/:stages" element={<BourseDetails />} />
        <Route
          path="/services/bourse/constitution-du-dse/:name"
          element={<ConstitutionDetails />}
        />
        <Route
          path="/services/bourse/constitution-du-dse/conditions-de-nationalite"
          element={<Nationalité />}
        >
          <Route path=":name" element={<NationalitéDetails />} />
        </Route>
        <Route
          path="/services/bourse/instruction-du-dse/:name"
          element={<InstructionDetails />}
        />
        <Route
          path="/services/bourse/instruction-du-dse/justificatifs-de-ressources-parents"
          element={<RessourcesParents />}
        >
          <Route path=":name" element={<RessourcesParentsDetails />} />
        </Route>
        <Route
          path="/services/bourse/instruction-du-dse/justificatifs-de-ressources-etudiant"
          element={<RessourcesÉtudiant />}
        >
          <Route path=":name" element={<RessourcesÉtudiantDetails />} />
        </Route>
        <Route
          path="/services/bourse/paiement-du-dse/:name"
          element={<PaiementDetails />}
        />
        <Route
          path="/services/bourse/paiement-du-dse/revision"
          element={<Révision />}
        >
          <Route path=":name" element={<RévisionDetails />} />
        </Route>
        <Route
          path="/services/bourse/paiement-du-dse/recours"
          element={<Recours />}
        >
          <Route path=":name" element={<RecoursDetails />} />
        </Route>
        <Route
          path="/services/bourse/aides-complementaires/:name"
          element={<ComplémentairesDetails />}
        />
      </Route>
    </>
  );
};

export default AllRoutes;
