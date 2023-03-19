import { Link } from "react-router-dom";
// import { links } from "./MyLinks";
import { useState } from "react";
import useNavLinks from "./useNavLinks";
import Loader from "../../components/Loader";

const NavLinks = () => {
  const [show, setShow] = useState(true);
  const { navLinks, isLoading } = useNavLinks();
  if (isLoading) {
    return <Loader />;
  }
  console.log(navLinks);

  return (
    <>
      {navLinks.map(({ id, name, link, subLink }) => (
        <div key={id} className="hidden md:block">
          <div className="group px-3 text-left">
            <button
              className="group flex items-center justify-between py-7 pr-0 group-hover:text-slate-50"
              onClick={() => setShow(false)}
              onMouseOut={() => setShow(true)}
              onBlur={() => setShow(true)}
            >
              <Link to={link}>{name}</Link>
            </button>
            <div
              className={
                show
                  ? "absolute top-16 hidden group-hover:block"
                  : "absolute top-16 hidden"
              }
            >
              <div className="py-3">
                <div className="absolute left-3 mt-1 h-4 w-4 rotate-45 bg-white"></div>
              </div>
              <div className="flex flex-col bg-white p-5">
                {subLink.map((slink) => (
                  <ul key={slink.id}>
                    <li className="my-2.5 text-sm text-gray-600">
                      <Link
                        to={slink.link}
                        className="normal-case"
                        onClick={() => setShow(false)}
                        onMouseOut={() => setShow(true)}
                        onBlur={() => setShow(true)}
                      >
                        {slink.name}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
