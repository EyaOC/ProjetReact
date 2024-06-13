import LogoFooter from "../../images/LogoFooter.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <img className="logo_footer" src={LogoFooter} alt="Logo Kasa" />
      <p className="text_footer">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
