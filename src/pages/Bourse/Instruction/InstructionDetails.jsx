import { useParams } from "react-router-dom";
import TextTemplate from "../../../components/TextTemplate";
import slugify from "../../../utils/slugify";

const InstructionDetails = () => {
  const data = [
    {
      id: 1,
      title: "Notification Conditionnelle",
      paragraphs: [
        {
          id: 1,
          title: "",
          text: `Après étude et validation du dossier, le Crous envoie par e-mail une réponse de principe indiquant l’échelon de bourse. Cette notification conditionnelle de bourse doit être obligatoirement présentée par l’étudiant à son établissement lors de son inscription. Si la demande ne peut pas aboutir le gestionnaire du DSE a fait un ICR (Information complémentaire de renseignement) lisible sur le fil du logiciel métier, Application de Gestion du Logement et de l'Aide à l'Étudiant (AGLAE).`,
          bullets: [],
        },
      ],
      keyword: "notification-conditionnelle",
    },
    {
      id: 2,
      title: "Modification de vœu",
      paragraphs: [
        {
          id: 1,
          title: "",
          text: `Pour procéder à la modification ou l'ajout des vœux, il nous faut les
          informations suivantes :`,
          bullets: [
            "Le nom du nouvel établissement",
            "Le code UAI RNE du nouvel établissement (à demander à la scolarité)",
            "Le nom de la formation",
            "Le cursus",
            "Le niveau d'étude",
          ],
        },
        {
          id: 2,
          title: "",
          text: `Pour la recherche d’une formation du conseil de l’Europe, il convient de suivre la partie structure de l'AGLAE.`,
          bullets: [],
        },
      ],
      keyword: "voeu",
    },
    {
      id: 3,
      title: "Points de charge - Fratrie",
      paragraphs: [
        {
          id: 1,
          title: "Le calcul",
          text: `Les points de charge sont calculés en fonction de deux critères : la fratrie et la distance entre le domicile familial et le lieu d’études.`,
          bullets: [
            "Pour chaque autre enfant à charge : 2 points",
            `Pour chaque autre enfant à charge, étudiant dans l'enseignement supérieur, l'année N ou N-1, en alternance ou en formation initiale : 4 points`,
          ],
        },
        {
          id: 2,
          title: "Attention",
          text: `Pour pouvoir prendre en compte dans le calcul des points de charge de la
          bourse les frères et sœurs, certaines conditions sont nécessaires :`,
          bullets: [
            `Le frère ou sœur doit être fiscalement à charge sur les revenus de référence (Avis fiscal N-1 sur revenus perçus en N-2).`,
            `Pour les frères et sœurs étant dans le supérieur, leur certificat de scolarité d'études dans le supérieur pour l’année N-1 ou N doit être fourni (si traitement du dossier après le 31/08).`,
            `chaque frère et sœur rattaché fiscalement rapporte 2 points de charge et s'il est dans l'enseignement supérieur 2 points de charge supplémentaires.`,
          ],
        },
      ],
      keyword: "points-fratrie",
    },
    {
      id: 4,
      title: "Points de charge - Distance",
      paragraphs: [
        {
          id: 1,
          title: "Le calcul",
          text: `Étudiant boursier dont le domicile (commune de résidence) familial est
          éloigné de l'établissement d'inscription à la rentrée universitaire :`,
          bullets: [
            "30 à 249 kilomètres : 1 point",
            "250 kilomètres à 3 500 kilomètres : 2 points",
            "3 500 kilomètres à 13 000 kilomètres : 3 points",
            "13 000 kilomètres et plus : 4 points",
          ],
        },
        {
          id: 2,
          title: "Attention",
          text: `l'étudiant inscrit à une préparation à distance ne peut bénéficier des
          points de charge liés à l'éloignement.`,
          bullets: [],
        },
      ],
      keyword: "points-distance",
    },
  ];
  const { name } = useParams();
  const [content] = data.filter(({ title }) => slugify(title) === name);

  return <TextTemplate content={content} />;
};
export default InstructionDetails;
