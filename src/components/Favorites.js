import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2>⭐ Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="movie-list">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <button onClick={() => removeFavorite(movie.imdbID)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
