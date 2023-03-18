import { Link, Outlet } from "react-router-dom";
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <>
      <nav className="sticky z-50 w-full">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link to="/" className="inline-block py-7 px-3 hover:text-slate-50">
              Accueil
            </Link>
          </li>
          <NavLinks />
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
