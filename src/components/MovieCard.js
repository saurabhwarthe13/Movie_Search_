import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function MovieCard({ movie, onSelect }) {
  const { addFavorite, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        onClick={onSelect}
      />
      <h3 onClick={onSelect}>{movie.Title}</h3>
      <button onClick={() => addFavorite(movie)} disabled={isFavorite}>
        {isFavorite ? "⭐ Added" : "⭐ Add to Favorites"}
      </button>
    </div>
  );
}

export default MovieCard;
