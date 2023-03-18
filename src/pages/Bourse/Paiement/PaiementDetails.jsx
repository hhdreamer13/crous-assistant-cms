import { useParams } from "react-router-dom";
import TextTemplate from "../../../components/TextTemplate";
import slugify from "../../../utils/slugify";

const PaiementDetails = () => {
  const data = [
    {
      id: 1,
      title: "Notification Définitive",
      paragraphs: [
        {
          id: 1,
          title: "",
          text: `L’établissement de l’étudiant nous confirme son inscription administrative via la remontée sur le logiciel AGLAE, une fois la remontée visible, vous devez vérifier si le niveau d’étude est conforme à la notification conditionnelle et que le régime d’inscription est habilité (seuls les régimes 10 et 11 le sont). Si la remontée est conforme et que la mise en paiement de la bourse n’est pas activée, vous devez faire remonter aux services de bourses via activation contrôle paiement sur AGLAE.`,
          bullets: [],
        },
        {
          id: 2,
          title: "Rétroactivité",
          text: `A' partir de Novembre N de la demande, l’étudiant doit fournir une attestation d’assiduité du 1er semestre pour activer le paiement de sa bourse. Vous devrez donc vérifier que le document est bien numérisé avant de faire un ticket et indiquer dans la zone texte « attestation d’assiduité » pour accepter la rétroactivité.`,
          bullets: [],
        },
        {
          id: 3,
          title: "Attention",
          text: ``,
          bullets: [
            "Seul la mise en paiement du dossier déclenche l’envoi de la notification définitive.",
          ],
        },
      ],
      keyword: "notification-définitive",
    },
    {
      id: 2,
      title: "Étudiant dans un pays Conseil de l’Europe",
      paragraphs: [
        {
          id: 1,
          title: "",
          text: `Les étudiants en conseil de l’Europe passent principalement par le centre de contact des Crous d’IDF pour le rajout de vœu. Pour cela il faut indiquer le pays, la ville, le nom de l'établissement ainsi que la formation, le cursus et le niveau d'études. Nous vérifierons alors si l'établissement est habilité à la bourse.`,
          bullets: [],
        },
        {
          id: 2,
          title: "",
          text: `Le traitement du dossier d’un étudiant en Conseil de l’Europe est identique à celui d’un étudiant en France. Par contre, on ne peut pas avoir une remontée d’inscription de leur établissement. Ainsi, on demande des justificatifs pour déclencher la bourse.`,
          bullets: [],
        },
        {
          id: 3,
          title: "Les documents demandés pour activer la mise en paiement :",
          text: ``,
          bullets: [
            "Certificat de scolarité de l’établissement d’étude en Europe avec la mention temps plein ou « full time ».",
            "Un justificatif de domicile de moins de 3 mois (bail, quittances de loyer, factures d’énergie).",
            "Un document justifiant du niveau d’étude de l’étudiant (à partir du 3ème droit consommé).",
          ],
        },
        {
          id: 4,
          title: "Attention",
          text: ``,
          bullets: [
            "Il y a une tolérance pour les documents traduits en anglais (mention Full time sur le certificat de scolarité obligatoire).",
            "Si le niveau d’étude est indiqué sur le certificat de scolarité vous n’avez pas besoin de demander ce justificatif en plus (ex : inscription en Licence 3 ou baccalauréat universitaire 4eme année = pas besoin d’un document supplémentaire).",
            "Si l’étudiant habite à la frontière, avec une distance moins de 30km de son établissement, on peut accepter son justificatif de domicile même si c’est un justificatif de domicile en France.",
            "A noter que certains établissements étrangers produisent des certificats de scolarité par semestre. Si c’est le cas, vous devez faire remonter le ticket avec en commentaire « mettre en paiement pour le S1, voir certificat de scolarité » et prévenir l’étudiant qu’il devra fournir le certificat du second semestre",
            "Si les documents sont conformes, vous devez faire un ticket pour demander la mise en paiement en indiquant que c’est un conseil de l’Europe ou vous pouvez mettre le dossier en contrôle paiement (code d’activation Pb).",
          ],
        },
        {
          id: 5,
          title: "États membres du Conseil de l’Europe",
          text: `Allemagne, Autriche, Belgique, Bosnie-Herzégovine, Bulgarie, Chypre, Croatie, Danemark, Espagne, Estonie, Finlande, Grèce, Hongrie, Irlande, Islande, Italie, Lettonie, Liechtenstein, Lituanie, Luxembourg, Macédoine, Malte, Monténégro, Norvège, Pays-Bas, Pologne, Portugal, République-Tchèque, Roumanie, Royaume-Uni, Serbie, Slovaquie, Slovénie, Suède, Suisse.`,
          bullets: [],
        },
      ],
      keyword: "conseil-europe",
    },
    {
      id: 3,
      title: "ECTS",
      paragraphs: [
        {
          id: 1,
          title: "",
          text: `Un étudiant ne peut excéder 7 droits de bourse par chaque ministère. C’est-à-dire que chaque étudiant a 2 droits de bourse en plus pour utilise par cursus (soit licence soit master).`,
          bullets: [
            "7 droits de bourse maximum pour l’ensemble de la scolarité et pour chaque ministère",
            "5 droits de bourse maximum pour le cursus licence",
            "4 droits de bourse maximum pour master.",
          ],
        },
        {
          id: 2,
          title: "Attention",
          text: ``,
          bullets: [
            "Le nombre total de droits de bourse ne peut excéder 7 droits.",
            "L’étudiant ayant validé un master 2 ne peut pas prétendre à une bourse en licence, même s’il lui reste des droits.",
            "Pour les étudiants ayant interrompu leurs études sans rembourser = leur droit de bourse a été consommé.",
            "Dans la réglementation, un étudiant peut bénéficier de 35 droits pour l’ensemble de sa scolarité (7 droits pour chaque ministère).",
          ],
        },
        {
          id: 3,
          title: "Organisation du droit de bourse",
          text: ``,
          bullets: [
            "Le 3ème droit de bourse est soumis à des conditions de réussite et ne peut être accordé que si l’étudiant a validé 60 ECTS (1 an ou 2 semestres), Cette règle n’est pas applicable aux étudiants admis en formation mise à niveau",
            "Le 4ème et 5ème droit ne peut être accordés que si l’étudiant a validé 120 ECTS (2 années ou 4 semestres)",
            "Le 6ème et 7ème droit ne peuvent être accordés qu’aux étudiants (180 ECTS obligatoires)",
            "Un étudiant titulaire d’une licence peut utiliser des droits de cursus non consommés pour un autre diplôme équivalent dans la limite des 5 droits MAXIMUM en licence.",
            "Un étudiant titulaire d’un master 2 peut bénéficier des droits de bourse non utilisés dans la limite des droits MAXIMUM seulement pour un cursus Master.",
          ],
        },
        {
          id: 4,
          title: "Trois cas où on ne comptabilise pas le droit à la bourse",
          text: ``,
          bullets: [
            "Étudiant avec certificat médical de la médecine préventive de son établissement certifiant de l’impossibilité de suivre les cours (pour les écoles, c’est la médecine préventive du rectorat)",
            "Bourse attribuée par erreur à l’étudiant",
            "Étudiant faisant annuler son inscription et remboursant la bourse",
          ],
        },
        {
          id: 5,
          title: "Un droit de bourse supplémentaire pour",
          text: ``,
          bullets: [
            "Étudiants en situation d’échec dû à la situation familiale ou personnelle (décès, maternité, maladie), attesté obligatoirement par un certificat du service de médecine préventive de son établissement / 1 droit de bourse supplémentaire par cursus.",
            `Étudiants en médecine / odontologie / pharmacie, dans le cadre d’un cursus linéaire (pas de redoublement), dans le même diplôme et même établissement (sur dérogation), 1 droit supplémentaire pour l’ensemble de la scolarité OU pour un étudiant redoublant sa 1ère année de PACES et se réinscrivant en PACES l’année d’après (et suivant son cursus de façon linéaire).`,
            "Étudiant sous contrat de réussite pédagogique, prévoyant une L1 en deux ans (justificatif obligatoire).",
          ],
        },
        {
          id: 6,
          title:
            "Trois droits de bourse supplémentaires pour l’ensemble de la scolarité",
          text: ``,
          bullets: [
            `Les étudiants handicapés reconnus par la commission des droits et de l’autonomie des personnes handicapées bénéficient de 3 droits supplémentaires pour le cursus Licence ainsi que 2 droits supplémentaires pour le cursus Master soit 12 droits au total.`,
            "Les sportifs de haut niveau, inscrits sur la liste du ministère des sports.",
          ],
        },
      ],
      keyword: "ects",
    },
    {
      id: 4,
      title: "Refus et suspension de la bourse",
      paragraphs: [
        {
          id: 1,
          title: "",
          text: `Après une première étude de dossier, il est possible que l’étudiant se voit refuser l’obtention de la bourse sur critères sociaux. Ces refus normalement se codifient sur AGLAE avec l’un des codes suivants :`,
          bullets: [
            "Conditions non remplies : Vous ne remplissez pas une ou plusieurs condition(s) énoncée(s) par la règlementation en vigueur.",
            "Dépassement du barème : Vous dépassez le plafond annuel des ressources.",
            "Droits à bourse épuisés : Vous avez épuisé vos droits à bourse au titre du cycle demandé.",
            "Crédits obtenus insuffisants : Vous n’avez pas obtenu le nombre de crédits européens nécessaire à l’obtention du droit à bourse.",
            "Droits à bourse épuisés (LMD) : Vous avez épuisé vos droits à bourse au titre de ce cursus.",
            "Formation non habilitée : La formation dans l’établissement que vous avez choisi n’est pas habilitée à recevoir des boursiers.",
          ],
        },
        {
          id: 1,
          title: "Les cas particuliers",
          text: ``,
          bullets: [
            "Étudiants en contrat d’apprentissage, de professionnalisation ou en CIF.",
            "Étudiants suivant des cours de remise à niveau linguistique dans un pays étranger",
            "Étudiants inscrits au pôle emploi ou percevant le RSA (sauf RSA majoré)",
            "Fonctionnaires y compris stagiaires en activité, disponibilité ou en congés sans traitement (idem ens. Privé)",
            "Étudiants percevant la garantie jeune",
            "Étudiants percevant une pension de retraite",
            "Étudiants 3ème cycle en médecine, pharmacy, odontologie, vétérinaire",
            "Étudiants en doctorat",
          ],
        },
        {
          id: 1,
          title: "Les différents motifs de suspension de la bourse",
          text: ``,
          bullets: [
            "Arrêt d’études",
            "Annulation d'inscription",
            "Plusieurs remontées d’inscription",
            "Paiement à tort",
            "Assiduité",
          ],
        },
        {
          id: 1,
          title: "Attention",
          text: ``,
          bullets: [
            `le régime 12 et 20 (formation continue) sur une remontée d’inscription font systématiquement l’objet d’un rejet (contrairement au régime 10 et 11 qui correspond à la formation initiale).`,
            `C’est de la responsabilité de l’établissement de contrôler l’assiduité aux cours et examens. Les établissements de formation effectuent deux contrôles d'assiduité, un chaque semestre. Ils transmettent ensuite les listes d'étudiants non assidus au Crous qui suspend le versement de la bourse.`,
            `le Crous n'est pas compétent pour traiter les justificatifs. Les absences se justifient IMPÉRATIVEMENT auprès de la scolarité de l’établissement.`,
          ],
        },
      ],
      keyword: "refus-suspension",
    },
  ];
  const { name } = useParams();
  const [content] = data.filter(({ title }) => slugify(title) === name);

  return <TextTemplate content={content} />;
};
export default PaiementDetails;
