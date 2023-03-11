import { useParams } from "react-router-dom";

const SocialDetails = () => {
  const data = [
    {
      id: 1,
      heading: "Introduction",
      title: "Le service social de Crous",
      content:
        "Les services sociaux gèrent les aides d’urgence (ASAA et ASAP), l’accompagnement des étudiants en urgence sociale et les notes de rupture familiale (en cas d’absence d’un des parents de l’étudiant). Le dossier de l’étudiant est présenté de façon anonyme à la commission. Si nécessaire, un entretien préalable peut être organisé entre le demandeur de l’aide spécifique et une assistante sociale de son Crous. Cet entretien doit permettre d’évaluer la situation globale de l’étudiant au regard notamment de son parcours universitaire et des difficultés qu’il rencontre. Après examen du dossier, la commission émet un avis d’attribution ou de non- attribution de l’aide spécifique et propose au directeur du Crous le montant de l’aide susceptible d’être accordée. Le directeur du Crous décide du montant de l’aide attribuée et notifie la décision à l’étudiant. Sa décision n’est pas susceptible de recours devant le recteur ou le ministre chargé de l’enseignement supérieur. En cas de changement d’académie postérieur à l’avis de la commission, la décision prise par cette dernière, s’impose au Crous de l’académie du lieu d’inscription de l’étudiant.",
      bulletPoints: [
        "Crous de Paris : les prises de rendez-vous se font directement sur le site MesServicesEtudiant la rubrique « Prendre rendez-vous avec les Crous » et il faut choisir le service social et réserver un créneau pour un rendez-vous présentiel ou téléphonique.",
        "Crous de Versailles : les prises de rendez-vous se font directement sur le site MesServicesEtudiant la rubrique « Prendre rendez-vous avec les Crous » et il faut choisir le service social et réserver un créneau pour un rendez-vous présentiel ou téléphonique.",
        "Crous de Créteil : l’étudiant contacte directement l’accueil du service social pour demander une aide ou un rendez-vous via l’adresse social social@crous-creteil.fr.",
      ],
      keyword: "introduction",
    },
    {
      id: 2,

      heading: "ASAA",
      title: "Allocation spécifique d'allocation annuelle",
      content: `Cette aide permet à l’étudiant d’être exonéré des droits universitaires. L’étudiant a les mêmes devoirs qu’un étudiant boursier et doit être assidu aux cours. L’aide peut être versée sur 6 à 10 mois et correspond à un échelon de BCS. Dans certains cas, l’allocation annuelle peut continuer à être versée pendant les grandes vacances universitaires, dans les mêmes conditions que la bourse sur critères sociaux. La date limite pour demander une ASAA est fixé au 31 décembre de l’année N concerné.

Cette aide est cumulable avec l’aide au mérite et l’aide ponctuelle. En revanche elle n’est pas cumulable avec une BCS, l’étudiant doit donc avoir un refus de bourse obligatoirement. Donc, pour en bénéficier, l’étudiant doit saisir un Dossier Social Étudiant.

Une nouvelle allocation annuelle peut être attribuée l’année suivante dans les mêmes conditions et dans la limite du nombre total de droits prévus pour les bourses d’enseignement supérieur sur critères sociaux (la demande devra être effectuée chaque année).
`,
      bulletPoints: [
        "Avoir déposé un Dossier Social Étudiant et respecter les conditions de nationalité et de diplôme",
        "Être âgé de moins de 35 ans au 1er septembre de l'année pour laquelle l'aide est demandée (sauf handicapé)",
        "Situation pérenne ne pouvant pas donner lieu à l'attribution d'une bourse.",
        "Dispositif lié à l'obligation d'assiduité",
        "Cumulable avec les aides complémentaires : AMM, AMP, aide au mérite, ASAP...",
        "pour les dossiers transférés, la décision d'attribution de la commission ASAA du Crous d'origine doit être respectée et appliquée dans le CROUS d'accueil.",
        "Étudiant en rupture familiale avec ses deux parents en situation d'isolement et de précarité attestée par le service social.",
        "Étudiant élevé par un membre de sa famille sans décision judiciaire",
        "Étudiant en situation d’autonomie avérée, et ayant un refus de bourse, sans soutien matériel de ses parents : Domicile séparé, AF ou déclaration séparé(e), Revenus réguliers / activité salariée, Montant annuel au-moins = à 3 SMICS nets",
        "Étudiant français ou ressortissant de l'UE, de l'EEE ou de la Confédération suisse, demeurant seul sur le territoire dont les revenus déclarés à l'étranger ne permettent pas d'évaluer le droit à bourse.",
        "Toute difficulté particulière jugée légitime par la commission",
      ],
      keyword: "asaa",
    },
    {
      id: 3,
      heading: "ASAP",
      title: "Allocation spécifique aide ponctuelle",
      content: `Cette aide vise à ce que l’étudiant puisse poursuivre ses études malgré une situation grave se présentant au cours de l’année universitaire. Cette situation est attestée par une évaluation sociale. L’aide ponctuelle est cumulable avec une bourse sur critères sociaux, une allocation annuelle, une aide à la mobilité internationale, une aide au mérite.`,
      bulletPoints: [
        "L’aide ponctuelle est versée en une seule fois et ne peut excéder le montant annuel de l’échelon 1 (1 724 euros en 2022).",
        "Si sa situation le justifie, plusieurs aides ponctuelles peuvent exceptionnellement être accordées au cours d’une même année universitaire (mais le montant total ne pourra pas excéder les 1 707 5 142 euros).",
        "L’étudiant doit être en formation initiale.",
        "Pour effectuer la demande d’ASAP, l’étudiant doit se rapprocher du service social de son Crous.",
        "Tout étudiant inscrit en formation initiale y compris sous contrat d'apprentissage (exclusion : étudiants rémunérés en contrat pro ou en CIF).",
        "Prise de rendez-vous avec le service social pour un dossier d’ASAP qui sera présenté en commission ASAP pour un versement ponctuel",
        "Maximum annuel autorisé = 2 fois le montant annuel de l'échelon 2 Cumulable avec une ASAA ou BCS",
      ],
      keyword: "asap",
    },
  ];

  const { name } = useParams();
  const [logementSection] = data.filter(({ keyword }) => keyword === name);

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start pb-12 text-slate-50">
      <h3>{logementSection.heading}</h3>
      <h4>{logementSection.title}</h4>

      <p className="whitespace-pre-line">{logementSection.content}</p>
      <h4>À savoir :</h4>
      <ul>
        {logementSection.bulletPoints.map((bulletPoint, i) => {
          return (
            <li key={i}>
              <p>{bulletPoint}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SocialDetails;
