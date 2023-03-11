import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RessourcesÉtudiant = () => {
  const situationÉtudiant = [
    {
      id: 1,
      name: "ASE",
      link: "bourse/instruction/ressources-étudiant/ase",
    },
    {
      id: 2,
      name: "Réfugié",
      link: "bourse/instruction/ressources-étudiant/réfugié",
    },
    {
      id: 3,
      name: "Orphelin de ses deux parents",
      link: "bourse/instruction/ressources-étudiant/orphelin",
    },
    {
      id: 4,
      name: "Étudiant avec enfant",
      link: "bourse/instruction/ressources-étudiant/avec-enfant",
    },
    {
      id: 5,
      name: "Étudiant marié ou pacsé",
      link: "bourse/instruction/ressources-étudiant/étudiant-marié",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Sélectionner l&apos;option qui vous convient :
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

export default RessourcesÉtudiant;
