import { useState } from "react";
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
            <a href="/" onClick={() => setMenuOuvert(false)}>
              Accueil
            </a>
          </li>

          <li>
            <a href="/" onClick={() => setMenuOuvert(false)}>
              Jeux-vidéos
            </a>
          </li>

          <li>
            <a href="/" onClick={() => setMenuOuvert(false)}>
              Favoris
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;