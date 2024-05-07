import { Link } from "react-router-dom";
import kasa from "../assets/kasa-logo.png";

export default function Header() {
  return (
    <header>
      <img src={kasa} alt="logo Kasa" className="header__logo"/>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
