const ÉtudiantHorsEurope = () => {
  const etudiantInfo = {
    description:
      "L’étudiant doit justifier de deux ans de présence continue en France avec les documents suivants uniquement :",
    situations: [
      "Copie du plus vieux titre de séjour ;",
      "Copie de récépissé titre de séjour ;",
      "3 derniers certificats de scolarité ;",
      "Attestation de la préfecture avec temps de présence en France obligatoirement ;",
      "Pour les mineurs : Copie du plus ancien titre de circulation pour mineur.",
    ],
    revenus: ["Avis fiscal N-2 des parents ou tuteur."],
  };

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start text-slate-50">
      <h3>Étudiant hors Europe</h3>
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

export default ÉtudiantHorsEurope;
