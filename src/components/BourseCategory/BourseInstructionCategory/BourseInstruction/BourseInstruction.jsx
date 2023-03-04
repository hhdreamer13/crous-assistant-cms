import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BourseInstruction = () => {
  const instructionSteps = [
    {
      id: 1,
      name: "Justificatifs de ressources - Parents",
      link: "bourse/instruction/ressources-parents",
    },
    {
      id: 2,
      name: "Justificatifs de ressources - Étudiant",
      link: "bourse/instruction/ressources-étudiant",
    },
    {
      id: 3,
      name: "Points de charge - Fratrie",
      link: "bourse/instruction/points-fratrie",
    },
    {
      id: 4,
      name: "Points de charge - Distance",
      link: "bourse/instruction/points-distance",
    },
    {
      id: 5,
      name: "Modification de vœu",
      link: "bourse/instruction/voeu",
    },
    {
      id: 6,
      name: "Notification conditionelle",
      link: "bourse/instruction/notification-conditionelle",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Selectionnez le service de votre demande :
        </p>
        <ul>
          {instructionSteps.map(({ id, name, link }) => {
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

export default BourseInstruction;
