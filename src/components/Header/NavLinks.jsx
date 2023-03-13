import { Link } from "react-router-dom";
import { links } from "./MyLinks";
import { useState } from "react";

const NavLinks = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {links.map((link, i) => (
        <div key={i}>
          <div className="group px-3 text-left">
            <button
              className="group flex items-center justify-between py-7 pr-0 group-hover:text-slate-50"
              onClick={() => setShow(false)}
              onMouseOut={() => setShow(true)}
              onBlur={() => setShow(true)}
            >
              <Link to={link.link}>{link.name}</Link>
            </button>
            {link.submenu && (
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
                <div className="flex gap-10 bg-white p-5">
                  {link.sublinks.map((mysublinks, i) => (
                    <div key={i}>
                      {/* <button>{mysublinks.Head}</button> */}
                      {mysublinks.sublink.map((slink, i) => (
                        <li key={i} className="my-2.5 text-sm text-gray-600">
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
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
