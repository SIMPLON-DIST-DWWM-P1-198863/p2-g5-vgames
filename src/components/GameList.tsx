import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import { getGames } from "../services/gameApi";
import "./GameList.css";

function GameList() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await getGames();

      const randomGames = [...data]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setGames(randomGames);
    };

    loadGames();
  }, []);

  return (
    <div className="game-list">
      {games.map((game) => (
        <a href={`/games/${game.id}`} key={game.id}>
          <img
            className="game-image"
            src={game.image}
            alt={game.title}
          />
        </a>
      ))}
    </div>
  );
}

export default GameList;