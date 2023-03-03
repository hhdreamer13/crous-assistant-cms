const BoursePahses = () => {
  const phases = [
    {
      id: 1,
      titre: "Du 15/03 au 15/05 (phase classique)",
      description:
        "Le Crous doit apporter une réponse à l’étudiant avant début septembre (notification et demande de pièces complémentaires) Ces dossiers sont à prioriser si toujours aucun traitement en septembre",
    },
    {
      id: 2,
      titre: "Du 16/05 au 31/10 (demande hors délais)",
      description:
        "Ces dossiers ne sont pas priorisés mais les étudiants peuvent bénéficier de la rétroactivité de leur bourse à partir de septembre",
    },
    {
      id: 3,
      titre: "Du 01/11 au 31/12 (demande hors délais)",
      description:
        "Ces dossiers ne sont pas priorisés, pas de rétroactivité, le service des bourses activera le paiement le mois suivant la remontée d’inscription (ex : demande saisie le 03/11 avec une remontée d’inscription le 18/12 mise en paiement pour le mois de janvier). Plus de possibilité de saisir une demande après le 31/12 de l’année (fermeture du serveur).",
    },
  ];

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-center text-slate-50">
      <h3>Phases de la demande de bourse</h3>
      <ul>
        {phases.map(({ id, titre, description }) => {
          return (
            <li key={id}>
              <h4>{titre}</h4>
              <p>{description}</p>
            </li>
          );
        })}
        {/* Attentions */}
      </ul>
    </div>
  );
};

export default BoursePahses;
