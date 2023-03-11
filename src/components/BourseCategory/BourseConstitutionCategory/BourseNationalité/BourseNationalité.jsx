import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BourseNationalité = () => {
  const nationalitéÉtudiant = [
    {
      id: 1,
      name: "Étudiant français",
      link: "bourse/constitution/nationalité/français",
    },
    {
      id: 2,
      name: "Étudiant européen",
      link: "bourse/constitution/nationalité/européen",
    },
    {
      id: 3,
      name: "Étudiant hors-Europe",
      link: "bourse/constitution/nationalité/hors-europe",
    },
    {
      id: 4,
      name: "Étudiant Nouvelle-Calédonie / Polynésie française/ Saint-Martin",
      link: "bourse/constitution/nationalité/autres",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Sélectionner l&apos;option qui vous convient :
        </p>
        <ul>
          {nationalitéÉtudiant.map(({ id, name, link }) => {
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

export default BourseNationalité;
