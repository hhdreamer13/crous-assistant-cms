/* eslint-disable react/no-unescaped-entities */
const PointsDistance = () => {
  return (
    <div className="prose mx-auto mt-20 h-fit w-3/4 text-slate-50">
      <h3>Points de distance</h3>
      <p>
        Étudiant boursier dont le domicile (commune de résidence) familial est
        éloigné de l'établissement d'inscription à la rentrée universitaire :
      </p>
      <ul>
        <li>30 à 249 kilomètres : 1 point</li>
        <li>250 kilomètres à 3 500 kilomètres : 2 points</li>
        <li>3 500 kilomètres à 13 000 kilomètres : 3 points</li>
        <li>13 000 kilomètres et plus : 4 points</li>
      </ul>
      <p>
        l'étudiant inscrit à une préparation à distance ne peut bénéficier des
        points de charge liés à l'éloignement.
      </p>
    </div>
  );
};

export default PointsDistance;
