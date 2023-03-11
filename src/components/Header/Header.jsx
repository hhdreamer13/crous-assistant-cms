import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <nav className="sticky z-50 w-full">
      <ul className="flex items-center justify-center gap-8">
        <li>
          <Link to="/" className="inline-block py-7 px-3">
            Accueil
          </Link>
        </li>
        <NavLinks />
      </ul>
    </nav>
  );
};

export default Header;
