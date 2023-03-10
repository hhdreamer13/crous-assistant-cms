import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BourseRévision = () => {
  const situationÉtudiant = [
    {
      id: 1,
      name: "Maladie",
      link: "bourse/paiement/révision/maladie",
    },
    {
      id: 2,
      name: "Chômage",
      link: "bourse/paiement/révision/chômage",
    },
    {
      id: 3,
      name: "Divorce",
      link: "bourse/paiement/révision/divorce",
    },
    {
      id: 4,
      name: "Décès",
      link: "bourse/paiement/révision/décès",
    },
    {
      id: 5,
      name: "Retraite : pour le privé",
      link: "bourse/paiement/révision/retraite-privé",
    },
    {
      id: 6,
      name: "Retraite : pour la fonction publique",
      link: "bourse/paiement/révision/retraite-publique",
    },
    {
      id: 7,
      name: "Surendettement",
      link: "bourse/paiement/révision/surendettement",
    },
    {
      id: 8,
      name: "Redressement judiciaire ou liquidation judiciaire",
      link: "bourse/paiement/révision/redressement",
    },
    {
      id: 9,
      name: "Réduction du temps de travail",
      link: "bourse/paiement/révision/réduction",
    },
    {
      id: 10,
      name: "Congés sans traitement, sans solde ou parental",
      link: "bourse/paiement/révision/congés",
    },
    {
      id: 11,
      name: "Mise en disponibilité",
      link: "bourse/paiement/révision/disponibilité",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 pb-12 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Selectionnez le service de votre demande :
        </p>
        <ul>
          {situationÉtudiant.map(({ id, name, link }) => {
            return (
              <motion.li
                key={id}
                className="my-3 py-2"
                whileHover={{ scale: 1.3, color: "#f87171", originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`/${link}`}>
                  <button className="">{name}</button>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BourseRévision;
