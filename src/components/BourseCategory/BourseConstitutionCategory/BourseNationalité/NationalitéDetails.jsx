import { useParams } from "react-router-dom";

const NationalitéDetails = () => {
  const étudiantInfo = [
    {
      title: "Étudiant français",
      description:
        "Pas de conditions particulières de nationalité. Une pièce d’identité à titre vérificatif peut être demandée pour une première demande de bourse.",
      situations: [
        {
          case: "Justifier sa nationalité",
          documents: ["Carte nationale d’identité", "Passeport"],
        },
      ],
      revenus: [
        "Parents en France : prendre l’AF des parents N-2 de la demande.",
        "Parents à l’étranger : demande de consulat à faire.",
      ],
      keyword: "français",
    },
    {
      title: "Étudiant européen",
      description:
        "Doivent justifier pour eux ou leurs parents d’une présence minimum en France au cours de l’année précédente (contrat de travail ou certificat de scolarité N-1...) ou justifier d’une présence en France ou 5 ans de résidence régulière en France, s’il n’était pas en France l’année précédant la demande de bourse.",
      situations: [
        {
          case: "Une présence active minimum est demandée pour l’année N-1 :",
          documents: [
            "Soit un certificat de scolarité N-1.",
            "Soit un contrat de travail même d’une journée ou 1h pour lui ou ses parents.",
          ],
        },
        {
          case: "Une présence de 5 ans minimum en France.",
          document: [""],
        },
      ],
      revenus: [
        "Parents en France : prendre l’AF des parents N-2 de la demande.",
        "Parents en Europe : joindre la « fiche Europe » avec justificatifs fiscaux traduits.",
        "Parents hors Europe : joindre la « fiche autre / com » avec justificatifs fiscaux traduits",
      ],
      keyword: "européen",
    },
    {
      title: "Étudiant hors-europe",
      description:
        "L’étudiant doit justifier de deux ans de présence continue en France avec les documents suivants uniquement :",
      situations: [
        {
          case: "Justifier sa présence en France",
          documents: [
            "Copie du plus vieux titre de séjour ;",
            "Copie de récépissé titre de séjour ;",
            "3 derniers certificats de scolarité ;",
            "Attestation de la préfecture avec temps de présence en France obligatoirement ;",
          ],
        },
        {
          case: "Pour les mineurs",
          documents: ["Copie du plus ancien titre de circulation pour mineur."],
        },
      ],
      revenus: ["Avis fiscal N-2 des parents ou tuteur."],
      keyword: "hors-europe",
    },
    {
      title: "Étudiant Nouvelle-Calédonie / Polynésie française/ Saint-Martin",
      description:
        "Si les parent ne résident pas en France, l’étudiant ne peut pas bénéficier de la bourse.",
      situations: [
        {
          case: "Justifier le nombre d'enfants à charge",
          documents: [
            "La carte CPS (indique le nombre d’enfant à charge des parents)",
          ],
        },
      ],
      revenus: [
        "Demander le Relevé d’information des revenus familiaux (remplace l’AF)",
      ],
      keyword: "autres",
    },
  ];

  const { name } = useParams();
  const [étudiantNationalité] = étudiantInfo.filter(
    ({ keyword }) => keyword === name
  );
  console.log(étudiantNationalité);
  console.log(étudiantNationalité.revenus);

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start text-slate-50">
      <h3>{étudiantNationalité.title}</h3>
      <p>{étudiantNationalité.description}</p>
      <h4>Justifier sa situation</h4>
      <ul>
        {étudiantNationalité.situations.map((situation, i) => {
          return (
            <li key={i}>
              <p>{situation.case}</p>
              <ul>
                {situation.documents &&
                  situation.documents.map((document, i) => {
                    return <li key={i}>{document}</li>;
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
      <h4>Prise de revenus</h4>
      <ul>
        {étudiantNationalité.revenus.map((revenu, i) => {
          return <li key={i}>{revenu}</li>;
        })}
      </ul>
    </div>
  );
};
export default NationalitéDetails;
