import { useParams } from "react-router-dom";

const RessourcesParentsDetails = () => {
  const parentsInfo = [
    {
      id: 1,
      title: "Parents mariés / pacsés / concubins",
      description: "Les revenus des deux parents sont pris en compte.",
      situations: [
        {
          case: "Justificatifs",
          documents: [
            "Avis fiscal commun des parents",
            "Un acte de naissance pour verifier les noms des parents",
          ],
        },
      ],
      revenus: [
        "Avis d'impôt 2022 (imposition, non-imposition...) se rapportant aux revenus perçus en 2021 par les parents",
      ],
      notes: [
        "Les parents concubins n’ont pas d’avis fiscal commun. Pour savoir s’ils sont concubins, il faut se rapporter à l’adresse renseignée sur l’AF de chaque parent.",
      ],
      keyword: "mariés",
    },
    {
      id: 2,
      title: "Parent décédé",
      description:
        "En cas de décès d’un parent, on prend en compte seulement les revenus du parent vivant",
      situations: [
        {
          case: "Justificatifs",
          documents: ["Acte de décès du parent concerné"],
        },
      ],
      revenus: [
        "Avis d'impôt 2022 (imposition, non-imposition...) se rapportant aux revenus perçus en 2021 par le parent existant",
      ],
      notes: [
        "Si le parent est décédé après l'année N-2, il nous faut l'avis fiscal commun des parents, pour calculer les droits à la bourse par rapports aux revenus du déclarant qui est vivant. Dans un dossier dématérialisé, on ne trouve pas les revenus de chaque déclarant sur les données fiscales",
        "S’il s’agit d’un renouvellement l’information est déjà enregistré dans les pièces pérennes.",
      ],
      keyword: "décédé",
    },
    {
      id: 3,
      title: "Parent inconnu",
      description:
        "Si un étudiant n’a pas été reconnu par l’un de ses parents, alors la bourse est calculée en fonction des revenus du seul lien de filiation existant.",
      situations: [
        {
          case: "Justificatifs",
          documents: ["Un acte de naissance", "Ou un livret de famille"],
        },
      ],
      revenus: [
        "Avis d'impôt 2022 (imposition, non-imposition...) se rapportant aux revenus perçus en 2021 par le parent existant",
      ],
      notes: [
        "Sur un acte de naissance ou un livret de famille, on regarde la partie du parent concerné non renseigné sur le livret de famille",
        "Lorsqu’un étudiant dit ne pas pouvoir fournir l’AF d’un de ses parents (pas de contacte avec le parent), il peut établir une attestation sur l’honneur (datée et signée) indiquant qu’il n’a plus de contact avec le parent concerné.",
        "Avant d’indiquer la procédure précédente, il faut bien vérifier que l’étudiant n’a pas déjà joint l’AF de son père l’année précédente, ce qui laisserait penser à une fausse déclaration.",
      ],
      keyword: "inconnu",
    },
    {
      id: 4,
      title: "Parents divorcés / séparés",
      description:
        "Plusieurs cas sont possibles en fonction de la situation des parents de l’étudiant.",
      situations: [
        {
          case: "Cas 1 : Avec jugement de divorce + pension alimentaire",
          documents: [
            "Si un jugement, ou une ordonnance de non-conciliation prévoit une pension alimentaire avec une résidence exclusive chez un parent alors seuls les revenus du parent qui la perçoit doivent être pris en compte.",
            "L’étudiant doit joindre la copie complète et signée du jugement de divorce en cas de divorce judiciaire.",
            "Si les parents divorcent par consentement mutuel, alors l’étudiant doit fournir la convention de divorce signée ainsi que le jugement d’homologation ou l’acte notarié authentifiant la convention.",
          ],
        },
        {
          case: "Cas 2 : Avec jugement de divorce - pension alimentaire",
          documents: [
            "En l’absence de pension alimentaire et/ou de garde exclusive au bénéfice de l’un des parents, les revenus des deux parents sont pris en compte.",
          ],
        },
        {
          case: "Cas 3 : Sans jugement de divorce",
          documents: [
            "En l’absence de jugement, les revenus des deux parents sont pris en compte.",
          ],
        },
      ],
      revenus: [
        "Cas 1 : Seuls les revenus du parent qui perçoit la pension alimentaire doivent être pris en compte.",
        "Cas 2 : Les revenus des deux parents sont pris en compte",
        "Cas 3 : Les revenus des deux parents sont pris en compte",
      ],
      notes: [
        "On considère qu’il y a une pension alimentaire lorsqu’il est mentionné qu’un des parents est « impécunieux ».",
      ],
      keyword: "séparés",
    },
    {
      id: 5,
      title: "Parent isolé",
      description:
        "Est considérée comme isolée une personne veuve, divorcée, séparée ou célibataire, qui ne vit pas en couple de manière notoire et permanente et qui notamment ne met pas en commun avec un conjoint, concubin ou partenaire civil de solidarité ses ressources et ses charges. Lorsque l’un des membres du couple réside à l’étranger, n’est pas considéré comme isolé celui qui réside en France",
      situations: [
        {
          case: "Lettre « T »",
          documents: [
            "On demande l'avis fiscal pour vérifier le status parent isolé (les données fiscales en cas d'un dossier dématérialisé)",
            `La lettre « T » se trouve sur l'avis fiscal du parent, dans la case "Cas Particulier"`,
          ],
        },
        {
          case: "Allocation de Soutien Familial (ASF)",
          documents: [
            "L'Allocation de soutien familial se trouve sur l'attestation de paiement de la Caf (un document récent est nécessaire)",
          ],
        },
        {
          case: "RSA majoré / Lettre « L »",
          documents: [
            "RSA majoré se trouve sur l'attestation de paiement de la Caf (un document récent est nécessaire)",
            `La lettre « L » se trouve sur l'avis fiscal du parent, dans la case "Cas Particulier"`,
          ],
        },
      ],
      revenus: ["L'avis fiscal sur les revenus de l'année N-2 du parent isolé"],
      notes: [
        "La situation de parent isolé ayant la charge fiscale de l’étudiant prévaut désormais sur celle de parents séparés (avec ou sans jugement de divorce).",
        "Dans le cas où la lettre « T » figure sur l’avis fiscal des deux parents de l’étudiant (en cas de doute demander l’AF des deux parents), cela annule le statut parent isolé et les revenus des deux parents sont pris en compte",
      ],
      keyword: "isolé",
    },
    {
      id: 6,
      title: "Parent remarié",
      description:
        "Lorsque le nouveau conjoint prend fiscalement à charge un ou des enfants étudiants issus du premier mariage de son conjoint, le droit à bourse de ces étudiants doit être examiné en fonction des ressources du nouveau couple constitué.",
      situations: [
        {
          case: "Cas 1 : Étudiant rattaché sur AF commun « mère / beau-père »",
          documents: [
            "S'il y a un jugement de divorce concernant les parents (avec pension alimentaire), les revenus de l'AF commun de « mère / beau-père » sont pris en compte.",
            "S'il y a un jugement de divorce concernant les parents (sans pension alimentaire), les revenus de l'AF commun de « mère / beau-père » avec les revenus du père sont pris en compte",
          ],
        },
        {
          case: "Cas 2 : Étudiant rattaché sur AF commun « mère / beau-père » + « père / belle-mère »",
          documents: [
            "les deux parents sont remarié et la garde de l'étudiant est alternée, donc les revenus de l'avis fiscal commun de « mère / beau-père » + « père / belle-mère » sont pris en compte.",
          ],
        },
        {
          case: "Cas 3 : Étudiant pas rattaché sur AF commun « mère / beau-père »",
          documents: [
            "S'il y a un jugement de divorce concernant les parents (avec pension alimentaire), les revenus de l'AF de « mère » sont pris en compte.",
            "S'il y a un jugement de divorce concernant les parents (sans pension alimentaire), les revenus de l'AF de « mère » et « père » sont pris en compte",
            "S'il n'y a pas un jugement de divorce concernant les parents, les revenus de l'AF de « mère » et « père » sont pris en compte",
          ],
        },
      ],
      revenus: [
        "Cas 1 : Selon l'existance d'un jugement de divorce et une pension alimentaire, l'AF commun du parent remarié et l'AF de l'autre parent",
        "Cas 2 : Les revenus des deux AF commun des parents remarié sont pris en compte",
        "Cas 3 : Selon l'existance d'un jugement de divorce et une pension alimentaire, l'AF des parents sont pris en compte",
      ],
      notes: [
        "Nous devons prendre en compte les revenus des beaux-parents en plus des revenus des parents uniquement si l’étudiant est rattaché fiscalement à l’avis fiscal commun du nouveau couple.",
        "Si le parent 1 ne peut pas justifier du statut de parent isolé, nous prendrons en plus du revenu du nouveau couple, les revenus du parent 2.",
      ],
      keyword: "remarié",
    },
  ];

  const { name } = useParams();
  const [parentsRessource] = parentsInfo.filter(
    ({ keyword }) => keyword === name
  );
  console.log(parentsRessource);
  console.log(parentsRessource.revenus);

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start pb-12 text-slate-50">
      <h3>{parentsRessource.title}</h3>
      <p>{parentsRessource.description}</p>
      <h4>Justifier sa situation</h4>
      <ul>
        {parentsRessource.situations.map((situation, i) => {
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
        {parentsRessource.revenus.map((revenu, i) => {
          return <li key={i}>{revenu}</li>;
        })}
      </ul>
      <h4>Attention</h4>
      <ul>
        {parentsRessource.notes.map((note, i) => {
          return <li key={i}>{note}</li>;
        })}
      </ul>
    </div>
  );
};
export default RessourcesParentsDetails;
