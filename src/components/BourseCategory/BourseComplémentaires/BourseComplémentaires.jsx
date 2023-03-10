import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BourseComplémentaires = () => {
  const aidesComplémentaires = [
    {
      id: 1,
      name: "Aide au Mérite Nationale",
      link: "bourse/complémentaires/bm-nationale",
    },
    {
      id: 2,
      name: "Aide au Mérite Régionale",
      link: "bourse/complémentaires/bm-régionale",
    },
    {
      id: 3,
      name: "Complément Grandes Vacances",
      link: "bourse/complémentaires/cgv",
    },
    {
      id: 4,
      name: "Aide à la Mobilité Parcoursup",
      link: "bourse/complémentaires/amp",
    },
    {
      id: 5,
      name: "Aide à la Mobilité Master",
      link: "bourse/complémentaires/amm",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Selectionnez le service de votre demande :
        </p>
        <ul>
          {aidesComplémentaires.map(({ id, name, link }) => {
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

export default BourseComplémentaires;
