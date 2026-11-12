import "./header.css";
import logo from "../assets/logo-vgx.png";
function Header() {
  return (
    <header className="header">
      <div className="header__burger">
        <Burger />
      </div>
      <div className="header__logo">
        <a href="/">
          <img src={logo} alt="Retour à l'accueil" />
        </a>
      </div>
      <div className="header__search">
        <Search />
      </div>
    </header>
  );
}

export default Header;
