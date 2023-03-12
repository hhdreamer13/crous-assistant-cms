import { Route } from "react-router-dom";

import BourseNationalité from "../BourseCategory/BourseConstitutionCategory/BourseNationalité/BourseNationalité";
import NationalitéDetails from "../BourseCategory/BourseConstitutionCategory/BourseNationalité/NationalitéDetails";

import RessourcesÉtudiantDetails from "../BourseCategory/BourseInstructionCategory/BourseRessources/RessourcesÉtudiantDetails";
import RessourcesParentsDetails from "../BourseCategory/BourseInstructionCategory/BourseRessources/RessourcesParentsDetails";

import BourseRévision from "../BourseCategory/BoursePaiementCategory/BourseRévision/BourseRévision";
import BourseRévisionDetails from "../BourseCategory/BoursePaiementCategory/BourseRévision/BourseRévisionDetails";
import BourseRecours from "../BourseCategory/BoursePaiementCategory/BourseRecours/BourseRecours";
import BourseRecoursDetails from "../BourseCategory/BoursePaiementCategory/BourseRecours/BourseRecoursDetails";

import BourseComplémentairesDetails from "../BourseCategory/BourseComplémentaires/BourseComplémentairesDetails";

import BourseCategoryDetails from "../BourseCategory/BourseCategoryDetails";
import BourseRessources from "../BourseCategory/BourseInstructionCategory/BourseRessources/BourseRessources";
import BourseConstitutionDetails from "../BourseCategory/BourseConstitutionCategory/BourseConstitutionDetails";

import BourseInstructionCategoryDetails from "../BourseCategory/BourseInstructionCategory/BourseInstructionCategoryDetails";
import BoursePaiementCategoryDetails from "../BourseCategory/BoursePaiementCategory/BoursePaiementCategoryDetails";

export default [
  <Route
    key="bourse-category"
    path="/bourse/:name"
    element={<BourseCategoryDetails />}
  />,
  <Route
    key="phases"
    path="/bourse/constitution/:name"
    element={<BourseConstitutionDetails />}
  />,
  <Route
    key="nationalité"
    path="/bourse/constitution/nationalité"
    element={<BourseNationalité />}
  />,
  <Route
    key="nationalité-details"
    path="/bourse/constitution/nationalité/:name"
    element={<NationalitéDetails />}
  />,
  <Route
    key="instruction-details"
    path="/bourse/instruction/:name"
    element={<BourseInstructionCategoryDetails />}
  />,
  <Route
    key="bourse-ressources"
    path="/bourse/instruction/ressources/:name"
    element={<BourseRessources />}
  />,
  <Route
    key="ressources-étudiant-details"
    path="/bourse/instruction/ressources/étudiant/:name"
    element={<RessourcesÉtudiantDetails />}
  />,
  <Route
    key="ressources-parents-details"
    path="/bourse/instruction/ressources/parents/:name"
    element={<RessourcesParentsDetails />}
  />,
  <Route
    key="bourse-paiement"
    path="/bourse/paiement/:name"
    element={<BoursePaiementCategoryDetails />}
  />,
  <Route
    key="révision"
    path="/bourse/paiement/révision/révision-détails"
    element={<BourseRévision />}
  />,
  <Route
    key="révision-details"
    path="/bourse/paiement/révision/révision-détails/:name"
    element={<BourseRévisionDetails />}
  />,
  <Route
    key="recours"
    path="/bourse/paiement/recours/recours-détails"
    element={<BourseRecours />}
  />,
  <Route
    key="recours"
    path="/bourse/paiement/recours/recours-détails/:name"
    element={<BourseRecoursDetails />}
  />,
  <Route
    key="ressources-parents-details"
    path="/bourse/complémentaires/:name"
    element={<BourseComplémentairesDetails />}
  />,
];
