/* eslint-disable react/no-unescaped-entities */
const BourseEcts = () => {
  return (
    <div className="prose mx-auto mt-20 h-fit w-3/4 pb-12 text-slate-50">
      <h3>Système européen de transfert et d'accumulation de crédits (ECTS)</h3>
      <p>
        Un étudiant ne peut excéder 7 droits de bourse par chaque ministère.
        C’est-à-dire que chaque étudiant a 2 droits de bourse en plus pour
        utilise par cursus (soit licence soit master).
      </p>
      <ul>
        <li>
          7 droits de bourse maximum pour l’ensemble de la scolarité et pour
          chaque ministère
        </li>
        <li>5 droits de bourse maximum pour le cursus licence</li>
        <li>4 droits de bourse maximum pour master.</li>
      </ul>
      <h3>Attention</h3>
      <ul>
        <li>Le nombre total de droits de bourse ne peut excéder 7 droits.</li>

        <li>
          L’étudiant ayant validé un master 2 ne peut pas prétendre à une bourse
          en licence, même s’il lui reste des droits.
        </li>
        <li>
          Pour les étudiants ayant interrompu leurs études sans rembourser =
          leur droit de bourse a été consommé.
        </li>
        <li>
          Dans la réglementation, un étudiant peut bénéficier de 35 droits pour
          l’ensemble de sa scolarité (7 droits pour chaque ministère).
        </li>
      </ul>
      <h3>Organisation du droit de bourse</h3>
      <ul>
        <li>
          Le 3ème droit de bourse est soumis à des conditions de réussite et ne
          peut être accordé que si l’étudiant a validé 60 ECTS (1 an ou 2
          semestres), Cette règle n’est pas applicable aux étudiants admis en
          formation mise à niveau
        </li>
        <li>
          Le 4ème et 5ème droit ne peut être accordés que si l’étudiant a validé
          120 ECTS (2 années ou 4 semestres)
        </li>
        <li>
          Le 6ème et 7ème droit ne peuvent être accordés qu’aux étudiants (180
          ECTS obligatoires)
        </li>
        <li>
          Un étudiant titulaire d’une licence peut utiliser des droits de cursus
          non consommés pour un autre diplôme équivalent dans la limite des 5
          droits MAXIMUM en licence.
        </li>
        <li>
          Un étudiant titulaire d’un master 2 peut bénéficier des droits de
          bourse non utilisés dans la limite des droits MAXIMUM seulement pour
          un cursus Master.
        </li>
      </ul>
      <h3>Trois cas où on ne comptabilise pas le droit à la bourse</h3>
      <ul>
        <li>
          Étudiant avec certificat médical de la médecine préventive de son
          établissement certifiant de l’impossibilité de suivre les cours (pour
          les écoles, c’est la médecine préventive du rectorat)
        </li>
        <li>Bourse attribuée par erreur à l’étudiant</li>
        <li>
          Étudiant faisant annuler son inscription et remboursant la bourse
        </li>
      </ul>
      <h3>Un droit de bourse supplémentaire pour</h3>
      <ul>
        <li>
          Étudiants en situation d’échec dû à la situation familiale ou
          personnelle (décès, maternité, maladie), attesté obligatoirement par
          un certificat du service de médecine préventive de son établissement /
          1 droit de bourse supplémentaire par cursus.
        </li>
        <li>
          Étudiants en médecine / odontologie / pharmacie, dans le cadre d’un
          cursus linéaire (pas de redoublement), dans le même diplôme et même
          établissement (sur dérogation), 1 droit supplémentaire pour l’ensemble
          de la scolarité OU pour un étudiant redoublant sa 1ère année de PACES
          et se réinscrivant en PACES l’année d’après (et suivant son cursus de
          façon linéaire).
        </li>
        <li>
          Étudiant sous contrat de réussite pédagogique, prévoyant une L1 en
          deux ans (justificatif obligatoire).
        </li>
      </ul>
      <h3>
        Trois droits de bourse supplémentaires pour l’ensemble de la scolarité
      </h3>
      <ul>
        <li>
          Les étudiants handicapés reconnus par la commission des droits et de
          l’autonomie des personnes handicapées bénéficient de 3 droits
          supplémentaires pour le cursus Licence ainsi que 2 droits
          supplémentaires pour le cursus Master soit 12 droits au total.
        </li>
        <li>
          Les sportifs de haut niveau, inscrits sur la liste du ministère des
          sports.
        </li>
      </ul>
    </div>
  );
};

export default BourseEcts;
