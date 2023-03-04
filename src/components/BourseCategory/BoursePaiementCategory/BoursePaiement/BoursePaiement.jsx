import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BoursePaiement = () => {
  const paiementSteps = [
    {
      id: 1,
      name: "Notification définitive",
      link: "bourse/paiement/notification-définitive",
    },
    {
      id: 2,
      name: "Étudiant dans un pays membre du Conseil de l’Europe",
      link: "bourse/paiement/conseil-europe",
    },
    {
      id: 3,
      name: "Refus et suspension de la bourse",
      link: "bourse/paiement/refus-suspension",
    },
    {
      id: 4,
      name: "Révision",
      link: "bourse/paiement/révision",
    },
    {
      id: 5,
      name: "Recours",
      link: "bourse/paiement/recours",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Selectionnez le service de votre demande :
        </p>
        <ul>
          {paiementSteps.map(({ id, name, link }) => {
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

export default BoursePaiement;
