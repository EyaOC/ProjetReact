import Logo from "../../images/Logo.jpg";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className="header_logo" src={Logo} alt="Logo Kasa" />
      </div>
      <div className="menu">
        <NavLink to="/" className="accueil">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="apropos">
          A propos    
        </NavLink>
      </div>
    </header>
  );
}
export default Header;
