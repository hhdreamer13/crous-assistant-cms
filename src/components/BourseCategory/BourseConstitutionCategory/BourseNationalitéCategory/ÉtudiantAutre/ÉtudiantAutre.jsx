const ÉtudiantAutre = () => {
  const etudiantInfo = {
    description:
      "Si les parent ne résident pas en France, l’étudiant ne peut pas bénéficier de la bourse.",
    situations: [
      "La carte CPS (indique le nombre d’enfant à charge des parents)",
    ],
    revenus: [
      "Demander le Relevé d’information des revenus familiaux (remplace l’AF)",
    ],
  };

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start text-slate-50">
      <h3>Étudiant Nouvelle-Calédonie / Polynésie française/ Saint-Martin</h3>
      <p>{etudiantInfo.description}</p>
      <h4>Justifier sa situation</h4>
      <ul>
        {etudiantInfo.situations.map((situation, i) => {
          return <li key={i}>{situation}</li>;
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

export default ÉtudiantAutre;
