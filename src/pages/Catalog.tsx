import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { Game } from "../types/Game";
import { getGames } from "../services/gameApi";
import "./Catalog.css";
import Footer from "../components/footer";

function Catalog() {
  const [games, setGames] = useState<Game[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [sort, setSort] = useState("title");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(function () {
    async function loadGames() {
      try {
        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error(error);
        setError("Impossible de charger les jeux.");
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearch(searchInput.trim());
  }

  const genres: string[] = [];

  games.forEach(function (game) {
    if (!genres.includes(game.genre)) {
      genres.push(game.genre);
    }
  });

  genres.sort();

  const filteredGames = games.filter(function (game) {
    const gameTitle = game.title.toLowerCase();
    const gameDeveloper = game.developer.toLowerCase();
    const searchText = search.toLowerCase();

    if (genre !== "all" && game.genre !== genre) {
      return false;
    }

    if (gameTitle.includes(searchText)) {
      return true;
    }

    if (gameDeveloper.includes(searchText)) {
      return true;
    }

    return false;
  });

  filteredGames.sort(function (a, b) {
    if (sort === "price-asc") {
      return a.price - b.price;
    }

    if (sort === "price-desc") {
      return b.price - a.price;
    }

    if (sort === "title-desc") {
      return b.title.localeCompare(a.title);
    }

    return a.title.localeCompare(b.title);
  });

  return (
    <main className="catalog-page">
      <section className="catalog-container">
        <div className="catalog-intro">
          <h1>Explorez notre catalogue</h1>

          <p>
            Découvrez notre collection de jeux vidéo. Retrouvez leurs
            descriptions, leurs genres, leurs développeurs et leurs prix.
          </p>
        </div>

        <form className="catalog-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Rechercher un jeu..."
            value={searchInput}
            onChange={function (event) {
              setSearchInput(event.target.value);
            }}
          />

          <button type="submit">Rechercher</button>
        </form>

        <div className="catalog-controls">
          <div className="catalog-control">
            <label htmlFor="genre">Filtrer par genre</label>

            <select
              id="genre"
              value={genre}
              onChange={function (event) {
                setGenre(event.target.value);
              }}
            >
              <option value="all">Tous les genres</option>

              {genres.map(function (item) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="catalog-control">
            <label htmlFor="sort">Trier les jeux</label>

            <select
              id="sort"
              value={sort}
              onChange={function (event) {
                setSort(event.target.value);
              }}
            >
              <option value="title">Nom : A à Z</option>
              <option value="title-desc">Nom : Z à A</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        <div className="catalog-heading">
          <h2>Tous les jeux</h2>

          <p>{filteredGames.length} jeux trouvés</p>
        </div>

        {loading && <p>Chargement des jeux...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && filteredGames.length === 0 && (
          <p>Aucun jeu trouvé.</p>
        )}

        {!loading && !error && (
          <ul className="catalog-grid">
            {filteredGames.map(function (game) {
              return (
                <li key={game.id}>
                  <a className="catalog-card" href={`/games/${game.id}`}>
                    <img src={game.image} alt={game.title} loading="lazy" />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <section className="catalog-bottom">
        <h2>Un jeu vous intéresse ?</h2>

        <p>
          Cliquez sur la jaquette d'un jeu pour découvrir sa fiche détaillée,
          son genre, son prix et son développeur.
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default Catalog;
