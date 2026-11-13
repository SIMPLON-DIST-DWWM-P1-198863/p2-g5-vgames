import { useEffect } from "react";
import { useState } from "react";
import "./favoris.css";
import "./favoris-desktop.css";

type Jeu = {
  id: number;
  title: string;
  image: string;
};

export default function favoris() {
  const [tousLesJeux, setTousLesJeux] = useState<Jeu[]>([]);

  useEffect(() => {
    async function chargerLesJeux() {
      const reponse = await fetch(
        "https://materiel-apprentissage.github.io/api/video-games.json",
      );
      const liste = await reponse.json();
      setTousLesJeux(liste);
    }
    chargerLesJeux();
  }, []);

  let mesFavoris: number[] = [];
  const texteSauvegarde = localStorage.getItem("favoris");
  if (texteSauvegarde) {
    mesFavoris = JSON.parse(texteSauvegarde);
  }

  const jeuxFavoris = tousLesJeux.filter((jeu) => mesFavoris.includes(jeu.id));

  if (jeuxFavoris.length === 0) {
    return (
      <main className="favoris">
        <h1 className="favoris-titre">Mes favoris</h1>
        <p className="favoris-vide">Aucun jeu en favori pour le moment.</p>
        <div className="favoris-basTxt">
          <h3 className="favoris-bas">
            Visiter notre catalogue pour découvrir de nouveaux jeux !
          </h3>
        </div>
      </main>
    );
  }

  return (
    <main className="favoris">
      <h1 className="favoris-titre">Mes favoris</h1>
      <ul className="favoris-liste">
        {jeuxFavoris.map((jeu) => (
          <li key={jeu.id} className="favoris-carte">
            <img src={jeu.image} alt={jeu.title} className="favoris-image" />
            <p className="favoris-nom">{jeu.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
