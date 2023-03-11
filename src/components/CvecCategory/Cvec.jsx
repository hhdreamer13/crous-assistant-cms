import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cvec = () => {
  const data = [
    {
      id: 1,
      name: "Introduction",
      link: "cvec/introduction",
    },
    {
      id: 2,
      name: "Exonération",
      link: "cvec/exonération",
    },
    {
      id: 3,
      name: "Paiement de la CVEC",
      link: "cvec/paiement",
    },
    {
      id: 4,
      name: "FAQ de la CVEC",
      link: "cvec/faq",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Sélectionnez le service de votre demande :
        </p>
        <ul>
          {data.map(({ id, name, link }) => {
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

export default Cvec;
