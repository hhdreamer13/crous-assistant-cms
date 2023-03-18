import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import slugify from "../utils/slugify";

const SelectionMenu = ({ items, location }) => {
  const navigate = useNavigate();
  const url = location.pathname;
  return (
    <div className="mt-6 flex w-full items-start justify-center pb-20">
      <div className="relative flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <motion.button
          whileHover={{ scale: 1.3, color: "#f87171", originX: "center" }}
          className="absolute -left-10 mt-11"
          onClick={() => navigate(-1)}
        >
          <svg
            width="23px"
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#f8fafc"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002"
              stroke="#f8fafc"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.57 10.7701L7 9.19012L8.57 7.62012"
              stroke="#f8fafc"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
        <p className="my-10 text-2xl">
          Sélectionner l&apos;option qui vous convient :
        </p>
        <ul>
          {items.map(({ id, name }) => {
            return (
              <motion.li
                key={id}
                className="my-3 py-2"
                whileHover={{ scale: 1.3, color: "#f87171", originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`${url}/${slugify(name)}`}>
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

export default SelectionMenu;
