/* eslint-disable react/no-unescaped-entities */
const ModificationVoeu = () => {
  return (
    <div className="prose mx-auto mt-20 h-fit w-3/4 text-slate-50">
      <h3>Modification de vœu</h3>
      <p>
        Pour procéder à la modification ou l'ajout des vœux, il nous faut les
        informations suivantes :
      </p>
      <ul>
        <li>Le nom du nouvel établissement ;</li>
        <li>
          Le code UAI RNE du nouvel établissement (à demander à la scolarité) ;
        </li>
        <li>Le nom de la formation ;</li>
        <li>Le cursus ;</li>
        <li>Le niveau d'étude.</li>
      </ul>
      <p>
        Pour la recherche d’une formation du conseil de l’Europe, il convient de
        suivre la procédure en annexe du présent livret.
      </p>
    </div>
  );
};

export default ModificationVoeu;
