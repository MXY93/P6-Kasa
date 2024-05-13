import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from '../AppContext';
import kasa from "../assets/kasa-logo.png";

export default function Header() {
  const { setShowSlideshow } = useAppContext();
  return (
    <header>
      <img src={kasa} alt="logo Kasa" className="header__logo"/>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => setShowSlideshow(false)}>Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
