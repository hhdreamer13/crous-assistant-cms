import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <nav className="sticky z-50 w-full">
      <div className="flex items-center justify-around">
        <ul className="hidden items-center gap-8 font-[Poppins] md:flex">
          <li>
            <Link to="/" className="inline-block py-7 px-3">
              Accueil
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
