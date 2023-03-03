import { Route } from "react-router-dom";
import BoursePahses from "../BourseCategory/BourseConstitutionCategory/BoursePhases/BoursePhases";
import BourseCritères from "../BourseCategory/BourseConstitutionCategory/BourseCritères/BourseCritères";
import BourseNationalité from "../BourseCategory/BourseConstitutionCategory/BourseNationalitéCategory/BourseNationalité/BourseNationalité";
import ÉtudiantFrançais from "../BourseCategory/BourseConstitutionCategory/BourseNationalitéCategory/ÉtudiantFrançais/ÉtudiantFrançais";
import ÉtudiantEuropéen from "../BourseCategory/BourseConstitutionCategory/BourseNationalitéCategory/ÉtudiantEuropéen/ÉtudiantEuropéen";
import ÉtudiantHorsEurope from "../BourseCategory/BourseConstitutionCategory/BourseNationalitéCategory/ÉtudiantHorsEurope/ÉtudiantHorsEurope";
import ÉtudiantAutre from "../BourseCategory/BourseConstitutionCategory/BourseNationalitéCategory/ÉtudiantAutre/ÉtudiantAutre";
import BourseConstitution from "../BourseCategory/BourseConstitutionCategory/BourseConstitution/BourseConstitution";

export default [
  <Route
    key="constitution"
    path="/bourse/constitution"
    element={<BourseConstitution />}
  />,
  <Route
    key="phases"
    path="/bourse/constitution/phases"
    element={<BoursePahses />}
  />,
  <Route
    key="critères"
    path="/bourse/constitution/critères"
    element={<BourseCritères />}
  />,
  <Route
    key="nationalité"
    path="/bourse/constitution/nationalité"
    element={<BourseNationalité />}
  />,
  <Route
    key="français"
    path="/bourse/constitution/nationalité/français"
    element={<ÉtudiantFrançais />}
  />,
  <Route
    key="européen"
    path="/bourse/constitution/nationalité/européen"
    element={<ÉtudiantEuropéen />}
  />,
  <Route
    key="hors-europe"
    path="/bourse/constitution/nationalité/hors-europe"
    element={<ÉtudiantHorsEurope />}
  />,
  <Route
    key="étudiant-autres"
    path="/bourse/constitution/nationalité/autres"
    element={<ÉtudiantAutre />}
  />,
];
