const BourseCritères = () => {
  const phases = [
    {
      id: 1,
      description:
        "Être âgé de moins de 28 ans au 01/09 de l’année N de la première la demande, si l’étudiant a plus de 28 ans au 01/09 il doit justifier de ne pas avoir interrompu ses études ;",
    },
    {
      id: 2,
      description:
        "Étudiants parents : limite d’âge reculée d’un an par enfant, prendre AF de l’étudiant et demander l’acte de naissance. Si l’enfant n’est pas rattaché à l’AF des parents, l’étudiant doit fournir une attestation sur l’honneur qui atteste qu’il va le rattacher ;",
    },
    {
      id: 3,
      description:
        "Étudiants détenus : peuvent prétendre à une bourse sous réserve des conditions générales ;",
    },
    {
      id: 4,
      description:
        "Étudiants en service civique : limite d’âge reculée en fonction de la durée du service civique ;",
    },
    {
      id: 5,
      description:
        "Étudiants en volontariat dans les armées : la limite d’âge est reculée en fonction de la durée du contrat (1 à 5 ans max) ;",
    },
    {
      id: 6,
      description:
        "Étudiants volontaires internationaux : la limite d’âge est reculée en fonction de la durée du contrat (6 à 24 mois max) ;",
    },
    {
      id: 7,
      description:
        "Avoir utilisé moins de 5 droits en licence et avoir rempli les conditions d’obtention des Européen Crédits Transfer System (cf. organisation des droits de bourses) ;",
    },
    {
      id: 8,
      description:
        "Étudiants en alternance ne peuvent pas bénécier de la bourse sur critères sociaux. La bourse de Crous n'est pas cumulable avec le régime alternance.",
    },
  ];

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-center text-slate-50">
      <h3>Phases de la demande de bourse</h3>
      <ul>
        {phases.map(({ id, description }) => {
          return (
            <li key={id}>
              <p>{description}</p>
            </li>
          );
        })}
        {/* Attentions */}
      </ul>
    </div>
  );
};

export default BourseCritères;
