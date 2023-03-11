import { useParams } from "react-router-dom";

const CvecDetails = () => {
  const data = [
    {
      id: 1,
      title: "Introduction",
      paragraphs: [
        {
          id: 1,
          title: "C'est quoi, la CVEC ?",
          text: "La CVEC est une Contribution de Vie Étudiante et de Campus. La loi prévoit qu'elle est collectée par les Crous. D'un montant de 95 € en 2022/23, on peut y être assujetti ou en être exonéré en fonction des cas. Elle concerne les étudiants inscrits en formation initiale dans un établissement d'enseignement supérieur en France.",
          bullets: [
            "C’est une démarche obligatoire et l’étudiant doit s’acquitter de la CVEC avant son inscription administrative dans un établissement.",
          ],
        },
        {
          id: 2,
          title: "Qui est concerné par la CVEC ?",
          text: "Les étudiants inscrits en formation initiale dans un établissement d'enseignement supérieur en France, pour chaque année universitaire (même pour les établissements non habilités à recevoir des boursiers).",
          bullets: [],
        },
        {
          id: 3,
          title: "Une contribution pour faire quoi ?",
          text: "Cette contribution est « destinée à favoriser l’accueil et l’accompagnement social, sanitaire, culturel et sportif des étudiants et à conforter les actions de prévention et d’éducation à la santé réalisées à leur intention » :",
          bullets: [
            "Pour la santé : accéder plus facilement aux soins sur le campus et rénover la politique de prévention",
            "Distribution de protections périodiques gratuites",
            "Pour favoriser l'accompagnement social, le bien-être étudiant",
            "Pour soutenir vos initiatives : Financer davantage de projets et d'associations étudiantes.",
            "Pour développer la pratique sportive sur les campus",
            "Pour faire vivre l’art et la culture dans les établissements d’enseignement supérieur",
            "Pour améliorer l’accueil et les services aux étudiants (prêt d’ordinateur)",
            "Si l’étudiant s’inscrit au titre d’une même année universitaire à plusieurs formations, cette attestation est valable sur tout le territoire français et ne doit être payé qu’une fois.",
          ],
        },
      ],
      keyword: "introduction",
    },
    {
      id: 2,
      title: "Exonération",
      paragraphs: [
        {
          id: 1,
          title: "Qui peut être exonéré ?",
          text: "On peut être concerné par la CVEC mais s'en acquitter par exonération. Sont exonérés :",
          bullets: [
            "Les boursiers sur critères sociaux (BCS) gérés par le Crous ou bénéficiaires d'une allocation annuelle (ASAA) accordée dans le cadre des aides spécifiques annuelles (automatique)",
            "Les boursiers gérés par les régions (pour les étudiants dans des formations paramédicales, sanitaires et sociales)",
            "Les boursiers du gouvernement français (comme Les étudiants boursiers campus France)",
            "Les étudiants réfugiés (le statut de réfugié doit être mentionné sur le titre de séjour)",
            "Les étudiants bénéficiaires de la protection subsidiaire ou temporaire",
            "Les étudiants enregistrés en qualité de demandeurs d'asile et disposant du droit de se maintenir sur le territoire",
          ],
        },
        {
          id: 2,
          title: "Cas particuliers",
          text: "Il existe plusieurs exemples à prendre en compte",
          bullets: [
            "Les personnes inscrites en BTS, DMA, dans les formations comptables en lycées, en formation continue (ce qui inclut l'alternance en contrat de professionnalisation) ne sont pas concernées.",
            "Les étudiants en échange international en France (via des programmes comme Erasmus+ car ces étudiants sont inscrits dans leur établissement d'origine) ne sont pas concernés.",
            "Les personnes inscrites en CPGE (Classe Préparatoire aux Grandes Écoles), doivent effectuer la démarche au titre de leur « double-inscription » à l’université.",
            "Les étudiants au CNED et les étudiants en DAEU doivent eux aussi s’acquitter de la CVEC.",
            "Les alternants en contrat d'apprentissage (qui relève de la formation initiale) sont assujettis à la CVEC. Les alternants en contrat de professionnalisation (qui relève de la formation continue) ne sont pas concernés par la CVEC.",
          ],
        },
        {
          id: 3,
          title: "Les alternants",
          text: "Une précision pour les alternants :",
          bullets: [
            "Les alternants en contrat de professionnalisation (qui relève de la formation continue) ne sont pas concernés par la CVEC",
          ],
        },
      ],
      keyword: "exonération",
    },
    {
      id: 3,
      title: "Le paiement de la CVEC",
      paragraphs: [
        {
          id: 1,
          title: "Les étudiants non-boursiers",
          text: `Le paiement de la CVEC peut se faire par carte bancaire sur MesServicesEtudiant, rubrique CVEC puis « Obtenir mon attestation ».

          Il est aussi possible de payer la CVEC en espèces, via le dispositif « eficash ». Pour ce faire, rendez-vous au guichet d'un bureau de La Poste. Un avis de paiement nominatif est immédiatement délivré à l’étudiant. Il recevra, sous 2 jours ouvrés, un mail lui invitant à télécharger son attestation d'acquittement de la CVEC. « 2 jours » correspond au délai de transmission par la Banque postale au Crous de l’enregistrement de votre paiement.
          `,
          bullets: [
            `La CVEC peut être payée par carte bancaire sur le site MSE, rubrique CVEC puis «\u00A0Obtenir mon attestation\u00A0».`,
            "La CVEC peut être payée en espèces via le dispositif « eficash » en se rendant au guichet d'un bureau de La Poste.",
          ],
        },
        {
          id: 2,
          title: "Les étudiants boursiers",
          text: "Les futurs boursiers du Crous qui ont reçu leur attribution conditionnelle de bourse sont détectés automatiquement sur le site cvec.etudiant.gouv.fr, et peuvent télécharger à l'issue de la démarche en ligne leur attestation d'acquittement de la CVEC, sans payer ni avancer les frais.",
          bullets: [
            "Si le dossier de bourse n'est pas encore traité ou est en instance, l'étudiant doit payer la contribution CVEC.",
            "L'étudiant sera remboursé de cette contribution une fois qu'il aura acquis sa qualité de boursier.",
          ],
        },
        {
          id: 3,
          title: "Le remboursement de la CVEC",
          text: `Seuls les étudiants boursiers du Crous n’ont pas de démarche à effectuer pour demander le remboursement, ce dernier se fait automatiquement dans un délai de 3 mois après le premier versement de la bourse.
          
          Pour les autres étudiants exonérés, la demande de remboursement se fait sur la plateforme CVEC via MSE.gouv.fr avec envoi de pièces justificatives de leur statut et une copie de leur pièce d’identité.`,
          bullets: [],
        },
      ],
      keyword: "paiement",
    },
    {
      id: 4,
      title: "Foire aux questions de la CVEC",
      paragraphs: [
        {
          id: 1,
          title: `🔸 Je change de ville/d'académie. Dois-je repayer la CVEC ?`,
          text: "L'attestation CVEC est valable pour l'ensemble des établissements d'enseignement supérieur même si vous n'avez pas renseigné la ville correspondant finalement à votre inscription définitive. Vous devez présenter cette attestation à votre établissement lors de votre inscription et n'avez aucune autre démarche à effectuer concernant la CVEC.",
          bullets: [],
        },
        {
          id: 2,
          title: `🔸 J'ai un problème relatif à mon numéro INE, que faire ?`,
          text: "L'attestation CVEC est valable pour l'ensemble des établissements d'enseignement supérieur même si vous n'avez pas renseigné la ville correspondant finalement à votre inscription définitive. Vous devez présenter cette attestation à votre établissement lors de votre inscription et n'avez aucune autre démarche à effectuer concernant la CVEC.",
          bullets: [],
        },
        {
          id: 3,
          title: `🔸 Pourquoi mon numéro d'attestation CVEC est « invalide » ?`,
          text: "Le numéro d'attestation CVEC est unique. Le message d'invalidité peut également provenir d'une différence entre le nom de famille renseigné sur l'attestation CVEC - et donc votre compte MesServices.etudiant.gouv.fr - et le nom de famille renseigné dans l'application de votre établissement. Ils doivent correspondre. Si le problème vient de là, demandez à votre établissement s'il peut modifier votre nom dans son application pour le faire correspondre. S'il n'en a pas la possibilité, ou si votre nom est erroné dans votre compte MesServices, ou que votre prénom et nom sont inversés, demandez une modification via l'assistance en sélectionnant comme catégorie de message « Compte messervices.etudiant.gouv.fr ».",
          bullets: [],
        },
        {
          id: 4,
          title: `🔸 Dois-je payer la CVEC quand je suis en césure ?`,
          text: "Oui, vous devez vous acquitter - par paiement ou exonération - de la Contribution Vie Étudiante et de Campus (CVEC) quelles que soient la durée et la forme de la période de césure. Sauf exceptions, la CVEC concerne l'ensemble des étudiants inscrit en formation initiale dans un établissement d'enseignement supérieur quel que soit le ministère de tutelle de leur établissement d'inscription.",
          bullets: [],
        },
      ],
      keyword: "faq",
    },
  ];

  const { name } = useParams();
  const [cvecSection] = data.filter(({ keyword }) => keyword === name);

  return (
    <div className="prose mx-auto mt-10 flex w-3/4 flex-col items-start pb-12 text-slate-50">
      <h3>{cvecSection.title}</h3>

      {cvecSection.paragraphs.map(({ id, title, text, bullets }) => {
        return (
          <div key={id}>
            <h4>{title}</h4>
            <p className="whitespace-pre-line text-justify">{text}</p>
            <ul>
              {bullets &&
                bullets.map((bullet, i) => {
                  return <li key={i}>{bullet}</li>;
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default CvecDetails;
