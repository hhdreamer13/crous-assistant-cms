const ÉtudiantEuropéen = () => {
  const etudiantInfo = {
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
  };

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start text-slate-50">
      <h3>Étudiant Européen</h3>
      <p>{etudiantInfo.description}</p>
      <h4>Justifier sa situation</h4>
      <ul>
        {etudiantInfo.situations.map((situation, i) => {
          return (
            <li key={i}>
              <p>{situation.case}</p>
              {situation.documents &&
                situation.documents.map((document, i) => {
                  return <li key={i}>{document}</li>;
                })}
            </li>
          );
        })}
      </ul>
      <h4>Prise de revenus</h4>
      <ul>
        {etudiantInfo.revenus.map((revenu, i) => {
          return <li key={i}>{revenu}</li>;
        })}
      </ul>
    </div>
  );
};

export default ÉtudiantEuropéen;
