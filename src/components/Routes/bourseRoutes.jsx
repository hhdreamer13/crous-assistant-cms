import { Route } from "react-router-dom";

import BourseNationalité from "../BourseCategory/BourseConstitutionCategory/BourseNationalité/BourseNationalité";
import NationalitéDetails from "../BourseCategory/BourseConstitutionCategory/BourseNationalité/NationalitéDetails";

import RessourcesÉtudiantDetails from "../BourseCategory/BourseInstructionCategory/BourseRessources/RessourcesÉtudiantDetails";
import RessourcesParentsDetails from "../BourseCategory/BourseInstructionCategory/BourseRessources/RessourcesParentsDetails";

import NotificationDéfinitive from "../BourseCategory/BoursePaiementCategory/NotificationDéfinitive/NotificationDéfinitive";
import BourseRévision from "../BourseCategory/BoursePaiementCategory/BourseRévision/BourseRévision";
import BourseRévisionDetails from "../BourseCategory/BoursePaiementCategory/BourseRévision/BourseRévisionDetails";
import BourseRecours from "../BourseCategory/BoursePaiementCategory/BourseRecours/BourseRecours";
import BourseRecoursDetails from "../BourseCategory/BoursePaiementCategory/BourseRecours/BourseRecoursDetails";
import ConseilEurope from "../BourseCategory/BoursePaiementCategory/ConseilEurope/ConseilEurope";
import RefusSuspension from "../BourseCategory/BoursePaiementCategory/RefusSuspension/RefusSuspension";

import BourseEcts from "../BourseCategory/BoursePaiementCategory/BourseEcts/BourseEcts";
import BourseComplémentairesDetails from "../BourseCategory/BourseComplémentaires/BourseComplémentairesDetails";

import BourseCategoryDetails from "../BourseCategory/BourseCategoryDetails";
import BourseRessources from "../BourseCategory/BourseInstructionCategory/BourseRessources/BourseRessources";
import BourseConstitutionDetails from "../BourseCategory/BourseConstitutionCategory/BourseConstitutionDetails";

import BourseInstructionCategoryDetails from "../BourseCategory/BourseInstructionCategory/BourseInstructionCategoryDetails";

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
    key="notification-définitive"
    path="/bourse/paiement/notification-définitive"
    element={<NotificationDéfinitive />}
  />,
  <Route
    key="révision"
    path="/bourse/paiement/révision"
    element={<BourseRévision />}
  />,
  <Route
    key="révision-details"
    path="/bourse/paiement/révision/:name"
    element={<BourseRévisionDetails />}
  />,
  <Route
    key="recours"
    path="/bourse/paiement/recours"
    element={<BourseRecours />}
  />,
  <Route
    key="recours"
    path="/bourse/paiement/recours/:name"
    element={<BourseRecoursDetails />}
  />,
  <Route
    key="conseil-europe"
    path="/bourse/paiement/conseil-europe"
    element={<ConseilEurope />}
  />,
  <Route
    key="refus-suspension"
    path="/bourse/paiement/refus-suspension"
    element={<RefusSuspension />}
  />,
  <Route key="ects" path="/bourse/paiement/ects" element={<BourseEcts />} />,
  <Route
    key="ressources-parents-details"
    path="/bourse/complémentaires/:name"
    element={<BourseComplémentairesDetails />}
  />,
];
