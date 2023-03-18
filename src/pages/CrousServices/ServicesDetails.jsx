import { useParams, useLocation } from "react-router-dom";
import SelectionMenu from "../../components/SelectionMenu";
import slugify from "../../utils/slugify";

const ServicesDetails = () => {
  const data = [
    {
      id: 1,
      title: "Bourse",
      items: [
        {
          id: 1,
          name: "Constitution du DSE",
          link: "bourse/constitution",
        },
        {
          id: 2,
          name: "Instruction du DSE",
          link: "bourse/instruction",
        },
        {
          id: 3,
          name: "Paiement du DSE",
          link: "bourse/paiement",
        },
        {
          id: 4,
          name: "Aides complémentaires",
          link: "bourse/complémentaires",
        },
      ],
      keyword: "bourse",
    },
    {
      id: 2,
      title: "Logement",
      keyword: "logement",
      items: [
        {
          id: 1,
          name: "Introduction",
          link: "logement/introduction",
        },
        {
          id: 2,
          name: "Phase initiale",
          link: "logement/phase-initiale",
        },
        {
          id: 3,
          name: "Phase complémentaire",
          link: "logement/phase-complémentaire",
        },
        {
          id: 4,
          name: "Renouvellement",
          link: "logement/renouvellement",
        },
        {
          id: 5,
          name: "Principes généraux",
          link: "logement/info",
        },
        {
          id: 6,
          name: "Solution alternative",
          link: "logement/autre",
        },
      ],
    },
    {
      id: 3,
      title: "Social",
      keyword: "social",
      items: [
        {
          id: 1,
          name: "Introduction",
          link: "social/introduction",
        },
        {
          id: 2,
          name: "ASAA",
          link: "social/asaa",
        },
        {
          id: 3,
          name: "ASAP",
          link: "social/asap",
        },
      ],
    },
    {
      id: 4,
      title: "CVEC",
      keyword: "cvec",
      items: [
        {
          id: 1,
          name: "Introduction",
          link: "cvec/introduction",
        },
        {
          id: 2,
          name: "Exonération",
          link: "cvec/exonération",
        },
        {
          id: 3,
          name: "Paiement de la CVEC",
          link: "cvec/paiement",
        },
        {
          id: 4,
          name: "FAQ de la CVEC",
          link: "cvec/faq",
        },
      ],
    },
    {
      id: 5,
      title: "Autre",
      keyword: "autre",
      items: [
        {
          id: 1,
          name: "IZLY",
          link: "autre/izly",
        },
        {
          id: 2,
          name: "Informations générales",
          link: "autre/info",
        },
        {
          id: 3,
          name: "Faire un Ticket",
          link: "autre/ticket",
        },

        {
          id: 4,
          name: "Mail type",
          link: "autre/mail",
        },
      ],
    },
  ];
  const location = useLocation();
  const { service } = useParams();
  const [category] = data.filter(({ title }) => slugify(title) === service);

  return <SelectionMenu items={category.items} location={location} />;
};

export default ServicesDetails;
