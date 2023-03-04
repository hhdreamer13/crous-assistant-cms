/* eslint-disable react/no-unescaped-entities */
const PointsFratrie = () => {
  return (
    <div className="prose mx-auto mt-20 h-fit w-3/4 text-slate-50">
      <h3>Points de charge</h3>
      <p>
        Les points de charge sont calculés en fonction de deux critères : la
        fratrie et la distance entre le domicile familial et le lieu d’études.
      </p>
      <ul>
        <li>Pour chaque autre enfant à charge : 2 points</li>
        <li>
          Pour chaque autre enfant à charge, étudiant dans l'enseignement
          supérieur, l'année N ou N-1, en alternance ou en formation initiale :
          4 points
        </li>
      </ul>
      <p>
        Pour pouvoir prendre en compte dans le calcul des points de charge de la
        bourse les frères et sœurs, certaines conditions sont nécessaires :
      </p>
      <ul>
        <li>
          Le frère ou sœur doit être fiscalement à charge sur les revenus de
          référence (Avis fiscal N-1 sur revenus perçus en N-2).
        </li>
        <li>
          Pour les frères et sœurs étant dans le supérieur, leur certificat de
          scolarité d'études dans le supérieur pour l’année N-1 ou N doit être
          fourni (si traitement du dossier après le 31/08).
        </li>
        <li>
          chaque frère et sœur rattaché fiscalement rapporte 2 points de charge
          et s'il est dans l'enseignement supérieur 2 points de charge
          supplémentaires.
        </li>
      </ul>
    </div>
  );
};

export default PointsFratrie;
