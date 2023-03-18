import { useParams, useLocation } from "react-router-dom";
import SelectionMenu from "../../components/SelectionMenu";
import slugify from "../../utils/slugify";

const BourseDetails = () => {
  const data = [
    {
      id: 1,
      title: "Constitution du DSE",
      keyword: "constitution",
      items: [
        {
          id: 1,
          name: "Phases de la demande de bourse",
          link: "bourse/constitution/phases",
        },
        {
          id: 2,
          name: "Critères d'attribution",
          link: "bourse/constitution/critères",
        },
        {
          id: 3,
          name: "Conditions de nationalité",
          link: "bourse/constitution/nationalité",
        },
      ],
    },
    {
      id: 2,
      title: "Instruction du DSE",
      keyword: "instruction",
      items: [
        {
          id: 1,
          name: "Justificatifs de ressources - Parents",
          link: "bourse/instruction/ressources/parents",
        },
        {
          id: 2,
          name: "Justificatifs de ressources - Étudiant",
          link: "bourse/instruction/ressources/étudiant",
        },
        {
          id: 3,
          name: "Points de charge - Fratrie",
          link: "bourse/instruction/points-fratrie",
        },
        {
          id: 4,
          name: "Points de charge - Distance",
          link: "bourse/instruction/points-distance",
        },
        {
          id: 5,
          name: "Modification de vœu",
          link: "bourse/instruction/voeu",
        },
        {
          id: 6,
          name: "Notification conditionnelle",
          link: "bourse/instruction/notification-conditionnelle",
        },
      ],
    },
    {
      id: 3,
      title: "Paiement du DSE",
      keyword: "paiement",
      items: [
        {
          id: 1,
          name: "Notification définitive",
          link: "bourse/paiement/notification-définitive",
        },
        {
          id: 2,
          name: "Étudiant dans un pays Conseil de l’Europe",
          link: "bourse/paiement/conseil-europe",
        },
        {
          id: 3,
          name: "ECTS",
          link: "bourse/paiement/ects",
        },
        {
          id: 3,
          name: "Refus et suspension de la bourse",
          link: "bourse/paiement/refus-suspension",
        },
        {
          id: 4,
          name: "Révision",
          link: "bourse/paiement/révision/révision-détails",
        },
        {
          id: 5,
          name: "Recours",
          link: "bourse/paiement/recours/recours-détails",
        },
      ],
    },
    {
      id: 4,
      title: "Aides Complémentaires",
      keyword: "complémentaires",
      items: [
        {
          id: 1,
          name: "Aide au Mérite Nationale",
          link: "bourse/complémentaires/bm-nationale",
        },
        {
          id: 2,
          name: "Aide au Mérite Régionale",
          link: "bourse/complémentaires/bm-régionale",
        },
        {
          id: 3,
          name: "Complément Grandes Vacances",
          link: "bourse/complémentaires/cgv",
        },
        {
          id: 4,
          name: "Aide à la Mobilité Parcoursup",
          link: "bourse/complémentaires/amp",
        },
        {
          id: 5,
          name: "Aide à la Mobilité Master",
          link: "bourse/complémentaires/amm",
        },
      ],
    },
  ];

  const location = useLocation();
  const { stages } = useParams();
  const [category] = data.filter(({ title }) => slugify(title) === stages);

  return <SelectionMenu items={category.items} location={location} />;
};

export default BourseDetails;
