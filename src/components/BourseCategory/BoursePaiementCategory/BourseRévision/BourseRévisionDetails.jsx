import { useParams } from "react-router-dom";

const BourseRévisionDetails = () => {
  const révisionInfo = [
    {
      title: "Maladie",
      description: "Quelques explications ici...",
      situations: [
        "Indemnités journalière versées par l’assurance maladie",
        "Les 3 derniers bulletins de salaire",
        "Le complément versé par la complémentaire santé (non obligatoire)",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = RBG autre parent + montant des indemnités maladies + revenus capitaux mobiliers + revenus fonciers.",
      ],
      keyword: "maladie",
    },
    {
      title: "Chômage",
      description: "Quelques explications ici...",

      situations: [
        "Montant de l’indemnité journalière de l’allocation d’Aide au Retour à l’Emploi (ARE)",
        "Si le parent ne bénéficie plus de l’ARE, il doit nous fournir le montant de l’indemnité journalière de l’allocation de Solidarité Spécifique (ASS)",
        "Si les parents ne bénéficient pas de l’ARE ni de l’ASS, il doit nous fournir l’attestation RSA",
        "Si aucun document, l’étudiant doit nous fournir une attestation de la CAF de non perception d’aide.",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = RBG autre parent + montants ARE ou ASS + revenus capitaux mobiliers + revenus fonciers.",
      ],
      keyword: "chômage",
    },
    {
      title: "Divorce",
      description: "Quelques explications ici...",

      situations: [
        "Jugement de divorce, lettre de conciliation ou de non conciliation",
        "Allocation soutien familial",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = RBG du parent ayant la garde + revenus capitaux mobiliers /2 + revenus fonciers /2.",
      ],
      keyword: "divorce",
    },
    {
      title: "Décès",
      description: "Quelques explications ici...",

      situations: ["Acte de décès"],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
      ],
      keyword: "décès",
    },
    {
      title: "Retraite : pour le privé",
      description: "Quelques explications ici...",

      situations: [
        "Montants versés par l’assurance retraite",
        "Montants versés par la complémentaire retraite",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = Retraite + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
      ],
      keyword: "retraite-privé",
    },
    {
      title: "Retraite : pour la fonction publique",
      description: "Quelques explications ici...",

      situations: [
        "Retraite de base",
        "Retraite additionnelle de la fonction publique (si le parent de l’étudiant à plus de 62 ans)",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = Retraite + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
      ],
      keyword: "retraite-publique",
    },
    {
      title: "Surendettement",
      description: "Quelques explications ici...",

      situations: [
        "Plan conventionnel de redressement définitif, daté",
        "Ou tableau des mesures imposées par la commission, daté",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
      ],
      keyword: "surendettement",
    },
    {
      title: "Redressement judiciaire ou liquidation judiciaire",
      description: "Quelques explications ici...",

      situations: [
        "Copie du jugement de liquidation ou de redressement judiciaire",
        "Avis fiscal N-1",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
      ],
      keyword: "redressement",
    },
    {
      title: "Réduction du temps de travail",
      description: "Quelques explications ici...",

      situations: [
        "Avenant au contrat de travail ou arrêté (pour les fonctionnaires) prévoyant la modification du temps de travail",
        "Les 3 derniers bulletins de salaires",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = Résultat révision + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
      ],
      keyword: "réduction",
    },
    {
      title: "Congés sans traitement, sans solde ou parental",
      description: "Quelques explications ici...",

      situations: [
        "Document attestant de la prise de congés sans solde (privé et public)",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
      ],
      keyword: "congés",
    },
    {
      title: "Mise en disponibilité",
      description: "Quelques explications ici...",

      situations: [
        "Décision de l'administration attestant de la mise en disponibilité",
        "Copie des bulletins de salaires.",
      ],
      revenus: [
        "Copie complète de l'avis d'impôt 2021 (imposition, non-imposition...) se rapportant aux revenus perçus en 2020 par votre mère (toutes les pages)",
        "Nouveau RBG = Résultat révision + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.",
      ],
      keyword: "disponibilité",
    },
  ];

  const { name } = useParams();
  const [révisionItem] = révisionInfo.filter(({ keyword }) => keyword === name);

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start text-slate-50">
      <h3>{révisionItem.title}</h3>
      <p>{révisionItem.description}</p>
      <h4>Justifier sa situation</h4>
      <ul>
        {révisionItem.situations.map((situation, i) => {
          return (
            <li key={i}>
              <p>{situation}</p>
            </li>
          );
        })}
      </ul>
      <h4>Calcul de révistion</h4>
      <ul>
        {révisionItem.revenus.map((revenu, i) => {
          return <li key={i}>{revenu}</li>;
        })}
      </ul>
    </div>
  );
};
export default BourseRévisionDetails;
