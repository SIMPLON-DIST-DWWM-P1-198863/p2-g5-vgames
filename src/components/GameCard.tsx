import type { Game } from "../types/Game";

type GameCardProps = {
  game: Game;
};

function GameCard({ game }: GameCardProps) {
  return (
    <article>
      <img src={game.image} alt={game.title} />

      <h2>{game.title}</h2>

      <p>{game.genre}</p>

      <p>{game.developer}</p>
    </article>
  );
}

export default GameCard;