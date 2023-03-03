import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CrousServices = () => {
  const crousServices = [
    {
      id: 1,
      name: "Bourse",
      link: "bourse",
    },
    {
      id: 2,
      name: "Logement",
      link: "logement",
    },
    {
      id: 3,
      name: "Social",
      link: "social",
    },
    {
      id: 4,
      name: "CVEC",
      link: "cvec",
    },
    {
      id: 5,
      name: "Autre",
      link: "autre",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Selectionnez le service de votre demande :
        </p>
        <ul>
          {crousServices.map(({ id, name, link }) => {
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

export default CrousServices;
