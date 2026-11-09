/* import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_GAMESDB_API_KEY;

function SelectedGame() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Simulate an API call to fetch the selected game
    const fetchGame = async () => {
      try {
      const response = await fetch(
        `https://api.thegamesdb.net/v1/Games/ByGameName?apikey=${apiKey}&name=Zelda`,
      );
      const data = await response.json();
      setGame(data);
    } catch (error) {
      console.error("Erreur lors de la récupération du jeu :", error);
    }

    fetchGame();
  }, []);

  if (!game) {
    return <div>Chargement...</div>;
  }

  return (
    <main>
      <section className="game-infos">
        <div className="game-header">
          <img src={game.image} alt="Image du jeu" />

          <div className="game-details">
            <h1>{game.title}</h1>

            <button>♡</button>

            <p>Genre : {game.genre}</p>
            <p>Plateformes : {game.platforms}</p>
            <p>Date de sortie : {game.releaseDate}</p>
            <p>Développeur : {game.developer}</p>
            <p>Note : {game.rating}</p>
          </div>
        </div>
      </section>

      <section className="game-description">
        <h2>Description du jeu</h2>
        <p>Description à venir...</p>
      </section>

      <section className="game-suggestions">
        <h2>Suggestions de jeux</h2>
      </section>
    </main>
  );
}

export default SelectedGame */
