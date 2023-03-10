import { useParams } from "react-router-dom";

const BourseComplémentairesDetails = () => {
  const aidesComplémentaires = [
    {
      title: "L’aide au mérite nationale",
      description:
        "L'aide au mérite ne fait pas l'objet d'une demande particulière de la part de l’étudiant. Elle est versée en complément de la bourse sur critères sociaux, dont la demande se fait via le DSE. C'est le Crous qui identifie l'étudiant susceptible de recevoir cette aide après avoir pris connaissance des bacheliers mention « très bien » de l'année précédente. La décision définitive d'attribution de l'aide au mérite est ensuite affichée sur la notification définitive.",
      conditions: [
        "L’étudiant doit avoir eu le baccalauréat avec mention TB l’année N-1 de la 1ère demande de bourse, ceci doit être indiqué obligatoirement dans la zone texte d’AGLAE.",
        "Si le baccalauréat TB non indiqué dans la zone texte, il faut demander à l’étudiant de fournir son relevé de notes du baccalauréat via le suivi de son dossier DSE.",
        "En cas de redoublement, l’étudiant ne peut plus bénéficier de l'aide au mérite sauf si ce redoublement est fondé sur des raisons médicales.",
        "L’étudiant ne peut pas bénéficier de plus de trois aides au mérite. Cette limitation s'applique aussi bien dans le cadre d'un cursus linéaire que dans le cadre d'une réorientation.",
        "Les réorientations sont acceptées.",
        "Les étudiants en CPGE peuvent prétendre à leur BM en cas de cubage si leur inscription en parallèle à l’université est en licence 3ème année.",
      ],
      justificatifs: ["Relevé de notes du baccalauréat"],
      notes: [
        "La bourse au mérite est d’un montant de 900 euros versée sur 9 mensualités (d’octobre à juin)",
        "est versée sur 3 ans si pas de redoublement",
      ],
      keyword: "bm-nationale",
    },
    {
      title: "L’aide au mérite régionale",
      description:
        "Cette aide est versée aux étudiants ayant obtenu la mention TB au baccalauréat en Ile de France et s’inscrivant dans l’enseignement supérieur toujours en IDF. Gestion hors DSE, pas de possibilité de suivi. Le paiement de cette aide sera réalisé entre janvier et mai de l’année N. Versée en une seule mensualité de 1000 euros. L’étudiant n’a pas de démarches à effectuer. Le Crous peut lui demander de justifier de pièces complémentaires via l’envoi d’un mail (pas de visibilité possible sur le fil AGLAE) l’étudiant répond par retour mail directement.",
      conditions: [
        "Avoir obtenu le bac 2022 avec mention « très bien » en Île-de-France",
        "Résider en Île-de-France",
        "Être inscrit à la rentrée 2022-2023 dans un établissement d'enseignement supérieur ou de formation sanitaire et sociale situé en Île-de-France",
        "Être attributaire de la bourse sur critères sociaux (BCS), versée par les Centres régionaux des œuvres universitaires et scolaires (Crous) des académies de Paris, Versailles ou Créteil.",
      ],
      justificatifs: ["Relevé de notes du baccalauréat"],
      notes: [
        "Une fois ces conditions remplies, il n'y a aucune démarche à accomplir.",
        "La Région versera aux étudiants éligibles, par l'intermédiaire du Crous de Paris, la bourse régionale d'un montant de 1.000 euros au cours de l'année universitaire.",
      ],
      keyword: "bm-régionale",
    },
    {
      title: "Le complément grandes vancances",
      description:
        "Les étudiants boursiers n'ayant pas achevé leurs études au 1er juillet de l'année universitaire au titre de laquelle ils ont obtenu une bourse peuvent continuer à recevoir leur bourse pendant les grandes vacances s'ils se trouvent dans l'une des situations ci-dessous.",
      conditions: [
        "Parents de l’étudiant ou tuteur résidant dans les DROM-COM",
        "Étudiant français ou européen lorsque les parents ou tuteur légal résident à l’étranger, à l’exception des pays de l’UE / Suisse / pays riverains de la Méditerranée",
        "Étudiant pupille de l’État / de la Nation",
        "Étudiant orphelin de ses deux parents",
        "Étudiant réfugié",
        "Étudiant qui a bénéficié ou qui bénéficie de l’aide sociale à l’enfance (ASE)",
      ],
      justificatifs: [
        "Il faut justifier sa situation avec une pièce par rapport à son cas d'éligibilité",
        "Si l’étudiant en BTS 2, licence 3 ou en master 2, il faut justifier d’une continuité dans ses études avec un certificat de scolaroté.",
      ],
      notes: [
        "Cette aide est versée tant que l’étudiant est boursier (pas de limite comme avec la BM)",
        "Le CGV ne peut être versée que sur les deux mois d’été et l’aide est à la hauteur de l’échelon de bourse attribué à l’étudiant",
      ],
      keyword: "cgv",
    },
    {
      title: "L'aide à la mobilité Parcoursup",
      description:
        "Il s'agit d'une aide pour les futurs étudiants qui ont bénéficié d'une bourse de lycée en N-1 et qui souhaitent s'inscrire, via Parcoursup, dans une formation située hors de leur académie de résidence. La demande peut être faite sur https://amp.etudiant.gouv.fr (également visible sur MSE) jusqu’au 31 décembre de l’année N. Le montant de l’aide est de 500 euros. Cette aide ne peut pas être attribuée aux personnes déjà étudiantes dans l’ES et en réorientation via Parcoursup.",
      conditions: [
        "Être bénéficiaire d'une bourse de lycée",
        "Être inscrit sur Parcoursup cette année et avoir confirmé au moins un vœu en-dehors de son académie de résidence",
        "Avoir accepté définitivement une proposition d'admission (OUI ou OUI-SI) pour un vœu confirmé hors de son académie de résidence.",
      ],
      justificatifs: [
        "Si l'étudiant est concerné par cette aide, la plateforme Parcoursup lui l'indiquera.",
      ],
      notes: [
        "Pour suivre son dossier, l’étudiant peut contacter le service de bourse de son Crous de gestion (Créteil et Versailles) par assistance via le site MSE. Pour l’académie de Paris l’adresse mail à communiquer aux étudiants est : amp@crous-paris.fr",
        "Pour les demandes de recours de l’AMP, l’étudiant doit envoyer un courrier au directeur général de son Crous.",
      ],
      keyword: "amp",
    },
    {
      title: "L'aide à la mobilité master",
      description:
        "Cette aide est destinée à l'étudiant boursier qui vient d'obtenir sa licence sous diplôme national de licence en université, et qui souhaite s'inscrire en diplôme national de master (cf liste) dans une université d’enseignement supérieur dans une autre région académique que celle où il a obtenu sa licence. L'aide à la mobilité doit être demandée en ligne. Le montant de l’aide est de 1000 euros et elle est versée en une seule fois le mois suivant la validation du service.",
      conditions: [
        "Avoir obtenu une licence l'année précédente. Attention, l'obtention d'une licence professionnelle ne permet pas de bénéficier de cette aide.",
        "S’inscrire pour la 1ère fois en 1ère année de diplôme national de master",
        "Bénéficier de la bourse sur critères sociaux (BCS) ou d'une allocation annuelle spécifique (ASAA) ou ponctuelle (ASAP) pour étudiant en difficulté",
        "S’inscrire dans une université d'une région académique différente de celle où vous avez obtenu votre licence",
      ],
      justificatifs: [
        "Attestation de réussite du diplôme de licence N-1 de la demande",
        "Certificat de scolarité en première année de diplôme national de Master en université",
      ],
      notes: [
        "L’étudiant doit faire la demande sur messervices.etudiant.gouv.fr en joignant son attestation de réussite du diplôme national d’université de licence ainsi que son certificat d’inscription en première année de diplôme national de master en université.",
        "Pour les demandes de recours de l’AMM, l’étudiant doit envoyer un courrier au directeur général de son Crous.",
      ],
      keyword: "amm",
    },
  ];

  const { name } = useParams();
  const [aideComplémentaire] = aidesComplémentaires.filter(
    ({ keyword }) => keyword === name
  );

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start pb-12 text-slate-50">
      <h3>{aideComplémentaire.title}</h3>
      <p>{aideComplémentaire.description}</p>
      <h4>Conditions</h4>
      <ul>
        {aideComplémentaire.conditions.map((condition, i) => {
          return (
            <li key={i}>
              <p>{condition}</p>
            </li>
          );
        })}
      </ul>
      <h4>Justificatifs</h4>
      <ul>
        {aideComplémentaire.justificatifs.map((justificatif, i) => {
          return <li key={i}>{justificatif}</li>;
        })}
      </ul>
      <h4>Notes</h4>
      <ul>
        {aideComplémentaire.notes.map((note, i) => {
          return <li key={i}>{note}</li>;
        })}
      </ul>
    </div>
  );
};
export default BourseComplémentairesDetails;
