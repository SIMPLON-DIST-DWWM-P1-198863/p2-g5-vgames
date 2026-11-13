import "./footer.css";
import "./desktop.css";
import logo from "../assets/logo-vgx.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import x from "../assets/x.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-gauche">
        <a href="/">
          <img src={logo} alt="Retour à l'accueil" className="logo" />
        </a>
      </div>

      <div className="footer-milieu">
        <a href="/contact" className="bouton-contact">
          Nous contacter
        </a>
      </div>

      <div className="footer-droite">
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="Facebook" className="reseaux" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={instagram} alt="Instagram" className="reseaux" />
        </a>
        <a href="https://www.tiktok.com" target="_blank">
          <img src={tiktok} alt="TikTok" className="reseaux" />
        </a>
        <a href="https://x.com" target="_blank">
          <img src={x} alt="X" className="reseaux" />
        </a>
      </div>
    </footer>
  );
}
