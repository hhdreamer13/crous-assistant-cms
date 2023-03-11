import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RessourcesParents = () => {
  const situationParents = [
    {
      id: 1,
      name: "Parents mariés / pacsés / concubins ",
      link: "bourse/instruction/ressources-parents/mariés",
    },
    {
      id: 2,
      name: "Parents divorcés / séparés",
      link: "bourse/instruction/ressources-parents/séparés",
    },
    {
      id: 3,
      name: "Parent isolé",
      link: "bourse/instruction/ressources-parents/isolé",
    },
    {
      id: 4,
      name: "Parent remarié",
      link: "bourse/instruction/ressources-parents/remarié",
    },
    {
      id: 5,
      name: "Parent inconnu",
      link: "bourse/instruction/ressources-parents/inconnu",
    },
    {
      id: 6,
      name: "Parent décédé",
      link: "bourse/instruction/ressources-parents/décédé",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Sélectionner l&apos;option qui vous convient :
        </p>
        <ul>
          {situationParents.map(({ id, name, link }) => {
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

export default RessourcesParents;
