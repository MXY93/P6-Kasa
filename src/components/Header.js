import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from '../AppContext';
import kasa from "../assets/kasa-logo.png";

export default function Header() {
  const { setShowSlideshow } = useAppContext();
  return (
    <header className="header">
      <img src={kasa} alt="logo Kasa" className="header__logo"/>
      <nav>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setShowSlideshow(false)}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
