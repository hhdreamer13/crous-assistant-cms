const ÉtudiantFrançais = () => {
  const etudiantInfo = {
    description:
      "Pas de conditions particulières de nationalité. Une pièce d’identité à titre vérificatif peut être demandée pour une première demande de bourse.",
    situations: ["Carte nationale d’identité", "Passeport"],
    revenus: [
      "Parents en France : prendre l’AF des parents N-2 de la demande.",
      "Parents à l’étranger : demande de consulat à faire.",
    ],
  };

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start text-slate-50">
      <h3>Étudiant Français</h3>
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

export default ÉtudiantFrançais;
