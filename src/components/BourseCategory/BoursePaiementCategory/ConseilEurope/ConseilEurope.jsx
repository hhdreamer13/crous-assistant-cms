/* eslint-disable react/no-unescaped-entities */
const ConseilEurope = () => {
  return (
    <div className="prose mx-auto mt-20 h-fit w-3/4 pb-12 text-slate-50">
      <h3>Étudiant dans un pays membre du Conseil de l’Europe</h3>
      <p>
        Les étudiants en conseil de l’Europe passent principalement par le
        centre de contact des Crous d’IDF pour le rajout de vœu. Pour cela il
        faut indiquer le pays, la ville, le nom de l'établissement ainsi que la
        formation, le cursus et le niveau d'études. Nous vérifierons alors si
        l'établissement est habilité à la bourse.
      </p>
      <p>
        Le traitement du dossier d’un étudiant en Conseil de l’Europe est
        identique à celui d’un étudiant en France. Par contre, on ne peut pas
        avoir une remontée d’inscription de leur établissement. Ainsi, on
        demande des justificatifs pour déclencher la bourse.
      </p>
      <h3>Les documents demandés pour activer la mise en paiement :</h3>
      <ul>
        <li>
          Certificat de scolarité de l’établissement d’étude en Europe avec la
          mention temps plein ou « full time ».
        </li>
        <li>
          Un justificatif de domicile de moins de 3 mois (bail, quittances de
          loyer, factures d’énergie).
        </li>
        <li>
          Un document justifiant du niveau d’étude de l’étudiant (à partir du
          3ème droit consommé).
        </li>
      </ul>
      <h3>Attention</h3>
      <ul>
        <li>
          Il y a une tolérance pour les documents traduits en anglais (mention
          Full time sur le certificat de scolarité obligatoire).
        </li>
        <li>
          Si le niveau d’étude est indiqué sur le certificat de scolarité vous
          n’avez pas besoin de demander ce justificatif en plus (ex :
          inscription en Licence 3 ou baccalauréat universitaire 4eme année =
          pas besoin d’un document supplémentaire).
        </li>
        <li>
          Si l’étudiant habite à la frontière, avec une distance moins de 30km
          de son établissement, on peut accepter son justificatif de domicile
          même si c’est un justificatif de domicile en France.
        </li>
        <li>
          A noter que certains établissements étrangers produisent des
          certificats de scolarité par semestre. Si c’est le cas, vous devez
          faire remonter le ticket avec en commentaire « mettre en paiement pour
          le S1, voir certificat de scolarité » et prévenir l’étudiant qu’il
          devra fournir le certificat du second semestre
        </li>
        <li>
          Si les documents sont conformes, vous devez faire un ticket pour
          demander la mise en paiement en indiquant que c’est un conseil de
          l’Europe ou vous pouvez mettre le dossier en contrôle paiement (code
          d’activation Pb).
        </li>
      </ul>
      <h3>États membres du Conseil de l’Europe</h3>
      <p>
        Allemagne, Autriche, Belgique, Bosnie-Herzégovine, Bulgarie, Chypre,
        Croatie, Danemark, Espagne, Estonie, Finlande, Grèce, Hongrie, Irlande,
        Islande, Italie, Lettonie, Liechtenstein, Lituanie, Luxembourg,
        Macédoine, Malte, Monténégro, Norvège, Pays-Bas, Pologne, Portugal,
        République-Tchèque, Roumanie, Royaume-Uni, Serbie, Slovaquie, Slovénie,
        Suède, Suisse.
      </p>
    </div>
  );
};

export default ConseilEurope;
