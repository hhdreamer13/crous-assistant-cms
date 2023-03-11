import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logement = () => {
  const logementTitres = [
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
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Sélectionnez le service de votre demande :
        </p>
        <ul>
          {logementTitres.map(({ id, name, link }) => {
            return (
              <motion.li
                key={id}
                className="my-3 py-2"
                whileHover={{
                  scale: 1.3,
                  color: "#f87171",
                  originX: 0,
                }}
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

export default Logement;
