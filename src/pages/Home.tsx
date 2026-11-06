import GameList from "../components/GameList";
import "./Home.css";
import Footer from "../components/footer";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">CATALOGUE DE JEUX VIDÉO</p>

          <h1>
            Découvrez votre
            <span> prochain jeu</span>
          </h1>

          <p className="hero-description">
            Explorez notre catalogue de jeux vidéo et retrouvez facilement
            toutes les informations essentielles : description, genre, prix,
            développeur, date de sortie et bien plus encore.
          </p>

          <a className="catalog-button" href="/games">
            Voir le catalogue
          </a>
        </div>
      </section>

      <section className="discover">
        <div className="section-heading">
          <p>NOTRE SÉLECTION</p>
          <h2>À découvrir</h2>
          <span></span>
        </div>

        <GameList />

        <p className="discover-description">
          Découvrez une nouvelle sélection de jeux à chaque visite.
        </p>
      </section>

      <section className="features">
        <div className="section-heading">
          <p>LE CATALOGUE</p>
          <h2>Toutes les infos en un coup d'œil</h2>
          <span></span>
        </div>

        <div className="feature-list">
          <div className="feature">
            <span className="feature-number">01</span>
            <h3>Genre</h3>
            <p>
              Identifiez rapidement le style de chaque jeu et trouvez ceux
              qui correspondent à vos préférences.
            </p>
          </div>

          <div className="feature">
            <span className="feature-number">02</span>
            <h3>Prix</h3>
            <p>
              Retrouvez le prix de chaque jeu directement depuis sa fiche
              détaillée.
            </p>
          </div>

          <div className="feature">
            <span className="feature-number">03</span>
            <h3>Développeur</h3>
            <p>
              Découvrez les studios à l'origine de vos jeux préférés et les
              informations principales de chaque titre.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;