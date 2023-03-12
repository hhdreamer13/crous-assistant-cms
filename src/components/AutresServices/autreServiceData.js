export const data = [
  {
    id: 1,
    title: "Repas à 1 euro / Restauration",
    paragraphs: [
      {
        id: 1,
        title: `Les étudiants boursiers`,
        text: "Seuls les étudiants relevant des catégories suivantes sont éligibles à ce tarif :",
        bullets: [
          "Être boursier sur critères sociaux (BCS) ou bénéficiaires de l’aide spécifique allocation annuelle (ASAA) des Crous de Paris, Créteil ou Versailles pour l'année universitaire en cours.",
          "Boursiers de la région en formation médicosocial.",
          "Bénéficiaires d’une bourse versée, sous conditions de ressources et financée par des crédits État, par un établissement d’enseignement supérieur",
          "Boursiers du gouvernement français.",
        ],
      },
      {
        id: 2,
        title: "",
        text: "Pour bénéficier du tarif :",
        bullets: [
          `Si l’étudiant a une notification définitive : l’étudiant n’a aucune démarche à effectuer, sa carte étudiante se met à jour automatiquement pour bénéficier du tarif boursier`,
          `Si l’étudiant a une notification conditionnelle : l’étudiant doit se déplacer dans un guichet izly (liste sur le site des Crous) avec sa carte étudiante et sa notification conditionnelle pour bénéficier du tarif à 1 euro jusqu’au 31/11 de l’année en cours (il devra avoir une notification définitive obligatoirement à cette date).`,
          `Si l’étudiant est en cours de traitement de DSE : l’étudiant ne pourra pas bénéficier du tarif à 1 euro et ne pourra pas non plus bénéficier du remboursement à la suite.`,
        ],
      },
      {
        id: 3,
        title: `Les étudiants non-boursiers`,
        text: `Le tarif à 1€ peut être accordé aux étudiants en situation de précarité, même s’ils ne sont pas boursiers, après une évaluation sociale.

          Cette situation doit être attestée par les pièces justificatives demandées. Après étude du dossier, l’étudiant recevra une réponse du service social. Si la demande est acceptée l’étudiant sera identifié comme bénéficiaire via son compte Izly.
          `,
        bullets: [
          "Pour faire la demande, il faut allez sur le site epa.lescrous.fr et cliquer sur la rubrique « Faire ma demande ».",
        ],
      },
      {
        id: 4,
        title: "Assistance Izly",
        text: "Les contacts avec le service Izly se feront via le Crous de gestion de l’étudiant.",
        bullets: [
          "assistance-izly@crous-paris.fr",
          "assistance-izly@crous-creteil.fr / support.izly@crous-créteil.fr ",
          "assistance-izly@crous-versailles.fr",
        ],
      },
      {
        id: 5,
        title: "Guichet Izly",
        text: "Pour les étudiants de Paris uniquement, il y a 5 guichets pour activer leur compte ou demander une carte Izly:",
        bullets: [
          "RU Mabillon : ouvert de 11h30 à 14h30",
          "RU Halle aux Farines : ouvert de 11h15 à 14h15.",
          "RU Cuvier : ouvert de 11h30 à 14h.",
          "RU Chatelet : ouvert 11h30 à 14h.",
          "RU Dauphine : ouvert les mardis et vendredis de 11h20 à 14h15.",
        ],
      },
      {
        id: 6,
        title: "Changement d'académie",
        text: "Pour les étudiants changeant d’académie en cours d’année, cela ne devra pas poser de problème. En effet l’application étant gérée par le Cnous, l’étudiant pourra bénéficier du tarif à 1 euro dans toute la France.",
        bullets: [],
      },
    ],
    keyword: "izly",
  },
  {
    id: 2,
    title: "Faire un ticket",
    paragraphs: [
      {
        id: 1,
        title: `Ticket pour remonter un dossier d’étudiant`,
        text: "",
        bullets: [
          "Nom:",
          "Prénom:",
          "Numéro INE:",
          "Crous de gestion:",
          "Phrase explicative:",
        ],
      },
      {
        id: 2,
        title: `Ticket pour débloquer un dossier`,
        text: "",
        bullets: ["Nom:", "Prénom:", "Crous de gestion:", "Année du dossier :"],
      },
      {
        id: 3,
        title: `Ticket social (en cas d’urgence uniquement)`,
        text: "",
        bullets: [
          "Nom :",
          "Prénom :",
          "Numéro INE :",
          "Crous de gestion :",
          "Nom de l’établissement :",
          "Adresse mail :",
          "Numéro de tél :",
          "Phrase explicative :",
        ],
      },
      {
        id: 4,
        title: `Ticket autre sujet`,
        text: "",
        bullets: [
          "Nom :",
          "Prénom :",
          "Adresse mail :",
          "Numéro de tél :",
          "Le Crous sollicité :",
          "Phrase explicative :",
        ],
      },
      {
        id: 5,
        title: `Ticket attestation non-boursier`,
        text: `
          Concernant les attestations de non-boursier de l’année N, il faut informer les étudiants que nous ne pourrons en fournir qu’à partir du 1er janvier de l’année N+1 (après la fermeture du serveur). Par exemple, une attestation non-boursier 2022-2023, ne pourrait être émise qu’à partir de 01/01/2023.

Pour toute demande d’attestation non-boursier pour l’année scolaire, il faut bien vérifier que l’étudiant n’ait pas de dossier en cours.

Si l’étudiant a un dossier un cours et qu’il fait la demande d’une attestation non-boursier, merci de l’inviter à joindre une attestation sur l’honneur indiquant qu’il renonce à bourse pour l’année N.

Autrement, une fois, avoir vérifié que l’étudiant n’a pas de dossier pour l’année N, merci de nous transmettre le ticket reprenant le modèle ci-dessous :
`,
        bullets: [
          "Nom :",
          "Prénom :",
          "Date de naissance :",
          "Numéro INE :",
          "Crous de gestion :",
          "Phrase explicative :",
        ],
      },
    ],
    keyword: "ticket",
  },
  {
    id: 3,
    title: "Informations générales",
    paragraphs: [
      {
        id: 1,
        title: `Transfert de dossier`,
        text: "Uniquement pour les dossiers avec l’activation V. Les transferts ne peuvent être effectués que par le Crous sortant.",
        bullets: [],
      },
      {
        id: 2,
        title: `Étudiant qui travaille`,
        text: "Pas plus de 20H de travail hebdomadaire (sensibiliser l’étudiant sur l’importance de l’assiduité sinon il devra rembourser...).",
        bullets: [],
      },
      {
        id: 3,
        title: `Toujours prendre la nationalité de l’étudiant`,
        text: "(Pour les doubles nationalités = français), si l’étudiant est français et que les parents vivent à l’étranger, indiquer à l’étudiant qu’il y aura une demande consulaire.",
        bullets: [],
      },
      {
        id: 4,
        title: `Diplôme Universitaire PAREO`,
        text: "(Passeport pour Réussir et s’Orienter) : Est le seul DU l’habilité à recevoir des boursiers du Crous. Cette remontée est indiquée comme non habilitée dans Aglaé, vous devrez donc demander le certificat de l’année N à l’étudiant et transmettre le dossier pour une mise en paiement.",
        bullets: [],
      },
      {
        id: 5,
        title: `AED (Assistants d’Éducation)`,
        text: "Les AED ont le droit à une dérogation aux règles de revenus avec une mise en paiement de leur bourse en échelon 2 minimum. Pour cela nous devons avoir le contrat de travail signé sur l’année N de la demande de bourse. Si le contrat a été signé sur les années précédente nous devrons disposer d’une attestation employeur sur l’année N. Si les documents sont conformes vous pourrez transmettre la demande pour une mise en paiement de sa bourse.",
        bullets: [],
      },
      {
        id: 6,
        title: `Les certificats de scolarité justifiant des points de charge fratrie`,
        text: "Du 15/01 au 31/08 demander le certificat de scolarité N-1 de l’année de la demande. A’ partir de septembre, demander certificat de scolarité l’année N de la demande (ex : instruction d’un DSE en octobre 2022, demander certificat de scolarité de la fratrie 2022/2023). Si vous constatez qu’un frère ou qu’une sœur est en fin de cursus sur son certificat de scolarité de N-1 de la demande, veuillez n’ajouter que deux points et demander à l’étudiant de fournir le certificat de scolarité de sa fratrie de l’année N dès qu’il l’aura.",
        bullets: [],
      },
      {
        id: 7,
        title: `Un droit consommé`,
        text: "Un droit de bourse est consommé au moment où l’étudiant a reçu une mensualité.",
        bullets: [],
      },
      {
        id: 8,
        title: `La bourse`,
        text: "accordée aux étudiants confrontés à des difficultés matérielles, elle constitue une aide complémentaire à celle de la famille (ne se substitue pas à l’aide OBLIGATOIRE des parents, Article 371-2 du code civil). La bourse ne peut être accordée que pour une inscription en initial dans un établissement habilité (toujours vérifier sur structure).",
        bullets: [],
      },
      {
        id: 9,
        title: `Étudiants mariés`,
        text: "Si le couple déclare plus de 90% d’un Salaire Minimum de Croissance (SMIC) et qu’ils ont joint l’acte de mariage, nous pouvons prendre en compte les revenus du couple. Ils peuvent fournir l’AF commun N-2 ou le plus récent. Si l’étudiant s’est marié l’année N de la demande, il doit nous fournir l’acte de mariage et ses bulletins de payes.",
        bullets: [],
      },
      {
        id: 10,
        title: `Brexit`,
        text: "Durant la période de transition (jusqu’au 30/06/2021), les conditions actuelles restes inchangées (mêmes conditions que pour les étudiants européens). Nous attendons plus d’informations sur les modalités d’accueil des étudiants britanniques après cette période.",
        bullets: [],
      },
      {
        id: 11,
        title: `Étudiants avec plusieurs Identifiant National Étudiant (INE)`,
        text: "Un étudiant français ne doit avoir qu’un INE (indiqué sur son relevé de note du bac), si vous constatez que l’étudiant en a plusieurs, vous devez lui indiquer qu’il doit se rapprocher de son Crous de gestion pour faire supprimer le second INE. Pour un étudiant ayant eu son bac dans un établissement étranger et disposant de plusieurs INE, il devra utiliser celui qui a été fourni par son premier établissement français d’inscription.",
        bullets: [],
      },
      {
        id: 12,
        title: `Les comptes bancaires européens`,
        text: "Les comptes bancaires européens sont acceptés, l’étudiant doit renseigner les informations SEPA.",
        bullets: [],
      },
      {
        id: 13,
        title: `Modification de RIB `,
        text: `seul l’étudiant peut modifier ces coordonnées bancaires en se connectant à son dossier sur MSE.gouv.fr. Si l’étudiant a un compte français il doit renseigner son IBAN complet avec les lettres en majuscules et confirmer. Attention si l’étudiant à un compte français il ne doit pas renseigner l’information SEPA sinon il sera bloqué. Si l’étudiant à un compte européen, il ne doit renseigner que le SEPA.
          Dans tous les cas, l’étudiant doit indiquer l’ancien RIB / SEPA à la suite pour confirmer la modification. S’il n’est pas en mesure de les renseigner, l’étudiant peut se déplacer à son Crous de gestion muni d’une pièce d’identité pour demander ces anciennes coordonnées bancaires (aucune information bancaire au téléphone).
          `,
        bullets: [],
      },
      {
        id: 14,
        title: `Frais de dossier`,
        text: "lors de la constitution du DSE, l’étudiant doit payer 4 euros de frais de dossier. Le paiement peut s’effectuer en ligne avec une carte bancaire (direct ou en différé). Si l’étudiant n’a pas pu payer en carte bancaire et qu’il a un dossier « classique » il peut joindre avec son dossier, un chèque à l’ordre de l’agent comptable de son Crous de gestion. Si l’étudiant n’a pas eu la possibilité de payer par carte bancaire ou chèque, il peut se déplacer à l’agence comptable de son Crous de gestion pour les payer directement (liquide accepté).",
        bullets: [],
      },
      {
        id: 15,
        title: `Le master MEEF`,
        text: "La BCS peut se cumuler avec la rémunération versée dans le cadre des stages réalisés par les étudiants préparant les concours enseignants ou la rémunération versée dans le cadre des parcours alternés au sein de masters existants intégrant une préparation aux concours enseignants. Dans les 2 cas précités, les étudiants ont la qualité de contractuels de droit public. En revanche, les étudiants faisant le choix d’un master par la voie de l’apprentissage ne peuvent bénéficier d’une BCS. La BCS est aussi cumulable avec la rémunération servie aux professeurs contractuels alternants inscrits en 1ère année de master MEEF.",
        bullets: [],
      },
    ],
    keyword: "info",
  },
  {
    id: 4,
    title: "Réponse types mails",
    paragraphs: [
      {
        id: 1,
        title: "AIDE AU MÉRITE",
        text: "L’aide au mérite n’apparaît jamais sur la notification conditionnelle. Elle apparaîtra sur votre notification définitive.",
        bullets: [],
      },
      {
        id: 2,
        title: "AIDE MOBILITÉ PARCOURSUP",
        text: "Je vous invite à adresser votre demande à l'adresse suivante : « amp@crous-paris.fr »",
        bullets: [],
      },
      {
        id: 3,
        title: "AIDE MOBILITÉ MASTER",
        text: "Pour bénéficier de l'aide à la mobilité master, il faut avoir validé un diplôme national de licence en 2021/2022 et vous inscrire en diplôme national de master en 2022/2023, ce qui n'est pas votre cas. Par conséquent, vous ne pouvez pas y prétendre. Vous pouvez déposer les documents relatifs à l'aide à la mobilité master dans le suivi de votre dossier social étudiant 2022/2023, via la rubrique « Suivie du DSE » sur le site MesServicesEtudiants.",
        bullets: [
          "Attestation de réussite du diplôme de licence N-1 de la demande",
          "Certificat de scolarité en première année de diplôme national de Master en université",
        ],
      },
      {
        id: 4,
        title: "AIDE PONCTUELLE ",
        text: "Vous pourrez demander, si jamais vous rencontrez des difficultés financières, une demande d'aide ponctuelle. Voici le lien expliquant comment formuler cette aide : ",
        bullets: ["https://youtu.be/h5qfFf3ErTM"],
      },
      {
        id: 5,
        title: "ARRÊTS ETUDES",
        text: "Merci de déposer une attestation sur l'honneur, datée et signée, précisant la date d'arrêt de vos études dans le suivi de votre DSE.",
        bullets: [],
      },
      {
        id: 6,
        title: "ATTESTATIONS SUR L’HONNEUR",
        text: "Merci de téléverser une attestation sur l’honneur précisant cette situation dans le suivi de votre DSE. ",
        bullets: [],
      },
      {
        id: 7,
        title: "CHANGEMENT ÉTABLISSEMENT ",
        text: `Il faut d'abord vous désinscrire de votre première inscription et demander à ce qu'ils annulent la remontée d'inscription qu'ils ont effectué au CROUS. 
        Également, il faut que votre nouvel établissement effectue une remontée d'inscription.
        `,
        bullets: [],
      },
      {
        id: 8,
        title: "CHANGEMENT INE ",
        text: "Merci de nous fournir un document attestant de votre nouvel INE en réponse à ce message. A` transférer aux responsables quand document transmis",
        bullets: [
          "Changement d'INE ",
          "Ancien INE :",
          "Nouvel INE : ",
          "L'étudiant a déposé un justificatif dans son message",
        ],
      },
      {
        id: 9,
        title: "CHANGEMENT DE VŒU",
        text: `L'établissement a été ajouté et une notification conditionnelle vous a été renvoyée. Pensez à vérifier vos spams et courriers indésirables.

        Si jamais vous êtes sûr d'aller dans cet établissement, merci de nous le préciser afin que nous vous transférions au CROUS de ? qui deviendra seul compétent sur votre dossier de bourse.

        - Les informations pour modifier les vœux :

        Pour procéder à la modification ou l'ajout de votre vœu, veuillez téléverser dans le suivi de votre dossier social étudiant ou en envoyant un mail via l’Assistance un document PDF reprenant les informations suivantes : 
        `,
        bullets: [
          "Le nom du nouvel établissement",
          "Le code UAI RNE du nouvel établissement (à demander OBLIGATOIREMENT à la scolarité)",
          "Le nom de la formation",
          "Le cursus",
          "Le niveau d'étude",
        ],
      },
      {
        id: 10,
        title: "ÉTABLISSEMENT HABILITÉ",
        text: "Il vous faut demander à votre établissement s'il est bien affilié au Crous.",
        bullets: [
          "Les bourses d'enseignement supérieur sur critères sociaux ne peuvent être attribuées qu'aux étudiants, en formation initiale suivant des études à temps plein, dans une formation habilitée à recevoir des boursiers par le ministère de l'enseignement .",
          "La formation que vous envisagez de suivre n'est pas habilitée pour le ou les vœux suivant(s) :",
        ],
      },
      {
        id: 11,
        title: "UAI-RNE ",
        text: "Le code UAIRNE que vous avez communiqué ne correspond pas à la formation souhaitée.",
        bullets: [],
      },
      {
        id: 12,
        title: "CONSEIL DE L’EUROPE",
        text: `Merci de nous indiquer le pays, la ville, le nom de l'établissement ainsi que la formation, le cursus et le niveau d'études. Nous vérifierons alors si l'établissement est habilité à la bourse. Si jamais c'est bien habilité, il vous faudra nous fournir un justificatif de domicile ainsi qu'un certificat de scolarité avec la mention "Temps Plein" dans votre DSE. Pour ce faire, allez dans la rubrique « Suivie du DSE » via le site MesServicesEtudiants.`,
        bullets: [],
      },
      {
        id: 13,
        title: "FIN DE CURSUS",
        text: "Vous êtes en fin de cursus, vous pourrez bénéficier du complément grandes vacances lorsque vous nous aurez déposé votre certificat de scolarité 22/23 dans votre dossier social étudiant 21/22.",
        bullets: [],
      },
      {
        id: 99,
        title: "CONDITION POUR PRENDRE REVENU D’UN SEUL PARENT",
        text: "Pour que nous prenions en compte que les revenus d’un seul de vos parents et que nous ne demandions pas de document vis-à-vis de votre autre parent, il/elle doit justifier du statut de « parent isolé ». Cette lettre T doit être rajoutée dans la case Cas particulier se trouvant sur la 2ème page de l'avis fiscal et signifie qu'une personne est parent isolé. Si jamais elle ne s'y trouve pas, alors vous devrez demander un avis rectificatif de l'avis fiscal du parent en question des revenus 2020 auprès du centre d'impôts et leur demander qu'il corrige cette erreur et que votre parent soit mentionné en parent isolé, se traduisant par la lettre T. Deux documents sont acceptés pour justifier de cette situation :",
        bullets: [
          "La perception de l'ALLOCATION de SOUTIEN FAMILIAL (ASF) de la part de la CAF",
          "La lettre T sur l'avis fiscal.",
        ],
      },
      {
        id: 14,
        title: "CONDITION POUR PRENDRE REVENU DE L’ÉTUDIANT",
        text: "Seuls les étudiants dans l’une de ces situations peuvent voir la bourse calculée sur leurs propres revenus. Autrement, ce sont les revenus des parents qui sont pris en compte. ",
        bullets: [
          "Étudiant marié : avis fiscal du couple s’ils déclarent au moins 90% d’un SMIC",
          "Étudiant avec un enfant",
          "Étudiant réfugié",
          "Étudiant orphelin de ses deux parents ou étudiant pupille de la Nation",
          "Étudiant à l’Aide Sociale à l’Enfance (ASE)",
        ],
      },
      {
        id: 15,
        title: "CONTESTATION RBG ",
        text: `Le RBG (Revenu Brut Global) de l'année 2021/2022 où nous avons pris les revenus perçus en 2019 est de ?. 
        Les revenus pris en compte pour l'année scolaire 2022/2023 sont ceux de 2020 et s’élèvent à ?. 
        Cela justifie la diminution de l’échelon. 
        `,
        bullets: [],
      },
      {
        id: 16,
        title: "REVENUS 99999",
        text: "Lorsque des 9 sont ajoutés devant le Revenu Brut Global (RBG), c'est une procédure de mise en attente suite à une demande de pièces complémentaires faite par les gestionnaires et le bon revenu sera indiqué une fois le dossier validé.",
        bullets: [],
      },
      {
        id: 17,
        title: "COMPLÉMENT GRANDES VACANCES",
        text: `Le complément grandes vacances a été ajouté et une nouvelle notification définitive vous a été renvoyée pour attester du changement. Pensez à vérifier vos spams et vos courriers indésirables.
        Afin de percevoir la bourse pendant les grandes vacances vous devez vous trouver dans l'une des situations suivantes : `,
        bullets: [
          "Parents de l’étudiant ou tuteur résidant dans les DOM-TOM",
          "Étudiant français ou européen lorsque les parents ou tuteur légal résident à l’étranger, à l’exception des pays de l’UE / Suisse / pays riverains de la Méditerranée",
          "Étudiant pupille de l’État / de la Nation",
          "Étudiant orphelin de ses deux parents",
          "Étudiant réfugié",
          "Étudiant qui a bénéficié ou qui bénéficie de l’aide sociale à l’enfance (ASE)",
        ],
      },
      {
        id: 18,
        title: "REFUS DU COMPLEMENT GRANDES VACANCES",
        text: "Vous êtes en fin de cursus, vous pourrez bénéficier du complément grandes vacances lorsque vous nous aurez déposé votre certificat de scolarité 22/23 dans votre dossier social étudiant 21/22.",
        bullets: [
          "Les stages obligatoires de fin de cursus pendant l’été ne permettent pas de bénéficier du complément grandes vacances.",
        ],
      },
      {
        id: 19,
        title: "DÉLAI DE TRAITEMENT",
        text: "Votre dossier est en cours de traitement depuis le ?, vous recevrez un retour de notre part dès qu'il sera traité. Au vu du nombre de dossiers de bourse à traiter, les délais peuvent aller de 2 à 3 mois.",
        bullets: [],
      },
      {
        id: 20,
        title: "RADIATION PÔLE EMPLOI ",
        text: "",
        bullets: [
          "Si vous étiez inscrite au Pôle Emploi : une attestation tamponnée par les services du Pôle Emploi, indiquant que VOUS ne figurez pas, ou plus sur les listes de demandeurs d'emploi (dans ce dernier cas la DATE DE RADIATION devra être indiquée)",
          "Si vous n'étiez pas inscrite au Pôle Emploi et vous étiez scolarisée l'année 21/22 : il faut transmettre votre certificat de scolarité",
          "Si vous n'étiez pas inscrite au Pôle Emploi et vous n'étiez pas scolarisée l'année 21/22 : une attestation sur l'honneur de non-inscription au Pôle Emploi et de non-scolarisation pour ladite année",
          "Ces pièces sont à fournir dans le suivi de votre dossier.",
        ],
      },
      {
        id: 21,
        title: "DEMANDE DE SUSPENSION DE BOURSE ",
        text: "Si jamais vous souhaitez arrêter votre bourse, vous devez procéder à deux étapes :",
        bullets: [
          "Rédiger une attestation sur l'honneur demandant la suspension de votre bourse (à déposer dans votre dossier de bourse via la rubrique Suivie du DSE)",
          "Demander à votre établissement qu'il effectue une annulation d'inscription auprès du Crous",
        ],
      },
      {
        id: 22,
        title: "ASSIDUITÉ",
        text: `Concernant la bourse en tant que telle, votre établissement va contrôler votre assiduité et si vous ne l'êtes pas, vous aurez à la rembourser. Vous pouvez bien évidemment justifier de votre assiduité mais cela se fera auprès de votre établissement, pas du Crous.
        S'il vous considère assidu, vous n'aurez rien à rembourser. Je vous invite à vous rapprocher de lui pour vérifier votre assiduité.`,
        bullets: [],
      },
      {
        id: 23,
        title: "AUCUN DOCUMENT ASSISTANCE",
        text: "Aucun document ne peut être traité via la messagerie MSE. Merci de bien vouloir déposer vos documents dans le suivi de votre dossier social étudiant.",
        bullets: [],
      },
      {
        id: 24,
        title: "ERREUR DESTINATAIRE CROUS",
        text: "Votre dossier de bourse est rattaché au Crous de ?, seul compétent pour traiter votre dossier de bourse. Je vous invite à prendre contact avec ce dernier pour obtenir de plus amples informations.",
        bullets: [],
      },
      {
        id: 25,
        title: "ERREUR DESTINATAIRE LOGEMENT",
        text: "Pour contacter le service logement, merci de contacter le service compétent en sélectionnant sur l’assistance MSE l’onglet « logement ».",
        bullets: [],
      },
      {
        id: 26,
        title: "ERREUR DESTINATAIRE SOCIAL",
        text: "Pour contacter le service CVEC, merci de contacter le service compétent en sélectionnant sur l’assistance MSE l’onglet « Contribution vie étudiante ».",
        bullets: [],
      },
      {
        id: 27,
        title: "ERREUR DESTINATAIRE IZLY",
        text: "Merci de contacter le service compétent à l’adresse mail suivante :",
        bullets: [
          "Paris : assistance-izly@crous-paris.fr",
          "Créteil : assistance-izly@crous-creteil.fr / support.izly@crous-créteil.fr",
          "Versailles : assistance-izly@crous-versailles.fr",
        ],
      },
      {
        id: 28,
        title: "AMP",
        text: "Je vous invite à contacter le service compétent à l'adresse mail suivante : amp@crous-paris.fr",
        bullets: [],
      },
      {
        id: 29,
        title: "AILE",
        text: "Merci de contacter le service compétent à l'adresse mail suivante : aile@crous-paris.fr",
        bullets: [],
      },
      {
        id: 30,
        title: "ERREUR INFORMATIQUE",
        text: "Je vous invite à essayer l'une des solutions suivantes : ",
        bullets: [
          "Changer d'appareil",
          "Changer de navigateur",
          'Faire la demande en mode "navigation privée"',
          "Supprimer les cookies, et vider le cache de votre navigateur",
          "Si vous utilisez un MacBook, il convient de ne pas utiliser le navigateur safari. Aussi, veillez à avoir au préalable bien renseigné la catégorie socio-professionnelle de vos parents.",
        ],
      },
      {
        id: 31,
        title: "IBAN",
        text: "Pour ajouter un RIB, vous devez aller dans la rubrique 'Suivie du DSE' et dans l'onglet Saisir/Modifier mes coordonnées bancaires.",
        bullets: ["L'IBAN SEPA correspond aux comptes bancaires européens."],
      },
      {
        id: 32,
        title: "NOTIFICATION CONDITIONNELLE ",
        text: `La notification conditionnelle ne peut être envoyée que si le dossier est validé.

        Votre dossier est validé et une notification conditionnelle, en attestant, vous a été envoyée le ?. Je viens de vous la renvoyer. Pensez à vérifier vos spams ainsi que vos courriers indésirables.
        
        Je vous invite à avancer les frais d'inscription et vous pourrez demander à être remboursé auprès de votre établissement, pas du Crous.
        Concernant la CVEC, elle vous est remboursée dans un délai maximum de 3 mois après le premier versement de la bourse.
        `,
        bullets: [],
      },
      {
        id: 33,
        title: "NOTIFICATION DEFINITIVE",
        text: `La notification définitive de bourse vous sera envoyée dès lors que l'établissement dans lequel vous êtes inscrits aura procéder à une remontée d'inscription via le logiciel APOGEE ou SCOLA. Une fois cette procédure effectuée, vous recevrez votre notification définitive.
        Pour que votre établissement effectue cette remontée d'inscription, il est nécessaire de leur envoyer votre notification conditionnelle.
        `,
        bullets: [],
      },
      {
        id: 34,
        title: "PAIEMENT DE LA BOURSE",
        text: `Le versement a été effectué le ?. Les délais interbancaires sont entre 10/15 jours. Merci de patienter. 

        Les paiements sont indiqués en prévisionnel et vous seront versés à la prochaine tournée de bourse. Merci de patienter.
        `,
        bullets: [],
      },
      {
        id: 35,
        title: "PAIEMENT DES FRAIS DE DOSSIER",
        text: `Merci de bien vouloir nous déposer le ticket de paiement reçu par mail dans le suivi de votre dossier social étudiant. 
        Pour déposer des documents dans votre DSE, allez sur le site MesServicesEtudiants puis dans la rubrique "Suivie du DSE".
        `,
        bullets: [],
      },
      {
        id: 36,
        title: "POINTS DE CHARGE",
        text: "Nous avons rajouté des points de charge relatifs au fait que votre frère/soeur soit dans l'enseignement supérieur et une nouvelle notification conditionnelle vous a été renvoyée. Pensez à vérifier vos spams et courriers indésirables.",
        bullets: [],
      },
      {
        id: 37,
        title: "CERTIFICAT DE SCOLARITÉ",
        text: `Nous avons rajouté des points de charge relatifs à vos frères/soeurs et une nouvelle notification conditionnelle vous a été renvoyée. Pensez à vérifier vos spams et courriers indésirables.
        Il sera nécessaire de nous fournir les certificats de vos frères/soeurs de l'année scolaire 2022/2023 dans votre DSE DES QUE VOUS LES AUREZ pour que les points de charge ne soient pas retirés. 
        Pour déposer des documents dans votre DSE, allez sur le site MesServicesEtudiants puis dans la rubrique "Suivie du DSE".
        `,
        bullets: [],
      },
      {
        id: 38,
        title: "DEMANDE DE RECTIFICATION",
        text: `Sur l'avis d'imposition de vos parents, 1 enfant à charge y est déclaré et il existe une présomption que c'est vous.
        Pour la renverser, il vous faut soit nous fournir une déclaration fiscale des revenus 2020, soit votre avis d'imposition 2021 se rapportant aux revenus 2020. 
        
        S'il s'agit d'une erreur, merci de vous rapprocher de votre centre des impôts pour obtenir un rectificatif et nous le transmettre le cas échéant.
        `,
        bullets: [],
      },
      {
        id: 39,
        title: "NOUVEL ENFANT",
        text: "Pour que l’on prenne en compte l’enfant qui s'est ajouté à votre famille, vous devez nous fournir les justificatifs. Pour déposer des documents dans votre DSE, allez sur le site MesServicesEtudiants puis dans la rubrique Suivie du DSE.",
        bullets: [
          "L'acte de naissance de l'enfant né",
          "Attestation sur l'honneur de vos parents indiquant qu'ils vont le rattacher fiscalement sur leur prochain avis fiscal.",
        ],
      },
      {
        id: 40,
        title: "RENDEZ-VOUS SOCIAL",
        text: `Si vous êtes dans une situation compliquée, vous pouvez solliciter le service social de votre Crous qui vous accompagnera et vous orientera éventuellement sur une aide spécifique.

        Pour le service social de Crous de Paris, les prises de rendez-vous se font directement sur le site MesServicesEtudiant la rubrique « Prendre rendez-vous avec les Crous ». Il faut choisir le service social et réserver un créneau pour un rendez-vous présentiel ou téléphonique.`,
        bullets: [],
      },
      {
        id: 41,
        title: "RENDEZ-VOUS GESTIONNAIRE",
        text: `Je vous invite à prendre rendez-vous avec un gestionnaire de bourse de votre Crous de gestion via votre espace MSE.

        Pour cela, il faut aller sur le site MesServicesEtudiant et cliquer sur "Prendre RDV avec les Crous". Vous devez réservez un créneau et on va vous contacter par téléphone.`,
        bullets: [],
      },
      {
        id: 42,
        title: "MODIFIER VOS INFORMATIONS",
        text: "Afin de modifier vos informations, merci de joindre votre pièce d’identité (carte d’identité/passeport/permis de conduire) recto-verso en réponse à ce message.",
        bullets: [],
      },
      {
        id: 43,
        title: "PROBLÈME MOT DE PASSE SUR MSE ",
        text: `Les informations ont été modifiées.
        Vous pouvez réessayer de nouveau la procédure de réinitialisation de mot de passe.
        `,
        bullets: [],
      },
      {
        id: 44,
        title: "RECOURS",
        text: "Votre dossier a été instruit en fonction des pièces que vous nous avez déposées, si la décision ne vous satisfait pas, vous pouvez exercer un recours gracieux auprès du recteur de l’académie de Paris, vous trouverez les informations nécessaires pour exercer ce droit en page 3 de votre notification de bourse. ",
        bullets: [],
      },
      {
        id: 45,
        title: "REMONTÉE D’INSCRIPTION",
        text: "Je vous ai renvoyé la notification conditionnelle pour que vous demandiez à votre établissement, via le logiciel APOGEE ou SCOLA, d'effectuer une remontée d'inscription. Pensez à vérifier vos courriers indésirables ainsi que vos spams. ",
        bullets: [],
      },
      {
        id: 46,
        title: "RÉVISION",
        text: `Nous ne pouvons faire de révision sur une simple baisse de revenus.

        Merci de nous indiquer si vos parents sont dans l'une de ces situations durant l'année en cours et nous vous indiquerons les documents nécessaires.
Dans tous les cas, nous prendrons en compte l'avis fiscal n-2 de l'année en cours.
Pour déposer des documents dans votre DSE, allez sur le site MesServicesEtudiants puis dans la rubrique "Suivie du DSE".


        Les révisions doivent concerner :
        `,
        bullets: [
          "Un arrêt maladie",
          "Le chômage",
          "Un divorce",
          "Un décès",
          "La retraite dans le privé",
          "La retraite dans le public",
          "Un surendettement",
          "Redressement judiciaire ou liquidation judiciaire",
          "Réduction du temps de travail",
          "Congés sans traitement, sans solde ou parental",
          "Mise en disponibilité",
        ],
      },
      {
        id: 47,
        title: "SAISIR UNE DEMANDE DE BOURSE",
        text: "Concernant les délais de constitution de dossier de bourse :",
        bullets: [
          "Les dossiers faits avant le 15 mai sont traités en priorité.",
          "Pour ceux après le 15 mai, ils ne sont pas prioritaires, vous avez jusqu'au 31 décembre 2022 mais passé la date du 31 octobre, le rappel des mois précédents ne sera pas versé.",
        ],
      },
      {
        id: 48,
        title: "RENOUVELLEMENT",
        text: `Vous devez saisir une demande de bourse pour l'année scolaire 2022/2023, cela ne se renouvelle pas tout seul.
        Pour ce faire, allez sur le site MesServicesEtudiants, puis dans la rubrique "Saisir une demande de bourse".
        `,
        bullets: [],
      },
      {
        id: 49,
        title: "DÉBLOQUER SITUATION",
        text: `La situation est débloquée afin que vous puissiez constituer une demande de bourse. Pour ce faire, allez sur le site MesServicesEtudiants puis dans la rubrique "Saisir une demande de bourse".`,
        bullets: [],
      },
      {
        id: 50,
        title: "UKRAINE",
        text: "Une ligne téléphonique a été mise en place pour les étudiants ukrainiens sur la ville de Paris : 01 40 51 36 19 (horaire de 9h à 17h en évitant le créneau de 12h30-14h00).",
        bullets: [],
      },
      {
        id: 51,
        title: "PARENT REMARIÉ",
        text: `Afin de vous assurer une réponse précise concernant votre demande de bourse, je vous conseille de constituer un dossier social étudiant à partir du 15 mars sur le site MesServicesEtudiant. Il est important de noter que le traitement de votre dossier dépendra des pièces justificatives que vous fournirez.

        Soyez informé que le Crous utilise obligatoirement les revenus des parents de l'étudiant pour calculer l'échelon de la bourse. Dans certains cas particuliers, les revenus d'un seul parent peuvent être pris en compte, comme dans le cas où le parent est isolé. Pour cela, il faudra fournir le jugement de divorce avec la mention de garde exclusive pour la mère et de pension alimentaire versée par le père, l'avis d'imposition 2022 sur les revenus de 2021 de la mère avec la lettre "T", ou l'attestation de l'allocation de soutien familial accordée à la mère par la CAF datant de moins de 3 mois.
        
        Il est également important de noter que lorsque le nouveau conjoint prend fiscalement en charge un ou plusieurs enfants étudiants issus du premier mariage de son conjoint, le droit à la bourse de ces étudiants doit être examiné en fonction des ressources du nouveau couple. Dans ce cas, le Crous peut prendre en compte les revenus du nouveau couple ainsi que ceux du père biologique, selon le rattachement fiscal de l'étudiante et les justificatifs de séparation.
        
        Toutefois, afin de pouvoir vous fournir une analyse complète sur votre situation, nous devons notamment examiner l'ensemble des pièces justificatives que vous fournirez dans votre dossier social étudiant.`,
        bullets: [],
      },
      {
        id: 52,
        title: "MÉRITE RÉGIONALE",
        text: `La Région offre une aide au mérite aux jeunes Franciliens issus de familles à faibles revenus qui viennent d'obtenir le bac avec mention « très bien » et qui poursuivent leurs études en Île-de-France.

        La Région versera aux étudiants éligibles, par l'intermédiaire du Crous de Paris, la bourse régionale d'un montant de 1.000 euros au cours de l'année universitaire 2022-2023.

        Une fois ces conditions remplies, il n'y a aucune démarche à accomplir. Pour bénéficier de cette Aide au mérite régionale, il faut :
        `,
        bullets: [
          "Avoir obtenu le bac 2022 avec mention « très bien » en Île-de-France",
          "Résider en Île-de-France",
          "Être inscrit à la rentrée 2022-2023 dans un établissement d'enseignement supérieur ou de formation sanitaire et sociale situé en Île-de-France",
          "Être attributaire de la bourse sur critères sociaux (BCS), versée par les Centres régionaux des œuvres universitaires et scolaires (Crous) des académies de Paris, Versailles ou Créteil",
        ],
      },
      {
        id: 53,
        title: "INFLATION",
        text: "Merci de nous transmettre la pièce ci-dessous en fonction de votre situation pour que votre dossier soit réétudié pour l'ajout de l'aide à inflation.",
        bullets: [
          "Si vous avez un compte CAF (Caisse Allocation Familiale) : Copie écran des versements effectués par la CAF de septembre à novembre 2022",
          "Si ce n'est pas le cas et vous n'avez pas de compte CAF : Une attestation sur l’honneur indiquant que vous n’avez reçu aucune indemnité inflation provenant de la CAF.",
          "Ces pièces sont à fournir dans le suivi de votre dossier social étudiant sur le site MesServicesEtudiant.",
        ],
      },
      {
        id: 54,
        title: "BOURSE ÉTUDIANT ÉTRANGER",
        text: `Le ministère français de l'Enseignement supérieur et de la recherche attribue également des bourses sur critères sociaux à certains étudiants étrangers. Pour y être éligibles, ils doivent résider en France depuis au moins deux ans et y avoir domicilié leur foyer fiscal.

        Si vous rentrez dans ces conditions, vous pourrez faire une demande de bourse à partir de 15 mars qui sera étudiée par un gestionnaire.

        Les critères pour en bénéficier pour un étudiant étranger hors union-européenne :
        `,
        bullets: [
          "Justifier de sa présence en France pour au moins 2 ans par un des documents suivants:",
          "Copie du plus vieux titre de séjour;",
          "Copie de récépissé titre de séjour;",
          "3 derniers certificats de scolarité;",
          "Attestation de la préfecture avec temps de présence en France obligatoirement;",
          "Copie du plus ancien titre de circulation pour mineur.",
          "Justifier les ressources de ses parents ou de son tuteur légal avec l'avis fiscal sur les revenus de l'année N-2 en France (avis d'impôt sur les revenus de 2021 pour le dossier 2023). Il faut également avoir été rattaché au moins une fois sur l’avis fiscal français de ses parents ou du tuteur (avec jugement de tutelle obligatoire).",
        ],
      },
      {
        id: 55,
        title: "PARENTS ISOLÉ",
        text: `Le Crous utilise obligatoirement les revenus des parents de l'étudiant pour calculer l'échelon de la bourse. Nous pouvons néanmoins utiliser les revenus d'un parent dans le cas où ce parent est isolé.

        Cette situation pourrait justifier par un des documents suivants :
        `,
        bullets: [
          "Le jugement de divorce avec la mention de garde exclusive pour votre mère et de pension alimentaire versée par votre père;",
          "L'attestation de l'allocation soutien familial (ASF) de la CAF datant de moins de 3 mois;",
          'Avis d\'imposition sur les revenus de 2021 de votre mère (et pas votre père) avec le statut parent isolé avec la lettre "T".',
        ],
      },
      {
        id: 56,
        title: "RÉTROACTIVITÉ",
        text: `En cas de demande de bourse postérieure au 31 octobre, le droit à bourse est ouvert à compter du mois suivant celui où l'étudiant a produit l'ensemble des documents nécessaires à l'instruction de sa demande. L'octroi de la bourse n'a pas de caractère rétroactif. Il en est de même pour tout dossier déposé antérieurement au 31 octobre dont les pièces justificatives nécessaires à l'instruction de la demande parviennent au Crous après cette date.`,
        bullets: [],
      },
      // {
      //   id: 31,
      //   title: "",
      //   text: "",
      //   bullets: [],
      // },
    ],
    keyword: "mail",
  },
];
