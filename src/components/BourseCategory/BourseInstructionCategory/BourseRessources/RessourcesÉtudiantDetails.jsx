import { useParams } from "react-router-dom";

const RessourcesÉtudiantDetails = () => {
  const étudiantInfo = [
    {
      title: "ASE",
      description:
        "L’Aide Sociale à l’Enfance est ce qu’on appelle communément les enfants placés en famille d’accueil ou en foyer. Il peut justifier en fournissant par exemple l’un des documents suivants : jugement d’assistance éducative, attestation du conseil départemental.",
      situations: [
        "Jugement d’assistance éducative",
        "Attestation du conseil départemental",
        "Contrat jeune majeur",
      ],
      revenus: ["Prendre de revenus de l’étudiant"],
      keyword: "ase",
    },
    {
      title: "Réfugié",
      description:
        "Par réfugié on entend l’étudiant qui bénéficie du statut de réfugié ; de la protection subsidiaire ou temporaire. L’étudiant réfugié doit fournir l’un des documents suivants.",
      situations: [
        "Carte de résident mentionnant son statut de réfugié ;",
        "Récépissé de la demande de délivrance ou de renouvellement du titre de séjour, qui vaut autorisation de séjour, portant la mention « reconnu réfugié » délivré par la Préfecture ;",
        "Attestation délivrée par l’OFPRA informant l’étudiant de son admission au statut de réfugié.",
      ],
      revenus: [
        "L’avis fiscal N-2 ou N-1 selon la date d’arrivée en France.",
        "Si l’étudiant vient juste d’arriver, il faut demander une attestation à la Caisse d’Allocation Familiale de non-perception d’aides ainsi que sa déclaration sur l’honneur de revenus.",
      ],
      keyword: "réfugié",
    },
    {
      title: "Étudiant orphelin de ses deux parents",
      description:
        "Sont pris en compte les revenus du foyer fiscal auquel l’étudiant est rattaché ou à défaut, ses revenus personnels s’ils existent.",
      situations: ["Acte de décès de ses deux parents"],
      revenus: ["Prendre de revenus de l’étudiant"],
      keyword: "orphelin",
    },
    {
      title: "Étudiant avec enfant",
      description:
        "Si l’étudiant est parent, ses revenus sont pris en compte. L’enfant doit être à charge fiscalement ou l’étudiant doit fournir une attestation sur l’honneur de rattachement futur si naissance en N-1 ou N, avec l’acte de naissance de l’enfant.",
      situations: ["Acte de naissance de l’enfant"],
      revenus: [
        "Enfant à charge fiscalement ou attestation sur l'honneur de rattachement futur si naissance en N-1 ou N",
      ],
      keyword: "avec-enfant",
    },
    {
      title: "Étudiant marié ou pacsé",
      description:
        "Lorsqu’un étudiant est marié ou pacsé, les revenus pris en compte sont ceux du couple à condition qu’ils justifient de ressources supérieures ou égales à 90% du SMIC. Les intéressés doivent avoir établi une déclaration fiscale commune distincte de celle des parents, du tuteur légal ou du délégataire de l’autorité parentale.",
      situations: ["Acte de mariage", "Document PACS"],
      revenus: [
        "Prendre leur AF commun seulement s’ils déclarent 90% d’un SMIC",
        "Sans avis fiscal il faut prendre la déclaration commune plus le bulletin de salaire",
      ],
      keyword: "étudiant-marié",
    },
  ];

  const { name } = useParams();
  const [étudiantRessource] = étudiantInfo.filter(
    ({ keyword }) => keyword === name
  );

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start text-slate-50">
      <h3>{étudiantRessource.title}</h3>
      <p>{étudiantRessource.description}</p>
      <h4>Justifier sa situation</h4>
      <ul>
        {étudiantRessource.situations.map((situation, i) => {
          return (
            <li key={i}>
              <p>{situation}</p>
            </li>
          );
        })}
      </ul>
      <h4>Prise de revenus</h4>
      <ul>
        {étudiantRessource.revenus.map((revenu, i) => {
          return <li key={i}>{revenu}</li>;
        })}
      </ul>
    </div>
  );
};
export default RessourcesÉtudiantDetails;
