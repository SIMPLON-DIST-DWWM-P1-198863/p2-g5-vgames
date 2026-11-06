import type { Game } from "../types/Game";

export const getGames = async (): Promise<Game[]> => {
  const response = await fetch("https://materiel-apprentissage.github.io/api/video-games.json");

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des jeux");
  }

  const data: Game[] = await response.json();

  return data;
};