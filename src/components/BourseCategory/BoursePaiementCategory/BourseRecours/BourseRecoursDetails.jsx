import { useParams } from "react-router-dom";

const BourseRecoursDetails = () => {
  const recoursInfo = [
    {
      title: "Recours pour les bourses d'enseignement supérieur (BCS)",
      description: "Quelques explications ici...",
      recours: [
        {
          type: "Recours gracieux",
          description:
            "Un recours gracieux auprès du recteur compétent, exercé dans le délai de deux mois à compter de la réception de la décision définitive d'attribution ou de non attribution de bourse (pour les bourses relevant du ministère de la culture, ce recours doit être formé auprès du directeur de l'établissement ou auprès du préfet de région selon la nature de l'établissement).",
          adresses: [
            "Paris : 47 rue des écoles 75005 Paris",
            "Créteil : 4 Rue Georges Enesco, 94000 Créteil",
            "Versailles : 3 Boulevard de Lesseps, 78000 Versailles",
          ],
        },
        {
          type: "Recours hiérarchique",
          description:
            "Un recours hiérarchique auprès du ministre chargé de l'enseignement supérieur (ou de la culture, pour les formations relevant de ce dernier), exercé dans le délai de deux mois à compter de la réception de la décision définitive d'attribution ou de non attribution de bourse.",
          //   adresses: [""],
        },
        {
          type: "Recours contentieux",
          description:
            "Un recours contentieux devant le tribunal administratif du ressort du siège de votre région académique, exercé dans le délai de deux mois à compter de la réception de la décision définitive d'attribution ou de non attribution de bourse ou de la décision rejetant votre recours gracieux ou hiérarchique. Cette dernière décision de rejet peut être implicite (absence de réponse de l'administration pendant deux mois). Vous avez la possibilité d'adresser votre requête au tribunal administratif par voie électronique au moyen de la télé-procédure « Télérecours citoyens » en vous connectant sur le site internet www.telerecours.fr.",
          //   adresses: [""],
        },
      ],
      keyword: "bcs",
    },
    {
      title:
        "Recours pour les aides complémentaires (AMP / AMM / CGV / Bourse au mérite région)",
      description: "Quelques explications ici...",
      recours: [
        {
          type: "Recours gracieux",
          description:
            "Un recours gracieux auprès du Directeur général du CROUS, pour cela il faudra envoyer une lettre recommandée à l’attention du Directeur général du Crous de gestion de l’étudiant avec l’ensemble des pièces qui pourront justifier d’un changement de décision ;",
          adresses: [
            `Crous de Paris : Monsieur le Directeur du Crous de Paris Mr Bégué Service des bourses, 39 Avenue Georges Bernanos, 75005 Paris`,
            `Crous de de Créteil : Monsieur le Directeur du Crous de Créteil Mr Scassola Service des bourses, 68/70 av du général de Gaulle, 94000 Créteil`,
            `Crous de Versailles : Madame la Directrice du Crous de Versailles Mme Assous Service des bourses, 145 Boulevard de la Reine BP 563, 78000 Versailles`,
          ],
        },
        {
          type: "Recours contentieux",
          description:
            "Un recours contentieux devant le tribunal administratif du ressort du siège de votre région académique exercé dans le délai de deux mois à compter de la réception de la décision définitive d'attribution ou de non attribution ou de la décision rejetant votre recours gracieux. Cette dernière décision de rejet peut être implicite (absence de réponse de l'administration pendant deux mois). Vous avez la possibilité d'adresser votre requête au tribunal administratif par voie électronique au moyen de la télé-procédure « Télérecours citoyens » en vous connectant sur le site internet www.telerecours.fr.",
          //   adresses: [""],
        },
      ],
      keyword: "complémentaire",
    },
  ];

  const { name } = useParams();
  const [recoursItem] = recoursInfo.filter(({ keyword }) => keyword === name);

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start text-slate-50">
      <h3>{recoursItem.title}</h3>
      <p>{recoursItem.description}</p>
      {recoursItem.recours.map((recour, i) => {
        return (
          <div key={i}>
            <h4>{recour.type}</h4>
            <p>{recour.description}</p>
            {recour.adresses && (
              <div>
                <p>Il faut envoyer la demande écrite aux adresses suivante :</p>
                <ul>
                  {recour.adresses.map((adresse, i) => {
                    return <li key={i}>{adresse}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default BourseRecoursDetails;
