import { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <div className="burger-menu">
      <button
        className="burger-menu__button"
        onClick={() => setMenuOuvert(!menuOuvert)}
        aria-label="Ouvrir le menu"
      >
        {menuOuvert ? "✕" : "☰"}
      </button>

      <nav
        className={
          menuOuvert
            ? "burger-menu__nav burger-menu__nav--open"
            : "burger-menu__nav"
        }
      >
        <ul className="burger-menu__links">
          <li>
            <Link to="/" onClick={() => setMenuOuvert(false)}>
              Accueil
            </Link>
          </li>

          <li>
            <Link to="/" onClick={() => setMenuOuvert(false)}>
              Jeux-vidéos
            </Link>
          </li>

          <li>
            <Link to="/favoris" onClick={() => setMenuOuvert(false)}>
              Favoris
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;
