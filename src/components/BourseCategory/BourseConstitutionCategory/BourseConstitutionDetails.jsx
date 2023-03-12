import { useParams } from "react-router-dom";
import TextTemplate from "../../common/TextTemplate";

const BourseConstitutionDetails = () => {
  const data = [
    {
      id: 1,
      title: "Les phases de la demande de bourse",
      paragraphs: [
        {
          id: 1,
          title: "Du 15/03 au 15/05 (phase classique)",
          text: `Le Crous doit apporter une réponse à l’étudiant avant début septembre (notification et demande de pièces complémentaires) Ces dossiers sont à prioriser si toujours aucun traitement en septembre`,
          bullets: [],
        },
        {
          id: 2,
          title: "Du 16/05 au 31/10 (demande hors délais)",
          text: `Ces dossiers ne sont pas priorisés mais les étudiants peuvent bénéficier de la rétroactivité de leur bourse à partir de septembre`,
          bullets: [],
        },
        {
          id: 3,
          title: "Du 01/11 au 31/12 (demande hors délais)",
          text: `Ces dossiers ne sont pas priorisés, pas de rétroactivité, le service des bourses activera le paiement le mois suivant la remontée d’inscription (ex : demande saisie le 03/11 avec une remontée d’inscription le 18/12 mise en paiement pour le mois de janvier). Plus de possibilité de saisir une demande après le 31/12 de l’année (fermeture du serveur).`,
          bullets: [],
        },
      ],
      keyword: "phases",
    },
    {
      id: 2,
      title: "Les critères d'attribution de la bourse",
      paragraphs: [
        {
          id: 1,
          title: "Les conditions à remplir",
          text: `Il y a plusieurs critères spécifiques à remplir pour obtenir la bourse sur critères sociaux.`,
          bullets: [
            "Être âgé de moins de 28 ans au 01/09 de l’année N de la première la demande, si l’étudiant a plus de 28 ans au 01/09 il doit justifier de ne pas avoir interrompu ses études ;",
            "Étudiants parents : limite d’âge reculée d’un an par enfant, prendre AF de l’étudiant et demander l’acte de naissance. Si l’enfant n’est pas rattaché à l’AF des parents, l’étudiant doit fournir une attestation sur l’honneur qui atteste qu’il va le rattacher ;",
            "Étudiants détenus : peuvent prétendre à une bourse sous réserve des conditions générales ;",
            "Étudiants en service civique : limite d’âge reculée en fonction de la durée du service civique ;",
            "Étudiants en volontariat dans les armées : la limite d’âge est reculée en fonction de la durée du contrat (1 à 5 ans max) ;",
            "Étudiants volontaires internationaux : la limite d’âge est reculée en fonction de la durée du contrat (6 à 24 mois max) ;",
            "Avoir utilisé moins de 5 droits en licence et avoir rempli les conditions d’obtention des Européen Crédits Transfer System (cf. organisation des droits de bourses) ;",
            "Étudiants en alternance ne peuvent pas bénécier de la bourse sur critères sociaux. La bourse de Crous n'est pas cumulable avec le régime alternance.",
          ],
        },
      ],
      keyword: "critères",
    },
  ];
  const { name } = useParams();
  const [content] = data.filter(({ keyword }) => keyword === name);

  return <TextTemplate content={content} />;
};

export default BourseConstitutionDetails;
