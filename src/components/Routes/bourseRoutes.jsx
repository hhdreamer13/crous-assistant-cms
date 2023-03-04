import { Route } from "react-router-dom";
import BoursePahses from "../BourseCategory/BourseConstitutionCategory/BoursePhases/BoursePhases";
import BourseCritères from "../BourseCategory/BourseConstitutionCategory/BourseCritères/BourseCritères";
import BourseConstitution from "../BourseCategory/BourseConstitutionCategory/BourseConstitution/BourseConstitution";
import BourseNationalité from "../BourseCategory/BourseConstitutionCategory/BourseNationalité/BourseNationalité";
import NationalitéDetails from "../BourseCategory/BourseConstitutionCategory/BourseNationalité/NationalitéDetails";
import BourseInstruction from "../BourseCategory/BourseInstructionCategory/BourseInstruction/BourseInstruction";
import RessourcesÉtudiant from "../BourseCategory/BourseInstructionCategory/RessourcesÉtudiant/RessourcesÉtudiant";
import RessourcesÉtudiantDetails from "../BourseCategory/BourseInstructionCategory/RessourcesÉtudiant/RessourcesÉtudiantDetails";
import PointsFratrie from "../BourseCategory/BourseInstructionCategory/PointsFratrie/PointsFratrie";
import PointsDistance from "../BourseCategory/BourseInstructionCategory/PointsDistance/PointsDistance";
import ModificationVoeu from "../BourseCategory/BourseInstructionCategory/ModificationVoeu/PointsDistance";
import NotificationConditionelle from "../BourseCategory/BourseInstructionCategory/NotificationConditionelle/NotificationConditionelle";
import BoursePaiement from "../BourseCategory/BoursePaiementCategory/BoursePaiement/BoursePaiement";
import NotificationDéfinitive from "../BourseCategory/BoursePaiementCategory/NotificationDéfinitive/NotificationDéfinitive";
import BourseRévision from "../BourseCategory/BoursePaiementCategory/BourseRévision/BourseRévision";
import BourseRévisionDetails from "../BourseCategory/BoursePaiementCategory/BourseRévision/BourseRévisionDetails";
import BourseRecours from "../BourseCategory/BoursePaiementCategory/BourseRecours/BourseRecours";
import BourseRecoursDetails from "../BourseCategory/BoursePaiementCategory/BourseRecours/BourseRecoursDetails";

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
    key="nationalité-details"
    path="/bourse/constitution/nationalité/:name"
    element={<NationalitéDetails />}
  />,
  <Route
    key="instruction"
    path="/bourse/instruction"
    element={<BourseInstruction />}
  />,
  <Route
    key="ressources-etudiant"
    path="/bourse/instruction/ressources-étudiant"
    element={<RessourcesÉtudiant />}
  />,
  <Route
    key="ressources-etudiant-details"
    path="/bourse/instruction/ressources-étudiant/:name"
    element={<RessourcesÉtudiantDetails />}
  />,
  <Route
    key="points-fratrie"
    path="/bourse/instruction/points-fratrie"
    element={<PointsFratrie />}
  />,
  <Route
    key="points-distance"
    path="/bourse/instruction/points-distance"
    element={<PointsDistance />}
  />,
  <Route
    key="modification-voeu"
    path="/bourse/instruction/voeu"
    element={<ModificationVoeu />}
  />,
  <Route
    key="notification-conditionelle"
    path="/bourse/instruction/notification-conditionelle"
    element={<NotificationConditionelle />}
  />,
  <Route key="paiement" path="/bourse/paiement" element={<BoursePaiement />} />,
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
];
