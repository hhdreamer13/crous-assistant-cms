import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BourseConstitution = () => {
  const constitutionSteps = [
    {
      id: 1,
      name: "Phase de la demande de bourse",
      link: "bourse/constitution/phases",
    },
    {
      id: 2,
      name: "Critères d'attribution",
      link: "bourse/constitution/critères",
    },
    {
      id: 3,
      name: "Conditions de nationalité",
      link: "bourse/constitution/nationalité",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Sélectionner l&apos;option qui vous convient :
        </p>
        <ul>
          {constitutionSteps.map(({ id, name, link }) => {
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

export default BourseConstitution;
