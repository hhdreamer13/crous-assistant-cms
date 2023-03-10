/* eslint-disable react/no-unescaped-entities */
const RefusSuspension = () => {
  return (
    <div className="prose mx-auto mt-20 h-fit w-3/4 pb-12 text-slate-50">
      <h3>Refus et Suspenstion de la bourse</h3>
      <p>
        Après une première étude de dossier, il est possible que l’étudiant se
        voit refuser l’obtention de la bourse sur critères sociaux. Ces refus
        normalement se codifient sur AGLAE avec l’un des codes suivants :
      </p>
      <ul>
        <li>
          Conditions non remplies : Vous ne remplissez pas une ou plusieurs
          condition(s) énoncée(s) par la règlementation en vigueur.
        </li>
        <li>
          Dépassement du barème : Vous dépassez le plafond annuel des
          ressources.
        </li>
        <li>
          Droits à bourse épuisés : Vous avez épuisé vos droits à bourse au
          titre du cycle demandé.
        </li>
        <li>
          Crédits obtenus insuffisants : Vous n’avez pas obtenu le nombre de
          crédits européens nécessaire à l’obtention du droit à bourse.
        </li>
        <li>
          Droits à bourse épuisés (LMD) : Vous avez épuisé vos droits à bourse
          au titre de ce cursus.
        </li>
        <li>
          Formation non habilitée : La formation dans l’établissement que vous
          avez choisi n’est pas habilitée à recevoir des boursiers.
        </li>
      </ul>
      <h3>Les cas particuliers</h3>
      <ul>
        <li>
          Étudiants en contrat d’apprentissage, de professionnalisation ou en
          CIF.
        </li>
        <li>
          Étudiants suivant des cours de remise à niveau linguistique dans un
          pays étranger
        </li>
        <li>
          Étudiants inscrits au pôle emploi ou percevant le RSA (sauf RSA
          majoré)
        </li>
        <li>
          Fonctionnaires y compris stagiaires en activité, disponibilité ou en
          congés sans traitement (idem ens. Privé)
        </li>
        <li>Étudiants percevant la garantie jeune</li>
        <li>Étudiants percevant une pension de retraite</li>
        <li>
          Étudiants 3ème cycle en médecine, pharma, odontologie, vétérinaire
        </li>
        <li>Étudiants en doctorat</li>
      </ul>
      <h3>Les différents motifs de suspension de la bourse</h3>
      <ul>
        <li>Arrêt d’études</li>
        <li>Annulation d'inscription</li>
        <li>Plusieurs remontées d’inscription</li>
        <li>Paiement à tort</li>
        <li>Assiduité</li>
      </ul>
      <h3>Attention</h3>
      <ul>
        <li>
          le régime 12 et 20 (formation continue) sur une remontée d’inscription
          font systématiquement l’objet d’un rejet (contrairement au régime 10
          et 11 qui correspond à la formation initiale).
        </li>
        <li>
          C’est de la responsabilité de l’établissement de contrôler l’assiduité
          aux cours et examens. Les établissements de formation effectuent deux
          contrôles d'assiduité, un chaque semestre. Ils transmettent ensuite
          les listes d'étudiants non assidus au Crous qui suspend le versement
          de la bourse.
        </li>
        <li>
          le Crous n'est pas compétent pour traiter les justificatifs. Les
          absences se justifient IMPÉRATIVEMENT auprès de la scolarité de
          l’établissement.
        </li>
      </ul>
    </div>
  );
};

export default RefusSuspension;
